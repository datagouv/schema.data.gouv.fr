<MenuSchema />

<MenuSchema />

## schema-friches

Standard CNIG Friches

Spécification du fichier d'échange conforme au standard CNIG Friches relatif aux friches urbanisées. Une friche "urbanisée" a connu une activité économique (industrielle, artisanale, logistique, commerciale, de loisir, tertiaire, agricole), un usage résidentiel ou un usage d'équipement. La définition règlementaire décrit "tout bien ou droit immobilier, bâti ou non bâti, inutilisé et dont l'état, la configuration ou l'occupation totale ou partielle ne permet pas un réemploi sans un aménagement ou des travaux préalables". En particulier, les friches dites "agricoles", au sens des espaces auparavant cultivés et qui se sont enfrichés, ne sont pas prises en compte dans le cadre de ce standard, au contraire des bâtis agricoles désaffectés.

- Schéma créé le : 21/04/2022
- Site web : https://github.com/cnigfr/schema-friches
- Version : v1.0.3
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"N/A"`
- Clé primaire : `site_id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [site_id](#identifiant-du-site-propriete-site-id) | chaîne de caractères  | Oui |
| [site_nom](#nom-du-site-propriete-site-nom) | chaîne de caractères  | Oui |
| [site_type](#type-de-site-propriete-site-type) | chaîne de caractères  | Oui |
| [site_adresse](#adresse-du-site-propriete-site-adresse) | chaîne de caractères  | Non |
| [site_identif_date](#date-d-identification-du-site-propriete-site-identif-date) | date (format `%Y-%m-%d`) | Oui |
| [site_actu_date](#date-de-derniere-actualisation-propriete-site-actu-date) | date (format `%Y-%m-%d`) | Oui |
| [site_url](#url-du-site-propriete-site-url) | chaîne de caractères (format `uri`) | Non |
| [site_ademe_url](#url-de-la-fiche-de-l'ademe-propriete-site-ademe-url) | chaîne de caractères (format `uri`) | Non |
| [site_securite](#type-de-securisation-propriete-site-securite) | chaîne de caractères  | Non |
| [site_occupation](#occupation-du-site-propriete-site-occupation) | chaîne de caractères  | Non |
| [site_statut](#statut-du-site-propriete-site-statut) | chaîne de caractères  | Non |
| [site_projet_url](#site-web-d-un-eventuel-projet-sur-le-site-propriete-site-projet-url) | chaîne de caractères (format `uri`) | Non |
| [activite_libelle](#libelle-des-activites-propriete-activite-libelle) | chaîne de caractères  | Non |
| [activite_code](#code-basias-des-activites-propriete-activite-code) | chaîne de caractères  | Non |
| [activite_fin_annee](#annee-de-fin-d-activite-propriete-activite-fin-annee) | date (format `%Y`) | Non |
| [comm_nom](#nom-de-la-commune-propriete-comm-nom) | chaîne de caractères  | Oui |
| [comm_insee](#code-insee-de-la-commune-propriete-comm-insee) | chaîne de caractères  | Oui |
| [bati_type](#type-de-batiments-propriete-bati-type) | chaîne de caractères  | Non |
| [bati_nombre](#nombre-de-batiments-propriete-bati-nombre) | nombre entier  | Non |
| [bati_surface](#surface-des-batiments-propriete-bati-surface) | nombre entier  | Non |
| [bati_pollution](#pollution-connue-propriete-bati-pollution) | chaîne de caractères  | Non |
| [bati_vacance](#etat-de-vacance-propriete-bati-vacance) | chaîne de caractères  | Non |
| [bati_patrimoine](#presence-de-bati-patrimonial-propriete-bati-patrimoine) | chaîne de caractères  | Non |
| [bati_etat](#degradation-des-batiment-propriete-bati-etat) | chaîne de caractères  | Non |
| [local_ancien_annee](#premiere-annee-de-construction-propriete-local-ancien-annee) | date (format `%Y`) | Non |
| [local_recent_annee](#derniere-annee-de-construction-propriete-local-recent-annee) | date (format `%Y`) | Non |
| [proprio_type](#type-de-proprietaire-propriete-proprio-type) | chaîne de caractères  | Non |
| [proprio_personne](#type-de-personne-propriete-proprio-personne) | chaîne de caractères  | Non |
| [proprio_nom](#nom-du-proprietaire-propriete-proprio-nom) | chaîne de caractères  | Non |
| [sol_pollution_annee](#annee-de-la-pollution-du-sol-propriete-sol-pollution-annee) | date (format `%Y`) | Non |
| [sol_pollution_existe](#existence-de-pollution-du-sol-propriete-sol-pollution-existe) | chaîne de caractères  | Non |
| [sol_pollution_origine](#origine-de-la-pollution-du-sol-propriete-sol-pollution-origine) | chaîne de caractères  | Non |
| [sol_pollution_commentaire](#commentaire-sur-la-pollution-du-sol-propriete-sol-pollution-commentaire) | chaîne de caractères  | Non |
| [sol_depollution_fiche](#fiche-de-depollution-propriete-sol-depollution-fiche) | chaîne de caractères (format `uri`) | Non |
| [unite_fonciere_surface](#surface-de-l-unite-fonciere-propriete-unite-fonciere-surface) | nombre entier  | Non |
| [unite_fonciere_refcad](#liste-des-parcelles-cadastrale-propriete-unite-fonciere-refcad) | chaîne de caractères  | Non |
| [urba_zone_type](#type-de-zone-d-urbanisme-propriete-urba-zone-type) | chaîne de caractères  | Non |
| [urba_zone_lib](#libelle-de-la-zone-d-urbanisme-propriete-urba-zone-lib) | chaîne de caractères  | Non |
| [urba_zone_formdomi](#forme-dominante-de-la-zone-propriete-urba-zone-formdomi) | chaîne de caractères  | Non |
| [urba_doc_type](#type-de-document-d-urbanisme-propriete-urba-doc-type) | chaîne de caractères  | Non |
| [desserte_distance](#distances-d-acces-aux-reseaux-propriete-desserte-distance) | chaîne de caractères  | Non |
| [desserte_commentaire](#desserte-du-site-propriete-desserte-commentaire) | chaîne de caractères  | Non |
| [source_nom](#nom-de-la-source-propriete-source-nom) | chaîne de caractères  | Oui |
| [source_url](#url-de-la-source-propriete-source-url) | chaîne de caractères  | Non |
| [source_producteur](#identification-du-producteur-propriete-source-producteur) | chaîne de caractères  | Non |
| [source_contact](#adresse-mail-propriete-source-contact) | chaîne de caractères  | Non |
| [geompoint](#coordonnees-du-centroide-propriete-geompoint) | chaîne de caractères  | Oui |
| [geomsurf](#geometrie-surfacique-propriete-geomsurf) | chaîne de caractères  | Non |

#### identifiant du site - Propriété `site_id`

> *Description : identifiant du site respectant la forme définie dans le standard CNIG Friches §4.2*<br/>*Exemple : 12083_22-12.0017*
- Valeur obligatoire
- Type : chaîne de caractères

#### nom du site - Propriété `site_nom`

> *Description : nom du site ou nom usuel du site en absence de nom officiel ou description sommaire du site*<br/>*Exemple : Centre médical thermal*
- Valeur obligatoire
- Type : chaîne de caractères

#### type de site - Propriété `site_type`

> *Description : type de site : friche industrielle, commerciale, etc.*<br/>*Exemple : friche industrielle*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `friche industrielle`
    - `friche commerciale`
    - `friche hospitalière`
    - `friche agro-industrielle`
    - `Friche carrière ou mine`
    - `friche militaire`
    - `friche d'habitat`
    - `friche d'équipement public`
    - `friche portuaire`
    - `friche aéroportuaire`
    - `friche ferroviaire`
    - `friche logistique`
    - `friche loisir tourisme hôtellerie`
    - `friche enseignement`
    - `friche cultuelle`
    - `mixte`
    - `inconnu`
    - `autre`
    - `sans objet`

#### adresse du site - Propriété `site_adresse`

> *Description : adresse du site*<br/>*Exemple : 875 rte de Pierrefond*
- Valeur optionnelle
- Type : chaîne de caractères

#### date d'identification du site - Propriété `site_identif_date`

> *Description : date d'identification du site, au format ISO 8601 AAAA-MM-DD*<br/>*Exemple : 2003-05-18*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### date de dernière actualisation - Propriété `site_actu_date`

> *Description : date de dernière actualisation des informations sur le site, au format ISO 8601 AAAA-MM-DD*<br/>*Exemple : 2019-06-23*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### URL du site - Propriété `site_url`

> *Description : URL(s) des fiches du site dans BASIAS et/ou dans BASOL ou SIS et/ou dans un observatoire local, lorsqu'elles existent*<br/>*Exemple : http://fiches-risques.brgm.fr/georisques/basias-detaillee/AQI4008059*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)
- Motif : `(?:(?:^|\|)(http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+|)\1+http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+)+$`

#### URL de la fiche de l’ADEME - Propriété `site_ademe_url`

> *Description : URL de la fiche lorsque le site a fait l'objet d'une intervention de l'ADEME*<br/>*Exemple : https://data.ademe.fr/data-fair/api/v1/datasets/srd-ademe/attachments/ILE%20DER_22218_28092020.pdf*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)

#### type de sécurisation - Propriété `site_securite`

> *Description : description du (des) type(s) de sécurisation selon l'article R512-75-1 al. IV code de l'environnement*<br/>*Exemple : interdictions ou limitations d'accès au site*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `évacuation des produits dangereux et déchets présents sur le site`
    - `interdictions ou limitations d'accès au site`
    - `suppression des risques d'incendie et d'explosion`
    - `surveillance des effets de l'installation sur son environnement`
    - `mesures de gestion de pollution ou restrictions temporaires`
    - `existence d'une attestation de mise en sécurité`
    - `inconnu`
    - `autre`
    - `sans objet`

#### occupation du site - Propriété `site_occupation`

> *Description : description de l'occupation du site*<br/>*Exemple : partiellement inoccupé*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `totalement inoccupé`
    - `partiellement inoccupé`
    - `occupation transitoire ou temporaire`
    - `occupation illicite supposée`
    - `occupation illicite avérée`
    - `inconnu`
    - `autre`
    - `sans objet`

#### statut du site - Propriété `site_statut`

> *Description : statut du site au regard de son état de friche et d'un éventuel projet de reconversion*<br/>*Exemple : friche avec projet*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `friche potentielle`
    - `friche sans projet`
    - `friche avec projet`
    - `friche reconvertie`
    - `inconnu`
    - `autre`
    - `sans objet`

#### site web d'un éventuel projet sur le site - Propriété `site_projet_url`

> *Description : site web ou adresse mail institutionnelle du porteur de projet de reconversion, le cas échéant*<br/>*Exemple : http://www.reconvtafriche.fr/site_tulipe/laureat2021.html*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)

#### libellé des activités - Propriété `activite_libelle`

> *Description : libellés des ancienne(s) activité(s). Exemple : Extraction de houille|Terrils ou crassier de mines*<br/>*Exemple : Extraction de houille|Terrils ou crassier de mines*
- Valeur optionnelle
- Type : chaîne de caractères

#### code BASIAS des activités - Propriété `activite_code`

> *Description : code(s) BASIAS de(s) ancienne(s) activité(s), suivant la Nomenclature d'activités française de l'INSEE*<br/>*Exemple : B05.10Z|V89.04Z*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)([A-Z]\d\d.\d\d[A-Z]|)\1+[A-Z]\d\d.\d\d[A-Z])+$`

#### année de fin d'activité - Propriété `activite_fin_annee`

> *Description : année de fin d'activité, au format ISO 8601 AAAA*<br/>*Exemple : 1989*
- Valeur optionnelle
- Type : date (format `%Y`)

#### nom de la commune - Propriété `comm_nom`

> *Description : nom de la commune principale d'implantation du site*<br/>*Exemple : CRANSAC*
- Valeur obligatoire
- Type : chaîne de caractères

#### code INSEE de la commune - Propriété `comm_insee`

> *Description : code INSEE de la commune principale d'implantation du site*<br/>*Exemple : 12083*
- Valeur obligatoire
- Type : chaîne de caractères

#### type de bâtiments - Propriété `bati_type`

> *Description : type de bâtiments présents dans le périmètre de la friche*<br/>*Exemple : secteur tertiaire|commercial*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(industriel|commercial|résidentiel|secteur tertiaire|inconnu|autre|sans objet))+$`

#### nombre de bâtiments - Propriété `bati_nombre`

> *Description : nombre de bâtiments présents dans le périmètre de la friche*<br/>*Exemple : 2*
- Valeur optionnelle
- Type : nombre entier

#### surface des bâtiments - Propriété `bati_surface`

> *Description : surface de plancher totale des bâtiments. Unité : m²*<br/>*Exemple : 2400*
- Valeur optionnelle
- Type : nombre entier

#### pollution connue - Propriété `bati_pollution`

> *Description : pollution connue dans les bâtiments*<br/>*Exemple : inconnu*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `amiante`
    - `plomb`
    - `inconnu`
    - `autre`
    - `sans objet`

#### état de vacance - Propriété `bati_vacance`

> *Description : état de vacance des bâtiments*<br/>*Exemple : vacant*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `occupé`
    - `partiellement occupé`
    - `vacant`
    - `inconnu`
    - `autre`
    - `sans objet`

#### présence de bâti patrimonial - Propriété `bati_patrimoine`

> *Description : présence de bâtiment de valeur patrimoniale*<br/>*Exemple : aucun*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `aucun`
    - `présence d'un bâtiment d'intérêt`
    - `présence d'un bâtiment classé`
    - `inconnu`
    - `autre`
    - `sans objet`

#### dégradation des bâtiment - Propriété `bati_etat`

> *Description : état de dégradation des bâtiments*<br/>*Exemple : dégradation moyenne*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `dégradation inexistante ou faible`
    - `dégradation moyenne`
    - `dégradation très importante`
    - `dégradation hétérogène`
    - `inconnu`
    - `autre`
    - `sans objet`

#### première année de construction - Propriété `local_ancien_annee`

> *Description : année de construction du local le plus ancien*<br/>*Exemple : 1976*
- Valeur optionnelle
- Type : date (format `%Y`)

#### dernière année de construction - Propriété `local_recent_annee`

> *Description : année de construction du local le plus récent*<br/>*Exemple : 1987*
- Valeur optionnelle
- Type : date (format `%Y`)

#### type de propriétaire - Propriété `proprio_type`

> *Description : type de propriétaire actuel dans les fichiers fonciers suivant la classification de personne morale niveau 3*<br/>*Exemple : P4a|G1a|Z2b|G1a|M1a|G1a|R2a|R5a|X1a*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)([A-Z]\d[a-z]|)\1+[A-Z]\d[a-z])+$`

#### type de personne - Propriété `proprio_personne`

> *Description : indique s'il s'agit d'une personne physique ou morale*<br/>*Exemple : personne morale*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(personne physique|personne morale|inconnu|autre|sans objet))+$`

#### nom du propriétaire - Propriété `proprio_nom`

> *Description : nom des propriétaires actuels dans les fichiers fonciers, uniquement s'il s'agit de personnes morales*<br/>*Exemple : Commune de Cransac*
- Valeur optionnelle
- Type : chaîne de caractères

#### année de la pollution du sol - Propriété `sol_pollution_annee`

> *Description : année de constatation de la pollution du sol dans BASOL, SIS, ou autre source de données*<br/>*Exemple : 1996*
- Valeur optionnelle
- Type : date (format `%Y`)

#### existence de pollution du sol - Propriété `sol_pollution_existe`

> *Description : existence de pollution du sol*<br/>*Exemple : pollution avérée*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `pollution inexistante`
    - `pollution traitée`
    - `pollution peu probable`
    - `pollution supposée`
    - `pollution avérée`
    - `inconnu`
    - `autre`
    - `sans objet`

#### origine de la pollution du sol - Propriété `sol_pollution_origine`

> *Description : origine de la pollution du sol*<br/>*Exemple : pollution due au fonctionnement de l'installation*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `dépôt de déchets, stockages de produits`
    - `pollution due au fonctionnement de l'installation`
    - `origine accidentelle (transport, transbordement, manipulation,...)`
    - `retombées atmosphériques`
    - `inconnu`
    - `autre`
    - `sans objet`

#### commentaire sur la pollution du sol - Propriété `sol_pollution_commentaire`

> *Description : commentaire décrivant la pollution*<br/>*Exemple : Produits toxiques*
- Valeur optionnelle
- Type : chaîne de caractères

#### fiche de dépollution - Propriété `sol_depollution_fiche`

> *Description : Lien vers une fiche de gestion ou de traitement des pollutions dans BASOL, SIS, ou autre base de données*<br/>*Exemple : https://fiches-risques.brgm.fr/georisques/infosols/instruction/basol?page=xx*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)

#### surface de l'unité foncière - Propriété `unite_fonciere_surface`

> *Description : surface de l'unité foncière, en conformité avec la documentation sur la Table Unifiée du Parcellaire (TUP). Unité : m²*<br/>*Exemple : 16750*
- Valeur optionnelle
- Type : nombre entier

#### liste des parcelles cadastrale - Propriété `unite_fonciere_refcad`

> *Description : Liste des identifiants des parcelles cadastrales de l'unité foncière*<br/>*Exemple : 12083000AH0035|12083000AH0072|12083000AH0279|12083000AH0367*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(\d{8}[0-9A-Z]{2}\d{4}|)\1+\d{8}[0-9A-Z]{2}\d{4})+$`

#### type de zone d'urbanisme - Propriété `urba_zone_type`

> *Description : type de zone d'urbanisme (cf. standard CNIG PLU §3.2 ZONE_URBA : TYPEZONE)*<br/>*Exemple : N*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `U`
    - `AUc`
    - `AUs`
    - `A`
    - `N`
    - `Zc`
    - `ZCa`
    - `ZnC`
    - `RNU`
    - `inconnu`
    - `autre`
    - `sans objet`

#### libellé de la zone d'urbanisme - Propriété `urba_zone_lib`

> *Description : libellé de la zone d'urbanisme (cf. standard CNIG PLU §3.2 ZONE_URBA : LIBELLE)*<br/>*Exemple : Np*
- Valeur optionnelle
- Type : chaîne de caractères

#### forme dominante de la zone - Propriété `urba_zone_formdomi`

> *Description : forme dominante de la zone d'urbanisme (cf. standard CNIG PLU : FORMDOMI)*<br/>*Exemple : 0202*
- Valeur optionnelle
- Type : chaîne de caractères

#### type de document d'urbanisme - Propriété `urba_doc_type`

> *Description : type de document d'urbanisme*<br/>*Exemple : PLUI*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `RNU`
    - `CC`
    - `PLU`
    - `PLUI`
    - `PSMV`
    - `inconnu`
    - `autre`
    - `sans objet`

#### distances d'accès aux réseaux - Propriété `desserte_distance`

> *Description : distances d'accès aux réseaux routier, ferroviaire, fluvial ou maritime*<br/>*Exemple : 2|6|46*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `\d{1,}\|\d{1,}\|\d{1,}`

#### desserte du site - Propriété `desserte_commentaire`

> *Description : appréciation textuelle au sujet de la desserte du site ou, au contraire, de son niveau d'enclavement*<br/>*Exemple : La desserte routière départementale permet les convois exceptionnels*
- Valeur optionnelle
- Type : chaîne de caractères

#### nom de la source - Propriété `source_nom`

> *Description : nom court de la source ayant permis l'identification du site*<br/>*Exemple : BASIAS*
- Valeur obligatoire
- Type : chaîne de caractères

#### URL de la source - Propriété `source_url`

> *Description : URL de la source de l'information, par exemple celui du site web d'un observatoire de friches*<br/>*Exemple : https://www.ecologie.gouv.fr/recyclage-des-friches-441-laureats-des-appels-projets-devoiles*
- Valeur optionnelle
- Type : chaîne de caractères

#### identification du producteur - Propriété `source_producteur`

> *Description : identification du producteur de la donnée. Exemples : Région Occitanie ; DDT des Ardennes ; Appel à projet Fonds Friches ; etc.*<br/>*Exemple : Appel à projet Fond Friche*
- Valeur optionnelle
- Type : chaîne de caractères

#### adresse mail - Propriété `source_contact`

> *Description : adresse mail de la structure ayant fourni l'information sur le site*<br/>*Exemple : fondfriche@ecologie.gouv.fr*
- Valeur optionnelle
- Type : chaîne de caractères

#### coordonnées du centroïde - Propriété `geompoint`

> *Description : coordonnées géographiques du centroïde du site au format WKT*<br/>*Exemple : POINT(49.2527 3.9815)*
- Valeur obligatoire
- Type : chaîne de caractères

#### géométrie surfacique - Propriété `geomsurf`

> *Description : géométrie du périmètre du site au format WKT ([Well_Known-Text](https://fr.wikipedia.org/wiki/Well-known_text)*<br/>*Exemple : POLYGON((49.33 3.95, 49.38 3.89, 49.42 3.96, ...))*
- Valeur optionnelle
- Type : chaîne de caractères
