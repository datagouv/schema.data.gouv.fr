<MenuSchema />

<MenuSchema />

## stationstaxi

Stations de taxi

Spécification des stations de taxi à usage public

- Schéma créé le : 07/04/2021
- Site web : https://github.com/openmaraude/schema-stationstaxi
- Version : 0.1.0
- Clé primaire : `id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id](#propriete-id) | chaîne de caractères  | Oui |
| [nom](#propriete-nom) | chaîne de caractères  | Oui |
| [insee](#propriete-insee) | chaîne de caractères  | Oui |
| [xlong](#propriete-xlong) | nombre réel  | Oui |
| [ylat](#propriete-ylat) | nombre réel  | Oui |
| [adresse](#propriete-adresse) | chaîne de caractères  | Non |
| [emplacements](#propriete-emplacements) | nombre entier  | Non |
| [no_appel](#propriete-no-appel) | chaîne de caractères  | Non |
| [info](#propriete-info) | chaîne de caractères  | Non |

#### Propriété `id`

> *Description : L'identifiant unique et stable de la station, délivré par le producteur ou à défaut par le.taxi. `INSEE-T-xxx` où `INSEE` est le code INSEE de la commune et `xxx` est le numéro d’ordre sur 3 chiffres.*<br/>*Exemple : 38185-T-001*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}-T-\d{3}$`

#### Propriété `nom`

> *Description : Nom de la station ou nom donné dans son utilisation quotidienne. Recommandation : inutile de répéter le mot station ou taxi*<br/>*Exemple : Gare - Frise*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `insee`

> *Description : Le code INSEE de la commune où la station est localisée.*<br/>*Exemple : 38185*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### Propriété `xlong`

> *Description : La longitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation de l'entrée du lieu exprimée dans le système de coordonnées WGS84.*<br/>*Exemple : 1.452323*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -180 et 180

#### Propriété `ylat`

> *Description : La latitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation de l'entrée du lieu exprimée dans le système de coordonnées WGS84.*<br/>*Exemple : 46.59698*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -90 et 90

#### Propriété `adresse`

> *Description : L’adresse du lieu compréhensible par le grand public pour assurer le guidage du client. Exemple : “3, rue de la gare” ; pour les lieux proches des sorties d’autoroute ou de nationale : “A11 sortie 7 Le Mans Nord” ; pour les zones rurales sans adresse : “croisement de route 1 - route 2” ou “le long de route X après le passage à niveau”.*<br/>*Exemple : 3 rue de la Gare, 92300, Levallois-Peret*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `emplacements`

> *Description : Nombre total d’emplacements, capacité d’accueil de la station. Si fourni, possibilité de calculer un ratio d’usage.*<br/>*Exemple : 2*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `no_appel`

> *Description : Numéro de téléphone de la station à disposition des clients pour obtenir un taxi.*<br/>*Exemple : 0476544254*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `info`

> *Description : Faire remonter des informations ou commentaires, utiles pour un client, si les champs précédents ne correspondent pas. Si plusieurs informations sont renseignées, le séparateur est le point-virgule.*<br/>*Exemple : Niveau -1 de la gare*
- Valeur optionnelle
- Type : chaîne de caractères
