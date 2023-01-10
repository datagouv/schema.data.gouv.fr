<MenuSchema />

# Changements

## 2.1.0

Evolutions suite aux ateliers publics et retours terrain pour faciliter la production de la donnée :

- Passage en facultatif des champs `siren_amenageur`, `contact_amenageur`, `code_insee_commune`, `raccordement`, `num_pdl`, `date_mise_en_service`,`gratuit`, `paiement_cb`, `paiement_autre`
- Ajout de précisions sur la composition des identifiants `id_station_itinerance` et `id_pdc_itinerance` selon les modalités fournies par l'AFIREV (https://afirev.fr/fr/informations-generales/)
- Ajout d'un nouveau champ `cable_t2_attache` indiquant la présence ou non d'un câble T2 sur le point de recharge

## 2.0.3

- Clarification de la description du champ `condition_acces`
- Correction des valeurs d'exemple pour les champs suivants :
  - `code_insee_commune`
  - `nbre_pdc`
  - `accessibilite_pmr`

## 2.0.2

- Correction des valeurs d'exemple pour les champs de dates (`date_mise_en_service` et `date_maj`)

## 2.0.1

- Mise à jour du texte et de liens relatifs à la procédure de consolidation réalisée par Etalab

## 2.0.0

Mise à jour du schéma suite aux

- [Décret n° 2021-546 du 4 mai 2021 portant modification du décret n° 2017-26 du 12 janvier 2017 relatif aux infrastructures de recharge pour véhicules électriques et portant diverses mesures de transposition de la directive 2014/94/UE du Parlement européen et du Conseil du 22 octobre 2014 sur le déploiement d'une infrastructure pour carburants alternatifs](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043475363)
- [Arrêté du 4 mai 2021 relatif aux données concernant la localisation géographique et les caractéristiques techniques des stations et des points de recharge pour véhicules électriques](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043475441)

[#9](https://github.com/etalab/schema-irve/pull/9)

## 1.0.3

- Suppression du caractère obligatoire du champ `observations`

## 1.0.2

Changements internes :
- utilisation des [métadonnées standardisées](https://github.com/frictionlessdata/specs/blob/master/specs/patterns.md#table-schema-metadata-properties)

## 1.0.0 -> 1.0.1

Changements pour intégration au SCDL :
  - ajout des fichiers `CONTEXT.md`, `SEE_ALSO.md` et `CHANGELOG.md`
  - ajout de la propriété `uri`
  - modification du titre
