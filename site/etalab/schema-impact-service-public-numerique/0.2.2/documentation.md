<MenuSchema />

## impact-service-public-numerique

Schéma de l'impact d'un service public numérique

Spécification du fichier de l'impact d'un service public numérique

- Schéma créé le : 20/04/2022
- Site web : https://github.com/etalab/schema-impact-service-numerique-public
- Version : 0.2.2

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [nom_service_public_numerique](#propriete-nom-service-public-numerique) | chaîne de caractères  | Oui |
| [indicateur](#propriete-indicateur) | chaîne de caractères  | Oui |
| [valeur](#propriete-valeur) | nombre réel  | Oui |
| [unite_mesure](#propriete-unite-mesure) | chaîne de caractères  | Oui |
| [est_cible](#propriete-est-cible) | booléen  | Oui |
| [frequence_calcul](#propriete-frequence-calcul) | chaîne de caractères  | Oui |
| [date](#propriete-date) | date (format `%Y-%m-%d`) | Oui |
| [est_periode](#propriete-est-periode) | booléen  | Oui |
| [date_debut](#propriete-date-debut) | date (format `%Y-%m-%d`) | Non |
| [est_automatise](#propriete-est-automatise) | booléen  | Oui |
| [source_collecte](#propriete-source-collecte) | chaîne de caractères  | Oui |
| [mode_calcul](#propriete-mode-calcul) | chaîne de caractères  | Non |
| [commentaires](#propriete-commentaires) | chaîne de caractères  | Non |

#### Propriété `nom_service_public_numerique`

> *Description : Nom du service public numérique*<br/>*Exemple : Trackdéchets*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `indicateur`

> *Description : Intitulé de l’indicateur.*<br/>*Exemple : Nombre d'utilisateurs inscrits*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `valeur`

> *Description : Valeur*<br/>*Exemple : 100000*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `unite_mesure`

> *Description : Unité de la mesure d'impact. Ex : %, jours, unités...*<br/>*Exemple : %*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `est_cible`

> *Description : Indiquer si la valeur est une valeur cible (projetée à une date future) ou si c'est une valeur réelle (mesurée à une date passée).*<br/>*Exemple : true*
- Valeur obligatoire
- Type : booléen

#### Propriété `frequence_calcul`

> *Description : Fréquence de calcul ou de collecte de l’indicateur. NB : Peut-être différente de la fréquence de publication : il est possible de monitorer un indicateur quotidiennement mais de ne le publier que tous les mois par exemple.*<br/>*Exemple : quotidienne*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `quotidienne`
    - `hebdomadaire`
    - `mensuelle`
    - `annuelle`
    - `trimestrielle`
    - `autre`

#### Propriété `date`

> *Description : Date projetée ou mesurée de la valeur de l'indicateur, ou date de fin de la période si l'indicateur porte sur un laps de temps.*<br/>*Exemple : 2020-01-01*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### Propriété `est_periode`

> *Description : Booléen indiquant si la mesure est faite sur une période (true) ou si c'est un stock (false)*<br/>*Exemple : true*
- Valeur obligatoire
- Type : booléen

#### Propriété `date_debut`

> *Description : Date du début de la période de mesure (si pertinent).*<br/>*Exemple : 2020-01-01*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### Propriété `est_automatise`

> *Description : Préciser si la collecte des données est automatisée (true) ou manuelle (false).*<br/>*Exemple : true*
- Valeur obligatoire
- Type : booléen

#### Propriété `source_collecte`

> *Description : Préciser comment la collecte est réalisée : script, enquête...*<br/>*Exemple : script*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `mode_calcul`

> *Description : Façon dont est calculé ou agrégé l’indicateur à partir des données de base : nombre, moyenne, ratio, etc. Si nécessaire, fournir un exemple de calcul.*<br/>*Exemple : moyenne*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `commentaires`

> *Description : Préciser les limites et biais connus et justifier le choix de l’indicateur malgré ses limites ; les modalites de lecture et d'interpretation de l'indicateur.*
- Valeur optionnelle
- Type : chaîne de caractères
