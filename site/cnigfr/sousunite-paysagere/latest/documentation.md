<MenuSchema />

## sousunite-paysagere

Sous-unité Paysagère

Une sous-unité paysagère est une subdivision d’une unité paysagère.
Le découpage y est réalisé de manière plus fine, les sous–unités présentant entre elles de légères variations des composantes paysagères (liées à la topographie, à la fonctionnalité des milieux, aux tissus urbains…).
Les sous-unités sont particulièrement utilisées au sein des unités paysagères très urbaines et peuvent être compatibles avec un découpage par quartier. 
Comme pour les unités paysagères, les limites entre sous-unités peuvent être nettes ou « floues ».

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
| [nom](#propriete-nom) | chaîne de caractères  | Oui |
| [lienPageAtlas](#propriete-lienpageatlas) | chaîne de caractères  | Oui |
| [motClefGenerique](#propriete-motclefgenerique) | liste  | Oui |
| [motClefToponymique](#propriete-motcleftoponymique) | liste  | Oui |
| [description](#propriete-description) | chaîne de caractères  | Non |
| [image](#propriete-image) | chaîne de caractères  | Non |
| [dateDefinition](#propriete-datedefinition) | date  | Non |
| [dateActualisation](#propriete-dateactualisation) | date  | Non |
| [lienAtlasPaysage](#propriete-lienatlaspaysage) | chaîne de caractères  | Oui |
| [codeDepartement](#propriete-codedepartement) | liste  | Oui |
| [codeRegion](#propriete-coderegion) | liste  | Oui |
| [lienUP](#propriete-lienup) | chaîne de caractères  | Oui |

#### Propriété `geometrie`

> *Description : Représentation géométrique 2D de la sous-unité paysagère*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `identifiantLocal`

> *Description : Chaîne de caractères identifiant de façon unique la sous-unité paysagère au sein de sa classe et de l’atlas dans lequel il a été défini*<br/>*Exemple : D*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `identifiantGlobal`

> *Description : Chaîne de caractères identifiant de façon unique la sous-unité paysagère au sein de sa classe et de l’ensemble des atlas de paysage sur le territoire français.*<br/>*Exemple : AtlasPaysage_dept_33_2020.D*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `nom`

> *Description : Le nom de la sous-unité paysagère, tel qu’il apparaît dans l’atlas du paysage au sein de l’atlas dans lequel il a été défini*<br/>*Exemple : La terrasse du Bazadais*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `lienPageAtlas`

> *Description : Lien vers la partie de l’atlas de paysage décrivant la sous-unité paysagère. Ce lien permet à l’utilisateur d’avoir accès à la totalité de l’information concernant la sous-unité paysagère.*<br/>*Exemple : https://www.gironde.fr/environnement/unites-de-paysage/h-le-bazadais#terrasse-bazadais*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `motClefGenerique`

> *Description : Mots ou expressions indiquant les principales caractéristiques de la sous-unité paysagère. Un mot-clef générique ne contient pas de nom propre.*
- Valeur obligatoire
- Type : liste

#### Propriété `motClefToponymique`

> *Description : Suite de mots ou expressions indiquant les principaux lieux nommés d’intérêt de la sous-unité paysagère.
Un mot-clef toponymique est un nom de lieu (avec un nom propre).*
- Valeur obligatoire
- Type : liste

#### Propriété `description`

> *Description : Texte court, extrait de l’atlas, décrivant de façon synthétique la sous-unité paysagère.*<br/>*Exemple : Surplombant la vallée de la Garonne en rive gauche, cette unité est composée d’une terrasse alluviale résolument plane.
Cinq vallons (le Lisos, la Bassanne, le Beuve...), souvent accompagnés de prairies et de boisements, divisent l’unité perpendiculairement à l’axe de la vallée, enrichissant ainsi ses paysages de plateau à dominante céréalière.
À l’exception de Langon, ville principale implantée à l’ouest, à l’aplomb du fleuve, l’urbanisation est plutôt dispersée.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `image`

> *Description : Lien vers une image illustrant ou symbolisant la sous-unité paysagère.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `dateDefinition`

> *Description : Date à laquelle la sous-unité paysagère a été définie, délimitée et nommée.*
- Valeur optionnelle
- Type : date

#### Propriété `dateActualisation`

> *Description : Date à laquelle la sous-unité paysagère a été actualisée.*
- Valeur optionnelle
- Type : date

#### Propriété `lienAtlasPaysage`

> *Description : Lien vers la classe AtlasPaysage correspondant à la sous-unité paysagère .
Ce lien permet à l’utilisateur global de trouver les sous-unités paysagères relatives à un atlas donné.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `codeDepartement`

> *Description : Code INSEE du ou des département(s) où se situe la sous-unité paysagère.*
- Valeur obligatoire
- Type : liste

#### Propriété `codeRegion`

> *Description : Code INSEE du ou des région(s) où se situe la sous-unité paysagère.*
- Valeur obligatoire
- Type : liste

#### Propriété `lienUP`

> *Description : Lien vers l’unité paysagère à laquelle appartient la sous-unité paysagère.*<br/>*Exemple : AtlasPaysage_dept_40_2020.GLA*
- Valeur obligatoire
- Type : chaîne de caractères
