<MenuSchema />

<MenuSchema />

# Infrastructures de recharge pour véhicules électriques

Spécification du fichier d'échange relatif aux données concernant la localisation géographique et les caractéristiques techniques des stations et des points de recharge pour véhicules électriques

## Contexte

Dans le but de constituer un répertoire national des Infrastructures de recharge pour véhicules électriques (IRVE), ouvert et accessible à tous, les collectivités locales porteuses d'un projet d'installation d'IRVE doivent, au fur et à mesure de la mise en service des stations, publier sur la plateforme data.gouv.fr les données statiques relatives à la localisation et aux caractéristiques techniques de ces installations selon les modalités définies dans [l'arrêté du 12 janvier 2017](https://www.legifrance.gouv.fr/jo_pdf.do?id=JORFTEXT000033860733).

De fait, ce schéma a été élaboré par Etalab à partir des documents suivants :

* **Documents de cadrage juridique**
  * [Décret n° 2017-26 du 12 janvier 2017 relatif aux infrastructures de recharge pour véhicules électriques et portant diverses mesures de transposition de la directive 2014/94/UE du Parlement européen et du Conseil du 22 octobre 2014 sur le déploiement d’une infrastructure pour carburants alternatifs](https://www.legifrance.gouv.fr/jo_pdf.do?id=JORFTEXT000033860620)
  * [Arrêté du 12 janvier 2017 relatif aux données concernant la localisation géographique et les caractéristiques techniques des stations et des points de recharge pour véhicules électriques](https://www.legifrance.gouv.fr/jo_pdf.do?id=JORFTEXT000033860733)
  * [Arrêté du 12 janvier 2017 précisant les dispositions relatives aux identifiants des unités d’exploitation pour la recharge des véhicules électriques](https://www.legifrance.gouv.fr/jo_pdf.do?id=JORFTEXT000033860743)
* **Documents de cadrage technique**
  * [Fichier de consolidation des stations de recharge de véhicules électriques sur data.gouv.fr](https://www.data.gouv.fr/fr/datasets/fichier-exemple-stations-de-recharge-de-vehicules-electriques/)
  * [Définition et structure des identifiants attribués par l'Association Française pour l'Itinérance de la Recharge Electrique des Véhicules \(AFIREV\)](http://www.afirev.fr/fr/informations-generales/)

## Consolidation

Etalab réalise une consolidation des jeux de données IRVE déposés sur data.gouv.fr. Le code est [disponible ici](https://github.com/etalab/notebooks/tree/master/irve). Le fichier en résultant est [publié ici sur data.gouv.fr](https://www.data.gouv.fr/fr/datasets/5448d3e0c751df01f85d0572).

## Voir aussi

* [Fichier gabarit à télécharger au format csv](https://www.data.gouv.fr/fr/datasets/fichier-exemple-stations-de-recharge-de-vehicules-electriques/) (proposé par Etalab)
* [Fichier gabarit à télécharger au format xlsx](https://scdl.opendatafrance.net/docs/templates/irve.xlsx) (généré automatiquement à partir du schéma)

Pour poser une question, commenter, faire un retour d’usage ou contribuer à l’amélioration du modèle de données, vous pouvez :

* adresser un message à [validation@data.gouv.fr](mailto:validation@data.gouv.fr?subject=IRVE)
* ouvrir un ticket sur le [dépôt Github du schéma](https://github.com/etalab/schema-irve/issues/new)
