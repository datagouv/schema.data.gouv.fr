---
permalink: /PnX-SI/schema_randonnee/latest.html
redirect_from: /PnX-SI/schema_randonnee/1.0.2.html
title: Itinéraires de randonnée
version: 1.0.2
---

# Schéma itinéraires de randonnées

Ce schéma permet de modéliser les itinéraires de randonnées afin de favoriser les échanges de données entre structures productrices et utilisatrices (communautés de communes, parcs naturels, départements...)

## Contexte

Dans le cadre du programme européen [Alcotra](https://www.interreg-alcotra.eu/fr/decouvrir-alcotra/les-projets-finances/mito-modeles-integres-pour-le-tourisme-outdoor-dans-lespace) (PITEM MITO), le Parc national des Écrins a réalisé un standard d'échange de données entre les différents partenaires français et italiens du projet. Pour cela, il a réalisé une analyse du socle commun de données permettant de définir certaines activités outdoor, dont la randonnée. Fin 2020, ce standard a été validé par les partenaires du projet Européen.

Afin d'apporter une valeur ajoutée à ce projet, début 2021, le Parc national a proposé à différents acteurs de travailler à partir de ce socle commun à la création d'un "schéma de données" concernant les itinéraires de randonnée. Ce schéma vient enrichir les schémas disponibles sur le site [schema.data.gouv.fr](https://schema.data.gouv.fr), pour permettre de publier facilement des données standardisées et interopérables en open data, notamment sur le site [data.gouv.fr](https://data.gouv.fr).

Les différents documents et compte-rendus des ateliers du groupe de travail sont disponibles dans son [dossier partagé](https://geotrek.ecrins-parcnational.fr/ressources/gt/10-schema-donnees-randonnees/).

## Périmètre

* Le schéma est un outil de partage d’un socle partagé
* Il est multi-pratiques avec les champs génériques et communs
* Il possède des champs facultatifs pour plus de flexibilité
* Il ne comprend pas les champs spécifiques à chaque pratique
* Il ne comprend pas les patrimoines associées aux randonnées
* Il ne comprend pas les services touristiques à proximité des randonnées
* Il ne comprend pas les autres activités (escalade, vol libre, eau vive...)

## Schéma

Schéma au format [JSON Schema](https://json-schema.org/), version [`draft-07`](https://json-schema.org/specification-links.html#draft-7) disponible [ici](https://github.com/PnX-SI/schema_randonnee/raw/master/schema.json).

Un fichier d'exemple valide avec 10 randonnées est disponible [ici](https://github.com/PnX-SI/schema_randonnee/raw/v1.0.2/exemple-valide.json). L'intégralité des champs du premier itinéraire sont renseignés en guise d'exemple exhaustif.

## Validateur

Un script Node.js permet de valider le fichier `itineraires_rando.json` exporté.

Le script et sa documentation sont disponibles dans le dossier [`/local_validator`](https://github.com/PnX-SI/schema_randonnee/tree/master/local_validator)

## Geotrek

Si vous utilisez une base de données Geotrek, le dossier [`/geotrek`](https://github.com/PnX-SI/schema_randonnee/tree/master/geotrek) contient une vue SQL permettant d'exporter les données conformes au schéma, ainsi qu'un script pour automatiser et valider cet export.

## Remerciements

Nous tenons à remercier les membres du groupe de travail pour leur investissement dans l'élaboration de ce schéma :

* [ADN Tourisme](https://www.adn-tourisme.fr)
* [APIDAE Tourisme](https://www.apidae-tourisme.com)
* [Apitux](http://www.apitux.com)
* [Auvergne-Rhône-Alpes Tourisme](https://www.auvergnerhonealpes-tourisme.com)
* [Conseil départemental des Alpes-de-Haute-Provence](http://www.mondepartement04.fr)
* [Conseil départemental des Côtes d'Armor](https://cotesdarmor.fr)
* [Conseil départemental des Hautes-Alpes](https://www.hautes-alpes.fr)
* [Conseil départemental du Vaucluse](https://www.vaucluse.fr)
* [DATAtourisme](https://www.datatourisme.gouv.fr)
* [Etalab](https://www.etalab.gouv.fr) / [DINUM](https://www.numerique.gouv.fr)
* [IGN](https://www.ign.fr)
* [Office français de la biodiversité](https://ofb.gouv.fr)
* [Parc national des Écrins](https://www.ecrins-parcnational.fr)
* [Parc national des Cévennes](https://www.cevennes-parcnational.fr)
* [Parc naturel régional du Luberon](https://www.parcduluberon.fr)
* [Pôle ressources national sports de nature](https://www.sportsdenature.gouv.fr)
* [Région Ligurie](https://www.regione.liguria.it)
* [Région SUD](https://www.maregionsud.fr)