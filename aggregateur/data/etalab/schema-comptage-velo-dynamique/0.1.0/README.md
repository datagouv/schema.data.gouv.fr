---
permalink: /etalab/schema-comptage-velo-dynamique/latest.html
redirect_from: /etalab/schema-comptage-velo-dynamique/0.1.0.html
title: Schéma du comptage vélo (partie dynamique)
version: 0.1.0
---

:warning: Travail en cours de mise au point d'un schéma pour le schéma de comptage vélo.

# Schéma de données pour le stationnement cyclable

Schéma de comptage vélo dynamique

Ce schéma permet d'estimer la fréquentation des aménagements cyclables grâce à des données dynamiques de comptage vélo. 
Il doit être associé au schéma statique de comptage vélo (https://github.com/etalab/schema-comptage-velo-statique) et ne peut pas être réutilisé sans ce fichier. 
L'identifiant unique du compteur dans les bases de données de la collectivité territoriale productrice de données permet de faire la jointure entre ces deux fichiers.

## Contexte

Dans le cadre des travaux de l’équipe du Point d’accès national et de la mise en oeuvre de l’ouverture des données pour améliorer l’information dont disposent les voyageurs, l’équipe de transport.data.gouv.fr propose une solution simple et structurée pour l’harmonisation et l'ouverture des données de comptage vélo : le schéma de comptage vélo statique et dynamique.

Cette distinction statique/dynamique a été faite car :
- le fichier statique permet de donner des précisions sur le compteur vélo comme sa localisation, la méthode utilisée pour récupérer et transmettre les données, les types de pratiques qu'il peut enregistrer etc.
- le fichier dynamique permet de comptabiliser le nombre de passage pendant un temps défini. 

Ce schéma a été co-construit avec des collectivités, fournisseurs de compteur vélo, associations vélo et réutilisateurs. Deux ateliers ouverts (le 23/04/2021 et le //2021) ont permis sa production. Aujourd’hui disponible en version 0.0.1, il sera mis-à-jour régulièrement.

## Cadre juridique

L’ouverture des données sur le comptage vélo ne répond à aucune obligation réglementaire et n'est donc pas encadrée par le Réglement Européen (UE 2017 1926) ni par la Loi d'Orientation des Mobilités.

Les collectivités harmonisent et publient donc ces données librement. 

## Finalité

Afin de faciliter la réutilisation et réduire le coût d’intégration de ces données dans des services tiers, un schéma a été défini afin d’assurer une harmonisation de ces données sur l’ensemble du territoire. Ce schéma définit des informations indispensables et complémentaires à fournir par le producteur. Cette distinction a été mise en place pour ne pas pénaliser les petits producteurs de données, et définit un standard minimal de complétude des données. Il est toutefois demandé aux producteurs de données de compléter le schéma avec le plus grand niveau de détail possible, afin de transmettre une information plus riche à l’usager final. 

La base présente plusieurs cas d’usage :
Elle recense les compteurs vélos et la fréquentation des aménagements cyclables d’une collectivité en permettant à des services de calcul d’itinéraire d’intégrer ces données pour informer sur le trafic. 
Ce dataset comprend notamment : 
- l'idenfiant unique pérenne du compteur ;
- un cadrage temporel avec la date de début et de fin de comptage;
- le nombre de passages à vélo comptabilisés par le compteur vélo selon le sens de circulation.


## Format de fichier

Les jeux de données seront publiées au format CSV UTF8 avec séparateur virgule ",". Certains champs sont obligatoires et d'autres optionnels. Les champs obligatoires doivent être complétés. Les champs optionnels peuvent être vides si la donnée n’est pas disponible. La colonne doit toutefois être présente.


## Publication

Dans le but de maintenir à jour un répertoire des compteurs vélo en France, les collectivités sont invitées à transmettre systématiquement les données relatives aux compteurs sur leur territoire. 
Elles peuvent ajouter le mot-clef "comptage-velo" lors de la publication du jeu de données dans leur espace de publication (portail local ou régional) ou directement sur data.gouv.fr.
Les producteurs pourront :
- publier directement sur data.gouv.fr ;
- publier sur un portail local ou régional et s'assurer que les données publiées sont bien moissonnées et référencées sur data.gouv.fr.

Nous préconisons aux producteurs de données de publier leurs fichiers avec la règle de nommage suivante : `comptagevelo_nom.csv` avec nom étant le nom de la collectivité productrice des données, par exemple `comptagevelo_Baix.csv`


## Conditions d’utilisation

Comme indiqué dans les métadonnées, le fichier et ses mises-à-jour sont distribués sous la licence ODbL. Cela signifie que vous pouvez télécharger librement cette base, la réutiliser, la modifier, l’utiliser commercialement, etc, tant que vous en mentionnez la source (par exemple dans les mentions légales de votre application) et que vous repartagez les modifications, améliorations et corrections éventuelles dans les mêmes conditions que cette base (licence ODbL). Plus d’informations [ici](https://doc.transport.data.gouv.fr/reutilisateurs/licence-odbl-et-conditions-de-reutilisation).

Nous tenons à remercier les membres du groupe de travail pour leur investissement dans l'élaboration de ce schéma.

## Informations complémentaires sur le fichier

Ce schéma fait la distinction entre deux sens de circulation car un même compteur peut distinguer la circulation des usagers dans deux sens. 
Lorsque le compteur distingue ces deux sens, le producteur peut faire la distinction selon le sens de circulation dans les champs "nombre_passage_sens_circulation_1" et "nombre_passage_sens_circulation_2". 
Si le compteur ne fait pas de distinction de sens, le producteur devra simplement remplir le champ "nombre_passage_sens_circulation_1" et laisser le champ "nombre_passage_sens_circulation_2" vide.  

## Fichiers d'exemple
Deux fichiers d'exemples sont fournis pour ce schéma : 
- un fichier d'exemple "exemple-valide.csv" avec tous les champs remplis ; 
- un fichier d'exemple "exemple-valide-2.csv" avec seulement les fichiers obligatoires/requis remplis. Les champs optionnels, à savoir "date_heure_fin_comptage" ainsi que "nombre_passage_sens_circulation_2" sont vides. 


## Notes techniques pour contribuer à ce schéma

Ce schéma s'appuie sur [TableSchema](https://specs.frictionlessdata.io/table-schema/). Pour le modifier, il peut être utile en particulier de se référer à la [spécification des descripteurs de champs](https://specs.frictionlessdata.io/table-schema/#field-descriptors).

### Fichiers disponibles

Ce dépôt contient un ensemble de fichiers utiles pour un dépôt d'un schéma [Table Schema](https://specs.frictionlessdata.io/table-schema/).

- [`CHANGELOG.md`](CHANGELOG.md) contient la liste des changements entre les différentes versions du schéma ;
- [`exemple-valide.csv`](exemple-valide.csv) est un fichier CSV d'exemple conforme par rapport au schéma décrit dans `schema.json`  ;
- [`LICENSE.md`](LICENSE.md) est le fichier de licence du dépôt ;
- [`README.md`](README.md) est le fichier que vous lisez actuellement ;
- [`requirements.txt`](requirements.txt) liste les dépendances Python nécessaires pour effectuer des tests en intégration continue sur le dépôt ;
- [`schema.json`](schema.json) est le schéma au format Table Schema.

### Intégration continue

Ce dépôt est configuré pour utiliser de l'intégration continue, si vous utilisez GitHub. À chaque commit, une suite de tests sera lancée via [GitHub Actions](https://github.com/features/actions) afin de vérifier :

- que votre schéma est valide à la spécification Table Schema ;
- que vos fichiers d'exemples sont conformes au schéma.

Vous pouvez consulter la configuration utilisée dans [`.github/workflows/test.yml`](.github/workflows/test.yml).

### Test en local

Pour itérer plus facilement sur le schéma en local, il est possible de lancer les tests sur un poste de travail.

Nous recommandons, pour installer la bonne version de Python, l'utilisation de [PyEnv](https://github.com/pyenv/pyenv) pour Mac/Linux et [pyenv-win](https://github.com/pyenv-win/pyenv-win) pour Windows.

Voici la procédure à suivre pour installer l'environnement de test (sous Mac/Linux) et lancer les tests :

```bash
# Installation de la version de Python en vigueur avec pyenv
# voir https://github.com/pyenv/pyenv
pyenv install
python --version

# Installation des dépendances
pip install -r requirements.txt

# Test de la validité du schéma
frictionless validate --type schema schema.json

# Test de la conformité des fichiers d'exemples
frictionless validate --schema schema.json exemple-valide.csv
frictionless validate --schema schema.json exemple-valide-2.csv

```