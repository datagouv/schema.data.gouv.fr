<MenuSchema />

<MenuSchema />

# Schéma des lieux de covoiturage

Ce schéma permet de modéliser des lieux pertinents (aires de covoiturage, parkings, délaissés routiers, etc) pour commencer ou terminer un trajet en covoiturage. Ces lieux de covoiturage ne concernent que les offres qui permettent de stationner gratuitement.

## Finalité
Les lieux de covoiturage sont des données précieuses, notamment pour les application de covoiturage qui peuvent ainsi assurer à leurs usagers une information fiable sur les lieux où ils peuvent s'arrêter et stationner en toute sécurité.

## Transmission des données
Dans le but de constituer un répertoire national des lieux de covoiturage, ouvert et accessible à tous, les collectivités peuvent transmettre systématiquement, sous forme de tableau mis à jour, les données relatives aux lieux qu'elles considèrent pertinents pour les covoitureurs.

### Format des fichiers
Le fichier doit être encodé en UTF-8 et utiliser le point-virgule comme séparateur de colonnes. L'en-tête de colonne sur la première ligne est obligatoire. Tous les champs sont obligatoires ; si la donnée n'est pas disponible, la colonne doit être présente et vide.

Nom du fichier : `AAAAMMJJ_idproducteur_lieuxcovoit.csv` où `idproducteur` est le SIREN de la collectivité productrice des données, par exemple pour le département de l'Ain `20191013_220100010_lieuxcovoit.csv`.

### Fichiers d'exemple
Nous mettons à disposition des fichiers d'exemple qui peuvent servir de base pour renseigner vos lieux de covoiturage.

- [Télécharger un fichier exemple au format CSV](https://github.com/etalab/schema-lieux-covoiturage/raw/v0.1.1/exemple-valide.csv)
- [Télécharger un fichier exemple au format Excel](https://github.com/etalab/schema-lieux-covoiturage/raw/v0.1.1/exemple-valide.xls)

Vous pouvez également utiliser [une interface web](https://csv-gg.etalab.studio/?schema=etalab%2Fschema-lieux-covoiturage) pour saisir vos données.

### Mises à jour
Les mises à jour sont effectuées à partir du fichier communiqué précédemment et en reprennent, en les modifiant le cas échéant, les données qui y figurent déjà.

## Consolidation
Le Point d'accès national aux données de transport ([transport.data.gouv.fr](https://transport.data.gouv.fr)) réalise une consolidation régulière des fichiers déposés sur [data.gouv.fr](https://data.gouv.fr) avec le mot-clé `covoiturage` respectant le format de référence décrit ici.
