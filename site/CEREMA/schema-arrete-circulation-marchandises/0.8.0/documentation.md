<MenuSchema />

## arrete-circulation-marchandises

Arrêtés permanents de circulation pour le transport de marchandises

Spécification du fichier d'échange relatif aux arrêtés permanents de circulation pour le transport de marchandises gérés par les collectivités.

- Schéma créé le : 30/04/2021
- Site web : https://github.com/CEREMA/schema-arrete-circulation
- Version : 0.8.0
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"N/A"`
- Clé primaire : `ID`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [ID](#identifiant-de-l-entite-propriete-id) | chaîne de caractères  | Oui |
| [COLL_NOM](#nom-de-la-collectivite-a-l-origine-de-l-arrete-propriete-coll-nom) | chaîne de caractères  | Oui |
| [COLL_INSEE](#code-insee-propriete-coll-insee) | chaîne de caractères  | Oui |
| [ARR_DATE](#date-de-l-arrete-propriete-arr-date) | date (format `%Y-%m-%d`) | Oui |
| [ARR_REF](#reference-de-l-arrete-propriete-arr-ref) | chaîne de caractères  | Oui |
| [ARR_OBJET](#objet-de-l-arrete-propriete-arr-objet) | chaîne de caractères  | Oui |
| [ARR_CONSIDERANT](#considerant-de-l-arrete-propriete-arr-considerant) | chaîne de caractères  | Non |
| [ARR_URL](#adresse-internet-de-l-arrete-propriete-arr-url) | chaîne de caractères (format `uri`) | Non |
| [REGL_ARTICLE](#article-du-reglement-propriete-regl-article) | chaîne de caractères  | Non |
| [REGL_SOUS_ARTICLE](#sous-article-du-reglement-propriete-regl-sous-article) | chaîne de caractères  | Non |
| [REGL_CONTEXTE](#contexte-propriete-regl-contexte) | chaîne de caractères  | Non |
| [REGL_MODALITE](#modalite-du-reglement-propriete-regl-modalite) | chaîne de caractères  | Oui |
| [VEH_TYPES](#types-de-vehicules-propriete-veh-types) | chaîne de caractères  | Non |
| [VEH_TONNAGE_MODALITE](#indication-sur-le-tonnage-propriete-veh-tonnage-modalite) | chaîne de caractères  | Non |
| [VEH_TONNAGE](#tonnage-propriete-veh-tonnage) | nombre réel  | Non |
| [VEH_USAGES](#types-d-usage-propriete-veh-usages) | chaîne de caractères  | Non |
| [VEH_LONG](#longueur-du-vehicule-propriete-veh-long) | nombre réel  | Non |
| [VEH_LARG](#largeur-du-vehicule-propriete-veh-larg) | nombre réel  | Non |
| [VEH_HAUT](#hauteur-du-vehicule-propriete-veh-haut) | nombre réel  | Non |
| [VEH_MOTORS](#types-de-motorisation-propriete-veh-motors) | chaîne de caractères  | Non |
| [VEH_CQAS](#vignettes-crit-air-propriete-veh-cqas) | chaîne de caractères  | Non |
| [PERIODE_JH](#jours-et-heures-de-circulation-propriete-periode-jh) | chaîne de caractères  | Non |
| [PERIODE_DEBUT](#entree-en-vigueur-des-restrictions-propriete-periode-debut) | chaîne de caractères  | Non |
| [PERIODE_FIN](#fin-des-restrictions-propriete-periode-fin) | chaîne de caractères  | Non |
| [EMPRISE_ZONE](#zone-associee-a-l-emprise-propriete-emprise-zone) | chaîne de caractères  | Non |
| [EMPRISE_DESIGNATION](#nom-de-la-voie-propriete-emprise-designation) | chaîne de caractères  | Oui |
| [EMPRISE_DEBUT](#debut-de-la-section-(libelle)-propriete-emprise-debut) | chaîne de caractères  | Non |
| [EMPRISE_FIN](#fin-de-la-section-(libelle)-propriete-emprise-fin) | chaîne de caractères  | Non |
| [EMPRISE_SENS](#direction-ou-sens-de-circulation-propriete-emprise-sens) | chaîne de caractères  | Non |
| [INTERV_DUREE](#duree-maximale-d-intervention-propriete-interv-duree) | heure  | Non |
| [INTERV_HMAX](#heure-maximale-d-intervention-propriete-interv-hmax) | heure  | Non |
| [GEOM_WKT](#geometrie-au-format-wkt-propriete-geom-wkt) | chaîne de caractères  | Non |
| [GEOM_DEBUT](#debut-de-la-section-(coordonnees)-propriete-geom-debut) | point géographique  | Non |
| [GEOM_FIN](#fin-de-la-section-(coordonnees)-propriete-geom-fin) | point géographique  | Non |
| [GEOM_SOURCE](#source-de-la-geometrie-propriete-geom-source) | chaîne de caractères  | Non |

#### Identifiant de l'entité - Propriété `ID`

> *Description : Il s'agit de l'identifiant, unique, de la ligne du tableau.. [Vous pouvez créer des identifiants grâce à l'application Heidi d'Etalab](https://heidi.app.etalab.studio/).*<br/>*Exemple : 133-3*
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

#### Date de l'arrêté - Propriété `ARR_DATE`

> *Description : Date de création ou de mise à jour de l'arrêté, au format ISO 8601 AAAA-MM-DD. Mettre `NC` si pas d'indication dans l'arrêté*<br/>*Exemple : 2021-04-30*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### Référence de l'arrêté - Propriété `ARR_REF`

> *Description : Référence ou numéro de l'arrêté auquel se réfère la règlementation. Si l'arrêté a été mis à jour, la référence doit être celle de l'arrêté mis à jour et non celle de l'arrêté originel. Si l'arrêté ne possède pas de référence, mettre la valeur `NC`*<br/>*Exemple : AP-13090-12*
- Valeur obligatoire
- Type : chaîne de caractères

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

#### Contexte - Propriété `REGL_CONTEXTE`

> *Description : Contexte, motif, commentaire libre entourant la mise en place de la règle de circulation*<br/>*Exemple : Forte affluence, marché*
- Valeur optionnelle
- Type : chaîne de caractères

#### Modalité du règlement - Propriété `REGL_MODALITE`

> *Description : Indique si l'arrêté interdit ou autorise*<br/>*Exemple : Autorise*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Autorise`
    - `Interdit`

