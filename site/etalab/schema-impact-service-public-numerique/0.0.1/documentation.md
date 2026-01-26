<MenuSchema />

## impact-service-public-numerique

Schéma de l'impact d'un service public numérique

Spécification du fichier de l'impact d'un service public numérique

- Schéma créé le : 20/04/2022
- Site web : https://github.com/etalab/schema-impact-service-numerique-public
- Version : 0.1.0
- Clé primaire : `indicateur`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [nom_service_public_numerique](#propriete-nom-service-public-numerique) | chaîne de caractères  | Oui |
| [indicateur](#propriete-indicateur) | chaîne de caractères  | Oui |
| [unite_mesure](#propriete-unite-mesure) | chaîne de caractères  | Oui |
| [periodicite](#propriete-periodicite) | chaîne de caractères  | Oui |
| [periode](#propriete-periode) | date  | Oui |
| [mode_collecte](#propriete-mode-collecte) | chaîne de caractères  | Non |
| [mode_calcul](#propriete-mode-calcul) | chaîne de caractères  | Non |
| [limites](#propriete-limites) | chaîne de caractères  | Non |
| [modalites_interpretation](#propriete-modalites-interpretation) | chaîne de caractères  | Non |
| [sens_evolution](#propriete-sens-evolution) | chaîne de caractères  | Non |

#### Propriété `nom_service_public_numerique`

> *Description : Nom du service public numérique*<br/>*Exemple : Trackdéchets*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `indicateur`

> *Description : Intitulé de l’indicateur.*<br/>*Exemple : Nombre d'utilisateurs inscrits*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `unite_mesure`

> *Description : Unité de la mesure d'impact. Ex : %, jours...*<br/>*Exemple : %*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `periodicite`

> *Description : Fréquence de calcul, de collecte ou de parution de l’indicateur.*<br/>*Exemple : Annuelle*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `periode`

> *Description : Période se réfère à la mesure (YYYY-MM-DD). Pour annuel indiquer 2020-12-31 ; pour mensuel, le dernier jour du mois.*<br/>*Exemple : 2020-12-31*
- Valeur obligatoire
- Type : date

#### Propriété `mode_collecte`

> *Description : Préciser les modalités de collecte des données : automatisé, comptages manuels, enquêtes, etc.*<br/>*Exemple : Automatisé*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `mode_calcul`

> *Description : Façon dont est calculé ou agrégé l’indicateur à partir des données de base (ex : formule paramétrique ou pondération des données locales), en distinguant dans le cas d’un ratio, le numérateur et le dénominateur. Si nécessaire, fournir un exemple de calcul.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `limites`

> *Description : Préciser les limites et biais connus et justifier le choix de l’indicateur malgré ses limites.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `modalites_interpretation`

> *Description : Si nécessaire, préciser la signification, les modalités de lecture et de compréhension de l’indicateur.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `sens_evolution`

> *Description : Sens d’évolution souhaité (à la hausse / à la baisse).*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `À la hausse`
    - `À la baisse`
