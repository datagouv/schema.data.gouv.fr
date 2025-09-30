<MenuSchema />

## ensemble-paysager

Ensemble Paysager

Un ensemble paysager est observé à l’échelle d’un territoire régional. Il est issu de l’association de plusieurs unités paysagères dont les caracté-istiques géomorphologiques, écologiques, d’occupation du sol et de perception des habitants et des acteurs sont cohérentes à l’échelle dézoomée du territoire régional.
Comme pour les unités paysagères, les limites entre ensembles paysagers peuvent être nettes ou « floues ». Cette nomination « EP » englobe celles parfois usitées telles que « grands paysages », « grands ensembles paysagers », « grandes entités paysagères », etc.

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
| [codeDepartement](#propriete-codedepartement) | liste  | Non |
| [codeRegion](#propriete-coderegion) | liste  | Oui |

#### Propriété `geometrie`

> *Description : représentation géométrique 2D de l'ensemble paysager*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `identifiantLocal`

> *Description : Chaîne de caractères identifiant de façon unique l'ensemble paysager au sein de sa classe et de l’atlas dans lequel il a été défini*<br/>*Exemple : B3c*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `identifiantGlobal`

> *Description : Chaîne de caractères identifiant de façon unique l'ensemble paysager au sein de sa classe et de l’ensemble des atlas de paysage sur le territoire français.*<br/>*Exemple : AtlasPaysage_dept_33_2020.H1*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `nom`

> *Description : Le nom de l'ensemble paysager, tel qu’il apparaît dans l’atlas du paysage au sein de l’atlas dans lequel il a été défini.*<br/>*Exemple : La terrasse du Bazadais*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `lienPageAtlas`

> *Description : Lien vers la partie de l’atlas de paysage décrivant l'ensemble paysager. Ce lien permet à l’utilisateur d’avoir accès à la totalité de l’information concernant l'ensemble paysager.*<br/>*Exemple : https://www.gironde.fr/environnement/unites-de-paysage/h-le-bazadais#terrasse-bazadais*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `motClefGenerique`

> *Description : Mots ou expressions indiquant les principales caractéristiques de l'ensemble paysager. Un mot-clef générique ne contient pas de nom propre.*
- Valeur obligatoire
- Type : liste

#### Propriété `motClefToponymique`

> *Description : Suite de mots ou expressions indiquant les principaux lieux nommés d’intérêt de l'ensemble paysager.
Un mot-clef toponymique est un nom de lieu (avec un nom propre).*
- Valeur obligatoire
- Type : liste

#### Propriété `description`

> *Description : Texte court, extrait de l’atlas, décrivant de façon synthétique l'ensemble paysager.*<br/>*Exemple : Surplombant la vallée de la Garonne en rive gauche, cette unité est composée d’une terrasse alluviale résolument plane.
Cinq vallons (le Lisos, la Bassanne, le Beuve...), souvent accompagnés de prairies et de boisements, divisent l’unité perpendiculairement à l’axe de la vallée, enrichissant ainsi ses paysages de plateau à dominante céréalière.
À l’exception de Langon, ville principale implantée à l’ouest, à l’aplomb du fleuve, l’urbanisation est plutôt dispersée.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `image`

> *Description : Lien vers une image illustrant ou symbolisant l'ensemble paysager.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `dateDefinition`

> *Description : Date à laquelle l'ensemble paysager a été défini, délimité et nommé.*<br/>*Exemple : 2021-04-18*
- Valeur optionnelle
- Type : date

#### Propriété `dateActualisation`

> *Description : Date à laquelle l'ensemble paysager a été actualisé.*<br/>*Exemple : 2021-10-31*
- Valeur optionnelle
- Type : date

#### Propriété `lienAtlasPaysage`

> *Description : Lien vers la classe AtlasPaysage correspondant à l'ensemble paysager.
Ce lien permet à l’utilisateur global de trouver les ensembles paysagers relatifs à un atlas donné.*<br/>*Exemple : AtlasPaysage_dept_33_2020*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `codeDepartement`

> *Description : Code INSEE du ou des département(s) où se situe l'ensemble paysager.*
- Valeur optionnelle
- Type : liste

#### Propriété `codeRegion`

> *Description : Code INSEE de la ou des région(s) où se situe l'ensemble paysager.*
- Valeur obligatoire
- Type : liste
