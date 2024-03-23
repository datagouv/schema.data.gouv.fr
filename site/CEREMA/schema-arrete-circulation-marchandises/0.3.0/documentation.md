<MenuSchema />

## arrete-permanent-circulation

Schéma des arrêtés permanents de circulation

Spécification du fichier d'échange relatif aux arrêtés permanents de circulation gérés par les collectivités.

- Schéma créé le : 30/04/2021
- Site web : https://github.com/CEREMA/schema-arrete-circulation
- Version : 0.1.1
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"NC"`, `"N/A"`
- Clé primaire : `SECTION_REGL_ID`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [SECTION_REGL_ID](#propriete-section-regl-id) | chaîne de caractères  | Oui |
| [COLL_NOM](#nom-de-la-collectivite-propriete-coll-nom) | chaîne de caractères  | Oui |
| [COLL_SIRET](#code-siret-de-la-collectivite-propriete-coll-siret) | chaîne de caractères  | Oui |
| [ARR_REF](#reference-de-l'arrete-propriete-arr-ref) | chaîne de caractères  | Oui |
| [ARR_URL](#url-d'acces-de-l'arrete-propriete-arr-url) | chaîne de caractères  | Non |
| [ARR_OBJET](#objet-de-l'arrete-propriete-arr-objet) | chaîne de caractères  | Oui |
| [ARR_CONSIDERANT](#considerant-de-l'arrete-propriete-arr-considerant) | chaîne de caractères  | Non |
| [ARR_DATE_CREATION](#date-de-creation-de-l'arrete-propriete-arr-date-creation) | date (format `%Y-%m-%d`) | Oui |
| [ARR_EST_MAJ](#arrete-mis-a-jour-?-propriete-arr-est-maj) | booléen  | Oui |
| [ARR_INSEE](#code-insee-propriete-arr-insee) | chaîne de caractères  | Oui |
| [REGL_ARTICLE](#article-du-reglement-propriete-regl-article) | nombre entier  | Non |
| [REGL_SOUS_ARTICLE](#sous-article-du-reglement-propriete-regl-sous-article) | chaîne de caractères  | Non |
| [REGL_MODALITE](#propriete-regl-modalite) | chaîne de caractères  | Oui |
| [ZONE_TYPE](#propriete-zone-type) | chaîne de caractères  | Non |
| [ZONE_REF](#nom-ou-identifiant-de-la-zone-associee-a-la-reglementation-propriete-zone-ref) | chaîne de caractères  | Non |
| [VEH_PTAC](#poids-total-autorise-en-charge-propriete-veh-ptac) | nombre réel  | Non |
| [VEH_LONG](#longueur-du-vehicule-propriete-veh-long) | nombre réel  | Non |
| [VEH_LARG](#largeur-du-largeur-propriete-veh-larg) | nombre réel  | Non |
| [VEH_HAUT](#largeur-du-largeur-propriete-veh-haut) | nombre réel  | Non |
| [VEH_TYPE](#propriete-veh-type) | chaîne de caractères  | Non |
| [VEH_USAGE](#type-d'usage-propriete-veh-usage) | chaîne de caractères  | Non |
| [VEH_MOTOR](#type-de-motorisation-propriete-veh-motor) | chaîne de caractères  | Non |
| [VEH_CQA](#vignettes-crit'air-propriete-veh-cqa) | chaîne de caractères  | Non |
| [PERIODE_DEBUT](#date-d'entree-en-vigueur-des-restrictions-propriete-periode-debut) | date (format `%Y-%m-%d`) | Non |
| [PERIODE_JH](#jours-et-heures-de-circulation-propriete-periode-jh) | chaîne de caractères  | Non |
| [INTERV_DUREE](#duree-maximale-d'intervention-propriete-interv-duree) | heure  | Non |
| [INTERV_HMAX](#heure-maximale-d'intervention-propriete-interv-hmax) | heure  | Non |
| [SECTION_VOIE](#nom-de-la-voie-propriete-section-voie) | chaîne de caractères  | Oui |
| [SECTION_COTE](#cote-de-la-voie-propriete-section-cote) | chaîne de caractères  | Non |
| [SECTION_DEBUT_POINT](#debut-de-la-section-propriete-section-debut-point) | point géographique (format `default`) | Non |
| [SECTION_DEBUT_REF](#debut-de-la-section-(texte)---propriété-section_debut_ref) | chaîne de caractères  | Non |
| [SECTION_FIN_POINT](#fin-de-la-section-propriete-section-fin-point) | point géographique (format `default`) | Non |
| [SECTION_FIN_REF](#fin-de-la-section-(texte)---propriété-section_fin_ref) | chaîne de caractères  | Non |
| [GEOM_JSON](#geometrie-au-format-geojson-propriete-geom-json) | GéoJSON (format `default`) | Non |
| [GEOM_WKT](#geometrie-au-format-wkt-propriete-geom-wkt) | chaîne de caractères  | Non |
| [GEOM_SOURCE](#propriete-geom-source) | chaîne de caractères  | Non |

#### Propriété `SECTION_REGL_ID`

> *Description : Identifiant unique de la ligne. La ligne correspond à la voie ou la section de voie règlementée. Ce peut être une voie entière (la D9) ou une portion de voie (voir champ `SECTION_DEBUT` et `SECTION_FIN`). L'identifiant peut tout simplement être un identifiant auto-incrémenté (1, 2 ou 3,...). Si la section est issue d'OpenStreetMap, l'identifiant peut correspondre à la valeur osm_id de la voie règlementée (par exemple, 133). Si la section possède plusieurs règlements, l'identifiant peut être accompagné d'un suffixe incrémenté (par exemple 133-2 pour le second règlement associé à la voie). Il peut également être un identifiant propre à une structure ou une base de données (identifiant issu de la BDTOPO IGN, par exemple).<br/>Ex : 133-3*
- Valeur obligatoire
- Type : chaîne de caractères

#### Nom de la collectivité - Propriété `COLL_NOM`

> *Description : Nom de la collectivité.<br/>Ex : Commune d'Aix-en-Provence*
- Valeur obligatoire
- Type : chaîne de caractères

#### Code SIRET de la collectivité - Propriété `COLL_SIRET`

> *Description : Identifiant du [Système d'Identification du Répertoire des Etablissements](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_%C3%A9tablissements) (SIRET) de la collectivité sur le territoire de laquelle sont situés les équipements collectifs publics répertoriés dans le jeu de données. Il est composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant.<br/>Ex : 22940028800010*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Référence de l'arrêté - Propriété `ARR_REF`

> *Description : Référence ou numéro de l'arrêté auquel se réfère la règlementation. Si l'arrêté a été mis à jour, la référence doit être celle de l'arrêté mis à jour et non celle de l'arrêté originel.<br/>Ex : AP-13090-12*
- Valeur obligatoire
- Type : chaîne de caractères

#### URL d'accès de l'arrêté - Propriété `ARR_URL`

> *Description : Adresse internet par laquelle accéder à l'arrêté, et donc au règlement.<br/>Ex : https://carte.st-paul-les-dax.fr/wp-content/uploads/2020/06/AM-10248.pdf*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(https|http)?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+`

