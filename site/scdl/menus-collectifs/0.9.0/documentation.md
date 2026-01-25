<MenuSchema />

<MenuSchema />

## menus-collectifs

Menus de la restauration collective

Schéma permettant de décrire les menus des repas proposés par des collectivités locales et des établissements publics. Il permet de préciser les modalités de distribution et le contenu des menus proposés (les plats). Le choix a été fait de détailler chaque plat sur une ligne. Pour décrire un menu il faut donc répéter certaines informations plusieurs fois (voir exemple).

- Schéma créé le : 12/02/2020
- Site web : https://git.opendatafrance.net/scdl/menus-collectifs
- Version : 0.9

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [menu_coll_nom](#nom-de-la-collectivite-qui-produit-les-donnees-propriete-menu-coll-nom) | chaîne de caractères  | Oui |
| [menu_coll_siret](#code-siret-de-la-collectivite-qui-produit-les-donnees--propriete-menu-coll-siret) | chaîne de caractères  | Oui |
| [menu_etab_nom](#nom-de-l-etablissement-ou-entreprise-qui-a-produit-le-repas-servi-propriete-menu-etab-nom) | chaîne de caractères  | Oui |
| [menu_etab_siret](#code-siret-de-l-etablissement-ou-entreprise-qui-a-produit-le-repas-servi--propriete-menu-etab-siret) | chaîne de caractères  | Non |
| [menu_rest_nom](#nom-du-restaurant-ou-le-repas-est-servi--propriete-menu-rest-nom) | chaîne de caractères  | Oui |
| [menu_rest_insee](#le-code-insee-de-la-commune-d-implantation-du-restaurant-propriete-menu-rest-insee) | chaîne de caractères  | Oui |
| [menu_rest_id](#identifiant-du-restaurant-ou-le-repas-est-servi--propriete-menu-rest-id) | chaîne de caractères  | Non |
| [menu_rest_id_type](#type-d-identifiant-utilise-pour-caracteriser-un-restaurant-collectif--propriete-menu-rest-id-type) | chaîne de caractères  | Oui |
| [menu_rest_type](#type-de-restaurant-auquel-le-menu-est-propose--propriete-menu-rest-type) | chaîne de caractères  | Oui |
| [menu_rest_convive](#type-de-convive-auquel-le-menu-est-propose--propriete-menu-rest-convive) | chaîne de caractères  | Oui |
| [menu_date](#date-du-menu-propriete-menu-date) | date  | Oui |
| [menu_type_repas](#type-du-repas-servi-propriete-menu-type-repas) | chaîne de caractères  | Oui |
| [menu_type_plat](#type-de-plat-servi-propriete-menu-type-plat) | chaîne de caractères  | Oui |
| [menu_nom_plat](#nom-du-plat-servi-propriete-menu-nom-plat) | chaîne de caractères  | Oui |
| [menu_code_plat](#code-du-plat-servi-propriete-menu-code-plat) | chaîne de caractères  | Non |
| [menu_siqo_plat](#indication-de-signe-officiel-de-la-qualite-ou-du-lieu-de-fabrication-propriete-menu-siqo-plat) | chaîne de caractères  | Non |
| [menu_label_plat](#indication-de-labels-complementaires-lies-a-des-approvisionnements-locaux-ou-a-des-marques-de-fabrication-propriete-menu-label-plat) | chaîne de caractères  | Non |
| [menu_prec_plat](#precision-thematique-associee-au-plat-ou-a-l-ensemble-des-plats-d-un-menu-propriete-menu-prec-plat) | chaîne de caractères  | Non |
| [menu_reg_plat](#precision-qualitative-associee-au-plat-d-un-menu-propriete-menu-reg-plat) | chaîne de caractères  | Non |
| [menu_text_plat](#precision-qualitative-associee-a-la-texture-du-plat-propriete-menu-text-plat) | chaîne de caractères  | Oui |
| [menu_nutri-score_plat](#indication-de-l-indice-nutritif-du-plat-propose-dans-le-menu-propriete-menu-nutri-score-plat) | chaîne de caractères  | Non |
| [menu_prix_plat](#cout-theorique-de-revient-du-plat-calcule-a-partir-du-cout-de-production-propriete-menu-prix-plat) | chaîne de caractères  | Non |
| [menu_pub_date](#date-de-publication-de-l-enregistrement-d-un-menu-propriete-menu-pub-date) | date et heure  | Oui |
| [menu_mod_date](#date-de-derniere-modification-de-l-enregistrement-d-un-menu-propriete-menu-mod-date) | date et heure  | Non |
| [menu_mod_info](#information-sur-la-modification-ayant-entraine-une-mise-a-jour-de-la-donnee-propriete-menu-mod-info) | chaîne de caractères  | Non |

#### Nom de la collectivité qui produit les données - Propriété `menu_coll_nom`

> *Description : Nom officiel de la collectivité ou de l'établissement public responsable de l'offre de restauration collective et qui produit les données.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Code SIRET de la collectivité qui produit les données. - Propriété `menu_coll_siret`

> *Description : Identifiant du Système d'Identification du Répertoire des Etablissements (SIRET) de la collectivité qui commandé le menu, composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant.*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Nom de l'établissement ou entreprise qui a produit le repas servi - Propriété `menu_etab_nom`

> *Description : Nom officiel de l'établissement qui est à l'origine de la production du repas. Il s'agit soit d'une régie, soit d'un syndicat mixte, soit d'un prestataire de service.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Code SIRET de l'établissement ou entreprise qui a produit le repas servi. - Propriété `menu_etab_siret`

> *Description : Identifiant du Système d'Identification du Répertoire des Etablissements (SIRET) de la collectivité qui confectionné le menu, composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant. Dans certains cas, l'établissement ne dispose pas de code SIRET. Ce champ est donc facultatif*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Nom du restaurant où le repas est servi. - Propriété `menu_rest_nom`

> *Description : Nom officiel de l'établissement (une école, un lycée, une résidence pour personne âgée, un restaurant administratif, etc...) au sein duquel est servi le menu.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Le code INSEE de la commune d'implantation du restaurant - Propriété `menu_rest_insee`

> *Description : Code Insee de la commune dans laquelle se situe le restaurant où est servi le menu.*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### Identifiant du restaurant où le repas est servi. - Propriété `menu_rest_id`

> *Description : Identifiant du restaurant dans lequel a été servi le menu. Si le restaurant dispose d'une raison sociale, il est possible d'utiliser son numéro SIRET. Si le restaurant est un établissement scolaire il est possible de l'identifier avec le code UAI de l'établissement. Sinon, il est possible d'utiliser un identifiant interne de gestion. Le champ restaurantIdType permet de caractériser le type de système d'identification auquel cet identifiant fait référence.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Type d'identifiant utilisé pour caractériser un restaurant collectif. - Propriété `menu_rest_id_type`

> *Description : Afin de permettre d'identifier de manière unique chaque restaurant, plusieurs systèmes d'identification peuvent être utilisé en l'absence d'une attribution systématique d'un code SIRET. Pour les établissements scolaires le numéro UAI délivré par l'Éducation Nationale (EN) peut être utilisé. Dans le cas des autres (identifiant interne par exemple), la valeur autre doit être sélectionnée. Enfin en l'absence d'identifiant la valeur "Sans" doit être sélectionnée. Ce champ est donc obligatoire.*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `SIRET`
    - `EN`
    - `Autre`
    - `Sans`

#### Type de restaurant auquel le menu est proposé. - Propriété `menu_rest_type`

> *Description : Permet de préciser le type d'établissement destinataire du menu proposé parmi les valeurs disponibles (crèche, maternelle, élémentaire, collège, lycée, administration, résidence sénior, EHPAD, repas à domicile, centre de loisirs ou tous si les convives sont indifférenciés). Si vous ne trouvez pas de valeur qui corresponde à votre usage dans cette liste, vous pouvez saisir la valeur "autre".*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `crèche`
    - `maternelle`
    - `élémentaire`
    - `collège`
    - `lycée`
    - `administration`
    - `résidence sénior`
    - `EHPAD`
    - `repas à domicile`
    - `centre de loisirs`
    - `tous`
    - `autre`

#### Type de convive auquel le menu est proposé. - Propriété `menu_rest_convive`

> *Description : Permet de préciser le type de public, à l'intérieur d'un type de restaurant, destinataire du menu proposé. Si plusieurs publics sont destinataires d'un même menu au sein d'un même restaurant, vous pouvez détailler la liste des convives en séparant les valeurs par un point virgule ("petite section" ; "grande section"). La valeur par défaut poiur ce champ est 'tous' *
- Valeur obligatoire
- Type : chaîne de caractères

#### Date du menu - Propriété `menu_date`

> *Description : Date du jour où le menu est servi dans l'établissement au format AAAA-MM-JJ suivant la norme internationale ISO 8601.*
- Valeur obligatoire
- Type : date

#### Type du repas servi - Propriété `menu_type_repas`

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

#### Type de plat servi - Propriété `menu_type_plat`

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

#### Nom du plat servi - Propriété `menu_nom_plat`

> *Description : Le nom du plat permet de désigner dans la limite de 160 caractères maximum les éléments composant le menu. Afin de faciliter le regroupement des informations, favorisez les noms courts en utilisant une majuscule initiale. Lorsque plusieurs ingrédients composent le plat, utilisez un point virgule pour les séparer.*
- Valeur obligatoire
- Type : chaîne de caractères
- Moins de 160 caractères

#### Code du plat servi - Propriété `menu_code_plat`

> *Description : Code unique par plat éventuellement issu d'une base de données de gestion. Ce code permet de faire une jointure avec le schéma décrivant la composition des plats. En l'absence d'une base de données liée à un applicatif de gestion, un identifiant aléatoire ou séquentiel peut être utilisé à condition que chaque identifiant soit unique pour un plat donné.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Indication de signe officiel de la qualité ou du lieu de fabrication - Propriété `menu_siqo_plat`

> *Description : Des cahiers des charges permettent de reconnaître les produits qui bénéficient d’un signe officiel d'identification de la qualité et de l’origine (SIQO) : Agriculture biologique, Appellation d'origine protégée/contrôlée, Indication géographique protégée, Spécialité traditionnelle garantie, Label rouge. Il est possible de saisir plusieurs valeurs séparées par une virgule dans ce champ.*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Agriculture Biologique`
    - `Appellation d'origine protégée`
    - `Appellation d'origine contrôlée`
    - `Indication géographique protégée`
    - `Spécialité traditionnelle garantie`
    - `Label Rouge`

#### Indication de labels complémentaires liés à des approvisionnements locaux ou à des marques de fabrication - Propriété `menu_label_plat`

> *Description : Des labels complémentaires permettent d'identifier la production locale ou des marques associées à un territoire ou à une démarche de qualité. La saisie dans ce champ est libre. A titre d'exemple OpenFoodFacts propose un liste des labels existant dans sa base de données : https://fr.openfoodfacts.org/labels. Il est possible de saisir plusieurs valeurs séparées par une virgule dans ce champ. *
- Valeur optionnelle
- Type : chaîne de caractères

#### Précision thématique associée au plat ou à l'ensemble des plats d'un menu - Propriété `menu_prec_plat`

> *Description : Lors d'évènements (semaine du goût, repas de noël, etc.) des menus spéciaux peuvent être proposés. Il est possible de saisir plusieurs valeurs séparées par un point-virgule dans ce champ.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Précision qualitative associée au plat d'un menu - Propriété `menu_reg_plat`

> *Description : En fonction du type de convives ou de régimes alimentaires spécifiques, des plats de substitution peuvent être proposés. Ce champ peut permettre d'indiquer si un plat est destiné à un régime particulier (sans viande, végétarien, etc.). Il est possible de saisir plusieurs valeurs séparées par un point-virgule dans ce champ.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Précision qualitative associée à la texture du plat - Propriété `menu_text_plat`

> *Description : En fonction du type de convives ou de régimes alimentaires spécifiques, des modifications de texture peuvent être proposés. Ce champ peut permettre d'indiquer si un plat est destiné à être proposé sous différentes textures (normal, mixé, fondant, haché). Il est possible de saisir plusieurs valeurs séparées par un point-virgule dans ce champ.*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `sans texture modifié`
    - `mixé`
    - `mixé lissé`
    - `fondant`
    - `haché`

#### Indication de l'indice nutritif du plat proposé dans le menu - Propriété `menu_nutri-score_plat`

> *Description : Indique la valeur nutritive du plat en fonction des valeurs de l'indicateur nutriscore.*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `A`
    - `B`
    - `C`
    - `D`
    - `E`

#### Coût théorique de revient du plat calculé à partir du coût de production - Propriété `menu_prix_plat`

> *Description : Le prix de revient pour la structure de restauration collective est utilisé pour composer les plats et les menus en combinaison avec les impératifs d'équilibre nutritionnel.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Date de publication de l'enregistrement d'un menu - Propriété `menu_pub_date`

> *Description : Lors de la publication ce champ d'horodatage permet d'indiquer la date de publication de la donnée présente dans le fichier.*
- Valeur obligatoire
- Type : date et heure

#### Date de dernière modification de l'enregistrement d'un menu - Propriété `menu_mod_date`

> *Description : Lors de la modification ce champ d'horodatage permet d'indiquer la date de dernière modification de la donnée présente dans le fichier.*
- Valeur optionnelle
- Type : date et heure

#### Information sur la modification ayant entraîné une mise à jour de la donnée - Propriété `menu_mod_info`

> *Description : Afin de renseigner les usagers de la donnée, il est possible de préciser dans ce champ la raison de la mise à jour effectuée.*
- Valeur optionnelle
- Type : chaîne de caractères
