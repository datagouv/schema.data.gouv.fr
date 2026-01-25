<MenuSchema />

<MenuSchema />

# Schéma des stations de taxi

Ce schéma permet de modéliser les stations de taxi à usage public.

## Contexte

Dans le cadre des travaux de l'équipe du Registre de disponibilité des taxis et de la mise en œuvre de l'ouverture des
données pour améliorer l'information dont disposent les voyageurs, l'équipe du [le.taxi](https://le.taxi) propose une
solution simple et structurée pour l'ouverture des données de stations de taxi en France : la Base Consolidée des
données de Station de Taxi (BCST).

Il s'adresse à toute agglomération qui dispose de stations de taxi sur son territoire.

L'équipe du [le.taxi](https://le.taxi) met à disposition des acteurs un générateur CSV conforme au schéma de données,
ainsi qu'un validateur pour les collectivités productrices de données.

## Cadre juridique

TODO

## Finalité

La base des stations de taxi permet de regrouper en un unique fichier consolidé l’ensemble des stations de taxi en
France, dans un format standard et unifié. Cette standardisation des données facilite grandement le travail
d’intégration de ces données par des services réutilisateurs.

La base présente plusieurs cas d’usage :

- Elle permet de mettre en avant l’offre de stations de taxi d’une collectivité en permettant à des services de
  mobilité d’intégrer ces données.
- Elle peut également servir à connaître le nombre de taxis disponibles en temps réel à une station.

La base n’est pas destinée à remplacer les formats et schémas déjà utilisés en interne par les collectivités pour la
gestion de la voirie et du mobilier urbain. Le schéma doit être vu comme un format d’export interopérable.

### Transmission des données

Dans le but de constituer un répertoire consolidé des stations de taxi en France, les collectivités peuvent transmettre
systématiquement les données relatives aux stations à usage public.

Elles peuvent ajouter le mot-clé `stationstaxi` lors de la publication du jeu de données sur leur espace de publication
ou directement sur data.gouv.fr.

En cas de mise à jour d'un fichier déjà intégré à la base consolidée, il est recommandé de prévenir l'équipe du le.taxi
afin de s'assurer que la mise à jour du fichier a bien été prise en compte et intégrée à la base consolidée.

### Format de fichier

Le fichier doit être au format CSV, avec codage UTF-8. La virgule ou le point-virgule sont tous les deux acceptés comme
séparateur. La mise entre guillemets des cellules est recommandée pour éviter toute ambiguïté avec un séparateur dans
le contenu. L’en-tête de colonne sur la première ligne est obligatoire. Toutes les colonnes sont obligatoires ; si la
donnée n’est pas disponible, la colonne doit être présente et vide. L’ordre des colonnes suit l’ordre des champs listés
ci-dessous.

Nom du fichier : `stationstaxi_nom_AAAAMMJJ.csv` avec `nom` étant le nom de la collectivité productrice des données,
par exemple : `stationstaxi_GrenobleAlpesMetropole_20210503.csv`.

Le format GeoJSON est également accepté pour les géographies de station plus complexes qu’un point (polygone ou
multipolygone). Le fichier doit être un FeatureCollection où chaque station est une Feature et les colonnes deviennent
des propriétés (properties) de chaque feature.

### Fichiers d'exemple

Vous pouvez télécharger des fichiers gabarit d'exemple :

- un [fichier au format CSV](https://github.com/openmaraude/schema-stationstaxi/raw/v0.1.0/exemple-valide.csv) ;
- un [fichier au format XLSX](https://github.com/openmaraude/schema-stationstaxi/raw/v0.1.0/exemple-valide.xlsx).

### Mises à jour

Les mises à jour sont effectuées à partir du fichier communiqué précédemment et en reprennent, en les modifiant le cas
échéant, les données qui y figurent déjà.

## Consolidation

L'équipe du [le.taxi](https://le.taxi) réalise une consolidation régulière des fichiers déposée sur
[data.gouv.fr](htps://data.gouv.fr) avec le mot-clé `stationstaxi` respectant le format de référence décrit ici.