#### Objet de l'arrêté - Propriété `ARR_OBJET`

> *Description : Objet ou titre de l'arrêté<br/>Ex : Arrêté règlementant la circulation dans le quartier Mazarin et du palais de Justice*
- Valeur obligatoire
- Type : chaîne de caractères

#### Considérant de l'arrêté - Propriété `ARR_CONSIDERANT`

> *Description : Considérant est le justificatif de la mise en place de la règlementation<br/>Ex : Considérant la dangerosité que représente le trafic des PL aux abords des groupes scolaires*
- Valeur optionnelle
- Type : chaîne de caractères

#### Date de création de l'arrêté - Propriété `ARR_DATE_CREATION`

> *Description : Date de création ou de mise à jour de l'arrêté, au format ISO 8601 AAAA-MM-DD.<br/>Ex : 2021-04-30*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### Arrêté mis à jour ? - Propriété `ARR_EST_MAJ`

> *Description : Spécifie si l'arrêté a été l'objet d'une mise à jour. Dans ce cas, remplir la nouvelle référence de l'arrêté dans `ARR_REF`.<br/>Ex : TRUE*
- Valeur obligatoire
- Type : booléen

#### Code INSEE - Propriété `ARR_INSEE`

> *Description : Code INSEE de la commune sur laquelle s'applique l'arrêté<br/>Ex : 13090*
- Valeur obligatoire
- Type : chaîne de caractères
- Entre 5 et 5 caractères
- Motif : `^[a-zA-Z0-9\-\'\s\d\u00C0-\u00FF]+$`

