<MenuSchema />

# Changements

## À venir

### Ajouts

### Changements

### Dépréciations

### Suppressions

## 0.27.0 - 2025-06-12

### Ajouts

* ajout des champs volume_horaire_hebdomadaire et nombre_semaines

## 0.26.0 - 2025-06-06

### Changements

* corrections des apostrophes dans les labels et les descriptions
* correction du label pour les personnes en situation d’urgence

## 0.25.0 - 2025-05-20

### Changements

* structure: ajout de description sur le champ `site_web`

## 0.24.0 - 2025-04-17

### Changements

* ajout de description sur les champs `courriel`
* modifications typographiques

## 0.23.0 - 2025-04-15

### Changements

* ajout de description sur les champs `telephone`

## 0.22.0 - 2025-04-14

### Changements

* `date_maj` devient obligatoire
* ajout de validation sur les champs `nom` de structure et service

## 0.21.0 - 2025-02-27

### Changements

* renommage de certains critères du score de qualité
* modification du fonctionnement de certains critères du score de qualité

## 0.20.0 - 2025-01-08

### Ajouts
* ajout de champs profils_precisions
* ajout profils tout-publics et personnes-en-situation-durgence

## 0.19.0 - 2024-11-05

### Changements

* arrondissage à deux décimales du score de qualité.

## 0.18.0 - 2024-10-22

### Ajouts

* ajout du score de qualité des services

## 0.17.0 - 2024-08-29

### Ajouts

* ajout de 3 typologies de structures ETABL_PRI, ETABL_PUB et ETAT

### Changements

### Dépréciations

### Suppressions

## 0.16.0 - 2024-07-18

### Ajouts

* ajout du mode d’orientation `prendre-rdv` (accompagnateur & beneficiaire)
* ajout de nouveaux profils (`etudiants`, `personnes-de-nationalite-etrangere`, `sans-domicile-fixe`, `sortants-de-detention`, `victimes`)
* ajout de nouvelles thématiques (`equipement-et-alimentation--aide-menagere`, `handicap--aide-a-la-personne`)
* description des modes d’accueil par @acaldagues

### Suppressions

* retrait du label `pole-emploi` après 6 mois de dépréciation.
* retrait de la typologie `PE` après 6 mois de dépréciation.
* suppression du mode d’orientation accompagnateur `envoyer-un-mail-avec-des-documents-a-completer`

## 0.15.0 - 2024-06-10

### Ajouts

* ajouts de types de structures liées à l’inclusion numérique par @marc-gavanier
* nouveau champ `page_web` sur le schéma service
* nouvelles thématiques liées au logement et à l’hébergement pour action logement
* ajouts de nouveaux profils
* description des modes d’orientation par @acaldagues

### Changements

* correction du label pour la typologie de structure `EATT` par @acaldagues
* les champs listes (`thematiques`, `profils`, etc.) contiennent des éléments uniques

## 0.14.0 - 2024-02-26

### Changements

* schéma structure :
  * `commune`, `adresse` et `code_postal` deviennent optionnels
  * `source` devient obligatoire
  * `antenne` n’est plus défini par défaut
* schéma service :
  * `structure_id` devient obligatoire

## 0.13.1 - 2024-01-24

### Ajouts

* Ajout de la typologie `FT`
  * La typologie `PE` reste disponible pour d’éventuelles questions de rétrocompatibilité.

## 0.13.0 - 2024-01-15

### Ajouts

* Ajout du label national `france-travail`
  * Le label `pole-emploi` reste disponible pour d’éventuelles questions de rétrocompatibilité.

## 0.12.0 - 2023-11-29

### Ajouts

* profils :
  * ajout des profils `personnes-handicapees` et `personnes-en-situation-de-handicap`

## 0.11.0 - 2023-11-06

### Ajouts

* labels et réseaux :
  * ajout du réseau `wimoov`
  * ajout du réseau `reseau-app`

### Changements

* labels et réseaux :
  * mise à jour du label du réseau `ecoles-de-la-deuxieme-chance`
  * mise à jour du label du réseau `mobin`
* typologies de structures :
  * mise à jour du label du réseau `E2C`

## 0.10.0 - 2023-09-11

### Ajouts

