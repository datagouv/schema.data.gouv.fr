<MenuSchema />

## aire-livraison

Aires de livraison

Spécification du fichier d'échange relatif aux aires de livraison

- Schéma créé le : 04/01/2024
- Site web : https://github.com/CEREMA/schema-aire-livraison
- Version : v0.1.0
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"N/A"`
- Clé primaire : `ID`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [ID](#identifiant-de-l-entite-propriete-id) | chaîne de caractères  | Oui |
| [COLL_NOM](#nom-de-la-collectivite-a-l-origine-de-l-arrete-propriete-coll-nom) | chaîne de caractères  | Oui |
| [COLL_INSEE](#code-insee-propriete-coll-insee) | chaîne de caractères  | Oui |
| [ARR_REF](#reference-de-l-arrete-propriete-arr-ref) | chaîne de caractères  | Oui |
| [ARR_DATE](#date-de-l-arrete-propriete-arr-date) | date (format `%Y-%m-%d`) | Oui |
| [ARR_OBJET](#objet-de-l-arrete-propriete-arr-objet) | chaîne de caractères  | Oui |
| [ARR_CONSIDERANT](#considerant-de-l-arrete-propriete-arr-considerant) | chaîne de caractères  | Non |
| [ARR_URL](#adresse-internet-de-l-arrete-propriete-arr-url) | chaîne de caractères (format `uri`) | Non |
| [REGL_ARTICLE](#article-du-reglement-propriete-regl-article) | chaîne de caractères  | Non |
| [REGL_SOUS_ARTICLE](#sous-article-du-reglement-propriete-regl-sous-article) | chaîne de caractères  | Non |
| [VEH_TONNAGE](#tonnage-propriete-veh-tonnage) | nombre réel  | Non |
| [INTERV_JH](#jours-et-heures-de-livraison-propriete-interv-jh) | chaîne de caractères  | Non |
| [INTERV_REGIME](#regime-d-acces-propriete-interv-regime) | chaîne de caractères  | Non |
| [INTERV_DUREE](#duree-maximale-d-intervention-propriete-interv-duree) | durée  | Non |
| [INTERV_DISQUE](#disque-obligatoire-propriete-interv-disque) | booléen  | Non |
| [EMPRISE_ZONE](#zone-propriete-emprise-zone) | chaîne de caractères  | Non |
| [EMPRISE_DESIGNATION](#adresse-du-point-de-reference-de-l-aire-propriete-emprise-designation) | chaîne de caractères  | Oui |
| [EMPRISE_LONGUEUR](#longueur-de-l-emprise-propriete-emprise-longueur) | nombre réel  | Non |
| [EMPRISE_LARGEUR](#largeur-de-l-emprise-propriete-emprise-largeur) | nombre réel  | Non |
| [EMPRISE_DEBATTEMENT](#presence-d-un-debattement-propriete-emprise-debattement) | booléen  | Non |
| [STATIONNEMENT_LOCALISATION](#localisation-du-stationnement-propriete-stationnement-localisation) | chaîne de caractères  | Non |
| [IRVE_PRESENCE](#installation-de-recharge-de-vehicule-electrique-propriete-irve-presence) | booléen  | Non |
| [IRVE_PUISSANCE](#puissance-de-l-installation-de-recharge-de-vehicule-electrique-propriete-irve-puissance) | nombre réel  | Non |
| [GEOM_XY](#coordonnees-gps-de-l-aire-de-livraison-ou-de-la-rue-propriete-geom-xy) | point géographique  | Oui |
| [GEOM_WKT](#geometrie-au-format-wkt-propriete-geom-wkt) | chaîne de caractères  | Non |

#### Identifiant de l'entité - Propriété `ID`

> *Description : Il s'agit de l'identifiant, unique, de la ligne du tableau. Vous pouvez créer des identifiants grâce à l'application [Heidi](https://heidi.app.etalab.studio/) d'Etalab.*<br/>*Exemple : 133-3*
- Valeur obligatoire
- Type : chaîne de caractères

#### Nom de la collectivité à l'origine de l'arrêté - Propriété `COLL_NOM`

> *Description : Nom de la collectivité.*<br/>*Exemple : Commune d'Aix-en-Provence*
- Valeur obligatoire
- Type : chaîne de caractères

#### Code INSEE - Propriété `COLL_INSEE`

> *Description : Code INSEE de la commune sur laquelle s'applique l'arrêté*<br/>*Exemple : 13090*
- Valeur obligatoire
- Type : chaîne de caractères
- Entre 5 et 5 caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### Référence de l'arrêté - Propriété `ARR_REF`

> *Description : Référence ou numéro de l'arrêté auquel se réfère la règlementation. Si l'arrêté a été mis à jour, la référence doit être celle de l'arrêté mis à jour et non celle de l'arrêté originel. Si l'arrêté ne possède pas de référence, mettre la valeur `NC`*<br/>*Exemple : AP-13090-12*
- Valeur obligatoire
- Type : chaîne de caractères

#### Date de l'arrêté - Propriété `ARR_DATE`

> *Description : Date de création ou de mise à jour de l'arrêté, au format ISO 8601 AAAA-MM-DD. Mettre `NC` si pas d'indication dans l'arrêté*<br/>*Exemple : 2021-04-30*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### Objet de l'arrêté - Propriété `ARR_OBJET`

> *Description : Objet ou titre de l'arrêté. Mettre `NC` si l'arrêté ne comprend pas d'objet.*<br/>*Exemple : Arrêté règlementant la circulation dans le quartier Mazarin et du palais de Justice*
- Valeur obligatoire
- Type : chaîne de caractères

#### Considérant de l'arrêté - Propriété `ARR_CONSIDERANT`

> *Description : Considérant est le justificatif de la mise en place de la règlementation. S'il y a plusieurs considérations, les séparer par le caractère '|'*<br/>*Exemple : Considérant la dangerosité que représente le trafic des PL aux abords des groupes scolaires*
- Valeur optionnelle
- Type : chaîne de caractères

#### Adresse internet de l'arrêté - Propriété `ARR_URL`

> *Description : Adresse internet par laquelle accéder à l'arrêté, et donc au règlement.*<br/>*Exemple : https://carte.st-paul-les-dax.fr/wp-content/uploads/2020/06/AM-10248.pdf*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)

#### Article du règlement - Propriété `REGL_ARTICLE`

> *Description : N° de l'article associé au règlement lorsqu'il existe*<br/>*Exemple : 'Article 4' ou 'Titre 2'*
- Valeur optionnelle
- Type : chaîne de caractères

#### Sous-article du règlement - Propriété `REGL_SOUS_ARTICLE`

> *Description : Un article peut se décomposer en plusieurs sous-articles, contenant chacun une règlementation particulière. Ces sous-articles ont des numérotations.*<br/>*Exemple : Sous-article 4 bis*
- Valeur optionnelle
- Type : chaîne de caractères

#### Tonnage - Propriété `VEH_TONNAGE`

> *Description : Tonnage maximal du véhicule*<br/>*Exemple : 9*
- Valeur optionnelle
- Type : nombre réel
- Valeur inférieure à : 45

#### Jours et heures de livraison - Propriété `INTERV_JH`

> *Description : Jours et heures de livraison exprimés selon le format OpeningHours d'OpenStreetMap ([https://wiki.openstreetmap.org/wiki/Key:opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours)). Ce format permet d'indiquer les week-ends (we), les jours fériés (PH) et les vacances scolaires (SH). Par exemple `Mo-Fr 09:00-17:00; PH 10:00-12:00; PH Su off` signifie : 'Du lundi au vendredi de 9h à 17h sauf les jours fériés où l'ouverture est de 10h à 12h, à l'exception des jours fériés tombant un dimanche'. `24/7` indique `Tous les jours`. [Utiliser groom-groom pour récupérer les jours et heures de circulation](https://cerema-med.shinyapps.io/groom-groom?action=opening_hours). Si INTERV_JH est vide, alors ce ne sont que des livraisons qui sont autorisées. S'il y a des horaires spécifiés dans INTERV_JH, alors la livraison s'effectue à ces horaires. En dehors de ces plages, le stationnement standard est autorisé. Il est donc mixte.*<br/>*Exemple : Mo-Fr 08:00-12:00,13:00-17:30; Sa 08:00-12:00; PH off*
- Valeur optionnelle
- Type : chaîne de caractères

#### Régime d'accès - Propriété `INTERV_REGIME`

> *Description : Permet de savoir si l'aire de livraison est exclusive ou partagée avec du stationnement particulier, ou éventuellement concerne le transport de fond (si on choisit d'intégrer les aires réservés au transport de fond). Mixte : cohabite avec stationnement particulier*<br/>*Exemple : Livraison*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Mixte`
    - `Transport de fonds`
    - `Livraison`

