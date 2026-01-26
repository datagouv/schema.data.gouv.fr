<MenuSchema />

# Infrastructures de recharge pour véhicules électriques - données statiques

Spécification du fichier d'échange relatif aux données statiques concernant la localisation géographique et les caractéristiques techniques des stations et des points de recharge pour véhicules électriques

## Contexte

Dans le but de constituer un répertoire national de données relatif à l’offre de recharge pour véhicules électriques, ouvert et accessible à tous, les aménageurs d’infrastructures de recharge pour véhicules électriques (IRVE), ou les personnes qu’ils désignent, doivent publier sur la plateforme data.gouv.fr les données pour tout point de recharge en service et ouvert au public. L’ouverture des données statiques relatives à la localisation et aux caractéristiques techniques de ces infrastructures s’effectue selon les modalités définies dans [l'arrêté du 4 mai 2021](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043475363).

**Documents de cadrage juridique**
  * [Décret n° 2021-546 du 4 mai 2021 portant modification du décret n° 2017-26 du 12 janvier 2017 relatif aux infrastructures de recharge pour véhicules électriques et portant diverses mesures de transposition de la directive 2014/94/UE du Parlement européen et du Conseil du 22 octobre 2014 sur le déploiement d'une infrastructure pour carburants alternatifs](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043475363)
  * [Arrêté du 4 mai 2021 relatif aux données concernant la localisation géographique et les caractéristiques techniques des stations et des points de recharge pour véhicules électriques](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043475441)

**Documents de cadrage technique**
  * [Fichier de consolidation des stations de recharge de véhicules électriques sur data.gouv.fr](https://www.data.gouv.fr/fr/datasets/fichier-exemple-stations-de-recharge-de-vehicules-electriques/)
  * [Définition et structure des identifiants attribués par l'Association Française pour l'Itinérance de la Recharge Electrique des Véhicules \(AFIREV\)](http://www.afirev.fr/fr/informations-generales/)

## Création d'un fichier de données conforme

* Les données collectées doivent respecter un formalisme particulier (schéma de données) décrit sur [la section documentation](https://schema.data.gouv.fr/etalab/schema-irve-statique/latest/documentation.html) de cette page.
* Les données sont à remplir au format CSV, encodage UTF-8.
* Plusieurs solutions existent pour générer ce fichier CSV.

## Utilisation de notre outil d'aide à la saisie

Pour être guidé pas à pas, merci de vous rendre sur la [documentation officielle](https://doc.transport.data.gouv.fr/producteurs/infrastructures-de-recharge-de-vehicules-electriques-irve) de transport.data.gouv.fr, Point d'accès national aux données de transport.

Pour faciliter le remplissage des données, Etalab met à disposition un générateur CSV conforme au schéma de données, vous permettant de remplir les différents champs demandés. Cet outil vous permet de vous assurer que les données que vous remplissez sont au bon format. Pour l'utiliser, rendez-vous sur [publier.etalab.studio](https://publier.etalab.studio/select?schema=etalab%2Fschema-irve), vous pourrez alors publier votre fichier à partir : 
- d'un fichier csv déjà existant. (vous pouvez partir de [ce fichier exemple](https://www.data.gouv.fr/fr/datasets/fichier-exemple-stations-de-recharge-de-vehicules-electriques/).
- d'un formulaire
- d'un tableur (encore en expérimentation)

Une fois vos données chargées ou remplies, un formulaire vous proposera de les publier sur data.gouv.fr.


## Consolidation

Etalab réalise une consolidation automatique des jeux de données IRVE conformes déposés sur data.gouv.fr. Le code est [disponible ici](https://github.com/etalab/notebooks/tree/master/irve-v2). Le fichier en résultant est [publié ici sur data.gouv.fr](https://www.data.gouv.fr/fr/datasets/5448d3e0c751df01f85d0572).
Vous pouvez également visualiser son contenu sur une carte en passant par le [Point d’Accès National](https://transport.data.gouv.fr/datasets/fichier-consolide-des-bornes-de-recharge-pour-vehicules-electriques).

En cas de non consolidation de vos données, la raison principale possible est que vos données contiennent des erreurs et donc ne respectent pas le schéma. Nous vous invitons à les corriger et à utiliser l’[outil de validation Validata](https://validata.fr/table-schema?schema_name=schema-datagouvfr.etalab%2Fschema-irve) pour vérifier la qualité des vos données.   .

## Voir aussi

* [Fichier gabarit à télécharger au format csv](https://www.data.gouv.fr/fr/datasets/fichier-exemple-stations-de-recharge-de-vehicules-electriques/) (proposé par Etalab)
* Pour poser une question, commenter, faire un retour d’usage ou contribuer à l’amélioration du modèle de données, vous pouvez :
  * adresser un message à [contact@transport.beta.gouv.fr](mailto:contact@transport.beta.gouv.fr)
  * ouvrir un ticket sur le [dépôt GitHub du schéma](https://github.com/etalab/schema-irve/issues/new)
