<MenuSchema />

## aire-livraison

Aires de livraison

Spécification du fichier d'échange relatif aux aires de livraison

- Schéma créé le : 04/01/2024
- Site web : https://github.com/CEREMA/schema-aire-livraison
- Version : v1.0.0
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"N/A"`, `"n/a"`
- Clé primaire : `UUID`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [ARR_PRESENT](#presence-d-un-arrete-d-aire-de-livraison-propriete-arr-present) | booléen  | Non |
| [ARR_URL](#adresse-internet-de-l-arrete-propriete-arr-url) | chaîne de caractères (format `uri`) | Non |
| [ACTIVE](#statut-de-l-aire-de-livraison--active-ou-pas-propriete-active) | booléen  | Non |
| [UUID](#identifiant-uuid-de-l-entite-propriete-uuid) | chaîne de caractères (format `uuid`) | Non |
| [ID](#identifiant-de-l-aire-de-livraison-utilise-dans-des-bases-de-donnees-locales-propriete-id) | chaîne de caractères  | Oui |
| [NOM](#nom-de-l-aire-de-livraison-propriete-nom) | chaîne de caractères  | Non |
| [DATE_MAJ](#date-de-mise-a-jour-propriete-date-maj) | date et heure  | Non |
| [LONGITUDE](#longitude-propriete-longitude) | nombre réel  | Oui |
| [LATITUDE](#latitude-propriete-latitude) | nombre réel  | Oui |
| [GEOM_WKT](#geometrie-au-format-wkt-propriete-geom-wkt) | chaîne de caractères  | Non |
| [ADRESSE](#adresse-complete-propriete-adresse) | chaîne de caractères  | Non |
| [CODE_POSTAL](#code-postal-propriete-code-postal) | chaîne de caractères  | Non |
| [COMMUNE](#commune-propriete-commune) | chaîne de caractères  | Non |
| [DISPOSITION](#type-de-stationnement-propriete-disposition) | chaîne de caractères  | Non |
| [PARITE_TROTTOIR](#cote-de-la-rue-propriete-parite-trottoir) | chaîne de caractères  | Non |
| [LOCALISATION](#localisation-propriete-localisation) | chaîne de caractères  | Non |
| [LONGUEUR](#longueur-propriete-longueur) | nombre réel  | Non |
| [LARGEUR](#largeur-propriete-largeur) | nombre réel  | Non |
| [MARQUAGE_ETAT](#etat-du-marquage-propriete-marquage-etat) | chaîne de caractères  | Non |
| [MARQUAGE_CONFORMITE](#conformite-du-marquage-propriete-marquage-conformite) | booléen  | Non |
| [TYPE](#type-d-espace-propriete-type) | chaîne de caractères  | Non |
| [PANNEAU_PRESENT](#presence-d-un-panneau-propriete-panneau-present) | booléen  | Non |
| [PANNEAU_ETAT](#etat-du-panneau-propriete-panneau-etat) | chaîne de caractères  | Non |
| [DUREE_MAX](#duree-maximale-d-arret-propriete-duree-max) | nombre réel  | Non |
| [DUREE_CONTROLE](#controle-de-la-duree-propriete-duree-controle) | chaîne de caractères  | Non |
| [TEMPORALITE_CDS](#plages-horaires-livraison-(norme-cds)-propriete-temporalite-cds) | chaîne de caractères  | Non |
| [TEMPORALITE_OSM](#plages-horaires-livraison-(norme-osm)-propriete-temporalite-osm) | chaîne de caractères  | Non |
| [EQUIPEMENTS](#equipements-propriete-equipements) | chaîne de caractères  | Non |
| [IRVE_PUISSANCE](#puissance-de-l-installation-de-recharge-de-vehicule-electrique-propriete-irve-puissance) | nombre réel  | Non |
| [ABAISSEMENT_TROTTOIR](#trottoir-abaisse-au-cul-du-vehicule-propriete-abaissement-trottoir) | booléen  | Non |
| [COMMENTAIRE](#commentaire-libre-propriete-commentaire) | chaîne de caractères  | Non |

#### Présence d'un arrêté d'aire de livraison - Propriété `ARR_PRESENT`

> *Description : Validation de la présence d'un arrêté d'aire de livraison pour l'aire de livraison. Un arrêté peut contenir plusieurs aires de livraisons*
- Valeur optionnelle
- Type : booléen

#### Adresse internet de l'arrêté - Propriété `ARR_URL`

> *Description : Adresse internet par laquelle accéder à l'arrêté, et donc au règlement*<br/>*Exemple : https://carte.st-paul-les-dax.fr/wp-content/uploads/2020/06/AM-10248.pdf*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)

#### Statut de l'aire de livraison. Active ou pas - Propriété `ACTIVE`

> *Description : Exprime si une aire de livraison est active*
- Valeur optionnelle
- Type : booléen

#### Identifiant UUID de l'entité - Propriété `UUID`

> *Description : Identifiant unique universel associé à l'aire de livraison. Vous pouvez créer des identifiants grâce à l'application [Heidi](https://heidi.app.etalab.studio/) d'Etalab*<br/>*Exemple : 550e8400-e29b-41d4-a716-446655440000*
- Valeur optionnelle
- Type : chaîne de caractères (format `uuid`)

#### Identifiant de l'aire de livraison utilisé dans des bases de données locales - Propriété `ID`

> *Description : Identifiant utilisé dans des bases de données locales associé à l'aire de livraison*<br/>*Exemple : 133-3*
- Valeur obligatoire
- Type : chaîne de caractères

#### Nom de l'aire de livraison - Propriété `NOM`

> *Description : Nom lisible permettant d'identifier facilement l'aire de livraison. Constitué du nom de la collectivité associé à un numéro compris entre 1 et 9999 : 'nom_collectivité_#' (ex : cu_dunkerque_1)*<br/>*Exemple : ca_annemasse_1*
- Valeur optionnelle
- Type : chaîne de caractères

#### Date de mise à jour - Propriété `DATE_MAJ`

> *Description : Date et heure de la dernière mise à jour des propriétés de l'aire de livraison*<br/>*Exemple : 2025-10-22T12:50:21Z*
- Valeur optionnelle
- Type : date et heure

#### Longitude - Propriété `LONGITUDE`

> *Description : Coordonnée longitude associée à l'aire de livraison (système de projection WGS84 (EPSG:4326))*<br/>*Exemple : 4.855184*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -180 et 180

#### Latitude - Propriété `LATITUDE`

> *Description : Coordonnée latitude associée à l'aire de livraison (système de projection WGS84 (EPSG:4326))*<br/>*Exemple : 45.769656*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -90 et 90

#### Géométrie au format WKT - Propriété `GEOM_WKT`

> *Description : Géométrie de l'emprise de l'aire de livraison (polygone) exprimée au format [WKT (Well Know Text)](https://fr.wikipedia.org/wiki/Well-known_text) sous le système de projection WGS84 (EPSG:4326) avec des coordonées d'une précision de 6 décimales. Constitué de 5 points, le premier et le dernier étant identiques pour fermer le polygone*<br/>*Exemple : POLYGON(4.855154 45.769666, 4.855176 45.769668, 4.855190 45.769583, 4.855168 45.769581, 4.855154 45.769666)*
- Valeur optionnelle
- Type : chaîne de caractères

#### Adresse complète - Propriété `ADRESSE`

> *Description : Adresse du point de référence de l'aire comprenant numéro, rue, code postal et ville*<br/>*Exemple : 27 Rue Ney, 69006 Lyon*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^[a-zA-Z0-9\-\–\'\’\«\»\°\"\s\dÀ-ÿ\(\)\,\.]+$`

