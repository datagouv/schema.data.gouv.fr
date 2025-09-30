<MenuSchema />

## unite-paysagere

Unité Paysagère

L’unité paysagère est le découpage paysager central dans la construction de la connaissance du paysage, il est issu de la qualification et de la caractérisation des paysages à l’échelle globale du département.
Elle désigne une partie continue de territoire homogène au regard de ses caractéristiques géomorphologiques, écologiques, d’occupation du sol et de perception que les habitants et acteurs du territoire lui portent.
Ce « paysage donné » est caractérisé par un ensemble de structures paysagères et d’éléments de paysage qui lui procurent sa singularité.
Une unité paysagère est distinguée des unités paysagères voisines par des limites qui peuvent être nettes ou « floues ».

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
| [typeOrographie1](#propriete-typeorographie1) | chaîne de caractères  | Oui |
| [typeOrographie2](#propriete-typeorographie2) | chaîne de caractères  | Non |
| [dominantePaysagere1](#propriete-dominantepaysagere1) | chaîne de caractères  | Oui |
| [dominantePaysagere2](#propriete-dominantepaysagere2) | chaîne de caractères  | Non |
| [typeLocal](#propriete-typelocal) | chaîne de caractères  | Non |
| [motClefGenerique](#propriete-motclefgenerique) | liste  | Oui |
| [motClefToponymique](#propriete-motcleftoponymique) | liste  | Oui |
| [description](#propriete-description) | chaîne de caractères  | Non |
| [image](#propriete-image) | chaîne de caractères  | Non |
| [dateDefinition](#propriete-datedefinition) | date  | Non |
| [dateActualisation](#propriete-dateactualisation) | date  | Non |
| [lienAtlasPaysage](#propriete-lienatlaspaysage) | chaîne de caractères  | Oui |
| [codeDepartement](#propriete-codedepartement) | liste  | Oui |
| [codeRegion](#propriete-coderegion) | liste  | Oui |
| [lienEP](#propriete-lienep) | chaîne de caractères  | Non |

#### Propriété `geometrie`

> *Description : Représentation géométrique 2D de l'unité paysagère.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `identifiantLocal`

> *Description : Chaîne de caractères identifiant de façon unique l'unité paysagère au sein de sa classe et de l’atlas dans lequel elle a été définie.*<br/>*Exemple : H1*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `identifiantGlobal`

> *Description : Chaîne de caractères identifiant de façon unique l'unité paysagère au sein de sa classe et de l’ensemble des atlas de paysage sur le territoire français.*<br/>*Exemple : AtlasPaysage_dept_33_2020.H1*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `nom`

> *Description : Le nom de l'unité paysagère, tel qu’il apparaît dans l’atlas du paysage au sein de l’atlas dans lequel elle a été définie.*<br/>*Exemple : La terrasse du Bazadais*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `lienPageAtlas`

> *Description : Lien vers la partie de l’atlas de paysage décrivant l'unité paysagère. Ce lien permet à l’utilisateur d’avoir accès à la totalité de l’information concernant l'unité paysagère.*<br/>*Exemple : https://www.gironde.fr/environnement/unites-de-paysage/h-le-bazadais#terrasse-bazadais*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `typeOrographie1`

> *Description : Caractéristique dominante de l’unité paysagère selon des critères orographiques ou géomorphologiques.
Liste de valeurs (TypeOrographie)*<br/>*Exemple : vallee*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `typeOrographie2`

> *Description : Caractéristique dominante de l’unité paysagère selon des critères orographiques ou géomorphologiques.
Liste de valeurs (TypeOrographie)*<br/>*Exemple : plaine*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `dominantePaysagere1`

> *Description : Caractéristique dominante de l’unité paysagère selon des critères d’occupation ou d’usage du sol.*<br/>*Exemple : paysage agricole*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `dominantePaysagere2`

> *Description : Caractéristique dominante de l’unité paysagère selon des critères d’occupation ou d’usage du sol.*<br/>*Exemple : paysage boisé*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `typeLocal`

> *Description : Caractéristique dominante de l’unité paysagère selon une classification spécifique à l’atlas des paysages correspondant au jeu de données géomatiques.*<br/>*Exemple : paysage de bocage*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `motClefGenerique`

> *Description : Mots ou expressions indiquant les principales caractéristiques de l’unité paysagère. Un mot-clef générique ne contient pas de nom propre.*
- Valeur obligatoire
- Type : liste

#### Propriété `motClefToponymique`

> *Description : Suite de mots ou expressions indiquant les principaux lieux nommés d’intérêt de l’unité paysagère.
Un mot-clef toponymique est un nom de lieu (avec un nom propre).*
- Valeur obligatoire
- Type : liste

#### Propriété `description`

> *Description : Texte court, extrait de l’atlas, décrivant de façon synthétique l’unité paysagère.*<br/>*Exemple : Surplombant la vallée de la Garonne en rive gauche, cette unité est composée d’une terrasse alluviale résolument plane.
Cinq vallons (le Lisos, la Bassanne, le Beuve...), souvent accompagnés de prairies et de boisements, divisent l’unité perpendiculairement à l’axe de la vallée, enrichissant ainsi ses paysages de plateau à dominante céréalière.
À l’exception de Langon, ville principale implantée à l’ouest, à l’aplomb du fleuve, l’urbanisation est plutôt dispersée.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `image`

> *Description : Lien vers une image illustrant ou symbolisant l’unité paysagère.*<br/>*Exemple : http://mon_image.fr*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `dateDefinition`

> *Description : Date à laquelle l’unité paysagère a été définie, délimitée et nommée.*<br/>*Exemple : 2021-10-31*
- Valeur optionnelle
- Type : date

#### Propriété `dateActualisation`

> *Description : Date à laquelle l’unité paysagère a été actualisée.*<br/>*Exemple : 2021-11-24*
- Valeur optionnelle
- Type : date

#### Propriété `lienAtlasPaysage`

> *Description : Lien vers la classe AtlasPaysage correspondant à l’unité paysagère.
Ce lien permet à l’utilisateur global de trouver les unités paysagères relatifs à un atlas donné.*<br/>*Exemple : AtlasPaysage_dept_33_2020*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `codeDepartement`

> *Description : Code INSEE du ou des département(s) où se situe l’unité paysagère.*
- Valeur obligatoire
- Type : liste

#### Propriété `codeRegion`

> *Description : Code INSEE du ou des région(s) où se situe l’unité paysagère.*
- Valeur obligatoire
- Type : liste

#### Propriété `lienEP`

> *Description : Lien vers l’ensemble paysager auquel appartient l’unité paysagère.*
- Valeur optionnelle
- Type : chaîne de caractères