* schéma service :
  * champs ajoutés :
    * `modes_orientation_beneficiaire_autres`
    * `modes_orientation_accompagnateur_autres`
* labels et réseaux :
  * ajout du réseau `etcld`

### Changements

* schéma service :
  * champs modifiés :
    * `pre_requis` devient une liste de chaîne de caractères
    * `justificatifs` devient une liste de chaîne de caractères
* profils :
  * `demandeur-demploi` devient `demandeurs-demploi`
  * `beneficiaire-rsa` devient `beneficiaires-rsa`

## 0.9.0 - 2023-06-30

### Ajouts

* schéma service :
  * champs ajoutés :
    * `contact_nom_prenom`
    * `modes_orientation_beneficiaire`
    * `modes_orientation_accompagnateur`
* typologies de structures :
  * ajout des [crèches à vocation d’insertion professionnelle (AVIP)](https://www.caf.fr/partenaires/caf-du-val-d-oise/partenaires-locaux/actualites/mieux-connaitre-le-dispositif-des-creches-avip) (`AVIP`)
* thématiques :
  * ajout de la thématique "Aide aux victimes" (`acces-aux-droits-et-citoyennete--aide-aux-victimes`)
  * ajout des thématiques liées à l’apprentissage du français (`apprendre-francais--*`)
  * ajout des thématiques liées à l’illettrisme (`illettrisme--*`)
* ajouts des types de zone de diffusion `pays` et `epci`

## 0.8.0 - 2023-03-08

### Ajouts

* labels et réseaux:
  * ajout du label `collectif-emploi`
* schéma service:
  * champs ajoutés: `presentation_detail`, `pre_requis`, `cumulable`, `justificatifs`, `formulaire_en_ligne`, `commune`, `code_postal`, `code_insee`, `adresse`, `complement_adresse`, `longitude`, `latitude`, `recurrence`, `date_creation`, `date_suspension`, `lien_source`, `telephone`, `courriel`, `contact_public`, `date_maj`, `modes_accueil`, `zone_diffusion_type`, `zone_diffusion_code`, `zone_diffusion_nom`

### Changements

* labels et réseaux:
  * label `cheops` remplacé par `cap-emploi-reseau-cheops`

## 0.7.0 - 2022-12-08

### Changements

* la présence d’au moins une donnée pivot est désormais optionnelle

## 0.6.0 - 2022-11-28

### Ajouts

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

### Changements

* remplacements de sous-thématiques:
  * `creation-activite--de-l-idee-au-projet` -> `creation-activite--definir-son-projet-de-creation-dentreprise`
  * `creation-activite--demarrer-son-activite` -> `creation-activite--developper-son-entreprise`
  * `creation-activite--elaborer-son-projet` -> `creation-activite--structurer-son-projet-de-creation-dentreprise`
* normalisation des apostrophes dans les labels à afficher
* suppression des accents dans les valeurs

## 0.5.0 - 2022-11-17

### Ajouts

* ajout du champ `antenne` (nouvelle gestion des antennes)
* ajout du label `conseiller-numerique`

### Suppressions

* suppression du champ `structure_parente` (nouvelle gestion des antennes)

## 0.4.1 - 2022-11-15

### Changements

* documentation des typologies de structures

## 0.4.0 - 2022-11-07

### Changements

* formatage des sous-thématiques: `<thematique>--<sous-thematique>`

## 0.3.0 - 2022-10-27

### Ajouts

* ajout des sous-thématiques de services
* ajout des champs `id`, `source`, `structure_id` aux schéma service
* ajout valeur `pass-numerique` aux frais de services
* ajout valeur `ESS` aux typologies de structures
* ajout des profils aux services
  * ajout du champs `profils`
  * ajout du vocabulaire des profils

### Changements

* séparation schéma service et structure
* formatage des labels nationaux

### Suppressions

* suppression du champ `services` du schéma structures

## 0.2.0 - 2022-06-18

### Ajouts

* ajouts des champs au schéma structure:
  * `accessibilite`
  * `labels_nationaux` et `labels_autres`
  * `thematiques`

### Changements

* le champ `code_insee` est désormais optionnel

## 0.1.0 - 2022-06-06

Version initiale.
