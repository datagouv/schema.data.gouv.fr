<MenuSchema />

# Changelog

Ce fichier répertorie les changements entre différentes versions d'un schéma

## Version 0.3.2 - 2021-10-04

Ajout des champs optionnels "revetement_d" et "revetement_g" après le vote en faveur de la [PR #33](https://github.com/etalab/schema-amenagements-cyclables/pull/33)

## Version 0.3.1 - 2021-09-15

Modification d'une des valeurs autorisées des champs ame_d et ame_g passant de DOUBLE SENS CYCLABLE à DOULE SENS CYCLABLE NON MATERIALISE pour harmoniser avec ce que contiennent les outils de Vélo & Territoires et clarifier ce champ

## Version 0.3.0 - 2021-03-03

Correction des valeurs du champ "num_iti" et du fichier d'exemple pour ce champ

## Version 0.2.2 - 2021-01-27

Changement de propriété du champ "trafic_vit" : trafic_vit" qui était obligatoire devient un champ optionnel.
Ce changement permettra de laisser le champ le vide quand il n'y a pas de trafic adjacent à l'aménagement

## Version 0.2.1 - 2020-12-17

Distinction voie droite/gauche du champ "local" pour permettre aux producteurs de distinguer l'emplacement de l'aménagement sur la voie de droite de celui sur la voie de gauche

## Version 0.2.0 - 2020-12-15

Ajout de la valeur "DOUBLE SENS CYCLABLE" aux champs "ame_g" et "ame_d"

## Version 0.1.0 - 2020-12-10

Publication initiale.
