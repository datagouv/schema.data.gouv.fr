<MenuSchema />

## arrete-circulation-marchandises

Schéma des arrêtés permanents de circulation pour le transport de marchandises

Spécification du fichier d'échange relatif aux arrêtés permanents de circulation pour le transport de marchandises gérés par les collectivités.

- Schéma créé le : 30/04/2021
- Site web : https://github.com/CEREMA/schema-arrete-circulation
- Version : 0.1.1
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"N/A"`
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
| [ARR_DATE](#date-de-l-arrete-propriete-arr-date) | date (format `%Y-%m-%d`) | Oui |
| [ARR_INSEE](#code-insee-propriete-arr-insee) | chaîne de caractères  | Oui |
| [ARR_URL](#url-d-acces-de-l-arrete-propriete-arr-url) | chaîne de caractères (format `uri`) | Non |
| [REGL_ARTICLE](#article-du-reglement-propriete-regl-article) | nombre entier  | Non |
| [REGL_SOUS_ARTICLE](#sous-article-du-reglement-propriete-regl-sous-article) | chaîne de caractères  | Non |
| [REGL_MODALITE](#propriete-regl-modalite) | chaîne de caractères  | Oui |
| [VEH_TYPES](#propriete-veh-types) | chaîne de caractères  | Non |
| [VEH_PTAC](#poids-total-autorise-en-charge-propriete-veh-ptac) | nombre réel  | Non |
| [VEH_LONG](#longueur-du-vehicule-propriete-veh-long) | nombre réel  | Non |
| [VEH_LARG](#largeur-du-largeur-propriete-veh-larg) | nombre réel  | Non |
| [VEH_HAUT](#largeur-du-largeur-propriete-veh-haut) | nombre réel  | Non |
| [VEH_USAGES](#types-d-usage-propriete-veh-usages) | chaîne de caractères  | Non |
| [VEH_MOTORS](#types-de-motorisation-propriete-veh-motors) | chaîne de caractères  | Non |
| [VEH_CQAS](#vignettes-crit-air-propriete-veh-cqas) | chaîne de caractères  | Non |
| [PERIODE_DEBUT](#date-d-entree-en-vigueur-des-restrictions-propriete-periode-debut) | date (format `%Y-%m-%d`) | Non |
| [PERIODE_JH](#jours-et-heures-de-circulation-propriete-periode-jh) | chaîne de caractères  | Non |
| [EMPRISE_DESIGNATION](#nom-de-la-voie-propriete-emprise-designation) | chaîne de caractères  | Oui |
| [EMPRISE_SENS](#direction-ou-sens-de-circulation-propriete-emprise-sens) | chaîne de caractères  | Non |
| [EMPRISE_DEBUT](#debut-de-la-section-propriete-emprise-debut) | chaîne de caractères  | Non |
| [EMPRISE_FIN](#fin-de-la-section-propriete-emprise-fin) | chaîne de caractères  | Non |
| [INTERV_DUREE](#duree-maximale-d-intervention-propriete-interv-duree) | heure  | Non |
| [INTERV_HMAX](#heure-maximale-d-intervention-propriete-interv-hmax) | heure  | Non |
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
- Motif : `^\d{14}$`

#### Référence de l'arrêté - Propriété `ARR_REF`

> *Description : Référence ou numéro de l'arrêté auquel se réfère la règlementation. Si l'arrêté a été mis à jour, la référence doit être celle de l'arrêté mis à jour et non celle de l'arrêté originel. Si l'arrêté ne possède pas de référence, mettre la valeur `NC`*<br/>*Exemple : AP-13090-12*
- Valeur obligatoire
- Type : chaîne de caractères

#### Objet de l'arrêté - Propriété `ARR_OBJET`

> *Description : Objet ou titre de l'arrêté. Mettre `NC` si l'arrêté ne comprend pas d'objet.*<br/>*Exemple : Arrêté règlementant la circulation dans le quartier Mazarin et du palais de Justice*
- Valeur obligatoire
- Type : chaîne de caractères

#### Considérant de l'arrêté - Propriété `ARR_CONSIDERANT`

> *Description : Considérant est le justificatif de la mise en place de la règlementation*<br/>*Exemple : Considérant la dangerosité que représente le trafic des PL aux abords des groupes scolaires*
- Valeur optionnelle
- Type : chaîne de caractères

#### Date de l'arrêté - Propriété `ARR_DATE`

> *Description : Date de création ou de mise à jour de l'arrêté, au format ISO 8601 AAAA-MM-DD.*<br/>*Exemple : 2021-04-30*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

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

#### Propriété `VEH_TYPES`

> *Description : Types de véhicule*<br/>*Exemple : Poids lourds|Véhicules utilitaires légers*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(Poids lourds|Véhicules utilitaires légers|Vélo-cargos|Tous véhicules))+$`

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

