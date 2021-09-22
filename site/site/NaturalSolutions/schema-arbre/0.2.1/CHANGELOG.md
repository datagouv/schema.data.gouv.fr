<MenuSchema />

# Changelog

Ce fichier répertorie les changements entre différentes versions d'un schéma.

## Version 0.2.0 - 2020-10-21

Ajout de contraintes sur plusieurs champs : 
- "code_insee" : passage du type de integer à string pour tenir compte des codes INSEE Corses et ajout du pattern associé
- "code_postal" : passage du type de integer à string pour tenir compte des codes Postaux Corses et ajout du pattern associé
- "date_plantation" : Ajout d'une contrainte sur la date pour qu'elle respecte le format YYYY-MM-DD
- "hauteur" : Ajout d'une contrainte imposant une valeur entre 0 et 15000 (0m et 150m)
- "diametre" : Ajout d'une contrainte imposant une valeur entre 0 et 3000 (0m et 30m)

## Version 0.1.0 - 2020-10-16

Publication initiale.