#### Code postal - Propriété `CODE_POSTAL`

> *Description : Code postal associé à l'aire de livraison*<br/>*Exemple : 69006*
- Valeur optionnelle
- Type : chaîne de caractères
- Entre 5 et 5 caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### Commune - Propriété `COMMUNE`

> *Description : Nom de la commune associée à l'aire de livraison*<br/>*Exemple : Lyon*
- Valeur optionnelle
- Type : chaîne de caractères

#### Type de stationnement - Propriété `DISPOSITION`

> *Description : L'angle de stationnement des véhicules sur l'aire de livraison*<br/>*Exemple : Bataille*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `bataille`
    - `épi`
    - `parallèle`

#### Côté de la rue - Propriété `PARITE_TROTTOIR`

> *Description : Côté de la rue sur lequel se situe l'aire de livraison*<br/>*Exemple : Impair*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `impair`
    - `pair`
    - `inconnu`

#### Localisation - Propriété `LOCALISATION`

> *Description : Localisation de l'aire de livraison dans la rue*<br/>*Exemple : Chaussée*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `chaussée`
    - `encoche`
    - `terre-plein`
    - `aire piétonne`
    - `parking`

#### Longueur - Propriété `LONGUEUR`

> *Description : Longueur de l'emprise de l'aire de livraison en centimètres*<br/>*Exemple : 500*
- Valeur optionnelle
- Type : nombre réel
- Valeur entre 100 et 10000

#### Largeur - Propriété `LARGEUR`

> *Description : Largeur de l'emprise de l'aire de livraison en centimètres*<br/>*Exemple : 200*
- Valeur optionnelle
- Type : nombre réel
- Valeur entre 100 et 1000

#### État du marquage - Propriété `MARQUAGE_ETAT`

> *Description : Etat de la signalisation horizontale de l'aire de livraison*<br/>*Exemple : Dégradé*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `bon état`
    - `dégradé`
    - `absent`

#### Conformité du marquage - Propriété `MARQUAGE_CONFORMITE`

