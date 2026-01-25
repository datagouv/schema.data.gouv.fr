<MenuSchema />

<MenuSchema />

# Changements

## Version 0.14.0 - 2024-02-26

* schéma structure :
  * `commune`, `adresse` et `code_postal` deviennent optionnels
  * `source` devient obligatoire
  * `antenne` n'est plus défini par défaut
* schéma service :
  * `structure_id` devient obligatoire

## Version 0.13.1 - 2024-01-24

* Ajout de la typologie `FT`
  * La typologie `PE` reste disponible pour d'éventuelles questions de rétrocompatibilité.

## Version 0.13.0 - 2024-01-15

* Ajout du label national `france-travail`
  * Le label `pole-emploi` reste disponible pour d'éventuelles questions de rétrocompatibilité.

## Version 0.12.0 - 2023-11-29

* [profils](https://www.data.inclusion.beta.gouv.fr/schemas-de-donnees-de-loffre/schema-des-structures-et-services-dinsertion/profils) :
  * ajout des profils `personnes-handicapees` et `personnes-en-situation-de-handicap`

## Version 0.11.0 - 2023-11-06

* [labels et réseaux](https://www.data.inclusion.beta.gouv.fr/schemas-de-donnees-de-loffre/schema-des-structures-et-services-dinsertion/labels-et-reseaux) :
  * mise à jour du label du réseau `ecoles-de-la-deuxieme-chance`
  * mise à jour du label du réseau `mobin`
  * ajout du réseau `wimoov`
  * ajout du réseau `reseau-app`
* [typologies de structures](https://www.data.inclusion.beta.gouv.fr/schemas-de-donnees-de-loffre/schema-des-structures-et-services-dinsertion/typologie-de-structures) :
  * mise à jour du label du réseau `E2C`

## Version 0.10.0 - 2023-09-11

* [schéma service](https://www.data.inclusion.beta.gouv.fr/schemas-de-donnees-de-loffre/schema-des-structures-et-services-dinsertion#schema-service) :
  * champs ajoutés :
    * `modes_orientation_beneficiaire_autres`
    * `modes_orientation_accompagnateur_autres`
  * champs modifiés :
    * `pre_requis` devient une liste de chaîne de caractères
    * `justificatifs` devient une liste de chaîne de caractères
* [labels et réseaux](https://www.data.inclusion.beta.gouv.fr/schemas-de-donnees-de-loffre/schema-des-structures-et-services-dinsertion/labels-et-reseaux) :
  * ajout du réseau `etcld`
* [profils](https://www.data.inclusion.beta.gouv.fr/schemas-de-donnees-de-loffre/schema-des-structures-et-services-dinsertion/profils) :
  * `demandeur-demploi` devient `demandeurs-demploi`
  * `beneficiaire-rsa` devient `beneficiaires-rsa`

## Version 0.9.0 - 2023-06-30

* [schéma service](https://www.data.inclusion.beta.gouv.fr/schemas-de-donnees-de-loffre/schema-des-structures-et-services-dinsertion#schema-service) :
  * champs ajoutés :
    * `contact_nom_prenom`
    * `modes_orientation_beneficiaire`
    * `modes_orientation_accompagnateur`
* [typologies de structures](https://www.data.inclusion.beta.gouv.fr/schemas-de-donnees-de-loffre/schema-des-structures-et-services-dinsertion/typologie-de-structures) :
  * ajout des [crèches à vocation d'insertion professionnelle (AVIP)](https://www.caf.fr/partenaires/caf-du-val-d-oise/partenaires-locaux/actualites/mieux-connaitre-le-dispositif-des-creches-avip) (`AVIP`)
* [thématiques](https://www.data.inclusion.beta.gouv.fr/schemas-de-donnees-de-loffre/schema-des-structures-et-services-dinsertion/thematiques) :
  * ajout de la thématique "Aide aux victimes" (`acces-aux-droits-et-citoyennete--aide-aux-victimes`)
  * ajout des thématiques liées à l'apprentissage du français (`apprendre-francais--*`)
  * ajout des thématiques liées à l'illettrisme (`illettrisme--*`)
* ajouts des types de zone de diffusion `pays` et `epci`

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