#### Article du règlement - Propriété `REGL_ARTICLE`

> *Description : N° de l'article associé au règlement lorsqu'il existe<br/>Ex : 4*
- Valeur optionnelle
- Type : nombre entier

#### Sous-article du règlement - Propriété `REGL_SOUS_ARTICLE`

> *Description : Un article peut se décomposer en plusieurs sous-articles, contenant chacun une règlementation particulière. Ces sous-articles ont des numérotations.<br/>Ex : 4 bis*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `REGL_MODALITE`

> *Description : Modalité<br/>Ex : Autorise*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Autorise
    - Interdit

#### Propriété `ZONE_TYPE`

> *Description : Type de zone<br/>Ex : Quartier*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Arrondissement
    - Commune entière
    - Zone à Faible Émission
    - Zone IRIS INSEE
    - Zone piétonne

#### Nom ou identifiant de la zone associée à la règlementation - Propriété `ZONE_REF`

> *Description : Nom ou identifiant de la zone associée à la règlementation (nom du quartier, arrondissement, identifiant ZFE, identifiant IRIS...).<br/>Ex : Quartier Mazarin*
- Valeur optionnelle
- Type : chaîne de caractères

#### Poids total autorisé en charge - Propriété `VEH_PTAC`

> *Description : Poids total autorisé en charge, exprimé en tonnes.<br/>Ex : 7.5*
- Valeur optionnelle
- Type : nombre réel
- Valeur entre 0 et 45

#### Longueur du véhicule - Propriété `VEH_LONG`

> *Description : Longueur maximale exprimée en mètres.<br/>Ex : 6.5*
- Valeur optionnelle
- Type : nombre réel
- Valeur entre 0 et 30

#### Largeur du Largeur - Propriété `VEH_LARG`

> *Description : Longueur maximale exprimée en mètres.<br/>Ex : 3.5*
- Valeur optionnelle
- Type : nombre réel
- Valeur entre 0 et 6

#### Largeur du Largeur - Propriété `VEH_HAUT`

> *Description : Longueur maximale exprimée en mètres.<br/>Ex : 2.5*
- Valeur optionnelle
- Type : nombre réel
- Valeur entre 0 et 6

#### Propriété `VEH_TYPE`

> *Description : Type de véhicule<br/>Ex : Poids lourds*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Poids lourds
    - Véhicules utilitaires légers

#### Type d'usage - Propriété `VEH_USAGE`