#### Types d'usage - Propriété `VEH_USAGES`

> *Description : Types d'usage de véhicule. Séparer les valeurs par le caractère '|'.*<br/>*Exemple : Bennes à ordures ménagères|Véhicules de police*
- Valeur optionnelle
- Type : chaîne de caractères

#### Types de motorisation - Propriété `VEH_MOTORS`

> *Description : Types de motorisation. Séparer les valeurs par le caractère '|'.*<br/>*Exemple : Électrique|Hydrogène*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(Electrique|Gaz Naturel pour Véhicules|Hydrogène))+$`

#### Vignettes crit'air - Propriété `VEH_CQAS`

> *Description : Vignettes crit'air. Voir la [classification des vignettes Crit'Air](https://www.certificat-air.gouv.fr/docs/tableaux_classement.pdf) sur le site [certificat-air.gouv.fr](https://www.certificat-air.gouv.fr). Séparer les étiquettes CQA par le caractère '|'.*<br/>*Exemple : 1|2|3*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(100% électrique et Véhicules à hydrogène|1|2|3|4|5|Véhicule non classé))+$`

#### Date d'entrée en vigueur des restrictions - Propriété `PERIODE_DEBUT`

> *Description : Date d'entrée en vigueur des restrictions (en particulier pour les Zones à Faible Émission),, au format ISO 8601 AAAA-MM-DD.*<br/>*Exemple : 2021-04-30*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### Jours et heures de circulation - Propriété `PERIODE_JH`

> *Description : Jours et heures de circulation autorisés pour la circulation exprimés selon le format OpeningHours d'OpenStreetMap ([https://wiki.openstreetmap.org/wiki/Key:opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours)). Ce format permet d'indiquer les week-ends (we), les jours fériés (PH) et les vacances scolaires (SH). Par exemple `Mo-Fr 09:00-17:00; PH 10:00-12:00; PH Su off` signifie : 'Du lundi au vendredi de 9h à 17h sauf les jours fériés où l'ouverture est de 10h à 12h, à l'exception des jours fériés tombant un dimanche'. `24/7` indique `Tous les jours`.*<br/>*Exemple : Mo-Fr 08:00-12:00,13:00-17:30; Sa 08:00-12:00; PH off*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `((?:(?:^|;\s?)(((((Mo|Tu|We|Th|Fr|Sa|Su|PH|SH)|(?:(?:|,)(Mo|Tu|We|Th|Fr|Sa|Su))+|((Mo|Tu|We|Th|Fr|Sa|Su)-(Mo|Tu|We|Th|Fr|Sa|Su))))\s((([0-1][0-9]|2[0-4]):([0-5][0-9]))-(([0-1][0-9]|2[0-4]):([0-5][0-9]))(,(([0-1][0-9]|2[0-4]):([0-5][0-9]))-(([0-1][0-9]|2[0-4]):([0-5][0-9])))?))|((Mo|Tu|We|Th|Fr|Sa|Su|PH|SH) off)|(sunrise-sunset)))+$|(24/7))`

