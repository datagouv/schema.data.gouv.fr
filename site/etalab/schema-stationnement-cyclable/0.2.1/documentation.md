<MenuSchema />

<MenuSchema />

## stationnement-cyclable

Stationnement cyclable

Spécification du fichier décrivant les emplacements de stationnement cycable.

- Schéma créé le : 10/03/2021
- Site web : https://github.com/etalab/schema-stationnement-cyclable
- Version : 0.2
- Clé primaire : `id_local`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id_local](#propriete-id-local) | chaîne de caractères  | Oui |
| [id_osm](#propriete-id-osm) | chaîne de caractères  | Non |
| [code_com](#propriete-code-com) | chaîne de caractères  | Non |
| [xlong](#propriete-xlong) | nombre réel  | Oui |
| [ylat](#propriete-ylat) | nombre réel  | Oui |
| [capacite](#propriete-capacite) | nombre entier  | Oui |
| [capacite_cargo](#propriete-capacite-cargo) | nombre entier  | Non |
| [type_accroche](#propriete-type-accroche) | chaîne de caractères  | Oui |
| [mobilier](#propriete-mobilier) | chaîne de caractères  | Non |
| [acces](#propriete-acces) | chaîne de caractères  | Non |
| [gratuit](#propriete-gratuit) | booléen  | Non |
| [protection](#propriete-protection) | chaîne de caractères  | Non |
| [couverture](#propriete-couverture) | booléen  | Non |
| [surveillance](#propriete-surveillance) | booléen  | Non |
| [lumiere](#propriete-lumiere) | booléen  | Non |
| [url_info](#propriete-url-info) | chaîne de caractères (format `uri`) | Non |
| [d_service](#propriete-d-service) | nombre entier  | Non |
| [source](#propriete-source) | chaîne de caractères  | Non |
| [proprietaire](#propriete-proprietaire) | chaîne de caractères  | Non |
| [gestionnaire](#propriete-gestionnaire) | chaîne de caractères  | Non |
| [date_maj](#propriete-date-maj) | date  | Non |
| [commentaires](#propriete-commentaires) | chaîne de caractères  | Non |

#### Propriété `id_local`

> *Description : Identifiant unique du stationnement dans les bases de données de la collectivité territoriale productrice de données*<br/>*Exemple : STSI01*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `id_osm`

> *Description : Identifiant OpenStreetMap, si les données proviennent d'OSM. On compose l'identifiant en utilisant la clef "n" s'il s'agit d'un noeud, "w" s'il s'agit d'un chemin et "r" s'il s'agit d'une relation.*<br/>*Exemple : n34172*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `code_com`

> *Description : Code INSEE de la commune où se trouve le stationnement vélo*<br/>*Exemple : n71729735*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### Propriété `xlong`

> *Description : La longitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation du centre de l'emplacement de stationnement exprimée dans le système de coordonnées WGS84.*<br/>*Exemple : 1.452323*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -180 et 180

#### Propriété `ylat`

> *Description : La latitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation de centre de l'emplacement de stationnement exprimée dans le système de coordonnées WGS84.*<br/>*Exemple : 46.59698*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -90 et 90

#### Propriété `capacite`

> *Description : Nombre de places de stationnement disponibles sur l'emplacement y compris les places adaptées à des vélos spéciaux (comme les vélos de grande taille).*<br/>*Exemple : 14*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `capacite_cargo`

> *Description : Nombre de places de stationnement disponibles pour les vélos de grande taille*<br/>*Exemple : 2*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `type_accroche`

> *Description : Mode d'accrochage possible du vélo aux équipements de stationnement*<br/>*Exemple : CADRE ET ROUE*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `ROUE`
    - `CADRE`
    - `CADRE ET ROUE`
    - `SANS ACCROCHE`

#### Propriété `mobilier`

> *Description : Type de mobilier de stationnement*<br/>*Exemple : ARCEAU*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `ARCEAU`
    - `RATELIER`
    - `RACK DOUBLE ETAGE`
    - `CROCHET`
    - `SUPPORT GUIDON`
    - `POTELET`
    - `ARCEAU VELO GRANDE TAILLE`
    - `AUCUN EQUIPEMENT`
    - `AUTRE`

#### Propriété `acces`

> *Description : Mode d'accès à l'emplacement de stationnement*<br/>*Exemple : LIBRE ACCES*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `LIBRE ACCES`
    - `ABONNEMENT OU INSCRIPTION PREALABLE`
    - `PRIVE`

#### Propriété `gratuit`

> *Description : L'usage de l'équipement de stationnement est-il gratuit ?*<br/>*Exemple : true*
- Valeur optionnelle
- Type : booléen

#### Propriété `protection`

> *Description : Protection du stationnement*<br/>*Exemple : STATIONNEMENT NON FERME*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `STATIONNEMENT NON FERME`
    - `CONSIGNE COLLECTIVE FERMEE`
    - `BOX INDIVIDUEL FERME`
    - `AUTRE`

#### Propriété `couverture`

> *Description : Le stationnement est-il couvert et est donc protégé de la pluie, de la neige et de la grêle ?*<br/>*Exemple : true*
- Valeur optionnelle
- Type : booléen

#### Propriété `surveillance`

> *Description : Le stationnement est-il surveillé par un gardien ou par de la vidéosurveillance ?*<br/>*Exemple : true*
- Valeur optionnelle
- Type : booléen

#### Propriété `lumiere`

> *Description : L'emplacement est-il éclairé la nuit (par de l'éclairage urbain ou dédié à l'emplacement) ?*<br/>*Exemple : true*
- Valeur optionnelle
- Type : booléen

#### Propriété `url_info`

> *Description : Site web d'information sur l'emplacement (abonnement/réservation...)*<br/>*Exemple : https://www.exemple.fr/stationnementvelo-maville/*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)

#### Propriété `d_service`

> *Description : Date de mise en service du stationnement vélo (Notation ISO 8601, format AAAA)*<br/>*Exemple : 2017*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `source`

> *Description : Nom de l'organisation ayant fourni les données*<br/>*Exemple : Grand Poitiers*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `proprietaire`

> *Description : Nom de l'organisation propriétaire de l'emplacement de stationnement*<br/>*Exemple : Ville de Poitiers*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `gestionnaire`

> *Description : Nom de l'organisation gestionnaire de l'emplacement de stationnement*<br/>*Exemple : Ville de Poitiers*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `date_maj`

> *Description : Date de dernière mise à jour des données (Notation ISO 8601, format AAAA-MM-JJ)*<br/>*Exemple : 2020-02-27*
- Valeur optionnelle
- Type : date

#### Propriété `commentaires`

> *Description : Commentaires divers sur le stationnement vélo, conditions d'accès, précisions sur la localisation, tarifs...*<br/>*Exemple : L'accès à l'emplacement se fait en sous-sol de la gare*
- Valeur optionnelle
- Type : chaîne de caractères
