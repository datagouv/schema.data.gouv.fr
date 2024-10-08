<MenuSchema />

## arrete-permanent-circulation

Schéma des arrêtés permanents de circulation

Spécification du fichier d'échange relatif aux arrêtés permanents de circulation gérés par les collectivités.

- Schéma créé le : 30/04/2021
- Site web : https://github.com/CEREMA/schema-arrete-circulation
- Version : 0.1.1
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"NC"`, `"N/A"`
- Clé primaire : `ID`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [ID](#identifiant-de-l-entite-propriete-id) | chaîne de caractères  | Oui |
| [COLL_NOM](#nom-de-la-collectivite-propriete-coll-nom) | chaîne de caractères  | Oui |
| [COLL_SIRET](#code-siret-de-la-collectivite-propriete-coll-siret) | chaîne de caractères  | Non |
| [ARR_REF](#reference-de-l-arrete-propriete-arr-ref) | chaîne de caractères  | Oui |
| [ARR_OBJET](#objet-de-l-arrete-propriete-arr-objet) | chaîne de caractères  | Oui |
| [ARR_CONSIDERANT](#considerant-de-l-arrete-propriete-arr-considerant) | chaîne de caractères  | Non |
| [ARR_DATE_CREATION](#date-de-creation-de-l-arrete-propriete-arr-date-creation) | date (format `%Y-%m-%d`) | Oui |
| [ARR_EST_MAJ](#arrete-mis-a-jour-propriete-arr-est-maj) | booléen  | Oui |
| [ARR_INSEE](#code-insee-propriete-arr-insee) | chaîne de caractères  | Oui |
| [ARR_URL](#url-d-acces-de-l-arrete-propriete-arr-url) | chaîne de caractères (format `uri`) | Non |
| [REGL_ARTICLE](#article-du-reglement-propriete-regl-article) | nombre entier  | Non |
| [REGL_SOUS_ARTICLE](#sous-article-du-reglement-propriete-regl-sous-article) | chaîne de caractères  | Non |
| [REGL_MODALITE](#propriete-regl-modalite) | chaîne de caractères  | Oui |
| [ZONE_TYPE](#propriete-zone-type) | chaîne de caractères  | Non |
| [ZONE_REF](#nom-ou-identifiant-de-la-zone-associee-a-la-reglementation-propriete-zone-ref) | chaîne de caractères  | Non |
| [VEH_TYPE](#propriete-veh-type) | chaîne de caractères  | Non |
| [VEH_PTAC](#poids-total-autorise-en-charge-propriete-veh-ptac) | nombre réel  | Non |
| [VEH_LONG](#longueur-du-vehicule-propriete-veh-long) | nombre réel  | Non |
| [VEH_LARG](#largeur-du-largeur-propriete-veh-larg) | nombre réel  | Non |
| [VEH_HAUT](#largeur-du-largeur-propriete-veh-haut) | nombre réel  | Non |
| [VEH_USAGE](#type-d-usage-propriete-veh-usage) | chaîne de caractères  | Non |
| [VEH_MOTOR](#type-de-motorisation-propriete-veh-motor) | chaîne de caractères  | Non |
| [VEH_CQA](#vignettes-crit-air-propriete-veh-cqa) | chaîne de caractères  | Non |
| [PERIODE_DEBUT](#date-d-entree-en-vigueur-des-restrictions-propriete-periode-debut) | date (format `%Y-%m-%d`) | Non |
| [PERIODE_JH](#jours-et-heures-de-circulation-propriete-periode-jh) | chaîne de caractères  | Non |
| [SECTION_VOIE](#nom-de-la-voie-propriete-section-voie) | chaîne de caractères  | Oui |
| [SECTION_SENS](#direction-ou-sens-de-circulation-propriete-section-sens) | chaîne de caractères  | Non |
| [SECTION_DEBUT_POINT](#debut-de-la-section-propriete-section-debut-point) | point géographique (format `default`) | Non |
| [SECTION_DEBUT_REF](#debut-de-la-section-(texte)-propriete-section-debut-ref) | chaîne de caractères  | Non |
| [SECTION_FIN_POINT](#fin-de-la-section-propriete-section-fin-point) | point géographique (format `default`) | Non |
| [SECTION_FIN_REF](#fin-de-la-section-(texte)-propriete-section-fin-ref) | chaîne de caractères  | Non |
| [INTERV_DUREE](#duree-maximale-d-intervention-propriete-interv-duree) | heure  | Non |
| [INTERV_HMAX](#heure-maximale-d-intervention-propriete-interv-hmax) | heure  | Non |
| [GEOM_JSON](#geometrie-au-format-geojson-propriete-geom-json) | GéoJSON (format `default`) | Non |
| [GEOM_WKT](#geometrie-au-format-wkt-propriete-geom-wkt) | chaîne de caractères  | Non |
| [GEOM_SOURCE](#source-de-la-geometrie-propriete-geom-source) | chaîne de caractères  | Non |

#### Identifiant de l'entité - Propriété `ID`

> *Description : Il s'agit de l'identifiant de l'entité (ou ligne du tableau). Ce dernier doit être unique. L'entité élémentaire correspond à une voie entière règlementée (par ex. `Avenue Philippe Solari`) ou une portion de celle-ci (voir les champs `SECTION_DEBUT` et `SECTION_FIN`). L'identifiant peut tout simplement être auto-incrémenté (1, 2 ou 3,...). Il peut correspondre à la valeur `osm_id` de la voie règlementée (par exemple, `133`). Il peut également être un identifiant propre à une structure ou à une autre base de données (identifiant issu de la BDTOPO IGN, par exemple). [Vous pouvez créer des identifiants grâce à l'application Heidi d'Etalab](https://heidi.app.etalab.studio/).*<br/>*Exemple : 133-3*
- Valeur obligatoire
- Type : chaîne de caractères

#### Nom de la collectivité - Propriété `COLL_NOM`

> *Description : Nom de la collectivité.*<br/>*Exemple : Commune d'Aix-en-Provence*
- Valeur obligatoire
- Type : chaîne de caractères

#### Code SIRET de la collectivité - Propriété `COLL_SIRET`

> *Description : Identifiant du [Système d'Identification du Répertoire des Etablissements](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_%C3%A9tablissements) (SIRET) de la collectivité sur le territoire de laquelle sont situés les équipements collectifs publics répertoriés dans le jeu de données. Il est composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant.*<br/>*Exemple : 22940028800010*
- Valeur optionnelle
- Type : chaîne de caractères

#### Référence de l'arrêté - Propriété `ARR_REF`

> *Description : Référence ou numéro de l'arrêté auquel se réfère la règlementation. Si l'arrêté a été mis à jour, la référence doit être celle de l'arrêté mis à jour et non celle de l'arrêté originel. Si l'arrêté ne possède pas de référence, mettre la valeur `N/C`*<br/>*Exemple : AP-13090-12*
- Valeur obligatoire
- Type : chaîne de caractères

#### Objet de l'arrêté - Propriété `ARR_OBJET`

> *Description : Objet ou titre de l'arrêté. Mettre `N/C` si l'arrêté ne comprend pas d'objet.*<br/>*Exemple : Arrêté règlementant la circulation dans le quartier Mazarin et du palais de Justice*
- Valeur obligatoire
- Type : chaîne de caractères

#### Considérant de l'arrêté - Propriété `ARR_CONSIDERANT`

> *Description : Considérant est le justificatif de la mise en place de la règlementation*<br/>*Exemple : Considérant la dangerosité que représente le trafic des PL aux abords des groupes scolaires*
- Valeur optionnelle
- Type : chaîne de caractères

#### Date de création de l'arrêté - Propriété `ARR_DATE_CREATION`

> *Description : Date de création ou de mise à jour de l'arrêté, au format ISO 8601 AAAA-MM-DD.*<br/>*Exemple : 2021-04-30*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### Arrêté mis à jour ? - Propriété `ARR_EST_MAJ`

> *Description : Spécifie si l'arrêté a été l'objet d'une mise à jour. Dans ce cas, remplir la nouvelle référence de l'arrêté dans `ARR_REF`.*<br/>*Exemple : TRUE*
- Valeur obligatoire
- Type : booléen

#### Code INSEE - Propriété `ARR_INSEE`

> *Description : Code INSEE de la commune sur laquelle s'applique l'arrêté*<br/>*Exemple : 13090*
- Valeur obligatoire
- Type : chaîne de caractères
- Entre 5 et 5 caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### URL d'accès de l'arrêté - Propriété `ARR_URL`

> *Description : Adresse internet par laquelle accéder à l'arrêté, et donc au règlement.*<br/>*Exemple : https://carte.st-paul-les-dax.fr/wp-content/uploads/2020/06/AM-10248.pdf*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)

#### Article du règlement - Propriété `REGL_ARTICLE`

> *Description : N° de l'article associé au règlement lorsqu'il existe*<br/>*Exemple : 4*
- Valeur optionnelle
- Type : nombre entier

#### Sous-article du règlement - Propriété `REGL_SOUS_ARTICLE`

> *Description : Un article peut se décomposer en plusieurs sous-articles, contenant chacun une règlementation particulière. Ces sous-articles ont des numérotations.*<br/>*Exemple : 4 bis*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `REGL_MODALITE`

> *Description : Modalité*<br/>*Exemple : Autorise*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Autorise`
    - `Interdit`