#### Durée maximale d'intervention - Propriété `INTERV_DUREE`

> *Description : Durée maximale d'intervention (au niveau d'une aire piétonne, par exemple). L'entrée et la sortie dans une zone peuvent être horodatées à la délivrance d'un ticket lors de la traversée d'une borne de passage.*<br/>*Exemple : P0DT3H*
- Valeur optionnelle
- Type : durée

#### Disque obligatoire - Propriété `INTERV_DISQUE`

> *Description : Obligation de disposer d'un disque de livraison*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : booléen

#### Zone - Propriété `EMPRISE_ZONE`

> *Description : Zone associée à l'aire. Il s'agit généralement de la dénomination du quartier ou de l'aire piétonne associée règlementée*<br/>*Exemple : Secteur du Centre-Ville*
- Valeur optionnelle
- Type : chaîne de caractères

#### Adresse du point de référence de l'aire - Propriété `EMPRISE_DESIGNATION`

> *Description : Adresse du point de référence de l'aire. Cela peut être toute une rue ou un tronçon. Endroit précis de l'aire de livraison réservée aux livraisons.*<br/>*Exemple : Avenue Philippe Solari, Commune d'Aix-en-Provence, Quartier Mazarin, 200046977-ZFE-001*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[a-zA-Z0-9\-\–\'\’\«\»\°\"\s\dÀ-ÿ\(\)\,\.]+$`

