<MenuSchema />

<MenuSchema />

## schema-comptage-mobilites-site

Comptage des mobilités (Site)

Spécification du fichier d'échange relatif aux comptages des mobilités.

- Schéma créé le : 06/05/2021
- Site web : https://github.com/etalab/schema-comptage-mobilites
- Version : 0.2.4
- Clé primaire : `site_id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [site_id](#propriete-site-id) | chaîne de caractères  | Oui |
| [parent_site_id](#propriete-parent-site-id) | chaîne de caractères  | Non |
| [site_name](#propriete-site-name) | chaîne de caractères  | Oui |
| [fr_insee_code](#propriete-fr-insee-code) | chaîne de caractères  | Non |
| [xlong](#propriete-xlong) | nombre réel  | Oui |
| [ylat](#propriete-ylat) | nombre réel  | Oui |
| [external_ids](#propriete-external-ids) | chaîne de caractères  | Non |
| [infrastructure_type](#propriete-infrastructure-type) | chaîne de caractères  | Non |

#### Propriété `site_id`

> *Description : Identifiant unique du site (dans le référentiel de la collectivité) où est installé le compteur dans les bases de données de la collectivité territoriale productrice de données. Cette valeur doit être utilisée dans le champ `site_id`du fichier `channel` pour faire le lien. *<br/>*Exemple : C01-Baix*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `parent_site_id`

> *Description : Identifiant optionnel du site parent pour regroupement géographique.*<br/>*Exemple : C-Baix*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `site_name`

> *Description : Nom du site*<br/>*Exemple : Baix*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `fr_insee_code`

> *Description : Code INSEE de la collectivité où se trouve le site de comptage*<br/>*Exemple : 07022*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### Propriété `xlong`

> *Description : La longitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation du centre de l'emplacement du compteur exprimée dans le système de coordonnées WGS84.*<br/>*Exemple : 1.452323*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -180 et 180

#### Propriété `ylat`

> *Description : La latitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation de centre de l'emplacement du compteur exprimée dans le système de coordonnées WGS84.*<br/>*Exemple : 46.59698*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -90 et 90

#### Propriété `external_ids`

> *Description : Identifiant(s) d'infrastructures de la collectivité dans une base de données publiée en opendata. Chaque identifiant est séparé par une virgule. Exemple : identifiants des aménagements cyclables dans la base nationale des aménagements cyclables.*<br/>*Exemple : 07022-CM-001*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `infrastructure_type`

> *Description : Type d'infrastructure où se situe le site de comptage. Les valeurs sont énumérées en anglais et traduites en français.*<br/>*Exemple : GREENWAY*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `CYCLE TRACK`
    - `CYCLE LANE`
    - `CONTRAFLOW TRACK`
    - `CONTRAFLOW LANE`
    - `CONTRAFLOW CYCLING NOT MATERIALIZED`
    - `GREENWAY`
    - `BIKE ROAD`
    - `SHARED BUSWAY`
    - `RAMP`
    - `GUTTER`
    - `MIXED PEDESTRIAN/BICYCLE DEVELOPMENT NOT INCLUDING THE GREENWAY`
    - `ROAD WITH BANALIZED CENTRAL TRACK`
    - `COATED SHOULDER OUTSIDE THE RBCT`
    - `OTHER SPECIFIC SITE`
    - `OTHER SHARED USE ROUTE`
    - `HIGHWAY`
    - `EUROPEAN ROAD`
    - `NATIONAL ROAD`
    - `DEPARTEMENTAL ROAD`
    - `METROPOLITAN ROAD`
    - `MUNICIPAL ROAD`
    - `FOOTPATH`
    - `DEAD END`
    - `FOREST ROADS`
    - `SIDE ROADS`
    - `TRUNK TRACK`
    - `PRIVATE ROAD`
    - `OTHER`
