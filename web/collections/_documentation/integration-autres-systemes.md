---
layout: page
title: "Intégration avec d'autres systèmes"
order: 5
---
# Intégration avec d'autres systèmes
En tant que plateforme de référencement de schémas, `schema.data.gouv.fr` a vocation à être facilement utilisée par d'autres systèmes informatiques. Nous proposons plusieurs éléments à cet effet.

{:.no_toc}
- TOC
{:toc}

## Export des schémas valides
Nous proposons à l'adresse <https://schema.data.gouv.fr/schemas/schemas.zip> une archive compressée au format ZIP comprenant les schémas considérés comme valides par la plateforme ainsi que les fichiers de documentation associés à chaque version des schémas.

Voici l'arborescence pour un unique schéma, `etalab/schema-irve`.

```bash
$ tree .
.
├── etalab
│   └── schema-irve
│       ├── 1.0.0
│       │   ├── README.md
│       │   ├── documentation.md
│       │   └── schema.json
│       ├── 1.0.1
│       │   ├── CHANGELOG.md
│       │   ├── CONTEXT.md
│       │   ├── README.md
│       │   ├── SEE_ALSO.md
│       │   ├── documentation.md
│       │   └── schema.json
│       └── latest
│           └── schema.json
├── schemas.toml
└── schemas.yml
```

