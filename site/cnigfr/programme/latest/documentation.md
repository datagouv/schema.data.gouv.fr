<MenuSchema />

## programme

Classe PROGRAMME du standard CNIG Opérations d'aménagement

Spécification du fichier d'échange conforme au standard CNIG Opérations d'aménagement pour la classe PROGRAMME

- Schéma créé le : 24/05/2024
- Site web : https://github.com/cnigfr/schema-operations-amenagement
- Version : v1.0.0
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"N/A"`, `"NC"`
- Clé primaire : `programme_id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [programme_id](#identifiant-du-programme-propriete-programme-id) | chaîne de caractères  | Oui |
| [secteur_id](#identifiant-du-secteur-d'amenagement-propriete-secteur-id) | chaîne de caractères  | Oui |
| [opam_id](#identifiant-de-l'operation-d'amenagement-propriete-opam-id) | chaîne de caractères  | Oui |
| [prog_nom](#nom-du-programme-propriete-prog-nom) | chaîne de caractères  | Oui |
| [prog_description](#court-commentaire-de-description-propriete-prog-description) | chaîne de caractères  | Oui |
| [vocation_dominante](#vocation-dominante-propriete-vocation-dominante) | chaîne de caractères  | Oui |
| [prog_nature](#nature-majoritaire-propriete-prog-nature) | chaîne de caractères  | Oui |
| [prog_ban_id](#reference-a-l-adresse-principale-propriete-prog-ban-id) | chaîne de caractères  | Non |
| [prog_reference_ads](#reference-du-dossier-dans-le-systeme-ads-propriete-prog-reference-ads) | chaîne de caractères  | Non |
| [prog_url_medias](#url-des-medias-photo,-vue-d'artiste,-video-propriete-prog-url-medias) | chaîne de caractères  | Non |
| [prog_url_plan_masse](#url-du-plan-masse-propriete-prog-url-plan-masse) | chaîne de caractères  | Non |
| [prog_nom_moa](#nom-du-(des)-maitre(s)-d-ouvrage-propriete-prog-nom-moa) | chaîne de caractères  | Oui |
| [prog_nom_moe](#nom-du-(des)-maitre(s)-d'oeuvre-propriete-prog-nom-moe) | chaîne de caractères  | Oui |
| [surf_totale_prog](#surface-totale-propriete-surf-totale-prog) | nombre entier  | Oui |
| [surf_logt_total](#surface-totale-des-logements-propriete-surf-logt-total) | nombre entier  | Non |
| [surf_logt_individuel](#surface-des-logements-individuels-propriete-surf-logt-individuel) | nombre entier  | Non |
| [surf_logt_collectif](#surface-des-logements-collectifs-propriete-surf-logt-collectif) | nombre entier  | Non |
| [surf_logt_locatif_libre](#surface-des-logements-en-locatif-libre-propriete-surf-logt-locatif-libre) | nombre entier  | Non |
| [surf_logt_access_libre](#surface-des-logements-en-accession-libre-propriete-surf-logt-access-libre) | nombre entier  | Non |
| [surf_logt_locatif_aide](#surface-des-logements-en-locatif-aide-propriete-surf-logt-locatif-aide) | nombre entier  | Non |
| [surf_logt_locatif_regul](#surface-des-logements-en-locatif-regule-propriete-surf-logt-locatif-regul) | nombre entier  | Non |
| [surf_logt_access_aide](#surface-des-logements-en-accession-aidee-propriete-surf-logt-access-aide) | nombre entier  | Non |
| [surf_logt_access_regul](#surface-des-logements-en-accession-regulee-propriete-surf-logt-access-regul) | nombre entier  | Non |
| [surf_act_industrie](#surface-des-activites-industrielles-propriete-surf-act-industrie) | nombre entier  | Non |
| [surf_act_logistique](#surface-des-activites-logistiques-propriete-surf-act-logistique) | nombre entier  | Non |
| [surf_act_artisanat](#surface-des-activites-artisanales-propriete-surf-act-artisanat) | nombre entier  | Non |
| [surf_act_comm_serv](#surface-des-activites-commerciales-et-services-propriete-surf-act-comm-serv) | nombre entier  | Non |
| [surf_act_bureau](#surface-des-activites-de-bureau-propriete-surf-act-bureau) | nombre entier  | Non |
| [surf_act_autres](#surface-des-autres-activites-propriete-surf-act-autres) | nombre entier  | Non |
| [surf_equipt_public](#surface-des-equipements-publics-propriete-surf-equipt-public) | nombre entier  | Non |
| [surf_esp_public](#surface-des-espaces-publics--propriete-surf-esp-public) | nombre entier  | Non |
| [surf_esp_vert_public](#surface-espaces-verts-publics-propriete-surf-esp-vert-public) | nombre entier  | Non |
| [nb_logt_total](#nombre-total-de-logements-propriete-nb-logt-total) | nombre entier  | Non |
| [nb_logt_individuel](#nombre-de-logements-individuels-propriete-nb-logt-individuel) | nombre entier  | Non |
| [nb_logt_collectif](#nombre-de-logements-collectifs-propriete-nb-logt-collectif) | nombre entier  | Non |
| [nb_logt_access_libre](#nombre-de-logements-en-accession-libre-propriete-nb-logt-access-libre) | nombre entier  | Non |
| [nb_logt_locatif_libre](#nombre-de-logements-locatifs-libres-propriete-nb-logt-locatif-libre) | nombre entier  | Non |
| [nb_logt_locatif_aide](#nombre-de-logements-locatifs-aides-propriete-nb-logt-locatif-aide) | nombre entier  | Non |
| [nb_logt_locatif_regul](#nombre-de-logements-locatifs-regules-propriete-nb-logt-locatif-regul) | nombre entier  | Non |
| [nb_logt_access_aide](#nombre-de-logements-en-accession-aidee-propriete-nb-logt-access-aide) | nombre entier  | Non |
| [nb_logt_access_regul](#nombre-de-logements-en-accession-regulee-propriete-nb-logt-access-regul) | nombre entier  | Non |
| [nb_logt_participatif](#nombre-de-logements-participatifs-propriete-nb-logt-participatif) | nombre entier  | Non |
| [nb_logt_specifique](#nombre-de-logements-specifiques-propriete-nb-logt-specifique) | nombre entier  | Non |
| [type_logt_specifique](#types-de-logements-specifiques-propriete-type-logt-specifique) | chaîne de caractères  | Non |
| [etat_avancement](#etat-d'avancement-propriete-etat-avancement) | chaîne de caractères  | Oui |
| [date_attribution_foncier](#date-d'attribution-fonciere-propriete-date-attribution-foncier) | date (format `%Y-%m-%d`) | Non |
| [date_commercialisation](#date-de-commercialisation-propriete-date-commercialisation) | date (format `%Y-%m-%d`) | Non |
| [date_obtention_pc](#date-d'obtention-du-permis-de-construire-propriete-date-obtention-pc) | date (format `%Y-%m-%d`) | Non |
| [date_livraison_prevue](#date-de-livraison-prevue-propriete-date-livraison-prevue) | date (format `%Y-%m-%d`) | Non |
| [date_livraison_effective](#date-de-livraison-effective-propriete-date-livraison-effective) | date (format `%Y-%m-%d`) | Non |
| [prog_identif_date](#date-des-premieres-donnees-propriete-prog-identif-date) | date (format `%Y-%m-%d`) | Oui |
| [prog_actu_date](#date-de-derniere-actualisation-propriete-prog-actu-date) | date  | Oui |
| [source_producteur](#nom-du-producteur-de-la-donnee-propriete-source-producteur) | chaîne de caractères  | Oui |
| [prog_geompoint](#geometrie-ponctuelle-propriete-prog-geompoint) | GéoJSON  | Oui |
| [prog_geomsurf](#geometrie-surfacique-propriete-prog-geomsurf) | GéoJSON  | Oui |

#### identifiant du programme - Propriété `programme_id`

> *Description : identifiant du programme*<br/>*Exemple : 78418_PROGRAMME_0021*
- Valeur obligatoire
- Type : chaîne de caractères

#### identifiant du secteur d’aménagement - Propriété `secteur_id`

> *Description : identifiant du secteur d’aménagement auquel appartient le programme*<br/>*Exemple : 78418_SECTEUR_0001*
- Valeur obligatoire
- Type : chaîne de caractères

#### identifiant de l’opération d’aménagement - Propriété `opam_id`

> *Description : identifiant de l’opération d’aménagement à laquelle appartient le programme*<br/>*Exemple : 78418_OPERATION-AMENAGEMENT_0053*
- Valeur obligatoire
- Type : chaîne de caractères

#### nom du programme - Propriété `prog_nom`

> *Description : nom du programme*<br/>*Exemple : Les Alteralies*
- Valeur obligatoire
- Type : chaîne de caractères

#### court commentaire de description - Propriété `prog_description`

> *Description : court commentaire de description du programme*<br/>*Exemple : Les Alteralies, 58 rue Blaise Cendrars. Logements étudiants, résidence seniors et commerces (dont le supermarché Lidl)*
- Valeur obligatoire
- Type : chaîne de caractères

#### vocation dominante - Propriété `vocation_dominante`

> *Description : vocation dominante du programme*<br/>*Exemple : habitat*
- Valeur obligatoire
- Type : chaîne de caractères

#### nature majoritaire - Propriété `prog_nature`

> *Description : nature majoritaire du programme*<br/>*Exemple : réhabilitation*
- Valeur obligatoire
- Type : chaîne de caractères

#### référence à l'adresse principale - Propriété `prog_ban_id`

> *Description : référence à l'adresse principale du programme dans la base adresse nationale, en utilisant le champ : id_ban_adresse*
- Valeur optionnelle
- Type : chaîne de caractères

#### référence du dossier dans le système ADS - Propriété `prog_reference_ads`

> *Description : référence du dossier dans le système ADS de la collectivité*<br/>*Exemple : PC 78418 52-0458*
- Valeur optionnelle
- Type : chaîne de caractères

#### URL des médias photo, vue d’artiste, vidéo - Propriété `prog_url_medias`

> *Description : URL des médias photo, vue d’artiste, vidéo du programme*<br/>*Exemple : https://terres-ocres/info/media.fr/secteur_sud/prog/les_alteralies.html*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(https?)://[^\s/$.?#].[^\s]*$`

#### URL du plan masse - Propriété `prog_url_plan_masse`

> *Description : URL du plan masse du programme*<br/>*Exemple : https://terres-ocres/info/plan-masse.fr/secteur_sud/prog/les_alteralies.html*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(https?)://[^\s/$.?#].[^\s]*$`

#### nom du (des) maître(s) d'ouvrage - Propriété `prog_nom_moa`

> *Description : nom du (des) maître(s) d'ouvrage*<br/>*Exemple : Batyvelines*
- Valeur obligatoire
- Type : chaîne de caractères

#### nom du (des) maître(s) d’œuvre - Propriété `prog_nom_moe`

> *Description : nom du (des) maître(s) d’œuvre*<br/>*Exemple : Dupont & Richard Construction et associés*
- Valeur obligatoire
- Type : chaîne de caractères

#### surface totale - Propriété `surf_totale_prog`

> *Description : surface de plancher totale du programme (m² de SdP)*<br/>*Exemple : 1600*
- Valeur obligatoire
- Type : nombre entier

#### surface totale des logements - Propriété `surf_logt_total`

> *Description : surface de plancher totale des logements (m² de SdP)*<br/>*Exemple : 2040*
- Valeur optionnelle
- Type : nombre entier

#### surface des logements individuels - Propriété `surf_logt_individuel`

> *Description : surface de plancher des logements individuels (m² de SdP)*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### surface des logements collectifs - Propriété `surf_logt_collectif`

> *Description : surface de plancher des logements collectifs (m² de SdP)*<br/>*Exemple : 2040*
- Valeur optionnelle
- Type : nombre entier

#### surface des logements en locatif libre - Propriété `surf_logt_locatif_libre`

> *Description : surface de plancher des logements en locatif libre (m² de SdP)*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### surface des logements en accession libre - Propriété `surf_logt_access_libre`

> *Description : surface de plancher des logements en accession libre (m² de SdP)*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### surface des logements en locatif aidé - Propriété `surf_logt_locatif_aide`

> *Description : surface de plancher des logements en locatif aidé (m² de SdP)*<br/>*Exemple : 2040*
- Valeur optionnelle
- Type : nombre entier

#### surface des logements en locatif régulé - Propriété `surf_logt_locatif_regul`

> *Description : surface de plancher des logements en locatif régulé (m² de SdP)*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### surface des logements en accession aidée - Propriété `surf_logt_access_aide`

> *Description : surface de plancher des logements en accession aidée (m² de SdP)*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### surface des logements en accession régulée - Propriété `surf_logt_access_regul`

> *Description : surface de plancher des logements en accession régulée (m² de SdP)*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### surface des activités industrielles - Propriété `surf_act_industrie`

> *Description : surface de plancher des activités industrielles (m² de SdP)*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### surface des activités logistiques - Propriété `surf_act_logistique`

> *Description : surface de plancher des activités logistiques (m² de SdP)*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### surface des activités artisanales - Propriété `surf_act_artisanat`

> *Description : surface de plancher des activités artisanales (m² de SdP)*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### surface des activités commerciales et services - Propriété `surf_act_comm_serv`

> *Description : surface de plancher des activités commerciales et services (m² de SdP)*<br/>*Exemple : 500*
- Valeur optionnelle
- Type : nombre entier

#### surface des activités de bureau - Propriété `surf_act_bureau`

> *Description : surface de plancher des activités de bureau (m² de SdP)*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### surface des autres activités - Propriété `surf_act_autres`

> *Description : surface de plancher des autres activités (m² de SdP)*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### surface des équipements publics - Propriété `surf_equipt_public`

> *Description : surface de plancher des équipements publics (m² de SdP)*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### ‍surface des espaces publics  - Propriété `surf_esp_public`

> *Description : ‍surface des espaces publics (m² terrain) *<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### surface espaces verts publics - Propriété `surf_esp_vert_public`

> *Description : (dont) espaces verts publics (m² terrain)*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### nombre total de logements - Propriété `nb_logt_total`

> *Description : nombre total de logements du programme*<br/>*Exemple : 34*
- Valeur optionnelle
- Type : nombre entier

#### nombre de logements individuels - Propriété `nb_logt_individuel`

> *Description : nombre de logements individuels*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### nombre de logements collectifs - Propriété `nb_logt_collectif`

> *Description : nombre de logements collectifs*<br/>*Exemple : 34*
- Valeur optionnelle
- Type : nombre entier

#### nombre de logements en accession libre - Propriété `nb_logt_access_libre`

> *Description : nombre de logements en accession libre*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### Nombre de logements locatifs libres - Propriété `nb_logt_locatif_libre`

> *Description : Nombre de logements locatifs libres*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### nombre de logements locatifs aidés - Propriété `nb_logt_locatif_aide`

> *Description : nombre de logements locatifs aidés, financés par PLUS PLAI*<br/>*Exemple : 34*
- Valeur optionnelle
- Type : nombre entier

#### nombre de logements locatifs régulés - Propriété `nb_logt_locatif_regul`

> *Description : nombre de logements locatifs régulés*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### nombre de logements en accession aidée - Propriété `nb_logt_access_aide`

> *Description : nombre de logements en accession aidée*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### nombre de logements en accession régulée - Propriété `nb_logt_access_regul`

> *Description : nombre de logements en accession régulée*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### nombre de logements participatifs - Propriété `nb_logt_participatif`

> *Description : nombre de logements participatifs*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### nombre de logements spécifiques - Propriété `nb_logt_specifique`

> *Description : nombre de logements spécifiques*<br/>*Exemple : 34*
- Valeur optionnelle
- Type : nombre entier

#### types de logements spécifiques - Propriété `type_logt_specifique`

> *Description : types de logements spécifiques*<br/>*Exemple : étudiants|seniors*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(personnes en situation de handicap|jeunes actifs|étudiants|seniors|publics en insertion|gens du voyage|mixte|non renseigné|autre))+$`

#### état d’avancement - Propriété `etat_avancement`

> *Description : état d’avancement du programme*<br/>*Exemple : en chantier*
- Valeur obligatoire
- Type : chaîne de caractères

#### date d’attribution foncière - Propriété `date_attribution_foncier`

> *Description : date d’attribution foncière*<br/>*Exemple : 2022-06-10*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### date de commercialisation - Propriété `date_commercialisation`

> *Description : date de commercialisation*<br/>*Exemple : 2023-09-02*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### date d’obtention du permis de construire - Propriété `date_obtention_pc`

> *Description : date d’obtention du permis de construire*<br/>*Exemple : 2024-05-17*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### date de livraison prévue - Propriété `date_livraison_prevue`

> *Description : date de livraison prévue*<br/>*Exemple : 2026-01-01*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### date de livraison effective - Propriété `date_livraison_effective`

> *Description : date de livraison effective*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### date des premières données - Propriété `prog_identif_date`

> *Description : date des premières données sur le programme*<br/>*Exemple : 2023-04-30*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### date de dernière actualisation - Propriété `prog_actu_date`

> *Description : date de dernière actualisation des données sur le programme*<br/>*Exemple : 2024-06-15*
- Valeur obligatoire
- Type : date

#### nom du producteur de la donnée - Propriété `source_producteur`

> *Description : nom du producteur de la donnée d’identification ou d’actualisation*<br/>*Exemple : Service ADS*
- Valeur obligatoire
- Type : chaîne de caractères

#### géométrie ponctuelle - Propriété `prog_geompoint`

> *Description : localisation ponctuelle du programme au format geoJSON (https://specs.frictionlessdata.io//table-schema/#geojson)*<br/>*Exemple : {'type': 'Point', 'coordinates': [656589.7, 6425785.32]}*
- Valeur obligatoire
- Type : GéoJSON

#### géométrie surfacique - Propriété `prog_geomsurf`

> *Description : géométrie surfacique du programme au format geoJSON (https://specs.frictionlessdata.io//table-schema/#geojson)*<br/>*Exemple : {'type': 'Polygon', 'coordinates': [[[656589.7, 6425785.32], [656655.02, 6425866.31], [656663.55, 6425874.43], [656589.707, 6425785.32]]]}*
- Valeur obligatoire
- Type : GéoJSON
