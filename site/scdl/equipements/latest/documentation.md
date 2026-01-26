<MenuSchema />

## equipements

Équipements

Spécification du modèle de données relatif aux équipements collectifs publics d'une collectivité

- Schéma créé le : 20/11/2018
- Site web : https://gitlab.com/opendatafrance/scdl/equipements
- Version : 0.1.5

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [COLL_NOM](#nom-de-la-collectivite-propriete-coll-nom) | chaîne de caractères  | Oui |
| [COLL_SIRET](#code-siret-de-la-collectivite-propriete-coll-siret) | chaîne de caractères  | Oui |
| [EQUIP_UID](#identifiant-unique-de-l-equipement-propriete-equip-uid) | chaîne de caractères  | Oui |
| [EQUIP_THEME](#theme-de-classement-de-l-equipement-propriete-equip-theme) | chaîne de caractères  | Oui |
| [EQUIP_CODE](#code-d-identification-de-l-equipement-propriete-equip-code) | chaîne de caractères  | Oui |
| [EQUIP_TYPE](#type-d-equipement-propriete-equip-type) | chaîne de caractères  | Oui |
| [EQUIP_NOM](#nom-complet-de-l-equipement-propriete-equip-nom) | chaîne de caractères  | Oui |
| [ADR_NUMERO](#numero-d'adresse-complet-propriete-adr-numero) | chaîne de caractères  | Oui |
| [ADR_NOMVOIE](#nom-complet-de-la-voie-propriete-adr-nomvoie) | chaîne de caractères  | Oui |
| [ADR_CODEPOSTAL](#code-postal-propriete-adr-codepostal) | chaîne de caractères  | Oui |
| [ADR_COMMUNE](#commune-propriete-adr-commune) | chaîne de caractères  | Oui |
| [ADR_CLE_INTEROP](#cle-d-interoperabilite-de-l-adresse-propriete-adr-cle-interop) | chaîne de caractères  | Non |
| [ERP_ID](#identifiant-d-etablissement-recevant-du-public-propriete-erp-id) | chaîne de caractères  | Non |
| [ERP_TYPE](#type-d-etablissement-recevant-du-public-propriete-erp-type) | chaîne de caractères  | Non |
| [ERP_CATEGORIE](#categorie-d-etablissement-recevant-du-public-propriete-erp-categorie) | nombre entier  | Non |
| [EQUIP_LAT](#latitude-propriete-equip-lat) | nombre réel  | Oui |
| [EQUIP_LONG](#longitude-propriete-equip-long) | nombre réel  | Oui |
| [EQUIP_OUVERTURE](#jours-et-horaires-d-ouverture-propriete-equip-ouverture) | chaîne de caractères  | Non |
| [EQUIP_TEL](#telephone-propriete-equip-tel) | chaîne de caractères  | Non |
| [EQUIP_EMAIL](#adresse-email-propriete-equip-email) | chaîne de caractères (format `email`) | Non |
| [EQUIP_WEB](#adresse-du-site-web-propriete-equip-web) | chaîne de caractères (format `uri`) | Non |

#### Nom de la collectivité - Propriété `COLL_NOM`

> *Description : Nom officiel de la collectivité sur le territoire de laquelle sont situés les équipements collectifs publics répertoriés dans le jeu de données. Ce nom est limité à 140 caractères maximum.*<br/>*Exemple : Département du Val-de-Marne*
- Valeur obligatoire
- Type : chaîne de caractères

#### Code SIRET de la collectivité - Propriété `COLL_SIRET`

> *Description : Identifiant du [Système d'Identification du Répertoire des Etablissements](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_%C3%A9tablissements) (SIRET) de la collectivité sur le territoire de laquelle sont situés les équipements collectifs publics répertoriés dans le jeu de données. Il est composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant.*<br/>*Exemple : 22940028800010*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Identifiant unique de l'équipement - Propriété `EQUIP_UID`

> *Description : Cet identifiant unique est constitué du [code INSEE de la commune](https://fr.wikipedia.org/wiki/Code_Insee) où est implanté l'équipement sur 5 caractères (incluant 'A' ou 'B' pour la Corse) suivi du code d'identification de l'équipement (EQUIP_CODE), séparés par un tiret du milieu. Il s'agit donc d'une chaîne de 18 caractères qui permet d'identifier chacun des équipements référencés de manière univoque.*<br/>*Exemple : 94059-01010401-001*
- Valeur obligatoire
- Type : chaîne de caractères
- Moins de 18 caractères
- Motif : `^[0-9A-B]{5}-[0-9]{8}-[0-9]{3}`

#### Thème de classement de l'équipement - Propriété `EQUIP_THEME`

> *Description : Les entrées de la [nomenclature des équipements collectifs publics](https://docs.google.com/spreadsheets/d/157WPWMUDC6w58Aep1dgWzzunKEjzSd-QmyuEHa8RFqc) sont divisées en 10 grandes familles. Les intitulés de ces grandes familles sont utilisés pour classer les équipements par thème. Ce champ doit donc être renseigné à partir d'une des valeurs suivantes : 'Equipement administratif', 'Equipement de justice', 'Equipement sanitaire', 'Equipement social et d'animation', 'Equipement sportif et de loisirs', 'Equipement d'enseignement', 'Equipement cultuel', 'Equipement culturel', 'Equipement de mobilité', ou 'Autre équipement'.*<br/>*Exemple : Equipement administratif*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Equipement administratif`
    - `Equipement de justice`
    - `Equipement sanitaire`
    - `Equipement social et d'animation`
    - `Equipement sportif et de loisirs`
    - `Equipement d'enseignement`
    - `Equipement cultuel`
    - `Equipement culturel`
    - `Equipement de mobilité`
    - `Autre équipement`

#### Code d'identification de l'équipement - Propriété `EQUIP_CODE`

> *Description : Le code d'identification de l'équipement est constitué du code sur 8 chiffres des niveaux 3 ou 4 (quand il existe) de la [nomenclature des équipements collectifs publics](https://docs.google.com/spreadsheets/d/157WPWMUDC6w58Aep1dgWzzunKEjzSd-QmyuEHa8RFqc), suivi d'un numéro d'ordre sur 3 chiffres (de '001' minimum à '999' maximum), séparés par un tiret du milieu. Il est utilisé pour construire l'identifiant unique de l'équipement (EQUIP_UID). En fonction du niveau et donc du code choisi dans la nomenclature, un des termes associés doit être reporté en tant que valeur pour définir le type d'équipement (EQUIP_TYPE).*<br/>*Exemple : 01010401-001*
- Valeur obligatoire
- Type : chaîne de caractères
- Moins de 12 caractères

#### Type d'équipement - Propriété `EQUIP_TYPE`

> *Description : Le type d'équipement correspond à un des termes associés au code choisi dans la [nomenclature des équipements collectifs publics](https://docs.google.com/spreadsheets/d/157WPWMUDC6w58Aep1dgWzzunKEjzSd-QmyuEHa8RFqc) pour identifier l'équipement dans EQUIP_CODE. Il s'agit donc de renseigner ce champ avec une valeur, jugée la plus pertinente pour désigner l'équipement, dans la limite de 140 caractères maximum en prenant soin d'échapper ou de supprimer les éventuelles virgules.*<br/>*Exemple : Mairie*
- Valeur obligatoire
- Type : chaîne de caractères

#### Nom complet de l'équipement - Propriété `EQUIP_NOM`

> *Description : Ce champ permet de nommer l'équipement collectif public par son nom d'usage complet afin de préciser ou compléter, si nécessaire, le terme utilisé pour désigner le type, dans la limite de 256 caractères maximum.*<br/>*Exemple : Hôtel de ville du Plessis-Trévise*
- Valeur obligatoire
- Type : chaîne de caractères

#### Numéro d’adresse complet - Propriété `ADR_NUMERO`

> *Description : Ce champ désigne le numéro d’adresse dans la voie suivi, si nécessaire, d'une information suffixée qui complète et précise le numéro d’adresse. Cette information suffixée peut être un indice de répétition ('bis', 'ter', 'qua', 'qui', etc... codés sur 3 caractères en minuscules) ou un complément comme le nom d'entrée d'immeuble ('a', 'b', 'c', 'a1', 'b2', 'lesmimosas', etc... codés en minuscules non accentuées, sans espace ni limite du nombre de caractères). Dans le cas des voies ou des lieux-dits sans adresse, la valeur '99999' est attendue. Dans le cas d'une adresse indiquant un intervalle entre deux numéros, ces derniers sont séparés par une barre oblique.*<br/>*Exemple : '36' pour un numéro sans suffixe ou '36 bis' pour un numéro avec un indice de répétition ou '36/38' pour un intervalle entre deux numéros*
- Valeur obligatoire
- Type : chaîne de caractères

#### Nom complet de la voie - Propriété `ADR_NOMVOIE`

> *Description : Ce champ contient la concaténation du type et du nom de la voie ou le nom d'un lieu-dit, exprimés en majuscules et minuscules accentuées.*<br/>*Exemple : Avenue Ardouin*
- Valeur obligatoire
- Type : chaîne de caractères
- Plus de 3 caractères
- Motif : `^[a-zA-Z0-9\-\'\s\d\u00C0-\u00FF]+$`

#### Code postal - Propriété `ADR_CODEPOSTAL`

> *Description : Elément de l'adresse qui désigne le code postal de la commune où est implanté l'équipement collectif public.*<br/>*Exemple : 94420*
- Valeur obligatoire
- Type : chaîne de caractères
- Moins de 5 caractères

#### Commune - Propriété `ADR_COMMUNE`

> *Description : Elément de l'adresse qui désigne le nom de la commune où est implanté l'équipement collectif public.*<br/>*Exemple : Le Plessis-Trévise*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[A-Za-z\s\-\u00C0-\u00FF]+$`

#### Clé d'interopérabilité de l'adresse - Propriété `ADR_CLE_INTEROP`

> *Description : Cette clé est identique à celle décrite dans le modèle [Base adresse locale](https://scdl.opendatafrance.net/docs/schemas/scdl-adresses.html). Elle combine le [code INSEE de la commune](https://fr.wikipedia.org/wiki/Code_Insee) sur 5 caractères (incluant 'A' ou 'B' pour la Corse) + le code de voie issu du [FANTOIR](https://fr.wikipedia.org/wiki/FANTOIR) de la DGFiP sur 4 caractères + le numéro d’adresse sur 5 caractères préfixé par des zéros + un suffixe s'il existe, qui peut être un indice de répétition ('bis', 'ter', 'qua', 'qui', etc... codés sur 3 caractères) et/ou un complément ('a', 'b', 'c', 'a1', 'b2', 'lesmimosas', etc... sans limitation du nombre de caractères). Chaque élément est séparé par un tiret du bas et les lettres sont en minuscules.*<br/>*Exemple : 94059_0040_00036*
- Valeur optionnelle
- Type : chaîne de caractères
- Plus de 16 caractères
- Motif : `^[A-Za-z0-9_]+$`

#### Identifiant d'Etablissement Recevant du Public - Propriété `ERP_ID`

> *Description : Si l'équipement collectif public est un ERP et que son code d'identification, le plus souvent géré par les SDIS ou les DDT référents, est connu, ce champ peut être renseigné.*<br/>*Exemple : 94059-AvenueArdouin-36*
- Valeur optionnelle
- Type : chaîne de caractères

#### Type d'Etablissement Recevant du Public - Propriété `ERP_TYPE`

> *Description : Les [Etablissements Recevant du Public](https://fr.wikipedia.org/wiki/%C3%89tablissement_recevant_du_public_en_droit_fran%C3%A7ais) (ERP) installés dans un bâtiment et les établissements spéciaux sont classés par type en fonction de leur activité ou de la nature de leur exploitation. Le type est symbolisé par une à trois lettre(s) en majuscule dans le respect de [l'article GN1 de l'Arrêté du 25 juin 1980](https://www.legifrance.gouv.fr/affichTexte.do;?cidTexte=LEGITEXT000020303557). Si l'équipement collectif public est un ERP, ce champ peut être renseigné à partir d'une des valeurs suivantes :  'J', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y' pour les ERP installés dans un bâtiment et 'PA', 'CTS', 'SG', 'PS', 'GA', 'OA', 'EF', 'REF' pour les établissements spéciaux. Dans le cas d'un ERP couvrant plusieurs types, les valeurs sont séparées par un point-virgule.*<br/>*Exemple : W;L*
- Valeur optionnelle
- Type : chaîne de caractères
- Moins de 10 caractères

#### Catégorie d'Etablissement Recevant du Public - Propriété `ERP_CATEGORIE`

> *Description : Les [Etablissements Recevant du Public](https://fr.wikipedia.org/wiki/%C3%89tablissement_recevant_du_public_en_droit_fran%C3%A7ais) (ERP) sont classés par catégorie en fonction de leur capacité d'accueil. La catégorie est symbolisée par un chiffre de 1 à 5 dans le respect de [l'article R123-19 du Code de la construction et de l'habitation](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000006074096&idArticle=LEGIARTI000006896108). Si l'équipement collectif public est un ERP, ce champ peut être renseigné.*<br/>*Exemple : 5*
- Valeur optionnelle
- Type : nombre entier
- Valeur entre 1 et 5

#### Latitude - Propriété `EQUIP_LAT`

> *Description : Coordonnée de latitude exprimée en [WGS 84](https://fr.wikipedia.org/wiki/WGS_84) permettant de localiser l'équipement collectif public. Le signe de séparation entre les parties entière et décimale du nombre est le point.*<br/>*Exemple : 48.808989*
- Valeur obligatoire
- Type : nombre réel

#### Longitude - Propriété `EQUIP_LONG`

> *Description : Coordonnée de longitude exprimée en [WGS 84](https://fr.wikipedia.org/wiki/WGS_84) permettant de localiser l'équipement collectif public. Le signe de séparation entre les parties entière et décimale du nombre est le point.*<br/>*Exemple : 2.572875*
- Valeur obligatoire
- Type : nombre réel

#### Jours et horaires d'ouverture - Propriété `EQUIP_OUVERTURE`

> *Description : Ce champ permet de renseigner, si l'information est connue, les jours et horaires d'ouverture de l'équipement en respectant le [format utilisé pour la clé 'opening_hours'](https://wiki.openstreetmap.org/wiki/FR:Key:opening_hours) dans OpenStreetMap. Un outil comme [YoHours](http://projets.pavie.info/yohours/) facilite la transformation des jours et horaires d'ouverture dans ce format. Celui-ci pouvant contenir des virgules comme signes de séparation, il est nécessaire d'entourer les valeurs de la chaîne de caractères par des guillemets doubles.*<br/>*Exemple : Mo-Fr 08:30-12:00,13:30-17:30; Sa 08:30-12:00*
- Valeur optionnelle
- Type : chaîne de caractères

#### Téléphone - Propriété `EQUIP_TEL`

> *Description : Ce champ permet de renseigner, si l'information est connue, le numéro de téléphone (du gestionnaire) de l'équipement exprimé en suivant le [code de rédaction interinstitutionnel européen](http://publications.europa.eu/code/fr/fr-390300.htm).*<br/>*Exemple : +33 140633900*
- Valeur optionnelle
- Type : chaîne de caractères
- Moins de 13 caractères

#### Adresse email - Propriété `EQUIP_EMAIL`

> *Description : Ce champ permet de renseigner, si l'information est connue, l'adresse email (du gestionnaire) de l'équipement.*<br/>*Exemple : contact@leplessistrevise.fr*
- Valeur optionnelle
- Type : chaîne de caractères (format `email`)

#### Adresse du site web - Propriété `EQUIP_WEB`

> *Description : Ce champ permet de renseigner, si l'information est connue, l'url d'accès au site web (du gestionnaire) de l'équipement.*<br/>*Exemple : https://www.leplessistrevise.fr*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)
