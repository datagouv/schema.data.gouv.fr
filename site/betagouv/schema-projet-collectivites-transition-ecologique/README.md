<MenuSchema />

# Schéma des projets de transition écologique des collectivités

Ce dépôt contient les schémas de données standardisés pour décrire les projets de transition écologique menés par les collectivités territoriales françaises.

## Vue d'ensemble

Ce schéma permet de structurer les données relatives aux projets de collectivités en lien avec la transition écologique. Il facilite le partage, l'analyse et la valorisation de ces données entre différents services numériques de l'État français et les collectivités territoriales.

## Structure du schéma

Le schéma est organisé en deux tables principales et deux référentiels :

### Tables principales

1. **Projets** : Décrit les projets de transition écologique avec leurs caractéristiques (identifiant, nom, description, budget, planning, phase, etc.)
2. **Collectivités** : Décrit les collectivités territoriales (communes, EPCI) qui portent ces projets

### Référentiels

Les référentiels sont disponibles ici : https://github.com/betagouv/schema-projet-collectivites-transition-ecologique/tree/main/reference-data

1. **Référentiel des compétences M57** : Liste hiérarchique des compétences et sous-compétences des collectivités selon la nomenclature M57. Les compétences ont un code du type : 90-XY, et les compétences 90-XYZ
- Le fichier JSON reprend la structure compétences et sous-compétences associées (lorsqu'il y en a), via une liste d'objets : 
`{"code": "90-XY",
 "nom": "compétence ABC",
"sous_competences": [{"code" : "90-XYZ", "nom" : "sous-compétence ABCD"},{}]}`
- tandis que le fichier csv contient une colonne code, et une colonne competence-sous-competence correspondant à leur intitulé.  
2. **Référentiel des leviers de transition écologique** : Liste des leviers SGPE disponibles et leur description pour les projets de transition écologique. Il s'agit d'un fichier csv avec 2 colonnes : `levier` et `description`

Ces référentiels sont utilisés pour catégoriser et standardiser les données des projets.

## Relations

- Les tables principales : `projets-transition-ecologique/` et `collectivites/`   sont liées par une relation many-to-many
- Les projets font référence aux référentiels via :
  - Le champ `competences` qui pointe vers le référentiel M57 des compétences et sous-compétences des collectivités
  - Le champ `leviers` qui pointe vers le référentiel des leviers SGPE de la Plannification Ecologique.

## Utilisation

Ces schémas sont conçus pour être utilisés par tout service numérique qui accompagne les collectivités dans leurs projets de transition écologique, comme par exemple :

- Mon Espace Collectivité (MEC)
- Territoires Engagés pour la Transition Écologique (TET)
- Recommandations Collaboratives (Recoco)
- etc.

## Format

Les schémas sont au format [Table Schema](https://specs.frictionlessdata.io/table-schema/) et [Data Package](https://specs.frictionlessdata.io/data-package/), conforme aux spécifications Frictionless Data, pour faciliter la validation et l'interopérabilité des données.

## Contenu du dépôt

- `datapackage.json` : Le descripteur principal du package de données
- `projets-transition-ecologique/` : Contient le schéma et les exemples pour la table des projets
- `collectivites/` : Contient le schéma et les exemples pour la table des collectivités
- `reference-data/` : Contient les référentiels :
  - `référentiel_competences_M57_2025.json` : Référentiel M57 des compétences / sous-compétences sour forme de JSON strucuré,avec l'arborescence
  -  `référentiel_competences_M57_2025.csv`: Référentiel M57 des compétences / sous-compétences sour forme de csv
  - `50_leviers_SGPE_03_2025.csv` : Référentiel des leviers SGPE de la plannification écologique sous forme de csv

## Licence

Les schémas et la documentation sont sous [Licence Ouverte Etalab 2.0](https://www.etalab.gouv.fr/licence-ouverte-open-licence/).