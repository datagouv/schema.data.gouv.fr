<MenuSchema />

## schema-comptage-mobilites-channel

Comptage des mobilités (Channel)

Spécification du fichier d'échange relatif aux comptages des mobilités.

- Schéma créé le : 06/05/2021
- Site web : https://github.com/etalab/schema-comptage-mobilites
- Version : 0.2.3
- Clé primaire : `channel_id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [channel_id](#propriete-channel-id) | chaîne de caractères  | Oui |
| [channel_provider_id](#propriete-channel-provider-id) | chaîne de caractères  | Non |
| [site_provider_id](#propriete-site-provider-id) | chaîne de caractères  | Non |
| [site_id](#propriete-site-id) | chaîne de caractères  | Oui |
| [mobility_type](#propriete-mobility-type) | chaîne de caractères  | Non |
| [comment](#propriete-comment) | chaîne de caractères  | Non |
| [counter_transmission_type](#propriete-counter-transmission-type) | chaîne de caractères  | Non |
| [publication_transmission_type](#propriete-publication-transmission-type) | chaîne de caractères  | Non |
| [counter_type](#propriete-counter-type) | chaîne de caractères  | Non |
| [direction](#propriete-direction) | chaîne de caractères  | Non |
| [provider_direction_code](#propriete-provider-direction-code) | chaîne de caractères  | Non |
| [provider_direction_name](#propriete-provider-direction-name) | chaîne de caractères  | Non |
| [data_provider_name](#propriete-data-provider-name) | chaîne de caractères  | Non |
| [temporality](#propriete-temporality) | chaîne de caractères  | Oui |
| [started_at](#propriete-started-at) | date et heure  | Oui |
| [ended_at](#propriete-ended-at) | date et heure  | Non |
| [last_updated_at](#propriete-last-updated-at) | date et heure  | Non |
| [time_step](#propriete-time-step) | nombre réel  | Non |
| [provider_portal_url](#propriete-provider-portal-url) | chaîne de caractères  | Non |

#### Propriété `channel_id`

> *Description : Identifiant unique du channel dans le référentiel de la collectivité. Cette valeur doit être utilisée dans le champ `channel_id` du fichier `measure` pour faire le lien. Cette valeur doit être unique dans l'ensemble des fichiers.*<br/>*Exemple : C-C-01-Baix*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `channel_provider_id`

> *Description : identifiant unique du channel dans le référentiel du fournisseur technique. Cette information est utile à des fins de diagnostics/synchronisation de données.*<br/>*Exemple : EC-01-Baix*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `site_provider_id`

> *Description : Identifiant channel dans le réferentiel fournisseur. Cette information ne peut être portée par le site lui même car ça peut être un format multi-fournisseurs.*<br/>*Exemple : MC-Baix*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `site_id`

> *Description : Identifiant unique du site (dans le référentiel de la collectivité) où est installé le compteur dans les bases de données de la collectivité territoriale productrice de données. Cette valeur doit faire référence au champ `site_id` du fichier `site` pour faire le lien.*<br/>*Exemple : C01-Baix*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `mobility_type`

> *Description : Types de pratiques enregistrés par le compteur sur l'infrastructure. Choix multiple possible avec chaque valeur séparée par une virgule (mais dans ce cas il est impératif d'entourer la totalité de la cellule par des guillemets).*<br/>*Exemple : E-SCOOTER,PEDESTRIAN*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|,)(BIKE|TWO WHEELS MOTORIZED|PEDESTRIAN|E\-SCOOTER|HORSE\-RIDER|CAR|BUS|MINIBUS|TRUCK|VAN|TRAMWAY|CANOE|UNDEFINED))+$`

#### Propriété `comment`

> *Description : Description textuelle de l'usage du channel. Par exemple, peut être utilisé pour indiquer une campagne de relevé temporaire. 50 caractères autorisés.*<br/>*Exemple : Campagne temporaire aout-septembre 2020*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `counter_transmission_type`

