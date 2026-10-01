<MenuSchema />

## service

Classe SERVICE du standard CNIG Accessibilité du Cheminement en Espace Naturel (ACEN)

Spécification du fichier d'échange conforme au standard CNIG Accessibilité du Cheminement en Espace Naturel pour la classe SERVICE

- Schéma créé le : 20/04/2026
- Site web : https://github.com/cnigfr/standard-accessibilite-espace-naturel
- Version : v0.1.0
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"N/A"`
- Clé primaire : `id_service`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id_service](#identifiant-unique-du-service-propriete-id-service) | chaîne de caractères  | Oui |
| [id_troncon](#identifiant-du-troncon-propriete-id-troncon) | chaîne de caractères  | Non |
| [id_arret_tc](#identifiant-de-l-arret-propriete-id-arret-tc) | chaîne de caractères  | Non |
| [id_aire_stationnement](#identifiant-de-l-aire-de-stationnement-propriete-id-aire-stationnement) | chaîne de caractères  | Non |
| [type_service](#type-de-services-offerts-sur-le-cheminement-propriete-type-service) | liste  | Non |
| [type_local](#type-de-locaux-presents-sur-le-cheminement-propriete-type-local) | liste  | Non |
| [label_service](#labels-du-service-propriete-label-service) | liste  | Non |
| [url_local_acceslibre](#hyperlien-vers-la-fiche-acceslibre-du-local-en-tant-que-erp-propriete-url-local-acceslibre) | chaîne de caractères  | Non |
| [aide_psh](#type-de-materiel-ou-d'equipement-d'aide-aux-psh-propriete-aide-psh) | liste  | Non |
| [commentaire](#commentaire-libre-sur-le-service-propose-propriete-commentaire) | chaîne de caractères  | Non |
| [url_media](#hyperliens-vers-des-photos-du-service-propriete-url-media) | liste  | Non |
| [geom_pct](#geometrie-ponctuelle-du-service-propriete-geom-pct) | GéoJSON  | Oui |

#### identifiant unique du service - Propriété `id_service`

> *Description : identifiant unique du service*<br/>*Exemple : 44003:SER:0032:LOC*
- Valeur obligatoire
- Type : chaîne de caractères

#### identifiant du troncon - Propriété `id_troncon`

> *Description : identifiant du tronçon sur lequel est positionné le service*<br/>*Exemple : 44003:TRC:00089:LOC*
- Valeur optionnelle
- Type : chaîne de caractères

#### identifiant de l'arrêt - Propriété `id_arret_tc`

> *Description : identifiant de l'arrêt de transport en commun sur lequel est positionné le service*<br/>*Exemple : 44003:ATC:0022:LOC*
- Valeur optionnelle
- Type : chaîne de caractères

#### identifiant de l'aire de stationnement - Propriété `id_aire_stationnement`

> *Description : identifiant de l'aire de stationnement sur laquelle est positionné le service*<br/>*Exemple : 44003:AST:0007:LOC*
- Valeur optionnelle
- Type : chaîne de caractères

#### type de services offerts sur le cheminement - Propriété `type_service`

> *Description : type de services offerts sur le cheminement*<br/>*Exemple : ['point d’eau', 'toilettes PMR']*
- Valeur optionnelle
- Type : liste

#### type de locaux présents sur le cheminement - Propriété `type_local`

> *Description : type de locaux présents sur le cheminement*<br/>*Exemple : ['aucun']*
- Valeur optionnelle
- Type : liste

#### labels du service - Propriété `label_service`

> *Description : éventuels labels attribués au service*<br/>*Exemple : ['Tourisme & Handicap']*
- Valeur optionnelle
- Type : liste

#### hyperlien vers la fiche Acceslibre du local en tant que ERP - Propriété `url_local_acceslibre`

> *Description : hyperlien vers la fiche Acceslibre du local en tant que ERP*<br/>*Exemple : https://acceslibre.beta.gouv.fr/app/44-saint-nazaire/a/toilettes-publiques/erp/toilettes-publiques-courance/*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(https?)://[^\s/$.?#].[^\s]*$`

#### type de matériel ou d’équipement d’aide aux PSH - Propriété `aide_psh`

> *Description : type de matériel ou d’équipement d’aide aux PSH*<br/>*Exemple : ["aides à la mise à l'eau", 'joëlette']*
- Valeur optionnelle
- Type : liste

#### commentaire libre sur le service proposé - Propriété `commentaire`

> *Description : commentaire libre sur le service proposé*<br/>*Exemple : 3 tiralo et 5 joëlettes disponibles dans la période estivale*
- Valeur optionnelle
- Type : chaîne de caractères

#### hyperliens vers des photos du service - Propriété `url_media`

> *Description : hyperliens vers des photos représentatives du service*<br/>*Exemple : ['https://panoramax.fr/?&focus=pic&map=17/46.347392/2.593132&xyz=226.00/0.00/30']*
- Valeur optionnelle
- Type : liste

#### géométrie ponctuelle du service - Propriété `geom_pct`

> *Description : géométrie ponctuelle du service en projection Lambert93 au format GeoJSON*<br/>*Exemple : {'type': 'Point', 'coordinates': [656589.7, 6425785.32]}*
- Valeur obligatoire
- Type : GéoJSON
