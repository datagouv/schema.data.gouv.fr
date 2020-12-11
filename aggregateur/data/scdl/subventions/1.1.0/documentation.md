---
permalink: /scdl/subventions/1.1.0/documentation.html
redirect_from: null
title: Documentation de Schéma SCDL Subventions
version: 1.1.0
---

## Schéma SCDL Subventions

Schéma validant le format relatif aux subventions du SCDL (Socle Commun des Données Locales).

- Auteur : OpenDataFrance
- Schéma créé le : 27/04/2018
- Site web : https://git.opendatafrance.net/scdl/subventions
- Version : 1.1

### Modèle de données


##### Liste des propriétés
| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [nomAttribuant](#nom-de-l'attribuant---propriété-nomattribuant) | chaîne de caractères  | Oui |
| [idAttribuant](#identification-de-l'attribuant---propriété-idattribuant) | chaîne de caractères  | Oui |
| [dateConvention](#date-de-la-convention-de-subvention---propriété-dateconvention) | date  | Oui |
| [referenceDecision](#référence-de-la-décision---propriété-referencedecision) | chaîne de caractères  | Non |
| [nomBeneficiaire](#nom-du-bénéficiaire---propriété-nombeneficiaire) | chaîne de caractères  | Oui |
| [idBeneficiaire](#identification-du-bénéficiaire---propriété-idbeneficiaire) | chaîne de caractères  | Oui |
| [objet](#objet-de-la-subvention---propriété-objet) | chaîne de caractères  | Oui |
| [montant](#montant-total-de-la-subvention---propriété-montant) | nombre réel  | Oui |
| [nature](#nature-de-la-subvention---propriété-nature) | chaîne de caractères  | Oui |
| [conditionsVersement](#conditions-de-versement-de-la-subvention---propriété-conditionsversement) | chaîne de caractères  | Oui |
| [datesPeriodeVersement](#date-ou-période-de-versement---propriété-datesperiodeversement) | chaîne de caractères  | Oui |
| [idRAE](#numéro-unique-de-référencement-dans-le-répertoire-des-aides-aux-entreprises---propriété-idrae) | chaîne de caractères  | Non |
| [notificationUE](#aide-d'etat-notifiée-à-la-commission-européenne---propriété-notificationue) | booléen  | Oui |
| [pourcentageSubvention](#pourcentage-du-montant-total-de-la-subvention-attribuée-au-bénéficiaire---propriété-pourcentagesubvention) | nombre réel  | Oui |

#### Nom de l'attribuant - Propriété `nomAttribuant`

> *Description : Nom officiel de l'organisme attribuant la subvention<br/>Ex : Région Bretagne*
- Valeur obligatoire
- Type : chaîne de caractères

#### Identification de l'attribuant - Propriété `idAttribuant`

> *Description : Identifiant du Système d'Identification du Répertoire des Etablissements (SIRET)<br/>Ex : 23350001600040*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Date de la convention de subvention - Propriété `dateConvention`

> *Description : Date de la convention au format AAAA-MM-JJ (ISO 8601)<br/>Ex : 2017-06-27*
- Valeur obligatoire
- Type : date

#### Référence de la décision - Propriété `referenceDecision`

> *Description : Identifiant interne de l’acte matérialisant la décision d’attribution de la subvention<br/>Ex : Z34507*
- Valeur optionnelle
- Type : chaîne de caractères

#### Nom du bénéficiaire - Propriété `nomBeneficiaire`

> *Description : Nom officiel (raison sociale) du bénéficiaire de la subvention<br/>Ex : Rodriguez SA*
- Valeur obligatoire
- Type : chaîne de caractères

#### Identification du bénéficiaire - Propriété `idBeneficiaire`

> *Description : Identifiant du Système d'Identification du Répertoire des Etablissements (SIRET)<br/>Ex : 81223113200026*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Objet de la subvention - Propriété `objet`

> *Description : Description de l'objet de la subvention<br/>Ex : Aide à l'embauche*
- Valeur obligatoire
- Type : chaîne de caractères
- Moins de 256 caractères

#### Montant total de la subvention - Propriété `montant`

> *Description : Montant total de la subvention avant répartition entre les bénéficiaires<br/>Ex : 22000.80*
- Valeur obligatoire
- Type : nombre réel

#### Nature de la subvention - Propriété `nature`

> *Description : Liste de plusieurs choix possibles séparés par des point-virgules<br/>Ex : aide en numéraire;aide en nature*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - aide en numéraire
    - aide en nature
    - aide en numéraire;aide en nature
    - aide en nature;aide en numéraire

#### Conditions de versement de la subvention - Propriété `conditionsVersement`

> *Description : Description des conditions de versement de la subvention. Valeur parmi 'unique', 'échelonné' ou texte libre.<br/>Ex : *
- Valeur obligatoire
- Type : chaîne de caractères
- Moins de 256 caractères

#### Date ou période de versement - Propriété `datesPeriodeVersement`

> *Description : Si le versement est unique et que la date précise est connue, alors il s'agit d'une date au format AAAA-MM-JJ (ISO 8601). Si le versement est échelonné (ou que la date précise de versement unique est inconnue), alors il s'agit d'une période exprimée au format AAAA-MM-JJ/AAAA-MM-JJ (ISO 8601).<br/>Ex : 2017-12-14*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[0-9]{4}\-[0-9]{2}\-[0-9]{2}(\/[0-9]{4}\-[0-9]{2}\-[0-9]{2})?$`

#### Numéro unique de référencement dans le Répertoire des Aides aux Entreprises - Propriété `idRAE`

> *Description : Numéro unique RAE communiqué par le service aides-entreprises.fr<br/>Ex : 12345*
- Valeur optionnelle
- Type : chaîne de caractères

#### Aide d'Etat notifiée à la Commission européenne - Propriété `notificationUE`

> *Description : Booléen : oui ou non<br/>Ex : oui*
- Valeur obligatoire
- Type : booléen

#### Pourcentage du montant total de la subvention attribuée au bénéficiaire - Propriété `pourcentageSubvention`

> *Description : Pourcentage exprimé sous la forme d'un nombre avec un point comme séparateur de décimales<br/>Ex : 0.8*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre 0 et 1