#### Nom de la voie - Propriété `EMPRISE_DESIGNATION`

> *Description : Nom de la voie, ou de la zone associée à la section règlementée.*<br/>*Exemple : Avenue Philippe Solari, Commune d'Aix-en-Provence, Quartier Mazarin*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[a-zA-Z0-9\-\–\'\’\s\d\u00C0-\u00FF\(\)]+$`

#### Direction ou sens de circulation - Propriété `EMPRISE_SENS`

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

#### Début de la section - Propriété `EMPRISE_DEBUT`

> *Description : Indication de l'endroit à partir duquel la règlementation s'applique, telle qu'écrite dans l'arrêté. Par exemple, une adresse ou une indication textuelle : 'au croisement de la rue', 'depuis le rond-point'.Ou bien coordonnées du point de l'endroit où commence la règlementation sur la voie. A noter sous la forme 'long, lat', par exemple '43.53591,5.42101' ou '43.53591, 5.42101'. 5 ou 6 décimales sont conseillées.*<br/>*Exemple : 22 avenue Philippe Solari, Croisement de l'avenue Philippe Solari avec la rue Gaston de Saporta*
- Valeur optionnelle
- Type : chaîne de caractères

#### Fin de la section - Propriété `EMPRISE_FIN`

> *Description : Indication de l'endroit jusqu'auquel la règlementation s'applique, telle qu'écrite dans l'arrêté. Par exemple, une adresse ou une indication textuelle : 'au croisement de la rue', 'depuis le rond-point'.Ou bien coordonnées du point de l'endroit où finit la règlementation sur la voie. A noter sous la forme 'long, lat', par exemple '43.53591,5.42101' ou '43.53591, 5.42101'. 5 ou 6 décimales sont conseillées.*<br/>*Exemple : 22 avenue Philippe Solari, Croisement de l'avenue Philippe Solari avec la rue Gaston de Saporta*
- Valeur optionnelle
- Type : chaîne de caractères

#### Durée maximale d'intervention - Propriété `INTERV_DUREE`

> *Description : Durée maximale d'intervention (au niveau d'une aire piétonne, par exemple). L'entrée et la sortie dans une zone peuvent être horodatées à la délivrance d'un ticket lors de la traversée d'une borne de passage.*<br/>*Exemple : 03:00:00*
- Valeur optionnelle
- Type : heure

#### Heure maximale d'intervention - Propriété `INTERV_HMAX`

> *Description : Heure max à partir de laquelle les véhicules doivent quitter l'aire piétonne.*<br/>*Exemple : 22:00:00*
- Valeur optionnelle
- Type : heure

#### Géométrie au format WKT - Propriété `GEOM_WKT`

> *Description : Géométrie de la ligne exprimée au format [WKT (Well Know Text](https://fr.wikipedia.org/wiki/Well-known_text) sous le système de projection WGS84 (EPSG:4326). Sous QGIS ou PostGIS, il est particulièrement aisé de retrouver le WKT d'une géométrie (fonction `geom_to_wkt` sous QGIS et fonction [`ST_As_Text`](https://postgis.net/docs/ST_AsText.html) sous PostGIS). Vous avez aussi le choix de renseigner la géométrie au format GeoJSON grâce au champ `GEOM_JSON`.*<br/>*Exemple : LineString (5.39340184 45.56538751, 5.41017215 45.56722934, 5.42510063 45.5679079)*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(MULTI|multi)?(LINESTRING|linestring)\(((|,\s?)\(((|,\s?)(-?[0-9](\.[0-9]+)?\s-?[0-9](\.[0-9]+)?))+\))+\)`

#### Source de la géométrie - Propriété `GEOM_SOURCE`

> *Description : Source de la géométrie*<br/>*Exemple : BDTOPO IGN 2021*
- Valeur optionnelle
- Type : chaîne de caractères
