<MenuSchema />

## plats-menus-collectifs

Composition des plats des menus de la restauration collective

Description des plats proposés par des collectivités locales et des établissements publics dans le cadre de l'offre de restauration collective. Il permet de préciser les modalités de fabrication des plats et de détailler les ingrédients qui les composent. Ce schéma décrit le détail de chaque champ et le cas échéant les règles de validité associées. Il peut être utilisé en combinaison avec le schéma sur les menus qui décrit l'agencement des plats dans l'offre de restauration collective.

- Schéma créé le : 12/02/2020
- Site web : https://git.opendatafrance.net/scdl/plats-menus-collectifs
- Version : 0.2

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [platCode](#code-du-plat-servi-propriete-platcode) | chaîne de caractères  | Oui |
| [platNom](#nom-du-plat-servi-propriete-platnom) | chaîne de caractères  | Oui |
| [platNombreConvive](#nombre-de-convives-destinataires-du-plat-propose-propriete-platnombreconvive) | nombre réel  | Non |
| [platProduitNom](#produit-entrant-dans-la-composition-du-plat-propriete-platproduitnom) | chaîne de caractères  | Non |
| [platProduitOGM](#presence-d-ogm-dans-le-produit-utilise-dans-la-composition-du-plat-propriete-platproduitogm) | booléen  | Oui |
| [platProduitIonisation](#indication-de-l-utilisation-du-procede-d-ionisation-dans-la-fabrication-du-produit-propriete-platproduitionisation) | booléen  | Oui |
| [platProduitAdditif](#liste-des-additifs-alimentaires-presents-dans-le-produit-entrant-dans-la-composition-du-plat-propriete-platproduitadditif) | chaîne de caractères  | Non |
| [platProduitConditionnementType](#type-de-conditionnement-du-plat-propriete-platproduitconditionnementtype) | chaîne de caractères  | Non |
| [platNutri-score](#indiquation-de-l-indice-nutritif-du-plat-propriete-platnutri-score) | chaîne de caractères  | Non |
| [platPrix](#cout-de-revient-du-plat-propriete-platprix) | chaîne de caractères  | Non |
| [platProduitFournisseurNom](#nom-du-fournisseur-du-produit-entrant-dans-la-composition-du-plat-propriete-platproduitfournisseurnom) | chaîne de caractères  | Non |
| [platProduitFournisseurSiret](#code-siret-du-fournisseur-qui-fournit-les-plats-ou-les-produits-bruts--propriete-platproduitfournisseursiret) | chaîne de caractères  | Non |
| [platProduitFournisseurInsee](#le-code-insee-de-la-commune-d-implantation-du-fournisseur-propriete-platproduitfournisseurinsee) | chaîne de caractères  | Non |
| [platModificationDate](#date-de-derniere-modification-de-l-enregistrement-propriete-platmodificationdate) | date et heure  | Oui |
| [platModificationInformation](#information-sur-la-modification-ayant-entraine-une-mise-a-jour-de-la-donnee-propriete-platmodificationinformation) | chaîne de caractères  | Non |

#### Code du plat servi - Propriété `platCode`

> *Description : Code unique par plat éventuellement issu d'une base de données de gestion. Ce code permet de faire le lien avec l'identifiant des plats (menuCodePlat) dans le schéma des menus.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Nom du plat servi - Propriété `platNom`

> *Description : Le nom du plat dans la limite de 140 caractères maximum.*
- Valeur obligatoire
- Type : chaîne de caractères
- Moins de 140 caractères

#### Nombre de convives destinataires du plat proposé - Propriété `platNombreConvive`

> *Description : Ce champ permet de renseigner le nombre (approximatif) de convives qui vont manger le plat proposé dans le menu.*
- Valeur optionnelle
- Type : nombre réel

#### Produit entrant dans la composition du plat - Propriété `platProduitNom`

> *Description : Afin de décrire le contenu d'un plat, la liste des produits entrant dans sa composition permet d'identifier les apports nutritifs, les éventuels allergènes et les aspects diététiques associés. Ces éléments sont généralement issus de la fiche recette. Le concept de produit est entendu comme la marchandise concrète répondant au besoin d'approvisionnement d'un ingrédient selon des conditions de production (labels et autres caractéristiques qualitatives), de conditionnement (sac, seau, bouteille ... + quantité), de transport (distance parcourue, ...), de conservation (conditions de stockage, péremption, ...), de traçabilité (site de production, n° de lot ...) et commerciales (fournisseur, marché, prix).*
- Valeur optionnelle
- Type : chaîne de caractères

#### Présence d'OGM dans le produit utilisé dans la composition du plat - Propriété `platProduitOGM`

> *Description : Indique la présence d'OGM dans le plat à partir des informations issues du détail des produits et ingrédients ayant permis de le confectionner.*
- Valeur obligatoire
- Type : booléen

#### Indication de l'utilisation du procédé d'ionisation dans la fabrication du produit - Propriété `platProduitIonisation`

> *Description : Indique l'utilisation du procédé d'ionisation consistant à exposer des aliments à des rayonnements ionisants afin de réduire le nombre de micro-organismes qu'ils contiennent.*
- Valeur obligatoire
- Type : booléen

#### Liste des additifs alimentaires présents dans le produit entrant dans la composition du plat - Propriété `platProduitAdditif`

> *Description : Les additifs alimentaires sont des produits ajoutés aux denrées alimentaires dans le but d'en améliorer la conservation, le goût et l'aspect. Les éventuels additifs peuvent être listés dans ce champ en les séparant par une virgule. Un liste des additifs alimentaires est disponibles à [cette adresse](https://fr.wikipedia.org/wiki/Liste_des_additifs_alimentaires)*
- Valeur optionnelle
- Type : chaîne de caractères

#### Type de conditionnement du plat - Propriété `platProduitConditionnementType`

> *Description : Le type de conditionnement du plat dépend du lieu de fabrication ; il s'agit ici de renseigner le mode de conditionnement du produit ou de l'ingrédient lors de sa réception sur le lieu du service ou de la transformation (seau, boîte, carton, bouteille).*
- Valeur optionnelle
- Type : chaîne de caractères

#### Indiquation de l'indice nutritif du plat - Propriété `platNutri-score`

> *Description : Indique la valeur nutritive du plat en fonction des valeur de l'indicateur nutriscore.*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `A`
    - `B`
    - `C`
    - `D`
    - `E`

#### Coût de revient du plat - Propriété `platPrix`

> *Description : Le prix de revient pour la structure de restauration collective est utilisé pour composer les plats et les menus en combinaison avec les impératifs d'équilibre nutritionnel.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Nom du fournisseur du produit entrant dans la composition du plat - Propriété `platProduitFournisseurNom`

> *Description : Les établissements de restauration collective font appel à divers fournisseurs pour leur approvisionnement en plats préparés ou en produits entrants dans la composition des plats préparés sur place.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Code SIRET du fournisseur qui fournit les plats ou les produits bruts. - Propriété `platProduitFournisseurSiret`

> *Description : Identifiant du Système d'Identification du Répertoire des Etablissements (SIRET) du fournisseur qui a fourni les plats ou les produits, composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Le code INSEE de la commune d'implantation du fournisseur - Propriété `platProduitFournisseurInsee`

> *Description : Code Insee de la commune dans laquelle se situe le siège social du fournisseur.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Date de dernière modification de l'enregistrement - Propriété `platModificationDate`

> *Description : Lors de la publication ou d'éventuelles modifications ce champ d'horodatage permet d'indiquer la date de dernière modification de la donnée présente dans le fichier.*
- Valeur obligatoire
- Type : date et heure

#### Information sur la modification ayant entraîné une mise à jour de la donnée - Propriété `platModificationInformation`

> *Description : Afin de renseigner les usagers de la donnée, il est possible de préciser dans ce champ la raison de la mise à jour effectuée.*
- Valeur optionnelle
- Type : chaîne de caractères
