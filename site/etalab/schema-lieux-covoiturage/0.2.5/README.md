<MenuSchema />

# Schéma des lieux de covoiturage

Ce schéma permet de modéliser des lieux pertinents (aires de covoiturage, parkings, délaissés routiers, etc) pour commencer ou terminer un trajet en covoiturage. Ces lieux de covoiturage ne concernent que les offres qui permettent de stationner gratuitement.

## Contexte

Un [fichier national](https://www.data.gouv.fr/fr/datasets/aires-de-covoiturage-en-france) décrivant les aires de covoiturage de 70 départements a été consolidé par BlaBlaCar en 2018 à partir des fichiers disponibles sur data.gouv.fr et sur les différents sites des départements français.

La Fabrique des Mobilités a également ouvert un fichier relatif à des lieux de rendez-vous de covoiturage (grande variété de points, fichier non consolidé), disponible [sur data.gouv.fr](https://www.data.gouv.fr/fr/datasets/base-de-donnees-commune-des-lieux-et-aires-de-covoiturage/), notamment grâce à un formulaire ouvert au grand public permettant de déclarer des points de rencontre pertinents.

En 2019, transport.data.gouv.fr, Open Data France et le Ministère chargé des transports proposent un schéma amélioré pour garantir la disponibilité d'une base nationale consolidée qui puisse être facilement mise à jour.

### Cadrage juridique

* La [loi n° 2014-58 du 27 janvier 2014](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000028526298) de modernisation de l’action publique territoriale et l’affirmation des métropoles (MAPTAM) acte la transformation des autorités organisatrices des transports urbains (AOTU) en autorités organisatrices de la mobilité (AOM) et l'extension de leurs compétences au champ des usages partagés de l'automobile (notamment le covoiturage) et des modes actifs.

* L’article 52 de la loi MATPAM donne, pour la première fois, une définition du covoiturage. Cette définition a été précisée dans le cadre de la loi du 17 août 2015 relative à la transition énergétique pour une croissance verte (TECV).

## Finalité
Les lieux de covoiturage sont des données précieuses, notamment pour les application de covoiturage qui peuvent ainsi assurer à leurs usagers une information fiable sur les lieux où ils peuvent s'arrêter et stationner en toute sécurité.

## Transmission des données
Dans le but de constituer un répertoire national des lieux de covoiturage, ouvert et accessible à tous, les collectivités peuvent transmettre systématiquement, sous forme de tableau mis à jour, les données relatives aux lieux qu'elles considèrent pertinents pour les covoitureurs.

Elles peuvent ajouter le mot-clef `covoiturage` lors de la publication du jeu de données sur leur espace de publication ou directement sur data.gouv.fr

### Format des fichiers
Le fichier doit être encodé en UTF-8 et utiliser le point-virgule comme séparateur de colonnes. L'en-tête de colonne sur la première ligne est obligatoire. Tous les champs sont obligatoires ; si la donnée n'est pas disponible, la colonne doit être présente et vide.

Nom du fichier : `AAAAMMJJ_idproducteur_lieuxcovoit.csv` où `idproducteur` est le SIREN de la collectivité productrice des données, par exemple pour le département de l'Ain `20191013_220100010_lieuxcovoit.csv`.

### Fichiers d'exemple
Nous mettons à disposition des fichiers d'exemple qui peuvent servir de base pour renseigner vos lieux de covoiturage.

- [Télécharger un fichier exemple au format CSV](https://github.com/etalab/schema-lieux-covoiturage/raw/v0.2.4/exemple-valide.csv)
- [Télécharger un fichier d'exemple invalide](https://github.com/etalab/schema-lieux-covoiturage/raw/v0.2.4/exemple-invalide.csv) contenant des erreurs dans le formatage des dates et une inversion des coordonnées géographiques latitude/longitude

### Mises à jour
Les mises à jour sont effectuées à partir du fichier communiqué précédemment et en reprennent, en les modifiant le cas échéant, les données qui y figurent déjà.

## Consolidation
Le Point d'accès national aux données de transport ([transport.data.gouv.fr](https://transport.data.gouv.fr)) réalise une consolidation régulière des fichiers déposés sur [data.gouv.fr](https://data.gouv.fr) avec le mot-clé `covoiturage` respectant le format de référence décrit ici.

## Outils

* [Validateur de fichiers CSV](https://publier.etalab.studio/select?schema=etalab%2Fschema-lieux-covoiturage)
* [Formulaire de création de données valides](https://publier.etalab.studio/select?schema=etalab%2Fschema-lieux-covoiturage)
* [Télécharger un fichier gabarit au format CSV](https://github.com/etalab/schema-lieux-covoiturage/raw/master/exemple-valide.csv)

## En savoir plus

* Le Ministère de la Transition écologique et solidaire rappelle sur [cette page](https://www.ecologique-solidaire.gouv.fr/covoiturage-en-france) le cadre de cette pratique de mobilité.
* Page du [wiki de la Fabrique des mobilités](https://wiki.lafabriquedesmobilites.fr/wiki/Base_de_donn%C3%A9e_commune_des_lieux_de_covoiturage) dédiée au sujet du covoiturage