Voici un extrait du fichier `schemas.yml` (accessible à l'adresse <https://schema.data.gouv.fr/schemas/schemas.yml>) :
```yaml
etalab/schema-irve:
  consolidation:
    dataset_id: 5448d3e0c751df01f85d0572
    tags:
    - irve
  description: Spécification du fichier d'échange relatif aux données concernant la
    localisation géographique et les caractéristiques techniques des stations et des
    points de recharge pour véhicules électriques
  email: info@data.gouv.fr
  has_changelog: true
  homepage: https://github.com/etalab/schema-irve
  latest_version: 1.0.2
  schemas:
  - latest_url: https://schema.data.gouv.fr/schemas/etalab/schema-irve/latest/schema.json
    original_path: schema.json
    path: schema.json
    title: Schéma IRVE
    versions:
    - 1.0.0
    - 1.0.1
    - 1.0.2
  title: Schéma IRVE
  type: tableschema
  versions:
  - 1.0.0
  - 1.0.1
  - 1.0.2
```

Un extrait du fichier `schemas.json` (accessible à l'adresse <https://schema.data.gouv.fr/schemas/schemas.json>), permettant l'intégration avec [Validata](https://validata.fr) :
```json
{
    "$schema":"https://opendataschema.frama.io/catalog/schema-catalog.json",
    "version":1,
    "schemas":[
        {
            "name":"etalab/schema-decp-dpa",
            "title": "Spécification du fichier de déclaration de profil d'acheteur",
            "description": "Spécification du fichier de déclaration de profil d'acheteur",
            "schema_url":"https://schema.data.gouv.fr/schemas/etalab/schema-decp-dpa/latest/schema.json"
        }
    ]
}
```

## URLs stables
Nous proposons des URLs stables permettant de proposer des liens vers notre plateforme.

Dans la documentation qui suit, nous utilisons plusieurs variables, définies de la manière suivante, suivant la syntaxe définie par la [RFC 6570](https://tools.ietf.org/html/rfc6570) :
- `{organisation}`, le nom de votre organisation ou utilisateur sur la forge que vous utilisez ;
- `{dépôt}`, le nom du dépôt contenant votre schéma ;
- `{version}`, la version du schéma que vous souhaitez, par exemple `1.2.3`.

### Documentation
Les URLs des documentations web sont de la forme suivante : `https://schema.data.gouv.fr/{organisation}/{dépôt}/{version}.html`.

Si vous souhaitez un lien vers la dernière version publiée d'un schéma, vous pouvez remplacer `{version}` par `latest`.

### Schémas
Les URLs des schémas valides sont propres au type de schéma. De manière générale, les URLs sont de la forme `https://schema.data.gouv.fr/schemas/{organisation}/{dépôt}/{version}/{fichier_schema}`.

La variable `{fichier_schema}` varie suivant le type du schéma. Voici les valeurs utilisées par type de schéma :
- pour `tableschema`, `{fichier_schema}` est `schema.json` ;
- pour `jsonschema`, `{fichier_schema}` dépend du nom choisi par le producteur pour chaque schéma. Vous pouvez retrouver les noms des différents schémas à l'aide du fichier `schemas.yml` ;
- pour `xsd`, `{fichier_schema}` dépend du nom choisi par le producteur pour chaque schéma. Vous pouvez retrouver les noms des différents schémas à l'aide du fichier `schemas.yml`.

Si vous souhaitez un lien vers la dernière version publiée d'un schéma, vous pouvez remplacer `{version}` par `latest`.

## Informations sur la consolidation

La consolidation de données par rapport à un schéma consiste à rassembler plusieurs jeux de données conformes à un schéma en un seul jeu de données. schema.data.gouv.fr s'intéresse à ces jeux de données consolidés.

Des informations à ce propos sont disponibles à l'adresse <https://etalab.github.io/monitor-consolidation/report.json>, au format JSON. Ces informations font état de la conformité la plus récente de jeux de données consolidés.

```json
{
   "5448d3e0c751df01f85d0572":{
      "date":"2020-05-25",
      "dataset_id":"5448d3e0c751df01f85d0572",
      "name":"Fichier consolidé des Bornes de Recharge pour Véhicules Électriques",
      "schema_slug":"etalab/schema-irve",
      "schema_version":"1.0.3",
      "file_url":"https://static.data.gouv.fr/resources/fichier-consolide-des-bornes-de-recharge-pour-vehicules-electriques/20200520-224356/bornes-irve-20200520.csv",
      "report_url":"https://go.validata.fr/table-schema?input=url&schema_url=https://schema.data.gouv.fr/schemas/etalab/schema-irve/1.0.3/schema.json&url=https://static.data.gouv.fr/resources/fichier-consolide-des-bornes-de-recharge-pour-vehicules-electriques/20200520-224356/bornes-irve-20200520.csv&repair=true",
      "nb_rows":12190,
      "nb_errors":4365,
      "nb_rows_with_errors":4018,
      "errors_report":"{\"structure-errors\": {\"count\": 1, \"count-by-code\": {\"extra-header\": 1}}, \"value-errors\": {\"count\": 4364, \"rows-count\": 4018, \"count-by-code\": {\"required-constraint\": 4245, \"type-or-format-error\": 117, \"pattern-constraint\": 2}, \"count-by-col-and-code\": {\"n_enseigne\": {\"required-constraint\": 403}, \"id_station\": {\"required-constraint\": 446}, \"puiss_max\": {\"type-or-format-error\": 114}, \"Ylatitude\": {\"type-or-format-error\": 1, \"required-constraint\": 2}, \"nbre_pdc\": {\"required-constraint\": 1910}, \"Xlongitude\": {\"required-constraint\": 2, \"type-or-format-error\": 2}, \"code_insee\": {\"required-constraint\": 917, \"pattern-constraint\": 2}, \"acces_recharge\": {\"required-constraint\": 3}, \"accessibilit\\u00e9\": {\"required-constraint\": 560}, \"n_station\": {\"required-constraint\": 2}}}, \"count\": 4365}",
      "status":"invalid",
      "error_percentage":35,
      "badge_url":"https://img.shields.io/static/v1?label=Consolidation&message=4365+erreurs&color=red&style=flat-square"
   }
}
```

La clé de l'objet JSON retourné (`5448d3e0c751df01f85d0572` ici) correspond à l'identifiant du jeu de données sur data.gouv.fr.

Pour rappel, des informations sur la consolidation sont disponibles dans le fichier `schemas.yml`, dans la clé `consolidation`.
