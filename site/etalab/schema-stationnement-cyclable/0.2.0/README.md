<MenuSchema />

<MenuSchema />

# Schéma de données pour le stationnement cyclable

Schéma du stationnement cyclable.
Ce schéma permet de modéliser et définir le stationnement cyclable sur le territoire national.   

## Contexte

Dans le cadre des travaux de l’équipe du Point d’accès national et de la mise en oeuvre de l’ouverture des données pour améliorer l’information dont disposent les voyageurs, l’équipe de transport.data.gouv.fr propose une solution simple et structurée pour l’ouverture des données pour le stationnement cyclable : la Base Nationale du Stationnement Cyclable (BNSC). 

Le schéma de la base de données a été co-construit avec des associations et entrperises du secteur du stationnement cyclable, les producteurs de données et les réutilisateurs. Deux ateliers ouverts (le 25/11/2020 et le 24/02/2021) ont permis sa production. (Il a été établi après une enquête et plusieurs réunions du groupe de travail). Aujourd’hui disponible en version 0.1.0, il sera mis-à-jour régulièrement.

## Cadre juridique

L’ouverture des données sur le stationnement cyclable nécessaire à l’information voyageur est une obligation légale, définie par le règlement délégué (UE) 2017/1926 concernant la mise à disposition de services d’informations sur les déplacements multimodaux. Le règlement statue la création d’un Point d’Accès National par pays membre ainsi que la mise à disposition des données nécéssaires à l’information voyageur sur celui-ci. Le règlement exige la mise à disposition des données concernant les caractéristiques du réseau cyclable à échéance du 1er décembre 2019.

Ces obligations sont précisées en droit français par la loi d’orientation des mobilités (LOM). Elle désigne les collectivités territoriales comme étant responsables de la mise à disposition des données sur la plateforme transport.data.gouv.fr, qui constitue le Point d’Accès National des données de mobilité pour la France.
Les collectivités ont la responsabilité de transmettre les données existantes les plus complètes possibles.

## Finalité

Afin de faciliter la réutilisation et réduire le coût d’intégration de ces données dans des services tiers, un schéma a été défini afin d’assurer une harmonisation de ces données sur l’ensemble du territoire. Ce schéma définit des informations indispensables et complémentaires à fournir par le producteur. Cette distinction a été mise en place pour ne pas pénaliser les petits producteurs de données, et définit un standard minimal de complétude des données. Il est toutefois demandé aux producteurs de données de compléter le schéma avec le plus grand niveau de détail possible, afin de transmettre une information plus riche à l’usager final. La base du stationnement cyclable permet ainsi de regrouper en un unique fichier consolidé l’ensemble des infrastructures de stationnement vélo.

La base présente plusieurs cas d’usage :
Elle recense les aménagements pour le stationnement cyclable d’une collectivité en permettant à des services de calcul d’itinéraire d’intégrer ces données pour indiquer où stationner leur vélo de manière sécurisé ou non. Elle peut servir également à identifier le niveau d'équipement en points de stationnement d'une zone.
Ce dataset comprend notamment : 
- la géolocalisation des aménagements pour stationnement des vélos ;
- la capacité de ces points de stationnement ;
- la nature des accroches ;
- le caractère sécurisé ou non (gardien, lumière, accès libre...) ;
- le caractère payant ou gratuit.


## Format de fichier

Les jeux de données seront publiées au format CSV encodé en UTF8 avec séparateur "," et en utilisant des " " pour les champs textuels qui pourraient contenir le séparateur. Certains champs sont obligatoires et d'autres optionnels. Les champs obligatoires doivent être complétés. Les champs optionnels peuvent être vides si la donnée n’est pas disponible. La colonne doit toutefois être présente.

## Documentation
Une documentation complémentaire est disponible : https://doc.transport.data.gouv.fr/producteurs/documentation-sur-le-stationnement-cyclable

## Publication

Dans le but de maintenir à jour un répertoire consolidé des aménagements cyclables en France, les collectivités sont invitées à transmettre systématiquement les données relatives au stationnement cyclable sur leur territoire. 
Elles peuvent ajouter le mot-clef "stationnement cyclable" lors de la publication du jeu de données dans leur espace de publication (portail local ou régional) ou directement sur data.gouv.fr.
Les producteurs pourront :
- publier directement sur data.gouv.fr ;
- publier sur un portail local ou régional et s'assurer que les données publiées sont bien moissonnées et référencées sur data.gouv.fr.

Nous préconisons aux producteurs de données de publier leurs fichiers avec la règle de nommage suivante : stationnementcyclable_nom.csv avec nom étant le nom de la collectivité productrice des données, par exemple StationnementCyclable_Amberieu_en_Bugey.csv

En cas de mise à jour d’un fichier déjà intégré à la base consolidée, il est recommandé de prévenir l’équipe transport.data.gouv.fr qui s’assurera de l'actualisation du fichier en question et de son intégration dans la base consolidée.

## Consolidation

Le base nationale du stationnement cyclable sera construite par l'assemblage (ou consolidation) de l'ensemble des fichiers locaux publiés sur data.gouv.fr. Un travail de veille sur les potentiels doublons sera réalisé par l'équipe transport.data.gouv.fr.

## Mise-à-jour

La consolidation de la base sera effectuée en continu par transport.data.gouv.fr à partir des fichiers publiés sur data.gouv avec le tag "stationnement cyclable” par les producteurs. De nouvelles versions seront publiées lorsque de nouveaux aménagements de stationnement cyclable seront recensés ou mis-à-jour par les producteurs. Cette mise à jour se fait à partir du fichier communiqué précédemment et en reprenant, en les modifiant le cas échéant, les données existantes. Le fichier principal du dataset constitue ainsi systématiquement la dernière mise-à-jour.


## Conditions d’utilisation

Comme indiqué dans les métadonnées, le fichier et ses mises-à-jour sont distribués sous la licence ODbL. Cela signifie que vous pouvez télécharger librement cette base, la réutiliser, la modifier, l’utiliser commercialement, etc, tant que vous en mentionnez la source (par exemple dans les mentions légales de votre application) et que vous repartagez les modifications, améliorations et corrections éventuelles dans les mêmes conditions que cette base (licence ODbL). Plus d’informations [ici](https://doc.transport.data.gouv.fr/reutilisateurs/licence-odbl-et-conditions-de-reutilisation).

Nous tenons à remercier les membres du groupe de travail pour leur investissement dans l'élaboration de ce schéma.

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
```


