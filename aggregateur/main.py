# -*- coding: utf-8 -*-
import os
import locale
from functools import cmp_to_key

import exceptions
from config import BASE_DOMAIN
from validators import (
    TableSchemaValidator,
    XsdSchemaValidator,
    JsonSchemaValidator,
    GenericValidator,
)
from notifications import EmailNotification
from errors import ErrorBag, ErrorsCache

import yaml
import json
import giturlparse
from semver import VersionInfo, cmp as SemverCmp
from git import Repo as GitRepo
from git.exc import GitError
import requests


class Metadata(object):
    def __init__(self):
        super(Metadata, self).__init__()
        self.data = {}

    def add(self, metadata):
        slug = metadata["slug"]

        if slug in self.data:
            self.data[slug]["versions"].append(metadata["version"])
            self.data[slug]["has_changelog"] = metadata["has_changelog"]
        else:
            special_keys = ["version", "slug", "schemas"]
            self.data[slug] = {
                k: v for k, v in metadata.items() if k not in special_keys
            }
            self.data[slug]["versions"] = [metadata["version"]]

        # Updating schemas' metadata:
        # - if schema existed before: append version, update latest_url
        # - if not, add it to the list of schemas
        for schema in metadata["schemas"]:
            existing_schemas = self.data[slug].get("schemas", [])
            updated = False
            for existing_schema in existing_schemas:
                if existing_schema["path"] != schema["path"]:
                    continue
                updated = True
                existing_schema["versions"].append(metadata["version"])
                existing_schema["latest_url"] = schema["latest_url"]
            if not updated:
                schema["versions"] = [metadata["version"]]
                self.data[slug]["schemas"] = existing_schemas + [schema]

    def schema_url(self, slug):
        details = self.get()[slug]
        if details["type"] not in Repo.SCHEMA_TYPES:
            raise NotImplementedError
        return {
            "tableschema": "%s/schemas/%s/latest/%s"
            % (BASE_DOMAIN, slug, TableSchemaValidator.SCHEMA_FILENAME)
        }[details["type"]]

    def get(self):
        for slug, data in self.data.items():
            sorted_versions = sorted(data["versions"], key=cmp_to_key(SemverCmp))
            self.data[slug]["latest_version"] = sorted_versions[-1]
        return self.data

    def save_schemas(self):
        # Save in YAML
        with open("data/schemas.yml", "w") as f:
            yaml.dump(self.get(), f, allow_unicode=True)

        # Save in JSON
        with open("data/tableschema-schemas.json", "w") as f:
            json.dump(self.generate_json(), f, ensure_ascii=False)

        # Save in JSON
        with open("data/schemas.json", "w") as f:
            json.dump(self.generate_complete_json(), f, ensure_ascii=False)

    def generate_json(self):
        json_data = {
            "$schema": "https://opendataschema.frama.io/catalog/schema-catalog.json",
            "version": 1,
        }
        schemas = []

        for slug, details in self.data.items():
            if details["type"] != "tableschema":
                continue
            schemas.append(
                {
                    "name": slug,
                    "title": details["title"],
                    "description": details["description"],
                    "schema_url": self.schema_url(slug),
                }
            )

        json_data["schemas"] = schemas

        return json_data


    def generate_complete_json(self):
        json_data = {
            "$schema": "https://opendataschema.frama.io/catalog/schema-catalog.json",
            "version": 1,
        }
        schemas = []

        for slug, details in self.data.items():
            if details["type"] == "tableschema":
                schemas.append(
                    {
                        "name": slug,
                        "title": details["title"],
                        "description": details["description"],
                        "schema_url": self.schema_url(slug),
                        "schema_type": details["type"],
                    }
                )
            else:
                print(self.get()[slug]["latest_version"])
                schemas.append(
                    {
                        "name": slug,
                        "title": details["title"],
                        "description": details["description"],
                        "schema_url": self.get()[slug]["latest_version"],
                        "schema_type": details["type"],
                    }

                )

        json_data["schemas"] = schemas

        return json_data


