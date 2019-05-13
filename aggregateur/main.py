# -*- coding: utf-8 -*-
import os
from functools import cmp_to_key

import exceptions
from validators import TableSchemaValidator
from notifications import EmailNotification
from errors import ErrorBag, ErrorsCache

import yaml
import toml
import giturlparse
from semver import VersionInfo, cmp as SemverCmp
from git import Repo as GitRepo
from git.exc import GitError


class Metadata(object):
    BASE_DOMAIN = "https://schema-datagouv.antoine-augusti.fr"

    def __init__(self):
        super(Metadata, self).__init__()
        self.data = {}

    def add(self, metadata):
        slug = metadata["slug"]
        if slug in self.data:
            self.data[slug]["versions"].append(metadata["version"])
            self.data[slug]["has_changelog"] = metadata["has_changelog"]
        else:
            special_keys = ["version", "slug"]
            self.data[slug] = {
                k: v for k, v in metadata.items() if k not in special_keys
            }
            self.data[slug]["versions"] = [metadata["version"]]

    def schema_url(self, slug):
        details = self.get()[slug]
        if details["type"] not in Repo.SCHEMA_TYPES:
            raise NotImplementedError
        return {
            "tableschema": "%s/schemas/%s/latest/%s"
            % (self.BASE_DOMAIN, slug, TableSchemaValidator.SCHEMA_FILENAME)
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

        # Save in TOML
        with open("data/schemas.toml", "w") as f:
            toml.dump(self.generate_toml(), f)

    def generate_toml(self):
        toml_data = {}
        for slug, details in self.data.items():
            toml_data[slug] = {
                "title": details["title"],
                "description": details["description"],
                "version": details["latest_version"],
                "doc_url": "https://schema.data.gouv.fr/%s/latest.html" % slug,
                "schema": self.schema_url(slug),
            }
        return toml_data


class Repo(object):
    SCHEMA_TYPES = ["tableschema"]

    def __init__(self, git_url, email, schema_type):
        super(Repo, self).__init__()
        parsed_git = giturlparse.parse(git_url)
        self.git_url = git_url
        self.owner = parsed_git.owner
        self.name = parsed_git.name
        self.email = email
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
        raise NotImplementedError

    def clone_or_pull(self):
        try:
            if os.path.isdir(self.clone_dir):
                git_repo = GitRepo(self.clone_dir)
                git_repo.remotes.origin.pull("refs/heads/master:refs/heads/origin")
            else:
                git_repo = GitRepo.clone_from(self.git_url, self.clone_dir)
        except GitError:
            raise exceptions.GitException(self, "Cannot clone or pull Git repository")

        self.git_repo = git_repo

    def tags(self):
        if self.git_repo is None or len(self.git_repo.tags) == 0:
            raise exceptions.NoTagsException(self, "Cannot found tags")
        versions = [self.parse_version(t.name) for t in self.git_repo.tags]
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
            self.git_repo.git.checkout(self.normalize_tag(tag))
        except GitError:
            raise exceptions.GitException(self, "Cannot checkout tag %s" % tag)
        self.current_tag = tag

    def normalize_tag(self, tag):
        tag_name = str(tag)
        if str(tag) not in list(map(str, self.git_repo.tags)):
            tag_name = "v" + str(tag)
        return tag_name

    def parse_version(self, version):
        try:
            return VersionInfo.parse(version.replace("v", ""))
        except ValueError:
            raise exceptions.InvalidVersionException(
                self, "Version was invalid: %s" % version
            )


errors = ErrorBag()

with open("repertoires.yml", "r") as f:
    config = yaml.safe_load(f)

metadata = Metadata()
for repertoire_slug, conf in config.items():
    try:
        repo = Repo(conf["url"], conf["email"], conf["type"])
        repo.clone_or_pull()
        tags = repo.tags()
    except exceptions.ValidationException as e:
        errors.add(e)
        continue

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