> *Description : Conformité de la signalisation horizontale d'après l'IISR partie 7 qui distingue aires péridodiques et aires permanentes*<br/>*Exemple : Oui*
- Valeur optionnelle
- Type : booléen

#### Type d'espace - Propriété `TYPE`

> *Description : Type d'espace d'arrêt ou de stationnement*<br/>*Exemple : Aire permanente*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `aire périodique`
    - `aire permanente`
    - `zone marchandises`

#### Présence d'un panneau - Propriété `PANNEAU_PRESENT`

> *Description : Validation de la présence de signalisation verticale*<br/>*Exemple : Oui*
- Valeur optionnelle
- Type : booléen

#### Etat du panneau - Propriété `PANNEAU_ETAT`

> *Description : Validation de l'état de la signalsation verticale*<br/>*Exemple : Dégradé*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `bon état`
    - `dégradé`
    - `n/a`

#### Durée maximale d'arrêt - Propriété `DUREE_MAX`

> *Description : Durée en minutes pendant laquelle l'esapce peut être utilisé en vertu de la réglementation inscrite sur la signalisation verticale ou horizontale*<br/>*Exemple : 60*
- Valeur optionnelle
- Type : nombre réel

#### Contrôle de la durée - Propriété `DUREE_CONTROLE`

> *Description : Modalité de contôle de la durée de séjour. Si une durée maximale est indiquée sans mention de la modalité de contrôle, mettre "Autre"*<br/>*Exemple : Disque*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `caméra`
    - `capteur`
    - `disque horodateur`
    - `autre`

#### Plages horaires livraison (norme CDS) - Propriété `TEMPORALITE_CDS`

> *Description : Définition des plages horaires d'exclusivité pour la livraison, selon le format Time Span de Curb Data Specification. Ne pas indiquer les horaires où le stationnement est autorisé. Par soucis de simplicité, renseigner les exceptions à la règle dans le champ COMMENTAIRE. Note d'implémentation : champ requis uniquement pour les aires à périodiques et zones marchandises. Les aires permanentes étant réservées en continu à la livraison (24/7), ce champ doit rester vide ou nul pour ces dernières. Complémentaire au champ TEMPORALITE_OSM*<br/>*Exemple : [{"days_of_week":["mon","tue","wed","thu","fri"],"times_of_day":[["08:00","12:00"]]},{"days_of_week":["sat"],"times_of_day":[["10:00","18:00"]]}]*
- Valeur optionnelle
- Type : chaîne de caractères

#### Plages horaires livraison (norme OSM) - Propriété `TEMPORALITE_OSM`

> *Description : Définition des plages horaires d'exclusivité pour la livraison, selon le format OpeningHours d'OpenStreetMap (https://wiki.openstreetmap.org/wiki/Key:opening_hours). Par exemple Mo-Su 09:00-11:00 signifie :  "stationnement interdit ou réservé à la livraison du lundi au dimanche de 9h à 11h". Par soucis de simplicité, renseigner les exceptions à la règle dans le champ COMMENTAIRE. Ne pas indiquer les horaires où le stationnement est autorisé. Note d'implémentation : champ requis uniquement pour les aires à périodiques ou zones marchandises. Les aires permanentes étant réservées en continu à la livraison (24/7), ce champ doit rester vide ou nul pour ces dernières. Complémentaire au champ TEMPORALITE_CDS*<br/>*Exemple : Mo-Fr 08:00-12:00,13:00-17:30; Sa 08:00-12:00; PH off*
- Valeur optionnelle
- Type : chaîne de caractères

#### Equipements - Propriété `EQUIPEMENTS`

> *Description : Equipements installés à proximité de l'aire de livraison. Les valeurs autorisées sont : candélabre, capteur sol, capteur caméra, borne recharge, borne escamotable, pas d'équipement. Si un équipement ne figure pas dans les valeurs autorisées, le renseigner dans COMMENTAIRE. Si plusieurs équipements, séparer les valeurs par une virgule*<br/>*Exemple : candélabre,borne recharge*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(?:(?:candélabre|capteur sol|capteur caméra|borne recharge|borne escamotable|pas d'équipement)(?:,\s*)?)+$`

#### Puissance de l'installation de recharge de véhicule électrique - Propriété `IRVE_PUISSANCE`

> *Description : Puissance de l'installation de recharge de véhicule électrique en kW*<br/>*Exemple : 22*
- Valeur optionnelle
- Type : nombre réel
- Valeur entre 1 et 4500

#### Trottoir abaissé au cul du vehicule - Propriété `ABAISSEMENT_TROTTOIR`

> *Description : Présence d'un abaissement au cul du vehicule dans le sens de ciruclation*<br/>*Exemple : Oui*
- Valeur optionnelle
- Type : booléen

#### Commentaire libre - Propriété `COMMENTAIRE`

> *Description : Commentaire libre*<br/>*Exemple : Secteur du Centre-Ville*
- Valeur optionnelle
- Type : chaîne de caractères