class Repo(object):
    SCHEMA_TYPES = ["tableschema", "xsd", "jsonschema", "generic"]

    def __init__(self, git_url, email, schema_type, external_doc, external_tool):
        super(Repo, self).__init__()
        parsed_git = giturlparse.parse(git_url)
        self.git_url = git_url
        self.owner = self.find_owner(parsed_git)
        self.name = parsed_git.name
        self.email = email
        self.external_doc = external_doc
        self.external_tool = external_tool
        if os.path.isdir(self.clone_dir):
            self.git_repo = GitRepo(self.clone_dir)
        else:
            self.git_repo = None
        self.current_tag = None
        self.cache_latest_valid_tag = None
        if schema_type not in self.SCHEMA_TYPES:
            raise exceptions.InvalidSchemaTypeException(
                self,
                "`%s` is not a supported schema type. Supported: %s"
                % (schema_type, ",".join(self.SCHEMA_TYPES)),
            )
        self.schema_type = schema_type

    def find_owner(self, parsed_git):
        owner = parsed_git.owner
        # Case: /gitlab.com/arsante/atlasante
        # Output: arsante
        if owner.startswith("/gitlab.com"):
            return owner.split("/")[2]
        return owner

    @property
    def clone_dir(self):
        return os.path.join(self.repo_dir, self.owner, self.name)

    @property
    def repo_dir(self):
        current_dir = os.path.dirname(os.path.realpath(__file__))
        return os.path.join(current_dir, "repos")

    @property
    def slug(self):
        return "%s/%s" % (self.owner, self.name)

    @property
    def current_version(self):
        return str(self.current_tag)

    def validator(self):
        if self.schema_type == "tableschema":
            return TableSchemaValidator(self)
        elif self.schema_type == "xsd":
            return XsdSchemaValidator(self)
        elif self.schema_type == "jsonschema":
            return JsonSchemaValidator(self)
        elif self.schema_type == "generic":
            return GenericValidator(self)
        else:
            raise NotImplementedError

    def remote_available(self):
        if not self.git_url.startswith("http"):
            raise NotImplementedError(
                f"Can only check remote are available over HTTP. git_url is {git_url}"
            )

        try:
            r = requests.head(self.git_url, allow_redirects=True, timeout=15)
            return r.status_code == requests.codes.ok
        except requests.exceptions.RequestException:
            return False

    def clone_or_pull(self):
        if not self.remote_available():
            raise exceptions.GitException(self, "Cannot clone or pull Git repository")

        try:
            if os.path.isdir(self.clone_dir):
                git_repo = GitRepo(self.clone_dir)
                git_repo.remotes.origin.fetch(tags=True, force=True)
                git_repo.git.reset("--hard", "origin/master")
            else:
                git_repo = GitRepo.clone_from(self.git_url, self.clone_dir)
        except GitError:
            raise exceptions.GitException(self, "Cannot clone or pull Git repository")

        self.git_repo = git_repo

    def tags(self):
        if self.git_repo is None or len(self.git_repo.tags) == 0:
            raise exceptions.NoTagsException(self, "Cannot find tags")

        # Build a list of valid version names only.
        # Raise an exception only if the most recent
        # version name is invalid.
        versions = []
        for tag in self.git_repo.tags:
            try:
                versions.append(self.parse_version(tag.name))
            except exceptions.InvalidVersionException as e:
                if tag == self.git_repo.tags[-1]:
                    raise e

        return sorted(versions, key=cmp_to_key(SemverCmp))

    def latest_valid_tag(self):
        if self.cache_latest_valid_tag is not None:
            return self.cache_latest_valid_tag
        previous_tag = self.current_tag
        for tag in self.tags():
            try:
                self.checkout_tag(tag)
                self.validator().validate()
                self.cache_latest_valid_tag = tag
            except exceptions.ValidationException:
                continue
        self.checkout_tag(previous_tag)
        return self.cache_latest_valid_tag

    def checkout_tag(self, tag):
        try:
            self.git_repo.git.checkout(self.find_git_tag(tag))
        except GitError:
            raise exceptions.GitException(self, "Cannot checkout tag %s" % tag)
        self.current_tag = tag

    def find_git_tag(self, tag):
        def possible_tags(tag):
            # Examples:
            # Input: 1.0.1 ; Output: ['1.0.1', 'v1.0.1']
            # Input: 1.2.0 ; Output: ['1.2.0', 'v1.2.0', '1.2', 'v1.2']
            tags = [tag, "v" + tag, "V" + tag]
            if tag.endswith(".0"):
                tags.extend([tag[:-2], "v" + tag[:-2], "V" + tag[:-2]])
            return tags

        git_tags = list(map(str, self.git_repo.tags))
        for possible_tag in possible_tags(str(tag)):
            if possible_tag in git_tags:
                return possible_tag

        raise exceptions.InvalidVersionException(self, "Cannot find a tag %s" % tag)

    def parse_version(self, version):
        # Allow an extra leading v and/or a missing minor version
        possible_versions = [version.replace("v", "").replace("V",""), version.replace("v", "").replace("V","") + ".0"]

        for version in possible_versions:
            try:
                return VersionInfo.parse(version)
            except ValueError:
                continue

        raise exceptions.InvalidVersionException(
            self, "Version is invalid: %s" % version
        )


locale.setlocale(locale.LC_ALL, "fr_FR.UTF-8")

errors = ErrorBag()

with open("repertoires.yml", "r") as f:
    config = yaml.safe_load(f)

metadata = Metadata()
for repertoire_slug, conf in config.items():
    try:
        if("external_doc" not in conf):
            external_doc = None
        else:
            external_doc = conf['external_doc']
        if("external_tool" not in conf):
            external_tool = None
        else:
            external_tool = conf['external_tool']
        
        repo = Repo(conf["url"], conf["email"], conf["type"], external_doc,external_tool)
        
        repo.clone_or_pull()
        tags = repo.tags()
    except exceptions.ValidationException as e:
        errors.add(e)

    for tag in tags:
        try:
            repo.checkout_tag(tag)
            validator = repo.validator()
            validator.validate()
            validator.extract()
            metadata.add(validator.metadata())
        except exceptions.ValidationException as e:
            errors.add(e)

metadata.save_schemas()

print("### Errors by slug ###\n")

for slug, details in errors.errors_by_slug.items():
    messages = "\n".join(["  - " + repr(e) for e in details])
    print("%s:\n%s" % (slug, messages))

print("\n\n### Errors by email ###\n")
for email, details in errors.errors_by_email.items():
    messages = "\n".join(["- " + repr(e) for e in details])
    print("%s:\n%s" % (email, messages))

errors_cache = ErrorsCache()
for email, details in errors.errors_by_email.items():
    errors_cache.add_error(email, details)
    if len(details) > 0 and errors_cache.should_send_notification(email, details):
        EmailNotification(email, details).send()

errors_cache.save_cache()
