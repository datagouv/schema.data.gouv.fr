import os
import shutil
import json

import exceptions

import tableschema
from table_schema_to_markdown import convert_source
import frontmatter


class BaseValidator(object):
    CHANGELOG_FILENAME = "CHANGELOG.md"

    def __init__(self, repo):
        super(BaseValidator, self).__init__()
        self.repo = repo
        self.git_repo = repo.git_repo

    @property
    def data_dir(self):
        current_dir = os.path.dirname(os.path.realpath(__file__))
        return os.path.join(current_dir, "data")

    @property
    def target_dir(self):
        return os.path.join(self.data_dir, self.repo.slug, self.repo.current_version)

    @property
    def target_latest_dir(self):
        return os.path.join(self.data_dir, self.repo.slug, "latest")

    def validate(self):
        self.check_file_exists("README.md")

    def extract(self):
        raise NotImplementedError

    def move_files(self, files):
        if not os.path.exists(self.target_dir):
            os.makedirs(self.target_dir)

        if not os.path.exists(self.target_latest_dir):
            os.makedirs(self.target_latest_dir)

        for filename, src_filepath in files.items():
            if src_filepath is None:
                continue
            front_matter = self.front_matter_for(filename)
            # Add YAML front matter if required
            if front_matter is not None:
                content = frontmatter.dumps(
                    frontmatter.load(src_filepath, **front_matter)
                )
                with open(self.target_filepath(filename), "w") as f:
                    f.write(content)
            else:
                shutil.copyfile(src_filepath, self.target_filepath(filename))

        # Always copy schema to latest directory since versions
        # are sorted
        shutil.copyfile(
            self.filepath(self.SCHEMA_FILENAME),
            self.target_latest_filepath(self.SCHEMA_FILENAME),
        )

    def check_file_exists(self, filename):
        if not os.path.isfile(self.filepath(filename)):
            message = "Required file %s was not found" % filename
            raise exceptions.MissingFileException(self.repo, message)

    def filepath_or_none(self, filename):
        if not os.path.isfile(self.filepath(filename)):
            return None

        return self.filepath(filename)

    def target_filepath(self, filename):
        return os.path.join(self.target_dir, filename)

    def target_latest_filepath(self, filename):
        return os.path.join(self.target_latest_dir, filename)

    def filepath(self, filename):
        return os.path.join(self.git_repo.working_dir, filename)

    def front_matter_for(self, filename):
        return None

    def is_latest_version(self):

        return self.repo.current_tag == self.repo.latest_valid_tag()


class TableSchemaValidator(BaseValidator):
    SCHEMA_FILENAME = "schema.json"

    def __init__(self, repo):
        super(TableSchemaValidator, self).__init__(repo)
        self.schema_data = None
        self.has_changelog = False

    def validate(self):
        super(TableSchemaValidator, self).validate()
        self.check_file_exists(self.SCHEMA_FILENAME)
        self.check_schema(self.SCHEMA_FILENAME)
        self.check_extra_keys()

    def extract(self):
        with open(self.filepath("documentation.md"), "w") as out:
            convert_source(self.filepath(self.SCHEMA_FILENAME), out)

        files = {
            self.SCHEMA_FILENAME: self.filepath_or_none(self.SCHEMA_FILENAME),
            "README.md": self.filepath_or_none("README.md"),
            "SEE_ALSO.md": self.filepath_or_none("SEE_ALSO.md"),
            "CONTEXT.md": self.filepath_or_none("CONTEXT.md"),
            "documentation.md": self.filepath("documentation.md"),
        }

        if self.is_latest_version():
            files[self.CHANGELOG_FILENAME] = self.filepath_or_none(
                self.CHANGELOG_FILENAME
            )

        self.move_files(files)

    def check_extra_keys(self):
        keys = [
            "title",
            "description",
            "author",
            "contact",
            "version",
            "created",
            "updated",
            "homepage",
        ]
        for key in [k for k in keys if k not in self.schema_json_data()]:
            message = "Key `%s` is a required key and is missing from %s" % (
                key,
                self.SCHEMA_FILENAME,
            )
            raise exceptions.InvalidSchemaException(self.repo, message)

    def check_schema(self, filename):
        try:
            tableschema.validate(self.filepath(filename))
        except tableschema.exceptions.ValidationError as e:
            errors = "; ".join(e.errors)
            message = "Schema %s is not a valid TableSchema schema. Errors: %s" % (
                filename,
                errors,
            )
            raise exceptions.InvalidSchemaException(self.repo, message)

    def front_matter_for(self, filename):
        version = self.repo.current_version
        slug = self.repo.slug

        if filename == "README.md":
            if self.is_latest_version():
                permalink = "/%s/%s.html" % (slug, "latest")
                redirect_from = "/%s/%s.html" % (slug, version)
            else:
                permalink = "/%s/%s.html" % (slug, version)
                redirect_from = None

            return {
                "permalink": permalink,
                "title": self.schema_json_data()["title"],
                "version": version,
                "homepage": self.schema_json_data()["homepage"],
                "redirect_from": redirect_from,
            }
        if filename == "documentation.md":
            if self.is_latest_version():
                permalink = "/%s/%s/documentation.html" % (slug, "latest")
                redirect_from = "/%s/%s/documentation.html" % (slug, version)
            else:
                permalink = "/%s/%s/documentation.html" % (slug, version)
                redirect_from = None

            return {
                "permalink": permalink,
                "title": self.schema_json_data()["title"],
                "version": version,
                "homepage": self.schema_json_data()["homepage"],
                "redirect_from": redirect_from,
            }
        if filename == self.CHANGELOG_FILENAME:
            if not self.is_latest_version():
                raise ValueError
            self.has_changelog = True
            permalink = "/%s/%s/changelog.html" % (slug, "latest")
            redirect_from = "/%s/%s/changelog.html" % (slug, version)

            return {
                "permalink": permalink,
                "title": "CHANGELOG de " + self.schema_json_data()["title"],
                "version": version,
                "homepage": self.schema_json_data()["homepage"],
                "redirect_from": redirect_from,
            }
        return None

    def schema_json_data(self):
        if self.schema_data is not None:
            return self.schema_data

        with open(self.filepath(self.SCHEMA_FILENAME)) as f:
            self.schema_data = json.load(f)
        return self.schema_data

    def metadata(self):
        return {
            "slug": self.repo.slug,
            "title": self.schema_json_data()["title"],
            "description": self.schema_json_data()["description"],
            "type": self.repo.schema_type,
            "email": self.repo.email,
            "version": self.repo.current_version,
            "has_changelog": self.has_changelog,
        }
