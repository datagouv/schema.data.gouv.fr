<MenuSchema />

# Géostandards Risques - Cartographies de la Directive Inondation

Le Groupe de travail pour la refonte des géostandards risques a pour objectif de moderniser les géostandards COVADIS existants liés aux risques en prenant en compte les aspects liés à la diffusion, en cohérence avec les autres standards existants au niveau national et européen pour faciliter l’interopérabilité entre systèmes, la consultation nationale, le croisement de données et le rapportage.

Il oeuvre sous mandat de la Commission des Standards du Conseil National de l'Information Géolocalisée (CNIG). Le mandat du Groupe de Travail peut être consulté [ici](https://cnig.gouv.fr/IMG/documents_wordpress/2021/10/MandatModernisationStandardsRisque-vf.pdf).

La page dédiée de ce groupe sur le site du CNIG est accessible [ici](https://cnig.gouv.fr/gt-risques-a25378.html).

Ce dépôt est le lieu des développements relatifs à la refonte du Standard COVADIS Directive Inondation (DI).

Les versions en cours de ce géostandard sont accessibles ici :

- [version en cours de rédaction](https://github.com/cnigfr/Geostandards-risques-carto-di/blob/master/standard/Document.md)

Ce standard s'appuie sur le Géostandard risques - Modèle commun dont les développements se déroulent sur le dépôt [Geostandards Risques](https://github.com/cnigfr/Geostandards-Risques).

> [!TIP]
Ce standard CNIG ne possède pas de schéma de données directement accessible sur schema.data.gouv.fr.

Davantage de documentation peut être trouvée sur le site du CNIG sur la [page suivante](https://cnig.gouv.fr/gt-risques-a25378.html).

![logo du CNIG](https://github.com/cnigfr/Geostandards-risques-carto-di/blob/master/ressources/images/logo-cnig.png)
![logo GT Risques](https://github.com/cnigfr/Geostandards-risques-carto-di/blob/master/ressources/images/logo-gt-risques.png)
![logo MTE](https://github.com/cnigfr/Geostandards-risques-carto-di/blob/master/ressources/images/ministere-de-la-transition-ecologique-et-solidaire_logo.png)

## Contexte

Le contexte d'élaboration de ce standard est décrit dans la partie [Objectif et raison d'être du standard](https://github.com/cnigfr/Geostandards-risques-carto-di/blob/master/standard/Document.md#objectif-et-raison-dêtre-du-standard).

## Cadre juridique

Le cadre juridique de ce standard est décrit dans la partie [Cadre réglementaire](https://github.com/cnigfr/Geostandards-risques-carto-di/blob/master/standard/Document.md#cadre-réglementaire).

## Finalité

La finalité de ce standard est décrite dans la partie [Objectif et raison d'être du standard](https://github.com/cnigfr/Geostandards-risques-carto-di/blob/master/standard/Document.md#objectif-et-raison-dêtre-du-standard).

## Cas d’usage

Les cas d'usages types de ce standard sont décrits dans la partie [Cas d'utilisation](https://github.com/cnigfr/Geostandards-risques-carto-di/blob/master/standard/Document.md#cas-dutilisation).

## Organisation du dépôt

- Le dossier [ressources](https://github.com/cnigfr/Geostandards-risques-carto-di/blob/master/ressources) contient les documents utiles pour les utilisateurs du standard ;
- Le dossier [groupe_de_travail_CNIG](https://github.com/cnigfr/Geostandards-risques-carto-di/blob/master/groupe_de_travail_CNIG) contient les comptes-rendus de réunions et les documents de suivi du groupe de travail ;
- Le dossier [standard](https://github.com/cnigfr/Geostandards-risques-carto-di/blob/master/standard) contient le standard ainsi que les documents qui lui sont liés ;

## Modalités de production des données

Les modalités de production des données PPR sont décrites dans la partie [Cycle de vie des données](https://github.com/cnigfr/Geostandards-risques-carto-di/blob/master/standard/Document.md#cycle-de-vie-des-données).

### Données ouvertes

Les données Territoire à Risques important d'Inondation (TRI) sont produites et mises à jour tous les 6 ans dans le cadre de la Directive Inondation. Les données du dernier millésime (2020) conformes au précédent Standard COVADIS Directive Inondation sont publiées et disponibles librement sur le site [www.georisques.gouv.fr/](https://www.georisques.gouv.fr/donnees/bases-de-donnees/zonages-inondation-rapportage-2020).

## Informations et participation au groupe de travail

### Méthodologie

La méthodologie des groupes de travail du CNIG repose sur une diversité d'approches complémentaires :

- Construire **une gouvernance ouverte** à l'ensemble des parties prenantes, afin de susciter l’adhésion et de créer le cadre favorable à la pérennité du dispositif ;
- Promouvoir et exploiter **les retours d'expériences** afin d'étudier les diversités d'usages et embarquer les acteurs en les positionnant au centre du processus d’alimentation des référentiels géographiques ;
- Privilégier **l’interopérabilité** entre système d'informations à l’échelle nationale pour favoriser le partage et l’échange de données : éviter les doubles stockages, doubles saisies, etc. ;
- S'appuyer sur les **processus éprouvés** de [standardisation du CNIG](http://cnig.gouv.fr/les-standards-cnig-a18959.html#Etapes-de-creation-d-un-Standard-CNIG) et de modélisation suivant [schema.data.gouv.fr](https://guides.etalab.gouv.fr/producteurs-schemas/).
L’objectif est d'aboutir à terme à un consensus qui se traduise en un standard et un modèle de donnée commun pour la thématique considérée.

### Actualisation

- La [version 0.1 du Géostandard](https://github.com/cnigfr/Geostandards-risques-carto-di/blob/master/standard/diffusion/Geostandard-Risques-Carto-DI-v0.1.pdf), publiée le 23 septembre 2026, est en cours de relecture par le groupe de travail.

- Une [consultation sur la mise en oeuvre du standard COVADIS DI](https://github.com/cnigfr/Geostandards-risques-carto-di/blob/master/groupe_de_travail_CNIG/Questionnaire%20refonte/Questionnaire%20sur%20la%20refonte%20du%20standard%20Directive%20Inondation.docx) a été menée auprès des D(R)EALs qui sont en charge de la mise à jour des TRI pour le cycle 3 de la Directive Inondation. la synthèse des cette consultation a été présentée lors de la plénière du Groupe de travail le [7 octobre 2025](https://cnig.gouv.fr/IMG/pdf/2025-10-07-cr-pleinere-gt-risques-25-0109.pdf).

### Comment contribuer

Vous pouvez contribuer au Groupe de travail en participant aux réunions et aux discussions sur la liste de diffusion ci-dessus.

Vous pouvez également utiliser les outils proposés par github :

- Poser des questions, demandes d'évolutions via les [Issues](https://github.com/cnigfr/Geostandards-risques-carto-di/issues)

- Proposer des évolutions / corrections via les [Pull Requests](https://github.com/cnigfr/Geostandards-risques-carto-di/pulls)

  Pour plus d'informations sur ce mode de collaboration, vous pouvez vous référer à la [documentation Github](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests).

### Nous contacter

Pour être tenu au courant et/ou participer aux échanges des membres du groupe de travail, merci de vous inscrire à la liste de diffusion [geostandards-risques-gt-cnig@framalistes.org](https://framalistes.org/sympa/info/geostandards-risques-gt-cnig). Toutes les communications / annonces sont faites sur cette liste.

Les informations sur les réunions passées et à venir du GT, les consultations et les documents publiés sont aussi diffusées sur le [site du CNIG](https://cnig.gouv.fr/gt-risques-a25378.html).

### Licence

Les travaux du GT CNIG Refonte des géostandards risques sont réalisés sous [Licence Ouverte Etalab 2.0](https://www.etalab.gouv.fr/licence-ouverte-open-licence/).
