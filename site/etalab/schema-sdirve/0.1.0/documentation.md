<MenuSchema />

<MenuSchema />

## sdirve

Schéma directeur des infrastructures de recharge pour véhicules électriques et hybrides rechargeables

Spécification du fichier d'échange relatif aux schéma directeur des infrastructures de recharge pour véhicules électriques et hybrides rechargeables.

- Schéma créé le : 18/03/2021
- Site web : https://github.com/etalab/schema-sdirve
- Version : 0.1.0

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [date_realisation_diagnostic](#propriete-date-realisation-diagnostic) | date (format `%Y-%m-%d`) | Oui |
| [date_adoption_sdirve](#propriete-date-adoption-sdirve) | date (format `%Y-%m-%d`) | Oui |
| [date_objectifs](#propriete-date-objectifs) | date (format `%Y-%m-%d`) | Oui |
| [code_commune_insee](#propriete-code-commune-insee) | chaîne de caractères  | Oui |
| [code_iris_insee](#propriete-code-iris-insee) | chaîne de caractères  | Non |
| [existant_nb_pdc_intervalle_1](#propriete-existant-nb-pdc-intervalle-1) | nombre entier  | Oui |
| [existant_nb_pdc_intervalle_2](#propriete-existant-nb-pdc-intervalle-2) | nombre entier  | Oui |
| [existant_nb_pdc_intervalle_3](#propriete-existant-nb-pdc-intervalle-3) | nombre entier  | Oui |
| [existant_nb_pdc_intervalle_4](#propriete-existant-nb-pdc-intervalle-4) | nombre entier  | Oui |
| [existant_nb_moyen_recharges](#propriete-existant-nb-moyen-recharges) | nombre réel  | Oui |
| [existant_duree_moyenne_recharges](#propriete-existant-duree-moyenne-recharges) | nombre réel  | Oui |
| [existant_taux_disponibilite_moyen](#propriete-existant-taux-disponibilite-moyen) | nombre réel  | Oui |
| [evaluation_developpement_nb_pdc_intervalle_1](#propriete-evaluation-developpement-nb-pdc-intervalle-1) | nombre entier  | Oui |
| [evaluation_developpement_nb_pdc_intervalle_2](#propriete-evaluation-developpement-nb-pdc-intervalle-2) | nombre entier  | Oui |
| [evaluation_developpement_nb_pdc_intervalle_3](#propriete-evaluation-developpement-nb-pdc-intervalle-3) | nombre entier  | Oui |
| [evaluation_developpement_nb_pdc_intervalle_4](#propriete-evaluation-developpement-nb-pdc-intervalle-4) | nombre entier  | Oui |
| [estimation_vehicules_particuliers_electriques](#propriete-estimation-vehicules-particuliers-electriques) | nombre entier  | Oui |
| [estimation_vehicules_particuliers_hybrides_rechargeables](#propriete-estimation-vehicules-particuliers-hybrides-rechargeables) | nombre entier  | Oui |
| [objectifs_nb_pdc_intervalle_1](#propriete-objectifs-nb-pdc-intervalle-1) | nombre entier  | Oui |
| [objectifs_nb_pdc_intervalle_2](#propriete-objectifs-nb-pdc-intervalle-2) | nombre entier  | Oui |
| [objectifs_nb_pdc_intervalle_3](#propriete-objectifs-nb-pdc-intervalle-3) | nombre entier  | Oui |
| [objectifs_nb_pdc_intervalle_4](#propriete-objectifs-nb-pdc-intervalle-4) | nombre entier  | Oui |
| [objectifs_nb_total_stations](#propriete-objectifs-nb-total-stations) | nombre entier  | Oui |
| [objectifs_nb_pdc_usage_residentiel_intervalle_1](#propriete-objectifs-nb-pdc-usage-residentiel-intervalle-1) | nombre entier  | Non |
| [objectifs_nb_pdc_usage_professionnel_intervalle_1](#propriete-objectifs-nb-pdc-usage-professionnel-intervalle-1) | nombre entier  | Non |
| [objectifs_nb_pdc_usage_occasionnel_transit_intervalle_1](#propriete-objectifs-nb-pdc-usage-occasionnel-transit-intervalle-1) | nombre entier  | Non |
| [objectifs_nb_pdc_usage_residentiel_intervalle_2](#propriete-objectifs-nb-pdc-usage-residentiel-intervalle-2) | nombre entier  | Non |
| [objectifs_nb_pdc_usage_professionnel_intervalle_2](#propriete-objectifs-nb-pdc-usage-professionnel-intervalle-2) | nombre entier  | Non |
| [objectifs_nb_pdc_usage_occasionnel_transit_intervalle_2](#propriete-objectifs-nb-pdc-usage-occasionnel-transit-intervalle-2) | nombre entier  | Non |
| [objectifs_nb_pdc_usage_residentiel_intervalle_3](#propriete-objectifs-nb-pdc-usage-residentiel-intervalle-3) | nombre entier  | Non |
| [objectifs_nb_pdc_usage_professionnel_intervalle_3](#propriete-objectifs-nb-pdc-usage-professionnel-intervalle-3) | nombre entier  | Non |
| [objectifs_nb_pdc_usage_occasionnel_transit_intervalle_3](#propriete-objectifs-nb-pdc-usage-occasionnel-transit-intervalle-3) | nombre entier  | Non |
| [objectifs_nb_pdc_usage_residentiel_intervalle_4](#propriete-objectifs-nb-pdc-usage-residentiel-intervalle-4) | nombre entier  | Non |
| [objectifs_nb_pdc_usage_professionnel_intervalle_4](#propriete-objectifs-nb-pdc-usage-professionnel-intervalle-4) | nombre entier  | Non |
| [objectifs_nb_pdc_usage_occasionnel_transit_intervalle_4](#propriete-objectifs-nb-pdc-usage-occasionnel-transit-intervalle-4) | nombre entier  | Non |
| [url_sdirve](#propriete-url-sdirve) | chaîne de caractères (format `uri`) | Non |

#### Propriété `date_realisation_diagnostic`

> *Description : Date de réalisation du diagnostic.*<br/>*Exemple : 2021-07-12*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### Propriété `date_adoption_sdirve`

> *Description : Date d'adoption du schéma directeur IRVE.*<br/>*Exemple : 2021-07-12*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### Propriété `date_objectifs`

> *Description : Date fixée pour l'atteinte des objectifs à l'échéance opérationnelle (inférieure ou égale à 3 ans).*<br/>*Exemple : 2023-07-12*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### Propriété `code_commune_insee`

> *Description : Code INSEE de chacune des communes couvertes par le territoire du SDIRVE, avec une ligne par commune dans le cas où les données ne sont pas renseignées à l'échelle de l'IRIS.*<br/>*Exemple : 23150*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### Propriété `code_iris_insee`

> *Description : Code de chaque IRIS couvert par le territoire du SDIRVE. Dans le cas où les données ne sont pas renseignées à l'échelle de l'IRIS mais de la commune, ne pas remplir ce champs.*<br/>*Exemple : 2A0040101*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{7}$`

#### Propriété `existant_nb_pdc_intervalle_1`

> *Description : Diagnostic - Nombre de points de charge ouverts au public existants à la date d'élaboration du diagnostic, d'une puissance unitaire ≤ 7,4 kVA.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `existant_nb_pdc_intervalle_2`

> *Description : Diagnostic - Nombre de points de charge ouverts au public existants à la date d'élaboration du diagnostic, d'une puissance unitaire > 7,4 kVA et ≤ 22  kVA.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `existant_nb_pdc_intervalle_3`

> *Description : Diagnostic - Nombre de points de charge ouverts au public existants à la date d'élaboration du diagnostic, d'une puissance unitaire > 22 kVA et < 150  kVA.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `existant_nb_pdc_intervalle_4`

> *Description : Diagnostic - Nombre de points de charge ouverts au public existants à la date d'élaboration du diagnostic, d'une puissance unitaire ≥ 150 kVA.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `existant_nb_moyen_recharges`

> *Description : Diagnostic - Nombre moyen de sessions de recharges quotidiennes sur les points de charge ouverts au public existants, sur les 22 mois précédant l'élaboration du diagnostic.*<br/>*Exemple : 89*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `existant_duree_moyenne_recharges`

> *Description : Diagnostic - Durée moyenne des sessions (en minutes) de recharge réussies en minutes sur les points de charge ouverts au public existants, sur les 22 mois précédant l'élaboration du diagnostic.*<br/>*Exemple : 120*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `existant_taux_disponibilite_moyen`

> *Description : Diagnostic - Taux de disponibilité moyen (%) des points de charge ouverts au public existants, sur les 22 mois précédant l'élaboration du diagnostic. Le taux de disponibilité d’un point de recharge est le rapport entre le nombre d’heures où le point de charge est apte à fonctionner et le nombre d’heures d'ouverture de la station.*<br/>*Exemple : 67.5*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 100

#### Propriété `evaluation_developpement_nb_pdc_intervalle_1`

> *Description : Diagnostic - Evaluation du nombre de points de charge ouverts au public induits par la mise en œuvre de dispositions législatives et réglementaires ou par des projets d'implantation à l'échéance opérationnelle, d'une puissance unitaire ≤ 7,4 kVA.*<br/>*Exemple : 67*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `evaluation_developpement_nb_pdc_intervalle_2`

> *Description : Diagnostic - Evaluation du nombre de points de charge ouverts au public induits par la mise en œuvre de dispositions législatives et réglementaires ou par des projets d'implantation à l'échéance opérationnelle, d'une puissance unitaire > 7,4 et ≤ 22  kVA.*<br/>*Exemple : 67*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `evaluation_developpement_nb_pdc_intervalle_3`

> *Description : Diagnostic - Evaluation du nombre de points de charge ouverts au public induits par la mise en œuvre de dispositions législatives et réglementaires ou par des projets d'implantation à l'échéance opérationnelle, d'une puissance unitaire > 22 et < 150  kVA.*<br/>*Exemple : 67*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `evaluation_developpement_nb_pdc_intervalle_4`

> *Description : Diagnostic - Evaluation du nombre de points de charge ouverts au public induits par la mise en œuvre de dispositions législatives et réglementaires ou par des projets d'implantation à l'échéance opérationnelle, d'une puissance unitaire ≥ 150  kVA.*<br/>*Exemple : 67*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `estimation_vehicules_particuliers_electriques`

> *Description : Diagnostic - Estimation du parc de véhicules particuliers électriques à l'échéance opérationnelle.*<br/>*Exemple : 67*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `estimation_vehicules_particuliers_hybrides_rechargeables`

> *Description : Diagnostic -Estimation du parc de véhicules particuliers hybrides rechargeables à l'échéance opérationnelle.*<br/>*Exemple : 67*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `objectifs_nb_pdc_intervalle_1`

> *Description : Objectifs - Nombre total de points de charge ouverts au public à l'échéance opérationnelle, d'une puissance unitaire ≤ 7,4 kVA.*<br/>*Exemple : 67*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `objectifs_nb_pdc_intervalle_2`

> *Description : Objectifs - Nombre total de points de charge ouverts au public à l'échéance opérationnelle, d'une puissance unitaire > 7,4 kVA et ≤ 22  kVA.*<br/>*Exemple : 67*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `objectifs_nb_pdc_intervalle_3`

> *Description : Objectifs - Nombre total de points de charge ouverts au public à l'échéance opérationnelle, d'une puissance unitaire > 22 kVA et < 150  kVA.*<br/>*Exemple : 67*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `objectifs_nb_pdc_intervalle_4`

> *Description : Objectifs - Nombre total de points de charge ouverts au public à l'échéance opérationnelle, d'une puissance unitaire ≥ 150 kVA.*<br/>*Exemple : 67*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `objectifs_nb_total_stations`

> *Description : Objectifs - Nombre total de stations.*<br/>*Exemple : 67*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `objectifs_nb_pdc_usage_residentiel_intervalle_1`

> *Description : Objectifs - Nombre total de points de charge ouverts au public à l'échéance opérationnelle, d'une puissance unitaire ≤ 7,4 kVA - usage principal résidentiel.*<br/>*Exemple : 67*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `objectifs_nb_pdc_usage_professionnel_intervalle_1`

> *Description : Objectifs - Nombre total de points de charge ouverts au public à l'échéance opérationnelle, d'une puissance unitaire ≤ 7,4 kVA - usage principal professionnel.*<br/>*Exemple : 67*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `objectifs_nb_pdc_usage_occasionnel_transit_intervalle_1`

> *Description : Objectifs - Nombre total de points de charge ouverts au public à l'échéance opérationnelle, d'une puissance unitaire ≤ 7,4 kVA - usage principal occasionnel/transit.*<br/>*Exemple : 67*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `objectifs_nb_pdc_usage_residentiel_intervalle_2`

> *Description : Objectifs - Nombre total de points de charge ouverts au public à l'échéance opérationnelle, d'une puissance unitaire > 7,4 kVA et ≤ 22  kVA - usage principal résidentiel.*<br/>*Exemple : 67*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `objectifs_nb_pdc_usage_professionnel_intervalle_2`

> *Description : Objectifs - Nombre total de points de charge ouverts au public à l'échéance opérationnelle, d'une puissance unitaire > 7,4 kVA et ≤ 22  kVA - usage principal professionnel.*<br/>*Exemple : 67*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `objectifs_nb_pdc_usage_occasionnel_transit_intervalle_2`

> *Description : Objectifs - Nombre total de points de charge ouverts au public à l'échéance opérationnelle, d'une puissance unitaire > 7,4 kVA et ≤ 22  kVA - usage principal occasionnel/transit.*<br/>*Exemple : 67*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `objectifs_nb_pdc_usage_residentiel_intervalle_3`

> *Description : Objectifs - Nombre total de points de charge ouverts au public à l'échéance opérationnelle, d'une puissance unitaire > 22 kVA et < 150  kVA - usage principal résidentiel.*<br/>*Exemple : 67*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `objectifs_nb_pdc_usage_professionnel_intervalle_3`

> *Description : Objectifs - Nombre total de points de charge ouverts au public à l'échéance opérationnelle, d'une puissance unitaire > 22 kVA et < 150  kVA - usage principal professionnel.*<br/>*Exemple : 67*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `objectifs_nb_pdc_usage_occasionnel_transit_intervalle_3`

> *Description : Objectifs - Nombre total de points de charge ouverts au public à l'échéance opérationnelle, d'une puissance unitaire > 22 kVA et < 150  kVA - usage principal occasionnel/transit.*<br/>*Exemple : 67*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `objectifs_nb_pdc_usage_residentiel_intervalle_4`

> *Description : Objectifs - Nombre total de points de charge ouverts au public à l'échéance opérationnelle, d'une puissance unitaire ≥ 150 kVA - usage principal résidentiel.*<br/>*Exemple : 67*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `objectifs_nb_pdc_usage_professionnel_intervalle_4`

> *Description : Objectifs - Nombre total de points de charge ouverts au public à l'échéance opérationnelle, d'une puissance unitaire ≥ 150 kVA - usage principal professionnel.*<br/>*Exemple : 67*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `objectifs_nb_pdc_usage_occasionnel_transit_intervalle_4`

> *Description : Objectifs - Nombre total de points de charge ouverts au public à l'échéance opérationnelle, d'une puissance unitaire ≥ 150 kVA - usage principal occasionnel/transit.*<br/>*Exemple : 67*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `url_sdirve`

> *Description : Adresse URL où le SDIRVE de la collectivité peut être téléchargé.*<br/>*Exemple : https://www.exemple.fr/stationnementrepublique/*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)
