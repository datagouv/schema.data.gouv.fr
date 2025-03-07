<MenuSchema />

# Schema des opérations d'aménagement (OPAM)
Dépot des documents et travaux du **[sous-groupe de travail OPAM](http://cnig.gouv.fr/gt-friches-a25940.html#Sous-groupe-Operations-d-amenagement)** du **[GT CNIG Aménagement](http://cnig.gouv.fr/gt-friches-a25940.html)**

## Géostandard CNIG Opérations d'aménagement

Le géostandard CNIG Opérations d'aménagement est en cours d'élaboration. Il sera publié sur la page web des ressources du **[GT CNIG Aménagement](http://cnig.gouv.fr/gt-friches-a25940.html)**.

![240614_illustration pour std OPAM couv_OPAM+Crédit](https://github.com/user-attachments/assets/8abd190b-a4a9-433d-8d9e-c6618a0c7f77)


## Contexte

[Art. L300-1 du code de l'urbanisme](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037666634/2018-11-25) : *Les opérations d'aménagement ont pour objets de mettre en œuvre un **projet urbain**, une **politique locale de l'habitat**, d'organiser la mutation, le maintien, l'extension ou l'accueil des **activités économiques**, de favoriser le développement des **loisirs** et du **tourisme**, de réaliser des **équipements collectifs** ou des locaux de **recherche ou d'enseignement supérieur**, de lutter contre l'**insalubrité et l'habitat indigne ou dangereux**, de permettre le **renouvellement urbain**, de sauvegarder ou de mettre en valeur le **patrimoine bâti ou non bâti** et les **espaces naturels**, notamment en recherchant l'optimisation de l'utilisation des espaces urbanisés et à urbaniser.*

L'opération d'aménagement n'est ainsi définie que par ses finalités, mais pas dans la richesse de toutes ses composantes.

## Cadre juridique

- [Art. L300-1 du code de l'urbanisme](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037666634/2018-11-25)
  
- La directive européenne INSPIRE impose aux autorités publiques de publier sur Internet leurs données environnementales géographiques et de les partager entre elles. Les informations relatives aux opérations d'aménagement intègrent le **thème 4 "Usage des sols" de l'annexe III** de la directive.

## Finalité
Le sous-groupe OPAM du GT CNIG Aménagement a pour objectif de **standardiser l'identification et la caractérisation des opérations d'aménagement, dans le but d'en dresser l'inventaire de façon homogène sur l'ensemble du territoire**.

Il oeuvre pour permettre de :

- identifier /recenser les opérations d’aménagement 
  - les situer dans leur contexte territorial, économique, logement, emploi, etc.
- qualifier les opérations d’aménagement
  - type, superficie, date, durée, concessionnaire, nb logement, etc...
  - qualification technique, économique, urbanistique (extension / renouvellement), etc.
  - quel outil de mise en œuvre utilisé ? qui mène les opérations ? que produisent-elles ?
- constituer une base de données
  - support à tous types d’études et analyses
  - facilitant la mise en réseau des acteurs, l’animation des territoires
  - pour piloter (a priori) et évaluer (a posteriori) l’aménagement opérationnel
  - permettant la connaissance et le suivi du marché
  - permettant de capitaliser les données d’aménagement
  - interopérable avec les autres systèmes d’informations
- évaluer les résultats obtenus
  - constructions de logements par rapport aux objectifs de planification
  - mesure des écarts entre la programmation et la réalisation
  - rythme de la construction...
- suivre / évaluer les outils de mise en œuvre des politiques publiques
- repérer des opérations exemplaires pour les valoriser





Le **[GT CNIG Aménagement](http://cnig.gouv.fr/gt-friches-a25940.html)** et ses sous-groupes oeuvrent sous mandat de la **[Commission des Standards](http://cnig.gouv.fr/?page_id=640)** du Conseil National de l'Information Géolocalisée (CNIG). Le **[mandat du Groupe de Travail](http://cnig.gouv.fr/IMG/pdf/230119_mandat_gt_cnig_amenagement.pdf)** a été validé le 19 janvier 2023 par la Commission des standards.

## Stratégie

La stratégie des groupes de travail du CNIG repose sur une diversité d'approches :

- Construire une **gouvernance ouverte** à l'ensemble des parties prenantes, afin de susciter l’adhésion et créer le cadre favorable à la pérennité du dispositif.

- Promouvoir et exploiter les **retours d'expériences** afin d'étudier les diversités d'usages et embarquer les acteurs en les positionnant au centre du processus d’alimentation des référentiels géographiques.
    
- Privilégier **l’interopérabilité** entre système d'informations à l’échelle nationale pour favoriser le partage et l’échange de données : éviter les double stockages, double saisies, etc.

- S'appuyer sur les **processus éprouvés** de [standardisation du CNIG](http://cnig.gouv.fr/les-standards-cnig-a18959.html#Etapes-de-creation-d-un-Standard-CNIG) et de modélisation suivant [schema.data.gouv.fr](https://guides.etalab.gouv.fr/producteurs-schemas/)

L’objectif est d'aboutir à terme à un consensus qui se traduise en un standard et un modèle de donnée commun pour la thématique considérée.

## Schéma Opérations d'aménagement

Le standard CNIG Opérations d'aménagement fournit une description littérale des champs, non exlusivement technique.

Le fichier schema.json contient **l'implémentation technique** du modèle conceptuel de données (MCD), au format json.

Ce schéma (ou Modèle Conceptuel de Donées - MCD) modélise les informations relatives aux Opérations d'aménagement.

Adopter et respecter ce schéma est une garantie, non seulement d’efficacité et de pertinence des informations collectées, mais aussi d’interopérabilité et de facilité du partage des données.

Ce schéma respecte le standard [Table Schema](https://specs.frictionlessdata.io/table-schema/) et <est / sera> référencé sur [schema.data.gouv.fr](https://schema.data.gouv.fr). 

## Organisation du dépot

* Le répertoire [bibliographie](https://github.com/cnigfr/operations-amenagement/tree/main/bibliographie) contient les documents utiles au groupe de travail.
* Le répertoire [reunions](https://github.com/cnigfr/operations-amenagement/tree/main/reunions) contient les compte-rendus de réunions et les documents de suivi du groupe de travail.
* Le répertoire [standard](https://github.com/cnigfr/operations-amenagement/tree/main/standard) contient le standard CNIG Opérations d'aménagement publié, sous **forme littérale** (.odt et/ou .pdf) avec les rubriques documentaires connexes (contexte, recommandations, métadonnées, etc.).
* Les fichiers schema.json contiennet **l'implémentation technique** du modèle conceptuel de données (MCD), au format json destiné à être référencé sur schema.data.gouv.fr.

## Informations et participation au groupe de travail
Pour être tenu au courant et/ou participer aux échanges du GT CNIG Aménagement et ses sous-groupes, merci de [contacter le CNIG](http://cnig.gouv.fr/spip.php?page=contact). Il est également possible de s'abonner à la [lettre d'information du CNIG](http://cnig.gouv.fr/).

## Contributions
N'hésitez pas à utiliser les [Issues de ce Github](https://github.com/cnigfr/operations-amenagement/issues) pour toute expression de besoin, proposition d'amélioration du projet de standard Opération d'aménagement, retour utilisateur, etc.

## Actualisation
Le projet de standard Opération d'aménagement, puis le standard une fois validé par le CNIG, évoluera en fonction des évolutions réglementaires et de l'expression des besoins de la communauté des utlisateurs.

Les ressources associées et les bases de données correspondantes seront actualisées conformément au standard CNIG Opérations d'aménagement.
Les mises à jour de base de données sont effectuées en modifiant le cas échéant les données qui y figurent déjà.

## OpenData - Données ouvertes
Les données relatives à l'identification et la caractérisation des opérations d'aménagement sont ouvertes et sont à la disposition de tous.
Elles seront publiées sur https://www.data.gouv.fr

## Nous contacter
Pour contacter le GT CNIG Aménagement, n’hésitez pas à nous écrire à l’adresse suivante : cnig [at] cnig.fr
Toutes les contributions sont les bienvenues !

## Licence
Les travaux du GT CNIG Opérations d'aménagement sont réalisés sous [Licence Ouverte Etalab 2.0](https://www.etalab.gouv.fr/licence-ouverte-open-licence/)

