---
permalink: /etalab/schema-stationnement-cyclable/latest/documentation.html
redirect_from: /etalab/schema-stationnement-cyclable/0.2.1/documentation.html
title: Documentation de Stationnement cyclable
version: 0.2.1
---

## stationnement-cyclable

Stationnement cyclable

Spécification du fichier décrivant les emplacements de stationnement cycable.

- Schéma créé le : 10/03/2021
- Site web : https://github.com/etalab/schema-stationnement-cyclable
- Version : 0.2
- Clé primaire : `id_local`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id_local](#propriété-id_local) | chaîne de caractères  | Oui |
| [id_osm](#propriété-id_osm) | chaîne de caractères  | Non |
| [code_com](#propriété-code_com) | chaîne de caractères  | Non |
| [xlong](#propriété-xlong) | nombre réel  | Oui |
| [ylat](#propriété-ylat) | nombre réel  | Oui |
| [capacite](#propriété-capacite) | nombre entier  | Oui |
| [capacite_cargo](#propriété-capacite_cargo) | nombre entier  | Non |
| [type_accroche](#propriété-type_accroche) | chaîne de caractères  | Oui |
| [mobilier](#propriété-mobilier) | chaîne de caractères  | Non |
| [acces](#propriété-acces) | chaîne de caractères  | Non |
| [gratuit](#propriété-gratuit) | booléen  | Non |
| [protection](#propriété-protection) | chaîne de caractères  | Non |
| [couverture](#propriété-couverture) | booléen  | Non |
| [surveillance](#propriété-surveillance) | booléen  | Non |
| [lumiere](#propriété-lumiere) | booléen  | Non |
| [url_info](#propriété-url_info) | chaîne de caractères (format `uri`) | Non |
| [d_service](#propriété-d_service) | nombre entier  | Non |
| [source](#propriété-source) | chaîne de caractères  | Non |
| [proprietaire](#propriété-proprietaire) | chaîne de caractères  | Non |
| [gestionnaire](#propriété-gestionnaire) | chaîne de caractères  | Non |
| [date_maj](#propriété-date_maj) | date  | Non |
| [commentaires](#propriété-commentaires) | chaîne de caractères  | Non |

#### Propriété `id_local`

> *Description : Identifiant unique du stationnement dans les bases de données de la collectivité territoriale productrice de données<br/>Ex : STSI01*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `id_osm`

> *Description : Identifiant OpenStreetMap, si les données proviennent d'OSM. On compose l'identifiant en utilisant la clef "n" s'il s'agit d'un noeud, "w" s'il s'agit d'un chemin et "r" s'il s'agit d'une relation.<br/>Ex : n34172*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `code_com`

> *Description : Code INSEE de la commune où se trouve le stationnement vélo<br/>Ex : n71729735*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### Propriété `xlong`

> *Description : La longitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation du centre de l'emplacement de stationnement exprimée dans le système de coordonnées WGS84.<br/>Ex : 1.452323*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -180 et 180

#### Propriété `ylat`

> *Description : La latitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation de centre de l'emplacement de stationnement exprimée dans le système de coordonnées WGS84.<br/>Ex : 46.59698*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -90 et 90

#### Propriété `capacite`

> *Description : Nombre de places de stationnement disponibles sur l'emplacement y compris les places adaptées à des vélos spéciaux (comme les vélos de grande taille).<br/>Ex : 14*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `capacite_cargo`

> *Description : Nombre de places de stationnement disponibles pour les vélos de grande taille<br/>Ex : 2*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `type_accroche`

> *Description : Mode d'accrochage possible du vélo aux équipements de stationnement<br/>Ex : CADRE ET ROUE*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - ROUE
    - CADRE
    - CADRE ET ROUE
    - SANS ACCROCHE

#### Propriété `mobilier`

> *Description : Type de mobilier de stationnement<br/>Ex : ARCEAU*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - ARCEAU
    - RATELIER
    - RACK DOUBLE ETAGE
    - CROCHET
    - SUPPORT GUIDON
    - POTELET
    - ARCEAU VELO GRANDE TAILLE
    - AUCUN EQUIPEMENT
    - AUTRE

#### Propriété `acces`

> *Description : Mode d'accès à l'emplacement de stationnement<br/>Ex : LIBRE ACCES*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - LIBRE ACCES
    - ABONNEMENT OU INSCRIPTION PREALABLE
    - PRIVE

#### Propriété `gratuit`

> *Description : L'usage de l'équipement de stationnement est-il gratuit ?<br/>Ex : true*
- Valeur optionnelle
- Type : booléen

#### Propriété `protection`

> *Description : Protection du stationnement<br/>Ex : STATIONNEMENT NON FERME*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - STATIONNEMENT NON FERME
    - CONSIGNE COLLECTIVE FERMEE
    - BOX INDIVIDUEL FERME
    - AUTRE

#### Propriété `couverture`

> *Description : Le stationnement est-il couvert et est donc protégé de la pluie, de la neige et de la grêle ?<br/>Ex : true*
- Valeur optionnelle
- Type : booléen

#### Propriété `surveillance`

> *Description : Le stationnement est-il surveillé par un gardien ou par de la vidéosurveillance ?<br/>Ex : true*
- Valeur optionnelle
- Type : booléen

#### Propriété `lumiere`

> *Description : L'emplacement est-il éclairé la nuit (par de l'éclairage urbain ou dédié à l'emplacement) ?<br/>Ex : true*
- Valeur optionnelle
- Type : booléen

#### Propriété `url_info`

> *Description : Site web d'information sur l'emplacement (abonnement/réservation...)<br/>Ex : https://www.exemple.fr/stationnementvelo-maville/*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)

#### Propriété `d_service`

> *Description : Date de mise en service du stationnement vélo (Notation ISO 8601, format AAAA)<br/>Ex : 2017*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `source`

> *Description : Nom de l'organisation ayant fourni les données<br/>Ex : Grand Poitiers*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `proprietaire`

> *Description : Nom de l'organisation propriétaire de l'emplacement de stationnement<br/>Ex : Ville de Poitiers*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `gestionnaire`

> *Description : Nom de l'organisation gestionnaire de l'emplacement de stationnement<br/>Ex : Ville de Poitiers*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `date_maj`

> *Description : Date de dernière mise à jour des données (Notation ISO 8601, format AAAA-MM-JJ)<br/>Ex : 2020-02-27*
- Valeur optionnelle
- Type : date

#### Propriété `commentaires`

> *Description : Commentaires divers sur le stationnement vélo, conditions d'accès, précisions sur la localisation, tarifs...<br/>Ex : L'accès à l'emplacement se fait en sous-sol de la gare*
- Valeur optionnelle
- Type : chaîne de caractères