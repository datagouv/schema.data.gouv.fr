<MenuSchema />

<MenuSchema />

## menus-collectifs

Menus de la restauration collective

Schéma permettant de décrire les menus des repas proposés par les collectivités locales, les établissements publics et privés. Il permet de préciser les modalités de distribution et le contenu des menus proposés (les plats). Le choix a été fait de détailler chaque plat sur une ligne. Pour décrire un menu il faut donc répéter certaines informations plusieurs fois (voir exemple).

- Schéma créé le : 12/02/2020
- Site web : https://git.opendatafrance.net/scdl/menus-collectifs
- Version : 1.2

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [menuCollNom](#nom-de-la-collectivite-qui-produit-les-donnees-propriete-menucollnom) | chaîne de caractères  | Oui |
| [menuCollSiret](#code-siret-de-la-collectivite-qui-produit-les-donnees--propriete-menucollsiret) | chaîne de caractères  | Oui |
| [menuEtablissementNom](#nom-de-l-etablissement-ou-entreprise-qui-a-produit-le-repas-servi-propriete-menuetablissementnom) | chaîne de caractères  | Oui |
| [menuEtablissementSiret](#code-siret-de-l-etablissement-ou-entreprise-qui-a-produit-le-repas-servi--propriete-menuetablissementsiret) | chaîne de caractères  | Non |
| [menuRestaurantNom](#nom-du-restaurant-dans-lequel-le-repas-est-servi--propriete-menurestaurantnom) | chaîne de caractères  | Oui |
| [menuRestaurantInsee](#le-code-insee-de-la-commune-d-implantation-du-restaurant-propriete-menurestaurantinsee) | chaîne de caractères  | Non |
| [menuRestaurantId](#identifiant-du-restaurant-ou-le-repas-est-servi--propriete-menurestaurantid) | chaîne de caractères  | Non |
| [menuRestaurantIdType](#type-d-identifiant-utilise-pour-caracteriser-un-restaurant-collectif--propriete-menurestaurantidtype) | chaîne de caractères  | Oui |
| [menuRestaurantType](#type-de-restaurant-auquel-le-menu-est-propose--propriete-menurestauranttype) | chaîne de caractères  | Oui |
| [menuRestaurantConvive](#type-de-convive-auquel-le-menu-est-propose--propriete-menurestaurantconvive) | chaîne de caractères  | Oui |
| [menuDate](#date-de-service-du-menu-propriete-menudate) | date (format `%Y-%m-%d`) | Oui |
| [menuTypeRepas](#type-du-repas-servi-propriete-menutyperepas) | chaîne de caractères  | Oui |
| [menuTypePlat](#type-de-plat-servi-propriete-menutypeplat) | chaîne de caractères  | Oui |
| [menuNomPlat](#nom-du-plat-servi-propriete-menunomplat) | chaîne de caractères  | Oui |
| [menuCodePlat](#code-du-plat-servi-propriete-menucodeplat) | chaîne de caractères  | Non |
| [menuPlatSiqo](#les-signes-officiels-de-la-qualite-et-de-l-origine--propriete-menuplatsiqo) | liste  | Non |
| [menuPlatLabel](#indication-de-labels-complementaires-lies-a-des-approvisionnements-locaux-ou-a-des-marques-de-fabrication-propriete-menuplatlabel) | chaîne de caractères  | Non |
| [menuPlatPrecision](#precision-associee-au-plat-ou-a-l-ensemble-des-plats-d-un-menu-propriete-menuplatprecision) | chaîne de caractères  | Non |
| [menuPlatRegime](#precision-qualitative-associee-au-plat-d-un-menu-propriete-menuplatregime) | liste  | Non |
| [menuPlatAllergene](#nom-des-allergenes-presents-dans-le-plat-propriete-menuplatallergene) | liste  | Non |
| [menuPlatTexture](#precision-qualitative-associee-a-la-texture-du-plat-propriete-menuplattexture) | liste  | Non |
| [menuPlatNutriscore](#indication-de-l-indice-nutritif-du-plat-propose-dans-le-menu-propriete-menuplatnutriscore) | chaîne de caractères  | Non |
| [menuPlatPrix](#cout-theorique-de-revient-du-plat-calcule-a-partir-du-cout-de-production-propriete-menuplatprix) | nombre réel  | Non |
| [menuPublicationDate](#date-de-publication-de-l-enregistrement-d-un-menu-propriete-menupublicationdate) | date et heure  | Oui |
| [menuModificationDate](#date-de-derniere-modification-de-l-enregistrement-d-un-menu-propriete-menumodificationdate) | date et heure  | Non |
| [menuModificationInfo](#information-sur-la-modification-ayant-entraine-une-mise-a-jour-de-la-donnee-propriete-menumodificationinfo) | chaîne de caractères  | Non |

#### Nom de la collectivité qui produit les données - Propriété `menuCollNom`

> *Description : Nom officiel de la collectivité ou de l'établissement public responsable de l'offre de restauration collective et qui produit les données.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Code SIRET de la collectivité qui produit les données. - Propriété `menuCollSiret`

> *Description : Identifiant du Système d'Identification du Répertoire des Etablissements (SIRET) de la collectivité qui commandé le menu, composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant.*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Nom de l'établissement ou entreprise qui a produit le repas servi - Propriété `menuEtablissementNom`

> *Description : Nom officiel de l'établissement qui est à l'origine de la production du repas. Il s'agit soit d'une régie, soit d'un syndicat mixte, soit d'un prestataire de service.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Code SIRET de l'établissement ou entreprise qui a produit le repas servi. - Propriété `menuEtablissementSiret`

> *Description : Identifiant du Système d'Identification du Répertoire des Etablissements (SIRET) de la collectivité qui confectionné le menu, composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant. Dans certains cas, l'établissement ne dispose pas de code SIRET. Ce champ est donc facultatif*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Nom du restaurant dans lequel le repas est servi. - Propriété `menuRestaurantNom`

> *Description : Nom officiel de l'établissement (une école, un lycée, une résidence pour personne âgée, un restaurant administratif, etc...) au sein duquel est servi le menu.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Le code INSEE de la commune d'implantation du restaurant - Propriété `menuRestaurantInsee`

> *Description : Code Insee de la commune dans laquelle se situe le restaurant où est servi le menu.*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### Identifiant du restaurant où le repas est servi. - Propriété `menuRestaurantId`

> *Description : Identifiant du restaurant dans lequel a été servi le menu. Si le restaurant dispose d'une raison sociale, il est obligatoire d'utiliser son numéro SIRET. Si le restaurant est un établissement scolaire qui ne dispose pas de numéro de SIRET, il est possible de l'identifier avec le code UAI de l'établissement. Sinon, il est possible d'utiliser un identifiant interne de gestion. Le champ restaurantIdType permet de caractériser le type de système d'identification auquel cet identifiant fait référence.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Type d'identifiant utilisé pour caractériser un restaurant collectif. - Propriété `menuRestaurantIdType`

> *Description : Afin de permettre d'identifier de manière unique chaque restaurant, plusieurs systèmes d'identification peuvent être utilisé en l'absence d'une attribution systématique d'un code SIRET. Pour les établissements scolaires le numéro UAI délivré par l'Éducation Nationale (EN) peut être utilisé. Dans le cas des autres (identifiant interne par exemple), la valeur "autre" doit être sélectionnée. Enfin en l'absence d'identifiant la valeur "sans" doit être sélectionnée. Ce champ est donc obligatoire.*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `SIRET`
    - `EN`
    - `autre`
    - `sans`

#### Type de restaurant auquel le menu est proposé. - Propriété `menuRestaurantType`

> *Description : Permet de préciser le type d'établissement destinataire du menu proposé parmi les valeurs disponibles (crèche, maternelle, élémentaire, collège, lycée, administration, résidence sénior, EHPAD, repas à domicile, centre de loisirs). Si vous ne trouvez pas de valeur qui corresponde à votre usage dans cette liste, vous pouvez saisir la valeur "autre".*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `crèche`
    - `maternelle`
    - `élémentaire`
    - `collège`
    - `lycée`
    - `université`
    - `centre de formation`
    - `administration`
    - `résidence sénior`
    - `EHPAD`
    - `repas à domicile`
    - `centre de loisirs`
    - `restaurant d'entreprise`
    - `autre`

#### Type de convive auquel le menu est proposé. - Propriété `menuRestaurantConvive`

> *Description : Permet de préciser d'un restaurant, le type de public destinataire du menu proposé ou un lieu spécifique dans lequel le menu est servi par exemple. Si plusieurs publics sont destinataires d'un même menu au sein d'un même restaurant, vous pouvez détailler la liste des convives en séparant les valeurs par un point virgule ("petite section" ; "grande section"). La valeur par défaut pour ce champ est 'tous' *
- Valeur obligatoire
- Type : chaîne de caractères

#### Date de service du menu - Propriété `menuDate`

> *Description : Date du jour à laquelle le menu est servi dans le restaurant au format AAAA-MM-JJ suivant la norme internationale ISO 8601.*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### Type du repas servi - Propriété `menuTypeRepas`

> *Description : Permet de spécifier le type du repas parmi les valeurs possibles (petit-déjeuner, déjeuner, goûter, dîner, collation, pique-nique). Dans le cas où vous ne trouvez pas la valeur correspondant à votre usage dans la liste proposée, vous pouvez saisir la valeur "autre".*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `petit-déjeuner`
    - `déjeuner`
    - `goûter`
    - `dîner`
    - `collation`
    - `pique-nique`
    - `autre`

#### Type de plat servi - Propriété `menuTypePlat`

> *Description : Le type de plat correspond à un des éléments disponibles dans la liste (entrée, plat principal, garniture, dessert, produit laitier, pain). Dans le cas où vous ne trouvez pas la valeur correspondant à votre usage dans la liste proposée, vous pouvez saisir la valeur "autre".*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `entrée`
    - `plat principal`
    - `garniture`
    - `dessert`
    - `produit laitier`
    - `pain`
    - `autre`

#### Nom du plat servi - Propriété `menuNomPlat`

> *Description : Le nom du plat permet de désigner dans la limite de 160 caractères maximum les éléments composant le menu. Afin de faciliter le regroupement des informations, favorisez les noms courts.*
- Valeur obligatoire
- Type : chaîne de caractères
- Moins de 160 caractères

#### Code du plat servi - Propriété `menuCodePlat`

> *Description : Code unique par plat éventuellement issu d'une base de données de gestion. Ce code permet de faire une jointure avec le schéma décrivant la composition des plats.*
- Valeur optionnelle
- Type : chaîne de caractères
- Moins de 16 caractères

#### Les signes officiels de la qualité et de l'origine. - Propriété `menuPlatSiqo`

> *Description : Des cahiers des charges permettent de reconnaître les produits qui bénéficient d’un signe officiel d'identification de la qualité et de l’origine (SIQO) : agriculture biologique, appellation d'origine protégée/contrôlée, indication géographique protégée, spécialité traditionnelle garantie, label rouge. Il est possible de saisir plusieurs valeurs séparées par un point-virgule dans ce champ.*
- Valeur optionnelle
- Type : liste

#### Indication de labels complémentaires liés à des approvisionnements locaux ou à des marques de fabrication - Propriété `menuPlatLabel`

> *Description : Des labels complémentaires permettent d'identifier la production locale ou des marques associées à un territoire ou à une démarche de qualité. La saisie dans ce champ est libre. A titre d'exemple OpenFoodFacts propose un liste des labels existant dans sa base de données : https://fr.openfoodfacts.org/labels. Il est possible de saisir plusieurs valeurs séparées par un point-virgule dans ce champ. *
- Valeur optionnelle
- Type : chaîne de caractères

#### Précision associée au plat ou à l'ensemble des plats d'un menu - Propriété `menuPlatPrecision`

> *Description : Lors d'évènements (semaine du goût, repas de noël, etc.) des menus spéciaux peuvent être proposés. Il est possible de saisir plusieurs valeurs séparées par un point-virgule dans ce champ.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Précision qualitative associée au plat d'un menu - Propriété `menuPlatRegime`

> *Description : En fonction du type de convives ou de régimes alimentaires spécifiques, des plats de substitution peuvent être proposés. Ce champ peut permettre d'indiquer si un plat est destiné à un régime particulier (sans viande, végétarien, etc.). Il est possible de saisir plusieurs valeurs séparées par un point-virgule dans ce champ.*
- Valeur optionnelle
- Type : liste

#### Nom des allergènes présents dans le plat - Propriété `menuPlatAllergene`

> *Description : Enumération des éventuels allergènes présents dans le plat proposé. Actuellement la distinction n'est pas faite entre les allergènes présents du fait de la recette (fiche technique) ou sous forme de traces (lieu de production). Il est possible de saisir plusieurs valeurs séparées par un point-virgule dans ce champ.*
- Valeur optionnelle
- Type : liste

#### Précision qualitative associée à la texture du plat - Propriété `menuPlatTexture`

> *Description : En fonction du type de convives ou de régimes alimentaires spécifiques, des modifications de texture peuvent être proposés. Ce champ peut permettre d'indiquer si un plat est destiné à être proposé sous différentes textures (normal, mixé, fondant, haché). Il est possible de saisir plusieurs valeurs séparées par un point-virgule dans ce champ.*
- Valeur optionnelle
- Type : liste

#### Indication de l'indice nutritif du plat proposé dans le menu - Propriété `menuPlatNutriscore`

> *Description : Indique la valeur nutritive du plat en fonction des valeurs de l'indicateur nutriscore.*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `A`
    - `B`
    - `C`
    - `D`
    - `E`

#### Coût théorique de revient du plat calculé à partir du coût de production - Propriété `menuPlatPrix`

> *Description : Le prix de revient pour la structure de restauration collective est utilisé pour composer les plats et les menus en combinaison avec les impératifs d'équilibre nutritionnel. Prix en euros sous la forme d'un nombre entier ou décimal avec comme séparateur le point.*
- Valeur optionnelle
- Type : nombre réel

#### Date de publication de l'enregistrement d'un menu - Propriété `menuPublicationDate`

> *Description : Lors de la publication ce champ d'horodatage permet d'indiquer la date de publication de la donnée présente dans le fichier.*
- Valeur obligatoire
- Type : date et heure

#### Date de dernière modification de l'enregistrement d'un menu - Propriété `menuModificationDate`

> *Description : Lors de la modification ce champ d'horodatage permet d'indiquer la date de dernière modification de la donnée présente dans le fichier.*
- Valeur optionnelle
- Type : date et heure

#### Information sur la modification ayant entraîné une mise à jour de la donnée - Propriété `menuModificationInfo`

> *Description : Afin de renseigner les usagers de la donnée, il est possible de préciser dans ce champ la raison de la mise à jour effectuée.*
- Valeur optionnelle
- Type : chaîne de caractères
