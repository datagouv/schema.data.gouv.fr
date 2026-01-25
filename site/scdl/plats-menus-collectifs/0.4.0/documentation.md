<MenuSchema />

<MenuSchema />

## plats-menus-collectifs

Composition des plats des menus de la restauration collective

Description des plats proposés par des collectivités locales et des établissements publics dans le cadre de l'offre de restauration collective. Il permet de préciser les modalités de fabrication des plats et de détailler les ingrédients qui les composent. Ce schéma décrit le détail de chaque champ et le cas échéant les règles de validité associées. Il peut être utilisé en combinaison avec le schéma sur les menus qui décrit l'agencement des plats dans l'offre de restauration collective.

- Schéma créé le : 12/02/2020
- Site web : https://git.opendatafrance.net/scdl/plats-menus-collectifs
- Version : 0.4

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [plat_code](#code-du-plat-servi-propriete-plat-code) | chaîne de caractères  | Oui |
| [plat_nom](#nom-du-plat-servi-propriete-plat-nom) | chaîne de caractères  | Oui |
| [plat_nb_convive](#nombre-de-convives-destinataires-du-plat-propose-propriete-plat-nb-convive) | nombre réel  | Non |
| [plat_prod_nom](#produit-entrant-dans-la-composition-du-plat-propriete-plat-prod-nom) | chaîne de caractères  | Oui |
| [plat_prod_Fourn_nom](#nom-du-fournisseur-du-produit-entrant-dans-la-composition-du-plat-propriete-plat-prod-fourn-nom) | chaîne de caractères  | Non |
| [plat_prod_fourn_siret](#le-code-insee-de-la-commune-d-implantation-du-fournisseur-propriete-plat-prod-fourn-siret) | chaîne de caractères  | Non |
| [plat_prod_fourn_insee](#le-code-insee-de-la-commune-d-implantation-du-fournisseur-propriete-plat-prod-fourn-insee) | chaîne de caractères  | Non |
| [plat_prod_OGM](#presence-d-ogm-dans-le-produit-utilise-dans-la-composition-du-plat-propriete-plat-prod-ogm) | booléen  | Non |
| [plat_prod_ion](#indication-de-l-utilisation-du-procede-d-ionisation-dans-la-fabrication-du-produit-propriete-plat-prod-ion) | booléen  | Non |
| [plat_prod_add](#liste-des-additifs-alimentaires-presents-dans-le-produit-entrant-dans-la-composition-du-produit-propriete-plat-prod-add) | chaîne de caractères  | Non |
| [plat_prod_all](#nom-des-allergenes-presents-dans-le-plat-propriete-plat-prod-all) | chaîne de caractères  | Non |
| [plat_prod_nut_nom](#nom-des-nutriments-presents-dans-l-ingredient-propriete-plat-prod-nut-nom) | chaîne de caractères  | Non |
| [plat_prod_nut_quant](#quantite-de-nutriments-presents-dans-le-produit-pour-100g--propriete-plat-prod-nut-quant) | nombre réel  | Non |
| [plat_pub_date](#date-de-publication-de-l-enregistrement-d-un-plat-propriete-plat-pub-date) | date et heure  | Oui |
| [plat_mod_date](#date-de-derniere-modification-de-l-enregistrement-propriete-plat-mod-date) | date et heure  | Oui |
| [plat_mod_info](#information-sur-la-modification-ayant-entraine-une-mise-a-jour-de-la-donnee-propriete-plat-mod-info) | chaîne de caractères  | Non |

#### Code du plat servi - Propriété `plat_code`

> *Description : Code unique par plat éventuellement issu d'une base de données de gestion. Ce code permet de faire le lien avec l'identifiant des plats (menuCodePlat) dans le schéma des menus.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Nom du plat servi - Propriété `plat_nom`

> *Description : Le nom du plat permet de désigner dans la limite de 160 caractères maximum les éléments composant le menu. Afin de faciliter le regroupement des informations, favorisez les noms courts en utilisant une majuscule initiale. Lorsque plusieurs ingrédients composent le plat, utilisez un point virgule pour les séparer. Ce champ est redondant avec le champ menuNomPlat du schéma des menus. Sa duplication permet d'envisager la publication de données de manière indépendante ou jointe.*
- Valeur obligatoire
- Type : chaîne de caractères
- Moins de 160 caractères

#### Nombre de convives destinataires du plat proposé - Propriété `plat_nb_convive`

> *Description : Ce champ permet de renseigner le nombre (approximatif) de convives qui vont manger le plat proposé dans le menu.*
- Valeur optionnelle
- Type : nombre réel

#### Produit entrant dans la composition du plat - Propriété `plat_prod_nom`

> *Description : Afin de décrire le contenu d'un plat, la liste des produits entrant dans sa composition permet d'identifier les apports nutritifs, les éventuels allergènes et les aspects diététiques associés. Ces éléments sont généralement issus de la fiche recette. Le concept de produit est entendu comme la marchandise concrète répondant au besoin d'approvisionnement d'un ingrédient selon des conditions de production (labels et autres caractéristiques qualitatives), de conditionnement (sac, seau, bouteille ... + quantité), de transport (distance parcourue, ...), de conservation (conditions de stockage, péremption, ...), de traçabilité (site de production, n° de lot ...) et commerciales (fournisseur, marché, prix). Lorsque plusieurs produits composent le plat, utilisez un point virgule pour les séparer (boeuf de bazas; champignons ; oignons ; crême fraîche).*
- Valeur obligatoire
- Type : chaîne de caractères

#### Nom du fournisseur du produit entrant dans la composition du plat - Propriété `plat_prod_Fourn_nom`

> *Description : Les établissements de restauration collective font appel à divers fournisseurs pour leur approvisionnement en plats préparés ou en produits entrants dans la composition des plats préparés sur place. En cas de multi-fournisseur veuillez renseigner le fournisseur principal.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Le code INSEE de la commune d'implantation du fournisseur - Propriété `plat_prod_fourn_siret`

> *Description : Identifiant du Système d'Identification du Répertoire des Etablissements (SIRET) du fournisseur principal du produit, composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant. Dans certains cas, le fournisseur dispose de plusieurs code SIRET. Dans ce cas c'est le code de l'établissement principal qui doit être indiqué.*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Le code INSEE de la commune d'implantation du fournisseur - Propriété `plat_prod_fourn_insee`

> *Description : Code Insee de la commune dans laquelle se situe le siège social du fournisseur.*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### Présence d'OGM dans le produit utilisé dans la composition du plat - Propriété `plat_prod_OGM`

> *Description : Indique la présence d'OGM dans le plat à partir des informations issues du détail des produits et ingrédients ayant permis de le confectionner. S'il en contient la valeur est oui et non s'il n'en contient pas.*
- Valeur optionnelle
- Type : booléen

#### Indication de l'utilisation du procédé d'ionisation dans la fabrication du produit - Propriété `plat_prod_ion`

> *Description : Indique l'utilisation du procédé d'ionisation consistant à exposer des aliments à des rayonnements ionisants afin de réduire le nombre de micro-organismes qu'ils contiennent. Si le procédé a été utilisé la valeur est oui et non sinon.*
- Valeur optionnelle
- Type : booléen

#### Liste des additifs alimentaires présents dans le produit entrant dans la composition du produit - Propriété `plat_prod_add`

> *Description : Les additifs alimentaires sont des produits ajoutés aux denrées alimentaires dans le but d'en améliorer la conservation, le goût et l'aspect. Les éventuels additifs peuvent être listés dans ce champ en les séparant par un point-virgule. Un liste des additifs alimentaires est disponibles à [cette adresse](https://fr.wikipedia.org/wiki/Liste_des_additifs_alimentaires). Si le produit est certifié sans additifs inscrivez "sans additifs" dans ce champ.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Nom des allergènes présents dans le plat - Propriété `plat_prod_all`

> *Description : Enumération des éventuels allergènes (séparés par des points-virgules) présents dans le plat proposé. Actuellement la distinction n'est pas faite entre les allergènes présents du fait de la recette (fiche technique) ou sous forme de traces (lieu de production). Il est possible de saisir plusieurs valeurs séparées par des points-virgule dans ce champ.*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Gluten`
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

#### Nom des nutriments présents dans l'ingrédient - Propriété `plat_prod_nut_nom`

> *Description : Les produits composant les plats contiennent différents nutriments. Cette information est notamment utilisée pour composer des menus équilibrés du point de vue diététique.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Quantité de nutriments présents dans le produit pour 100g. - Propriété `plat_prod_nut_quant`

> *Description : Les produits composants les plats contiennent différents nutriments en quantité variable. Ce champ permet d'indiquer la quantité de nutriment par gramme.*
- Valeur optionnelle
- Type : nombre réel

#### Date de publication de l'enregistrement d'un plat - Propriété `plat_pub_date`

> *Description : Lors de la publication ce champ d'horodatage permet d'indiquer la date de publication de la donnée présente dans le fichier.*
- Valeur obligatoire
- Type : date et heure

#### Date de dernière modification de l'enregistrement - Propriété `plat_mod_date`

> *Description : Lors de la publication ou d'éventuelles modifications ce champ d'horodatage permet d'indiquer la date de dernière modification de la donnée présente dans le fichier.*
- Valeur obligatoire
- Type : date et heure

#### Information sur la modification ayant entraîné une mise à jour de la donnée - Propriété `plat_mod_info`

> *Description : Afin de renseigner les usagers de la donnée, il est possible de préciser dans ce champ la raison de la mise à jour effectuée.*
- Valeur optionnelle
- Type : chaîne de caractères