#### Propriété `ZONE_TYPE`

> *Description : Type de zone*<br/>*Exemple : Quartier*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Arrondissement`
    - `Commune entière`
    - `Zone à Faible Émission`
    - `Zone IRIS INSEE`
    - `Aire piétonne`

#### Nom ou identifiant de la zone associée à la règlementation - Propriété `ZONE_REF`

> *Description : Nom ou identifiant de la zone associée à la règlementation (nom du quartier, arrondissement, identifiant ZFE, identifiant IRIS...).*<br/>*Exemple : Quartier Mazarin*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `VEH_TYPE`

> *Description : Type de véhicule*<br/>*Exemple : Poids lourds|Véhicules utilitaires légers*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|,)^(Poids lourds|Véhicules utilitaires légers|Vélo-cargos|Tous véhicules))+$`

#### Poids total autorisé en charge - Propriété `VEH_PTAC`

> *Description : Poids total autorisé en charge, exprimé en tonnes.*<br/>*Exemple : 7.5*
- Valeur optionnelle
- Type : nombre réel
- Valeur inférieure à : 45

#### Longueur du véhicule - Propriété `VEH_LONG`

> *Description : Longueur maximale exprimée en mètres.*<br/>*Exemple : 6.5*
- Valeur optionnelle
- Type : nombre réel
- Valeur inférieure à : 30

