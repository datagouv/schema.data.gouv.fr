<MenuSchema />

<MenuSchema />

## menus-collectifs

Menus de la restauration collective

Menus des repas proposés par des collectivités locales et des établissements publics. Il permet de préciser les modalités de distribution et le contenu des menus proposés. Ce schéma décrit le détail de chaque champ et le cas échéant les règles de validité associées.

- Schéma créé le : 12/02/2020
- Site web : https://git.opendatafrance.net/scdl/menus-collectifs
- Version : 0.1

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [collectiviteNom](#nom-de-la-collectivite-propriete-collectivitenom) | chaîne de caractères  | Oui |
| [collectiviteSiret](#code-siret-de-la-collectivite-propriete-collectivitesiret) | chaîne de caractères  | Oui |
| [etablissementNom](#nom-de-l-etablissement-ou-entreprise-qui-a-produit-le-repas-servi-propriete-etablissementnom) | chaîne de caractères  | Oui |
| [etablissementSiret](#code-siret-de-l-etablissement-ou-entreprise-qui-a-produit-le-repas-servi--propriete-etablissementsiret) | chaîne de caractères  | Oui |
| [restaurantNom](#nom-du-restaurant-ou-le-repas-est-servi--propriete-restaurantnom) | chaîne de caractères  | Oui |
| [restaurantType](#type-de-client-auquel-le-menu-est-propose--propriete-restauranttype) | chaîne de caractères  | Oui |
| [restaurantConvive](#type-de-convive-auquel-le-menu-est-propose--propriete-restaurantconvive) | chaîne de caractères  | Oui |
| [restaurantAdresse](#adresse-de-l-etablissement-ou-le-repas-est-servi--propriete-restaurantadresse) | chaîne de caractères  | Oui |
| [menuDate](#date-du-menu-propriete-menudate) | chaîne de caractères  | Oui |
| [menuTypeRepas](#type-du-repas-servi-propriete-menutyperepas) | chaîne de caractères  | Oui |
| [menuTypePlat](#type-de-plat-servi-propriete-menutypeplat) | chaîne de caractères  | Oui |
| [menuNomPlat](#nom-du-plat-servi-propriete-menunomplat) | chaîne de caractères  | Oui |
| [menuCodePLat](#code-du-plat-servi-propriete-menucodeplat) | chaîne de caractères  | Non |
| [menuLabelPlat](#type-de-label-du-plat-servi-propriete-menulabelplat) | chaîne de caractères  | Non |
| [menuAllergenePLat](#nom-des-allergenes-presents-dans-le-plat-propriete-menuallergeneplat) | chaîne de caractères  | Non |
| [menuRegimePlat](#nom-du-regime-alimentaire-propriete-menuregimeplat) | chaîne de caractères  | Non |

#### Nom de la collectivité - Propriété `collectiviteNom`

> *Description : Nom officiel de la collectivité.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Code SIRET de la collectivité - Propriété `collectiviteSiret`

> *Description : Identifiant du Système d'Identification du Répertoire des Etablissements (SIRET) de la collectivité qui commandé le menu, composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant.*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Nom de l'établissement ou entreprise qui a produit le repas servi - Propriété `etablissementNom`

> *Description : Nom officiel de l'établissement qui est à l'origine de la production du repas.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Code SIRET de l'établissement ou entreprise qui a produit le repas servi. - Propriété `etablissementSiret`

> *Description : Identifiant du Système d'Identification du Répertoire des Etablissements (SIRET) de la collectivité qui confectionné le menu, composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant.*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Nom du restaurant où le repas est servi. - Propriété `restaurantNom`

> *Description : Nom officiel de l'établissement au sein duquel est servi le menu*
- Valeur obligatoire
- Type : chaîne de caractères

#### Type de client auquel le menu est proposé. - Propriété `restaurantType`

> *Description : Permet de préciser le type d'établissement destinataire du menu proposé parmi les valeurs disponibles (Crèche, école maternelle, école élémentaire, Foyer, Collège, Lycée, administration locale, RPA, repas à domicile)*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `crèche`
    - `école maternelle`
    - `école élémentaire`
    - `Foyer`
    - `Collège`
    - `Lycée`
    - `administration locale`
    - `RPA`
    - `repas à domicile`
    - `centre de loisirs`

#### Type de convive auquel le menu est proposé. - Propriété `restaurantConvive`

> *Description : Permet de préciser le type personnes destinataires du menu proposé par mi les valeurs disponibles (bébés, scolaires, adultes, seniors …).*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `bébé`
    - `scolaire`
    - `agent administratif`
    - `adulte`
    - `sénior`

#### Adresse de l'établissement où le repas est servi. - Propriété `restaurantAdresse`

> *Description : Ce champ correspond à l'adresse postale de l'établissement au sein duquel est servi le menu. Idéalement il devrait faire référence à l'identifiant de cette adresse dans la base d'adresse nationale. A défaut une adresse comportant le numéro et le nom de la voirie, le code postal et le nom de la commune*
- Valeur obligatoire
- Type : chaîne de caractères

#### Date du menu - Propriété `menuDate`

> *Description : Date de du jour où le menu est servi dans l'établissement au format AAAA-MM-JJ suivant la norme internationale ISO 8601.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Type du repas servi - Propriété `menuTypeRepas`

> *Description : Permet de spécifier le type du repas parmi les valeurs possible (déjeuner, goûter, dîner, collation, pique-nique).*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `déjeuner`
    - `goûter`
    - `dîner`
    - `collation`
    - `pique-nique`

#### Type de plat servi - Propriété `menuTypePlat`

> *Description : Le type de plat correspond à un des termes associés au code choisi dans la nomenclature des repas servis en cantine scolaire.*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `entrée`
    - `plat principal`
    - `garniture`
    - `dessert`
    - `produit laitier`
    - `collation matinale`
    - `goûter`
    - `pain`

#### Nom du plat servi - Propriété `menuNomPlat`

> *Description : Le nom du plat correspond à un terme ou une expression associé au code choisi dans la nomenclature des plats servis en cantine scolaire. Il s'agit donc de renseigner ce champ avec une valeur, jugée la plus pertinente pour désigner le type de plat, dans la limite de 140 caractères maximum en prenant soin d'échapper ou de supprimer les éventuelles virgules.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Code du plat servi - Propriété `menuCodePLat`

> *Description : Code unique par plat éventuellement issu d'une base de données de gestion.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Type de label du plat servi - Propriété `menuLabelPlat`

> *Description : Le type de label du plat correspond à un terme permettant de construire une catégorisation des labels associés aux différents plats.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Nom des allergènes présents dans le plat - Propriété `menuAllergenePLat`

> *Description : Enumération séparés par des virgules des allergènes potentiellement présents dans le plat proposé.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Nom du régime alimentaire - Propriété `menuRegimePlat`

> *Description : Nom de régime auquel est associé le plat entrant dans la composition du menu.*
- Valeur optionnelle
- Type : chaîne de caractères
