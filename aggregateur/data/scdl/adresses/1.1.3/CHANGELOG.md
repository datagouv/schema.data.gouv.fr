---
homepage: https://git.opendatafrance.net/scdl/adresses
permalink: /scdl/adresses/latest/changelog.html
redirect_from: /scdl/adresses/1.1.3/changelog.html
title: CHANGELOG de Base adresse locale
version: 1.1.3
---

# Changelog

# 1.1.2 -> 1.1.3

Changements internes :

- ajout de la propriété `updated`
- intégration des uris des exemples dans la propriété `examples`
- suppression des contraintes `required: false` inutiles
- homogénéisation de l'ordre des propriétés des champs
- suppression de la contrainte `required` sur le champ `suffixe`
- amélioration des titres et descriptions

## 1.1.1 -> 1.1.2

Changements internes :

- abandon des `missingValues`
- rétablissement de la contrainte `required` pour le champ `numero`
- abandon de la contrainte `required` pour les champs `x`, `y`, `lat`, `long`

## 1.1 -> 1.1.1

Changements internes :

- suppression de la contrainte `required` pour le champ `numero`, qui provoquait une erreur avec la valeur spéciale `99999`