#### Largeur du Largeur - Propriété `VEH_LARG`

> *Description : Longueur maximale exprimée en mètres.*<br/>*Exemple : 3.5*
- Valeur optionnelle
- Type : nombre réel
- Valeur inférieure à : 6

#### Largeur du Largeur - Propriété `VEH_HAUT`

> *Description : Longueur maximale exprimée en mètres.*<br/>*Exemple : 2.5*
- Valeur optionnelle
- Type : nombre réel
- Valeur inférieure à : 6

#### Type d'usage - Propriété `VEH_USAGE`

> *Description : Type d'usage du véhicule. Séparer les valeurs par le caractère '|'.*<br/>*Exemple : Bennes à ordures ménagères|Véhicules de police*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|,)(Autocars|Citernes|Convois funéraires|Bennes à ordures ménagères|Commerçant nomade|Commerçant sédentaire|Desserte locale : déménageur|Livraison|Poids lourds d'urgence|Professions médicales|Riverains|Services publics|Taxis|Transport de carburant|Transport de denrées animales ou végétales|Transport de fonds|Transport de gaz|Transport de matières dangereuses|Transports en commun|Véhicules d'approvisionnement des marchés|Véhicules effectuant du transport exceptionnel au sens de l'article R.433-1 du code de la route et munis d'une autorisation préfectorale|Véhicules de police|Véhicules de secours|Véhicules de transport de matériaux|Véhicules de travaux|Véhicules municipaux|Véhicules munis d'une autorisation|Véhicules porte-voitures|Voitures de transport avec chauffeur))+$`

#### Type de motorisation - Propriété `VEH_MOTOR`

> *Description : Type de motorisation du véhicule. Séparer les valeurs par le caractère '|'.*<br/>*Exemple : Électrique|Hydrogène*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|,)(Electrique|Gaz Naturel pour Véhicules|Hydrogène))+$`

