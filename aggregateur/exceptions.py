# -*- coding: utf-8 -*-
class ValidationException(Exception):
    def __init__(self, repo, message=None):
        if message is None:
            message = "An error occured with repo: %s" % repo
        self.repo = repo
        tag = repo.current_tag
        if repo.current_tag is not None:
            message = "[repo `%s` tag `%s`]: %s" % (repo.slug, tag, message)
        else:
            message = "[repo `%s` no tag]: %s" % (repo.slug, message)
        self.message = message
        super(ValidationException, self).__init__(message)

    def __repr__(self):
        return "%s: %s" % (self.__class__.__name__, self.message)


class GitException(ValidationException):
    pass


class NoTagsException(ValidationException):
    pass


class MissingFileException(ValidationException):
    pass


class InvalidVersionException(ValidationException):
    pass


class InvalidSchemaException(ValidationException):
    pass


class InvalidSchemaTypeException(ValidationException):
    pass
