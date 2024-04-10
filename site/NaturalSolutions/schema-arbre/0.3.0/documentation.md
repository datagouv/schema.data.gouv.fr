<MenuSchema />

## Arbres urbains

Arbres urbains

Spécification des attributs liés aux arbres urbains dans le cadre d'un inventaire du patrimoine arboré par les collectivités.

- Schéma créé le : 16/10/2020
- Site web : https://github.com/NaturalSolutions/schema-arbre
- Version : 0.2.2
- Clé primaire : `id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id](#propriete-id) | nombre entier  | Oui |
| [longitude](#propriete-longitude) | nombre réel  | Oui |
| [latitude](#propriete-latitude) | nombre réel  | Oui |
| [date_releve](#propriete-date-releve) | date (format `%Y-%m-%d`) | Non |
| [famille](#propriete-famille) | chaîne de caractères  | Non |
| [genre](#propriete-genre) | chaîne de caractères  | Non |
| [espece](#propriete-espece) | chaîne de caractères  | Non |
| [cultivar_variete](#propriete-cultivar-variete) | chaîne de caractères  | Non |
| [nom_vernaculaire](#propriete-nom-vernaculaire) | chaîne de caractères  | Non |
| [code_insee](#propriete-code-insee) | chaîne de caractères  | Non |
| [code_postal](#propriete-code-postal) | chaîne de caractères  | Non |
| [adresse](#propriete-adresse) | chaîne de caractères  | Non |
| [matricule](#propriete-matricule) | chaîne de caractères  | Non |
| [date_plantation](#propriete-date-plantation) | date (format `%Y-%m-%d`) | Non |
| [stade_developpement](#propriete-stade-developpement) | chaîne de caractères  | Non |
| [hauteur](#propriete-hauteur) | nombre réel  | Non |
| [diametre](#propriete-diametre) | nombre réel  | Non |
| [circonference](#propriete-circonference) | nombre réel  | Non |
| [diametre_couronne](#propriete-diametre-couronne) | nombre réel  | Non |
| [type_sol](#propriete-type-sol) | chaîne de caractères  | Non |
| [description_pied_arbre](#propriete-description-pied-arbre) | chaîne de caractères  | Non |
| [type_enracinement](#propriete-type-enracinement) | chaîne de caractères  | Non |
| [port_arbre](#propriete-port-arbre) | chaîne de caractères  | Non |
| [remarquable](#propriete-remarquable) | booléen  | Non |
| [protege](#propriete-protege) | booléen  | Non |
| [contraintes_sol](#propriete-contraintes-sol) | chaîne de caractères  | Non |
| [contrainte_aeriennes](#propriete-contrainte-aeriennes) | chaîne de caractères  | Non |
| [eclairage](#propriete-eclairage) | booléen  | Non |
| [arrosage](#propriete-arrosage) | chaîne de caractères  | Non |
| [allergie](#propriete-allergie) | nombre entier  | Non |
| [remarque](#propriete-remarque) | chaîne de caractères  | Non |

#### Propriété `id`

> *Description : Un identifiant unique de l'objet arbre pour le jeu de données. Au possible garder le même identifiant pour un arbre dans le cadre d'une republication de données.*<br/>*Exemple : 42*
- Valeur obligatoire
- Type : nombre entier
- Valeur supérieure à 1

#### Propriété `longitude`

> *Description : La longitude en degrés décimaux (point comme séparateur décimal) de la localisation de l'arbre dans le système de coordonnées WGS84.*<br/>*Exemple : 48.3610*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -180 et 180

#### Propriété `latitude`

> *Description : La latitude en degrés décimaux (point comme séparateur décimal) de la localisation de l'arbre dans le système de coordonnées WGS84.*<br/>*Exemple : 32.2812*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -180 et 180

#### Propriété `date_releve`

> *Description : Date à laquelle les données ont été relevées pour cet arbre*<br/>*Exemple : 1996-07-12*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### Propriété `famille`

> *Description : Le taxon auquel appartient l'arbre en latin (cinquième niveau de la classification classique).*<br/>*Exemple : Platanaceae*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `genre`

> *Description : La subdivision de la famille auquel appartient l'arbre en latin (sixième niveau de la classification classique).*<br/>*Exemple : Platanus*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `espece`

> *Description : La subdivision du genre auquel appartient l'arbre en latin (septième niveau de la classification classique)*<br/>*Exemple : occidentalis*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `cultivar_variete`

> *Description : La subdivision de l'espèce auquel appartient l'arbre en latin.*<br/>*Exemple : Cripps Pink'*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `nom_vernaculaire`

> *Description : Le nom commun français correspondant au nom scientifique ([genre][espèce][cultivar]).*<br/>*Exemple : Platane commun*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `code_insee`

> *Description : Le code INSEE de la commune dans laquelle l'arbre se trouve.*<br/>*Exemple : 59599*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### Propriété `code_postal`

> *Description : Le code postal de la commune dans laquelle l'arbre se trouve.*<br/>*Exemple : 13010*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### Propriété `adresse`

> *Description : Le nom de la rue (avec ou sans numéro) dans laquelle l'arbre se trouve.*<br/>*Exemple : 61 rue de la Poste*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `matricule`

> *Description : L'identifiant unique de l'arbre au norme de la collectivité.*<br/>*Exemple : A20200525*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `date_plantation`

> *Description : La date de plantation de l'arbre, au format ISO 8601 AAAA-MM-DD.*<br/>*Exemple : 1996-07-12*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### Propriété `stade_developpement`

> *Description : La maturité de l'arbre en fonction de sa date de plantation*<br/>*Exemple : Adulte*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `hauteur`

> *Description : La hauteur de l'arbre exprimée en cm*<br/>*Exemple : 30*
- Valeur optionnelle
- Type : nombre réel
- Valeur inférieure à : 15000

#### Propriété `diametre`

> *Description : Le diamètre de l'arbre mesurée à hauteur d'homme, c'est-à-dire 150 exprimé en cm*<br/>*Exemple : 70*
- Valeur optionnelle
- Type : nombre réel
- Valeur inférieure à : 3000

#### Propriété `circonference`

> *Description : La circonférence de l'arbre mesurée à hauteur d'homme, c'est-à-dire 150 exprimé en cm*<br/>*Exemple : 70*
- Valeur optionnelle
- Type : nombre réel
- Valeur inférieure à : 3000

#### Propriété `diametre_couronne`

> *Description : Le diamètre du houpier de l'arbre exprimé en mètre*<br/>*Exemple : 2*
- Valeur optionnelle
- Type : nombre réel
- Valeur inférieure à : 100

#### Propriété `type_sol`

> *Description : La composition pédologique du sol où est planté l'arbre*<br/>*Exemple : Argileux*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `description_pied_arbre`

> *Description : Aménagement présent sur le sol autour du pied de l'arbre*<br/>*Exemple : Présence d'une grille*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `type_enracinement`

> *Description : Le type d'enracinement de l'arbre*<br/>*Exemple : Pivotant*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `port_arbre`

> *Description : La forme du houppier de l'arbre*<br/>*Exemple : Pyramide*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `remarquable`

> *Description : Classification de l'arbre à remarquable selon son âge, sa circonférence et sa hauteur*<br/>*Exemple : Oui*
- Valeur optionnelle
- Type : booléen

#### Propriété `protege`

> *Description : Si l'arbre fait l'objet d'une classification et d'une protection*<br/>*Exemple : Non*
- Valeur optionnelle
- Type : booléen

#### Propriété `contraintes_sol`

> *Description : Indique la présence de contraintes physiques au niveau du sol *<br/>*Exemple : Sol perméabilisé*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `contrainte_aeriennes`

> *Description : Indique la présence de contraintes physiques au-dessus du sol*<br/>*Exemple : Présence de cables*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `eclairage`

> *Description : Indique la présence d'éclairage à proximité de l'arbre*<br/>*Exemple : Oui*
- Valeur optionnelle
- Type : booléen

#### Propriété `arrosage`

> *Description : Indique la présence ou non d'un arrosage et quel type d'arrosage *<br/>*Exemple : Goutte à goutte*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `allergie`

> *Description : Indique le potentiel allergisant de l'arbre (0 = nul --> 5 = très fort)*<br/>*Exemple : 2*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `remarque`

> *Description : Tout autre remarque nécessaire à la gestion de l'arbre*<br/>*Exemple : Ceci est un exemple de remarque*
- Valeur optionnelle
- Type : chaîne de caractères
