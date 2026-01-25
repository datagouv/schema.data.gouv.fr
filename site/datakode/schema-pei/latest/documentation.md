<MenuSchema />

<MenuSchema />

## pei

Point d'Eau Incendie (PEI)

Spécification du modèle de données relatif aux PEI

- Schéma créé le : 12/03/2021
- Site web : https://gitlab.com/datakode/schema-pei
- Version : 1.0.0

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [insee](#numero-insee-propriete-insee) | chaîne de caractères  | Oui |
| [id_sdis](#identifiant-interne-du-pei-pour-le-sdis-propriete-id-sdis) | chaîne de caractères  | Non |
| [id_gestion](#identifiant-interne-du-pei-pour-le-gestionnaire-propriete-id-gestion) | chaîne de caractères  | Non |
| [nom_gest](#nom-du-gestionnaire-responsable-de-distribution-propriete-nom-gest) | chaîne de caractères  | Non |
| [ref_terr](#numero-ou-reference-du-point-d'eau-visible-sur-le-terrain-propriete-ref-terr) | chaîne de caractères  | Non |
| [type_pei](#type-de-point-d'eau-incendie-propriete-type-pei) | chaîne de caractères  | Oui |
| [type_rd](#precision-sur-le-type-de-point-d'eau-incendie-defini-dans-le-reglement-departemental-deci--typologie-utilisee-au-niveau-local-pour-caracteriser-le-type-de-point-d'eau-propriete-type-rd) | chaîne de caractères  | Oui |
| [diam_pei](#diametre-interieur-du-poteau-ou-de-la-bouche-propriete-diam-pei) | nombre réel  | Non |
| [diam_cana](#propriete-diam-cana) | nombre réel  | Non |
| [source_pei](#propriete-source-pei) | chaîne de caractères  | Non |
| [statut](#statut-du-point-d'eau-propriete-statut) | chaîne de caractères  | Non |
| [nom_etab](#dans-le-cas-d'un-statut-prive,-nom-de-l'etablissement-proprietaire-propriete-nom-etab) | chaîne de caractères  | Non |
| [situation](#situation-du-pei-propriete-situation) | chaîne de caractères  | Non |
| [press_dyn](#pression-dynamique-en-bars-au-debit-nominal-propriete-press-dyn) | nombre réel  | Non |
| [press_stat](#pression-statique-en-bars-propriete-press-stat) | nombre réel  | Non |
| [debit](#valeur-de-debit-mesure-exprime-en-m3-h-sous-une-pression-de-1-bar-propriete-debit) | nombre réel  | Non |
| [volume](#capacite-volumique-utile-de-la-source-d'eau-en-m3-propriete-volume) | nombre réel  | Non |
| [disponible](#valide-a-la-date-de-derniere-mise-a-disposition-des-donnees-propriete-disponible) | booléen  | Non |
| [date_dispo](#date-de-dernier-changement-d'etat-de-disponibilite-propriete-date-dispo) | date  | Non |
| [date_mes](#date-de-mise-en-service-du-pei-propriete-date-mes) | date  | Non |
| [date_maj](#date-de-derniere-mise-a-jour-de-la-donnee-propriete-date-maj) | date  | Non |
| [date_ct](#date-du-dernier-controle-technique-propriete-date-ct) | date  | Non |
| [date_ro](#date-de-la-derniere-reconnaissance-operationnelle-propriete-date-ro) | date  | Non |
| [prec](#classes-de-precision-propriete-prec) | chaîne de caractères  | Non |
| [x](#x-en-lambert-93-(precision-de-2-decimales)-propriete-x) | nombre réel  | Non |
| [y](#y-en-lambert-93-(precision-de-2-decimales)-propriete-y) | nombre réel  | Non |
| [lon](#longitude-propriete-lon) | nombre réel  | Non |
| [lat](#latitude-propriete-lat) | nombre réel  | Non |

#### Numéro INSEE - Propriété `insee`

> *Description : Numéro INSEE de la commune sur laquelle le PEI est situé. Dans le cas d’un plan d’eau et des cours d’eau plusieurs points d’aspiration peuvent y être associés. On prend alors en compte la localisation du point d’aspiration pour identifier la commune*<br/>*Exemple : 34172*
- Valeur obligatoire
- Type : chaîne de caractères

#### Identifiant interne du PEI pour le SDIS - Propriété `id_sdis`

> *Description : Identifiant interne du PEI pour le SDIS*<br/>*Exemple : 34172.02080*
- Valeur optionnelle
- Type : chaîne de caractères

#### Identifiant interne du PEI pour le gestionnaire - Propriété `id_gestion`

> *Description : Identifiant interne du PEI pour le gestionnaire*<br/>*Exemple : 42*
- Valeur optionnelle
- Type : chaîne de caractères

#### Nom du gestionnaire responsable de distribution - Propriété `nom_gest`

> *Description : Nom du gestionnaire responsable de distribution*<br/>*Exemple : BRL*
- Valeur optionnelle
- Type : chaîne de caractères

#### Numéro ou référence du point d’eau visible sur le terrain - Propriété `ref_terr`

> *Description : Numéro ou référence du point d’eau visible sur le terrain*<br/>*Exemple : 2080*
- Valeur optionnelle
- Type : chaîne de caractères

#### Type de point d’eau incendie - Propriété `type_pei`

> *Description : Signification : PI (Poteau d’Incendie), BI (Prise d’eau sous pression, notamment bouche d’incendie), PA (Point d’aspiration aménagé (point de puisage…)), CI (Citerne aérienne ou enterrée) Cette typologie est issue du règlement national (p. 39). Si ce dernier évoluait, cette typologie évoluerait en conséquence*<br/>*Exemple : PI*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `PI`
    - `BI`
    - `PA`
    - `CI`

#### Précision sur le type de point d’eau incendie défini dans le règlement départemental DECI. Typologie utilisée au niveau local pour caractériser le type de point d’eau - Propriété `type_rd`

> *Description : Précision sur le type de point d’eau incendie défini dans le règlement départemental DECI. Typologie utilisée au niveau local pour caractériser le type de point d’eau*<br/>*Exemple : poteau*
- Valeur obligatoire
- Type : chaîne de caractères

#### Diamètre intérieur du poteau ou de la bouche - Propriété `diam_pei`

> *Description : Norme européenne : Poteau Incendie NF EN 14384 (Février 2006) NF S 61 213 CN (Avril 2007) (valeurs possibles : 80, 100 ou 150 ; 80 = 1 prise de 65 - 100 = 2 prises de diamètre 65, 1 prise de diamètre 100 - 150 = 2 prises de diamètre 100) Bouche Incendie NF EN 14339 (Février 2006) NF S 61 211 CN (Avril 2007) (valeur possible : 1 prise de diamètre 100).*<br/>*Exemple : 100*
- Valeur optionnelle
- Type : nombre réel
- Valeurs autorisées : 
    - `80`
    - `100`
    - `150`

#### Propriété `diam_cana`

> *Description : Diamètre de la canalisation exprimé en mm pour les PI et BI*<br/>*Exemple : 60*
- Valeur optionnelle
- Type : nombre réel

#### Propriété `source_pei`

> *Description : Source du point d’eau*<br/>*Exemple : reseau_aep*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `citerne`
    - `plan_eau`
    - `piscine`
    - `puits`
    - `cours_eau`
    - `reseau_aep`
    - `reseau_irrigation`

#### Statut du point d’eau - Propriété `statut`

> *Description : Le statut du point d’eau est décrit dans le règlement national (p. 43)*<br/>*Exemple : prive*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `public`
    - `prive`

#### Dans le cas d’un statut privé, nom de l’établissement propriétaire - Propriété `nom_etab`

> *Description : Dans le cas d’un statut privé, nom de l’établissement propriétaire*<br/>*Exemple : GIFI*
- Valeur optionnelle
- Type : chaîne de caractères

#### Situation du PEI - Propriété `situation`

> *Description : Adresse ou informations permettant de faciliter la localisation du point d’eau sur le terrain*<br/>*Exemple : Rue Clement Ader*
- Valeur optionnelle
- Type : chaîne de caractères

#### Pression dynamique en bars au débit nominal - Propriété `press_dyn`

> *Description : Pression dynamique en bars au débit nominal*<br/>*Exemple : 4*
- Valeur optionnelle
- Type : nombre réel

#### Pression statique en bars - Propriété `press_stat`

> *Description : Pression statique en bars*<br/>*Exemple : 4.5*
- Valeur optionnelle
- Type : nombre réel

#### Valeur de débit mesuré exprimé en m3/h sous une pression de 1 bar - Propriété `debit`

> *Description : Valeur de débit mesuré exprimé en m3/h sous une pression de 1 bar*<br/>*Exemple : 80*
- Valeur optionnelle
- Type : nombre réel

#### Capacité volumique utile de la source d’eau en m3 - Propriété `volume`

> *Description : Si la source est inépuisable, ne pas renseigner ce champ (cours d’eau ou plan d’eau pérenne)*<br/>*Exemple : 620*
- Valeur optionnelle
- Type : nombre réel

#### Valide à la date de dernière mise à disposition des données - Propriété `disponible`

> *Description : *<br/>*Exemple : 1*
- Valeur optionnelle
- Type : booléen

#### Date de dernier changement d’état de disponibilité - Propriété `date_dispo`

> *Description : Date de dernier changement d’état de disponibilité*<br/>*Exemple : 2020-02-03*
- Valeur optionnelle
- Type : date

#### Date de mise en service du PEI - Propriété `date_mes`

> *Description : Date de mise en service du PEI*<br/>*Exemple : 2020-02-03*
- Valeur optionnelle
- Type : date

#### Date de dernière mise à jour de la donnée - Propriété `date_maj`

> *Description : Date de dernière mise à jour de la donnée*<br/>*Exemple : 2020-02-03*
- Valeur optionnelle
- Type : date

#### Date du dernier contrôle technique - Propriété `date_ct`

> *Description : Date du dernier contrôle technique*<br/>*Exemple : 2020-02-03*
- Valeur optionnelle
- Type : date

#### Date de la dernière reconnaissance opérationnelle - Propriété `date_ro`

> *Description : Date de la dernière reconnaissance opérationnelle*<br/>*Exemple : 2020-02-03*
- Valeur optionnelle
- Type : date

#### Classes de précision - Propriété `prec`

> *Description : 01 (0 à 1 m), 05 (de 1 à 5 m), 10 (de 5 à 10 m), 99 (plus de 10 m), vide si inconnu*<br/>*Exemple : 05*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `01`
    - `05`
    - `10`
    - `99`

#### x en lambert 93 (précision de 2 décimales) - Propriété `x`

> *Description : x en lambert 93 (précision de 2 décimales)*<br/>*Exemple : 723894.42*
- Valeur optionnelle
- Type : nombre réel

#### y en lambert 93 (précision de 2 décimales) - Propriété `y`

> *Description : y en lambert 93 (précision de 2 décimales)*<br/>*Exemple : 6262032.84*
- Valeur optionnelle
- Type : nombre réel

#### Longitude - Propriété `lon`

> *Description : Coordonnée de longitude exprimée conformément au système national de référence de coordonnées géographiques et planimétriques ou à défaut en WGS 84. Le signe de séparation entre les parties entière et décimale du nombre est le point*<br/>*Exemple : 3.2951013*
- Valeur optionnelle
- Type : nombre réel
- Valeur entre -180 et 180

#### Latitude - Propriété `lat`

> *Description : Coordonnée de latitude  exprimée conformément au système national de référence de coordonnées géographiques et planimétriques ou à défaut en WGS 84. Le signe de séparation entre les parties entière et décimale du nombre est le point*<br/>*Exemple : 43.4569932*
- Valeur optionnelle
- Type : nombre réel
- Valeur entre -90 et 90
