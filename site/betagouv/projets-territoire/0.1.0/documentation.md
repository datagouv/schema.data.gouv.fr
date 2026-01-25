<MenuSchema />

<MenuSchema />

## projets-territoire

Projets de collectivités

Schéma de données pour décrire un projet de collectivité visant la transition écologique, incluant les informations de suivi, le budget, le statut, les détails du porteur et les référentiels de compétences et leviers.

- Schéma créé le : 28/04/2025
- Site web : https://github.com/betagouv/schema-projet-collectivites-transition-ecologique
- Version : v0.1.0
- Clé primaire : `id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id](#identifiant-propriete-id) | chaîne de caractères (format `uuid`) | Oui |
| [createdAt](#date-de-creation-propriete-createdat) | chaîne de caractères  | Oui |
| [updatedAt](#date-de-mise-a-jour-propriete-updatedat) | chaîne de caractères  | Oui |
| [nom](#nom-du-projet-propriete-nom) | chaîne de caractères  | Oui |
| [description](#description-propriete-description) | chaîne de caractères  | Non |
| [budgetPrevisionnel](#budget-previsionnel-propriete-budgetprevisionnel) | nombre entier  | Non |
| [dateDebutPrevisionnelle](#date-de-debut-previsionnelle-propriete-datedebutprevisionnelle) | chaîne de caractères  | Non |
| [phase](#phase-du-projet-propriete-phase) | chaîne de caractères  | Non |
| [phaseStatut](#statut-de-la-phase-propriete-phasestatut) | chaîne de caractères  | Non |
| [programme](#programme-propriete-programme) | chaîne de caractères  | Non |
| [porteurCodeSiret](#siret-du-porteur-propriete-porteurcodesiret) | chaîne de caractères  | Non |
| [porteurReferentEmail](#email-du-referent-propriete-porteurreferentemail) | chaîne de caractères (format `email`) | Non |
| [porteurReferentTelephone](#telephone-du-referent-propriete-porteurreferenttelephone) | chaîne de caractères  | Non |
| [porteurReferentPrenom](#prenom-du-referent-propriete-porteurreferentprenom) | chaîne de caractères  | Non |
| [porteurReferentNom](#nom-du-referent-propriete-porteurreferentnom) | chaîne de caractères  | Non |
| [porteurReferentFonction](#fonction-du-referent-propriete-porteurreferentfonction) | chaîne de caractères  | Non |
| [competences](#competences-propriete-competences) | liste  | Non |
| [leviers](#leviers-propriete-leviers) | liste  | Non |
| [mecId](#id-mec-propriete-mecid) | chaîne de caractères  | Non |
| [tetId](#id-tet-propriete-tetid) | chaîne de caractères  | Non |
| [recocoId](#id-recoco-propriete-recocoid) | chaîne de caractères  | Non |
| [collectiviteIds](#ids-des-collectivites-propriete-collectiviteids) | liste  | Non |

#### Identifiant - Propriété `id`

> *Description : Identifiant unique du projet (UUID).*<br/>*Exemple : 01890e30-5a80-7c22-9842-8263d0d0d890*
- Valeur obligatoire
- Type : chaîne de caractères (format `uuid`)

#### Date de création - Propriété `createdAt`

> *Description : Date de création du projet.*<br/>*Exemple : 2025-04-15T14:30:00.000Z*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:?\d{2})$`

#### Date de mise à jour - Propriété `updatedAt`

> *Description : Date de dernière mise à jour du projet.*<br/>*Exemple : 2025-04-15T14:30:00.000Z*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:?\d{2})$`

#### Nom du projet - Propriété `nom`

> *Description : Nom du projet.*<br/>*Exemple : Rénovation énergétique des bâtiments publics*
- Valeur obligatoire
- Type : chaîne de caractères

#### Description - Propriété `description`

> *Description : Description détaillée du projet.*<br/>*Exemple : Projet de rénovation énergétique des écoles et bâtiments administratifs pour réduire la consommation d'énergie et améliorer le confort thermique.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Budget prévisionnel - Propriété `budgetPrevisionnel`

> *Description : Budget prévisionnel alloué au projet en euros.*<br/>*Exemple : 450000*
- Valeur optionnelle
- Type : nombre entier

#### Date de début prévisionnelle - Propriété `dateDebutPrevisionnelle`

> *Description : Date prévue de début du projet au format YYYY-MM-DD.*<br/>*Exemple : 2025-03-01*
- Valeur optionnelle
- Type : chaîne de caractères

#### Phase du projet - Propriété `phase`

> *Description : Phase actuelle du projet.*<br/>*Exemple : Idée*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Idée`
    - `Étude`
    - `Opération`

#### Statut de la phase - Propriété `phaseStatut`

> *Description : Statut actuel de la phase en cours.*<br/>*Exemple : En cours*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `En cours`
    - `En retard`
    - `En pause`
    - `Bloqué`
    - `Abandonné`
    - `Terminé`

#### Programme - Propriété `programme`

> *Description : Programme ou service numérique à l'origine du projet.*<br/>*Exemple : CRTE*
- Valeur optionnelle
- Type : chaîne de caractères

#### SIRET du porteur - Propriété `porteurCodeSiret`

> *Description : Code SIRET du porteur du projet.*<br/>*Exemple : 21690123400019*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Email du référent - Propriété `porteurReferentEmail`

> *Description : Adresse email du référent porteur.*<br/>*Exemple : marie.dupont@ville-exemple.fr*
- Valeur optionnelle
- Type : chaîne de caractères (format `email`)

#### Téléphone du référent - Propriété `porteurReferentTelephone`

> *Description : Numéro de téléphone du référent porteur.*<br/>*Exemple : 0472123456*
- Valeur optionnelle
- Type : chaîne de caractères

#### Prénom du référent - Propriété `porteurReferentPrenom`

> *Description : Prénom du référent porteur.*<br/>*Exemple : Marie*
- Valeur optionnelle
- Type : chaîne de caractères

#### Nom du référent - Propriété `porteurReferentNom`

> *Description : Nom du référent porteur.*<br/>*Exemple : Dupont*
- Valeur optionnelle
- Type : chaîne de caractères

#### Fonction du référent - Propriété `porteurReferentFonction`

> *Description : Fonction du référent porteur.*<br/>*Exemple : Directrice des services techniques*
- Valeur optionnelle
- Type : chaîne de caractères

#### Compétences - Propriété `competences`

> *Description : Liste des compétences associées au projet, voir référentiel des compétences M57*
- Valeur optionnelle
- Type : liste

#### Leviers - Propriété `leviers`

> *Description : Liste des leviers d'action du projet, voir référentiel des leviers SGPE*
- Valeur optionnelle
- Type : liste

#### ID MEC - Propriété `mecId`

> *Description : Identifiant du projet sur Mon Espace Collectivité.*<br/>*Exemple : MEC-7652*
- Valeur optionnelle
- Type : chaîne de caractères

#### ID TET - Propriété `tetId`

> *Description : Identifiant du projet sur TET.*<br/>*Exemple : 12345*
- Valeur optionnelle
- Type : chaîne de caractères

#### ID Recoco - Propriété `recocoId`

> *Description : Identifiant du projet sur Recoco.*
- Valeur optionnelle
- Type : chaîne de caractères

#### IDs des collectivités - Propriété `collectiviteIds`

> *Description : Identifiants des collectivités associées au projet.*
- Valeur optionnelle
- Type : liste
