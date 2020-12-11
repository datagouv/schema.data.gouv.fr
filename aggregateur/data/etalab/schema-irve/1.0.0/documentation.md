---
permalink: /etalab/schema-irve/1.0.0/documentation.html
redirect_from: null
title: Documentation de Schéma IRVE
version: 1.0.0
---

## Schéma IRVE

Spécification du fichier d'échange relatif aux données concernant la localisation géographique et les caractéristiques techniques des stations et des points de recharge pour véhicules électriques

- Auteur : Alexandre Bulté pour Etalab
- Contributeurs : Charles Nepote
- Schéma créé le : 29/06/2018
- Site web : https://github.com/etalab/schema-irve
- Données d'exemple : https://github.com/etalab/schema-irve/blob/master/exemple-valide.csv
- Version : 1.0.0
- Clé primaire : `id_pdc`

### Modèle de données


##### Liste des propriétés
| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [n_amenageur](#propriété-n_amenageur) | chaîne de caractères  | Oui |
| [n_operateur](#propriété-n_operateur) | chaîne de caractères  | Oui |
| [n_enseigne](#propriété-n_enseigne) | chaîne de caractères  | Oui |
| [id_station](#propriété-id_station) | chaîne de caractères  | Oui |
| [n_station](#propriété-n_station) | chaîne de caractères  | Oui |
| [ad_station](#propriété-ad_station) | chaîne de caractères  | Oui |
| [code_insee](#propriété-code_insee) | chaîne de caractères  | Oui |
| [Xlongitude](#propriété-Xlongitude) | nombre réel  | Oui |
| [Ylatitude](#propriété-Ylatitude) | nombre réel  | Oui |
| [nbre_pdc](#propriété-nbre_pdc) | nombre entier  | Oui |
| [id_pdc](#propriété-id_pdc) | chaîne de caractères  | Oui |
| [puiss_max](#propriété-puiss_max) | nombre réel  | Oui |
| [type_prise](#propriété-type_prise) | chaîne de caractères  | Oui |
| [acces_recharge](#propriété-acces_recharge) | chaîne de caractères  | Oui |
| [accessibilité](#propriété-accessibilité) | chaîne de caractères  | Oui |
| [observations](#propriété-observations) | chaîne de caractères  | Oui |
| [date_maj](#propriété-date_maj) | date (format `%Y/%m/%d`) | Oui |

#### Propriété `n_amenageur`

> *Description : Le nom de l'aménageur, c'est à dire de l'entité publique ou privée propriétaire des infrastructures<br/>Ex : Société X, Entité Y*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `n_operateur`

> *Description : Le nom de l'opérateur qui opère le réseau d'infrastructure (l'aménageur ou un tiers auquel a été confié la responsabilité par délégation)<br/>Ex : Société X, Entité Y*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `n_enseigne`

> *Description : Le nom commercial du réseau<br/>Ex : Réseau de recharge ABC*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `id_station`

> *Description : L'identifiant de la station délivré selon les modalités définies à l'article 10 du décret n° 2017-26 du 12 janvier 2017<br/>Ex : FR*A68*P68021*A*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `n_station`

> *Description : le nom de la station<br/>Ex : Picpus, Belleville, Villiers*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `ad_station`

> *Description : L'adresse complète de la station : [numéro] [rue], [code postal] [ville]<br/>Ex : 1 avenue de la Paix, 75001 Paris*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `code_insee`

> *Description : Le code INSEE de la commune d'implantation<br/>Ex : 06088, 2B002 (pour une commune corse)*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### Propriété `Xlongitude`

> *Description : La longitude en degrés décimaux (point comme séparateur décimal) de la localisation de la station exprimée dans le système de coordonnées WGS84<br/>Ex : 7.48710500*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `Ylatitude`

> *Description : La latitude en degrés décimaux (point comme séparateur décimal) de la localisation de la station exprimée le système de coordonnées WGS84<br/>Ex : 47.63495500*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `nbre_pdc`

> *Description : Le nombre de points de recharge sur la station<br/>Ex : 1, 10*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `id_pdc`

> *Description : L'identifiant du point de recharge délivré selon les modalités définies à l'article 10 du décret n° 2017-26 du 12 janvier 2017<br/>Ex : FR*A68*E68021*A*B1*D*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `puiss_max`

> *Description : La puissance maximale délivrée à chaque point de recharge, exprimée en kW, en fonction du contrat d'abonnement de puissance de la station et du type de connecteur.<br/>Ex : 22.00*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `type_prise`

> *Description : Les types de prises ou de connecteurs disponibles sur chaque point de charge<br/>Ex : E/F, T2*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `acces_recharge`

> *Description : Modalités d'accès à la recharge<br/>Ex : Payant, Gratuit, Sur abonnement*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `accessibilité`

> *Description : Amplitude d'ouverture de la station.<br/>Ex : 24/24 7/7 jours*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `observations`

> *Description : Champ destiné à préciser les modalités d'accès à la recharge, l'accessibilité, le tarif, les horaires d'ouverture, …<br/>Ex : Recharge uniquement disponible pendant les horaires d'ouverture du Centre Commercial XY*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `date_maj`

> *Description : Date de mise à jour des données<br/>Ex : 2018/08/08, 2015/12/30*
- Valeur obligatoire
- Type : date (format `%Y/%m/%d`)