> *Description : Type d'usage du véhicule. Séparer les valeurs par le caractère '|'.<br/>Ex : Bennes à ordures ménagères|Véhicules de police*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(Convois funéraires|Bennes à ordures ménagères|Commerçant nomade|Commerçant sédentaire|Desserte locale : déménageur|Livraison|Poids lourds d'urgence|Professions médicales|Riverains|Services publics|Taxis|Transport de carburant|Transport de fonds|Transport de gaz|Transport de matières dangereuses|Transports en commun|Véhicules de police|Véhicules de secours|Véhicules municipaux|Véhicules munis d'une autorisation|Voitures de Transport avec Chauffeur){1}(\|(Convois funéraires|Bennes à ordures ménagères|Commerçant nomade|Commerçant sédentaire|Desserte locale : déménageur|Livraison|Poids lourds d'urgence|Professions médicales|Riverains|Services publics|Taxis|Transport de carburant|Transport de fonds|Transport de gaz|Transport de matières dangereuses|Transports en commun|Véhicules de police|Véhicules de secours|Véhicules municipaux|Véhicules munis d'une autorisation|Voitures de Transport avec Chauffeur)))*$`

#### Type de motorisation - Propriété `VEH_MOTOR`

> *Description : Type de motorisation du véhicule. Séparer les valeurs par le caractère '|'.<br/>Ex : Électrique|Hydrogène*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(Électrique|Gaz Naturel pour Véhicules|Hydrogène){1}(\|(Électrique|Gaz Naturel pour Véhicules|Hydrogène))*$`

#### Vignettes crit'air - Propriété `VEH_CQA`

> *Description : Vignettes crit'air. Voir la [classification des vignettes Crit'Air](https://www.certificat-air.gouv.fr/docs/tableaux_classement.pdf) sur le site [certificat-air.gouv.fr](https://www.certificat-air.gouv.fr). Séparer les étiquettes CQA par le caractère '|'. 'NC' signifie que la valeur n'a pas été renseignée.<br/>Ex : 1|2|3*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(1|2|3|4|5|NC){1}(\|(1|2|3|4|5|NC))*$`

#### Date d'entrée en vigueur des restrictions - Propriété `PERIODE_DEBUT`

> *Description : Date d'entrée en vigueur des restrictions (en particulier pour les Zones à Faible Émission),, au format ISO 8601 AAAA-MM-DD.<br/>Ex : 2021-04-30*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### Jours et heures de circulation - Propriété `PERIODE_JH`

> *Description : Jours et heures de circulation autorisés pour la circulation exprimés selon le format OpeningHours d'OpenStreetMap ([https://wiki.openstreetmap.org/wiki/Key:opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours)). Ce format permet d'indiquer les week-ends (we), les jours fériés (PH) et les vacances scolaires (SH). Par exemple `Mo-Fr 09:00-17:00; PH 10:00-12:00; PH Su off` signifie : 'ouverture du lundi au vendredi de 9h à 17h sauf les jours fériés où l'ouverture est de 10h à 12h, à l'exception des jours fériés tombant un dimanche'<br/>Ex : Mo-Fr 08:00-12:00,13:00-17:30; Sa 08:00-12:00; PH off*
- Valeur optionnelle
- Type : chaîne de caractères

#### Durée maximale d'intervention - Propriété `INTERV_DUREE`

> *Description : Durée maximale d'intervention (au niveau d'une aire piétonne, par exemple).<br/>Ex : 03:00:00*
- Valeur optionnelle
- Type : heure

#### Heure maximale d'intervention - Propriété `INTERV_HMAX`

> *Description : Heure max à partir de laquelle les véhicules doivent quitter l'aire piétonne.<br/>Ex : 22:00:00*
- Valeur optionnelle
- Type : heure

#### Nom de la voie - Propriété `SECTION_VOIE`

