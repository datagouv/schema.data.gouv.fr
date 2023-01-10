<MenuSchema />

:warning: Travail en cours de mise au point pour le schéma de comptage des mobilités.

# Schéma de données pour le comptage des mobilités - Fichier sites

Spécifications du fichier d'échange relatif aux comptages des mobilités : fichier sites.

Le schéma de comptage des mobilités est structuré en trois notions distinctes : les sites, les channels, et les mesures.
Chacune de ces notions est retranscrite dans son propre fichier :
les sites vont dans un fichier “sites.csv” avec une ligne par site les channels dans un fichier “channels.csv” (idem)les mesures dans un fichier “measures.csv” (idem)
Pour l'instant, chacune de ces notions a sa propre page sur schema.data.gouv.fr car des limitations techniques ne permettaient pas de les héberger sur la même page. Chaque entité a son propre fichier. Ces fichiers s’articulent entre eux grâce à des identifiants. 
- channel : https://github.com/etalab/schema-comptage-mobilites-channel
- measure : https://github.com/etalab/schema-comptage-mobilites-measure

Ce schéma est spécifique à la notion de site. 
Le fichier site permet de décrire les réalités physiques du site de comptage des mobilités. Ainsi, le “site” représente un lieu physique, auquel les “channels” sont rattachés. Un site a une position géographique immuable (latitude/longitude), dispose d’un code commune de rattachement, d’un type de voie. Le champ "external_ids" permet notamment d'articuler le schéma au schéma national des aménagements cyclables.


## Contexte

Dans le cadre des travaux de l’équipe du Point d’accès national et de la mise en œuvre de l’ouverture des données pour améliorer l’information dont disposent les voyageurs, l’équipe de transport.data.gouv.fr, en collaboration avec l'association [Vélo & Territoires](https://www.velo-territoires.org/) et [Eco-compteur](https://www.eco-compteur.com/), propose une solution simple et structurée pour l’ouverture des données de comptage des mobilités : le schéma national de comptage des mobilités. Il s’adresse à toute collectivité qui souhaite se lancer dans l’ouverture de jeux de données décrivant la fréquentation de leurs infrastructures.

