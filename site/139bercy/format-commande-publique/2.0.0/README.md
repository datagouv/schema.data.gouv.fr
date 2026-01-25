<MenuSchema />

<MenuSchema />

# Les schémas des données essentielles de la commande publique

## Description des schémas de données essentielles :

> Les fichiers techniques décrivant les différentes versions des schémas de données essentielles sont contenus sur un dépôt Github et versionnés avec un tag correspondant à leur numéro de version. [Voir la liste des versions](https://github.com/139bercy/format-commande-publique/tags) 

Les schémas de données présentés jusqu’à la **version 1.5** régissent la structure des données publiées par les acheteurs publics sur leur profil d'acheteur, **jusqu’au 31 décembre 2023**. Ces formats sont la traduction technique des textes réglementaires publiés le 14 avril 2017 et mis à jour le 22 mars 2019.
**Vous trouverez l'ensemble des fichiers techniques décrivant la structure du [schéma version 1.5 sur ce lien](https://github.com/139bercy/format-commande-publique/releases/tag/1.5.0).**

Les schémas de données présentés à partir de la **version 2.0** régissent la structure des données à publier par les acheteurs publics le portail national des données ouvertes à compter du 1er janvier 2024. Ces formats sont la traduction technique des arrêtés relatifs aux données essentielles des marchés publics et des contrats de concession du 22 décembre 2022.
**Vous trouverez l'ensemble des fichiers techniques décrivant la structure du [schéma version 2.0.0 sur ce lien](https://github.com/139bercy/format-commande-publique/releases/tag/2.0.0).**

Les acheteurs publics doivent publier leurs données de marchés publics et de contrats de concession dans ce format **à partir du 1er janvier 2024**, sur leur profil d'acheteur.

Ce schéma de données rassemble :
•	le lien vers le dépôt Github, qui contient des exemples de données et les référentiels des schémas au format PDF ;
•	les schémas (JSON et XML) permettant de vérifier la validité des données publiées.


## Versions :

### Version 2.0 (arrêtés du 22 décembre 2022) :

Le schéma version 2.0 est un nouveau schéma prenant en compte les modifications apportées par les arrêtés du 22 décembre 2022. Ces arrêtés procèdent :
- à la fusion des données du recensement et des données essentielles des marchés publics au sein d’une même liste intitulée « données essentielles des marchés publics » à partir de 40 000 euros hors taxes ;
- au maintien de la publication des données essentielles des contrats de concession ;
- à la publication de ces données essentielles sur le portail national des données ouvertes et non plus sur le profil d’acheteur.

C'est le schéma qui doit être respecté pour la publication de données essentielles pour les marchés notifiés à compter du **1er janvier 2024** et pour les contrats de concession conclus à compter de cette même date. Le schéma est disponible sur [le dépôt Github](https://github.com/139bercy/format-commande-publique/releases/tag/2.0.0), qui contient des exemples de données et les référentiels des schémas à ce lien avec une documentation associée [disponible ici](https://github.com/139bercy/format-commande-publique/blob/2.0.0/_index.md).

### Version 1.5 (arrêté du 22 mars 2019) :

Le schéma version 1.5 est un nouveau schéma prenant en compte les modifications apportées par l'arrêté du 22 mars 2019 (changements dans la liste des procédures de marché). C'est le schéma recommandé pour la publication de données essentielles jusqu’au **31 décembre 2023**.

Seules différences avec le schéma version 1.4 : dans la liste des valeurs pour le champ procédure d'un marché.

- les valeurs *« Procédure concurrentielle avec négociation »* et *« Procédure négociée avec mise en concurrence préalable »* de la version 1.4 sont remplacées par la valeur Procédure avec négociation dans la version 1.5
- la valeur *« Marché négocié sans publicité ni mise en concurrence préalable »* de la version 1.4 est remplacée par la valeur *« Marché passé sans publicité ni mise en concurrence préalable »* dans la version 1.5

### Version 1.4 (arrêté modificatif du 27 juillet 2018) :

Le schéma version 1.4 correspond à la structure de données en vigueur depuis plusieurs mois, qui correspond aux dispositions de l'arrêté modificatif du 27 juillet 2018. Les données publiées dans ce format sont encore valides, car elles peuvent facilement être converties pour être conforme à la version 1.5. Cependant, il est recommandé de se conformer au schéma en version 1.5.


### Voir aussi

- [Les fichiers consolidés des données essentielles de la commande publique](https://www.data.gouv.fr/fr/datasets/5cd57bf68b4c4179299eb0e9/)
- [Arrêté du 14 avril 2017 relatif aux données essentielles dans la commande publique](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000034492587) (modifié par [l'arrêté du 27 juillet 2018](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000037282994))
- [Arrêté modificatif du 27 juillet 2018 relatif aux données essentielles de la commande publique](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000037282994)
- [Arrêté du 22 mars 2019 relatif aux données essentielles de la commande publique](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000038318675)
- [Arrêté du 22 décembre 2022 relatif aux données essentielles des marchés publics](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000046850496) 
- [Arrêté du 22 décembre 2022 relatif aux données essentielles des contrats de concession](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000046850535) 
- [Le site Web thématique de la Direction des Affaires Juridiques du Ministère des Finances](https://www.economie.gouv.fr/daj/dematerialisation-de-la-commande-publique) et les ["Guides très pratiques" de la dématérialisation de la commande publique](https://www.economie.gouv.fr/daj/guide-tres-pratique-pour-accompagner-acheteurs-et-entreprises-sur-dematerialisation-des-marches)
- [Arrêté du 14 avril 2017 relatif aux fonctionnalités et exigences minimales des profils d'acheteurs](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000034492557)