#### Longueur de l'emprise - Propriété `EMPRISE_LONGUEUR`

> *Description : Longueur de l'emprise en mètres.*<br/>*Exemple : 9*
- Valeur optionnelle
- Type : nombre réel
- Valeur inférieure à : 100

#### Largeur de l'emprise - Propriété `EMPRISE_LARGEUR`

> *Description : Largeur de l'emprise en mètres.*<br/>*Exemple : 9*
- Valeur optionnelle
- Type : nombre réel
- Valeur inférieure à : 10

#### Présence d'un débattement - Propriété `EMPRISE_DEBATTEMENT`

> *Description : Un espace est disponible de part et d'autre de l'aire de livraison pour un accès facilité*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : booléen

#### Localisation du stationnement - Propriété `STATIONNEMENT_LOCALISATION`

> *Description : Localisation du stationnement. Champ issu de [la donnée OpenData de stationnement à Paris](https://opendata.paris.fr/explore/dataset/stationnement-voie-publique-emplacements/table/?disjunctive.regpri&disjunctive.regpar&disjunctive.typsta&disjunctive.arrond&disjunctive.zoneres&disjunctive.locsta&disjunctive.parite&disjunctive.signhor&disjunctive.signvert&disjunctive.confsign&disjunctive.typemob&disjunctive.zoneasp&disjunctive.stv&disjunctive.prefet&q=livraison&refine.regpri=LIVRAISON&sort=locsta&basemap=jawg.dark&location=16,48.85483,2.33805)*<br/>*Exemple : Chaussée*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Autre`
    - `Chaussée`
    - `Contre allée`
    - `Contre terre plein`
    - `Demi lincoln`
    - `Faux lincoln`
    - `Lincoln`
    - `Place`
    - `Terre plein`
    - `Trottoir`

#### Installation de recharge de véhicule électrique - Propriété `IRVE_PRESENCE`

> *Description : Présence d'une borne de recharge de véhicule électrique*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : booléen

#### Puissance de l'installation de recharge de véhicule électrique - Propriété `IRVE_PUISSANCE`

> *Description : Puissance de l'installation de recharge de véhicule électrique en kW*<br/>*Exemple : 22*
- Valeur optionnelle
- Type : nombre réel
- Valeur entre 1 et 150

#### Coordonnées GPS de l'Aire de Livraison ou de la rue - Propriété `GEOM_XY`

> *Description : Coordonnées longitude, latitude associées à l'aire de livraison. S'écrit sous la forme 'long,lat' (5 ou 6 décimales sont conseillées).*<br/>*Exemple : 5.42101,43.53591*
- Valeur obligatoire
- Type : point géographique

#### Géométrie au format WKT - Propriété `GEOM_WKT`

> *Description : Géométrie de la rue (ligne), ou de l'emprise (polygone) exprimée au format [WKT](https://fr.wikipedia.org/wiki/Well-known_text) (Well Know Text) sous le système de projection WGS84 (EPSG:4326)*<br/>*Exemple : LineString(5.39340184 45.56538751, 5.41017215 45.56722934, 5.42510063 45.5679079)*
- Valeur optionnelle
- Type : chaîne de caractères