Trois ateliers ouverts (le 23/04/2021) le 17/06/2021, et le 28/09/2021) ont permis sa production. Il a notamment été établi après des entretiens avec différents fournisseurs de solutions de comptage ([Eco-Compteur](https://www.eco-compteur.com/), [Metrocount](https://metrocount.com/fr/), [Alyce](https://alyce.fr), [Sterela](http://www.sterela.fr/), [TagMaster](https://tagmaster.com/), [Wintics](https://wintics.com/fr/)) afin de nous assurer que les champs proposés répondaient bien à leurs besoins et compétences. Ce schéma permet de recenser les sites de comptages et de comptabiliser la fréquentation d'infrastructures. 

## Cadre juridique

L’ouverture des données sur le comptage des mobilités ne répond à aucune obligation réglementaire et n'est pas encadrée par le Règlement Européen (UE 2017 1926) ni par la Loi d'Orientation des Mobilités.

Les collectivités harmonisent et publient donc ces données librement. 

## Finalité

Pour faciliter la réutilisation et réduire le coût d’intégration des données de comptage des mobilités dans des services tiers, un schéma a été défini afin d’assurer une harmonisation de ces données sur l’ensemble du territoire. Il permet de modéliser les comptages de différents types de mobilité : vélos, trottinettes, piétons, scooters, motos, camions, etc. 

Ce schéma permet d'estimer la fréquentation d'infrastructures grâce à des données dynamiques de comptage. 
Il doit être associé au schéma "site" et "channel" de comptage des mobilité. Il ne peut être réutilisé sans ces fichiers.

Ce schéma définit des informations obligatoires, qui sont nécessaires pour fournir une information voyageur minimale, et complémentaires à fournir par le producteur. Cette distinction a été mise en place pour ne pas pénaliser les petits producteurs de données, et définit un standard minimal de complétude des données. Il est toutefois demandé aux producteurs de données de compléter le schéma avec le plus grand niveau de détail possible, afin de transmettre une information plus riche à l’usager final.
La base présente plusieurs cas d’usage : elle recense les sites de comptage d’une collectivité en permettant à des services de calcul d’itinéraire d’intégrer ces données et à chacun de suivre la fréquentation des mobilités d'un territoire donné.

## Format de fichier

Les jeux de données seront publiées au format CSV UTF8 avec séparateur virgule ",". Certains champs sont obligatoires et d'autres optionnels. Les champs obligatoires doivent être complétés. Les champs optionnels peuvent être vides si la donnée n’est pas disponible. La colonne doit toutefois être présente.


## Publication

Dans le but de maintenir à jour un répertoire des compteurs de vélos en France, les collectivités sont invitées à transmettre systématiquement les données relatives aux compteurs sur leur territoire. 
Elles peuvent ajouter le mot-clef "comptage-mobilites" lors de la publication du jeu de données dans leur espace de publication (portail local ou régional) ou directement sur data.gouv.fr.
Les producteurs pourront :
- publier directement sur data.gouv.fr ;
- publier sur un portail local ou régional et s'assurer que les données publiées sont bien moissonnées et référencées sur data.gouv.fr.

Nous préconisons aux producteurs de données de publier leurs fichiers avec la règle de nommage suivante : `comptagemobilites_nom.csv` avec nom étant le nom de la collectivité productrice des données, par exemple `comptagemobilite_Baix.csv`


## Conditions d’utilisation

Comme indiqué dans les métadonnées, le fichier et ses mises-à-jour sont distribués sous la licence ODbL. Cela signifie que vous pouvez télécharger librement cette base, la réutiliser, la modifier, l’utiliser commercialement, etc, tant que vous en mentionnez la source (par exemple dans les mentions légales de votre application) et que vous repartagez les modifications, améliorations et corrections éventuelles dans les mêmes conditions que cette base (licence ODbL). Plus d’informations [ici](https://doc.transport.data.gouv.fr/reutilisateurs/licence-odbl-et-conditions-de-reutilisation).

Nous tenons à remercier les membres du groupe de travail pour leur investissement dans l'élaboration de ce schéma.

## Informations complémentaires sur le fichier

Il y a plus d'informations complémentaires dans la [documentation du Point d'Accès National](https://doc.transport.data.gouv.fr/producteurs/comptage-des-mobilites). 

## Fichiers d'exemple
Deux fichiers d'exemples sont fournis pour ce schéma : 
- un fichier d'exemple "exemple-valide.csv" avec tous les champs remplis ; 
- un fichier d'exemple "exemple-valide-eco-compteur.csv" élaboré par [Eco-Compteur](https://www.eco-compteur.com/) dont certaines valeurs optionnelles ne sont pas renseignées. 


## Notes techniques pour contribuer à ce schéma

Ce schéma s'appuie sur [TableSchema](https://specs.frictionlessdata.io/table-schema/). Pour le modifier, il peut être utile en particulier de se référer à la [spécification des descripteurs de champs](https://specs.frictionlessdata.io/table-schema/#field-descriptors).

### Fichiers disponibles

Ce dépôt contient un ensemble de fichiers utiles pour un dépôt d'un schéma [Table Schema](https://specs.frictionlessdata.io/table-schema/).

- `CHANGELOG.md` contient la liste des changements entre les différentes versions du schéma ;
- `exemple-valide.csv` est un fichier CSV d'exemple conforme par rapport au schéma décrit dans `schema.json`  ;
- `LICENSE.md` est le fichier de licence du dépôt ;
- `README.md` est le fichier que vous lisez actuellement ;
- `requirements.txt` liste les dépendances Python nécessaires pour effectuer des tests en intégration continue sur le dépôt ;
- `schema.json` est le schéma au format Table Schema.

### Intégration continue

Ce dépôt est configuré pour utiliser de l'intégration continue, si vous utilisez GitHub. À chaque commit, une suite de tests sera lancée via [GitHub Actions](https://github.com/features/actions) afin de vérifier :

- que votre schéma est valide à la spécification Table Schema ;
- que vos fichiers d'exemples sont conformes au schéma.

Vous pouvez consulter la configuration utilisée dans `.github/workflows/test.yml`.

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
frictionless validate --schema schema.json exemple-valide-eco-compteur.csv

```

