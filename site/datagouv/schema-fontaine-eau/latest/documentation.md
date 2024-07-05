<MenuSchema />

## fontaine-eau

Schéma des fontaines à eau

Spécification du fichier d'échange relatif aux fontaines à eau mises à disposition notamment par les Etablissements recevant du public (ERP) dans le cadre de la loi anti-gaspillage.

- Schéma créé le : 03/07/2024
- Site web : https://github.com/datagouv/schema-fontaine-eau
- Version : v0.1.0
- Clé primaire : `id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id](#identifiant-propriete-id) | chaîne de caractères  | Oui |
| [type_fontaine](#type-de-fontaine-propriete-type-fontaine) | chaîne de caractères  | Oui |
| [modele](#modele-propriete-modele) | chaîne de caractères  | Oui |
| [coordonnees_geo](#coordonnees-gps-propriete-coordonnees-geo) | point géographique  | Oui |
| [adresse](#voie-et-numero-de-voie-propriete-adresse) | chaîne de caractères  | Oui |
| [code_commune_insee](#code-commune-insee-propriete-code-commune-insee) | chaîne de caractères  | Oui |
| [precision_geo](#precisions-du-lieu-propriete-precision-geo) | chaîne de caractères  | Non |
| [date_installation](#date-d-installation-propriete-date-installation) | date (format `%Y-%m-%d`) | Oui |
| [est_potable](#potabilite-propriete-est-potable) | booléen  | Oui |
| [indisponible](#date-debut-indisponibilite-propriete-indisponible) | date (format `%Y-%m-%d`) | Non |
| [ouverture_restriction](#ouverture-si-restriction-propriete-ouverture-restriction) | booléen  | Oui |
| [gestionnaire](#gestionnaire-propriete-gestionnaire) | chaîne de caractères  | Non |

#### Identifiant - Propriété `id`

> *Description : Un identifiant unique de la fontaine.*<br/>*Exemple : 450024946*
- Valeur obligatoire
- Type : chaîne de caractères

#### Type de fontaine - Propriété `type_fontaine`

> *Description : Le type de fontaine installée, parmi la liste de valeurs prédéfinie.*<br/>*Exemple : robinet*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - normale
    - robinet
    - bouche_a_boire
    - estivale
    - kiosque
    - autre

#### Modèle - Propriété `modele`

> *Description : Le modèle de la fontaine.*<br/>*Exemple : BF Bayard*
- Valeur obligatoire
- Type : chaîne de caractères

#### Coordonnées GPS - Propriété `coordonnees_geo`

> *Description : Coordonnées GPS de la fontaine, au format `lon,lat`, avec le point comme séparateur décimal et une virgule entre les deux.*<br/>*Exemple : 2.303713,48.849598*
- Valeur obligatoire
- Type : point géographique

#### Voie et numéro de voie - Propriété `adresse`

> *Description : Adresse de l'objet contenant la voie et le numéro sur la voie.*<br/>*Exemple : 8 boulevard Victor Hugo*
- Valeur obligatoire
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

#### Date d'installation - Propriété `date_installation`

> *Description : Date d'installation de la fontaine, au format AAAA-MM-JJ (si seule l'année est connue, mettre le 1er janvier).*<br/>*Exemple : 2022-02-11*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### Potabilité - Propriété `est_potable`

> *Description : Booléen renseignant sur le caractère potable ou non de la fontaine.*<br/>*Exemple : True*
- Valeur obligatoire
- Type : booléen

#### Date début indisponibilité - Propriété `indisponible`

> *Description : Date de début d'indisponibilité de la fontaine si elle est indisponible. Si elle est en fonctionnement, à laisser vide.*<br/>*Exemple : 2023-05-12*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### Ouverture si restriction - Propriété `ouverture_restriction`

> *Description : Booléen renseignant sur la fermeture ou non de la fontaine en période de restrictions. `true` si elle reste ouverte, `false` sinon.*<br/>*Exemple : True*
- Valeur obligatoire
- Type : booléen

#### Gestionnaire - Propriété `gestionnaire`

> *Description : Nom du gestionnaire de la fontaine.*<br/>*Exemple : Ville de Rennes*
- Valeur optionnelle
- Type : chaîne de caractères
