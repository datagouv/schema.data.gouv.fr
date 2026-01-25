<MenuSchema />

<MenuSchema />

## Schéma d’accessibilité aux établissements recevant du public (ERP)

Ce schéma permet de modéliser les informations d’accessibilité aux bâtiments recevant du public, afin notamment de 
faciliter la mobilité des personnes en situation de handicap. Le schéma d’Acceslibre est cohérent avec 
le [standard de données d’accessibilité](http://cnig.gouv.fr/wp-content/uploads/2021/11/211021_Standard_CNIG_Accessibilite_v2021-10.pdf) 
validé par le CNIG et, plus précisément le modèle ERP (décrit en page 20 du standard).

Adopter et respecter ce schéma est une garantie, non seulement d’efficacité et de pertinence des informations collectées, mais aussi d’interopérabilité et de facilité du partage des données.

[Schéma au format json](https://github.com/MTES-MCT/acceslibre-schema/blob/master/schema.json)

[Description des champs acceslibre](https://acceslibre.beta.gouv.fr/contrib/documentation/)

[Schéma au format excel](https://github.com/MTES-MCT/acceslibre-schema/blob/master/schema_format_excel.xls)

### Table des matières
1. [Contexte](#contexte)
2. [Cadre juridique](#juridique)
3. [Finalité](#finalite)
4. [Description du schéma](#schema)
5. [OpenData](#opendata)
6. [Transmission des données](#transmission)
7. [Format de fichier](#format)
8. [Mises à jour](#update)
9. [Nous contacter](#contact)


### Contexte <a name="contexte"></a>

Depuis le 1er janvier 2015, tous les établissements recevant du public (ERP) doivent être accessibles à tous, quel 
que soit le handicap éventuel du client ou de l’usager. L'objectif d’Acceslibre est simple : recenser les 
établissements recevant du public et informer sur leur niveau d’accessibilité.

En effet, une personne handicapée a besoin de certaines informations pour organiser et anticiper une sortie ou un déplacement, au même titre qu’une adresse ou un jour d’ouverture/fermeture. Or, ces informations sur le niveau d’accessibilité n’existent pas ou trop peu sur le web.  Acceslibre a pour objectif de **permettre à l’usager en situation de handicap de connaître l’accessibilité d’un établissement avant de s’y rendre et de participer à l’enrichissement du web** sur ce domaine. 

L’utilisateur pourra contribuer de manière collaborative à enrichir la base en décrivant un établissement visité ou en faisant un retour sur son expérience.Pour ce faire, Acceslibre récolte les données d’accessibilité en impliquant un maximum de volontaires, que ce soient des collectivités territoriales, les gestionnaires d’ERP, les associations de personnes handicapées, le grand public.

Pour les gestionnaires, Acceslibre permet de **mettre en valeur l’accessibilité de leur établissement.**

Pour les réutilisateurs, Acceslibre propose des outils permettant d’**afficher simplement les informations d’accessibilité.**

Pour les administrations, Acceslibre permettra d’avoir une vision globale sur l’accessibilité des établissements et, ainsi, de mieux cibler la stratégie à mener pour **faire progresser la politique de l’accessibilité du territoire.**

L’équipe d'Acceslibre met à disposition des acteurs un générateur CSV conforme au schéma de données, ainsi qu’un validateur pour ceux qui voudraient créer le fichier par leurs soins (schéma en format excel disponible ci-dessus).




### Cadre juridique <a name="juridique"></a>

La Loi pour une République numérique (LRN) promulguée en 2016 facilite et incite notamment à l’ouverture des données de la part des collectivités, y compris en matière d'accessibilité. Elle est renforcée en ce sens par la loi d’orientation des mobilités de 2019 (LOM), car Acceslibre s’inscrit également dans un paysage plus vaste en contribuant à renforcer l’**accessibilité de l’ensemble de la chaîne du déplacement**, en complémentarité des données sur la voirie, les espaces publics et les transports. En respectant le format d’échange commun désigné par l’Union européenne ainsi que le standard de données, Acceslibre garantit une circulation fluide des informations.

Afin de faciliter la réutilisation de ces données, et réduire le coût d'intégration de ces données dans des services tiers, un schéma a été défini afin d'assurer une harmonisation de ces données sur l'ensemble du territoire. Il est demandé aux producteurs de données de compléter le schéma avec le plus grand niveau de détail possible, afin de transmettre une information plus riche à l'usager final.


### Finalité <a name="finalite"></a>

La base des informations d’accessibilité des ERP en France permet de regrouper en un unique fichier consolidé l'ensemble des données d’accessibilité des établissements dans un format standard et unifié. Cette standardisation des données facilite grandement le travail de réutilisation de ces données par des services tiers.

- Elle permet de présenter avec un niveau de qualité remarquable et de manière actualisée des données sur les ERP pour chaque
  collectivité renseignée. Cela permet notamment à des services innovants de proposer des services de mobilité “point à
  point” tels que les calculateurs d’itinéraires ou les GPS piétons à leurs usagers, combinant données de transports et information
  d'accessibilité du lieu de destination par exemple
- Elle peut également servir à apporter une plus grande transparence sur l'offre de service aux citoyens dans une ville,
  permettant également aux élus d’anticiper leurs choix en matière d’urbanisme, d'inclusion et de politique sociale.
- Elle est à disposition de tous les services et applications pouvant s’enrichir de ces informations et offrir une meilleure prestation aux usagers

### Description du schéma <a name="schema"></a>

Le schéma est disponible en format [json](https://github.com/MTES-MCT/acceslibre-schema/blob/master/schema.json) ou [excel](https://github.com/MTES-MCT/acceslibre-schema/blob/master/schema_format_excel.xls) (à télécharger). (voir procédure avant dépôt des données)

Une description détaillée (champ par champ) du modèle de donnée est accessible ici : [https://schema.data.gouv.fr/MTES-MCT/acceslibre-schema/0.0.10/documentation.html](https://schema.data.gouv.fr/MTES-MCT/acceslibre-schema/0.0.10/documentation.html). Ce schéma
respecte le standard Table Schema. Pour en savoir plus, voir la page dédiée : [TableSchema](https://specs.frictionlessdata.io/table-schema/)

Une description non technique des champs est également disponible ici : [https://acceslibre.beta.gouv.fr/contrib/documentation/](https://acceslibre.beta.gouv.fr/contrib/documentation/)

### OpenData <a name="opendata"></a>

Les données d’Acceslibre sont ouvertes, c'est-à-dire qu’elles sont à la disposition de quiconque souhaite les récupérer.

Acceslibre publie régulièrement son jeu de données actualisé :
 [https://www.data.gouv.fr/fr/datasets/acceslibre/](https://www.data.gouv.fr/fr/datasets/acceslibre/)

Notre politique Open Data: [https://fabrique-numerique.gitbook.io/acceslibre/acceslibre-en-open-data-donnees-ouvertes](https://fabrique-numerique.gitbook.io/acceslibre/acceslibre-en-open-data-donnees-ouvertes)

### Transmission des données <a name="transmission"></a>

Dans le but de constituer un répertoire de référence des établissements recevant du public en France, tout acteur volontaire peut transmettre des données relatives aux ERP publics ou privés. Voici les étapes à suivre en fonction du format choisi :

1) Format json :
   1) Publier le jeu de données sur data.gouv.fr 
   2) Prévenir l’équipe acceslibre du dépôt en écrivant un mail à [acceslibre@beta.gouv.fr](mailto:acceslibre@beta.gouv.fr)

2) Format csv, via le modèle fourni “schema_format_excel” 
   1) Télécharger et remplissez le document excel [schéma format excel](https://github.com/MTES-MCT/acceslibre-schema/blob/master/schema_format_excel.xls)
   2) Avant le dépôt de données :
      * supprimer les lignes 2,3 et tout les lignes “vides”(le modèle comportant 100 lignes)
      * supprimer l’onglet ‘tuto’ 
      * puis “enregistrer sous”, choisir format csv (dans la fenêtre “jeu de caractères”, choisir Unicode UTF-8).
Votre fichier est prêt à être déposé.
3) Déposer le fichier sur : [https://publier.etalab.studio/select?schema=MTES-MCT%2Facceslibre-schema](https://publier.etalab.studio/select?schema=MTES-MCT%2Facceslibre-schema)
(création de compte obligatoire)
4) Prévenir l’équipe acceslibre du dépôt du fichier en écrivant un mail à : [acceslibre@beta.gouv.fr](mailto:acceslibre@beta.gouv.fr)


### Format de fichier <a name="format"></a>

* Le fichier doit être encodé en UTF-8 et utiliser le point-virgule comme séparateur de colonnes.
* Aucune valeur ne peut contenir le caractère « point-virgule » choisi comme séparateur, sauf dans le cas des “listes ouvertes” ou on peut
séparer les différents attributs par des points virgules.
* L'en-tête de colonne sur la première ligne est obligatoire. 
* Tous les champs sont obligatoires ; si la donnée n'est pas disponible, la colonne doit être présente et vide. 
* Nom du fichier : acceslibre_nom_AAAAMMJJ.csv avec nom étant le nom de la collectivité productrice des données, par exemple
acceslibre_clichy_20211013.csv.

### Mises à jour <a name="update"></a>

Les mises à jour sont effectuées à partir du fichier communiqué précédemment et en reprennent, en les modifiant le cas
échéant, les données qui y figurent déjà.

### Nous contacter <a name="contact"></a>

Pour contacter l’équipe Acceslibre en charge de l’élaboration et de l’utilisation de ce schéma, n’hésitez pas à nous
écrire à l’adresse suivante : [acceslibre@beta.gouv.fr](mailto:acceslibre@beta.gouv.fr). Toutes les contributions sont
les bienvenues !
