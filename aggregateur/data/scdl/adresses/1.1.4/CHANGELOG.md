---
permalink: /scdl/adresses/latest/changelog.html
redirect_from: /scdl/adresses/1.1.4/changelog.html
title: CHANGELOG de Base adresse locale
version: 1.1.4
---

# Changelog

# 1.1.4

Changements internes :

- utilisation des [métadonnées standardisées](https://github.com/frictionlessdata/specs/blob/master/specs/patterns.md#table-schema-metadata-properties)

# 1.1.3

Changements internes :

- ajout de la propriété `updated`
- intégration des uris des exemples dans la propriété `examples`
- suppression des contraintes `required: false` inutiles
- homogénéisation de l'ordre des propriétés des champs
- suppression de la contrainte `required` sur le champ `suffixe`
- amélioration des titres et descriptions

## 1.1.2

Changements internes :

- abandon des `missingValues`
- rétablissement de la contrainte `required` pour le champ `numero`
- abandon de la contrainte `required` pour les champs `x`, `y`, `lat`, `long`

## 1.1.1

Changements internes :

- suppression de la contrainte `required` pour le champ `numero`, qui provoquait une erreur avec la valeur spéciale `99999`