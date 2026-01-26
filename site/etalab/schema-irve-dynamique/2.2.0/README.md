<MenuSchema />

# Infrastructures de recharge pour véhicules électriques - données dynamiques


Spécification du fichier d'échange relatif aux données dynamiques concernant la disponibilité et l’état de fonctionnement des points de recharge et de leurs connecteurs pour véhicules électriques

## Contexte
Dans le but de constituer un répertoire national de données relatif à l’offre de recharge pour véhicules électriques, ouvert et accessible à tous, les aménageurs d’infrastructures de recharge pour véhicules électriques (IRVE), ou les personnes qu’ils désignent, doivent publier sur la plateforme data.gouv.fr les données pour tout point de recharge en service et ouvert au public. L’ouverture des données dynamiques relatives à l’état de fonctionnement et la disponibilité des points de recharge et de leurs connecteurs s’effectue selon les modalités définies par arrêté. 

## Documents de cadrage technique

- [Définition et structure des identifiants attribués par l'Association Française pour l'Itinérance de la Recharge Électrique des Véhicules (AFIREV)](http://www.afirev.fr/fr/informations-generales/)

## Création d'un fichier de données conforme

Les données collectées doivent respecter un formalisme particulier (schéma de données) décrit sur la section documentation de cette page.

Les données sont à remplir au format CSV, encodage UTF-8.

Pour être conformes, les données dynamiques doivent faire référence aux données statiques via la clé commune  `id_pdc_itinerance`. 
Chaque nouvel état de fonctionnement ou de disponibilité d’un point de recharge (ou d’un de ses connecteurs) doit nécessairement entraîner la mise à jour des données dynamiques. 
 
## Consolidation
Il n’existe pas de consolidation nationale des flux dynamiques pour l’heure. 
 
## Voir aussi
- [Documentation sur les données dynamiques](https://doc.transport.data.gouv.fr/producteurs/infrastructures-de-recharge-de-vehicules-electriques-irve/donnees-dynamiques)
- Pour poser une question, commenter, faire un retour d’usage ou contribuer à l’amélioration du modèle de données, vous pouvez :
  - adresser un message à [contact@transport.beta.gouv.fr](mailto:contact@transport.beta.gouv.fr)
  - ouvrir un ticket sur le dépôt [GitHub du schéma](https://github.com/etalab/schema-irve/issues/new)
