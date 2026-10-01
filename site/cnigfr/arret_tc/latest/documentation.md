<MenuSchema />

## arret_tc

Classe ARRET_TC du standard CNIG Accessibilité du Cheminement en Espace Naturel (ACEN)

Spécification du fichier d'échange conforme au standard CNIG Accessibilité du Cheminement en Espace Naturel pour la classe ARRET_TC

- Schéma créé le : 20/04/2026
- Site web : https://github.com/cnigfr/standard-accessibilite-espace-naturel
- Version : v0.1.0
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"N/A"`
- Clé primaire : `id_arret_tc`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id_arret_tc](#identifiant-de-l-arret-de-transport-collectif-propriete-id-arret-tc) | chaîne de caractères  | Oui |
| [id_cheminement](#identifiant-du-cheminement-propriete-id-cheminement) | chaîne de caractères  | Oui |
| [nom_arret](#nom-de-l'arret-propriete-nom-arret) | chaîne de caractères  | Oui |
| [nom_ligne](#nom-et-numero-de-la-ligne-de-transport-en-commun-propriete-nom-ligne) | chaîne de caractères  | Oui |
| [type_tc](#type-de-transport-en-commun-a-proximite-du-cheminement-propriete-type-tc) | chaîne de caractères  | Oui |
| [arret_pmr](#arret-accessible-aux-personnes-en-fauteuil-roulant-propriete-arret-pmr) | chaîne de caractères  | Oui |
| [url_media](#hyperliens-vers-des-photos-de-l'arret-de-transport-collectif-propriete-url-media) | liste  | Non |
| [coord_gps_arret](#coordonnees-geographiques-de-l-arret-propriete-coord-gps-arret) | point géographique  | Non |
| [geom_pct](#geometrie-ponctuelle-de-l'arret-propriete-geom-pct) | GéoJSON  | Oui |

#### identifiant de l'arrêt de transport collectif - Propriété `id_arret_tc`

> *Description : identifiant unique de l'arrêt de transport collectif*<br/>*Exemple : 44003:ATC:0022:LOC*
- Valeur obligatoire
- Type : chaîne de caractères

#### identifiant du cheminement - Propriété `id_cheminement`

> *Description : identifiant du cheminement desservi par l'arrêt de transport en commun*<br/>*Exemple : 44003:CHE:00654:LOC*
- Valeur obligatoire
- Type : chaîne de caractères

#### nom de l’arrêt - Propriété `nom_arret`

> *Description : nom de l’arrêt de transport en commun*<br/>*Exemple : Ancenis bourg*
- Valeur obligatoire
- Type : chaîne de caractères

#### nom et numéro de la ligne de transport en commun - Propriété `nom_ligne`

> *Description : nom et numéro de la ligne de transport en commun*<br/>*Exemple : Ancenis Sucé, ligne n°10*
- Valeur obligatoire
- Type : chaîne de caractères

#### type de transport en commun à proximité du cheminement - Propriété `type_tc`

> *Description : type de transport en commun à proximité du cheminement*<br/>*Exemple : car*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `bus`
    - `car`
    - `tram`
    - `métro`
    - `station vélo`
    - `remontées mécaniques`
    - `aucun`
    - `autre`
    - `NC`
    - `sans objet`

#### arrêt accessible aux personnes en fauteuil roulant - Propriété `arret_pmr`

> *Description : arrêt accessible aux personnes en fauteuil roulant*<br/>*Exemple : oui*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### hyperliens vers des photos de l’arrêt de transport collectif - Propriété `url_media`

> *Description : hyperliens vers des photos représentatives de l’arrêt de transport collectif*<br/>*Exemple : ['https://panoramax.fr/?&focus=pic&map=17/46.347392/2.593132&xyz=226.00/0.00/30']*
- Valeur optionnelle
- Type : liste

#### coordonnées géographiques de l'arrêt - Propriété `coord_gps_arret`

> *Description : coordonnées géographiques de l'arrêt*<br/>*Exemple : 49.2527, 3.9815*
- Valeur optionnelle
- Type : point géographique

#### géométrie ponctuelle de l’arrêt - Propriété `geom_pct`

> *Description : géométrie ponctuelle de l'arrêt en projection Lambert93 au format GeoJSON*<br/>*Exemple : {'type': 'Point', 'coordinates': [656589.7, 6425785.32]}*
- Valeur obligatoire
- Type : GéoJSON
