<MenuSchema />

## Lieux de covoiturage

Spécification des lieux permettant le covoiturage

- Auteur : Antoine Augusti pour Etalab
- Contributeurs : transport.data.gouv.fr, OpenDataFrance, FEDUCO, BlaBlaCar
- Schéma créé le : 25/06/2019
- Site web : https://github.com/etalab/schema-lieux-covoiturage
- Données d'exemple : https://github.com/etalab/schema-lieux-covoiturage/raw/v0.1.1/exemple-valide.csv
- Version : 0.1.1
- Clé primaire : `id_lieu`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id_lieu](#propriete-id-lieu) | chaîne de caractères  | Oui |
| [nom_lieu](#propriete-nom-lieu) | chaîne de caractères  | Oui |
| [ad_lieu](#propriete-ad-lieu) | chaîne de caractères  | Non |
| [com_lieu](#propriete-com-lieu) | chaîne de caractères  | Non |
| [insee](#propriete-insee) | chaîne de caractères  | Oui |
| [type](#propriete-type) | chaîne de caractères  | Oui |
| [date_maj](#propriete-date-maj) | date (format `%Y-%m-%d`) | Oui |
| [ouvert](#propriete-ouvert) | booléen  | Oui |
| [source](#propriete-source) | chaîne de caractères  | Oui |
| [Xlong](#propriete-xlong) | nombre réel  | Oui |
| [Ylat](#propriete-ylat) | nombre réel  | Oui |
| [nbre_pl](#propriete-nbre-pl) | nombre entier  | Non |
| [nbre_pmr](#propriete-nbre-pmr) | nombre entier  | Non |
| [duree](#propriete-duree) | nombre entier  | Non |
| [horaires](#propriete-horaires) | chaîne de caractères  | Non |
| [proprio](#propriete-proprio) | chaîne de caractères  | Non |
| [lumiere](#propriete-lumiere) | booléen  | Non |
| [comm](#propriete-comm) | chaîne de caractères  | Non |

#### Propriété `id_lieu`

> *Description : Identifiant du lieu de covoiturage, délivré par le point d'accès national<br/>Ex : 35238-C-001*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}-C-\d{3}$`

#### Propriété `nom_lieu`

> *Description : Le nom du lieu de covoiturage. Recommandation : inutile de répéter la nature du type de covoiturage<br/>Ex : Les Romains*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `ad_lieu`

> *Description : L'adresse du lieu compréhensible par le grand public pour assurer la coordination entre le passager et le conducteur. Exemple : "3, rue de la gare" ; pour les lieux proches des sorties d'autoroute ou de nationale : "A11 sortie 7 Le Mans Nord" ; pour les zones rurales sans adresse : "croisement de route 1 - route 2" ou "le long de route X après le passage à niveau"<br/>Ex : 3, rue de la Gare*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `com_lieu`

> *Description : La commune / le lieu-dit du covoiturage<br/>Ex : Rouen*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `insee`

> *Description : Le code INSEE de la commune d'implantation<br/>Ex : 76540*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### Propriété `type`

> *Description : Le type de lieu de covoiturage<br/>Ex : Parking*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Aire de covoiturage
    - Sortie d'autoroute
    - Parking
    - Supermarché
    - Parking relais
    - Délaissé routier

#### Propriété `date_maj`

> *Description : Date de dernière mise à jour des données. Notation ISO 8601, format AAAA-MM-DD<br/>Ex : 2016-10-31*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### Propriété `ouvert`

> *Description : Le lieu est-il ouvert<br/>Ex : true*
- Valeur obligatoire
- Type : booléen

#### Propriété `source`

> *Description : SIREN de l'entité ayant fourni la donnée<br/>Ex : 225300011*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{9}$`

#### Propriété `Xlong`

> *Description : La longitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation de l’entrée du lieu de covoiturage exprimée dans le système de coordonnées WGS84<br/>Ex : 1.452323*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -180 et 180

#### Propriété `Ylat`

> *Description : La latitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation de l’entrée du lieu de covoiturage exprimée dans le système de coordonnées WGS84<br/>Ex : 46.59698*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -90 et 90

#### Propriété `nbre_pl`

> *Description : Le nombre de places réservées au stationnement disponibles<br/>Ex : 42*
- Valeur optionnelle
- Type : nombre entier
- Valeur supérieur à 0

#### Propriété `nbre_pmr`

> *Description : Le nombre de places PMR disponibles<br/>Ex : 3*
- Valeur optionnelle
- Type : nombre entier
- Valeur supérieur à 0

#### Propriété `duree`

> *Description : Si il existe une restriction sur la durée de stationnement autorisée, la durée maximale de stationnement autorisée exprimée en minutes<br/>Ex : 60*
- Valeur optionnelle
- Type : nombre entier
- Valeur supérieur à 0

#### Propriété `horaires`

> *Description : Ce champ permet de renseigner, si l'information est connue, les jours et horaires d'ouverture de l'équipement<br/>Ex : Mo-Fr 08:00-20:00*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `proprio`

> *Description : Le nom de l'aménageur, c'est-à-dire de l'entité publique ou privée propriétaire des infrastructures<br/>Ex : Département*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `lumiere`

> *Description : Un éclairage nocture est-il présent<br/>Ex : False*
- Valeur optionnelle
- Type : booléen

#### Propriété `comm`

> *Description : Commentaires éventuels sur les commodités mises à disposition du grand public comme : le numéro de téléphone unique qui indique les services disponibles au moment de l'arrivée sur l'aire pour réaliser le dernier kilomètre ; la présence de prises 220V ou USB ; accès à du réseau (télécom, WiFi) ; sanitaires ; intermodalité en transports<br/>Ex : Présence de sanitaires et accès à de l'eau courante*
- Valeur optionnelle
- Type : chaîne de caractères
