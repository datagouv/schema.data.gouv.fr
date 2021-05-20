---
permalink: /etalab/schema-comptage-velo-dynamique/latest/documentation.html
redirect_from: /etalab/schema-comptage-velo-dynamique/0.1.0/documentation.html
title: Documentation de Schéma du comptage vélo (partie dynamique)
version: 0.1.0
---

## schema-comptage-velo-dynamique

Schéma du comptage vélo (partie dynamique)

Spécification du fichier d'échange relatif aux comptages vélo.

- Schéma créé le : 06/05/2021
- Site web : https://github.com/etalab/schema-comptage-velo-dynamique
- Version : 0.1.0

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id_local_compteur](#propriété-id_local_compteur) | chaîne de caractères  | Oui |
| [date_heure_debut_comptage](#propriété-date_heure_debut_comptage) | date et heure  | Oui |
| [date_heure_fin_comptage](#propriété-date_heure_fin_comptage) | date et heure  | Non |
| [nombre_passage_sens_circulation_1](#propriété-nombre_passage_sens_circulation_1) | nombre entier  | Non |
| [nombre_passage_sens_circulation_2](#propriété-nombre_passage_sens_circulation_2) | nombre entier  | Non |

#### Propriété `id_local_compteur`

> *Description : Identifiant unique du compteur dans les bases de données de la collectivité territoriale productrice de données; Cet identifiant doit être le même que dans le fichier du compteur<br/>Ex : C01-Baix*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `date_heure_debut_comptage`

> *Description : Date et heure du début du comptage vélo au format ISO 8601<br/>Ex : 2019-09-07T13:15:00Z*
- Valeur obligatoire
- Type : date et heure

#### Propriété `date_heure_fin_comptage`

> *Description : Date et heure de fin du comptage vélo au format ISO 8601. La colonne doit être présente mais la valeur peut être à vide, auquel cas le pas de temps spécifié dans le schéma compteurs sera obligatoire et prise en compte.<br/>Ex : 2019-09-07T13:30:00Z*
- Valeur optionnelle
- Type : date et heure

#### Propriété `nombre_passage_sens_circulation_1`

> *Description : nombre de passages à vélo comptabilisés par le compteur vélo dans le premier sens de circulation<br/>Ex : 20*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nombre_passage_sens_circulation_2`

> *Description : nombre de passages à vélo comptabilisés par le compteur vélo dans le deuxième sens de circulation<br/>Ex : 15*
- Valeur optionnelle
- Type : nombre entier