#### Types de véhicules - Propriété `VEH_TYPES`

> *Description : Types de véhicules. S'il y a plusieurs types, les séparer les valeurs par le caractère '|'. Les valeurs possibles sont : 'Poids lourds', 'Véhicules utilitaires légers', 'Vélo-cargos' et 'Tous véhicules'.*<br/>*Exemple : Poids lourds|Véhicules utilitaires légers*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(Poids lourds|Véhicules utilitaires légers|Vélo-cargos|Tous véhicules))+$`

#### Indication sur le tonnage - Propriété `VEH_TONNAGE_MODALITE`

> *Description : Indication sur le tonnage minimal ou maximal. 'jusqu'à 9T' équivaut à '<= 9T' (inclusif). 'à partir de 9T' équivaut à '>= 9T' (inclusif). 'de plus de 9T' équivaut à > 9T (exclusif)*<br/>*Exemple : Depuis*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `jusqu'à`
    - `à partir de`
    - `de plus de`

#### Tonnage - Propriété `VEH_TONNAGE`

> *Description : Tonnage du véhicule. Remplir le champ `VEH_TONNAGE_MODALITE` pour dire s'il s'agit du tonnage à partir duquel ou jusqu'auquel s'applique la règle.*<br/>*Exemple : 9*
- Valeur optionnelle
- Type : nombre réel
- Valeur inférieure à : 45

#### Types d'usage - Propriété `VEH_USAGES`

> *Description : Types d'usage de véhicule. S'il y a plusieurs usages, séparer les valeurs par le caractère '|'*<br/>*Exemple : Bennes à ordures ménagères|Véhicules de police*
- Valeur optionnelle
- Type : chaîne de caractères

#### Longueur du véhicule - Propriété `VEH_LONG`

> *Description : Longueur maximale exprimée en mètres.*<br/>*Exemple : 6.5*
- Valeur optionnelle
- Type : nombre réel
- Valeur inférieure à : 30

#### Largeur du véhicule - Propriété `VEH_LARG`

> *Description : Longueur maximale exprimée en mètres.*<br/>*Exemple : 3.5*
- Valeur optionnelle
- Type : nombre réel
- Valeur inférieure à : 6

#### Hauteur du véhicule - Propriété `VEH_HAUT`

> *Description : Longueur maximale exprimée en mètres.*<br/>*Exemple : 2.5*
- Valeur optionnelle
- Type : nombre réel
- Valeur inférieure à : 6

#### Types de motorisation - Propriété `VEH_MOTORS`

> *Description : Types de motorisation. S'il y a plusieurs motorisations, les séparer par le caractère '|'. Les valeurs possibles sont : Electrique, Gaz Naturel pour Véhicules et Hydrogène.*<br/>*Exemple : Électrique|Hydrogène*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(Electrique|Gaz Naturel pour Véhicules|Hydrogène))+$`

