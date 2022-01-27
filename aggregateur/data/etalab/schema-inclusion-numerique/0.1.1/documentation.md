---
permalink: /etalab/schema-inclusion-numerique/0.1.1/documentation.html
redirect_from: null
title: Documentation de Lieux d’inclusion numérique
version: 0.1.1
---

## lieux-inclusion-numerique

Lieux d’inclusion numérique

Spécification des lieux d'inclusion numérique

- Schéma créé le : 06.09.2020
- Site web : https://github.com/etalab/schema-inclusion-numerique
- Données d'exemple : https://github.com/etalab/schema-inclusion-numerique/raw/v0.1.1/exemple-valide.csv
- Version : 0.1.1

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [nom](#propriété-nom) | chaîne de caractères  | Oui |
| [structure_porteuse](#propriété-structure_porteuse) | chaîne de caractères  | Non |
| [description](#propriété-description) | chaîne de caractères  | Non |
| [type_lieu](#propriété-type_lieu) | chaîne de caractères  | Non |
| [statut](#propriété-statut) | chaîne de caractères  | Non |
| [nature_juridique](#propriété-nature_juridique) | chaîne de caractères  | Non |
| [siret](#propriété-siret) | chaîne de caractères  | Non |
| [adresse_brut](#propriété-adresse_brut) | chaîne de caractères  | Non |
| [adresse_numero](#propriété-adresse_numero) | chaîne de caractères  | Non |
| [adresse_rue](#propriété-adresse_rue) | chaîne de caractères  | Non |
| [adresse_code_postal](#propriété-adresse_code_postal) | chaîne de caractères  | Non |
| [adresse_code_insee](#propriété-adresse_code_insee) | chaîne de caractères  | Non |
| [adresse_commune](#propriété-adresse_commune) | chaîne de caractères  | Non |
| [adresse_departement](#propriété-adresse_departement) | chaîne de caractères  | Non |
| [adresse_region](#propriété-adresse_region) | chaîne de caractères  | Non |
| [latitude](#propriété-latitude) | nombre réel  | Non |
| [longitude](#propriété-longitude) | nombre réel  | Non |
| [itinerant](#propriété-itinerant) | chaîne de caractères  | Non |
| [en_ligne](#propriété-en_ligne) | booléen  | Oui |
| [contact_telephone](#propriété-contact_telephone) | chaîne de caractères  | Non |
| [contact_telephone_details](#propriété-contact_telephone_details) | chaîne de caractères  | Non |
| [contact_email](#propriété-contact_email) | chaîne de caractères (format `email`) | Non |
| [contact_web](#propriété-contact_web) | chaîne de caractères (format `uri`) | Non |
| [contact_facebook](#propriété-contact_facebook) | chaîne de caractères (format `uri`) | Non |
| [horaires_ouverture_brut](#propriété-horaires_ouverture_brut) | chaîne de caractères  | Non |
| [horaires_ouverture_osm](#propriété-horaires_ouverture_osm) | chaîne de caractères  | Non |
| [public_cible](#propriété-public_cible) | chaîne de caractères  | Non |
| [modalites_acces](#propriété-modalites_acces) | chaîne de caractères  | Non |
| [modalites_accompagnement](#propriété-modalites_accompagnement) | chaîne de caractères  | Non |
| [tarifs](#propriété-tarifs) | chaîne de caractères  | Non |
| [accessibilite](#propriété-accessibilite) | chaîne de caractères  | Non |
| [services](#propriété-services) | chaîne de caractères  | Non |
| [labels](#propriété-labels) | chaîne de caractères  | Non |

#### Propriété `nom`

> *Description : Le nom du lieu<br/>Ex : Médiathèque d'Oullins*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `structure_porteuse`

> *Description : Le nom de la structure porteuse du lieu<br/>Ex : Mairie de Bron*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `description`

> *Description : Une description du lieu<br/>Ex : Un lieu permettant l'inclusion numérique des plus fragiles et faire des nouvelles technologies un levier d'insertion sociale.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `type_lieu`

> *Description : La typologie du lieu<br/>Ex : Bibliothèque / Médiathèque*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Administration / Collectivité territoriale
    - Association
    - Bibliothèque / Médiathèque
    - Commune (Ville, CCAS, Centre Culturel...)
    - Centre social
    - Département (UTPAS, MDS, MDSI, UTAS...)
    - Espace Public Numérique (EPN)
    - Organisme de formations
    - Intercommunalité (EPCI)
    - La Poste
    - Maison de quartier
    - Maison de Service au Public (MSAP)
    - Pôle Emploi
    - Point Information Médiation Multi Services (PIMMS)
    - Préfecture, Sous-Préfecture
    - Organisme de sécurité sociale (CAF, CPAM, CARSAT, MSA...)
    - Tiers-lieu / Coworking / FabLab / Hackerspace
    - Autre / Inconnu

#### Propriété `statut`

> *Description : Le statut du lieu<br/>Ex : Public*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Public
    - Privé
    - Public-privé
    - Autre / Inconnu

#### Propriété `nature_juridique`

> *Description : La nature juridique du lieu<br/>Ex : Association*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Association
    - Collectivité locale ou territoriale
    - Coopérative d'Activités et d'Entrepreneur·es (CAE)
    - Établissement public de coopération intercommunale (EPCI)
    - Établissement public à caractère industriel et commercial (EPIC)
    - Établissement public à caractère scientifique, culturel et professionnel (EPSCP)
    - Groupement d'intérêt public (GIP)
    - Société par actions simplifiée (SAS)
    - Société à responsabilité limitée (SARL)
    - Société par actions simplifiée unipersonnelle (SASU)
    - Société coopérative d’intérêt collectif (SCIC)
    - Société coopérative et participative (SCOP)
    - Société publique locale (SPL)
    - Autre / Inconnu

#### Propriété `siret`

> *Description : Identifiant INSEE de l'établissement ou de l'entreprise (SIRET)<br/>Ex : 36252187900034*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Propriété `adresse_brut`

> *Description : L'adresse complète brut<br/>Ex : 10 Avenue Charles de Gaulle, 38000 GRENOBLE*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `adresse_numero`

> *Description : Le numéro avec indice de répétition éventuel (bis, ter, A, B)<br/>Ex : 10*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `adresse_rue`

> *Description : Le nom de la rue<br/>Ex : Avenue Charles de Gaulle*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `adresse_code_postal`

> *Description : Le code postal<br/>Ex : 38000*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{5}$`

#### Propriété `adresse_code_insee`

> *Description : Le code INSEE de la commune<br/>Ex : 38185*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^[A-Z0-9]{5}$`

#### Propriété `adresse_commune`

> *Description : Le nom de la commune<br/>Ex : Grenoble*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `adresse_departement`

> *Description : Le nom du département<br/>Ex : Isère*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `adresse_region`

> *Description : Le nom de la région<br/>Ex : Auvergne-Rhône-Alpes*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `latitude`

> *Description : La latitude (coordonnée géographique) en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation du lieu exprimée dans le système de coordonnées WGS84.<br/>Ex : 45.1885*
- Valeur optionnelle
- Type : nombre réel
- Valeur entre -90 et 90

#### Propriété `longitude`

> *Description : La longitude (coordonnée géographique) en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation du lieu exprimée dans le système de coordonnées WGS84.<br/>Ex : 5.7245*
- Valeur optionnelle
- Type : nombre réel
- Valeur entre -180 et 180

#### Propriété `itinerant`

> *Description : Le lieu est-il itinérant ? Si oui, spécifier les détails ou mettre juste 'Oui'. Si le lieu n'est pas itinérant, laisser vide.<br/>Ex : *
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `en_ligne`

> *Description : Le lieu est-il uniquement en ligne ?<br/>Ex : Non*
- Valeur obligatoire
- Type : booléen

#### Propriété `contact_telephone`

> *Description : Le numéro de téléphone du lieu<br/>Ex : 0123456789*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{10}$`

#### Propriété `contact_telephone_details`

> *Description : Le details du numéro de téléphone (horaires, prix, ...)<br/>Ex : De 9h à 18h, tous les jours sauf le Dimanche.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `contact_email`

> *Description : Le courriel du lieu<br/>Ex : exemple@email.fr*
- Valeur optionnelle
- Type : chaîne de caractères (format `email`)

#### Propriété `contact_web`

> *Description : L'adresse du site internet du lieu<br/>Ex : https://www.example.fr*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)

#### Propriété `contact_facebook`

> *Description : L'adresse de la page Facebook du lieu<br/>Ex : https://www.facebook.com/exemple/*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)

#### Propriété `horaires_ouverture_brut`

> *Description : Les jours et horaires d'ouverture du lieu brut<br/>Ex : De 9h30 à 17h30, du Mardi au Samedi*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `horaires_ouverture_osm`

> *Description : Les jours et horaires d'ouverture du lieu respectant le [format utilisé pour la clé 'opening_hours'](https://wiki.openstreetmap.org/wiki/FR:Key:opening_hours) dans OpenStreetMap. Un outil comme [YoHours](http://projets.pavie.info/yohours/) facilite la transformation des jours et horaires d'ouverture dans ce format. Celui-ci pouvant contenir des virgules comme signes de séparation, il est nécessaire d'entourer les valeurs de la chaîne de caractères par des guillemets doubles.<br/>Ex : Mo-Fr 08:30-12:00,13:30-17:30; Sa 08:30-12:00*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `public_cible`

> *Description : Public(s) cible. Une ou plusieurs valeurs possibles, séparés par une virgule. Si le champs comporte plusieurs valeurs, il est nécessaire l'ensemble de la chaîne de caractères par des guillemets doubles.<br/>Ex : Tout public*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|,)(Tout public|Allocataires|Demandeurs d'emploi|Étrangers|Familles|Jeunes|Personnes en situation de handicap|Séniors))+$`

#### Propriété `modalites_acces`

> *Description : Modalité(s) d'accès. Une ou plusieurs valeurs possibles, séparés par une virgule. Si le champs comporte plusieurs valeurs, il est nécessaire l'ensemble de la chaîne de caractères par des guillemets doubles.<br/>Ex : Sur inscription ou rendez-vous,Adhérents*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|,)(Accès libre|Sur inscription ou rendez-vous|Public cible|Adhérents))+$`

#### Propriété `modalites_accompagnement`

> *Description : Modalité(s) d'accompagnement. Une ou plusieurs valeurs possibles, séparés par une virgule. Si le champs comporte plusieurs valeurs, il est nécessaire l'ensemble de la chaîne de caractères par des guillemets doubles.<br/>Ex : Individuel,Collectif*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|,)(Individuel|Collectif))+$`

#### Propriété `tarifs`

> *Description : Tarifs. Une ou plusieurs valeurs possibles, séparés par une virgule. Si le champs comporte plusieurs valeurs, il est nécessaire l'ensemble de la chaîne de caractères par des guillemets doubles.<br/>Ex : Gratuit*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|,)(Gratuit|Adhérent|Payant))+$`

#### Propriété `accessibilite`

> *Description : Accessibilité. Une ou plusieurs valeurs possibles, séparés par une virgule. Si le champs comporte plusieurs valeurs, il est nécessaire l'ensemble de la chaîne de caractères par des guillemets doubles.<br/>Ex : Handicap visuel,Handicap auditif*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|,)(Handicap moteur|Handicap visuel|Handicap auditif|Handicap intellectuel ou psychique))+$`

#### Propriété `services`

> *Description : Service(s) proposé(s). Une ou plusieurs valeurs possibles, séparés par une virgule. Si le champs comporte plusieurs valeurs, il est nécessaire l'ensemble de la chaîne de caractères par des guillemets doubles.<br/>Ex : Accompagnement aux démarches administratives en ligne,Acquisition de compétences numériques,Évaluation de compétences numériques*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|,)(Accès à un équipement informatique|Accompagnement aux démarches administratives en ligne|Acquisition de compétences numériques|Évaluation de compétences numériques|Pratiquer des activités récréatives numériques|Vente de matériel informatique|Stockage numérique sécurisé))+$`

#### Propriété `labels`

> *Description : Label(s). Une ou plusieurs valeurs possibles, séparés par une virgule. Si le champs comporte plusieurs valeurs, il est nécessaire l'ensemble de la chaîne de caractères par des guillemets doubles.<br/>Ex : Aidants Connect,APTIC*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|,)(France Services|APTIC|Aidants Connect|Fabriques de Territoire|Grande École du Numérique))+$`