<MenuSchema />

## sites-economiques-terrain-eco

Classe TERRAIN-ECO du standard CNIG Sites Economiques

Spécification du fichier d'échange conforme au standard CNIG Sites Economiques pour la classe TERRAIN-ECO : terrain économique

- Schéma créé le : 22/08/2023
- Site web : https://github.com/cnigfr/schema-sites-economiques
- Version : v1.0.0
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"N/A"`
- Clé primaire : `terr_id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [terr_id](#identifiant-du-terrain-propriete-terr-id) | chaîne de caractères  | Oui |
| [site_id](#identifiant-du-site-propriete-site-id) | chaîne de caractères  | Oui |
| [terr_refcad](#liste-des-parcelles-propriete-terr-refcad) | chaîne de caractères  | Non |
| [terr_surf_brute](#superficie-brute-propriete-terr-surf-brute) | nombre réel  | Oui |
| [terr_utile](#superficie-a-prendre-en-compte-propriete-terr-utile) | chaîne de caractères  | Non |
| [terr_identif_date](#date-d'identification-propriete-terr-identif-date) | date (format `%Y-%m-%d`) | Oui |
| [terr_actu_date](#date-d'actualisation-propriete-terr-actu-date) | date (format `%Y-%m-%d`) | Oui |
| [terr_maitrise_fonc](#maitrise-fonciere-propriete-terr-maitrise-fonc) | chaîne de caractères  | Oui |
| [terr_stade_amngt](#stade-d'amenagement-propriete-terr-stade-amngt) | chaîne de caractères  | Oui |
| [terr_stade_comm](#stade-de-commercialisation-propriete-terr-stade-comm) | chaîne de caractères  | Oui |
| [terr_etat_occup](#etat-d-occupation-propriete-terr-etat-occup) | chaîne de caractères  | Oui |
| [terr_usage](#usage-du-terrain-propriete-terr-usage) | chaîne de caractères  | Oui |
| [terr_geomsurf](#geometrie-propriete-terr-geomsurf) | GéoJSON  | Oui |
| [terr_cle_en_main](#terrain-cle-en-main-propriete-terr-cle-en-main) | chaîne de caractères  | Non |
| [terr_acquereur](#nom-de-l-acquereur-propriete-terr-acquereur) | chaîne de caractères  | Non |
| [terr_cession_date](#date-de-la-cession-propriete-terr-cession-date) | date (format `%Y-%m-%d`) | Non |
| [terr_vente_montant](#montant-de-la-vente-propriete-terr-vente-montant) | nombre réel  | Non |
| [terr_m2_prix](#prix-au-m2-propriete-terr-m2-prix) | nombre réel  | Non |

#### identifiant du terrain - Propriété `terr_id`

> *Description : identifiant du terrain à vocation économique*<br/>*Exemple : 80024_TERRAIN-ECO_00131*
- Valeur obligatoire
- Type : chaîne de caractères

#### identifiant du site - Propriété `site_id`

> *Description : identifiant du site où se situe le terrain économique*<br/>*Exemple : 80024_SITE-ECO_00001*
- Valeur obligatoire
- Type : chaîne de caractères

#### liste des parcelles - Propriété `terr_refcad`

> *Description : liste des identifiants de parcelles cadastrales*<br/>*Exemple : 80024000ZO0030|80024000ZO0034|80024000ZO0035*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(\d{8}[0-9A-Z]{2}\d{4}|)\1+\d{8}[0-9A-Z]{2}\d{4})+$`

#### superficie brute - Propriété `terr_surf_brute`

> *Description : superficie brute du terrain économique en hectare*<br/>*Exemple : 9.9*
- Valeur obligatoire
- Type : nombre réel

#### superficie à prendre en compte - Propriété `terr_utile`

> *Description : superficie à prendre en compte ('oui' ou 'non') dans le calcul de la surface utile du site*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### date d’identification - Propriété `terr_identif_date`

> *Description : date d'identification du terrain économique. Exemple : 2016-03-26*<br/>*Exemple : 2023-08-29*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### date d’actualisation - Propriété `terr_actu_date`

> *Description : date de dernière actu. des informations du terrain éco. Ex: 2023-04-30*<br/>*Exemple : 2023-08-29*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### maîtrise foncière - Propriété `terr_maitrise_fonc`

> *Description : maîtrise foncière majoritaire du terrain économique*<br/>*Exemple : structure intercommunale*
- Valeur obligatoire
- Type : chaîne de caractères

#### stade d’aménagement - Propriété `terr_stade_amngt`

> *Description : stade d’aménagement du terrain économique*<br/>*Exemple : viabilisé et aménagé*
- Valeur obligatoire
- Type : chaîne de caractères

#### stade de commercialisation - Propriété `terr_stade_comm`

> *Description : stade de commercialisation du terrain économique*<br/>*Exemple : vendu, commercialisation achevée*
- Valeur obligatoire
- Type : chaîne de caractères

#### état d'occupation - Propriété `terr_etat_occup`

> *Description : état d'occupation du terrain économique*<br/>*Exemple : occupé*
- Valeur obligatoire
- Type : chaîne de caractères

#### usage du terrain - Propriété `terr_usage`

> *Description : usage du terrain économique*<br/>*Exemple : bâti productif*
- Valeur obligatoire
- Type : chaîne de caractères

#### géométrie - Propriété `terr_geomsurf`

> *Description : géométrie surfacique du terrain économique au format geojson (https://specs.frictionlessdata.io//table-schema/#geojson)*<br/>*Exemple : {'type': 'Polygon', 'coordinates': [[[30.0, 10.0], [40.0, 40.0], [20.0, 40.0], [10.0, 20.0], [30.0, 10.0]]]}*
- Valeur obligatoire
- Type : GéoJSON

#### terrain clé en main - Propriété `terr_cle_en_main`

> *Description : terrain purgé de tout recours et directement prêt à l'implantation d'activité*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### nom de l'acquéreur - Propriété `terr_acquereur`

> *Description : nom de l'acquéreur du terrain à vocation économique*<br/>*Exemple : SA Lactalys*
- Valeur optionnelle
- Type : chaîne de caractères

#### date de la cession - Propriété `terr_cession_date`

> *Description : date de la cession*<br/>*Exemple : 2021-04-22*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### montant de la vente - Propriété `terr_vente_montant`

> *Description : montant de la vente*<br/>*Exemple : 530000*
- Valeur optionnelle
- Type : nombre réel

#### prix au m² - Propriété `terr_m2_prix`

> *Description : prix au m²*<br/>*Exemple : 5.35*
- Valeur optionnelle
- Type : nombre réel
