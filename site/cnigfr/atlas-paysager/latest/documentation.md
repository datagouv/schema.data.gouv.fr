<MenuSchema />

## atlas-paysager

 Atlas Paysager

Un atlas du paysage est un document de connaissance des paysages.
Cette classe est destinée à fournir à l’utilisateur des informations générales sur l’atlas, ses conditions de réalisation et de mise à jour.

- Schéma créé le : 01/01/2023
- Site web : https://github.com/cnigfr/schema-paysage
- Version : v1.0.0

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [emprise](#propriete-emprise) | chaîne de caractères  | Oui |
| [nom](#propriete-nom) | chaîne de caractères  | Oui |
| [identifiant](#propriete-identifiant) | chaîne de caractères  | Oui |
| [maitreOuvrage](#propriete-maitreouvrage) | chaîne de caractères  | Oui |
| [maitreOeuvre](#propriete-maitreoeuvre) | chaîne de caractères  | Oui |
| [typeAtlas](#propriete-typeatlas) | chaîne de caractères  | Oui |
| [lienAtlas](#propriete-lienatlas) | chaîne de caractères  | Oui |
| [dateRealisationAtlas](#propriete-daterealisationatlas) | date  | Oui |
| [dateRevisionDynamiques](#propriete-daterevisiondynamiques) | date  | Non |
| [lienOPP](#propriete-lienopp) | chaîne de caractères  | Non |

#### Propriété `emprise`

> *Description : Représentation géométrique 2D de l’emprise de l’atlas du paysage correspondant au jeu de données.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `nom`

> *Description : Nom complet de l’atlas correspondant au jeu de données.*<br/>*Exemple : Atlas des paysages de la Gironde*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `identifiant`

> *Description : Chaîne de caractères identifiant de façon unique l’atlas du paysage au sein de l’ensemble des atlas disponibles sur le territoire français.*<br/>*Exemple : AtlasPaysage_dept_33_2020*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `maitreOuvrage`

> *Description : Nom du ou des maîtres d’ouvrage, commanditaires de l’atlas des paysages.*<br/>*Exemple : Conseil Départemental de la Gironde*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `maitreOeuvre`

> *Description : Nom du ou des maîtres d’oeuvre ayant conduit la réalisation de l’atlas des paysages.*<br/>*Exemple : Agence de paysages xxx ; Bureau d’études xxx*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `typeAtlas`

> *Description : Niveau administratif de l’atlas correspondant au jeu de données.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `lienAtlas`

> *Description : Lien vers le site Internet où l’atlas correspondant au jeu de données est disponible.*<br/>*Exemple : https://www.gironde.fr/environnement/atlas-des-paysages-de-la-gironde*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `dateRealisationAtlas`

> *Description : Date de fin de réalisation de l’atlas. La date de publication peut être choisie pour dater la fin de la réalisation.*<br/>*Exemple : 2021-10-31*
- Valeur obligatoire
- Type : date

#### Propriété `dateRevisionDynamiques`

> *Description : Date de révision des informations liées aux dynamiques.*<br/>*Exemple : 2026-06-25*
- Valeur optionnelle
- Type : date

#### Propriété `lienOPP`

> *Description : Lien vers le ou les OPP (Observatoire Photographique du Paysage) correspondant à l’atlas des paysages.*<br/>*Exemple : https://www.parc-golfe-morbihan.bzh/lobservatoire-photographique-des-paysages/*
- Valeur optionnelle
- Type : chaîne de caractères
