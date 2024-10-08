<MenuSchema />

## sites-economiques-site-eco

Classe SITE-ECO du standard CNIG Sites Economiques

Spécification du fichier d'échange conforme au standard CNIG Sites Economiques pour la classe SITE-ECO : Site économique

- Schéma créé le : 22/08/2023
- Site web : https://github.com/cnigfr/schema-sites-economiques
- Version : v1.0.0
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"N/A"`
- Clé primaire : `site_id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [site_id](#identifiant-du-site-propriete-site-id) | chaîne de caractères  | Oui |
| [pole_id](#identifiant-du-pole-propriete-pole-id) | chaîne de caractères  | Oui |
| [site_nom](#nom-du-site-propriete-site-nom) | chaîne de caractères  | Oui |
| [site_type](#type-de-site-propriete-site-type) | chaîne de caractères  | Oui |
| [site_vocadomi](#vocation-dominante-propriete-site-vocadomi) | chaîne de caractères  | Oui |
| [site_etat](#etat-du-site-propriete-site-etat) | chaîne de caractères  | Oui |
| [site_surf_brute](#superficie-totale-propriete-site-surf-brute) | nombre réel  | Oui |
| [site_surf_utile](#superficie-utile-propriete-site-surf-utile) | nombre réel  | Oui |
| [site_creation_date](#annee-de-creation-propriete-site-creation-date) | date (format `%Y`) | Non |
| [site_identif_date](#date-d-identification-propriete-site-identif-date) | date (format `%Y-%m-%d`) | Oui |
| [site_actu_date](#date-d'actualisation-propriete-site-actu-date) | date (format `%Y-%m-%d`) | Oui |
| [source_producteur](#producteur-de-la-donnee-propriete-source-producteur) | chaîne de caractères  | Non |
| [site_description](#commentaire-libre-propriete-site-description) | chaîne de caractères  | Non |
| [site_quali_territoire](#labellisation-territoriale-propriete-site-quali-territoire) | chaîne de caractères  | Non |
| [site_evol_urba](#type-d'urbanisation-propriete-site-evol-urba) | chaîne de caractères  | Non |
| [site_url](#page-web-propriete-site-url) | chaîne de caractères  | Non |
| [site_epci_nom](#nom-de-l'epci-competent-propriete-site-epci-nom) | chaîne de caractères  | Oui |
| [site_epci_siren](#code-siren-de-l'epci-competent-propriete-site-epci-siren) | chaîne de caractères  | Oui |
| [site_comm_nom](#nom-de-la-commune-propriete-site-comm-nom) | chaîne de caractères  | Oui |
| [site_comm_insee](#code-insee-de-la-commune-propriete-site-comm-insee) | chaîne de caractères  | Oui |
| [site_moa_type](#type-de-maitrise-d-ouvrage-propriete-site-moa-type) | chaîne de caractères  | Oui |
| [site_moa_nom](#nom-du-gestionnaire-propriete-site-moa-nom) | chaîne de caractères  | Non |
| [site_moa_amngt](#nom-de-l'amenageur-propriete-site-moa-amngt) | chaîne de caractères  | Non |
| [site_moa_comm](#nom-du-vendeur-propriete-site-moa-comm) | chaîne de caractères  | Non |
| [site_uf_nbre](#nombre-d-unites-foncieres-propriete-site-uf-nbre) | nombre réel  | Non |
| [site_uf_vacant_nbre](#nombre-d-unites-foncieres-vacantes-propriete-site-uf-vacant-nbre) | nombre réel  | Non |
| [site_taux_vacance](#taux-de-vacance-propriete-site-taux-vacance) | nombre réel  | Non |
| [site_uf_bati_nbre](#nombre-d-unites-foncieres-baties-propriete-site-uf-bati-nbre) | nombre réel  | Non |
| [site_nb_etab](#nombre-d'etablissements-propriete-site-nb-etab) | nombre réel  | Non |
| [site_nb_emploi](#nombre-d-emplois-propriete-site-nb-emploi) | nombre réel  | Non |
| [site_geomsurf](#geometrie-propriete-site-geomsurf) | GéoJSON  | Oui |
| [site_geompoint](#centroide-propriete-site-geompoint) | point géographique (format `default`) | Non |
| [site_media](#medias-propriete-site-media) | chaîne de caractères  | Non |
| [site_surf_comm_dispo](#surface-commercialisable-propriete-site-surf-comm-dispo) | nombre réel  | Non |
| [site_surf_projet](#surface-reservee-propriete-site-surf-projet) | nombre réel  | Non |
| [site_voca_industrielle](#presence-activite-industrielle-propriete-site-voca-industrielle) | chaîne de caractères  | Non |
| [site_voca_commerciale](#presence-activite-commerciale-propriete-site-voca-commerciale) | chaîne de caractères  | Non |
| [site_voca_tertiaire](#presence-activite-tertiaire-propriete-site-voca-tertiaire) | chaîne de caractères  | Non |
| [site_voca_artisanale](#presence-activite-artisanale-propriete-site-voca-artisanale) | chaîne de caractères  | Non |
| [site_voca_touristique](#presence-activite-touristique-propriete-site-voca-touristique) | chaîne de caractères  | Non |
| [site_voca_portuaire](#presence-activite-portuaire-propriete-site-voca-portuaire) | chaîne de caractères  | Non |
| [site_voca_aeroportuaire](#presence-activite-aeroportuaire-propriete-site-voca-aeroportuaire) | chaîne de caractères  | Non |
| [reseau_eau_pluviale](#presence-reseau-d-eau-pluviale-propriete-reseau-eau-pluviale) | chaîne de caractères  | Non |
| [reseau_eau_potable](#presence-reseau-d-eau-potable-propriete-reseau-eau-potable) | chaîne de caractères  | Non |
| [reseau_assainissement](#presence-reseau-d-assainissement-propriete-reseau-assainissement) | chaîne de caractères  | Non |
| [reseau_gaz](#presence-reseau-de-gaz-propriete-reseau-gaz) | chaîne de caractères  | Non |
| [reseau_electrique](#presence-reseau-electrique-propriete-reseau-electrique) | chaîne de caractères  | Non |
| [reseau_fibre_optique](#presence-reseau-de-fibre-optique-propriete-reseau-fibre-optique) | chaîne de caractères  | Non |
| [reseau_fret_ferroviaire](#presence-d'une-ite-propriete-reseau-fret-ferroviaire) | chaîne de caractères  | Non |
| [reseau_fluvial](#presence-d'un-reseau-fluvial-propriete-reseau-fluvial) | chaîne de caractères  | Non |
| [desserte_tc](#presence-de-transport-en-commun-propriete-desserte-tc) | chaîne de caractères  | Non |
| [desserte_route_nom](#desserte-routiere-principale-propriete-desserte-route-nom) | chaîne de caractères  | Non |
| [autoroute_nom](#autoroute-la-plus-proche-propriete-autoroute-nom) | chaîne de caractères  | Non |
| [autoroute_echang_dist](#echangeur-le-plus-proche-propriete-autoroute-echang-dist) | nombre réel  | Non |
| [gare_nom](#gare-de-voyageurs-propriete-gare-nom) | chaîne de caractères  | Non |
| [gare_dist](#distance-a-la-gare-de-voyageurs-propriete-gare-dist) | nombre réel  | Non |
| [gare_fret_nom](#gare-de-fret-propriete-gare-fret-nom) | chaîne de caractères  | Non |
| [gare_fret_dist](#distance-a-la-gare-de-fret-propriete-gare-fret-dist) | nombre réel  | Non |
| [aeroport_nom](#aeroport-propriete-aeroport-nom) | chaîne de caractères  | Non |
| [aeroport_dist](#distance-a-l'aeroport-propriete-aeroport-dist) | nombre réel  | Non |
| [port_nom](#port-propriete-port-nom) | chaîne de caractères  | Non |
| [port_dist](#distance-au-port-propriete-port-dist) | nombre réel  | Non |

#### identifiant du site - Propriété `site_id`

> *Description : identifiant du site économique*<br/>*Exemple : 80024_SITE-ECO_00001*
- Valeur obligatoire
- Type : chaîne de caractères

#### identifiant du pôle - Propriété `pole_id`

> *Description : identifiant de l’éventuel pôle d’appartenance*<br/>*Exemple : 80024_POLE-ECO_00162*
- Valeur obligatoire
- Type : chaîne de caractères

#### nom du site - Propriété `site_nom`

> *Description : nom du site économique*<br/>*Exemple : ZAC Les Bornes du Temps*
- Valeur obligatoire
- Type : chaîne de caractères

#### type de site - Propriété `site_type`

> *Description : type de site économique*<br/>*Exemple : Zone d'activité économique*
- Valeur obligatoire
- Type : chaîne de caractères

#### vocation dominante - Propriété `site_vocadomi`

> *Description : vocation dominante constatée du site économique*<br/>*Exemple : entrepôts, logistique*
- Valeur obligatoire
- Type : chaîne de caractères

#### état du site - Propriété `site_etat`

> *Description : état du site économique (en projet, création, etc.)*<br/>*Exemple : existant et actif*
- Valeur obligatoire
- Type : chaîne de caractères

#### superficie totale - Propriété `site_surf_brute`

> *Description : superficie totale du site économique en hectare*<br/>*Exemple : 37.2*
- Valeur obligatoire
- Type : nombre réel

#### superficie utile - Propriété `site_surf_utile`

> *Description : Surface (en hectare) destinée à accueillir les implantations d'activités*<br/>*Exemple : 35.3*
- Valeur obligatoire
- Type : nombre réel

#### année de création - Propriété `site_creation_date`

> *Description : année de création du site économique*<br/>*Exemple : 2015*
- Valeur optionnelle
- Type : date (format `%Y`)

#### date d'identification - Propriété `site_identif_date`

> *Description : date d'identification du site économique*<br/>*Exemple : 2016-03-26*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### date d’actualisation - Propriété `site_actu_date`

> *Description : date de dernière actualisation des informations sur le site économique.*<br/>*Exemple : 2023-08-29*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### producteur de la donnée - Propriété `source_producteur`

> *Description : identification du producteur de la donnée*<br/>*Exemple : DDT de la Somme*
- Valeur optionnelle
- Type : chaîne de caractères

#### commentaire libre - Propriété `site_description`

> *Description : commentaire libre contenant des infos descriptives du site économique*<br/>*Exemple : Une extension de la ZAC des Bornes du Temps existe : ZAC Les Bornes du Temps 2*
- Valeur optionnelle
- Type : chaîne de caractères

#### labellisation territoriale - Propriété `site_quali_territoire`

> *Description : qualification ou labellisation territoriale ou régionale*<br/>*Exemple : Site clé en main*
- Valeur optionnelle
- Type : chaîne de caractères

#### type d’urbanisation - Propriété `site_evol_urba`

> *Description : type d'urbanisation (extension, renouvellement urbain)*<br/>*Exemple : extension*
- Valeur optionnelle
- Type : chaîne de caractères

#### page web - Propriété `site_url`

> *Description : URL de la page web descriptive du site économique*<br/>*Exemple : https://les-bornes-du-temps/index.html*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(https?)://[^\s/$.?#].[^\s]*$`

#### nom de l’EPCI compétent - Propriété `site_epci_nom`

> *Description : nom de l'EPCI autorité compétente de la ZAE*<br/>*Exemple : Communauté de Communes Nièvre et Somme*
- Valeur obligatoire
- Type : chaîne de caractères

#### code SIREN de l’EPCI compétent - Propriété `site_epci_siren`

> *Description : code SIREN de l'EPCI autorité compétente de la ZAE*<br/>*Exemple : 200071223*
- Valeur obligatoire
- Type : chaîne de caractères

#### nom de la commune - Propriété `site_comm_nom`

> *Description : nom de la commune principale d’implantation du site économique*<br/>*Exemple : Argoeuves*
- Valeur obligatoire
- Type : chaîne de caractères

#### code INSEE de la commune - Propriété `site_comm_insee`

> *Description : code INSEE de la commune principale d’implantation du site économique*<br/>*Exemple : 80024*
- Valeur obligatoire
- Type : chaîne de caractères

#### type de maîtrise d'ouvrage - Propriété `site_moa_type`

> *Description : type de maîtrise d'ouvrage*<br/>*Exemple : EPCI*
- Valeur obligatoire
- Type : chaîne de caractères

#### nom du gestionnaire - Propriété `site_moa_nom`

> *Description : nom de la maîtrise d'ouvrage et/ou gestionnaire du site économique*<br/>*Exemple : Citadys*
- Valeur optionnelle
- Type : chaîne de caractères

#### nom de l’aménageur - Propriété `site_moa_amngt`

> *Description : nom de la maîtrise d'ouvrage en charge de l'aménagement*<br/>*Exemple : SA Somme Aménagement Construction*
- Valeur optionnelle
- Type : chaîne de caractères

#### nom du vendeur - Propriété `site_moa_comm`

> *Description : nom de la maîtrise d'ouvrage en charge la commercialisation*<br/>*Exemple : CommUrbanys*
- Valeur optionnelle
- Type : chaîne de caractères

#### nombre d'unités foncières - Propriété `site_uf_nbre`

> *Description : nombre d'unités foncières du site économique*<br/>*Exemple : 15*
- Valeur optionnelle
- Type : nombre réel

#### nombre d'unités foncières vacantes - Propriété `site_uf_vacant_nbre`

> *Description : nombre d'unités foncières vacantes du site économique*<br/>*Exemple : 2*
- Valeur optionnelle
- Type : nombre réel

#### taux de vacance - Propriété `site_taux_vacance`

> *Description : taux de vacance de la ZAE suivant article L318-8-2 CU*<br/>*Exemple : 13*
- Valeur optionnelle
- Type : nombre réel

#### nombre d'unités foncières bâties - Propriété `site_uf_bati_nbre`

> *Description : nombre d'unités foncières bâties*<br/>*Exemple : 9*
- Valeur optionnelle
- Type : nombre réel

#### nombre d’établissements - Propriété `site_nb_etab`

> *Description : nombre d'établissements d'activité économique dans le site économique*<br/>*Exemple : 10*
- Valeur optionnelle
- Type : nombre réel

#### nombre d'emplois - Propriété `site_nb_emploi`

> *Description : estimation du nombre d'emplois du site économique*<br/>*Exemple : 856*
- Valeur optionnelle
- Type : nombre réel

#### géométrie - Propriété `site_geomsurf`

> *Description : multi géométries surfaciques du périmètre du site économique au format geojson (https://specs.frictionlessdata.io//table-schema/#geojson)*<br/>*Exemple : {'type': 'Polygon', 'coordinates': [[[30.0, 10.0], [40.0, 40.0], [20.0, 40.0], [10.0, 20.0], [30.0, 10.0]]]}*
- Valeur obligatoire
- Type : GéoJSON

#### centroïde - Propriété `site_geompoint`

> *Description : coordonnées géographiques du centroïde du site économique au format geopoint (https://specs.frictionlessdata.io//table-schema/#geopoint)*<br/>*Exemple : 3.9815, 49.2527*
- Valeur optionnelle
- Type : point géographique (format `default`)

#### médias - Propriété `site_media`

> *Description : URL pointant vers un (des) média(s) : photo, vidéo, etc. du site éco.*<br/>*Exemple : https://les-bornes-du-temps/futur-media/index.html*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(https?)://[^\s/$.?#].[^\s]*$`

#### surface commercialisable - Propriété `site_surf_comm_dispo`

> *Description : surface disponible à la commercialisation, en hectare*<br/>*Exemple : 5.7*
- Valeur optionnelle
- Type : nombre réel

#### surface réservée - Propriété `site_surf_projet`

> *Description : surface réservée pour des projets en cours, en hectare*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre réel

#### présence activité industrielle - Propriété `site_voca_industrielle`

> *Description : le site comprend ('oui' ou 'non') au moins une activité industrielle*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### présence activité commerciale - Propriété `site_voca_commerciale`

> *Description : le site comprend ('oui' ou 'non') au moins une activité commerciale*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### présence activité tertiaire - Propriété `site_voca_tertiaire`

> *Description : le site comprend ('oui' ou 'non') au moins une activité tertiaire*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### présence activité artisanale - Propriété `site_voca_artisanale`

> *Description : le site comprend ('oui' ou 'non') au moins une activité artisanale*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### présence activité touristique - Propriété `site_voca_touristique`

> *Description : le site comprend ('oui' ou 'non') au moins une activité touristique*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### présence activité portuaire - Propriété `site_voca_portuaire`

> *Description : le site comprend ('oui' ou 'non') au moins une activité portuaire*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### présence activité aéroportuaire - Propriété `site_voca_aeroportuaire`

> *Description : le site comprend ('oui' ou 'non') au moins une activité aéroportuaire*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### présence réseau d'eau pluviale - Propriété `reseau_eau_pluviale`

> *Description : le site est équipé ('oui' ou 'non') d'un réseau d'eau pluviale*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### présence réseau d'eau potable - Propriété `reseau_eau_potable`

> *Description : le site est équipé ('oui' ou 'non') d'un réseau d'eau potable*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### présence réseau d'assainissement - Propriété `reseau_assainissement`

> *Description : le site est équipé ('oui' ou 'non') d'un réseau d'assainissement*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### présence réseau de gaz - Propriété `reseau_gaz`

> *Description : le site est équipé ('oui' ou 'non') d'un réseau de gaz*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### présence réseau électrique - Propriété `reseau_electrique`

> *Description : le site est équipé ('oui' ou 'non') d'un réseau électrique*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### présence réseau de fibre optique - Propriété `reseau_fibre_optique`

> *Description : le site est équipé ('oui' ou 'non') d'un réseau de fibre optique*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### présence d’une ITE - Propriété `reseau_fret_ferroviaire`

> *Description : présence ('oui' ou 'non') d'une Installation Terminale Embranchée (ITE)*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### présence d’un réseau fluvial - Propriété `reseau_fluvial`

> *Description : présence ('oui' ou 'non') d'un quai fluvial*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### présence de transport en commun - Propriété `desserte_tc`

> *Description : présence ('oui' ou 'non') d’une desserte de transport en commun*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### desserte routière principale - Propriété `desserte_route_nom`

> *Description : libellé de la desserte routière principale*<br/>*Exemple : D378*
- Valeur optionnelle
- Type : chaîne de caractères

#### autoroute la plus proche - Propriété `autoroute_nom`

> *Description : libellé de l'autoroute la plus proche*<br/>*Exemple : A56*
- Valeur optionnelle
- Type : chaîne de caractères

#### échangeur le plus proche - Propriété `autoroute_echang_dist`

> *Description : distance de l'échangeur autoroutier le plus proche*<br/>*Exemple : 17*
- Valeur optionnelle
- Type : nombre réel

#### gare de voyageurs - Propriété `gare_nom`

> *Description : nom de la gare de voyageurs la plus proche*<br/>*Exemple : Abbeville*
- Valeur optionnelle
- Type : chaîne de caractères

#### distance à la gare de voyageurs - Propriété `gare_dist`

> *Description : distance (en km) de la gare de voyageurs la plus proche, par la route*<br/>*Exemple : 15*
- Valeur optionnelle
- Type : nombre réel

#### gare de fret - Propriété `gare_fret_nom`

> *Description : nom de la gare de fret la plus proche*<br/>*Exemple : Abbeville*
- Valeur optionnelle
- Type : chaîne de caractères

#### distance à la gare de fret - Propriété `gare_fret_dist`

> *Description : distance (en km) de la gare de fret la plus proche, par la route*<br/>*Exemple : 15*
- Valeur optionnelle
- Type : nombre réel

#### aéroport - Propriété `aeroport_nom`

> *Description : nom de l'aéroport le plus proche*<br/>*Exemple : Amiens*
- Valeur optionnelle
- Type : chaîne de caractères

#### distance à l’aéroport - Propriété `aeroport_dist`

> *Description : distance (en km) de l'aéroport le plus proche, par la route*<br/>*Exemple : 46*
- Valeur optionnelle
- Type : nombre réel

#### port - Propriété `port_nom`

> *Description : nom du port maritime ou fluvial le plus proche*<br/>*Exemple : Ailly-sur-Somme*
- Valeur optionnelle
- Type : chaîne de caractères

#### distance au port - Propriété `port_dist`

> *Description : distance (en km) du port maritime ou fluvial le plus proche, par la route*<br/>*Exemple : 4*
- Valeur optionnelle
- Type : nombre réel
