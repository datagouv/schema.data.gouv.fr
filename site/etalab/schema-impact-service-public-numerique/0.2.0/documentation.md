<MenuSchema />

## impact-service-public-numerique

Schéma de l'impact d'un service public numérique

Spécification du fichier de l'impact d'un service public numérique

- Schéma créé le : 20/04/2022
- Site web : https://github.com/etalab/schema-impact-service-numerique-public
- Version : 0.2.0
- Clé primaire : `indicateur`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [nom_service_public_numerique](#propriete-nom-service-public-numerique) | chaîne de caractères  | Oui |
| [indicateur](#propriete-indicateur) | chaîne de caractères  | Oui |
| [valeur](#propriete-valeur) | nombre réel  | Oui |
| [unite_mesure](#propriete-unite-mesure) | chaîne de caractères  | Oui |
| [frequence_calcul](#propriete-frequence-calcul) | chaîne de caractères  | Oui |
| [frequence_affichage](#propriete-frequence-affichage) | chaîne de caractères  | Non |
| [periode](#propriete-periode) | date  | Oui |
| [mode_collecte](#propriete-mode-collecte) | chaîne de caractères  | Non |
| [mode_calcul](#propriete-mode-calcul) | chaîne de caractères  | Non |
| [sens_evolution_souhaite](#propriete-sens-evolution-souhaite) | chaîne de caractères  | Non |
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

#### Propriété `frequence_affichage`

> *Description : Periodicité d'affichage de l'indicateur, si différente de la périodicité de calcul*<br/>*Exemple : Quotidienne*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Quotidienne`
    - `Hebdomadaire`
    - `Mensuelle`
    - `Annuelle`
    - `Trimestrielle`
    - `Continue`

#### Propriété `periode`

> *Description : Période se réfère à la mesure (YYYY-MM-DD). Pour annuel indiquer 2020-01-01 ; pour mensuel, le premier jour du mois; pour hebdomadaire, le premier jour de la semaine.*<br/>*Exemple : 2020-01-01*
- Valeur obligatoire
- Type : date

#### Propriété `mode_collecte`

> *Description : Préciser les modalités de collecte des données : automatisé, comptages manuels, enquêtes, etc.*<br/>*Exemple : Automatisé*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `mode_calcul`

> *Description : Façon dont est calculé ou agrégé l’indicateur à partir des données de base (ex : formule paramétrique ou pondération des données locales), en distinguant dans le cas d’un ratio, le numérateur et le dénominateur. Si nécessaire, fournir un exemple de calcul.*<br/>*Exemple : Moyenne*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `sens_evolution_souhaite`

> *Description : Sens d’évolution souhaité (à la hausse / à la baisse).*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `À la hausse`
    - `À la baisse`

#### Propriété `commentaires`

> *Description : Préciser les limites et biais connus et justifier le choix de l’indicateur malgré ses limites ; les modalites de lecture et d'interpretation de l'indicateur*
- Valeur optionnelle
- Type : chaîne de caractères
