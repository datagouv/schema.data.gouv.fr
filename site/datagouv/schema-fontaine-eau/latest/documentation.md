<MenuSchema />

<MenuSchema />

## fontaine-eau

Schéma des fontaines à eau

Spécification du fichier d'échange relatif aux fontaines à eau mises à disposition notamment par les Etablissements recevant du public (ERP) dans le cadre de la loi anti-gaspillage.

- Schéma créé le : 28/03/2025
- Site web : https://github.com/datagouv/schema-fontaine-eau
- Version : v0.1.0
- Clé primaire : `id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id](#identifiant-propriete-id) | chaîne de caractères  | Oui |
| [type_fontaine](#type-de-fontaine-propriete-type-fontaine) | chaîne de caractères  | Oui |
| [modele](#modele-propriete-modele) | chaîne de caractères  | Non |
| [gestionnaire](#gestionnaire-propriete-gestionnaire) | chaîne de caractères  | Non |
| [siren_gestionnaire](#siren-du-gestionnaire-propriete-siren-gestionnaire) | chaîne de caractères  | Non |
| [latitude](#latitude-(coordonnees-gps)-propriete-latitude) | nombre réel  | Oui |
| [longitude](#longitude-(coordonnees-gps)-propriete-longitude) | nombre réel  | Oui |
| [adresse](#voie-et-numero-de-voie-propriete-adresse) | chaîne de caractères  | Non |
| [code_commune_insee](#code-commune-insee-propriete-code-commune-insee) | chaîne de caractères  | Oui |
| [precision_geo](#precisions-du-lieu-propriete-precision-geo) | chaîne de caractères  | Non |
| [conditions_acces](#conditions-d-acces-a-l-epr-propriete-conditions-acces) | chaîne de caractères  | Oui |
| [date_installation](#date-d-installation-propriete-date-installation) | date (format `%Y-%m-%d`) | Non |
| [indisponible](#date-debut-indisponibilite-propriete-indisponible) | date (format `%Y-%m-%d`) | Non |
| [accessible_pmr](#accessibilite-pmr-propriete-accessible-pmr) | booléen  | Oui |
| [remplissage_contenant_possible](#possibilite-de-remplir-un-contenant-propriete-remplissage-contenant-possible) | booléen  | Oui |

#### Identifiant - Propriété `id`

> *Description : Un identifiant unique de la fontaine.*<br/>*Exemple : 450024946*
- Valeur obligatoire
- Type : chaîne de caractères

#### Type de fontaine - Propriété `type_fontaine`

> *Description : Le type de fontaine installée, parmi la liste de valeurs prédéfinie.*<br/>*Exemple : robinet*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `borne fontaine`
    - `robinet`
    - `fontaine type Wallace`
    - `autre`

#### Modèle - Propriété `modele`

> *Description : Le modèle de la fontaine.*<br/>*Exemple : BF Bayard*
- Valeur optionnelle
- Type : chaîne de caractères

#### Gestionnaire - Propriété `gestionnaire`

> *Description : Nom du gestionnaire de la fontaine.*<br/>*Exemple : Ville de Rennes*
- Valeur optionnelle
- Type : chaîne de caractères

#### SIREN du gestionnaire - Propriété `siren_gestionnaire`

> *Description : Le numéro SIREN du gestionnaire. Vous pouvez récupérer cet identifiant sur le site annuaire-entreprises.data.gouv.fr.*<br/>*Exemple : 130025265*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{9}$`

#### Latitude (coordonnées GPS) - Propriété `latitude`

> *Description : Latitude de la fontaine.*<br/>*Exemple : 48.849598*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -90 et 90

#### Longitude (coordonnées GPS) - Propriété `longitude`

> *Description : Longitude de la fontaine.*<br/>*Exemple : 2.303713*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -180 et 180

#### Voie et numéro de voie - Propriété `adresse`

> *Description : Adresse de l'objet contenant la voie et le numéro sur la voie, au format BAN.*<br/>*Exemple : 8 boulevard Victor Hugo*
- Valeur optionnelle
- Type : chaîne de caractères

#### Code commune INSEE - Propriété `code_commune_insee`

> *Description : Code INSEE de la commune dans laquelle la fontaine est installée.*<br/>*Exemple : 63113*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### Précisions du lieu - Propriété `precision_geo`

> *Description : Champ de texte libre facultatif pour préciser la localisation de la fontaine.*<br/>*Exemple : Dans le bâtiment au rez-de-chaussée*
- Valeur optionnelle
- Type : chaîne de caractères

#### Conditions d'accès à l'EPR - Propriété `conditions_acces`

> *Description : Conditions d'accès à l'EPR le cas échéant.*<br/>*Exemple : aucune*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `établissement soumis à horaires`
    - `établissement nécessitant l'achat d'un billet`
    - `autre`
    - `aucune`

#### Date d'installation - Propriété `date_installation`

> *Description : Date d'installation de la fontaine, au format AAAA-MM-JJ (si seule l'année est connue, mettre le 1er janvier).*<br/>*Exemple : 2022-02-11*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### Date début indisponibilité - Propriété `indisponible`

> *Description : Date de début d'indisponibilité de la fontaine si elle est indisponible. Si elle est en fonctionnement, à laisser vide.*<br/>*Exemple : 2023-05-12*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### Accessibilité PMR - Propriété `accessible_pmr`

> *Description : Booléen renseignant sur l'accessibilité PMR de la fontaine. `true` si accessible, `false` sinon.*<br/>*Exemple : True*
- Valeur obligatoire
- Type : booléen

#### Possibilité de remplir un contenant - Propriété `remplissage_contenant_possible`

> *Description : Booléen renseignant sur la possibilité de remplir un contenant (gourde, bouteille...). `true` si possible, `false` sinon.*<br/>*Exemple : True*
- Valeur obligatoire
- Type : booléen
