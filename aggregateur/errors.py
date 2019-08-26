# -*- coding: utf-8 -*-
import json
import datetime
from collections import defaultdict
from hashlib import md5

from exceptions import ValidationException


class ErrorsCache(object):
    CACHE_FILE = "cache/errors.json"
    TIME_DIFFERENCE_REPEAT_NOTIFICATION = datetime.timedelta(hours=48)

    def __init__(self):
        super(ErrorsCache, self).__init__()
        with open(self.CACHE_FILE) as json_file:
            self.errors = json.load(json_file)
        self.new_errors = {}

    def should_send_notification(self, email, exceptions):
        should_warn = self.is_new_error(email, exceptions) or self.is_too_old(email)
        if should_warn:
            self.set_error_time(email)
        else:
            self.set_old_error_time(email)
        return should_warn

    def is_new_error(self, email, exceptions):
        if email not in self.errors:
            return True
        return self.errors[email]["hash"] != self.new_errors[email]["hash"]

    def is_too_old(self, email):
        time_difference = datetime.datetime.utcnow() - datetime.datetime.fromisoformat(
            self.errors[email]["last_error"]
        )
        return time_difference >= self.TIME_DIFFERENCE_REPEAT_NOTIFICATION

    def add_error(self, email, exceptions):
        self.new_errors[email] = {"hash": self.hash(exceptions)}

    def set_error_time(self, email):
        self.new_errors[email]["last_error"] = datetime.datetime.utcnow().isoformat()

    def set_old_error_time(self, email):
        self.new_errors[email]["last_error"] = self.errors[email]["last_error"]

    def save_cache(self):
        with open(self.CACHE_FILE, "w") as outfile:
            json.dump(self.new_errors, outfile)

    def hash(self, exceptions):
        return md5(str(exceptions).encode("utf-8")).hexdigest()


class ErrorBag(object):
    def __init__(self):
        super(ErrorBag, self).__init__()
        self.errors_by_slug = defaultdict(list)
        self.errors_by_email = defaultdict(list)

    def add(self, exception):
        if not isinstance(exception, ValidationException):
            raise ValueError(
                "Exception should be a ValidationException got %s" % type(exception)
            )

        no_valid_tag, greater_version = False, False
        try:
            latest_valid_tag = exception.repo.latest_valid_tag()
            no_valid_tag = latest_valid_tag is None
            greater_version = (
                not no_valid_tag and exception.repo.current_tag > latest_valid_tag
            )
        except ValidationException:
            pass

        # Only keep exceptions related to repos without valid tags
        # or if tag is more recent than the latest valid one
        if no_valid_tag or greater_version:
            self.errors_by_slug[exception.repo.slug].append(exception)
            self.errors_by_email[exception.repo.email].append(exception)
