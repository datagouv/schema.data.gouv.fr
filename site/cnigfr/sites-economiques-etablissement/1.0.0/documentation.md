<MenuSchema />

<MenuSchema />

## sites-economiques-etablissement

Classe ETABLISSEMENT du standard CNIG Sites Economiques

Spécification du fichier d'échange conforme au standard CNIG Sites Economiques pour la classe ETABLISSEMENT : établissement économique

- Schéma créé le : 22/08/2023
- Site web : https://github.com/cnigfr/schema-sites-economiques
- Version : v1.0.0
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"N/A"`
- Clé primaire : `SIRET`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [SIRET](#code-siret-propriete-siret) | chaîne de caractères  | Oui |
| [SIREN](#code-siren-propriete-siren) | chaîne de caractères  | Oui |
| [terr_id](#liste-des-terrains-propriete-terr-id) | chaîne de caractères  | Oui |
| [ban-id](#reference-a-la-base-adresse-propriete-ban-id) | chaîne de caractères  | Non |
| [bat-id](#reference-au-rnb-propriete-bat-id) | chaîne de caractères  | Non |
| [etab_adresse](#adresse-propriete-etab-adresse) | chaîne de caractères  | Non |
| [etab_raison_sociale](#rasion-sociale-propriete-etab-raison-sociale) | chaîne de caractères  | Oui |
| [etab_nat_juridique](#nature-juridique-propriete-etab-nat-juridique) | chaîne de caractères  | Oui |
| [etab_nom](#nom-propriete-etab-nom) | chaîne de caractères  | Oui |
| [epci_nom](#nom-de-l'epci-propriete-epci-nom) | chaîne de caractères  | Oui |
| [epci_siren](#code-siren-de-l'epci-propriete-epci-siren) | chaîne de caractères  | Oui |
| [comm_nom](#nom-de-la-commune-propriete-comm-nom) | chaîne de caractères  | Oui |
| [comm_insee](#code-insee-de-la-commune-propriete-comm-insee) | chaîne de caractères  | Oui |
| [etab_siege](#qualite-de-siege-propriete-etab-siege) | chaîne de caractères  | Non |
| [etab_creation_date](#date-de-creation-propriete-etab-creation-date) | date (format `%Y-%m-%d`) | Oui |
| [etab_identif_date](#date-d'identification-propriete-etab-identif-date) | date (format `%Y-%m-%d`) | Oui |
| [etab_actu_date](#date-d'actualisation-propriete-etab-actu-date) | date (format `%Y-%m-%d`) | Oui |
| [etab_actif](#qualite-d'activite-propriete-etab-actif) | chaîne de caractères  | Non |
| [etab_fermeture_date](#date-de-fermeture-propriete-etab-fermeture-date) | date (format `%Y-%m-%d`) | Non |
| [etab_description](#description-propriete-etab-description) | chaîne de caractères  | Non |
| [etab_activite_code](#code-activite-principale-propriete-etab-activite-code) | chaîne de caractères  | Oui |
| [etab_activite_libelle](#libelle-activite-principale-propriete-etab-activite-libelle) | chaîne de caractères  | Oui |
| [etab_effectif_code](#code-tranche-effectif-propriete-etab-effectif-code) | chaîne de caractères  | Oui |
| [etab_effectif_libelle](#libelle-tranche-effectif-propriete-etab-effectif-libelle) | chaîne de caractères  | Oui |
| [etab_effectif_annee](#millesime-tranche-effectif-propriete-etab-effectif-annee) | date (format `%Y`) | Oui |
| [etab_source_info](#source-information-propriete-etab-source-info) | chaîne de caractères  | Oui |
| [geocodage_qualite](#qualite-de-localisation-propriete-geocodage-qualite) | chaîne de caractères  | Oui |
| [etab_geompoint](#geometrie-propriete-etab-geompoint) | GéoJSON  | Oui |
| [etab_contact_mail](#adresse-mail-propriete-etab-contact-mail) | chaîne de caractères (format `email`) | Non |
| [etab_contact_tel](#contact-telephonique-propriete-etab-contact-tel) | chaîne de caractères  | Non |

#### code SIRET - Propriété `SIRET`

> *Description : code SIRET de l'établissement*<br/>*Exemple : 34749951900010*
- Valeur obligatoire
- Type : chaîne de caractères

#### code SIREN - Propriété `SIREN`

> *Description : code SIREN de l'entreprise*<br/>*Exemple : 347499519*
- Valeur obligatoire
- Type : chaîne de caractères

#### liste des terrains - Propriété `terr_id`

> *Description : Liste des identifiants de TERRAIN-ECO où se situe l'établissement, séparés par des pipes '|'.*<br/>*Exemple : 44003_TERRAIN-ECO_ 000131|44003_TERRAIN-ECO_00115*
- Valeur obligatoire
- Type : chaîne de caractères

#### référence à la base adresse - Propriété `ban-id`

> *Description : référence à l'adresse de l'établissement dans la base adresse nationale*<br/>*Exemple : 80024_0030_00070*
- Valeur optionnelle
- Type : chaîne de caractères

#### référence au RNB - Propriété `bat-id`

> *Description : Liste des identifiants de bâtiments dans le référentiel national des bâtiments, séparés par des pipes '|'. Le bâtiment principal est listé en premier.*<br/>*Exemple : LB4A-145Q-EXJ3|BAN9-6QE3-V62D|EM6H-F57J-7UDG*
- Valeur optionnelle
- Type : chaîne de caractères

#### adresse - Propriété `etab_adresse`

> *Description : adresse de l'établissement*<br/>*Exemple : Rte de Villers-Bocage, 80470 Saint-Sauveur*
- Valeur optionnelle
- Type : chaîne de caractères

#### rasion sociale - Propriété `etab_raison_sociale`

> *Description : raison sociale (nom juridique) de l'entreprise*<br/>*Exemple : Picardie service véhicules industriels*
- Valeur obligatoire
- Type : chaîne de caractères

#### nature juridique - Propriété `etab_nat_juridique`

> *Description : code de la catégorie juridique de l'entreprise en se référant au 3ème niveau
De la nomenclature des catégories juridiques de l'INSEE.*<br/>*Exemple : 5710*
- Valeur obligatoire
- Type : chaîne de caractères

#### nom - Propriété `etab_nom`

> *Description : nom ou appellation usuelle ou sigle de l'établissement*<br/>*Exemple : MAN TRUCK*
- Valeur obligatoire
- Type : chaîne de caractères

#### nom de l’EPCI - Propriété `epci_nom`

> *Description : nom de l'EPCI où se situe l'établissement*<br/>*Exemple : Communauté de Communes Nièvre et Somme*
- Valeur obligatoire
- Type : chaîne de caractères

#### code SIREN de l’EPCI - Propriété `epci_siren`

> *Description : code SIREN de l'EPCI où se situe l'établissement*<br/>*Exemple : 200071223*
- Valeur obligatoire
- Type : chaîne de caractères

#### nom de la commune - Propriété `comm_nom`

> *Description : nom de la commune où se situe l'établissement*<br/>*Exemple : Saint-Sauveur*
- Valeur obligatoire
- Type : chaîne de caractères

#### code INSEE de la commune - Propriété `comm_insee`

> *Description : code INSEE de la commune où se situe l'établissement*<br/>*Exemple : 80718*
- Valeur obligatoire
- Type : chaîne de caractères

#### qualité de siège - Propriété `etab_siege`

> *Description : qualité de siège de l'établissement ('oui' ou 'non')*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### date de création - Propriété `etab_creation_date`

> *Description : date de création de l'établissement*<br/>*Exemple : 2015-06-04*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### date d’identification - Propriété `etab_identif_date`

> *Description : date d'identification de l'établissement*<br/>*Exemple : 2016-03-26*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### date d’actualisation - Propriété `etab_actu_date`

> *Description : date de dernière actualisation des informations*<br/>*Exemple : 2023-04-30*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### qualité d’activité - Propriété `etab_actif`

> *Description : établissement en activité ('oui' ou 'non')*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### date de fermeture - Propriété `etab_fermeture_date`

> *Description : date ou année de fermeture de l'établissement*<br/>*Exemple : 2025-02-08*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### description - Propriété `etab_description`

> *Description : commentaire libre avec des informations descriptives de l'établissement*<br/>*Exemple : Vente de véhicules neufs poids lourds et utilitaires de marque MAN*
- Valeur optionnelle
- Type : chaîne de caractères

#### code activité principale - Propriété `etab_activite_code`

> *Description : code NAF de l'activité principale de l'établissemen*<br/>*Exemple : 4520B*
- Valeur obligatoire
- Type : chaîne de caractères

#### libelle activité principale - Propriété `etab_activite_libelle`

> *Description : libellé de l'activité principale de l'établissement*<br/>*Exemple : Entretien et réparation d'autres véhicules automobiles*
- Valeur obligatoire
- Type : chaîne de caractères

#### code tranche effectif - Propriété `etab_effectif_code`

> *Description : code INSEE de la tranche d'effectif salarié de l'établissement*<br/>*Exemple : 3*
- Valeur obligatoire
- Type : chaîne de caractères

#### libellé tranche effectif - Propriété `etab_effectif_libelle`

> *Description : libellé de la tranche d'effectif salarié de l'établissement, fournis par la base SIRENE de l'INSEE*<br/>*Exemple : 6 à 9 salariés*
- Valeur obligatoire
- Type : chaîne de caractères

#### millésime tranche effectif - Propriété `etab_effectif_annee`

> *Description : millésime de la tranche d'effectif salarié de l'établissement*<br/>*Exemple : 2022*
- Valeur obligatoire
- Type : date (format `%Y`)

#### source information - Propriété `etab_source_info`

> *Description : indication de la (des) source(s) d'information sur l'établissement*<br/>*Exemple : CCI de Amiens*
- Valeur obligatoire
- Type : chaîne de caractères

#### qualité de localisation - Propriété `geocodage_qualite`

> *Description : qualité de positionnement de l'établissement*<br/>*Exemple : Localisation au bâtiment*
- Valeur obligatoire
- Type : chaîne de caractères

#### géométrie - Propriété `etab_geompoint`

> *Description : multi localisations ponctuelles de l'établissement au format geojson (https://specs.frictionlessdata.io//table-schema/#geojson)*<br/>*Exemple : {'type': 'MultiPoint', 'coordinates': [[2.3626, 51.0934], [4.1999, 50.723]]}*
- Valeur obligatoire
- Type : GéoJSON

#### adresse mail - Propriété `etab_contact_mail`

> *Description : mail de contact de l'établissement*<br/>*Exemple : mantruck-contact@gmail.com*
- Valeur optionnelle
- Type : chaîne de caractères (format `email`)

#### contact téléphonique - Propriété `etab_contact_tel`

> *Description : numéro du téléphone de contact de l'établissement*<br/>*Exemple : 03 89 45 16 78*
- Valeur optionnelle
- Type : chaîne de caractères
