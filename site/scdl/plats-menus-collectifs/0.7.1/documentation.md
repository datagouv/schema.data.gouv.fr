<MenuSchema />

<MenuSchema />

## plats-menus-collectifs

Composition des plats des menus de la restauration collective

Description des plats proposés par des collectivités locales, des établissements publics et des entreprises dans le cadre de l'offre de restauration collective. Il permet de préciser les modalités de fabrication des plats et de détailler les produits qui les composent. Ce schéma décrit le détail de chaque champ et le cas échéant les règles de validité associées. Il peut être utilisé indépendamment ou en complément du le schéma sur les menus collectifs qui décrit la composition en plats.

- Schéma créé le : 12/02/2020
- Site web : https://gitlab.com/opendatafrance/scdl/plats-menus-collectifs
- Version : 0.7.1

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [platCollNom](#nom-de-la-collectivite-qui-produit-les-donnees-propriete-platcollnom) | chaîne de caractères  | Oui |
| [platCollSiret](#code-siret-de-la-collectivite-qui-produit-les-donnees--propriete-platcollsiret) | chaîne de caractères  | Oui |
| [platEtablissementNom](#nom-de-l-etablissement-ou-entreprise-qui-a-produit-le-plat-propriete-platetablissementnom) | chaîne de caractères  | Oui |
| [platEtablissementSiret](#code-siret-de-l-etablissement-ou-entreprise-qui-a-produit-le-plat--propriete-platetablissementsiret) | chaîne de caractères  | Non |
| [platCode](#code-du-plat-servi-propriete-platcode) | chaîne de caractères  | Oui |
| [platNom](#nom-du-plat-servi-propriete-platnom) | chaîne de caractères  | Oui |
| [platProduitNom](#produit-entrant-dans-la-composition-du-plat-propriete-platproduitnom) | chaîne de caractères  | Oui |
| [platProduitFournisseurNom](#nom-du-fournisseur-principal-du-produit-entrant-dans-la-composition-du-plat--propriete-platproduitfournisseurnom) | chaîne de caractères  | Non |
| [platProduitFournisseurSiret](#le-code-siret-du-fournisseur-principal-propriete-platproduitfournisseursiret) | chaîne de caractères  | Non |
| [platProduitFournisseurInsee](#le-code-insee-de-la-commune-d-implantation-du-fournisseur-propriete-platproduitfournisseurinsee) | chaîne de caractères  | Non |
| [platProduitSiqo](#les-signes-officiels-de-la-qualite-et-de-l-origine-propriete-platproduitsiqo) | liste  | Non |
| [platProduitLabel](#indication-de-labels-complementaires-lies-a-des-approvisionnements-locaux-ou-a-des-marques-de-fabrication-propriete-platproduitlabel) | chaîne de caractères  | Non |
| [platProduitDescription](#description-du-plat-prepare-propriete-platproduitdescription) | chaîne de caractères  | Non |
| [platProduitOGM](#presence-d-ogm-dans-le-produit-utilise-dans-la-composition-du-plat-propriete-platproduitogm) | booléen  | Non |
| [platProduitIonisation](#indication-de-l-utilisation-du-procede-d-ionisation-dans-la-fabrication-du-produit-propriete-platproduitionisation) | booléen  | Non |
| [platProduitAdditif](#liste-des-additifs-alimentaires-presents-dans-le-produit-entrant-dans-la-composition-du-plat-propriete-platproduitadditif) | chaîne de caractères  | Non |
| [platProduitAllergene](#nom-des-allergenes-presents-dans-le-produit-propriete-platproduitallergene) | liste  | Non |
| [platProduitNutriment](#nom-et-quantite-des-nutriments-presents-dans-le-produit-propriete-platproduitnutriment) | chaîne de caractères  | Non |
| [platPublicationDate](#date-de-publication-de-l-enregistrement-d-un-plat-propriete-platpublicationdate) | date et heure  | Oui |
| [platModificationDate](#date-de-derniere-modification-de-l-enregistrement-propriete-platmodificationdate) | date et heure  | Oui |
| [platModificationInfo](#information-sur-la-modification-ayant-entraine-une-mise-a-jour-de-la-donnee-propriete-platmodificationinfo) | chaîne de caractères  | Non |

#### Nom de la collectivité qui produit les données - Propriété `platCollNom`

> *Description : Nom officiel de la collectivité ou de l'établissement public responsable de l'offre de restauration collective et qui produit les données.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Code SIRET de la collectivité qui produit les données. - Propriété `platCollSiret`

> *Description : Identifiant du Système d'Identification du Répertoire des Etablissements (SIRET) de la collectivité qui commandé le menu, composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant.*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Nom de l'établissement ou entreprise qui a produit le plat - Propriété `platEtablissementNom`

> *Description : Nom officiel de l'établissement qui est à l'origine de la production du plat. Il s'agit soit d'une régie, soit d'un syndicat mixte, soit d'un prestataire de service.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Code SIRET de l'établissement ou entreprise qui a produit le plat. - Propriété `platEtablissementSiret`

> *Description : Identifiant du Système d'Identification du Répertoire des Etablissements (SIRET) de la collectivité qui a confectionné le plat, composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant. Dans certains cas, l'établissement ne dispose pas de code SIRET. Ce champ est donc facultatif*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Code du plat servi - Propriété `platCode`

> *Description : Code unique par plat éventuellement issu d'une base de données de gestion. Ce code permet de faire le lien avec l'identifiant des plats (menuCodePlat) dans le schéma des menus.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Nom du plat servi - Propriété `platNom`

> *Description : Le nom du plat permet de désigner dans la limite de 160 caractères maximum les éléments composant le menu. Afin de faciliter le regroupement des informations, favorisez les noms courts. Ce champ est répliqué dans le champ MenuNomPlat du schéma des menus-collectifs. Cette réplication permet d'envisager la publication des données des menus_collectifs indépendamment de celles du présent jeu*
- Valeur obligatoire
- Type : chaîne de caractères
- Moins de 160 caractères

#### Produit entrant dans la composition du plat - Propriété `platProduitNom`

> *Description : Afin de décrire le contenu d'un plat, ce champ permet de lister (un produit par ligne) les produits entrant dans sa composition. Cela permet d'identifier à traves eux les apports nutritifs, les éventuels allergènes et les aspects diététiques associés. Ces éléments sont généralement issus de la fiche recette. Lorsque plusieurs produits composent le plat, utilisez autant de lignes que de produits entrant dans sa composition.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Nom du fournisseur principal du produit entrant dans la composition du plat. - Propriété `platProduitFournisseurNom`

> *Description : Les établissements de restauration collective font appel à divers fournisseurs pour leur approvisionnement en plats préparés ou en produits entrants dans la composition des plats préparés sur place. Ces fournisseurs sont soit des centrales d'achat soit des producteurs. Lorsque l'identité du producteur du produit est connue, elle peut remplacer la valeur du fournisseur principal. Sinon ce champ permet d'indiquer le fournisseur principal du produit parmi l’ensemble des fournisseurs qui peuvent intervenir pour cet approvisionnement.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Le code SIRET du fournisseur principal - Propriété `platProduitFournisseurSiret`

> *Description : Identifiant du Système d'Identification du Répertoire des Etablissements (SIRET) du fournisseur principal du produit, composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant. Dans certains cas, le fournisseur dispose de plusieurs code SIRET. Dans ce cas c'est le code de l'établissement principal qui doit être indiqué.*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Le code INSEE de la commune d'implantation du fournisseur - Propriété `platProduitFournisseurInsee`

> *Description : Code Insee de la commune dans laquelle se situe le siège social du fournisseur.*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### Les signes officiels de la qualité et de l'origine - Propriété `platProduitSiqo`

> *Description : Des cahiers des charges permettent de reconnaître les produits qui bénéficient d’un signe officiel d'identification de la qualité et de l’origine (SIQO) : Agriculture biologique, Appellation d'origine protégée/contrôlée, Indication géographique protégée, Spécialité traditionnelle garantie, Label rouge. Il est possible de saisir plusieurs valeurs séparées par une virgule dans ce champ sous la forme ["agriculture biologique","appelation d'origine protégée"].*
- Valeur optionnelle
- Type : liste

#### Indication de labels complémentaires liés à des approvisionnements locaux ou à des marques de fabrication - Propriété `platProduitLabel`

> *Description : Des labels complémentaires permettent d'identifier la production locale ou des marques associées à un territoire ou à une démarche de qualité. La saisie dans ce champ est libre. A titre d'exemple OpenFoodFacts propose un liste des labels existant dans sa base de données : https://fr.openfoodfacts.org/labels. Il est possible de saisir plusieurs valeurs séparées par un point-virgule dans ce champ. *
- Valeur optionnelle
- Type : chaîne de caractères

#### Description du plat préparé - Propriété `platProduitDescription`

> *Description : Lorsque la collectivité achète des plats préparés (boîte de macédoine) elle ne connaît pas l'origine des produits le composant. Ce champ permet de décrire le plat à partir des informations fournies par le fournisseur.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Présence d'OGM dans le produit utilisé dans la composition du plat - Propriété `platProduitOGM`

> *Description : Indique la présence d'OGM dans le produit. S'il en contient la valeur est oui et non s'il n'en contient pas.*
- Valeur optionnelle
- Type : booléen

#### Indication de l'utilisation du procédé d'ionisation dans la fabrication du produit - Propriété `platProduitIonisation`

> *Description : Indique l'utilisation du procédé d'ionisation consistant à exposer des aliments à des rayonnements ionisants afin de réduire le nombre de micro-organismes qu'ils contiennent. Si le procédé a été utilisé la valeur est oui et non sinon.*
- Valeur optionnelle
- Type : booléen

#### Liste des additifs alimentaires présents dans le produit entrant dans la composition du plat - Propriété `platProduitAdditif`

> *Description : Les additifs alimentaires sont des produits ajoutés aux denrées alimentaires dans le but d'en améliorer la conservation, le goût et l'aspect. Les éventuels additifs peuvent être listés dans ce champ en les séparant par un point-virgule. Un liste des additifs alimentaires est disponibles à [cette adresse](https://fr.wikipedia.org/wiki/Liste_des_additifs_alimentaires). Si le produit est certifié sans additifs inscrivez "sans additifs" dans ce champ.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Nom des allergènes présents dans le produit - Propriété `platProduitAllergene`

> *Description : Enumération des éventuels allergènes présents dans le produit entrant dans la composition du plat proposé. Actuellement la distinction n'est pas faite entre les allergènes présents du fait de la recette (fiche technique) ou sous forme de traces (lieu de production). Il est possible de saisir plusieurs valeurs séparées par un virgule dans ce champ sous la forme ["oeufs","lait"].*
- Valeur optionnelle
- Type : liste

#### Nom et quantité des nutriments présents dans le produit - Propriété `platProduitNutriment`

> *Description : Les produits composant les plats contiennent différents nutriments. Cette information est notamment utilisée pour composer des menus équilibrés du point de vue diététique. Il est possible de saisir plusieurs valeurs séparées par un point-virgule dans ce champ sous la forme "14g Matière grasse ; 2g Glucides ; 1g Sel". Il s’agit ici d’une valeur de nutriment pour  100g de produit*
- Valeur optionnelle
- Type : chaîne de caractères

#### Date de publication de l'enregistrement d'un plat - Propriété `platPublicationDate`

> *Description : Lors de la publication ce champ d'horodatage permet d'indiquer la date de publication de la donnée présente dans le fichier.*
- Valeur obligatoire
- Type : date et heure

#### Date de dernière modification de l'enregistrement - Propriété `platModificationDate`

> *Description : Lors de la publication ou d'éventuelles modifications ce champ d'horodatage permet d'indiquer la date de dernière modification de la donnée présente dans le fichier.*
- Valeur obligatoire
- Type : date et heure

#### Information sur la modification ayant entraîné une mise à jour de la donnée - Propriété `platModificationInfo`

> *Description : Afin de renseigner les usagers de la donnée, il est possible de préciser dans ce champ la raison de la mise à jour effectuée.*
- Valeur optionnelle
- Type : chaîne de caractères
