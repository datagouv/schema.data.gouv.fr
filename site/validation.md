<br />

## Validation des schémas

Cette page décrit comment sont validés les schémas avant leur intégration sur `schema.data.gouv.fr` (et non comment utiliser des schémas pour valider des données).

Seuls les schémas considérés comme valides sont intégrés sur `schema.data.gouv.fr`. Si votre schéma comporte plusieurs versions, seules les versions valides seront automatiquement intégrées.

Pour tous les types de schéma, il faut que :
- votre schéma soit sur un dépôt Git, à raison d'un dépôt par schéma. Ce dépôt doit pouvoir être cloné depuis Internet sans authentification préalable ;
- votre dépôt Git doit comporter des tags indiquant les versions de votre schéma. Ces versions doivent respecter la [gestion sémantique de version semver](https://semver.org/lang/fr/), sous la forme `v0.1.2` par exemple ;
- votre dépôt doit comporter un fichier `README.md` à la racine contenant une documentation du schéma indiquant par exemple le contexte de production, la gouvernance ;
- passer avec succès les tests spécifiques au type de schéma que votre dépôt contient.

### Validations spécifiques au format Table Schema
Les dépôts contenant des schémas au format [Table Schema](https://frictionlessdata.io/specs/table-schema/) subissent les validations supplémentaires suivantes :

- le schéma doit se trouver dans un fichier `schema.json` à la racine du dépôt ;
- le schéma doit respecter la spécification [Table Schema](https://frictionlessdata.io/specs/table-schema/) ;
- la version déclarée dans le fichier `schema.json` doit être la même que le tag Git du dépôt ;
- le schéma comporte les [clés supplémentaires](https://specs.frictionlessdata.io/patterns/#table-schema-metadata-properties) suivantes à la racine du document JSON :
    + `name` : le nom technique du schéma (ou *slug*), en minuscules, sans caractères spéciaux autres que `-` et `_`. Exemple : `irve-statique` ;
    + `title` : le nom courant du schéma. Exemple : `Infrastructures de recharge de véhicules électriques` ;
    + `description` : la description du schéma. Exemple : `Spécification du fichier d'échange relatif aux données concernant la localisation géographique et les caractéristiques techniques des stations et des points de recharge pour véhicules électriques`;
    + `homepage` : l'URL vers le dépôt Git contenant le schéma. Exemple : `https://github.com/etalab/schema-irve`.
    + `version` : le numéro de version du schéma respectant la [gestion sémantique de version semver](https://semver.org/lang/fr/). Exemple : `v0.1.2` ;
    + `contributors` : les informations sur les auteurs du schéma. Exemple :
    ```json
    "contributors": [
        {
            "email": "info@data.gouv.fr",
            "organisation": "Etalab",
            "role": "author"
        },
    ]
    ```
Les clés suivantes ne font pas l'objet d'une validation mais leur utilisation est encouragée pour enrichir encore davantage la description de votre schéma :
- `path` : l'URL vers cette version du schéma. Exemple : `https://github.com/etalab/schema-irve/raw/v1.0.2/schema.json` ;
- `created` : la date de création initiale du schéma, au format `YYYY-MM-DD`. Exemple : `2018-06-29` ;
- `lastModified` : la date de publication de la dernière version du schéma, au format `YYYY-MM-DD`. Exemple : `2019-06-28` ;
- `resources` : des données tabulaires d'exemple, valides ou invalides. Exemple :
```json
"resources": [
    {
        "title": "Exemple de fichier IRVE valide",
        "path": "https://github.com/etalab/schema-irve/raw/v1.0.2/exemple-valide.csv"
    }
],
```
- `sources` : les documents, notamment juridiques, ayant servi de base au schéma. Exemple :
```json
"sources": [
    {
        "title": "Décret n° 2017-26 du 12 janvier 2017 relatif aux infrastructures de recharge pour véhicules électriques et portant diverses mesures de transposition de la directive 2014/94/UE du Parlement européen et du Conseil du 22 octobre 2014 sur le déploiement d’une infrastructure pour carburants alternatifs",
        "path": "https://www.legifrance.gouv.fr/jo_pdf.do?id=JORFTEXT000033860620"
    },
]
```

Afin de valider votre schéma, nous vous conseillons d'utiliser l'outil [Frictionless Framework](https://framework.frictionlessdata.io/) en ligne de commande.

```bash
# Création d'un environnement virtuel en Python 3
python3 -m venv venv
source venv/bin/activate

# Installation des dépendances
pip install frictionless

# Test de la validité d'un schéma
frictionless validate --type schema schema.json

# Test de la conformité d'un fichier par rapport à un schéma
frictionless validate --schema schema.json exemple-valide.csv
```

### Validations spécifiques au format XML Schema Definition (XSD)
Les dépôts contenant des schémas au format [XML Schema Definition](https://www.w3.org/TR/xmlschema11-1/) (XSD) subissent les validations supplémentaires suivantes :

- le dépôt doit comporter un fichier `schemas.yml` à la racine du dépôt spécifiant l'emplacement des schémas dans le dépôt ;
- les schémas doivent respecter la norme XSD 1.1.

Le fichier `schemas.yml` doit avoir le format suivant :
```yaml
title: "Le titre du schéma"
description : "Une description du schéma"
homepage: "https://example.com/home"
schemas:
  -
    path: "schemas/foo.xsd"
    title: "Une description de ce sous-schéma"
  -
    path: "schemas/bar.xsd"
    title: "Une description de ce sous-schéma"
```

### Validations spécifiques au format JSON Schema
Les dépôts contenant des schémas au format [JSON Schema](https://json-schema.org/) subissent les validations supplémentaires suivantes :

- le dépôt doit comporter un fichier `schemas.yml` à la racine du dépôt spécifiant l'emplacement des schémas dans le dépôt ;
- les schémas doivent respecter une des normes JSON Schema.

Le fichier `schemas.yml` doit avoir le format suivant :
```yaml
title: "Le titre du schéma"
description : "Une description du schéma"
homepage: "https://example.com/home"
schemas:
  -
    path: "schemas/foo.json"
    title: "Une description de ce sous-schéma"
  -
    path: "schemas/bar.json"
    title: "Une description de ce sous-schéma"
```

### Validations spécifiques au format générique

**Ce type de schéma est considéré comme un mode "dégradé". Il n'est à utiliser que lorsque le schéma à référencer ne peut possiblement pas être raccroché à un standard déjà supporté par schema.data.gouv.fr ou dont le support pourrait être implémenté**. Seule la documentation sera générée et aucun contrôle ne sera effectué sur la validité du schéma référencé.

Les dépôts contenant des schémas au format générique subissent les validations supplémentaires suivantes :

- le dépôt doit comporter un fichier `schema.yml` à la racine du dépôt décrivant le schéma ;
- ce fichier doit être un Yaml valide.

Le fichier `schema.yml` doit avoir le format suivant :
```yaml
title: Mon schéma très générique
description: Mon schéma très générique est vraiment très très bien.
homepage: https://github.com/example/generic-schema
version: v1.0.0
```

<br />
