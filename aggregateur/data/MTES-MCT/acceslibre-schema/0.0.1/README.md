---
permalink: /MTES-MCT/acceslibre-schema/latest.html
redirect_from: /MTES-MCT/acceslibre-schema/0.0.1.html
title: Schéma des données d'accessibilité des ERPs
version: 0.0.1
---

## Schéma d’accessibilité aux établissements recevant du public (ERP)

Ce schéma permet de modéliser les informations d’accessibilité aux bâtiments recevant du public, afin notamment de
faciliter la mobilité des personnes en situation de handicap.

### Contexte

Au-delà de la loi du 1er janvier 2015, qui prévoit que tout établissement recevant du public (ERP) doit être accessible
à tous, y compris aux personnes en situation de handicap, quel que soit leur handicap, l’objet d’Acceslibre est très
simple: **recenser les établissements recevant du public et informer sur leur niveau d’accessibilité**.

Acceslibre a pour objectif de **permettre à l’usager en situation de handicap de connaître l’accessibilité d’un
établissement avant de s’y rendre.** L’utilisateur pourra contribuer de manière collaborative à enrichir la base en
décrivant un établissement visité ou en faisant un retour sur son expérience.

Pour ce faire, Acceslibre récolte les données d’accessibilité en impliquant notamment les collectivités territoriales et
les gestionnaires d’ERP.

Pour les gestionnaires, Acceslibre permettra de **mettre en valeur l’accessibilité de leur établissement.**

Pour les administrations, Acceslibre permettra d’avoir une vision globale sur l’accessibilité des établissements et,
ainsi, de mieux cibler la stratégie à mener pour **faire progresser la politique de l’accessibilité du territoire.**

L’équipe d'Acceslibre mettra à disposition des acteurs un générateur CSV conforme au schéma de données, ainsi
qu’un validateur pour les collectivités qui voudraient créer le fichier par leurs soins.

### Cadre juridique

La loi pour une république numérique (LRN) promulguée en 2016 facilite et incite notamment à l’ouverture des données de
la part des collectivités, y compris en matière d'accessibilité. Elle est renforcée en ce sens par la loi d’orientation
des mobilités de 2019 (LOM), car Acceslibre s’inscrit également dans un paysage plus vaste en contribuant à renforcer
l’**accessibilité de l’ensemble de la chaîne du déplacement**, en complémentarité des données sur la voirie, les espaces
publics et les transports. En respectant le format d’échange commun désigné par l’Union européenne ainsi que le standard
de données, Acceslibre garantit une circulation fluide des informations.

Afin de faciliter la réutilisation de ces données, et réduire le coût d'intégration de ces données dans des services
tiers, un schéma a été défini afin d'assurer une harmonisation de ces données sur l'ensemble du territoire. Il est
demandé aux producteurs de données de compléter le schéma avec le plus grand niveau de détail possible, afin de
transmettre une information plus riche à l'usager final.

### Finalité

La base des informations d’accessibilité des ERP en France permet de regrouper en un unique fichier consolidé l'ensemble
des données d’accessibilité des établissements dans un format standard et unifié. Cette standardisation des données
facilite grandement le travail de réutilisation de ces données par des services tiers.

- Elle permet de présenter avec un niveau de qualité remarquable et actualisé des données sur les ERP pour chaque
  collectivité renseignée. Cela permet notamment à des services innovants de proposer des services de mobilité “point à
  point” tels que des MaaS (Mobility as a Service) à leurs usagers, combinant données de transports et information
  d'accessibilité du lieu de destination par exemple
- Elle peut également servir à apporter une plus grande transparence sur l'offre de service aux citoyens dans une ville,
  permettant également aux élus d’anticiper leurs choix en matière d’urbanisme, d'inclusion et de politique sociale.

### Description du schéma

Une description détaillée (champ par champ) du modèle de donnée est accessible ici : https://github.com/.... Ce schéma
respecte le standard Table Schema. Pour en savoir plus, voir la page dédiée : https://github.com/...

### Autres liens utiles

Documentation Acceslibre: [https://app.gitbook.com/@fabrique-numerique/s/acceslibre/]()

### Transmission des données

Dans le but de constituer un répertoire de référence des établissements accessibles recevant du public France, les
collectivités peuvent transmettre systématiquement les données relatives aux ERP publics, ou privés à usage public.
Elles peuvent ajouter leur jeu de données sur leur espace de publication ou directement sur data.gouv.fr. En cas de mise
à jour d'un fichier déjà intégré à la base consolidée, il est recommandé de prévenir l'équipe Acceslibre afin de s'
assurer que la mise à jour du fichier a bien été prise en compte et intégrée à la base consolidée.

### Format de fichier

Le fichier doit être encodé en UTF-8 et utiliser le point-virgule comme séparateur de colonnes. Aucune valeur ne peut
contenir le caractère « point-virgule » choisi comme séparateur, sauf dans le cas des “listes ouvertes” ou on peut
séparer les différents attributs par des points virgules. L'en-tête de colonne sur la première ligne est obligatoire.
Tous les champs sont obligatoires ; si la donnée n'est pas disponible, la colonne doit être présente et vide. Nom du
fichier : acceslibre_nom_AAAAMMJJ.csv avec nom étant le nom de la collectivité productrice des données, par exemple
acceslibre_clichy_20211013.csv.

### Mises à jour

Les mises à jour sont effectuées à partir du fichier communiqué précédemment et en reprennent, en les modifiant le cas
échéant, les données qui y figurent déjà.

### Nous contacter

Pour contacter l’équipe Acceslibre en charge de l’élaboration et de l’utilisation de ce schéma, n’hésitez pas à nous
écrire à l’adresse suivante : [acceslibre@beta.gouv.fr](mailto:acceslibre@beta.gouv.fr). Toutes les contributions sont
les bienvenues !