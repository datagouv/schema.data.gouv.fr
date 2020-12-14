---
permalink: /NaturalSolutions/schema-arbre/0.1.0/documentation.html
redirect_from: null
title: Documentation de Schéma des attributs des arbres urbains
version: 0.1.0
---

## Attributs des arbres urbains

Schéma des attributs des arbres urbains

Spécification des attributs liés aux arbres urbains dans le cadre d'un inventaire du patrimoine arboré par les collectivités.

- Schéma créé le : 16/10/2020
- Site web : https://github.com/NaturalSolutions/schema-arbre
- Version : 0.1.0
- Clé primaire : `id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id](#propriété-id) | nombre entier  | Oui |
| [longitude](#propriété-longitude) | nombre réel  | Oui |
| [latitude](#propriété-latitude) | nombre réel  | Oui |
| [famille_arbre](#propriété-famille_arbre) | chaîne de caractères  | Non |
| [genre_arbre](#propriété-genre_arbre) | chaîne de caractères  | Non |
| [espece_arbre](#propriété-espece_arbre) | chaîne de caractères  | Non |
| [cultivar_variete_arbre](#propriété-cultivar_variete_arbre) | chaîne de caractères  | Non |
| [nom_vernaculaire](#propriété-nom_vernaculaire) | chaîne de caractères  | Non |
| [code_insee](#propriété-code_insee) | nombre entier  | Non |
| [code_postal](#propriété-code_postal) | nombre entier  | Non |
| [adresse](#propriété-adresse) | chaîne de caractères  | Non |
| [matricule_arbre](#propriété-matricule_arbre) | chaîne de caractères  | Non |
| [date_plantation](#propriété-date_plantation) | date  | Non |
| [hauteur](#propriété-hauteur) | nombre réel  | Non |
| [diametre](#propriété-diametre) | nombre réel  | Non |
| [type_sol](#propriété-type_sol) | chaîne de caractères  | Non |
| [type_enracinement](#propriété-type_enracinement) | chaîne de caractères  | Non |
| [port_arbre](#propriété-port_arbre) | chaîne de caractères  | Non |
| [arbre_remarquable](#propriété-arbre_remarquable) | booléen  | Non |
| [arbre_protege](#propriété-arbre_protege) | booléen  | Non |
| [contraintes_sol](#propriété-contraintes_sol) | chaîne de caractères  | Non |
| [contrainte_aeriennes](#propriété-contrainte_aeriennes) | chaîne de caractères  | Non |
| [eclairage](#propriété-eclairage) | booléen  | Non |
| [arrosage](#propriété-arrosage) | chaîne de caractères  | Non |
| [allergie](#propriété-allergie) | nombre entier  | Non |
| [remarque](#propriété-remarque) | chaîne de caractères  | Non |

#### Propriété `id`

> *Description : Un identifiant unique de l'objet arbre.<br/>Ex : 42*
- Valeur obligatoire
- Type : nombre entier
- Valeur supérieur à 1

#### Propriété `longitude`

> *Description : La longitude en degrés décimaux (point comme séparateur décimal) de la localisation de l'arbre dans le système de coordonnées WGS84.<br/>Ex : 48.3610*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -180 et 180

#### Propriété `latitude`

> *Description : La latitude en degrés décimaux (point comme séparateur décimal) de la localisation de l'arbre dans le système de coordonnées WGS84.<br/>Ex : 32.2812*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -180 et 180

#### Propriété `famille_arbre`

> *Description : Le taxon auquel appartient l'arbre en latin (cinquième niveau de la classification classique).<br/>Ex : Platanaceae*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `genre_arbre`

> *Description : La subdivision de la famille auquel appartient l'arbre en latin (sixième niveau de la classification classique).<br/>Ex : Platanus*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `espece_arbre`

> *Description : <br/>Ex : *
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `cultivar_variete_arbre`

> *Description : La subdivision de l'espèce auquel appartient l'arbre en latin.<br/>Ex : Cripps Pink'*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `nom_vernaculaire`

> *Description : Le nom commun français correspondant au nom scientifique ([genre][espèce][cultivar]).<br/>Ex : Platane commun*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `code_insee`

> *Description : Le code INSEE de la commune dans laquelle l'arbre se trouve.<br/>Ex : 59599*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `code_postal`

> *Description : Le code postal de la commune dans laquelle l'arbre se trouve.<br/>Ex : 13010*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `adresse`

> *Description : Le nom de la rue (avec ou sans numéro) dans laquelle l'arbre se trouve.<br/>Ex : 61 rue de la Poste*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `matricule_arbre`

> *Description : L'identifiant unique de l'arbre au norme de la collectivité.<br/>Ex : A20200525*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `date_plantation`

> *Description : La date de plantation de l'arbre, au format ISO 8601 AAAA-MM-DD.<br/>Ex : 1996-07-12*
- Valeur optionnelle
- Type : date

#### Propriété `hauteur`

> *Description : La hauteur de l'arbre exprimée en cm<br/>Ex : 300*
- Valeur optionnelle
- Type : nombre réel

#### Propriété `diametre`

> *Description : Le diamètre de l'arbre mesurée à hauteur d'homme, c'est-à-dire 1m50 exprimé en cm<br/>Ex : 70*
- Valeur optionnelle
- Type : nombre réel

#### Propriété `type_sol`

> *Description : La composition pédologique du sol où est planté l'arbre<br/>Ex : Argileux*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `type_enracinement`

> *Description : Le type d'enracinement de l'arbre<br/>Ex : Pivotant*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `port_arbre`

> *Description : La forme du houppier de l'arbre<br/>Ex : Pyramide*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `arbre_remarquable`

> *Description : Classification de l'arbre à remarquable selon son âge, sa circonférence et sa hauteur<br/>Ex : Oui*
- Valeur optionnelle
- Type : booléen

#### Propriété `arbre_protege`

> *Description : Si l'arbre fait l'objet d'une classification et d'une protection<br/>Ex : Non*
- Valeur optionnelle
- Type : booléen

#### Propriété `contraintes_sol`

> *Description : Indique la présence de contraintes physiques au niveau du sol <br/>Ex : Sol perméabilisé*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `contrainte_aeriennes`

> *Description : Indique la présence de contraintes physiques au-dessus du sol<br/>Ex : Présence de cables*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `eclairage`

> *Description : Indique la présence d'éclairage à proximité de l'arbre<br/>Ex : Oui*
- Valeur optionnelle
- Type : booléen

#### Propriété `arrosage`

> *Description : Indique la présence ou non d'un arrosage et quel type d'arrosage <br/>Ex : Goutte à goutte*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `allergie`

> *Description : Indique le potentiel allergisant de l'arbre (0 = nul --> 5 = très fort)<br/>Ex : 2*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `remarque`

> *Description : Tout autre remarque nécessaire à la gestion de l'arbre<br/>Ex : Ceci est un exemple de remarque*
- Valeur optionnelle
- Type : chaîne de caractères