<MenuSchema />

<MenuSchema />

## passage-a-niveau

Schéma pour les passages à niveau

Spécification du fichier décrivant les emplacements de passages à niveau.

- Schéma créé le : 15/09/2021
- Site web : https://github.com/etalab/schema-passage-a-niveau
- Version : 0.1.0
- Clé primaire : `id_pn`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id_pn](#propriete-id-pn) | chaîne de caractères  | Oui |
| [reseau](#propriete-reseau) | chaîne de caractères  | Non |
| [libelle](#propriete-libelle) | chaîne de caractères  | Non |
| [classe](#propriete-classe) | chaîne de caractères  | Non |
| [obstacle](#propriete-obstacle) | chaîne de caractères  | Non |
| [code_ligne](#propriete-code-ligne) | chaîne de caractères  | Non |
| [pk](#propriete-pk) | chaîne de caractères  | Non |
| [diffr](#propriete-diffr) | chaîne de caractères  | Non |
| [date_maj](#propriete-date-maj) | date  | Oui |
| [source](#propriete-source) | chaîne de caractères  | Oui |
| [xlong_wgs84](#propriete-xlong-wgs84) | nombre réel  | Oui |
| [ylat_wgs84](#propriete-ylat-wgs84) | nombre réel  | Oui |

#### Propriété `id_pn`

> *Description : Identifiant du PN, selon la règle SIREN-PN-XXXXX où SIREN est le code SIREN du producteur et XXXXX est le numéro d’ordre d’arrivée dans la base sur 5 chiffres, commençant par 001*<br/>*Exemple : 130006265-PN-00001*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `reseau`

> *Description : Identifiant du réseau, selon les règles de chaque gestionnaire d’infrastructure, s’il y a lieu.*<br/>*Exemple : ReseauNord*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `libelle`

> *Description : Le nom usuel du PN, s’il existe.*<br/>*Exemple : PN48*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `classe`

> *Description : La classe du PN, selon la nomenclature SNCF Réseau mentionnée ci-dessous, sous la forme « CLASSE XX ».
- 10 : PN public pour voitures sans barrières protection assurée par un agent
- 11 : PN public pour voitures avec barrières gardé sans passage piétons accolé manoeuvré à pied d'œuvre
- 12 : PN public pour voitures avec barrières gardé sans passage piétons accolé manoeuvré à distance
- 13 : PN public pour voitures avec barrières gardé sans passage piétons accolé manoeuvré à pied d'oeuvre et distance
- 14 : PN public pour voitures avec barrières gardé avec passage piétons accolé manoeuvré à pied d'œuvre
- 15 : PN public pour voitures avec barrières gardé avec passage piétons accolé manoeuvré à distance
- 16 : PN public pour voitures avec barrières gardé avec passage piétons accolé manoeuvré à pied d'oeuvre distance
- 17 : PN public pour voitures avec barrières ou 1/2 barrières non gardé à SAL 2 et SAL 2B
- 18 : PN public pour voitures avec barrières ou 1/2 barrières non gardé à SAL 2 + ilot séparateur
- 19 : PN public pour voitures avec barrières ou 1/2 barrières non gardé à SAL 4
- 20 : PN public pour voitures sans barrières sans SAL
- 21 : PN public pour voitures sans barrières avec SAL 0
- 31 : PN public isolé pour piétons sans portillons
- 32 : PN public isolé pour piétons avec portillons
- 41 : PN privé pour voitures sans barrières
- 42 : PN privé pour voitures avec barrières sans passage piétons accolé
- 43 : PN privé pour voitures avec barrières avec passage piétons accolé public
- 44 : PN privé pour voitures avec barrières avec passage piétons accolé privé
- 45 : PN privé isolé pour piétons sans portillons
- 46 : PN privé isolé pour piétons avec portillons
- 0 : PN secondaire : Un PN peut être localisé sur plusieurs lignes et possède une identification différente sur chacune des lignes où il est localisé. Une des identifications, appelée PN père, porte la classe du PN (classe 10 à classe 46). Les autres identifications, appelées PN secondaires, portent la classe 00. La référence au PN père est indiquée dans le libellé d’obstacle des PN secondaires sous la forme suivante : <libellé du PN père> <code ligne du PN père> <PK du PN père >*<br/>*Exemple : CLASSE 20*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `CLASSE 00`
    - `CLASSE 10`
    - `CLASSE 11`
    - `CLASSE 12`
    - `CLASSE 13`
    - `CLASSE 14`
    - `CLASSE 15`
    - `CLASSE 16`
    - `CLASSE 17`
    - `CLASSE 18`
    - `CLASSE 19`
    - `CLASSE 20`
    - `CLASSE 21`
    - `CLASSE 31`
    - `CLASSE 32`
    - `CLASSE 41`
    - `CLASSE 42`
    - `CLASSE 43`
    - `CLASSE 44`
    - `CLASSE 45`
    - `CLASSE 46`

#### Propriété `obstacle`

> *Description : Le nom de la voirie routière concernée par le passage à niveau, si connue.
Le format est libre, mais il est conseillé de se baser sur le format SNCF de type <abréviation type voirie>, complété, si nécessaire, par <numéro voirie>-<numéro branche>
Les abréviations de type de voiries à privilégier sont :
• RN (route nationale)
• CD (chemin départemental, ce qui correspond à une route départementale)
• VC (voie communale)
• CP (chemin privé)
Le numéro de la route, ou le numéro de branche, sont définis par le gestionnaire routier, et n’existent a priori que dans les cas des routes nationales et des « chemins départementaux ». La branche principale est numérotée 0, ce qui correspond au cas le plus courant.
Il est également possible de mentionner « Autre » si le statut est différent des exemples ci-dessus, ou de mentionner le nom exact de la voirie s’il existe (« route de la forêt »...)*<br/>*Exemple : RN88-0*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `code_ligne`

> *Description : Le code ligne concernant le réseau ferroviaire, selon les règles de chaque gestionnaire d’infrastructure, s’il y a lieu.*<br/>*Exemple : Ligne 01*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `pk`

> *Description : Le pk du PN sur la ligne mentionnée à la propriété précédente, si utilisé par le gestionnaire ferroviaire*<br/>*Exemple : 032+999*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `diffr`

> *Description : L’arrêté du 4 mai 2006 régissant les transports exceptionnels définit en son article 12 les caractéristiques maximales des convois susceptibles d’emprunter un passage à niveau sans nécessiter un examen particulier du transporteur, à l’exception des passages à niveau « signalés sur l'application informatique dédiée aux itinéraires de transports exceptionnels », qui nécessite un examen particulier dans tous les cas.
Il est également stipulé : « les exploitants ferroviaires actualisent et adressent chaque année aux services instructeurs la liste des passages à niveau présentant des difficultés de franchissement ».
Dans le cas où le passage à niveau présente une difficulté de franchissement au sens de cet article 12 signalée aux services instructeurs, cette donnée vaut donc « Oui », et doit rester vide dans le cas contraire.*<br/>*Exemple : Oui*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `date_maj`

> *Description : Date de dernière mise à jour des données. Notation ISO 8601, format AAAA-MM-DD*<br/>*Exemple : 2016-10-31*
- Valeur obligatoire
- Type : date

#### Propriété `source`

> *Description : SIREN de l’entité ayant fourni la donnée*<br/>*Exemple : 225300011*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{9}$`

#### Propriété `xlong_wgs84`

> *Description : La longitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation du centre du passage à niveau, exprimée dans le système de coordonnées WGS84*<br/>*Exemple : 1.452323*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -90 et 90

#### Propriété `ylat_wgs84`

> *Description : La latitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation du centre du passage à niveau, exprimée dans le système de coordonnées WGS84*<br/>*Exemple : 1.452323*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -90 et 90
