<MenuSchema />

<MenuSchema />

# Changelog

Ce fichier répertorie les changements entre différentes versions d'un schéma.

## version 0.3.1 - (unreleased)

Correction du JSON Schema :
- duree : passage de `"integer"` à `"number"`
- itineraire_parent : ajout de `"type": "null"`
- cotation : ajout valeur `""`

## version 0.3.0 - (unreleased)

Rétrogradation du schéma en version `[draft-07](https://json-schema.org/specification-links.html#draft-7)`

## version 0.2.1 - (unreleased)

Correction du JSON Schema :
- ajout des `"type": "null"` pour les champs non obligatoires
- correction de `"oneOf": [{"$ref": "point"},"null"` en `"oneOf": [{"$ref": "point"},{"type": "null"}`
- déplacement d'une accolade qui excluait la majorité des champs de l'objet `properties_randonnee`

## version 0.2.0 - (unreleased)

Passage au format JSON Schema

Champs modifiés :
- id_source : nom
- sources : nom, passage en chaîne de caractères
- pratique : ajout de valeurs
- type : nom, ajout de valeurs
- communes : passage en chaîne de caractères
- balisage : passage en chaîne de caractères
- difficulté : changement de la définition
- description_courte : presentation_courte
- description : presentation
- themes : passage en chaîne de caractères
- parking : passage en feature GeoJSON avec une propriété infos_parking, une géométrie
- medias : ajout d'une propriété type_media
- rando_parent : itineraire_parent
- type_sol : passage en chaîne de caractères

Champs ajoutés :
- cotation : cotation technique (ex-difficulté)

Champs supprimés :
- structure


## version 0.1.2 - (unreleased)

Complétion des métadonnées

Champs modifiés :
- sources : passage en array
- balisage : changement de la définition
- difficulté : complétion de l'échelle
- geometrie : passage en WKT
- geometrie_parking : passage en WKT

Champs ajoutés :
- instructions : ancien champ balisage
- type_sol : array des types de sol de la randonnée

## Version 0.1.1 - (unreleased)

Publication initiale.
