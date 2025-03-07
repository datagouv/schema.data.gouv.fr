<MenuSchema />

## secteur

Classe SECTEUR du standard CNIG Opérations d'aménagement

Spécification du fichier d'échange conforme au standard CNIG Opérations d'aménagement pour la classe SECTEUR

- Schéma créé le : 24/05/2024
- Site web : https://github.com/cnigfr/schema-operations-amenagement
- Version : v1.0.0
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"N/A"`
- Clé primaire : `secteur_id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [secteur_id](#secteur-d'amenagement-propriete-secteur-id) | chaîne de caractères  | Oui |
| [opam_id](#operation-d'amenagement-propriete-opam-id) | chaîne de caractères  | Oui |
| [sect_nom](#nom-du-secteur-propriete-sect-nom) | chaîne de caractères  | Oui |
| [sect_description](#description-du-secteur-propriete-sect-description) | chaîne de caractères  | Oui |
| [sect_url_plan_masse](#url-du-plan-masse-propriete-sect-url-plan-masse) | chaîne de caractères  | Non |
| [date_prev_realisation](#date-previsionnelle-de-realisation-propriete-date-prev-realisation) | date (format `%Y-%m-%d`) | Non |
| [etat_avancement](#etat-d'avancement-propriete-etat-avancement) | chaîne de caractères  | Oui |
| [sect_identif_date](#date-des-premieres-donnees-propriete-sect-identif-date) | date (format `%Y-%m-%d`) | Oui |
| [sect_actu_date](#date-de-derniere-actualisation-propriete-sect-actu-date) | date (format `%Y-%m-%d`) | Oui |
| [source_producteur](#nom-du-producteur-de-la-donnee-propriete-source-producteur) | chaîne de caractères  | Oui |
| [sect_geomsurf](#geometrie-propriete-sect-geomsurf) | GéoJSON  | Oui |

#### secteur d’aménagement - Propriété `secteur_id`

> *Description : identifiant du secteur d’aménagement*<br/>*Exemple : 78418_SECTEUR_0001*
- Valeur obligatoire
- Type : chaîne de caractères

#### opération d’aménagement - Propriété `opam_id`

> *Description : identifiant de l’opération d’aménagement à laquelle appartient le secteur d’aménagement*<br/>*Exemple : 78418_OPERATION-AMENAGEMENT_0053*
- Valeur obligatoire
- Type : chaîne de caractères

#### nom du secteur - Propriété `sect_nom`

> *Description : nom du secteur d’aménagement*<br/>*Exemple : Secteur sud de la ZAC des Terres Ocres*
- Valeur obligatoire
- Type : chaîne de caractères

#### description du secteur - Propriété `sect_description`

> *Description : court commentaire de description du secteur*<br/>*Exemple : Secteur sud de la ZAC des Terres Ocres mixte habitat et activités*
- Valeur obligatoire
- Type : chaîne de caractères

#### URL du plan masse - Propriété `sect_url_plan_masse`

> *Description : URL du plan masse du secteur*<br/>*Exemple : https://terres-ocres/info/plan-masse.fr/secteur_sud.html*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(https?)://[^\s/$.?#].[^\s]*$`

#### date prévisionnelle de réalisation - Propriété `date_prev_realisation`

> *Description : date prévisionnelle de réalisation*<br/>*Exemple : 2030-06-01*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### état d’avancement - Propriété `etat_avancement`

> *Description : état d’avancement du secteur*<br/>*Exemple : en cours*
- Valeur obligatoire
- Type : chaîne de caractères

#### date des premières données - Propriété `sect_identif_date`

> *Description : date des premières données sur le secteur d’aménagement*<br/>*Exemple : 2023-03-15*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### date de dernière actualisation - Propriété `sect_actu_date`

> *Description : date de dernière actualisation des données sur le secteur d’aménagement*<br/>*Exemple : 2024-04-14*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### nom du producteur de la donnée - Propriété `source_producteur`

> *Description : nom du producteur de la donnée d’identification ou d’actualisation*<br/>*Exemple : Direction des autorisations d’urbanisme*
- Valeur obligatoire
- Type : chaîne de caractères

#### géométrie - Propriété `sect_geomsurf`

> *Description : multi géométries surfaciques du périmètre du secteur d’aménagement au format geoJSON*<br/>*Exemple : {'type': 'Polygon', 'coordinates': [[[656589.7, 6425785.32], [656655.02, 6425866.31], [656663.55, 6425874.43], [656589.707, 6425785.32]]]}*
- Valeur obligatoire
- Type : GéoJSON