#### Vignettes crit'air - Propriété `VEH_CQA`

> *Description : Vignettes crit'air. Voir la [classification des vignettes Crit'Air](https://www.certificat-air.gouv.fr/docs/tableaux_classement.pdf) sur le site [certificat-air.gouv.fr](https://www.certificat-air.gouv.fr). Séparer les étiquettes CQA par le caractère '|'. 'NC' signifie que la valeur n'a pas été renseignée.*<br/>*Exemple : 1|2|3*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|,)(100% électrique et Véhicules à hydrogène|1|2|3|4|5|Véhicule non classé))+$`

#### Date d'entrée en vigueur des restrictions - Propriété `PERIODE_DEBUT`

> *Description : Date d'entrée en vigueur des restrictions (en particulier pour les Zones à Faible Émission),, au format ISO 8601 AAAA-MM-DD.*<br/>*Exemple : 2021-04-30*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### Jours et heures de circulation - Propriété `PERIODE_JH`

> *Description : Jours et heures de circulation autorisés pour la circulation exprimés selon le format OpeningHours d'OpenStreetMap ([https://wiki.openstreetmap.org/wiki/Key:opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours)). Ce format permet d'indiquer les week-ends (we), les jours fériés (PH) et les vacances scolaires (SH). Par exemple `Mo-Fr 09:00-17:00; PH 10:00-12:00; PH Su off` signifie : 'ouverture du lundi au vendredi de 9h à 17h sauf les jours fériés où l'ouverture est de 10h à 12h, à l'exception des jours fériés tombant un dimanche'*<br/>*Exemple : Mo-Fr 08:00-12:00,13:00-17:30; Sa 08:00-12:00; PH off*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(.*?)((\d{1,2}:\d{2})-(\d{1,2}:\d{2})|24/7)`

#### Nom de la voie - Propriété `SECTION_VOIE`

> *Description : Nom de la voie associée à la section règlementée. 'NC' si application à une commune, une ZFE (etc...). Voir pour cela le champ `ZONE_TYPE`.*<br/>*Exemple : Avenue Philippe Solari*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[a-zA-Z0-9\-\'\s\d\u00C0-\u00FF]+$`

#### Direction ou sens de circulation - Propriété `SECTION_SENS`

> *Description : Direction ou sens de circulation associé à la règlementation. Pair : concerne la circulation le long des adresses à chiffre pair. `Nord` signifie vers le Nord, soit "vers le haut".*<br/>*Exemple : Deux côtés*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Pair`
    - `Impair`
    - `Nord`
    - `Sud`
    - `Est`
    - `Ouest`
    - `Deux sens`

#### Début de la section - Propriété `SECTION_DEBUT_POINT`

> *Description : Coordonnées du point indiquant l'endroit où commence la règlementation sur la voie. A noter sous la forme 'long, lat', par exemple '43.53591,5.42101' ou '43.53591, 5.42101'. 5 ou 6 décimales sont conseillées.*
- Valeur optionnelle
- Type : point géographique (format `default`)

#### Début de la section (texte) - Propriété `SECTION_DEBUT_REF`

> *Description : Indication de l'endroit à partir duquel la règlementation s'applique, telle qu'écrite dans l'arrêté. Par exemple, une adresse ou une indication textuelle : 'au croisement de la rue', 'depuis le rond-point'. Les coordonnées GPS, elles, doivent être indiquées dans le champ `SECTION_DEBUT_POINT`.*<br/>*Exemple : 22 avenue Philippe Solari*
- Valeur optionnelle
- Type : chaîne de caractères

#### Fin de la section - Propriété `SECTION_FIN_POINT`

> *Description : Point indiquant l'endroit où commence la règlementation sur la voie. A noter sous la forme 'long, lat', par exemple '43.53591,5.42101' ou '43.53591, 5.42101'. 5 ou 6 décimales sont conseillées.*
- Valeur optionnelle
- Type : point géographique (format `default`)

#### Fin de la section (texte) - Propriété `SECTION_FIN_REF`

> *Description : Indication de l'endroit jusqu'auquel la règlementation s'applique, telle qu'écrite dans l'arrêté. Par exemple, une adresse ou une indication textuelle : 'au croisement de la rue', 'depuis le rond-point'. Les coordonnées GPS, elles, doivent être indiquées dans le champ `SECTION_DEBUT_POINT`.*<br/>*Exemple : Croisement avec la rue Gaston de Saporta*
- Valeur optionnelle
- Type : chaîne de caractères

#### Durée maximale d'intervention - Propriété `INTERV_DUREE`

> *Description : Durée maximale d'intervention (au niveau d'une aire piétonne, par exemple).*<br/>*Exemple : 03:00:00*
- Valeur optionnelle
- Type : heure

#### Heure maximale d'intervention - Propriété `INTERV_HMAX`

> *Description : Heure max à partir de laquelle les véhicules doivent quitter l'aire piétonne.*<br/>*Exemple : 22:00:00*
- Valeur optionnelle
- Type : heure

#### Géométrie au format GeoJSON - Propriété `GEOM_JSON`

> *Description : Géométrie de la ligne exprimée au format [GeoJSON](https://fr.wikipedia.org/wiki/GeoJSON)  sous le système de projection WGS84 (EPSG:4326). Le GeoJSON, de l'anglais Geographic JSON, signifiant littéralement JSON géographique, est un format ouvert d'encodage d'ensemble de données géospatiales simples utilisant la norme JSON (JavaScript Object Notation). Objet de type `LineString` souhaité. Sous PostGIS, on peut retrouver le GeoJSON d'une géométrie grâce à la fonction [ST_AsGeoJSON](https://postgis.net/docs/ST_AsGeoJSON.html). Vous avez aussi le choix de renseigner la géométrie au format WKT grâce au champ `GEOM_WKT`.*<br/>*Exemple : { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [ [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0] ] }*
- Valeur optionnelle
- Type : GéoJSON (format `default`)

#### Géométrie au format WKT - Propriété `GEOM_WKT`

> *Description : Géométrie de la ligne exprimée au format [WKT (Well Know Text](https://fr.wikipedia.org/wiki/Well-known_text) sous le système de projection WGS84 (EPSG:4326). Sous QGIS ou PostGIS, il est particulièrement aisé de retrouver le WKT d'une géométrie (fonction `geom_to_wkt` sous QGIS et fonction [`ST_As_Text`](https://postgis.net/docs/ST_AsText.html) sous PostGIS). Vous avez aussi le choix de renseigner la géométrie au format GeoJSON grâce au champ `GEOM_JSON`.*<br/>*Exemple : LineString (5.39340184 45.56538751, 5.41017215 45.56722934, 5.42510063 45.5679079)*
- Valeur optionnelle
- Type : chaîne de caractères

#### Source de la géométrie - Propriété `GEOM_SOURCE`

> *Description : Source de la géométrie*<br/>*Exemple : BDTOPO IGN 2021*
- Valeur optionnelle
- Type : chaîne de caractères
