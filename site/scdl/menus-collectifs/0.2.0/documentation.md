<MenuSchema />

<MenuSchema />

## menus-collectifs

Menus de la restauration collective

Schéma permettant de décrire les menus des repas proposés par des collectivités locales et des établissements publics. Il permet de préciser les modalités de distribution et le contenu des menus proposés (les plats). Le choix a été fait de détailler chaque plat sur une ligne. Pour décrire un menu il faut donc répéter certaines informations plusieurs fois (voir exemple).

- Schéma créé le : 12/02/2020
- Site web : https://git.opendatafrance.net/scdl/menus-collectifs
- Version : 0.2

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [collectiviteNom](#nom-de-la-collectivite-propriete-collectivitenom) | chaîne de caractères  | Oui |
| [collectiviteSiret](#code-siret-de-la-collectivite-propriete-collectivitesiret) | chaîne de caractères  | Oui |
| [etablissementNom](#nom-de-l-etablissement-ou-entreprise-qui-a-produit-le-repas-servi-propriete-etablissementnom) | chaîne de caractères  | Oui |
| [etablissementSiret](#code-siret-de-l-etablissement-ou-entreprise-qui-a-produit-le-repas-servi--propriete-etablissementsiret) | chaîne de caractères  | Oui |
| [restaurantNom](#nom-du-restaurant-ou-le-repas-est-servi--propriete-restaurantnom) | chaîne de caractères  | Oui |
| [restaurantId](#identifiant-du-restaurant-ou-le-repas-est-servi--propriete-restaurantid) | chaîne de caractères  | Non |
| [restaurantIdType](#type-d-identifiant-utilise-pour-caracterise-un-restaurant-collectif--propriete-restaurantidtype) | chaîne de caractères  | Non |
| [restaurantType](#type-de-client-auquel-le-menu-est-propose--propriete-restauranttype) | chaîne de caractères  | Oui |
| [restaurantConvive](#type-de-convive-auquel-le-menu-est-propose--propriete-restaurantconvive) | chaîne de caractères  | Oui |
| [menuDate](#date-du-menu-propriete-menudate) | date  | Oui |
| [menuTypeRepas](#type-du-repas-servi-propriete-menutyperepas) | chaîne de caractères  | Oui |
| [menuTypePlat](#type-de-plat-servi-propriete-menutypeplat) | chaîne de caractères  | Oui |
| [menuNomPlat](#nom-du-plat-servi-propriete-menunomplat) | chaîne de caractères  | Oui |
| [menuCodePlat](#code-du-plat-servi-propriete-menucodeplat) | chaîne de caractères  | Non |
| [menuSiqoPlat](#indication-de-signe-officiel-de-la-qualite-et-de-la-qualite-propriete-menusiqoplat) | chaîne de caractères  | Non |
| [menuLabelPlat](#indication-de-labels-complementaires-lies-a-des-approvisionnements-locaux-ou-a-des-marques-de-fabrication-propriete-menulabelplat) | chaîne de caractères  | Non |
| [menuAllergenePlat](#nom-des-allergenes-presents-dans-le-plat-propriete-menuallergeneplat) | chaîne de caractères  | Non |
| [menuPrecisionPlat](#precision-(regime-ou-thematique)-associee-au-plat-ou-a-l-ensemble-des-plats-d-un-menu-propriete-menuprecisionplat) | chaîne de caractères  | Non |
| [menuModificationDate](#date-de-derniere-modification-de-l-enregistrement-propriete-menumodificationdate) | date et heure  | Oui |
| [menuModificationActivite](#nature-de-l-activite-ayant-entraine-une-mise-a-jour-de-la-donnee-propriete-menumodificationactivite) | date et heure  | Non |

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

> *Description : Nom officiel de l'établissement au sein duquel est servi le menu.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Identifiant du restaurant où le repas est servi. - Propriété `restaurantId`

> *Description : Identifiant du restaurant dans lequel a été servi le menu soit en utilisant le code SIREN soit le numéro d'identification fourni par l'Éducation Nationale pour les établissements scolaires soit un identifiant interne. Le champ restaurantidType permet de caractériser le type de système d'identification auquel cet identifiant fait référence.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Type d'identifiant utilisé pour caractérisé un restaurant collectif. - Propriété `restaurantIdType`

> *Description : Afin de permettre d'identifier de manière unique chaque restaurant, plusieurs systèmes d'identification peuvent être utilisé en l'absence d'une attribution systématique d'un code SIRET. Pour les établissements scolaires le numéro UID délivré par l'Éducation Nationale (EN) peut être utilisé. Dans le cas des autres (identifiant interne par exemple), la valeur autre doit être sélectionnée. Enfin en l'absence d'identifiant la valeur "Sans" peut-être sélectionnée.*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Siret`
    - `EN`
    - `Autre`
    - `Sans`

#### Type de client auquel le menu est proposé. - Propriété `restaurantType`

> *Description : Permet de préciser le type d'établissement destinataire du menu proposé parmi les valeurs disponibles (Crèche, école maternelle, école élémentaire, Foyer de personnes âgées, Collège, Lycée, administration locale, RPA, EHPAD, repas à domicile)*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `crèche`
    - `École maternelle`
    - `École élémentaire`
    - `Foyer`
    - `Collège`
    - `Lycée`
    - `Administration locale`
    - `RPA`
    - `EHPAD`
    - `Foyer de personnes âgées`
    - `Repas à domicile`
    - `Centre de loisirs`

#### Type de convive auquel le menu est proposé. - Propriété `restaurantConvive`

> *Description : Permet de préciser le type de personnes destinataires du menu proposé parmi les valeurs disponibles (bébés, scolaires, adultes, seniors).*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `bébé`
    - `scolaire`
    - `agent administratif`
    - `adulte`
    - `sénior`

#### Date du menu - Propriété `menuDate`

> *Description : Date du jour où le menu est servi dans l'établissement au format AAAA-MM-JJ suivant la norme internationale ISO 8601.*
- Valeur obligatoire
- Type : date

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

> *Description : Le type de plat correspond à un des éléments disponibles dans la liste (entrée, plat principal, garniture, dessert, produit laitier, collation matinale, goûter, pain).*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `entrée`
    - `plat principal`
    - `garniture`
    - `dessert`
    - `produit laitier`
    - `collation`
    - `goûter`
    - `pain`

#### Nom du plat servi - Propriété `menuNomPlat`

> *Description : Le nom du plat permet de désigner dans la limite de 140 caractères maximum les éléments composant le menu.*
- Valeur obligatoire
- Type : chaîne de caractères
- Moins de 140 caractères

#### Code du plat servi - Propriété `menuCodePlat`

> *Description : Code unique par plat éventuellement issu d'une base de données de gestion. Ce code permet de faire une jointure avec le schéma décrivant la composition des plats. En l'absence d'une base de données liée à un applicatif de gestion, un identifiant aléatoire ou séquentiel peut être utilisé à condition que chaque identifiant soit unique pour un plat donné.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Indication de signe officiel de la qualité et de la qualité - Propriété `menuSiqoPlat`

> *Description : Des cahiers des charges permettent de reconnaître les produits qui bénéficient d’un signe officiel d'identification de la qualité et de l’origine (SIQO) : Agriculture biologique, Appellation d'origine protégée/contrôlée, Indication géographique protégée, Spécialité traditionnelle garantie, Label rouge.*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Agriculture Biologique`
    - `Appellation d'origine protégée/contrôlée`
    - `Indication géographique protégée`
    - `Spécialité traditionnelle garantie`
    - `Label Rouge`

#### Indication de labels complémentaires liés à des approvisionnements locaux ou à des marques de fabrication - Propriété `menuLabelPlat`

> *Description : Des labels complémentaires permettent d'identifier la production locale ou des marques associées à un territoire ou à une démarche de qualité. La saisie dans ce champ est libre. A titre d'exemple OpenFoodFacts propose un liste des labels existant dans sa base de données : https://fr.openfoodfacts.org/labels *
- Valeur optionnelle
- Type : chaîne de caractères

#### Nom des allergènes présents dans le plat - Propriété `menuAllergenePlat`

> *Description : Enumération des éventuels allergènes (séparés par des virgules) présents dans le plat proposé. Actuellement la distinction n'est pas faite entre les allergènes présents du fait de la recette (fiche technique) ou sous forme de traces (lieu de production).*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Céréales contenant du gluten`
    - `Crustacés`
    - `Oeufs`
    - `Poissons`
    - `Arachides`
    - `Soja`
    - `Lait`
    - `Fruits à coques`
    - `Céleri`
    - `Moutarde`
    - `Graines de sésame`
    - `Anhydride sulfureux et sulfites`
    - `Lupin`
    - `Mollusques`

#### Précision (régime ou thématique) associée au plat ou à l'ensemble des plats d'un menu - Propriété `menuPrecisionPlat`

> *Description : Lors d'évènements (semaine du goût, repas de noël, etc.) des menus spéciaux peuvent être proposés. Ce champ peut également permettre d'indiquer si un plat est destiné à un régime particulier (sans viande, végétarien, etc.)*
- Valeur optionnelle
- Type : chaîne de caractères

#### Date de dernière modification de l'enregistrement - Propriété `menuModificationDate`

> *Description : Lors de la publication ou d'éventuelles modifications ce champ d'horodatage permet d'indiquer la date de dernière modification de la donnée présente dans le fichier.*
- Valeur obligatoire
- Type : date et heure

#### Nature de l'activité ayant entraîné une mise à jour de la donnée - Propriété `menuModificationActivite`

> *Description : Afin de renseigner les usagers de la donnée, il est possible de préciser dans ce champ la raison de la mise à jour effectuée.*
- Valeur optionnelle
- Type : date et heure
