---
homepage: https://github.com/etalab/schema-irve
permalink: /etalab/schema-irve/latest/documentation.html
redirect_from: /etalab/schema-irve/1.0.1/documentation.html
title: Infrastructures de recharge de véhicules électriques
version: 1.0.1
---

## Infrastructures de recharge de véhicules électriques

Spécification du fichier d'échange relatif aux données concernant la localisation géographique et les caractéristiques techniques des stations et des points de recharge pour véhicules électriques

- Auteur : Alexandre Bulté pour Etalab
- Contributeurs : Charles Nepote, Pierre Dittgen, Johan Richer
- Schéma créé le : 06/29/18
- Site web : https://github.com/etalab/schema-irve
- Données d'exemple : https://github.com/etalab/schema-irve/raw/v1.0.1/exemple-valide.csv
- Version : 1.0.1
- Clé primaire : `id_pdc`

### Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|n_amenageur|chaîne de caractères|Le nom de l'aménageur, c'est à dire de l'entité publique ou privée propriétaire des infrastructures|Société X, Entité Y|Valeur obligatoire|
|n_operateur|chaîne de caractères|Le nom de l'opérateur qui opère le réseau d'infrastructure (l'aménageur ou un tiers auquel a été confié la responsabilité par délégation)|Société X, Entité Y|Valeur obligatoire|
|n_enseigne|chaîne de caractères|Le nom commercial du réseau|Réseau de recharge ABC|Valeur obligatoire|
|id_station|chaîne de caractères|L'identifiant de la station délivré selon les modalités définies à l'article 10 du décret n° 2017-26 du 12 janvier 2017|FR*A68*P68021*A|Valeur obligatoire|
|n_station|chaîne de caractères|le nom de la station|Picpus, Belleville, Villiers|Valeur obligatoire|
|ad_station|chaîne de caractères|L'adresse complète de la station : [numéro] [rue], [code postal] [ville]|1 avenue de la Paix, 75001 Paris|Valeur obligatoire|
|code_insee|chaîne de caractères|Le code INSEE de la commune d'implantation|06088, 2B002 (pour une commune corse)|Valeur obligatoire, Motif : `^([013-9]\d|2[AB1-9])\d{3}$`|
|Xlongitude|nombre réel|La longitude en degrés décimaux (point comme séparateur décimal) de la localisation de la station exprimée dans le système de coordonnées WGS84|7.48710500|Valeur obligatoire|
|Ylatitude|nombre réel|La latitude en degrés décimaux (point comme séparateur décimal) de la localisation de la station exprimée le système de coordonnées WGS84|47.63495500|Valeur obligatoire|
|nbre_pdc|nombre entier|Le nombre de points de recharge sur la station|1, 10|Valeur obligatoire|
|id_pdc|chaîne de caractères|L'identifiant du point de recharge délivré selon les modalités définies à l'article 10 du décret n° 2017-26 du 12 janvier 2017|FR*A68*E68021*A*B1*D|Valeur obligatoire|
|puiss_max|nombre réel|La puissance maximale délivrée à chaque point de recharge, exprimée en kW, en fonction du contrat d'abonnement de puissance de la station et du type de connecteur|22.00|Valeur obligatoire|
|type_prise|chaîne de caractères|Les types de prises ou de connecteurs disponibles sur chaque point de charge|E/F, T2|Valeur obligatoire|
|acces_recharge|chaîne de caractères|Modalités d'accès à la recharge|Payant, Gratuit, Sur abonnement|Valeur obligatoire|
|accessibilité|chaîne de caractères|Amplitude d'ouverture de la station|24/24 7/7 jours|Valeur obligatoire|
|observations|chaîne de caractères|Champ destiné à préciser les modalités d'accès à la recharge, l'accessibilité, le tarif, les horaires d'ouverture, …|Recharge uniquement disponible pendant les horaires d'ouverture du Centre Commercial XY|Valeur obligatoire|
|date_maj|date (format `%Y/%m/%d`)|Date de mise à jour des données|2018/08/08, 2015/12/30|Valeur obligatoire|