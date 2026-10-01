<MenuSchema />

## mobilier

Classe MOBILIER du standard CNIG Accessibilité du Cheminement en Espace Naturel (ACEN)

Spécification du fichier d'échange conforme au standard CNIG Accessibilité du Cheminement en Espace Naturel pour la classe MOBILIER

- Schéma créé le : 20/04/2026
- Site web : https://github.com/cnigfr/standard-accessibilite-espace-naturel
- Version : v0.1.0
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"N/A"`
- Clé primaire : `id_mobilier`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id_mobilier](#identifiant-du-mobilier-propriete-id-mobilier) | chaîne de caractères  | Oui |
| [id_troncon](#identifiant-du-troncon-propriete-id-troncon) | chaîne de caractères  | Non |
| [id_arret_tc](#identifiant-de-l-arret-propriete-id-arret-tc) | chaîne de caractères  | Non |
| [id_aire_stationnement](#identifiant-de-l-aire-de-stationnement-propriete-id-aire-stationnement) | chaîne de caractères  | Non |
| [type_mobilier](#type-de-mobilier-propriete-type-mobilier) | chaîne de caractères  | Oui |
| [etat_mobilier](#etat-du-mobilier-propriete-etat-mobilier) | chaîne de caractères  | Oui |
| [url_media](#hyperliens-vers-des-photos-du-mobilier-propriete-url-media) | liste  | Non |
| [geom_pct](#geometrie-ponctuelle-du-mobilier-propriete-geom-pct) | GéoJSON  | Oui |

#### identifiant du mobilier - Propriété `id_mobilier`

> *Description : identifiant unique du mobilier*<br/>*Exemple : 44003:MOB:0098:LOC*
- Valeur obligatoire
- Type : chaîne de caractères

#### identifiant du troncon - Propriété `id_troncon`

> *Description : identifiant du tronçon sur lequel est positionné le mobilier*<br/>*Exemple : 44003:TRC:00089:LOC*
- Valeur optionnelle
- Type : chaîne de caractères

#### identifiant de l'arrêt - Propriété `id_arret_tc`

> *Description : identifiant de l'arrêt de transport en commun sur lequel est positionné le mobilier*<br/>*Exemple : 44003:ATC:0022:LOC*
- Valeur optionnelle
- Type : chaîne de caractères

#### identifiant de l'aire de stationnement - Propriété `id_aire_stationnement`

> *Description : identifiant de l'aire de stationnement sur laquelle est positionné le mobilier*<br/>*Exemple : 44003:AST:0007:LOC*
- Valeur optionnelle
- Type : chaîne de caractères

#### type de mobilier - Propriété `type_mobilier`

> *Description : type de mobilier*<br/>*Exemple : table avec banc pour PMR*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `assise`
    - `assise pour PMR`
    - `table avec banc intégré`
    - `table avec banc pour PMR`
    - `abri`
    - `belvédère ou plateforme d’observation`
    - `agrès sensoriels`
    - `agrès sportif`
    - `fontaine à eau`
    - `poubelle`
    - `barbecue`
    - `support vélo`
    - `autre`
    - `NC`
    - `sans objet`

#### état du mobilier - Propriété `etat_mobilier`

> *Description : état du mobilier*<br/>*Exemple : excellent*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `excellent`
    - `bon`
    - `moyen`
    - `mauvais`
    - `hors service`
    - `autre`
    - `sans objet`

#### hyperliens vers des photos du mobilier - Propriété `url_media`

> *Description : hyperliens vers des photos représentatives du mobilier*<br/>*Exemple : ['https://panoramax.fr/?&focus=pic&map=17/46.347392/2.593132&xyz=226.00/0.00/30']*
- Valeur optionnelle
- Type : liste

#### géométrie ponctuelle du mobilier - Propriété `geom_pct`

> *Description : géométrie ponctuelle du mobilier en projection Lambert93 au format GeoJSON*<br/>*Exemple : {'type': 'Point', 'coordinates': [656589.7, 6425785.32]}*
- Valeur obligatoire
- Type : GéoJSON
