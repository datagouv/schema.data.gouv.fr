from pathlib import Path
import json
import sys
import logging

import yaml
import requests
import jsonschema

DATA_GOUV_API = "https://www.data.gouv.fr/api/1"
SCHEMAS_PATH = Path(__file__).parent / "../aggregateur/data/schemas.yml"
RECOMMENDATION_SCORE = 50
JSONSCHEMA_URL = "https://raw.githubusercontent.com/opendatateam/udata-recommendations/master/udata_recommendations/schema.json"

logger = logging.getLogger(__name__)


def consolidated_schemas():
    """Find TableSchema schemas that are consolidated"""
    with open(SCHEMAS_PATH) as f:
        schemas = yaml.safe_load(f)
    return {
        k: v
        for k, v in schemas.items()
        if v["type"] == "tableschema" and v["consolidation"]
    }


def datasets_for_schema(schema):
    """Fetch datasets on datagouv with the schema attribute set to a specific value"""
    ids = []
    url = f"{DATA_GOUV_API}/datasets?schema={schema}&page_size=100"
    while True:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        data = response.json()

        ids.extend([d["id"] for d in data["data"]])
        if data["next_page"] is None:
            break
        url = data["next_page"]

    return ids


def build_recommendation(consolidated_dataset_id, dataset_id):
    return {
        "id": dataset_id,
        "recommendations": [
            {"id": consolidated_dataset_id, "score": RECOMMENDATION_SCORE}
        ],
    }


def validate_recommendations(recommendations):
    """" Validate recommendations according to the JSON schema"""
    r = requests.get(JSONSCHEMA_URL, timeout=10)
    r.raise_for_status()
    schema = r.json()

    jsonschema.validate(recommendations, schema=schema)


def main():
    recommendations = []
    for schema_id, schema_details in consolidated_schemas().items():
        consolidated_dataset_id = schema_details["consolidation"]["dataset_id"]
        logger.info(
            f"Working on schema {schema_id}, consolidated on {consolidated_dataset_id}"
        )
        dataset_ids = datasets_for_schema(schema_id)
        logger.info(f"Found {len(dataset_ids)} associated with schema {schema_id}")
        for dataset_id in dataset_ids:
            recommendations.append(
                build_recommendation(consolidated_dataset_id, dataset_id)
            )

    validate_recommendations(recommendations)

    json.dump(recommendations, sys.stdout, indent=2)


if __name__ == "__main__":
    main()
