<MenuSchema />

<MenuSchema />

## impact-service-public-numerique

Impact d’un service public numérique

Schéma de données pour les indicateurs d’impact d’un service public numérique

- Schéma créé le : 20/04/2022
- Site web : https://github.com/etalab/schema-impact-service-numerique-public
- Version : v0.5.0

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [administration_rattachement](#propriete-administration-rattachement) | chaîne de caractères  | Oui |
| [nom_service_public_numerique](#propriete-nom-service-public-numerique) | chaîne de caractères  | Oui |
| [indicateur](#propriete-indicateur) | chaîne de caractères  | Oui |
| [valeur](#propriete-valeur) | nombre réel  | Oui |
| [unite_mesure](#propriete-unite-mesure) | chaîne de caractères  | Oui |
| [est_cible](#propriete-est-cible) | booléen  | Oui |
| [type_indicateur](#propriete-type-indicateur) | chaîne de caractères  | Oui |
| [frequence_monitoring](#propriete-frequence-monitoring) | chaîne de caractères  | Oui |
| [date](#propriete-date) | date (format `%Y-%m-%d`) | Oui |
| [est_periode](#propriete-est-periode) | booléen  | Oui |
| [date_debut](#propriete-date-debut) | date (format `%Y-%m-%d`) | Non |
| [est_automatise](#propriete-est-automatise) | booléen  | Oui |
| [source_collecte](#propriete-source-collecte) | chaîne de caractères  | Oui |
| [denom_insee](#propriete-denom-insee) | chaîne de caractères  | Non |
| [code_insee](#propriete-code-insee) | chaîne de caractères  | Non |
| [dataviz_wish](#propriete-dataviz-wish) | chaîne de caractères  | Non |
| [commentaires](#propriete-commentaires) | chaîne de caractères  | Non |

#### Propriété `administration_rattachement`

> *Description : Administration à laquelle le service public numérique est rattaché.*<br/>*Exemple : DINUM*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `nom_service_public_numerique`

> *Description : Nom du service public numérique*<br/>*Exemple : Trackdéchets*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `indicateur`

> *Description : Intitulé de l’indicateur. Pour chaque mesure du même indicateur, il convient de renseigner le même intitulé, la date de mesure indiquant l'évolution dans le temps. NB : ce champ est non contraint, mais il convient de garder la même syntaxe au cours du temps pour un même indicateur.*<br/>*Exemple : Nombre d’utilisateurs inscrits*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `valeur`

> *Description : Valeur de l’indicateur, arrêtée à la date indiquée dans le champ 'date'.*<br/>*Exemple : 100000*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `unite_mesure`

> *Description : Unité de l’indicateur. Ex : %, jour, unité, note sur 10... NB : lorsqu’il s’agit d’un comptage ('nombre de X' dans le champ 'indicateur'), indiquer 'unité'.*<br/>*Exemple : unité*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `est_cible`

> *Description : Indiquer si la valeur est une valeur cible (projetée à une date future) ou si c’est une valeur réelle (mesurée à une date passée).*<br/>*Exemple : true*
- Valeur obligatoire
- Type : booléen

#### Propriété `type_indicateur`

> *Description : Type de l'indicateur. Pour plus d'information, se référer à la documentation: https://doc.incubateur.net/communaute/gerer-son-produit/guide-de-financement-des-startups-detat/4.-lenjeu-du-pilotage-par-limpact#les-indicateurs-pour-les-mesurer*<br/>*Exemple : usage*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `usage`
    - `impact`

#### Propriété `frequence_monitoring`

> *Description : Fréquence à laquelle l’indicateur est consulté et utilisé par le service. NB : Peut-être différente de la fréquence de publication : il est possible de monitorer un indicateur quotidiennement mais de ne le publier que tous les mois par exemple.*<br/>*Exemple : quotidienne*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `quotidienne`
    - `hebdomadaire`
    - `mensuelle`
    - `annuelle`
    - `trimestrielle`
    - `semestrielle`
    - `autre`

#### Propriété `date`

> *Description : Date à laquelle l’indicateur a été mesuré, ou à laquelle la valeur cible est souhaitée s’il s’agit d’une cible. NB : indiquer la date de fin de la période si l’indicateur porte sur un laps de temps.*<br/>*Exemple : 2020-01-01*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### Propriété `est_periode`

> *Description : Booléen indiquant si la mesure est faite sur une période (true) ou si c’est un stock (false). NB : un stock représente un indicateur suivi depuis le début du projet, contrairement aux indicateurs portant spécifiquement sur des laps de temps.*<br/>*Exemple : true*
- Valeur obligatoire
- Type : booléen

#### Propriété `date_debut`

> *Description : Date du début de la période de mesure, si l’indicateur porte sur un laps de temps (donc si le champ est_periode est true). Dans ce cas, la ligne se lit '{valeur} {unite_mesure} ont été recensés entre {date_debut} et {date}.'*<br/>*Exemple : 2020-01-01*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### Propriété `est_automatise`

> *Description : Préciser si la collecte des données est automatisée (true) ou manuelle (false).*<br/>*Exemple : true*
- Valeur obligatoire
- Type : booléen

#### Propriété `source_collecte`

> *Description : Préciser comment la collecte est réalisée : script, enquête, collecte manuelle...*<br/>*Exemple : script*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `denom_insee`

> *Description : Si l'indicateur est calculé à une certaine échelle géographique, préciser l'échelon géographique INSEE concerné (cf https://www.insee.fr/fr/information/8377162).*<br/>*Exemple : REG*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `REG`
    - `DEP`
    - `COM`
    - `ARR`
    - `COMER`
    - `COM_COMER`
    - `COG`
    - `CTCD`
    - `CAN`

#### Propriété `code_insee`

> *Description : Si l'indicateur est calculé à une certaine échelle géographique, préciser le code INSEE de cette échelle (trouvable ici : https://www.data.gouv.fr/fr/datasets/code-officiel-geographique-cog/).*<br/>*Exemple : 63113*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `dataviz_wish`

> *Description : Indication pour les producteurs de visualisation du type de dataviz approprié pour cet indicateur.*<br/>*Exemple : linechart*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `linechart`
    - `barchart`
    - `map`
    - `scatterplot`
    - `piechart`

#### Propriété `commentaires`

> *Description : Préciser les limites et biais connus et justifier le choix de l’indicateur malgré ses limites ; les modalites de lecture et d’interpretation de l’indicateur ; si l’indicateur est obsolète.*
- Valeur optionnelle
- Type : chaîne de caractères
