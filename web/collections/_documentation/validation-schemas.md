---
layout: page
title: "Validation des schémas"
order: 2
---
# Validation des schémas

{:.no_toc}
- TOC
{:toc}

Seuls les schémas considérés comme valides sont intégrés sur `schema.data.gouv.fr`. Si votre schéma comporte plusieurs versions, seules les versions valides seront automatiquement intégrées.

Pour tous les types de schéma, il faut que :
- votre schéma soit sur un dépôt Git, à raison d'un dépôt par schéma. Ce dépôt doit pouvoir être clôné depuis Internet sans authentification préalable ;
- votre dépôt Git doit comporter des tags indiquant les versions de votre schéma. Ces versions doivent respecter la [gestion sémantique de version semver](https://semver.org/lang/fr/), sous la forme `1.3.2` par exemple ;
- votre dépôt doit comporter un fichier `README.md` à la racine contenant une documentation du schéma indiquant par exemple le contexte de production, la gouvernance ;
- passer avec succès les tests spécifiques au type de schéma que votre dépôt contient.

## Erreurs de validation
Dès lors qu'une version de votre schéma est considérée comme invalide, vous recevrez un e-mail à l'adresse e-mail déclarée lors de l'enregistrement de votre dépôt avec les erreurs. Une fois ces erreurs corrigées, votre schéma sera intégré sur `schema.data.gouv.fr` sans action supplémentaire de votre part.

## Validations spécifiques au format Table Schema
Les dépôts contenant des schémas au format [Table Schema](https://frictionlessdata.io/specs/table-schema/) subissent les validations supplémentaires suivantes :

- le schéma doit se trouver dans un fichier `schema.json` à la racine du dépôt ;
- le schéma doit respecter la spécification Table Schema ;
- la version déclarée dans le fichier `schema.json` doit être la même que le tag Git du dépôt ;
- le schéma comporte les clés supplémentaires suivantes à la racine du document JSON :
    + `title` : le titre du schéma. Exemple : `Base adresse locale` ;
    + `description` : une description du schéma. Exemple : `Spécification du modèle de données relatif aux adresses locales d’une collectivité (BAL)`;
    + `author` : l'auteur du schéma. Exemple : `OpenDataFrance` ;
    + `homepage` : une URL vers le dépôt Git contenant le schéma. Exemple : `https://git.opendatafrance.net/scdl/adresses`.

En prévision d'une évolution future de la spécification TableSchema, nous vous recommandons d'ajouter les clés supplémentaires suivantes à la racine du document JSON :
- `contact` : une adresse e-mail de contact. Exemple `info@etalab.gouv.fr`
- `version` : la version du schéma, respectant la [gestion sémantique de version semver](https://semver.org/lang/fr/). Exemple : `1.0.2` ;
- `created` : la date de création initiale du schéma, au format `YYYY-MM-DD`. Exemple : `2018-12-24` ;
- `updated` : la date de dernière mise à jour du schéma, au format `YYYY-MM-DD`. Exemple : `2018-12-28`.

## Validations spécifiques au format XML Schema Definition (XSD)
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

## Validations spécifiques au format JSON Schema
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