> *Description : Méthode utilisée pour récupérer les données depuis le compteur.*<br/>*Exemple : MANUAL*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `REMOTE TRANSMISSION`
    - `MANUAL`

#### Propriété `publication_transmission_type`

> *Description : Méthode utilisée pour transmettre les données vers le portail opendata.*<br/>*Exemple : API*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `API`
    - `MANUAL`

#### Propriété `counter_type`

> *Description : Type de compteur. Choix multiple possible avec chaque valeur séparée par une virgule (mais dans ce cas il est impératif d'entourer la totalité de la cellule par des guillemets). En cas de multiples valeurs, les comptages sont considérés comme étant aggrégées, sans différenciation. Si on souhaite différencier les pratiques, il faut créer plusieurs channels.*<br/>*Exemple : VIDEO SENSOR*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|,)(INDUCTIVE LOOP|ELECTROMAGNETIC SENSOR|PASSIVE INFRARED|ACTIVE INFRARED|PIEZOELECTRIC SENSOR|RADAR SENSOR|VIDEO SENSOR|PNEUMATIC TUBE SENSOR|SLAB SENSOR|LIGHT BEAM SENSOR|MANUAL|ACOUSTIC|LIDAR|OPTICAL FIBER SENSOR|MAGNETOMETER|OTHER))+$`

#### Propriété `direction`

> *Description : Direction vers laquelle se dirigent les usagers comptés dans le sens 1. Si besoin de modéliser 2 directions, créez deux channels.*<br/>*Exemple : SW*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `N`
    - `NW`
    - `NE`
    - `W`
    - `SW`
    - `S`
    - `SE`
    - `E`

#### Propriété `provider_direction_code`

> *Description : Codification interne aux fournisseurs qui permet d'identifier le sens comme les notions d `IN/OUT`.*<br/>*Exemple : IN*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `provider_direction_name`

> *Description : Description de la direction qui peut aider un réutilisateur à comprendre le `provider_direction_code` notamment lorsque le fournisseur ne peut pas, pour l'instant, fournir de champ `direction`.*<br/>*Exemple : De Gare du Nord vers Gare de l'Est*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `data_provider_name`

> *Description : Entité ayant fourni les données.*<br/>*Exemple : ADAV*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `temporality`

> *Description : Périodicité du comptage. Le compteur compte-t-il temporairement ou de manière permanente sur un même site ?*<br/>*Exemple : PERMANENT*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `TEMPORARY`
    - `PERMANENT`

#### Propriété `started_at`

> *Description : Date et heure de début de comptage. Utile par exemple pour déclarer un début d'usage de compteur temporaire. Notation ISO 8601, format 1977-04-22T06:00:00Z. Ne doit pas être modifié dans le temps. Si besoin, recréez un nouveau channel).*<br/>*Exemple : 2020-06-22T10:00:00Z*
- Valeur obligatoire
- Type : date et heure

#### Propriété `ended_at`

> *Description : Date et heure de fin de comptage. Utile par exemple pour déclarer la fin de l'usage d'un compteur. Notation ISO 8601, format 1977-04-22T06:00:00Z. Si ce champ est rempli, un nouveau channel doit être créé.*<br/>*Exemple : 2021-06-22T10:00:00Z*
- Valeur optionnelle
- Type : date et heure

#### Propriété `last_updated_at`

> *Description : Date de dernière mise à jour des données, Notation ISO 8601, format 1977-04-22T06:00:00Z.*<br/>*Exemple : 2021-06-22T10:00:00Z*
- Valeur optionnelle
- Type : date et heure

#### Propriété `time_step`

> *Description : Le pas de temps des données fournies, en secondes. Doit être utilisé pour extrapoler la date de fin du comptage si elle est absente. Conditionnellement obligatoire. Obligatoire lorsque le champ `end_datetime` n'est complété*<br/>*Exemple : 900*
- Valeur optionnelle
- Type : nombre réel

#### Propriété `provider_portal_url`

> *Description : Page web publique des données.*<br/>*Exemple : http://www.eco-public.com/public2/?id=100057894*
- Valeur optionnelle
- Type : chaîne de caractères
