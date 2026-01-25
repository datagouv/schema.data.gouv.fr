<MenuSchema />

<MenuSchema />

# Changelog

Ce fichier répertorie les changements entre différentes versions d'un schéma.

## Version 0.3.0 - 2023-12-18
- La colonne `id_lieu` est supprimée
- La colonne `id_local` devient obligatoire
- Précision dans les valeurs booléennes possibles (`true` ou `false`uniquement)
- Mise à jour des exemples CSV correct/incorrect
- Mise à jour du README

## Version 0.2.8 - 2023-07-17
- Correction de l'exemple CSV correct
- Mise à jour des liens des exemples dans le `schema.json`
- Mise à jour du README

## Version 0.2.7 - 2023-04-13
- Mise à jour du README : ajout d'une information concernant la sécurité des aires

## Version 0.2.6 - 2022-08-26
- Correction de la valeur d'exemple du champ `id_lieu`
- Mise à jour d'outils
- Dans les métadonnées du schéma, renomme le champ `updated` en `lastModified`

## Version 0.2.5 - 2022-08-26
- Ajout d'une description sur la syntaxe attendue du champ `horaires` (au format "opening_hours" d'OSM)

## Version 0.2.4 - 2022-04-13
- Ajout d'une vérification de la syntaxe des horaires d'ouverture pour le champ `horaires` du schéma

## Version 0.2.3 - 2022-02-09
- Complétion de la description du champ "ouvert" du schéma

## Version 0.2.2 - 2021-12-21
- Correction du fichier d'exemple

## Version 0.2.1 - 2021-07-05
- Ajout d'un champ `id_local` pour que les producteurs de données puissent retrouver plus facilement leurs données après publication

## Version 0.2.0 - 2020-11-23
- colonne `id_lieu`, le mode de numérotation des aires est explicité
- colonne `type`, ajout du type d'aire "Auto-stop"
- colonne `source` devient facultative


## Version 0.1.2 - 2019-10-30
- Enrichissements de la documentation : contexte, cadrage juridique, outils associés

## Version 0.1.1 - 2019-09-03
- Ajout d'une vérification Validata pour le SIREN pour la colonne `source`

## Version 0.1.0 - 2019-07-11
- Clarté du README
- Amélioration des descriptions des colonnes `date_maj` et `source`
- Améliorations typographiques

## Version 0.0.1 - 2019-06-28
Publication initiale.
