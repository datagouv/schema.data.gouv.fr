<MenuSchema />

## obstacle

Classe OBSTACLE du standard CNIG Accessibilité du Cheminement en Espace Naturel (ACEN)

Spécification du fichier d'échange conforme au standard CNIG Accessibilité du Cheminement en Espace Naturel pour la classe OBSTACLE

- Schéma créé le : 20/04/2026
- Site web : https://github.com/cnigfr/standard-accessibilite-espace-naturel
- Version : v0.1.0
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"N/A"`
- Clé primaire : `id_obstacle`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id_obstacle](#identifiant-de-l-obstacle-propriete-id-obstacle) | chaîne de caractères  | Oui |
| [id_troncon](#identifiant-du-troncon-propriete-id-troncon) | chaîne de caractères  | Oui |
| [id_osm](#identifiant-osm-de-l'objet-correspondant-propriete-id-osm) | nombre entier  | Non |
| [type_obstacle](#type-d-obstacle-propriete-type-obstacle) | liste  | Non |
| [description_obstacle](#description-de-l'obstacle-propriete-description-obstacle) | chaîne de caractères  | Non |
| [url_media](#hyperliens-vers-des-photos-de-l'obstacle-propriete-url-media) | liste  | Non |
| [frequence_obstacle](#frequence-d'obstacle-genant-propriete-frequence-obstacle) | chaîne de caractères  | Oui |
| [reperabilite_obstacle](#reperabilite-de-l'obstacle-propriete-reperabilite-obstacle) | chaîne de caractères  | Oui |
| [coord_gps_obstacle](#coordonnees-geographiques-de-l-obstacle-propriete-coord-gps-obstacle) | point géographique  | Non |
| [geom_pct](#geometrie-ponctuelle-de-l-obstacle-propriete-geom-pct) | GéoJSON  | Oui |

#### identifiant de l'obstacle - Propriété `id_obstacle`

> *Description : identifiant unique de l'obstacle*<br/>*Exemple : 44003:OBS:00112:LOC*
- Valeur obligatoire
- Type : chaîne de caractères

#### identifiant du troncon - Propriété `id_troncon`

> *Description : identifiant du tronçon sur lequel est rencontré l'obstacle*<br/>*Exemple : 44003:TRC:00089:LOC*
- Valeur obligatoire
- Type : chaîne de caractères

#### identifiant OSM de l’objet correspondant - Propriété `id_osm`

> *Description : identifiant osm de l’objet correspondant*
- Valeur optionnelle
- Type : nombre entier

#### type d'obstacle - Propriété `type_obstacle`

> *Description : type d'obstacle*<br/>*Exemple : ['ressaut', 'nid de poule']*
- Valeur optionnelle
- Type : liste

#### description de l’obstacle - Propriété `description_obstacle`

> *Description : description de l’obstacle*<br/>*Exemple : le ressaut en ciment mesure 7 cm*
- Valeur optionnelle
- Type : chaîne de caractères

#### hyperliens vers des photos de l’obstacle - Propriété `url_media`

> *Description : hyperliens vers des photos représentatives de l’obstacle*<br/>*Exemple : ['https://panoramax.fr/?&focus=pic&map=17/46.347392/2.593132&xyz=226.00/0.00/30']*
- Valeur optionnelle
- Type : liste

#### fréquence d’obstacle gênant - Propriété `frequence_obstacle`

> *Description : fréquence d’obstacle*<br/>*Exemple : fréquents*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `aucun`
    - `espacés`
    - `réguliers`
    - `fréquents`
    - `très fréquents`
    - `NC`
    - `Sans objet`

#### repérabilité de l’obstacle - Propriété `reperabilite_obstacle`

> *Description : obstacle repérable grâce à une signalétique claire*<br/>*Exemple : non*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### coordonnées géographiques de l'obstacle - Propriété `coord_gps_obstacle`

> *Description : coordonnées géographiques de l'obstacle*<br/>*Exemple : 49.2527, 3.9815*
- Valeur optionnelle
- Type : point géographique

#### géométrie ponctuelle de l'obstacle - Propriété `geom_pct`

> *Description : géométrie ponctuelle de l'obstacle en projection Lambert93 au format GeoJSON*<br/>*Exemple : {'type': 'Point', 'coordinates': [656589.7, 6425785.32]}*
- Valeur obligatoire
- Type : GéoJSON
