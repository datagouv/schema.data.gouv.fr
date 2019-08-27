---
layout: page
title: "Intégration avec d'autres systèmes"
order: 3
---
# Intégration avec d'autres systèmes
En tant que plateforme de référencement de schémas, `schema.data.gouv.fr` a vocation à être facilement utilisée par d'autres systèmes informatiques. Nous proposons plusieurs éléments à cet effet.

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
  description: Spécification du fichier d'échange relatif aux données concernant la
    localisation géographique et les caractéristiques techniques des stations et des
    points de recharge pour véhicules électriques
  email: info@data.gouv.fr
  has_changelog: true
  homepage: https://github.com/etalab/schema-irve
  latest_version: 1.0.2
  schemas:
  - original_path: schema.json
    path: schema.json
    title: Schéma IRVE
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
Les URLs des schémas valides sont propres au type de schéma. De manière générale, les URLs sont de la forme `https://schema.data.gouv.fr/schemas/{organisation}/{dépôt}/{fichier_schema}`.

La variable `{fichier_schema}` varie suivant le type du schéma. Voici les valeurs utilisées par type de schéma :
- pour `tableschema`, `{fichier_schema}` est `schema.json` ;
- pour `jsonschema`, `{fichier_schema}` dépend du nom choisi par le producteur pour chaque schéma. Vous pouvez retrouver les noms des différents schémas à l'aide du fichier `schemas.yml` ;
- pour `xsd`, `{fichier_schema}` dépend du nom choisi par le producteur pour chaque schéma. Vous pouvez retrouver les noms des différents schémas à l'aide du fichier `schemas.yml`.

Si vous souhaitez un lien vers la dernière version publiée d'un schéma, vous pouvez remplacer `{version}` par `latest`.
