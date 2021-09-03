<MenuSchema />

# Schéma des lieux de covoiturage

Le Point d’accès national aux données de transport ([transport.data.gouv.fr](https://transport.data.gouv.fr])) réalise une consolidation régulière des fichiers déposés sur data.gouv.fr avec le mot-clé `covoiturage` respectant le format de référence décrit ci-dessous. 

Les collectivités territoriales peuvent y signaler la localisation des lieux pertinents (aires de covoiturage, parkings, délaissés routiers, etc) pour commencer ou terminer un trajet en covoiturage. Ces données sont précieuses, notamment pour les application de covoiturage qui peuvent ainsi assurer à leurs usagers une information fiable sur les lieux où ils peuvent s’arrêter et stationner en toute sécurité.

Ces lieux de covoiturage ne concernent que les offres qui permettent de stationner gratuitement.

## Finalité
Dans le but de constituer un répertoire national des lieux de covoiturage, ouvert et accessible à tous, les collectivités peuvent transmettre systématiquement, sous forme de tableau mis à jour, les données relatives aux lieux qu’elles considèrent pertinents pour les covoitureurs.

## Format des fichiers
Le fichier doit être encodé en UTF-8 et utiliser le point-virgule comme séparateur de colonnes. L'en-tête de colonne sur la première ligne est obligatoire. Tous les champs sont obligatoires ; si la donnée n'est pas disponible, la colonne doit être présente et vide.

Nom du fichier : `AAAAMMJJ_idproducteur_lieuxcovoit.csv` où `idproducteur` est le SIREN de la collectivité productrice des données, par exemple pour le département de l’Ain `20191013_220100010_lieuxcovoit.csv`.

## Mises à jour
Les mises à jour sont effectuées à partir du fichier communiqué précédemment et en reprennent, en les modifiant le cas échéant, les données qui y figurent déjà.