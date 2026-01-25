<MenuSchema />

<MenuSchema />

# Schéma de données pour les Zones à Faibles Emissions

Ce schéma permet de modéliser les règles de limitation de circulation sur une zone concernant différents types de véhicules (véhicules particuliers, utilitaires, poids lourds...). Il permet également de préciser des exceptions sur certains axes routiers ou la Zone à Faible Emission a des règles différentes.

## Contexte

Dans le cadre des travaux de l’équipe du Point d’accès national et de la mise en oeuvre de l’ouverture des données pour améliorer l’information dont disposent les voyageurs, l’équipe de transport.data.gouv.fr propose une solution simple et structurée pour l’ouverture des données concernant les Zones à Faibles Emissions : la Base Nationale des Zones à Faibles Emissions (BNZFE). 

Le schéma de la base de données a été co-construit avec les collectivités, leurs services SIG et avec les futurs réutilisateurs de ces données. Des ateliers avec ces acteurs et un atelier ouvert (le 08/04/2021) ont permis sa production.

## Cadre juridique

L’ouverture des données sur les Zones à Faibles Emissions est une obligation légale, définie par la Loi pour une République Numérique (n° 2016-1321 du 7 octobre 2016) concernant la mise à disposition par défaut des données administratives. 

## Finalité

Afin de faciliter l’intégration des informations relatives aux Zones à Faibles Emission dans des applications de mobilité, un schéma de données a été défini afin d’assurer une harmonisation de ces données sur l’ensemble du territoire. Ce schéma définit des informations indispensables et complémentaires à fournir par le producteur. Cette distinction a été mise en place pour ne pas pénaliser les petits producteurs de données, et définit un standard minimal de complétude des données. Il est toutefois demandé aux producteurs de données de compléter le schéma avec le plus grand niveau de détail possible, afin de transmettre une information plus riche à l’usager final.
La base présente plusieurs cas d’usage 
- elle recense l'ensemble des Zones à Faibles Emission du territoire français en permettant à des services de calcul d’itinéraire d’intégrer ces données pour indiquer aux automobilistes s'ils peuvent circuler ou non sur certains tronçons routiers. 
- les données peuvent également être utilisées par des observatoires nationaux ou européens de l'implémentation de ce dispositif visant à améliorer la qualité de l'air des noeuds urbains.

Le fichier précise notamment : 
- l'identifiant d'une aire concernée par une réglementation ZFE ou l'identifiant d'un tronçon routier concerné par une règle exceptionnelle ;
- la date de mise en place du dispositif et la date à laquelle la réglementation prend fin ;
- la catégorie de conducteurs concernée par le dispositif (personne morale et/ou physique) ;
- les vignettes CRITAIR autorisées par type de véhicule (véhicule particuliers, utilitaires, poids lourds, autobus, deux roues, taxis...) ;
- les horaires d'application par type de véhicules (véhicule particuliers, utilitaires, poids lourds, autobus, deux roues, taxis...) ;
- l'arrêté associé ;
- le site d'information associé à la réglementation.


## Format de fichier

Les jeux de données seront publiés au format GeoJSON encodé en UTF8. Certains champs sont obligatoires et d'autres optionnels. Les champs obligatoires doivent être complétés. Les champs optionnels peuvent être vides si la donnée n’est pas disponible. La colonne doit toutefois être présente.
Ce schéma de données permet de produire un fichier décrivant les aires réglementées et un second fichier optionnel décrivant les tronçons routiers spéciaux. Leur articulation est expliquée dans la partie Mode d'emploi.

## Référentiel géographique

Le référentiel à suivre pour la production des données est le Référentiel Grande Echelle de l'IGN. Le système de projection retenu est le WGS84 comme le recommande le standard GeoJSON. 
Les tronçons routiers exceptionnels doivent être extraits de la couche TRONCON_DE_ROUTE de la BD Topo de l'IGN. Si cela présente des difficultés merci de contacter contact@transport.beta.gouv.fr

## Publication

Dans le but de maintenir à jour un répertoire consolidé des Zones à Faibles Emissions en France, les collectivités sont invitées à transmettre systématiquement les données relatives aux ZFE sur leur territoire. 
Elles peuvent ajouter le mot-clef "zone-faibles-emissions" ou "zfe" lors de la publication du jeu de données dans leur espace de publication (portail local ou régional) ou directement sur data.gouv.fr.
Les producteurs pourront :
- publier directement sur data.gouv.fr ;
- publier sur un portail local ou régional et s'assurer que les données publiées sont bien moissonnées et référencées sur data.gouv.fr.

