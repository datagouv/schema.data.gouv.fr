<MenuSchema />

<MenuSchema />

# Changements

## Version 0.8.0 - 2023-03-08

* labels et réseaux:
  * ajout du label `collectif-emploi`
  * label `cheops` remplacé par `cap-emploi-reseau-cheops`
* schéma service:
  * champs ajoutés:
    * `presentation_detail`
    * `pre_requis`
    * `cumulable`
    * `justificatifs`
    * `formulaire_en_ligne`
    * `commune`
    * `code_postal`
    * `code_insee`
    * `adresse`
    * `complement_adresse`
    * `longitude`
    * `latitude`
    * `recurrence`
    * `date_creation`
    * `date_suspension`
    * `lien_source`
    * `telephone`
    * `courriel`
    * `contact_public`
    * `date_maj`
    * `modes_accueil`
    * `zone_diffusion_type`
    * `zone_diffusion_code`
    * `zone_diffusion_nom`

## Version 0.7.0 - 2022-12-08

* la présence d'au moins une donnée pivot est désormais optionnelle

## Version 0.6.0 - 2022-11-28

* ajouts thématiques (et sous-thématiques associées):
  * `acces-aux-droits-et-citoyennete`
  * `accompagnement-social-et-professionnel-personnalise`
  * `equipement-et-alimentation`
  * `famille`
  * `gestion-financiere`
  * `handicap`
  * `logement-hebergement`
  * `remobilisation`
  * `sante`
  * `se-former`
  * `souvrir-a-linternational`
* remplacements de sous-thématiques:
  * `creation-activite--de-l-idee-au-projet` -> `creation-activite--definir-son-projet-de-creation-dentreprise`
  * `creation-activite--demarrer-son-activite` -> `creation-activite--developper-son-entreprise`
  * `creation-activite--elaborer-son-projet` -> `creation-activite--structurer-son-projet-de-creation-dentreprise`
* normalisation des apostrophes dans les labels à afficher
* suppression des accents dans les valeurs

## Version 0.5.0 - 2022-11-17

* nouvelle gestion des antennes
  * suppression du champ `structure_parente`
  * ajout du champ `antenne`
* ajout du label `conseiller-numerique`

## Version 0.4.1 - 2022-11-15

* documentation des typologies de structures

## Version 0.4.0 - 2022-11-07

* formatage des sous-thématiques: `<thematique>--<sous-thematique>`

## Version 0.3.0 - 2022-10-27

* ajout des sous-thématiques de services
* séparation schéma service et structure
  * ajout des champs `id`, `source`, `structure_id` aux schéma service
  * suppression du champ `services` du schéma structures
* ajout valeur `pass-numerique` aux frais de services
* ajout valeur `ESS` aux typologies de structures
* ajout des profils aux services
  * ajout du champs `profils`
  * ajout du vocabulaire des profils
* formatage des labels nationaux

## Version 0.2.0 - 2022-06-18

* ajouts des champs au schéma structure:
  * `accessibilite`
  * `labels_nationaux` et `labels_autres`
  * `thematiques`
* le champ `code_insee` est désormais optionnel

## Version 0.1.0 - 2022-06-06

Version initiale.