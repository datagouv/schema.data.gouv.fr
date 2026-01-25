<MenuSchema />

<MenuSchema />

# Changelog

Ce fichier répertorie les changements entre différentes versions d'un schéma.

## Version 0.7.2 - 2021-12-21

- accepter la valeur `null` pour le champ `date_fin`

## Version 0.7.1 - 2021-10-18

Adaptation du schéma pour :
- accepter la valeur `null` pour les champs `*_critair` et `*_horaires` lorsque la réglementation locale ne prévoit pas de mesure pour ce type de véhicules
- rendre obligatoire la saisie du champ `_horaire` associé au champ `_critair` lorsque celui-ci est renseigné (et vice-versa)


## Version 0.7.0 - 2021-07-01

Modifications importantes de la structure du schéma :
- suppression des champs : proprietaire_vehicule, taxi_critair, taxi_horaires
- modification des modalités des vignettes pour correspondre à la codification retenue par l'Imprimerie nationale (IN) pour devenir : EL, V1, V2, V3, V4, V5, NC

## Version 0.6.0 - 2021-07-01

Modifications importantes de la structure du schéma : 
- format CSV vers format GeoJSON
- un seul schéma pour décrire les aires réglementées et les voies spéciales 

## Version 0.5.0 - 2021-06-11

Publication initiale
