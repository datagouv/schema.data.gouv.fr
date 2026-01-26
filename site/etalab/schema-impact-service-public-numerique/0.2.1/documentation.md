<MenuSchema />

## impact-service-public-numerique

Schéma de l'impact d'un service public numérique

Spécification du fichier de l'impact d'un service public numérique

- Schéma créé le : 20/04/2022
- Site web : https://github.com/etalab/schema-impact-service-numerique-public
- Version : 0.2.0

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [nom_service_public_numerique](#propriete-nom-service-public-numerique) | chaîne de caractères  | Oui |
| [indicateur](#propriete-indicateur) | chaîne de caractères  | Oui |
| [valeur](#propriete-valeur) | nombre réel  | Oui |
| [unite_mesure](#propriete-unite-mesure) | chaîne de caractères  | Oui |
| [frequence_calcul](#propriete-frequence-calcul) | chaîne de caractères  | Oui |
| [date](#propriete-date) | date (format `%Y-%m-%d`) | Oui |
| [est_periode](#propriete-est-periode) | booléen  | Oui |
| [date_debut](#propriete-date-debut) | date (format `%Y-%m-%d`) | Non |
| [mode_collecte](#propriete-mode-collecte) | chaîne de caractères  | Oui |
| [mode_calcul](#propriete-mode-calcul) | chaîne de caractères  | Oui |
| [sens_evolution_souhaite](#propriete-sens-evolution-souhaite) | chaîne de caractères  | Oui |
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

> *Description : Unité de la mesure d'impact. Ex : %, jours...*<br/>*Exemple : %*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `frequence_calcul`

> *Description : Fréquence de calcul, de collecte ou de parution de l’indicateur.*<br/>*Exemple : Quotidienne*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Quotidienne`
    - `Hebdomadaire`
    - `Mensuelle`
    - `Annuelle`
    - `Trimestrielle`
    - `Continue`

#### Propriété `date`

> *Description : Date arretée de la mesure de l'indicateur.*<br/>*Exemple : 2020-01-01*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### Propriété `est_periode`

> *Description : Booléen indiquant si la mesure est faite sur une période (true) ou si c'est un stock (false)*<br/>*Exemple : true*
- Valeur obligatoire
- Type : booléen

#### Propriété `date_debut`

> *Description : Date du début de la période de mesure.*<br/>*Exemple : 2020-01-01*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### Propriété `mode_collecte`

> *Description : Préciser les modalités de collecte des données : automatisé, comptages manuels, enquêtes, etc.*<br/>*Exemple : Automatisé*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manuel`
    - `Automatisé`
    - `Enquête`
    - `Autre`

#### Propriété `mode_calcul`

> *Description : Façon dont est calculé ou agrégé l’indicateur à partir des données de base (ex : formule paramétrique ou pondération des données locales), en distinguant dans le cas d’un ratio, le numérateur et le dénominateur. Si nécessaire, fournir un exemple de calcul.*<br/>*Exemple : Moyenne*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `sens_evolution_souhaite`

> *Description : Sens d’évolution souhaité.*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `À la hausse`
    - `À la baisse`
    - `Stable`

#### Propriété `commentaires`

> *Description : Préciser les limites et biais connus et justifier le choix de l’indicateur malgré ses limites ; les modalites de lecture et d'interpretation de l'indicateur*
- Valeur optionnelle
- Type : chaîne de caractères
