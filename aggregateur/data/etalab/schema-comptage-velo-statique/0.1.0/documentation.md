---
permalink: /etalab/schema-comptage-velo-statique/latest/documentation.html
redirect_from: /etalab/schema-comptage-velo-statique/0.1.0/documentation.html
title: Documentation de Schéma du comptage vélo (partie statique)
version: 0.1.0
---

## schema-comptage-velo-statique

Schéma du comptage vélo (partie statique)

Spécification du fichier d'échange relatif aux comptages vélo.

- Schéma créé le : 03/05/2021
- Site web : https://github.com/etalab/schema-comptage-velo-statique
- Version : 0.1.0
- Clé primaire : `id_local_compteur`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [nom_compteur](#propriété-nom_compteur) | chaîne de caractères  | Non |
| [id_local_compteur](#propriété-id_local_compteur) | chaîne de caractères  | Oui |
| [id_site_comptage](#propriété-id_site_comptage) | chaîne de caractères  | Non |
| [code_com](#propriété-code_com) | chaîne de caractères  | Non |
| [xlong](#propriété-xlong) | nombre réel  | Oui |
| [ylat](#propriété-ylat) | nombre réel  | Oui |
| [type_pratique](#propriété-type_pratique) | chaîne de caractères  | Non |
| [type_voie](#propriété-type_voie) | chaîne de caractères  | Non |
| [id_amenagement_cyclable](#propriété-id_amenagement_cyclable) | chaîne de caractères  | Non |
| [type_releve](#propriété-type_releve) | chaîne de caractères  | Non |
| [type_transmission](#propriété-type_transmission) | chaîne de caractères  | Non |
| [type_compteur](#propriété-type_compteur) | chaîne de caractères  | Non |
| [sens_circulation_1](#propriété-sens_circulation_1) | chaîne de caractères  | Non |
| [sens_circulation_2](#propriété-sens_circulation_2) | chaîne de caractères  | Non |
| [source](#propriété-source) | chaîne de caractères  | Oui |
| [date_service](#propriété-date_service) | nombre entier  | Non |
| [date_maj](#propriété-date_maj) | chaîne de caractères  | Non |
| [pas_de_temps](#propriété-pas_de_temps) | nombre réel  | Non |

#### Propriété `nom_compteur`

> *Description : Nom du compteur<br/>Ex : Baix*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `id_local_compteur`

> *Description : Identifiant unique du compteur dans les bases de données de la collectivité territoriale productrice de données<br/>Ex : C01-Baix*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `id_site_comptage`

> *Description : Identifiant unique du site où est installé le compteur dans les bases de données de la collectivité territoriale productrice de données. Ce champ peut être utilisé pour grouper plusieurs compteurs entre eux<br/>Ex : C-Baix*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `code_com`

> *Description : Code INSEE de la commune où se trouve le compteur vélo<br/>Ex : n71729735*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### Propriété `xlong`

> *Description : La longitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation du centre de l'emplacement du compteur exprimée dans le système de coordonnées WGS84.<br/>Ex : 1.452323*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -180 et 180

#### Propriété `ylat`

> *Description : La latitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation de centre de l'emplacement du compteur exprimée dans le système de coordonnées WGS84.<br/>Ex : 46.59698*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -90 et 90

#### Propriété `type_pratique`

> *Description : Types de pratiques enregistrés par le compteur sur la voie<br/>Ex : VELO*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - VELO
    - SCOOTER
    - PIETON
    - TROTINETTE
    - NON DEFINI

#### Propriété `type_voie`

> *Description : Type de voie où est installé le compteur vélo<br/>Ex : VOIE VERTE*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - PISTE CYCLABLE
    - BANDE CYCLABLE
    - DOUBLE SENS CYCLABLE PISTE
    - DOUBLE SENS CYCLABLE BANDE 
    - VOIE VERTE
    - VELO RUE
    - COULOIR BUS VELO
    - RAMPE
    - GOULOTTE
    - AMENAGEMENT MIXTE PIETON VELO HORS VOIE VERTE
    - CHAUSSEE A VOIE CENTRALE BANALISEE
    - ACCOTEMENT REVETU HORS CVCB
    - AUTRE

#### Propriété `id_amenagement_cyclable`

> *Description : identifiant de l'aménagement cyclable dans la base nationale des aménagements cyclables<br/>Ex : 07022-AC-001*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `type_releve`

> *Description : Méthode utilisée pour récupérer les données depuis le compteur<br/>Ex : MANUEL*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - TELETRANSMISSION
    - MANUEL

#### Propriété `type_transmission`

> *Description : Méthode utilisée pour transmettre les données vers le portail opendata<br/>Ex : API*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - API
    - MANUEL

#### Propriété `type_compteur`

> *Description : Type de compteur. Choix multiple possible avec chaque valeur séparée par une virgule<br/>Ex : VIDEO*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|,)(BOUCLE|BOUCLE ZELT TEMPORAIRE|BOUCLE A INDUCTION|CAPTEUR A INDUCTION MAGNETIQUE|CAPTEUR PIEZOELECTRIQUE|RADAR|VIDEO|PNEUMATIQUE|DALLES CAPTEUR DE PRESSION|CAPTEUR A FAISCEAU LUMINEUX|HUMAIN|TUBE|AUTRE))+$`

#### Propriété `sens_circulation_1`

> *Description : direction vers laquelle se dirigent les usagers comptés<br/>Ex : SO*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - N
    - NO
    - NE
    - O
    - SO
    - S
    - SE
    - E

#### Propriété `sens_circulation_2`

> *Description : deuxième direction vers laquelle se dirigent les usagers comptés. Ce champ est reservé aux appareils pouvant compter dans deux sens de circulations.<br/>Ex : NO*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - N
    - NO
    - NE
    - O
    - SO
    - S
    - SE
    - E

#### Propriété `source`

> *Description : Entité ayant fourni les données<br/>Ex : Baix*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `date_service`

> *Description : Date de mise en service du compteur vélo<br/>Ex : 2019*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `date_maj`

> *Description : Date de dernière mise à jour des données, Notation ISO 8601, format AAAA-MM-JJ<br/>Ex : 2021-05-03*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `pas_de_temps`

> *Description : Pas de temps des données fournies, en secondes. Doit être utilisé pour extrapoler la date de fin du comptage si elle est absente.<br/>Ex : 900*
- Valeur optionnelle
- Type : nombre réel