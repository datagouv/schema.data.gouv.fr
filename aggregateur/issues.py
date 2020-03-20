import yaml

import requests
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.retry import Retry

GITHUB_API = "https://api.github.com"
REPO = "etalab/schema.data.gouv.fr"
PHASES = ["construction", "investigation"]


def requests_retry_session(
    retries=3,
    backoff_factor=0.5,
    status_forcelist=[401, 402, 403, 500, 502, 504],
    session=None,
):
    session = session or requests.Session()
    retry = Retry(
        total=retries,
        read=retries,
        connect=retries,
        backoff_factor=backoff_factor,
        status_forcelist=status_forcelist,
    )
    adapter = HTTPAdapter(max_retries=retry)
    session.mount("http://", adapter)
    session.mount("https://", adapter)
    return session


def prepare_issue(item):
    return {
        "title": item["title"],
        "created_at": item["created_at"],
        "url": item["html_url"],
        "nb_comments": item["comments"],
        "labels": [l["name"] for l in item["labels"]],
    }


def check_label_issues():
    r = requests_retry_session().get(f"{GITHUB_API}/repos/{REPO}/labels")
    r.raise_for_status()

    names = set()
    found = 0
    for label in r.json():
        label_name = label["name"]
        names.add(label_name)
        for phase in PHASES:
            if phase in label_name:
                found += 1

    if found != len(PHASES):
        raise ValueError(
            f"Could not find appropriate label names. Looking for various phases: {str(PHASES)}. Issue names: {str(names)}"
        )


check_label_issues()
# See documentation:
# https://developer.github.com/v3/issues/#list-issues-for-a-repository
r = requests_retry_session().get(f"{GITHUB_API}/repos/{REPO}/issues")
r.raise_for_status()

issues = {}
for phase in PHASES:
    issues[phase] = []
data = r.json()

for item in data:
    for label in item["labels"]:
        for phase in PHASES:
            if phase in label["name"]:
                issues[phase].append(prepare_issue(item))

with open("data/issues.yml", "w") as f:
    yaml.dump(issues, f, allow_unicode=True)
