<MenuSchema />

## operation-amenagement

Classe OPERATION-AMENAGEMENT du standard CNIG Opérations d'aménagement

Spécification du fichier d'échange conforme au standard CNIG Opérations d'aménagement pour la classe OPERATION-AMENAGEMENT

- Schéma créé le : 24/05/2024
- Site web : https://github.com/cnigfr/schema-operations-amenagement
- Version : v1.0.0
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"N/A"`
- Clé primaire : `opam_id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [opam_id](#identifiant-propriete-opam-id) | chaîne de caractères  | Oui |
| [nom](#nom-propriete-nom) | chaîne de caractères  | Oui |
| [procedure](#procedure-propriete-procedure) | chaîne de caractères  | Oui |
| [description](#description-de-l'operation-propriete-description) | chaîne de caractères  | Oui |
| [type_urbanisation](#type-d'urbanisation-propriete-type-urbanisation) | chaîne de caractères  | Oui |
| [duree_previsionnelle](#duree-previsionnelle-de-l'operation-propriete-duree-previsionnelle) | nombre entier  | Non |
| [vocation_dominante](#vocation-dominante-propriete-vocation-dominante) | chaîne de caractères  | Oui |
| [emprise_foncière](#emprise-fonciere-propriete-emprise-fonciere) | nombre réel  | Oui |
| [surface_cessible](#surface-commercialisable-propriete-surface-cessible) | nombre réel  | Non |
| [multi_site](#operations-d'amenagement-contigues-propriete-multi-site) | chaîne de caractères  | Oui |
| [date_autorisation](#date-d'autorisation-propriete-date-autorisation) | date (format `%Y-%m-%d`) | Oui |
| [etat_avancement](#etat-d'avancement-global-du-projet-propriete-etat-avancement) | chaîne de caractères  | Oui |
| [url_presa_projet](#url-du-site-du-projet-propriete-url-presa-projet) | chaîne de caractères  | Non |
| [url_medias](#url-des-medias-propriete-url-medias) | chaîne de caractères  | Non |
| [url_plan_masse](#url-du-plan-masse-propriete-url-plan-masse) | chaîne de caractères  | Non |
| [nom_EPCI](#nom-de-l'epci-propriete-nom-epci) | chaîne de caractères  | Oui |
| [siren_EPCI](#code-siren-de-l'epci-propriete-siren-epci) | chaîne de caractères  | Oui |
| [nom_commune](#nom-de-la-commune-propriete-nom-commune) | chaîne de caractères  | Oui |
| [insee_commune](#code-insee-de-la-commune-propriete-insee-commune) | chaîne de caractères  | Oui |
| [opam_geomsurf](#perimetre-de-l'operation-d-amenagement-propriete-opam-geomsurf) | GéoJSON  | Oui |
| [opam_geompoint](#centroide-de-l'operation-propriete-opam-geompoint) | point géographique (format `default`) | Oui |
| [nom_moa](#nom-du-maitre-d-ouvrage-propriete-nom-moa) | chaîne de caractères  | Oui |
| [nature_moa](#nature-du-maitre-d-ouvrage--propriete-nature-moa) | chaîne de caractères  | Oui |
| [raison_sociale_moa](#raison-sociale-du-maitre-d-ouvrage-propriete-raison-sociale-moa) | chaîne de caractères  | Non |
| [modalite_realisation](#modalites-de-realisation-propriete-modalite-realisation) | chaîne de caractères  | Oui |
| [nom_concedant](#nom-du-concedant-propriete-nom-concedant) | chaîne de caractères  | Non |
| [date_deb_concession](#date-de-debut-de-la-concession-propriete-date-deb-concession) | date (format `%Y-%m-%d`) | Non |
| [date_fin_concession](#date-de-fin-de-la-concession-propriete-date-fin-concession) | date (format `%Y-%m-%d`) | Non |
| [nom_moe](#nom-de-la-maitrise-d'oeuvre-propriete-nom-moe) | chaîne de caractères  | Non |
| [‍portage_EPF](#portage-par-un-etablissement-public-foncier-propriete-portage-epf) | chaîne de caractères  | Oui |
| [densite_brute](#densite-brute-propriete-densite-brute) | nombre réel  | Non |
| [densite_brute_logt](#densite-brute-en-equivalent-logement-propriete-densite-brute-logt) | nombre réel  | Non |
| [densite_nette](#densite-nette-du-projet-propriete-densite-nette) | nombre réel  | Non |
| [densite_nette_logt](#densite-nette-du-projet-en-equivalent-logement-propriete-densite-nette-logt) | nombre réel  | Non |
| [surf_totale_operation](#surface-totale-propriete-surf-totale-operation) | nombre entier  | Oui |
| [surf_logt_individuel](#surface-des-logements-individuels-propriete-surf-logt-individuel) | nombre entier  | Non |
| [surf_logt_collectif](#surface-des-logements-collectifs-propriete-surf-logt-collectif) | nombre entier  | Non |
| [surf_logt_locatif_aide](#surface-des-logements-en-locatif-aide-propriete-surf-logt-locatif-aide) | nombre entier  | Non |
| [surf_logt_access_aide](#surface-des-logements-en-accession-aidee-propriete-surf-logt-access-aide) | nombre entier  | Non |
| [surf_logt_access_libre](#surface-des-logements-en-accession-libre-propriete-surf-logt-access-libre) | nombre entier  | Non |
| [surf_act_industrie](#surface-des-activites-industrielles-propriete-surf-act-industrie) | nombre entier  | Non |
| [surf_act_logistique](#surface-des-activites-logistiques-propriete-surf-act-logistique) | nombre entier  | Non |
| [surf_act_artisanat](#surface-des-activites-artisanales-propriete-surf-act-artisanat) | nombre entier  | Non |
| [surf_act_comm_serv](#surface-des-activites-commerciales-et-services-propriete-surf-act-comm-serv) | nombre entier  | Non |
| [surf_act_bureau](#surface-des-activites-de-bureau-propriete-surf-act-bureau) | nombre entier  | Non |
| [surf_act_autres](#surface-des-autres-activites-propriete-surf-act-autres) | nombre entier  | Non |
| [surf_equipt_public](#surface-des-equipements-publics-propriete-surf-equipt-public) | nombre entier  | Non |
| [type_equipt_public_bati](#nature-des-equipements-publics-batis-propriete-type-equipt-public-bati) | chaîne de caractères  | Non |
| [surf_esp_public](#surface-des-espaces-publics-propriete-surf-esp-public) | nombre entier  | Non |
| [surf_esp_vert_public](#surface-des-espaces-verts-publics-propriete-surf-esp-vert-public) | nombre entier  | Non |
| [nb_logt_total](#nombre-total-de-logements-propriete-nb-logt-total) | nombre entier  | Oui |
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
| [nb_logt_supprimes](#nombre-de-logements-supprimes-propriete-nb-logt-supprimes) | nombre entier  | Non |
| [nb_demolition](#nombre-de-batiments-demolis-propriete-nb-demolition) | nombre entier  | Non |
| [nb_logt_construire](#nombre-de-logements-restant-a-construire-propriete-nb-logt-construire) | nombre entier  | Non |
| [annee_debut_travaux](#annee-de-commencement-des-travaux-propriete-annee-debut-travaux) | date (format `%Y`) | Non |
| [annee_fin_travaux](#annee-d'achevement-des-travaux-propriete-annee-fin-travaux) | date (format `%Y`) | Non |
| [date_reception](#date-de-reception-et-de-mise-en-service-propriete-date-reception) | date (format `%Y-%m-%d`) | Non |
| [date_prev_livr_amngt](#date-estimee-de-livraison-amenagement-propriete-date-prev-livr-amngt) | date (format `%Y-%m-%d`) | Non |
| [date_prev_livr_immo](#date-estimee-de-livraison-immobiliere-propriete-date-prev-livr-immo) | date (format `%Y-%m-%d`) | Non |
| [date_achevement](#date-d'achevement-propriete-date-achevement) | date (format `%Y-%m-%d`) | Non |
| [date_de_valeur](#millesime-de-l'exercice-propriete-date-de-valeur) | date (format `%Y`) | Non |
| [depense_total](#total-des-depenses-hors-taxes-propriete-depense-total) | nombre réel  | Non |
| [depense_foncier](#acquisitions-foncieres-propriete-depense-foncier) | nombre réel  | Non |
| [depense_etudes](#cout-des-etudes-propriete-depense-etudes) | nombre réel  | Non |
| [depense_travaux](#cout-des-travaux-propriete-depense-travaux) | nombre réel  | Non |
| [depense_contributions](#depenses-liees-aux-contributions-et-participation-propriete-depense-contributions) | nombre réel  | Non |
| [depense_frais_annexes](#depenses-liees-aux-frais-annexes-propriete-depense-frais-annexes) | nombre réel  | Non |
| [recette_total](#total-des-recettes-hors-taxes-sur-l'operation-propriete-recette-total) | nombre réel  | Non |
| [recette_cessions](#recettes-liees-aux-cessions,-charges-foncieres-propriete-recette-cessions) | nombre réel  | Non |
| [recette_loyers](#recettes-liees-aux-loyers-propriete-recette-loyers) | nombre réel  | Non |
| [recette_contributions](#recettes-liees-aux-contributions-publiques-propriete-recette-contributions) | nombre réel  | Non |
| [recette_subventions](#total-des-subventions-propriete-recette-subventions) | nombre réel  | Non |
| [recette_autres](#total-des-autres-recettes-propriete-recette-autres) | nombre réel  | Non |
| [recette_fiscalite_locale](#recettes-attendues-en-fiscalite-locale-propriete-recette-fiscalite-locale) | nombre réel  | Non |
| [url_gpu](#url-gpu-propriete-url-gpu) | chaîne de caractères  | Oui |
| [url_reglement_urba](#url-reglement-d'urbanisme-dans-le-gpu-propriete-url-reglement-urba) | chaîne de caractères  | Oui |
| [urba_zone_lib](#libelle-de-la-zone-d'urbanisme-propriete-urba-zone-lib) | chaîne de caractères  | Oui |
| [oap_de_quartier](#existence-d'une-oap-de-quartier-propriete-oap-de-quartier) | chaîne de caractères  | Oui |
| [situation_initiale](#situation-initiale-du-site-propriete-situation-initiale) | chaîne de caractères  | Oui |
| [emprise_ini_friche](#emprise-fonciere-initialement-en-friche-propriete-emprise-ini-friche) | nombre réel  | Non |
| [url_cartofriches](#url-cartofriches-propriete-url-cartofriches) | chaîne de caractères  | Non |
| [durete_fonciere](#commentaire-court-sur-la-durete-fonciere-propriete-durete-fonciere) | chaîne de caractères  | Non |
| [label](#label-ou-certification-propriete-label) | chaîne de caractères  | Oui |
| [candidature_ami](#appel-a-manifestation-d'interet-propriete-candidature-ami) | chaîne de caractères  | Oui |
| [date_approbation_PLH](#date-d'approbation-du-plh-propriete-date-approbation-plh) | date (format `%Y-%m-%d`) | Non |
| [date_fin_validite_PLH](#date-de-fin-de-validite-dy-plh-propriete-date-fin-validite-plh) | date (format `%Y-%m-%d`) | Non |
| [opam_identif_date](#date-des-premieres-donnees-propriete-opam-identif-date) | date (format `%Y-%m-%d`) | Oui |
| [opam_actu_date](#date-de-derniere-actualisation-propriete-opam-actu-date) | date (format `%Y-%m-%d`) | Oui |
| [source_producteur](#nom-du-producteur-des-informations-propriete-source-producteur) | chaîne de caractères  | Oui |

#### identifiant - Propriété `opam_id`

> *Description : identifiant de l’opération d’aménagement*<br/>*Exemple : 78418_OPERATION-AMENAGEMENT_0053*
- Valeur obligatoire
- Type : chaîne de caractères

#### nom - Propriété `nom`

> *Description : nom de l’opération d’aménagement*<br/>*Exemple : ZAC des Terres Ocres*
- Valeur obligatoire
- Type : chaîne de caractères

#### procédure - Propriété `procedure`

> *Description : procédure de l’opération d’aménagement*<br/>*Exemple : zone d’aménagement concerté*
- Valeur obligatoire
- Type : chaîne de caractères

#### description de l’opération - Propriété `description`

> *Description : court commentaire de description de l’opération*<br/>*Exemple : ZAC des Terres Ocres sur le site de Val industrie à vocation principalement résidentielle*
- Valeur obligatoire
- Type : chaîne de caractères

#### type d’urbanisation - Propriété `type_urbanisation`

> *Description : type d’urbanisation*<br/>*Exemple : renouvellement urbain*
- Valeur obligatoire
- Type : chaîne de caractères

#### durée prévisionnelle de l’opération - Propriété `duree_previsionnelle`

> *Description : durée prévisionnelle de l’opération. (unité : année)*<br/>*Exemple : 14*
- Valeur optionnelle
- Type : nombre entier

#### vocation dominante - Propriété `vocation_dominante`

> *Description : vocation dominante de l’opération d’aménagement*<br/>*Exemple : mixte*
- Valeur obligatoire
- Type : chaîne de caractères

#### emprise foncière - Propriété `emprise_foncière`

> *Description : emprise foncière (en ha)*<br/>*Exemple : 20*
- Valeur obligatoire
- Type : nombre réel

#### surface commercialisable - Propriété `surface_cessible`

> *Description : surface commercialisable (en ha). Emp. totale moins les espaces publics*<br/>*Exemple : 18*
- Valeur optionnelle
- Type : nombre réel

#### opérations d’aménagement contiguës - Propriété `multi_site`

> *Description : le site présente (oui / non) plusieurs opérations d’aménagement contiguës*<br/>*Exemple : non*
- Valeur obligatoire
- Type : chaîne de caractères

#### date d’autorisation - Propriété `date_autorisation`

> *Description : date d’autorisation du PA, PCVD, DP (ou permis groupé) ou date d’approbation du dossier de création pour la ZAC*<br/>*Exemple : 2022-09-27*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### état d’avancement global du projet - Propriété `etat_avancement`

> *Description : état d’avancement global du projet*<br/>*Exemple : en cours*
- Valeur obligatoire
- Type : chaîne de caractères

#### URL du site du projet - Propriété `url_presa_projet`

> *Description : URL du site de présentation du projet*<br/>*Exemple : https://terres-ocres/info.fr*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(https?)://[^\s/$.?#].[^\s]*$`

#### URL des médias - Propriété `url_medias`

> *Description : URL des médias photo, vue d’artiste, vidéo du projet*<br/>*Exemple : https://terres-ocres/info/media.fr*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(https?)://[^\s/$.?#].[^\s]*$`

#### URL du plan masse - Propriété `url_plan_masse`

> *Description : URL du plan masse*<br/>*Exemple : https://terres-ocres/info/plan-masse.fr*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(https?)://[^\s/$.?#].[^\s]*$`

#### nom de l‘EPCI - Propriété `nom_EPCI`

> *Description : nom de la communauté de communes, la principale si plusieurs*<br/>*Exemple : Communauté d'Agglomération Saint Germain Boucles de Seine*
- Valeur obligatoire
- Type : chaîne de caractères

#### code SIREN de l’EPCI - Propriété `siren_EPCI`

> *Description : code SIREN de la communauté de communes, la principale si plusieurs*<br/>*Exemple : 200058519*
- Valeur obligatoire
- Type : chaîne de caractères

#### nom de la commune - Propriété `nom_commune`

> *Description : nom de la commune, la principale si plusieurs*<br/>*Exemple : Montesson*
- Valeur obligatoire
- Type : chaîne de caractères

#### code INSEE de la commune - Propriété `insee_commune`

> *Description : code INSEE de la commune, la principale si plusieurs*<br/>*Exemple : 78418*
- Valeur obligatoire
- Type : chaîne de caractères

#### périmètre de l’opération d'aménagement - Propriété `opam_geomsurf`

> *Description : multi géométries surfaciques du périmètre de l’opération d’aménagement au format geoJSON(https://specs.frictionlessdata.io//table-schema/#geojson)*<br/>*Exemple : {'type': 'Polygon', 'coordinates': [[[656589.7, 6425785.32], [656655.02, 6425866.31], [656663.55, 6425874.43], [656589.707, 6425785.32]]]}*
- Valeur obligatoire
- Type : GéoJSON

#### centroïde de l’opération - Propriété `opam_geompoint`

> *Description : coordonnées géographiques du centroïde de l’opération d’aménagement au format geopoint (https://specs.frictionlessdata.io//table-schema/#geopoint)*<br/>*Exemple : 3.9815, 49.2527*
- Valeur obligatoire
- Type : point géographique (format `default`)

#### nom du maître d'ouvrage - Propriété `nom_moa`

> *Description : nom du maître d'ouvrage*<br/>*Exemple : Yvelines aménagement*
- Valeur obligatoire
- Type : chaîne de caractères

#### nature du maître d'ouvrage  - Propriété `nature_moa`

> *Description : nature du maître d'ouvrage*<br/>*Exemple : SEM ou EPL*
- Valeur obligatoire
- Type : chaîne de caractères

#### raison sociale du maître d'ouvrage - Propriété `raison_sociale_moa`

> *Description : raison sociale du maître d'ouvrage*<br/>*Exemple : Yvelines aménagement*
- Valeur optionnelle
- Type : chaîne de caractères

#### ‍modalités de réalisation - Propriété `modalite_realisation`

> *Description : modalités de réalisation*<br/>*Exemple : ‍concession*
- Valeur obligatoire
- Type : chaîne de caractères

#### nom du concédant - Propriété `nom_concedant`

> *Description : nom du concédant*<br/>*Exemple : Communauté d'Agglomération Saint Germain Boucles de Seine*
- Valeur optionnelle
- Type : chaîne de caractères

#### date de début de la concession - Propriété `date_deb_concession`

> *Description : date de début de la concession*<br/>*Exemple : 2022-12-01*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### date de fin de la concession - Propriété `date_fin_concession`

> *Description : date de fin de la concession*<br/>*Exemple : 2025-07-01*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### ‍nom de la maîtrise d’œuvre - Propriété `nom_moe`

> *Description : nom de la maîtrise d’œuvre*<br/>*Exemple : Atelier des rives*
- Valeur optionnelle
- Type : chaîne de caractères

#### portage par un établissement public foncier - Propriété `‍portage_EPF`

> *Description : portage (oui / non) par un établissement public foncier*<br/>*Exemple : oui*
- Valeur obligatoire
- Type : chaîne de caractères

#### densité brute - Propriété `densite_brute`

> *Description : nombre total de m² SdP / emprise totale (ha)*<br/>*Exemple : 6275*
- Valeur optionnelle
- Type : nombre réel

#### densité brute en équivalent logement - Propriété `densite_brute_logt`

> *Description : densité brute du projet en équivalent logement nombre total d’équivalent logement / emprise totale (ha)*<br/>*Exemple : 89*
- Valeur optionnelle
- Type : nombre réel

#### densité nette du projet - Propriété `densite_nette`

> *Description : densité nette du projet nombre total de m² SdP / emprise cessible (ha)*<br/>*Exemple : 6994*
- Valeur optionnelle
- Type : nombre réel

#### densité nette du projet en équivalent logement - Propriété `densite_nette_logt`

> *Description : densité nette du projet en équivalent logement nombre total d’équivalent logement / emprise cessible (ha)*<br/>*Exemple : 99*
- Valeur optionnelle
- Type : nombre réel

#### surface totale - Propriété `surf_totale_operation`

> *Description : surface de plancher totale de l’opération d’aménagement (m² de SdP)*<br/>*Exemple : 125500*
- Valeur obligatoire
- Type : nombre entier

#### surface des logements individuels - Propriété `surf_logt_individuel`

> *Description : surface de plancher des logements individuels (m² de SdP)*<br/>*Exemple : 34000*
- Valeur optionnelle
- Type : nombre entier

#### surface des logements collectifs - Propriété `surf_logt_collectif`

> *Description : surface de plancher des logements collectifs (m² de SdP)*<br/>*Exemple : 88400*
- Valeur optionnelle
- Type : nombre entier

#### surface des logements en locatif aidé - Propriété `surf_logt_locatif_aide`

> *Description : surface de plancher des logements en locatif aidé (m² de SdP)*<br/>*Exemple : 27625*
- Valeur optionnelle
- Type : nombre entier

#### surface des logements en accession aidée - Propriété `surf_logt_access_aide`

> *Description : surface de plancher des logements en accession aidée (m² de SdP)*<br/>*Exemple : 16000*
- Valeur optionnelle
- Type : nombre entier

#### surface des logements en accession libre - Propriété `surf_logt_access_libre`

> *Description : surface de plancher des logements en accession libre (m² de SdP)*<br/>*Exemple : 40000*
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

> *Description : surface de plancher des activités commerciales et services (m² de SdP)*<br/>*Exemple : 15000*
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

> *Description : surface de plancher des équipements publics (m² de SdP)*<br/>*Exemple : 1200*
- Valeur optionnelle
- Type : nombre entier

#### nature des équipements publics batis - Propriété `type_equipt_public_bati`

> *Description : nature des équipements publics batis*<br/>*Exemple : parking et stationnement en ouvrage|établissement de service public|équipement culturel*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(parking et stationnement en ouvrage|équipement de transport en commun|établissement d'enseignement ou de recherche|établissement de santé|établissement de service public|équipement sportif|équipement culturel|équipement d’action sociale|équipement de culte|production d’énergie renouvelable|non renseigné|autre))+$`

#### ‍surface des espaces publics - Propriété `surf_esp_public`

> *Description : surface des espaces publics (m² terrain)*<br/>*Exemple : 20000*
- Valeur optionnelle
- Type : nombre entier

#### Surface des espaces verts publics - Propriété `surf_esp_vert_public`

> *Description : (dont) espaces verts publics (m² terrain)*<br/>*Exemple : 10000*
- Valeur optionnelle
- Type : nombre entier

#### nombre total de logements - Propriété `nb_logt_total`

> *Description : nombre total de logements de l’opération d’aménagement*<br/>*Exemple : 1700*
- Valeur obligatoire
- Type : nombre entier

#### nombre de logements individuels - Propriété `nb_logt_individuel`

> *Description : nombre de logements individuels*<br/>*Exemple : 340*
- Valeur optionnelle
- Type : nombre entier

#### nombre de logements collectifs - Propriété `nb_logt_collectif`

> *Description : nombre de logements collectifs*<br/>*Exemple : 1360*
- Valeur optionnelle
- Type : nombre entier

#### nombre de logements en accession libre - Propriété `nb_logt_access_libre`

> *Description : nombre de logements en accession libre*<br/>*Exemple : 500*
- Valeur optionnelle
- Type : nombre entier

#### nombre de logements locatifs libres - Propriété `nb_logt_locatif_libre`

> *Description : nombre de logements locatifs libres*<br/>*Exemple : 427*
- Valeur optionnelle
- Type : nombre entier

#### nombre de logements locatifs aidés - Propriété `nb_logt_locatif_aide`

> *Description : nombre de logements locatifs aidés, financés par PLUS PLAI*<br/>*Exemple : 425*
- Valeur optionnelle
- Type : nombre entier

#### nombre de logements locatifs régulés - Propriété `nb_logt_locatif_regul`

> *Description : nombre de logements locatifs régulés*<br/>*Exemple : 50*
- Valeur optionnelle
- Type : nombre entier

#### nombre de logements en accession aidée - Propriété `nb_logt_access_aide`

> *Description : nombre de logements en accession aidée*<br/>*Exemple : 200*
- Valeur optionnelle
- Type : nombre entier

#### nombre de logements en accession régulée - Propriété `nb_logt_access_regul`

> *Description : nombre de logements en accession régulée*<br/>*Exemple : 50*
- Valeur optionnelle
- Type : nombre entier

#### nombre de logements participatifs - Propriété `nb_logt_participatif`

> *Description : nombre de logements participatifs*<br/>*Exemple : 8*
- Valeur optionnelle
- Type : nombre entier

#### nombre de logements spécifiques - Propriété `nb_logt_specifique`

> *Description : nombre de logements spécifiques*<br/>*Exemple : 40*
- Valeur optionnelle
- Type : nombre entier

#### types de logements spécifiques - Propriété `type_logt_specifique`

> *Description : types de logements spécifiques*<br/>*Exemple : étudiants*
- Valeur optionnelle
- Type : chaîne de caractères

#### nombre de logements supprimés - Propriété `nb_logt_supprimes`

> *Description : nombre de logements supprimés*<br/>*Exemple : 15*
- Valeur optionnelle
- Type : nombre entier

#### nombre de bâtiments démolis - Propriété `nb_demolition`

> *Description : nombre de bâtiments démolis*<br/>*Exemple : 5*
- Valeur optionnelle
- Type : nombre entier

#### nombre de logements restant à construire - Propriété `nb_logt_construire`

> *Description : nombre de logements restant à construire (m² de surface de plancher)*<br/>*Exemple : 1500*
- Valeur optionnelle
- Type : nombre entier

#### année de commencement des travaux - Propriété `annee_debut_travaux`

> *Description : année de commencement des travaux*<br/>*Exemple : 2022*
- Valeur optionnelle
- Type : date (format `%Y`)

#### année d’achèvement des travaux - Propriété `annee_fin_travaux`

> *Description : année d’achèvement des travaux*<br/>*Exemple : 2036*
- Valeur optionnelle
- Type : date (format `%Y`)

#### date de réception et de mise en service - Propriété `date_reception`

> *Description : date de réception et de mise en service*<br/>*Exemple : 2037-07-30*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### date estimée de livraison aménagement - Propriété `date_prev_livr_amngt`

> *Description : date estimée de livraison aménagement*<br/>*Exemple : 2028-05-02*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### date estimée de livraison immobilière - Propriété `date_prev_livr_immo`

> *Description : date estimée de livraison immobilière*<br/>*Exemple : 2038-06-30*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### date d’achèvement - Propriété `date_achevement`

> *Description : date de l’acte pris par l’autorité compétente supprimant la ZAC*<br/>*Exemple : 2038-12-30*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### millésime de l’exercice - Propriété `date_de_valeur`

> *Description : millésime de l’exercice*<br/>*Exemple : 2024*
- Valeur optionnelle
- Type : date (format `%Y`)

#### total des dépenses hors taxes - Propriété `depense_total`

> *Description : total des dépenses hors taxes sur l’opération (kilo €)*<br/>*Exemple : 20300*
- Valeur optionnelle
- Type : nombre réel

#### acquisitions foncières - Propriété `depense_foncier`

> *Description : acquisitions foncières (kilo €)*<br/>*Exemple : 5000*
- Valeur optionnelle
- Type : nombre réel

#### coût des études - Propriété `depense_etudes`

> *Description : coût des études (kilo €)*<br/>*Exemple : 1050*
- Valeur optionnelle
- Type : nombre réel

#### coût des travaux - Propriété `depense_travaux`

> *Description : coût des travaux (kilo €)*<br/>*Exemple : 9050*
- Valeur optionnelle
- Type : nombre réel

#### dépenses liées aux contributions et participation - Propriété `depense_contributions`

> *Description : dépenses liées aux contributions et participation (kilo €)*<br/>*Exemple : 1000*
- Valeur optionnelle
- Type : nombre réel

#### dépenses liées aux frais annexes - Propriété `depense_frais_annexes`

> *Description : dépenses liées aux frais annexes (kilo €)*<br/>*Exemple : 4200*
- Valeur optionnelle
- Type : nombre réel

#### total des recettes hors taxes sur l’opération - Propriété `recette_total`

> *Description : total des recettes hors taxes sur l’opération (kilo €)*<br/>*Exemple : 20300*
- Valeur optionnelle
- Type : nombre réel

#### recettes liées aux cessions, charges foncières - Propriété `recette_cessions`

> *Description : recettes liées aux cessions, charges foncières (kilo €)*<br/>*Exemple : 15000*
- Valeur optionnelle
- Type : nombre réel

#### recettes liées aux loyers - Propriété `recette_loyers`

> *Description : recettes liées aux loyers (kilo €)*
- Valeur optionnelle
- Type : nombre réel

#### recettes liées aux contributions publiques - Propriété `recette_contributions`

> *Description : recettes liées aux contributions publiques (pour les opérations d’initiative publique) (kilo €)*<br/>*Exemple : 3000*
- Valeur optionnelle
- Type : nombre réel

#### total des subventions - Propriété `recette_subventions`

> *Description : total des subventions (kilo €)*<br/>*Exemple : 2000*
- Valeur optionnelle
- Type : nombre réel

#### total des autres recettes - Propriété `recette_autres`

> *Description : toutes autres recettes (kilo €) : fonds d’investissement privés, produits bancaires, location de toiture pour production d’énergie solaire, etc*<br/>*Exemple : 300*
- Valeur optionnelle
- Type : nombre réel

#### recettes attendues en fiscalité locale - Propriété `recette_fiscalite_locale`

> *Description : recettes attendues sous forme de fiscalité locale (kilo €)*<br/>*Exemple : 250*
- Valeur optionnelle
- Type : nombre réel

#### url GPU - Propriété `url_gpu`

> *Description : url d’accès direct au géoportail de l’urbanisme. Sinon, renseigner par la mention : document d’urbanisme non publié*<br/>*Exemple : https://www.geoportail-urbanisme.gouv.fr/map/#tile=1&zoom=14&mlon=2.201085&mlat=48.898525*
- Valeur obligatoire
- Type : chaîne de caractères

#### url règlement d’urbanisme dans le GPU - Propriété `url_reglement_urba`

> *Description : url d’accès direct au règlement d’urbanisme dans le GPU*<br/>*Exemple : https://data.geopf.fr/annexes/gpu/documents/DU_92050/92050_reglement_20230627.pdf*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^(https?)://[^\s/$.?#].[^\s]*$`

#### libellé de la zone d’urbanisme - Propriété `urba_zone_lib`

> *Description : libellé de la zone d’urbanisme*<br/>*Exemple : Ubd*
- Valeur obligatoire
- Type : chaîne de caractères

#### existence d’une OAP de quartier - Propriété `oap_de_quartier`

> *Description : existence (oui / non) d’une OAP de quartier*<br/>*Exemple : oui*
- Valeur obligatoire
- Type : chaîne de caractères

#### situation initiale du site - Propriété `situation_initiale`

> *Description : situation initiale du site, préalablement à l’autorisation d’urbanisme*<br/>*Exemple : friche*
- Valeur obligatoire
- Type : chaîne de caractères

#### emprise foncière initialement en friche - Propriété `emprise_ini_friche`

> *Description : Emprise foncière (ha) initialement en friche, si situation_initiale = friche*<br/>*Exemple : 5.4*
- Valeur optionnelle
- Type : nombre réel

#### url Cartofriches - Propriété `url_cartofriches`

> *Description : url dans Cartofriches de l’ancienne friche, si situation_initiale = friche*<br/>*Exemple : https://cartofriches.cerema.fr/cartofriches/_w_315f3ab4/?site=48095_11974*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(https?)://[^\s/$.?#].[^\s]*$`

#### commentaire court sur la dureté foncière - Propriété `durete_fonciere`

> *Description : commentaire court sur l’éventuelle dureté foncière du site*<br/>*Exemple : pas de dureté foncière particulière*
- Valeur optionnelle
- Type : chaîne de caractères

#### label ou certification - Propriété `label`

> *Description : label ou certification pour une démarche environnementale*<br/>*Exemple : Certification HQE Aménagement Durable|Label BBCA Quartier*
- Valeur obligatoire
- Type : chaîne de caractères

#### appel à manifestation d’intérêt - Propriété `candidature_ami`

> *Description : appel à manifestation d’intérêt (sinon : « aucun »)*<br/>*Exemple : territoire engagé pour le logement*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(fonds friche|reconversion de friches industrielles issues de sites ICPE|recyclage foncier|transformation des zones commerciales|territoire engagé pour le logement|action cœur de ville|petite ville de demain|aucun|non renseigné|autre))+$`

#### date d’approbation du PLH - Propriété `date_approbation_PLH`

> *Description : date d’approbation de validité d’un éventuel PLH indiquant le nombre de logements conventionnés*<br/>*Exemple : 2019-08-01*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### date de fin de validité dy PLH - Propriété `date_fin_validite_PLH`

> *Description : date de fin de validité d’un éventuel PLH indiquant le nombre de logements conventionnés*<br/>*Exemple : 2024-08-01*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### date des premières données - Propriété `opam_identif_date`

> *Description : date des premières données sur l’opération d’aménagement*<br/>*Exemple : 2023-01-15*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### date de dernière actualisation - Propriété `opam_actu_date`

> *Description : date de dernière actualisation des données sur l’opération d’aménagement*<br/>*Exemple : 2024-02-14*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### nom du producteur des informations - Propriété `source_producteur`

> *Description : r nom du producteur de la donnée d’identification ou d’actualisation. Ex : EPA Bordeaux Euratlantique ; Région Ile-de-France ; DDT de la Sarthe*<br/>*Exemple : DDT des Yvelines*
- Valeur obligatoire
- Type : chaîne de caractères
