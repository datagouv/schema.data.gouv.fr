<MenuSchema />

<MenuSchema />

<MenuSchema />

# Schema des Sites économiques
Dépot des documents et travaux du **[sous-groupe de travail ZAE](http://cnig.gouv.fr/gt-friches-a25940.html#Sous-groupe-ZAE)** du **[GT CNIG Aménagement](http://cnig.gouv.fr/gt-friches-a25940.html)**

![2023-04-06_111549](https://user-images.githubusercontent.com/79853274/230332190-26e6fc6e-bea4-44b4-9a5d-305de823d83c.png)

## Géostandard CNIG Sites Economiques

Le géostandard CNIG Sites Economiques est en cours d'élaboration. Il sera publié sur la page web des ressources du **[GT CNIG Aménagement](http://cnig.gouv.fr/gt-friches-a25940.html)**.

## Contexte

- Une ZAE est réservée à l’implantation d’entreprises. Elle réunit les pouvoirs publics, les collectivités et les entreprises dans une logique partenariale autour d’objectifs de croissance. Elle est en général placée sous le régime juridique du permis d'aménager ou d'une zone d'aménagement concerté (ZAC).
  - On dénombre un peu plus de 30 000 ZAE couvrant environ 500 000 ha du territoire national.
  - Depuis la loi NOTRe, **les ZAE relèvent de la compétence de l’EPCI**.

- La Loi Climat et Résilience impose de lutter contre le phénomène d'artificialisation des sols pour apporter une partie de réponse aux enjeux liés au changement climatique, avec des objectifs ciblés et intégrés dans les documents de planification et d’urbanisme. L'[article 191](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043957220) engage à réduire de moitié le rythme de consommation des espaces naturels, agricoles et forestiers (NAF), puis d'atteindre le "zéro artificialisation nette" (ZAN) en 2050. Dans ce contexte, toutes les initiatives de bonne utilisation et de recyclage du foncier économique participent potentiellement à cet objectif.

- Les ministères de l'Industrie et de la transition écologique souhaitent mettre en place le **portail national du foncier économique** en 2023. 

## Cadre juridique

- [L'article 220](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043957249) de la Loi Climat et Résilience impose de dresser l'inventaire exhaustif des zones d'activites économiques avant le 22 août 2023, puis sa mise à jour tous les 6 ans, comprenant :
  - l'état parcellaire des unités foncières
  - l’identification des propriétaires et des occupants
  - le taux de vacance de la , défini à partir des unités foncières inoccupées depuis au moins 2 ans par une activité assujettie à la cotisation foncière des entreprises (CFE).
  
- La directive européenne INSPIRE impose aux autorités publiques de publier sur Internet leurs données environnementales géographiques et de les partager entre elles. Les informations relatives aux  intègrent le **thème 4 "Usage des sols" de l'annexe III** de la directive.

## Finalité
Le sous-groupe ZAE du GT CNIG Aménagement a pour objectif de **standardiser l'identification et la caractérisation des Sites économiques, dans le but d'en dresser l'inventaire de façon homogène sur l'ensemble du territoire**.

Le **[GT CNIG Aménagement](http://cnig.gouv.fr/gt-friches-a25940.html)** et ses sous-groupes oeuvrent sous mandat de la **[Commission des Standards](http://cnig.gouv.fr/?page_id=640)** du Conseil National de l'Information Géolocalisée (CNIG). Le **[mandat du Groupe de Travail](http://cnig.gouv.fr/IMG/pdf/230119_mandat_gt_cnig_amenagement.pdf)** a été validé le 19 janvier 2023 par la Commission des standards.

## Stratégie

La stratégie des groupes de travail du CNIG repose sur une diversité d'approches :

- Construire une **gouvernance ouverte** à l'ensemble des parties prenantes, afin de susciter l’adhésion et créer le cadre favorable à la pérennité du dispositif.

- Promouvoir et exploiter les **retours d'expériences** afin d'étudier les diversités d'usages et embarquer les acteurs en les positionnant au centre du processus d’alimentation des référentiels géographiques.
    
- Privilégier **l’interopérabilité** entre système d'informations à l’échelle nationale pour favoriser le partage et l’échange de données : éviter les double stockages, double saisies, etc.

- S'appuyer sur les **processus éprouvés** de [standardisation du CNIG](http://cnig.gouv.fr/les-standards-cnig-a18959.html#Etapes-de-creation-d-un-Standard-CNIG) et de modélisation suivant [schema.data.gouv.fr](https://guides.etalab.gouv.fr/producteurs-schemas/)

L’objectif est d'aboutir à terme à un consensus qui se traduise en un standard et un modèle de donnée commun pour la thématique considérée.

## Schéma Sites Economiques

Le standard CNIG Sites Economiques fournit une description littérale des champs, non exlusivement technique.

Le fichier schema.json <contient / contiendra> **l'implémentation technique** du modèle conceptuel de données (MCD), au format json.

Ce schéma (ou Modèle Conceptuel de Donées - MCD) modélise les informations relatives aux sites économiques.

Adopter et respecter ce schéma est une garantie, non seulement d’efficacité et de pertinence des informations collectées, mais aussi d’interopérabilité et de facilité du partage des données.

Ce schéma respecte le standard [Table Schema](https://specs.frictionlessdata.io/table-schema/) et <est / sera> référencé sur [schema.data.gouv.fr](https://schema.data.gouv.fr). 

## Organisation du dépot

* Le répertoire [documentation](https://github.com/cnigfr/zones-activites-economiques/tree/main/documentation) contient les documents utiles au groupe de travail.
* Le répertoire [réunions](https://github.com/cnigfr/zones-activites-economiques/tree/main/r%C3%A9unions) contient les compte-rendus de réunions et les documents de suivi du groupe de travail.
* Le répertoire [standard](https://github.com/cnigfr/zones-activites-economiques/tree/main/standard) contient le standard CNIG Sites Economiques publié, sous **forme littérale** (.odt et/ou .pdf) avec les rubriques documentaires connexes (contexte, recommandations, métadonnées, etc.).
* Le fichier schema.json contient **l'implémentation technique** du modèle conceptuel de données (MCD), au format json destiné à être référencé sur schema.data.gouv.fr.

## Informations et participation au groupe de travail
Pour être tenu au courant et/ou participer aux échanges du GT CNIG Aménagement et ses sous-groupes, merci de [contacter le CNIG](http://cnig.gouv.fr/spip.php?page=contact). Il est également possible de s'abonner à la [lettre d'information du CNIG](http://cnig.gouv.fr/).

## Contributions
N'hésitez pas à utiliser les [Issues de ce Github](https://github.com/cnigfr/zones-activites-economiques/issues) pour toute expression de besoin, proposition d'amélioration du projet de standard Sites Economiques, retour utilisateur, etc.

## Actualisation
Le projet de standard Sites Economiques, puis le standard une fois validé par le CNIG, évoluera en fonction des évolutions réglementaires et de l'expression des besoins de la communauté des utlisateurs.

Les ressources associées et les bases de données correspondantes seront actualisées conformément au standard CNIG Sites Economiques.
Les mises à jour de base de données sont effectuées en modifiant le cas échéant les données qui y figurent déjà.

## OpenData - Données ouvertes
Les données relatives à l'identification et la caractérisation des zones d'activites économiques sont ouvertes et sont à la disposition de tous.
Elles seront publiées sur https://www.data.gouv.fr

## Nous contacter
Pour contacter le GT CNIG ZAE, n’hésitez pas à nous écrire à l’adresse suivante : cnig [at] cnig.fr
Toutes les contributions sont les bienvenues !

## Licence
Les travaux du GT CNIG ZAE sont réalisés sous [Licence Ouverte Etalab 2.0](https://www.etalab.gouv.fr/licence-ouverte-open-licence/)

