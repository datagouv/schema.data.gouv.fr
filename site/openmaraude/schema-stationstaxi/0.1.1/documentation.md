<MenuSchema />

<MenuSchema />

## stationstaxi

Stations de taxi

Spécification des stations de taxi à usage public

- Schéma créé le : 07/04/2021
- Site web : https://github.com/openmaraude/schema-stationstaxi
- Version : 0.1.1
- Clé primaire : `id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id](#propriete-id) | chaîne de caractères  | Oui |
| [nom](#propriete-nom) | chaîne de caractères  | Oui |
| [insee](#propriete-insee) | chaîne de caractères  | Oui |
| [geopoint](#propriete-geopoint) | point géographique  | Oui |
| [adresse](#propriete-adresse) | chaîne de caractères  | Non |
| [emplacements](#propriete-emplacements) | nombre entier  | Non |
| [no_appel](#propriete-no-appel) | chaîne de caractères  | Non |
| [info](#propriete-info) | chaîne de caractères  | Non |

#### Propriété `id`

> *Description : Identifiant unique et stable de la station, délivré par le producteur ou à défaut par le.taxi. `INSEE-T-xxx` où `INSEE` est le code INSEE de la commune et `xxx` est le numéro d’ordre d’arrivée dans la base sur 3 chiffres, commençant par 001*<br/>*Exemple : 38185-T-001*
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

#### Propriété `geopoint`

> *Description : La longitude, latitude au format Table Schema (https://specs.frictionlessdata.io/table-schema/#geopoint)*<br/>*Exemple : 1.452323, 46.59698*
- Valeur obligatoire
- Type : point géographique

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
