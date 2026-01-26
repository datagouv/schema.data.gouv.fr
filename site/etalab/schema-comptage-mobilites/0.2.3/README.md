<MenuSchema />

# Schéma de données pour le comptage des mobilités

Spécifications du fichier d'échange relatif aux comptages des mobilités 

Le schéma de comptage des mobilités est structuré en trois notions distinctes : les sites, les channels, et les mesures.
Chacune de ces notions est retranscrite dans son propre fichier :
les sites vont dans un fichier `sites.csv` avec une ligne par site les channels dans un fichier `channels.csv` (idem), les mesures dans un fichier `measures.csv` (idem).
Chaque entité a son propre fichier. Ces fichiers s’articulent entre eux grâce à des identifiants.


## Contexte

Dans le cadre des travaux de l’équipe du Point d’accès national et de la mise en œuvre de l’ouverture des données pour améliorer l’information dont disposent les voyageurs, l’équipe de [transport.data.gouv.fr](https://transport.data.gouv.fr/), en collaboration avec l'association [Vélo & Territoires](https://www.velo-territoires.org/) et [Eco-compteur](https://www.eco-compteur.com/), propose une solution simple et structurée pour l’ouverture des données de comptage des mobilités : le schéma national de comptage des mobilités. Il s’adresse à toute collectivité qui souhaite se lancer dans l’ouverture de jeux de données décrivant la fréquentation de leurs infrastructures.

Trois ateliers ouverts (le 23/04/2021, le 17/06/2021, et le 28/09/2021) ont permis sa production. Il a notamment été établi après des entretiens avec différents fournisseurs de solutions de comptage ([Eco-Compteur](https://www.eco-compteur.com/), [Metrocount](https://metrocount.com/fr/), [Alyce](https://alyce.fr/), [Sterela](http://www.sterela.fr/), [TagMaster](https://tagmaster.com/), [Wintics](https://wintics.com/fr/)) afin de nous assurer que les champs proposés répondaient bien à leurs besoins et compétences. Ce schéma permet de recenser les sites de comptages et de comptabiliser la fréquentation d'infrastructures. 

Pour être guidé pas à pas, merci de vous rendre sur la [documentation officielle de transport.data.gouv.fr](https://doc.transport.data.gouv.fr/producteurs/comptage-des-mobilites), Point d'accès national aux données de transport.

## Cadre juridique

En dehors des données du trafic routier couvertes par la Directive STI, l’ouverture des données selon le schéma de comptage des mobilités, notamment pour les mobilités douces, relève du seul cadre général de l'ouverture des données publiques définie dans le livre III du Code des relations entre le public et l'administration (CRPA).

## Finalité

Pour faciliter la réutilisation et réduire le coût d’intégration des données de comptage des mobilités dans des services tiers, un schéma a été défini afin d’assurer une harmonisation de ces données sur l’ensemble du territoire. Il permet de modéliser les comptages de différents types de mobilité : vélos, trottinettes, piétons, scooters, motos, camions, etc. 

Ce schéma définit des informations obligatoires, qui sont nécessaires pour fournir une information voyageur minimale, et complémentaires à fournir par le producteur. Cette distinction a été mise en place pour ne pas pénaliser les petits producteurs de données, et définit un standard minimal de complétude des données. Il est toutefois demandé aux producteurs de données de compléter le schéma avec le plus grand niveau de détail possible, afin de transmettre une information plus riche à l’usager final.
La base présente plusieurs cas d’usage : elle recense les sites de comptage d’une collectivité en permettant à des services de calcul d’itinéraire d’intégrer ces données et à chacun de suivre la fréquentation des mobilités d'un territoire donné.

## Format de fichier

Les jeux de données seront publiés au format CSV UTF-8 avec séparateur virgule ",". Certains champs sont obligatoires et d'autres optionnels. Les champs obligatoires doivent être complétés. Les champs optionnels peuvent être vides si la donnée n’est pas disponible. La colonne doit toutefois être présente.

## Utilisation de notre outil d'aide à la saisie et du validateur

Pour être guidé pas à pas, merci de vous rendre sur la [documentation officielle de transport.data.gouv.fr](https://doc.transport.data.gouv.fr/producteurs/comptage-des-mobilites), Point d'accès national aux données de transport.

Pour faciliter le remplissage des données, Etalab met à disposition un générateur CSV conforme au schéma de données, vous permettant de remplir les différents champs demandés. Cet outil vous permet de vous assurer que les données que vous remplissez sont au bon format. Pour l'utiliser, rendez-vous sur [https://publier.etalab.studio](https://publier.etalab.studio), vous pourrez alors publier votre fichier à partir d'un :

- CSV déjà existant ;
- formulaire ;
- tableur (encore en expérimentation).

Une fois vos données chargées ou remplies, un formulaire vous proposera de les publier sur data.gouv.fr.

Avant de publier vos données, vous pouvez vérifier qu'elles sont valides depuis [le validateur Validata](https://validata.fr/) en choisissant le schéma associé au fichier dans la partie "schema.data.gouv.fr".

## Publication

Dans le but de maintenir à jour un répertoire des compteurs de vélos en France, les collectivités sont invitées à transmettre systématiquement les données relatives aux compteurs sur leur territoire. Elles peuvent ajouter le mot-clef `comptage-mobilites` lors de la publication du jeu de données dans leur espace de publication (portail local ou régional) ou directement sur data.gouv.fr.

Les producteurs pourront :

- publier directement sur data.gouv.fr ;
- publier sur un portail local ou régional et s'assurer que les données publiées sont bien moissonnées et référencées sur data.gouv.fr.
- 
Nous préconisons aux producteurs de données de publier leurs fichiers avec la règle de nommage suivante : `comptagemobilites_nom.csv` avec nom étant le nom de la collectivité productrice des données, par exemple `comptagemobilite_baix.csv`.

Nous recommandons également de publier les trois fichiers dans un même jeu de données et de [préciser le schéma auquel chaque ressource fait référence](https://doc.transport.data.gouv.fr/producteurs/comment-et-pourquoi-les-producteurs-de-donnees-utilisent-ils-le-pan/publier-un-jeu-de-donnees#3-preciser-a-quel-schema-les-donnees-font-reference-pour-les-donnees-basees-sur-un-schema-national).  


## Conditions d’utilisation

Les conditions d'utilisation sont indiquées dans les métadonnées du jeu de données, et sont définies par la licence choisie par le producteur. 
Plus d'informations sur les conditions d'utilisations pour la 
- [licence ouverte (Licence Etalab)](https://doc.transport.data.gouv.fr/presentation-et-mode-demploi-du-pan/conditions-dutilisation-des-donnees/licence-ouverte) ;
- [licence ODbL](https://doc.transport.data.gouv.fr/presentation-et-mode-demploi-du-pan/conditions-dutilisation-des-donnees/licence-odbl) ;
- [licence non spécifiée](https://doc.transport.data.gouv.fr/presentation-et-mode-demploi-du-pan/conditions-dutilisation-des-donnees/licence-non-specifiee).


Nous tenons à remercier les membres du groupe de travail pour leur investissement dans l'élaboration de ce schéma.


## Fichiers d'exemple
Des fichiers d'exemples sont fournis pour ce schéma :

- un fichier d'exemple `exemple-valide.csv` avec tous les champs remplis ;
- un fichier d'exemple `exemple-valide-eco-compteur.csv` élaboré par Eco-Compteur dont certaines valeurs optionnelles ne sont pas renseignées

## Notes techniques pour contribuer à ce schéma

Ce schéma s'appuie sur [TableSchema](https://specs.frictionlessdata.io/table-schema/). Pour le modifier, il peut être utile en particulier de se référer à la [spécification des descripteurs de champs](https://specs.frictionlessdata.io/table-schema/#field-descriptors).

### Fichiers disponibles

Ce dépôt contient un ensemble de fichiers utiles pour un dépôt d'un schéma [Table Schema](https://specs.frictionlessdata.io/table-schema/).

- `CHANGELOG.md` contient la liste des changements entre les différentes versions du schéma ;
- `LICENSE.md` est le fichier de licence du dépôt ;
- `README.md` est le fichier que vous lisez actuellement ;
- `requirements.txt` liste les dépendances Python nécessaires pour effectuer des tests en intégration continue sur le dépôt.

### Intégration continue

Ce dépôt est configuré pour utiliser de l'intégration continue, si vous utilisez GitHub. À chaque commit, une suite de tests sera lancée via [GitHub Actions](https://github.com/features/actions) afin de vérifier :

- que votre schéma est valide à la spécification Table Schema ;
- que vos fichiers d'exemples sont conformes au schéma.

Vous pouvez consulter la configuration utilisée dans [`.github/workflows/test.yml`](.github/workflows/test.yml).