#### Vignettes crit'air - Propriété `VEH_CQAS`

> *Description : Vignettes crit'air. Voir la [classification des vignettes Crit'Air](https://www.certificat-air.gouv.fr/docs/tableaux_classement.pdf) sur le site [certificat-air.gouv.fr](https://www.certificat-air.gouv.fr). Séparer les étiquettes CQA par le caractère '|'*<br/>*Exemple : 1|2|3*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(100% électrique et Véhicules à hydrogène|1|2|3|4|5|Véhicule non classé))+$`

#### Jours et heures de circulation - Propriété `PERIODE_JH`

> *Description : Jours et heures de circulation autorisés pour la circulation exprimés selon le format OpeningHours d'OpenStreetMap ([https://wiki.openstreetmap.org/wiki/Key:opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours)). Ce format permet d'indiquer les week-ends (we), les jours fériés (PH) et les vacances scolaires (SH). Par exemple `Mo-Fr 09:00-17:00; PH 10:00-12:00; PH Su off` signifie : 'Du lundi au vendredi de 9h à 17h sauf les jours fériés où l'ouverture est de 10h à 12h, à l'exception des jours fériés tombant un dimanche'. `24/7` indique `Tous les jours`. [Utiliser groom-groom pour récupérer les jours et heures de circulation](https://cerema-med.shinyapps.io/groom-groom?action=opening_hours)*<br/>*Exemple : Mo-Fr 08:00-12:00,13:00-17:30; Sa 08:00-12:00; PH off*
- Valeur optionnelle
- Type : chaîne de caractères

#### Entrée en vigueur des restrictions - Propriété `PERIODE_DEBUT`

> *Description : Entrée en vigueur des restrictions (par exemple pour les Zones à Faible Émission).*<br/>*Exemple : 'Début des vacances de la Toussaint' '23 Octobre'*
- Valeur optionnelle
- Type : chaîne de caractères

#### Fin des restrictions - Propriété `PERIODE_FIN`

> *Description : Fin des restrictions. Si elle existe, cela indique le caractère cyclique et non temporaire de la période de régulation.*<br/>*Exemple : 'Fin des vacances de la Toussaint' ou '8 Novembre'*
- Valeur optionnelle
- Type : chaîne de caractères

#### Zone associée à l'emprise - Propriété `EMPRISE_ZONE`

> *Description : Zone associée à l'emprise. Il s'agit généralement de la dénomination du quartier ou de l'aire piétonne associée règlementée*<br/>*Exemple : Secteur du Centre-Ville*
- Valeur optionnelle
- Type : chaîne de caractères

#### Nom de la voie - Propriété `EMPRISE_DESIGNATION`

> *Description : Nom de la voie, ou de la zone associée à la section règlementée. La zone peut être une aire piétonne, un quartier, une zone ZFE ([voir le schéma des ZFE](https://schema.data.gouv.fr/etalab/schema-zfe/latest.html))*<br/>*Exemple : Avenue Philippe Solari, Commune d'Aix-en-Provence, Quartier Mazarin, 200046977-ZFE-001*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[a-zA-Z0-9\-\–\'\’\s\d\u00C0-\u00FF\(\)\,\.]+$`

#### Début de la section (libellé) - Propriété `EMPRISE_DEBUT`

> *Description : Indication textuelle de l'endroit à partir duquel la règlementation s'applique, telle qu'écrite dans l'arrêté. Pour indiquer les coordonnées GPS, se référer au champ `GEOM_DEBUT`.*<br/>*Exemple : 22 avenue Philippe Solari, Croisement de l'avenue Philippe Solari avec la rue Gaston de Saporta*
- Valeur optionnelle
- Type : chaîne de caractères

#### Fin de la section (libellé) - Propriété `EMPRISE_FIN`

> *Description : Indication textuelle de l'endroit au bout duquel la règlementation s'applique, telle qu'écrite dans l'arrêté. Pour indiquer les coordonnées GPS, se référer au champ `GEOM_FIN`.*<br/>*Exemple : 34 bis avenue Philippe Solari, Intersection de l'avenue Philippe Solari avec le boulevard des Charmettes*
- Valeur optionnelle
- Type : chaîne de caractères

#### Direction ou sens de circulation - Propriété `EMPRISE_SENS`

> *Description : Direction ou sens de circulation associé à la règlementation. Pair : concerne la circulation le long des adresses à chiffre pair. `Nord` signifie vers le Nord, soit "vers le haut".*<br/>*Exemple : Deux sens, Impair, Nord*
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

#### Durée maximale d'intervention - Propriété `INTERV_DUREE`

> *Description : Durée maximale d'intervention (au niveau d'une aire piétonne, par exemple). L'entrée et la sortie dans une zone peuvent être horodatées à la délivrance d'un ticket lors de la traversée d'une borne de passage.*<br/>*Exemple : 03:00:00*
- Valeur optionnelle
- Type : heure

#### Heure maximale d'intervention - Propriété `INTERV_HMAX`

> *Description : Heure max à partir de laquelle les véhicules doivent quitter l'aire piétonne.*<br/>*Exemple : 22:00:00*
- Valeur optionnelle
- Type : heure

#### Géométrie au format WKT - Propriété `GEOM_WKT`

> *Description : Géométrie de la rue (ligne), ou de l'emprise (polygone) exprimée au format [WKT (Well Know Text](https://fr.wikipedia.org/wiki/Well-known_text) sous le système de projection WGS84 (EPSG:4326)*<br/>*Exemple : LineString(5.39340184 45.56538751, 5.41017215 45.56722934, 5.42510063 45.5679079)*
- Valeur optionnelle
- Type : chaîne de caractères

#### Début de la section (coordonnées) - Propriété `GEOM_DEBUT`

> *Description : Coordonnées GPS du début de la section. Se réfère à `EMPRISE_DEBUT`. S'écrit sous la forme 'long,lat' (5 ou 6 décimales sont conseillées).*<br/>*Exemple : 5.42101,43.53591*
- Valeur optionnelle
- Type : point géographique

#### Fin de la section (coordonnées) - Propriété `GEOM_FIN`

> *Description : Coordonnées GPS de la fin de la section. Se réfère à `EMPRISE_DEBUT`. S'écrit sous la forme 'long,lat' (5 ou 6 décimales sont conseillées).*<br/>*Exemple : 5.42101,43.53591*
- Valeur optionnelle
- Type : point géographique

#### Source de la géométrie - Propriété `GEOM_SOURCE`

> *Description : Source de la donnée depuis laquelle la donnée a été extraite (OpenStreetMap, IGN,...).*<br/>*Exemple : BDTOPO IGN 2021*
- Valeur optionnelle
- Type : chaîne de caractères
