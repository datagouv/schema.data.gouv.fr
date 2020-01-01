import requests
import yaml

GITHUB_API = "https://api.github.com"
REPO = "etalab/schema.data.gouv.fr"
PHASES = ["construction", "investigation"]


def prepare_issue(item):
    return {
        "title": item["title"],
        "created_at": item["created_at"],
        "url": item["html_url"],
        "nb_comments": item["comments"],
    }


def check_label_issues():
    r = requests.get(f"{GITHUB_API}/repos/{REPO}/labels")
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
r = requests.get(f"{GITHUB_API}/repos/{REPO}/issues")
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
