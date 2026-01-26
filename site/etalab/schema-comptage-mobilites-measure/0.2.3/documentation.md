<MenuSchema />

## schema-comptage-mobilites-measure

Comptage des mobilités (Measure)

Spécification du fichier d'échange relatif aux comptages des mobilités.

- Schéma créé le : 15/11/2021
- Site web : https://github.com/etalab/schema-comptage-mobilites
- Version : 0.2.3

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [channel_id](#propriete-channel-id) | chaîne de caractères  | Oui |
| [counter_id](#propriete-counter-id) | chaîne de caractères  | Oui |
| [start_datetime](#propriete-start-datetime) | date et heure  | Oui |
| [end_datetime](#propriete-end-datetime) | date et heure  | Non |
| [count](#propriete-count) | nombre réel  | Non |

#### Propriété `channel_id`

> *Description : Identifiant unique du channel dans le référentiel de la collectivité. Fait référence au champ `channel_id` du fichier channel auquel les données sont rattachées*<br/>*Exemple : C-C-01-Baix*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `counter_id`

> *Description : Identifiant unique du compteur dans les bases de données de la collectivité territoriale productrice de données. Peut être un identifiant physique fixé par le fabricant, ou un identifiant fixé par la collectivité territoriale, au choix. Ce champ peut servir à détecter des changements de compteurs physiques sur un channel ou de suivre la réaffectation géographique d'un compteur physique.*<br/>*Exemple : C01-Baix*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `start_datetime`

> *Description : Date et heure du début du comptage au format ISO 8601. Le créneau de comptage doit être présent même si aucun passage n'a été enregistré sur un pas de temps. Cette borne de début est inclusive (période de mesure supérieure ou égale à start_datetime).*<br/>*Exemple : 2019-09-07T13:15:00Z*
- Valeur obligatoire
- Type : date et heure

#### Propriété `end_datetime`

> *Description : Date et heure du fin du comptage au format ISO 8601. La colonne doit être présente mais la valeur peut être à vide, auquel cas le pas de temps (time_step) spécifié dans le schéma compteurs sera obligatoire et prise en compte. Cette borne de fin est exclusive (période de mesure strictement inférieure à end_datetime). Ce champ est conditionnellemnt requis. Il devient obligatoire lorsque le champ `time_step` n'est complété*<br/>*Exemple : 2019-09-07T13:30:00Z*
- Valeur optionnelle
- Type : date et heure

#### Propriété `count`

> *Description : Nombre de passages comptabilisés sur la période considérée. Lorsqu'il n'y a pas eu de passage, renseigner la valeur 0. Si il n'y a aucun comptage, laisser le champ vide. Il est possible de renseigner un nombre à virgule si le chiffre est le résultat d'un calcul (interpolation, moyenne pour compléter des données abîmées ou extrapolées sur des périodes de temps différentes, mais en souhaitant conserver une justesse statistique globale). Si le champ `mobility_type` est multivalué pour le channel correspondant le fichier `channel`, il est rappelé que le `count` sera la somme des pratiques enregistrées. Pour suivre les pratiques différemment, il faut créer un channel par pratique.*<br/>*Exemple : 20*
- Valeur optionnelle
- Type : nombre réel
