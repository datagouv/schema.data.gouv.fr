<MenuSchema />

## troncon

Classe TRONCON du standard CNIG Accessibilité du Cheminement en Espace Naturel (ACEN)

Spécification du fichier d'échange conforme au standard CNIG Accessibilité du Cheminement en Espace Naturel pour la classe TRONCON

- Schéma créé le : 20/04/2026
- Site web : https://github.com/cnigfr/standard-accessibilite-espace-naturel
- Version : v0.1.0
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"N/A"`
- Clé primaire : `id_troncon`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id_troncon](#identifiant-du-troncon-propriete-id-troncon) | chaîne de caractères  | Oui |
| [id_cheminement](#identifiant-du-cheminement-propriete-id-cheminement) | chaîne de caractères  | Oui |
| [id_osm](#identifiant-osm-propriete-id-osm) | chaîne de caractères  | Non |
| [type_troncon](#type-de-troncon-propriete-type-troncon) | chaîne de caractères  | Oui |
| [largeur_min](#largeur-minimale-du-troncon-propriete-largeur-min) | nombre réel  | Oui |
| [pente_max](#pente-du-terrain-la-plus-defavorable-propriete-pente-max) | chaîne de caractères  | Oui |
| [devers_max](#devers-le-plus-defavorable-propriete-devers-max) | chaîne de caractères  | Oui |
| [type_sol](#type-de-sol-majoritaire-propriete-type-sol) | chaîne de caractères  | Oui |
| [etat_sol](#etat-du-sol-propriete-etat-sol) | chaîne de caractères  | Oui |
| [reperabilite_troncon](#reperabilite-du-troncon-dans-son-environnement-propriete-reperabilite-troncon) | chaîne de caractères  | Oui |
| [type_securite](#presence-d-elements-securisants-les-espaces-dangereux-propriete-type-securite) | liste  | Non |
| [url_media](#hyperliens-vers-des-photos-du-troncon-propriete-url-media) | liste  | Non |
| [geom_lin](#geometrie-lineaire-du-troncon-propriete-geom-lin) | GéoJSON  | Oui |

#### identifiant du tronçon - Propriété `id_troncon`

> *Description : identifiant unique du tronçon*<br/>*Exemple : 44003:TRC:00089:LOC*
- Valeur obligatoire
- Type : chaîne de caractères

#### identifiant du cheminement - Propriété `id_cheminement`

> *Description : identifiant du cheminement auquel appartient le tronçon*<br/>*Exemple : 44003:CHE:00654:LOC*
- Valeur obligatoire
- Type : chaîne de caractères

#### identifiant OSM - Propriété `id_osm`

> *Description : identifiant osm de l’objet correspondant*
- Valeur optionnelle
- Type : chaîne de caractères

#### type de tronçon - Propriété `type_troncon`

> *Description : type de tronçon*<br/>*Exemple : sentier*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `sentier`
    - `passage à gué`
    - `escalier`
    - `espace confiné`
    - `autre`
    - `NC`
    - `sans objet`

#### largeur minimale du tronçon - Propriété `largeur_min`

> *Description : largeur minimale du tronçon libre de tout obstacle (en mètre)*<br/>*Exemple : 0.7*
- Valeur obligatoire
- Type : nombre réel

#### pente du terrain la plus défavorable - Propriété `pente_max`

> *Description : pente du terrain la plus défavorable dans le sens de circulation*<br/>*Exemple : moyenne*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `nulle`
    - `minimale`
    - `faible`
    - `moyenne`
    - `forte`

#### dévers le plus défavorable - Propriété `devers_max`

> *Description : inclinaison du terrain la plus défavorable, perpendiculaire au sens de circulation*<br/>*Exemple : faible*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `minimal`
    - `faible`
    - `moyen`
    - `fort`
    - `NC`
    - `sans objet`

#### type de sol majoritaire - Propriété `type_sol`

> *Description : type de sol majoritaire du tronçon*<br/>*Exemple : sol naturel irrégulier*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `béton`
    - `enrobé / bitume`
    - `stabilisé`
    - `pavage`
    - `dallage`
    - `platelage`
    - `sol naturel friable et poussiéreux`
    - `sol naturel compact`
    - `sol naturel irrégulier`
    - `pelouse entretenue`
    - `pelouse non entretenue`
    - `prairie`
    - `gravier maintenu`
    - `gravier fin et compact`
    - `gravier libre`
    - `gros gravier`
    - `sable stabilisé`
    - `sable meuble`
    - `sable non meuble (ferme)`
    - `dispositifs amovibles`
    - `autre`
    - `NC`
    - `sans objet`

#### état du sol - Propriété `etat_sol`

> *Description : état du sol*<br/>*Exemple : roulant*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `roulant`
    - `ferme`
    - `meuble`
    - `glissant`
    - `réfléchissant`
    - `boueux`
    - `NC`
    - `sans objet`

#### repérabilité du tronçon dans son environnement - Propriété `reperabilite_troncon`

> *Description : repérabilité du tronçon dans son environnement grâce aux repères tactiles, visuels et autres*<br/>*Exemple : revêtement différencié sur au moins un côté*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `revêtement différencié sur au moins un côté`
    - `bordure ou muret`
    - `fil d'Ariane et repérable à la main sur au moins un côté `
    - `fil d'Ariane et repérable à la canne sur au moins un côté`
    - `bande de guidage`
    - `aucun`
    - `NC`
    - `sans objet`

#### présence d'éléments sécurisants les espaces dangereux - Propriété `type_securite`

> *Description : présence d'éléments sécurisants les espaces dangereux sur le tronçon (garde-corps, rambardes…)*<br/>*Exemple : ['garde-corps', 'rambarde']*
- Valeur optionnelle
- Type : liste

#### hyperliens vers des photos du tronçon - Propriété `url_media`

> *Description : hyperliens vers des photos représentatives du tronçon*<br/>*Exemple : ['']*
- Valeur optionnelle
- Type : liste

#### géométrie linéaire du tronçon - Propriété `geom_lin`

> *Description : géométrie linéaire du tronçon (2D ou facultativement 3D) en projection Lambert93 au format GeoJSON*<br/>*Exemple : {"type": "LineString", "coordinates": [ [656589.70, 6425785.32], [656655.02, 6425866.31], [656663.55, 6425874.43] ] }*
- Valeur obligatoire
- Type : GéoJSON
