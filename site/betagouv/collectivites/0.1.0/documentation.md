<MenuSchema />

<MenuSchema />

## collectivites

Collectivités

Schéma de données pour décrire les collectivités territoriales associées aux projets de transition écologique.

- Schéma créé le : 28/04/2025
- Site web : https://github.com/betagouv/schema-projet-collectivites-transition-ecologique
- Version : v0.1.0
- Clé primaire : `id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id](#identifiant-propriete-id) | chaîne de caractères (format `uuid`) | Oui |
| [nom](#nom-propriete-nom) | chaîne de caractères  | Oui |
| [type](#type-propriete-type) | chaîne de caractères  | Oui |
| [codeInsee](#code-insee-propriete-codeinsee) | chaîne de caractères  | Non |
| [codeDepartements](#codes-departements-propriete-codedepartements) | liste  | Non |
| [codeRegions](#codes-regions-propriete-coderegions) | liste  | Non |
| [codeEpci](#code-epci-propriete-codeepci) | chaîne de caractères  | Non |
| [siren](#siren-propriete-siren) | chaîne de caractères  | Non |
| [createdAt](#date-de-creation-propriete-createdat) | chaîne de caractères  | Oui |
| [updatedAt](#date-de-mise-a-jour-propriete-updatedat) | chaîne de caractères  | Oui |

#### Identifiant - Propriété `id`

> *Description : Identifiant unique de la collectivité (UUID).*<br/>*Exemple : 01890e30-5a80-7c22-9842-8263d0d0d123*
- Valeur obligatoire
- Type : chaîne de caractères (format `uuid`)

#### Nom - Propriété `nom`

> *Description : Nom de la collectivité.*<br/>*Exemple : Ville de Lyon*
- Valeur obligatoire
- Type : chaîne de caractères

#### Type - Propriété `type`

> *Description : Type de collectivité.*<br/>*Exemple : Commune*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Commune`
    - `EPCI`
    - `Région`
    - `Département`

#### Code INSEE - Propriété `codeInsee`

> *Description : Code INSEE de la commune. Obligatoire pour les collectivités de type Commune.*<br/>*Exemple : 69123*
- Valeur optionnelle
- Type : chaîne de caractères

#### Codes départements - Propriété `codeDepartements`

> *Description : Codes des départements de la collectivité.*
- Valeur optionnelle
- Type : liste

#### Codes régions - Propriété `codeRegions`

> *Description : Codes des régions de la collectivité.*
- Valeur optionnelle
- Type : liste

#### Code EPCI - Propriété `codeEpci`

> *Description : Code de l'EPCI. Obligatoire pour les collectivités de type EPCI.*<br/>*Exemple : 200046977*
- Valeur optionnelle
- Type : chaîne de caractères

#### SIREN - Propriété `siren`

> *Description : Code SIREN de la collectivité.*<br/>*Exemple : 216901234*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{9}$`

#### Date de création - Propriété `createdAt`

> *Description : Date de création de l'entrée.*<br/>*Exemple : 2025-04-15T14:30:00.000Z*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:?\d{2})$`

#### Date de mise à jour - Propriété `updatedAt`

> *Description : Date de dernière mise à jour de l'entrée.*<br/>*Exemple : 2025-04-15T09:45:12.000Z*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:?\d{2})$`
