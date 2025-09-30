<MenuSchema />

## limite-decoupage-paysager

Limite Découpage Paysager

Une limite de découpage paysager est une portion du contour d’un découpage paysager : unité paysagère ou ensemble paysager ou sous-ensemble paysager.
Cette classe est essentiellement destinée à renseigner l’utilisateur sur la nature et la précision de la limite.

- Schéma créé le : 01/01/2023
- Site web : https://github.com/cnigfr/schema-paysage
- Version : v1.0.0

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [geometrie](#propriete-geometrie) | chaîne de caractères  | Oui |
| [identifiantLocal](#propriete-identifiantlocal) | chaîne de caractères  | Oui |
| [identifiantGlobal](#propriete-identifiantglobal) | chaîne de caractères  | Oui |
| [statut](#propriete-statut) | chaîne de caractères  | Non |
| [largeurEstimee](#propriete-largeurestimee) | nombre entier  | Non |
| [natureLimite](#propriete-naturelimite) | chaîne de caractères  | Non |
| [lienAtlas](#propriete-lienatlas) | chaîne de caractères  | Oui |

#### Propriété `geometrie`

> *Description : Représentation géométrique 2D de la limite du découpage paysager.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `identifiantLocal`

> *Description : Chaîne de caractères identifiant de façon unique le découpage paysager au sein de sa classe et du  jeu de données dans lesquels il a été défini*<br/>*Exemple : 84*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `identifiantGlobal`

> *Description : Chaîne de caractères identifiant de façon unique la limite de découpage paysager au sein de sa classe et de l’ensemble des atlas  de paysage sur le territoire français.*<br/>*Exemple : AtlasPaysage_dept_33_2020.84*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `statut`

> *Description : Cet attribut indique la fiabilité de la position de la limite, i.e. s’il s’agit d’une limite nette ou d’une limite floue.*<br/>*Exemple : limiteFloue*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `largeurEstimee`

> *Description : Largeur moyenne estimée de la zone de transition entre 2 découpages paysagers, exprimée en mètres.
Cet attribut mesure l’incertitude de la position de la limite sur le terrain.*<br/>*Exemple : 500*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `natureLimite`

> *Description : Cet attribut indique quel objet géographique a été utilisé comme limite du découpage paysager.*<br/>*Exemple : lignede crête*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `lienAtlas`

> *Description : Lien vers la classe AtlasPaysage correspondant à la limite de découpage paysager.
Ce lien permet à l’utilisateur global de trouver les limites de découpages paysagers relatives à un atlas donné.*<br/>*Exemple : AtlasPaysage_dept_33_2020*
- Valeur obligatoire
- Type : chaîne de caractères
