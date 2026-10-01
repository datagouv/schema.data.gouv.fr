<MenuSchema />

## signaletique

Classe SIGNALETIQUE du standard CNIG Accessibilité du Cheminement en Espace Naturel (ACEN)

Spécification du fichier d'échange conforme au standard CNIG Accessibilité du Cheminement en Espace Naturel pour la classe SIGNALETIQUE

- Schéma créé le : 20/04/2026
- Site web : https://github.com/cnigfr/standard-accessibilite-espace-naturel
- Version : v0.1.0
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"N/A"`
- Clé primaire : `id_signaletique`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id_signaletique](#identifiant-de-la-signaletique-propriete-id-signaletique) | chaîne de caractères  | Oui |
| [id_troncon](#identifiant-du-troncon-propriete-id-troncon) | chaîne de caractères  | Non |
| [id_arret_tc](#identifiant-de-l-arret-propriete-id-arret-tc) | chaîne de caractères  | Non |
| [id_aire_stationnement](#identifiant-de-l-aire-de-stationnement-propriete-id-aire-stationnement) | chaîne de caractères  | Non |
| [type_support](#type-de-support-de-la-signaletique-propriete-type-support) | chaîne de caractères  | Oui |
| [type_signaletique](#type-de-signaletique-propriete-type-signaletique) | liste  | Non |
| [mode_perception](#modes-de-perception-de-la-signaletique-propriete-mode-perception) | liste  | Non |
| [url_media](#hyperliens-vers-des-photos-de-la-signaletique-propriete-url-media) | liste  | Non |
| [geom_pct](#geometrie-ponctuelle-de-la-signaletique-propriete-geom-pct) | GéoJSON  | Oui |

#### identifiant de la signalétique - Propriété `id_signaletique`

> *Description : identifiant unique de la signalétique*<br/>*Exemple : 44003:SIG:0263:LOC*
- Valeur obligatoire
- Type : chaîne de caractères

#### identifiant du troncon - Propriété `id_troncon`

> *Description : identifiant du tronçon sur lequel est positionnée la signalétique*<br/>*Exemple : 44003:TRC:00089:LOC*
- Valeur optionnelle
- Type : chaîne de caractères

#### identifiant de l'arrêt - Propriété `id_arret_tc`

> *Description : identifiant de l'arrêt de transport en commun sur lequel est positionnée la signalétique*<br/>*Exemple : 44003:ATC:0022:LOC*
- Valeur optionnelle
- Type : chaîne de caractères

#### identifiant de l'aire de stationnement - Propriété `id_aire_stationnement`

> *Description : identifiant de l'aire de stationnement sur laquelle est positionnée la signalétique*<br/>*Exemple : 44003:AST:0007:LOC*
- Valeur optionnelle
- Type : chaîne de caractères

#### type de support de la signalétique - Propriété `type_support`

> *Description : type de support de la signalétique*<br/>*Exemple : panneau*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `balise`
    - `jalon`
    - `plot de jalonnement`
    - `panneau`
    - `autre`
    - `NC`
    - `sans objet`

#### type de signalétique - Propriété `type_signaletique`

> *Description : type de signalétique*<br/>*Exemple : ['signalétique d’information', 'signalétique pédagogique']*
- Valeur optionnelle
- Type : liste

#### modes de perception de la signalétique - Propriété `mode_perception`

> *Description : modes de perception : visuel, tactile, sonore…*<br/>*Exemple : ['visuel', 'sonore']*
- Valeur optionnelle
- Type : liste

#### hyperliens vers des photos de la signalétique - Propriété `url_media`

> *Description : hyperliens vers des photos représentatives de la signalétique*<br/>*Exemple : ['https://panoramax.fr/?&focus=pic&map=17/46.347392/2.593132&xyz=226.00/0.00/30']*
- Valeur optionnelle
- Type : liste

#### géométrie ponctuelle de la signalétique - Propriété `geom_pct`

> *Description : géométrie ponctuelle de la signalétique en projection Lambert93 au format GeoJSON*<br/>*Exemple : {'type': 'Point', 'coordinates': [656589.7, 6425785.32]}*
- Valeur obligatoire
- Type : GéoJSON
