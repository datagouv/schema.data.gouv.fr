<MenuSchema />

<MenuSchema />

<MenuSchema />

# Schéma des lieux de stationnement
Ce schéma permet de modéliser les stationnements en parcs publics et privés à usage public.

## Contexte

Dans le cadre des travaux de l’équipe du Point d’accès national et de la mise en oeuvre de l’ouverture des données pour améliorer l’information dont disposent les voyageurs, l’équipe de [transport.data.gouv.fr](https://transport.data.gouv) propose une solution simple et structurée pour l’ouverture des données de parcs de stationnement en France : la Base Consolidée des Données de Stationnement (BCS).

Il s’adresse à toute nouvelle agglomération qui souhaiterait se lancer dans l’ouverture d’une base décrivant les stationnements hors-voirie de son ressort territorial.

L’équipe de [transport.data.gouv.fr](https://transport.data.gouv) mettra à disposition des acteurs un générateur CSV conforme au schéma de données, ainsi qu’un validateur pour les collectivités qui voudraient créer le fichier par leurs soins.

## Cadre juridique

L'ouverture des données de stationnement nécessaires à l'information voyageur est une obligation légale, définie par le [règlement délégué (UE) 2017/1926](https://eur-lex.europa.eu/legal-content/FR/TXT/PDF/?uri=CELEX:32017R1926) concernant la mise à disposition de services d'informations sur les déplacements multimodaux. Le règlement statue la création d'un Point d'Accès National par pays membre, et que les données nécéssaires à l'information voyageur y soient mises à disposition. Le règlement exige la mise à disposition des données concernant la localisation des lieux permettant le stationnement à échéance du 1er décembre 2019 ; la mise à disposition de données dynamiques renseignant la disponibilité des lieux de stationnement à échéance du 1er décembre 2020 ; et l'information relative au coût de stationnement à échéance du 1er décembre 2021.

Ces obligations sont précisées en droit français par la loi d'orientation des mobilités (LOM), qui désigne les collectivités territoriales comme étant responsables de la mise à disposition des données sur la plateforme [transport.data.gouv.fr](https://transport.data.gouv.fr), qui constitue le Point d'Accès National des données de mobilité pour la France.

>Lorsqu’elles confient la gestion du stationnement en ouvrage ou sur voirie à un prestataire, les collectivités territoriales et leurs groupements sont responsables de la fourniture des données mentionnées au 3°. Elles peuvent en confier la charge à ce prestataire" (Article 9, alinéa 5)

Les collectivités, et par extension leurs prestataires, ont la responsabilité de transmettre les données existantes les plus complètes possibles.

Afin de faciliter la réutilisation de ces données, et réduire le coût d'intégration de ces données dans des services tiers, un schéma a été défini afin d'assurer une harmonisation de ces données sur l'ensemble du territoire. Le schéma définit des informations **nécessaires** et des données **additionnelles**. Cette distinction a été mise en place pour ne pas pénaliser les petits producteurs de données, et définit un standard minimal de complétude des données. Il est cependant demandé aux producteurs de données de compléter le schéma avec le plus grand niveau de détail possible, afin de transmettre une information plus riche à l'usager final.

## Finalité

La base des stationnements permet de regrouper en un unique fichier consolidé l'ensemble de l'offre de stationnement en France, dans un format standard et unifié. Cette standardisation des données facilite grandement le travail d'intégration de ces données par des services réutilisateurs.

La base présente plusieurs cas d'usage :
- Elle permet de mettre en avant l'offre de stationnement d'une collectivité en permettant à des services de calcul d'itinéraire d'intégrer ces données. Cela permet notamment à ces services de proposer des itinéraires multimodaux à leurs usagers, combinant voiture et transports en commun par exemple ;
- Elle peut servir également à apporter une plus grande transparence sur l'offre de stationnement existante dans une ville, et les tarifs qui y sont pratiqués.

### Données tarifaires

Les données tarifaires étant particulièrement complexes à modéliser, le parti a été pris de demander aux producteurs de données de transmettre la meilleure estimation possible des tarifs s'appliquant à un usager du parking exempt de tout abonnement ou avantage (pas d'abonnement, sans tarif résident ou tarif réduit…) par tranche horaire.

Il est utile de noter, à la fois du côté du producteur et du réutilisateur de ces données, que l'équipe transport.data.gouv.fr ne peut pas garantir l'exactitude de l'information transmise, et encourage l'usager final à consulter le site web du gestionnaire de parking afin d'obtenir une estimation la plus fiable possible des tarifs.

### Transmission des données

Dans le but de constituer un répertoire consolidé des parcs de stationnement en France, les collectivités peuvent transmettre systématiquement les données relatives aux parcs de stationnement publics, ou privés à usage public.

Elles peuvent ajouter le mot-clef `stationnement` lors de la publication du jeu de données sur leur espace de publication ou directement sur data.gouv.fr.

En cas de mise à jour d'un fichier déjà intégré à la base consolidée, il est recommandé de prévenir l'équipe transport.data.gouv.fr afin de s'assurer que la mise à jour du fichier a bien été pris en compte et intégré à la base consolidée.

### Format de fichier

Le fichier doit être encodé en UTF-8 et utiliser le point-virgule comme séparateur de colonnes. Aucune valeur ne peut contenir le caractère « point-virgule » choisi comme séparateur, sauf dans le cas des “listes ouvertes” ou on peut séparer les différentes attributs par des points virgules. L'en-tête de colonne sur la première ligne est obligatoire. Tous les champs sont obligatoires ; si la donnée n'est pas disponible, la colonne doit être présente et vide.

Nom du fichier : `Parking_nom_AAAAMMJJ.csv` avec nom étant le nom de la collectivité productrice des données, par exemple `Parking_Ain_20191013.csv`.

### Fichiers d'exemples
Vous pouvez télécharger des fichiers gabarits d'exemple.
- Un [fichier valide au format CSV](https://github.com/etalab/schema-stationnement/raw/v0.1.5/exemple-valide.csv) ;
- Un [fichier invalide au format CSV](https://github.com/etalab/schema-stationnement/raw/v0.1.5/exemple-invalide.csv) ;

### Mises à jour

Les mises à jour sont effectuées à partir du fichier communiqué précédemment et en reprennent, en les modifiant le cas échéant, les données qui y figurent déjà.

## Consolidation

Le Point d'accès national aux données de transport ([transport.data.gouv.fr](https://transport.data.gouv.fr)) réalise une consolidation régulière des fichiers déposés sur [data.gouv.fr](https://data.gouv.fr) avec le mot-clé `stationnement` respectant le format de référence décrit ici.