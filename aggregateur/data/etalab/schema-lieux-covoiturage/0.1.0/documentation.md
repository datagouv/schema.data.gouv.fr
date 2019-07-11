---
permalink: /etalab/schema-lieux-covoiturage/latest/documentation.html
redirect_from: /etalab/schema-lieux-covoiturage/0.1.0/documentation.html
title: Documentation de Lieux de covoiturage
version: 0.1.0
---

## Lieux de covoiturage

Spécification des lieux permettant le covoiturage

- Auteur : Antoine Augusti pour Etalab
- Contributeurs : transport.data.gouv.fr, OpenDataFrance, FEDUCO, BlaBlaCar
- Schéma créé le : 06/25/19
- Site web : https://github.com/etalab/schema-lieux-covoiturage
- Données d'exemple : https://github.com/etalab/schema-lieux-covoiturage/raw/v0.1.0/exemple-valide.csv
- Version : 0.1.0
- Clé primaire : `id_lieu`

### Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|id_lieu|chaîne de caractères|Identifiant du lieu de covoiturage, délivré par le point d'accès national|35238-C-001|Valeur obligatoire, Motif : `^([013-9]\d|2[AB1-9])\d{3}-C-\d{3}$`|
|nom_lieu|chaîne de caractères|Le nom du lieu de covoiturage. Recommandation : inutile de répéter la nature du type de covoiturage|Les Romains|Valeur obligatoire|
|ad_lieu|chaîne de caractères|L'adresse du lieu compréhensible par le grand public pour assurer la coordination entre le passager et le conducteur. Exemple : "3, rue de la gare" ; pour les lieux proches des sorties d'autoroute ou de nationale : "A11 sortie 7 Le Mans Nord" ; pour les zones rurales sans adresse : "croisement de route 1 - route 2" ou "le long de route X après le passage à niveau"|3, rue de la Gare|Valeur optionnelle|
|com_lieu|chaîne de caractères|La commune / le lieu-dit du covoiturage|Rouen|Valeur optionnelle|
|insee|chaîne de caractères|Le code INSEE de la commune d'implantation|76540|Valeur obligatoire, Motif : `^([013-9]\d|2[AB1-9])\d{3}$`|
|type|chaîne de caractères|Le type de lieu de covoiturage|Parking|Valeur obligatoire, Valeurs autorisées : Aire de covoiturage, Sortie d'autoroute, Parking, Supermarché, Parking relais, Délaissé routier|
|date_maj|date (format `%Y-%m-%d`)|Date de dernière mise à jour des données. Notation ISO 8601, format AAAA-MM-DD|2016-10-31|Valeur obligatoire|
|ouvert|booléen|Le lieu est-il ouvert|true|Valeur obligatoire|
|source|chaîne de caractères|SIREN de l'entité ayant fourni la donnée|225300011|Valeur obligatoire, Motif : `^\d{9}$`|
|Xlong|nombre réel|La longitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation de l’entrée du lieu de covoiturage exprimée dans le système de coordonnées WGS84|1.452323|Valeur obligatoire, Valeur minimale : -180, Valeur maximale : 180|
|Ylat|nombre réel|La latitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation de l’entrée du lieu de covoiturage exprimée dans le système de coordonnées WGS84|46.59698|Valeur obligatoire, Valeur minimale : -90, Valeur maximale : 90|
|nbre_pl|nombre entier|Le nombre de places réservées au stationnement disponibles|42|Valeur optionnelle, Valeur minimale : 0|
|nbre_pmr|nombre entier|Le nombre de places PMR disponibles|3|Valeur optionnelle, Valeur minimale : 0|
|duree|nombre entier|Si il existe une restriction sur la durée de stationnement autorisée, la durée maximale de stationnement autorisée exprimée en minutes|60|Valeur optionnelle, Valeur minimale : 0|
|horaires|chaîne de caractères|Ce champ permet de renseigner, si l'information est connue, les jours et horaires d'ouverture de l'équipement|Mo-Fr 08:00-20:00|Valeur optionnelle|
|proprio|chaîne de caractères|Le nom de l'aménageur, c'est-à-dire de l'entité publique ou privée propriétaire des infrastructures|Département|Valeur optionnelle|
|lumiere|booléen|Un éclairage nocture est-il présent||Valeur optionnelle|
|comm|chaîne de caractères|Commentaires éventuels sur les commodités mises à disposition du grand public comme : le numéro de téléphone unique qui indique les services disponibles au moment de l'arrivée sur l'aire pour réaliser le dernier kilomètre ; la présence de prises 220V ou USB ; accès à du réseau (télécom, WiFi) ; sanitaires ; intermodalité en transports|Présence de sanitaires et accès à de l'eau courante|Valeur optionnelle|