Nous préconisons aux producteurs de données de publier leurs fichiers concernant les zones avec la règle de nommage suivante : `zfe_zone_nom.geojson` avec nom étant le nom de la collectivité productrice des données, par exemple `zfe_zone_grenoble.geojson`.
Pour les fichiers concernant les voies spéciales : `zfe_voie_speciale_nom.geojson`, avec nom étant le nom de la collectivité productrice des données, par exemple `zfe_voie_speciale_grenoble.geojson`.

En cas de mise à jour d’un fichier déjà intégré à la base consolidée, il est recommandé de prévenir l’équipe transport.data.gouv.fr qui s’assurera de l'actualisation du fichier en question et de son intégration dans la base consolidée.

## Consolidation

Le base nationale des ZFE sera construite par l'assemblage (ou consolidation) de l'ensemble des fichiers locaux publiés sur data.gouv.fr. Deux fichiers seront publiés : un premier décrivant les aires concernées par une Zone à Fiable Emission et un second décrivant les voies spéciales dont les règles sont différentes.

## Mise-à-jour

La consolidation de la base sera effectuée en continu par transport.data.gouv.fr à partir des fichiers publiés sur data.gouv avec le tag "zfe" ou "zone-faibles-emissions" par les producteurs. De nouvelles versions seront publiées lorsque de nouvelles ZFE seront recensées ou mises-à-jour par les producteurs. Cette mise à jour se fait à partir du fichier communiqué précédemment et en reprenant, en les modifiant le cas échéant, les données existantes. Le fichier principal du dataset constitue ainsi systématiquement la dernière mise-à-jour.

## Mode d'emploi

Comme expliqué ce schéma de données permet de décrire des aires réglementées et des voies exceptionnelles dont les règles sont différentes des zones dont elles font pourtant partie. Les règles affectant les tronçons routiers priment donc sur les règles affectant une zone. 

## Conditions d’utilisation

Comme indiqué dans les métadonnées, le fichier et ses mises-à-jour sont distribués sous la Licence Ouverte Etalab 2.0. Cela signifie que vous pouvez télécharger librement cette base, la réutiliser, la modifier, l’utiliser commercialement, etc, tant que vous en mentionnez la source (par exemple dans les mentions légales de votre application).
Nous tenons à remercier les membres du groupe de travail pour leur investissement dans l'élaboration de ce schéma.

### Fichiers disponibles

- [`CHANGELOG.md`](https://github.com/etalab/schema-zfe/blob/master/CHANGELOG.md) contient la liste des changements entre les différentes versions du schéma ;
- [`exemple-valide-zone.geojson`](https://github.com/etalab/schema-zfe/blob/master/exemple-valide-zone.geojson) est un fichier GeoJSON d'exemple conforme décrivant une aire par rapport au schéma décrit dans `schema.json`  ;
- [`exemple-valide-voie-speciale.geojson`](https://github.com/etalab/schema-zfe/blob/master/exemple-valide-voie-speciale.geojson) est un fichier GeoJSON d'exemple conforme décrivant une voie spéciale par rapport au schéma décrit dans `schema.json` ;
- [`LICENSE.md`](https://github.com/etalab/schema-zfe/blob/master/LICENSE.md) est le fichier de licence du dépôt ;
- [`README.md`](https://github.com/etalab/schema-zfe/blob/master/README.md) est le fichier que vous lisez actuellement ;
- [`requirements.txt`](https://github.com/etalab/schema-zfe/blob/master/requirements.txt) liste les dépendances Python nécessaires pour effectuer des tests en intégration continue sur le dépôt ;
- [`schema.json`](https://github.com/etalab/schema-zfe/blob/master/schema.json) est le schéma au format [JSON Schema](https://json-schema.org/).

### Intégration continue

Ce dépôt est configuré pour utiliser de l'intégration continue, si vous utilisez GitHub. À chaque commit, une suite de tests sera lancée via [GitHub Actions](https://github.com/features/actions) afin de vérifier :

- que votre schéma est valide à la spécification Table Schema ;
- que vos fichiers d'exemples sont conformes au schéma.

Vous pouvez consulter la configuration utilisée dans [`.github/workflows/test.yml`](.github/workflows/test.yml).