> *Description : Nom de la voie associée à la section règlementée. 'NC' si application à une commune, une ZFE (etc...). Voir pour cela le champ `ZONE_TYPE`.<br/>Ex : Avenue Philippe Solari*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[a-zA-Z0-9\-\'\s\d\u00C0-\u00FF]+$`

#### Côté de la voie - Propriété `SECTION_COTE`

> *Description : Côté de la voie associé à la règlementation. Pair : concerne la circulation le long des adresses à chiffre pair.<br/>Ex : Deux côtés*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Pair
    - Impair
    - Deux côtés

#### Début de la section - Propriété `SECTION_DEBUT_POINT`

> *Description : Coordonnées du point indiquant l'endroit où commence la règlementation sur la voie. A noter sous la forme 'long, lat', par exemple '43.53591,5.42101' ou '43.53591, 5.42101'. 5 ou 6 décimales sont conseillées.<br/>Ex : None*
- Valeur optionnelle
- Type : point géographique (format `default`)

#### Début de la section (texte) - Propriété `SECTION_DEBUT_REF`

> *Description : Indication de l'endroit à partir duquel la règlementation s'applique, telle qu'écrite dans l'arrêté. Par exemple, une adresse ou une indication textuelle : 'au croisement de la rue', 'depuis le rond-point'. Les coordonnées GPS, elles, doivent être indiquées dans le champ `SECTION_DEBUT_POINT`.<br/>Ex : 22 avenue Philippe Solari*
- Valeur optionnelle
- Type : chaîne de caractères

#### Fin de la section - Propriété `SECTION_FIN_POINT`

> *Description : Point indiquant l'endroit où commence la règlementation sur la voie. A noter sous la forme 'long, lat', par exemple '43.53591,5.42101' ou '43.53591, 5.42101'. 5 ou 6 décimales sont conseillées.<br/>Ex : None*
- Valeur optionnelle
- Type : point géographique (format `default`)

#### Fin de la section (texte) - Propriété `SECTION_FIN_REF`

> *Description : Indication de l'endroit jusqu'auquel la règlementation s'applique, telle qu'écrite dans l'arrêté. Par exemple, une adresse ou une indication textuelle : 'au croisement de la rue', 'depuis le rond-point'. Les coordonnées GPS, elles, doivent être indiquées dans le champ `SECTION_DEBUT_POINT`.<br/>Ex : Croisement avec la rue Gaston de Saporta*
- Valeur optionnelle
- Type : chaîne de caractères

#### Géométrie au format GeoJSON - Propriété `GEOM_JSON`

> *Description : Géométrie de la ligne exprimée au format [GeoJSON](https://fr.wikipedia.org/wiki/GeoJSON)  sous le système de projection WGS84 (EPSG:4326). Le GeoJSON, de l'anglais Geographic JSON, signifiant littéralement JSON géographique, est un format ouvert d'encodage d'ensemble de données géospatiales simples utilisant la norme JSON (JavaScript Object Notation). Objet de type `LineString` souhaité. Sous PostGIS, on peut retrouver le GeoJSON d'une géométrie grâce à la fonction [ST_AsGeoJSON](https://postgis.net/docs/ST_AsGeoJSON.html). Vous avez aussi le choix de renseigner la géométrie au format WKT grâce au champ `GEOM_WKT`.<br/>Ex : { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [ [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0] ] }*
- Valeur optionnelle
- Type : GéoJSON (format `default`)

#### Géométrie au format WKT - Propriété `GEOM_WKT`

> *Description : Géométrie de la ligne exprimée au format [WKT (Well Know Text](https://fr.wikipedia.org/wiki/Well-known_text) sous le système de projection WGS84 (EPSG:4326). Sous QGIS ou PostGIS, il est particulièrement aisé de retrouver le WKT d'une géométrie (fonction `geom_to_wkt` sous QGIS et fonction [`ST_As_Text`](https://postgis.net/docs/ST_AsText.html) sous PostGIS). Vous avez aussi le choix de renseigner la géométrie au format GeoJSON grâce au champ `GEOM_JSON`.<br/>Ex : LineString (5.39340184 45.56538751, 5.41017215 45.56722934, 5.42510063 45.5679079)*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `GEOM_SOURCE`

> *Description : Source de la géométrie<br/>Ex : BDTOPO IGN 2021*
- Valeur optionnelle
- Type : chaîne de caractères
