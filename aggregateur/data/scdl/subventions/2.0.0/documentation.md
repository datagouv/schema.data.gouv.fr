---
permalink: /scdl/subventions/2.0.0/documentation.html
redirect_from: null
title: Documentation de Subventions
version: 2.0.0
---

## Subventions

Spécification du modèle de données relatif aux subventions attribuées par une collectivité

- Auteur : OpenDataFrance
- Contributeurs : Pierre Dittgen
- Schéma créé le : 27/04/2018
- Site web : https://git.opendatafrance.net/scdl/subventions
- Version : 2.0.0

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
| [idRAE](#identifiant-rae-de-l’aide-au-titre-de-laquelle-la-subvention-est-attribuée---propriété-idrae) | chaîne de caractères  | None |
| [notificationUE](#aide-d'etat-notifiée-à-la-commission-européenne---propriété-notificationue) | booléen  | Oui |
| [pourcentageSubvention](#pourcentage-du-montant-total-de-la-subvention-attribuée-au-bénéficiaire---propriété-pourcentagesubvention) | nombre réel  | Oui |

#### Nom de l'attribuant - Propriété `nomAttribuant`

> *Description : Nom officiel de la collectivité attribuant la subvention.<br/>Ex : Région Bretagne*
- Valeur obligatoire
- Type : chaîne de caractères

#### Identification de l'attribuant - Propriété `idAttribuant`

> *Description : Identifiant du [Système d'Identification du Répertoire des Etablissements](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_%C3%A9tablissements) (SIRET) de la collectivité attribuant la subvention, composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant.<br/>Ex : 23350001600040*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Date de la convention de subvention - Propriété `dateConvention`

> *Description : Date de la convention au format AAAA-MM-JJ suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).<br/>Ex : 2017-06-27*
- Valeur obligatoire
- Type : date

#### Référence de la décision - Propriété `referenceDecision`

> *Description : Identifiant interne de l’acte matérialisant la décision d’attribution de la subvention. Sa composition dépend des pratiques propres à la collectivité.<br/>Ex : 2017-03-103*
- Valeur obligatoire
- Type : chaîne de caractères

#### Nom du bénéficiaire - Propriété `nomBeneficiaire`

> *Description : Nom officiel ou raison sociale du bénéficiaire de la subvention.<br/>Ex : Association Les Petits Débrouillards Bretagne*
- Valeur obligatoire
- Type : chaîne de caractères

#### Identification du bénéficiaire - Propriété `idBeneficiaire`

> *Description : Identifiant du [Système d'Identification du Répertoire des Etablissements](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_%C3%A9tablissements) (SIRET) du bénéficiaire de la subvention, composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant.<br/>Ex : 38047555800058*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Objet de la subvention - Propriété `objet`

> *Description : Description de l'objet de la subvention attribuée limitée à 256 caractères maximum.<br/>Ex : Animations climat-énergie dans les lycées de la région*
- Valeur obligatoire
- Type : chaîne de caractères
- Moins de 256 caractères

#### Montant total de la subvention - Propriété `montant`

> *Description : Montant total de la subvention attribuée, exprimé en euros et calculé avant répartition entre les bénéficiaires dans le cas de bénéficaires multiples. Le signe de séparation entre les parties entière et décimale du nombre est le point.<br/>Ex : 47800.20*
- Valeur obligatoire
- Type : nombre réel

#### Nature de la subvention - Propriété `nature`

> *Description : Plusieurs choix possibles en combinant les valeurs 'aide en numéraire' et/ou 'aide en nature'. Les valeurs autorisées sont 'aide en numéraire', 'aide en nature', 'aide en numéraire;aide en nature', 'aide en nature;aide en numéraire'. Quand la nature de la subvention est à la fois en numéraire et en nature, le signe de séparation des valeurs est le point-virgule.<br/>Ex : aide en numéraire;aide en nature*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - aide en numéraire
    - aide en nature
    - aide en numéraire;aide en nature
    - aide en nature;aide en numéraire

#### Conditions de versement de la subvention - Propriété `conditionsVersement`

> *Description : Choix unique parmi plusieurs valeurs possibles : 'unique', 'échelonné' ou 'autre'. La valeur 'autre' correspond à une description libre des modalités de versement de la subvention dans la limite de 256 caractères maximum.<br/>Ex : échelonné*
- Valeur obligatoire
- Type : chaîne de caractères
- Moins de 256 caractères

#### Date ou période de versement - Propriété `datesPeriodeVersement`

> *Description : Si le versement est unique et que la date précise est connue, alors il s'agit d'une date au format AAAA-MM-JJ suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601). Si le versement est échelonné (ou que la date précise de versement unique est inconnue), alors il s'agit d'une période exprimée au format AAAA-MM-JJ/AAAA-MM-JJ où le séparateur entre la première et la seconde date de l'intervalle est la barre oblique suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).<br/>Ex : '2017-03-14' pour une date ou '2017-03-14/2018-03-14' pour une période*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[0-9]{4}\-[0-9]{2}\-[0-9]{2}(\/[0-9]{4}\-[0-9]{2}\-[0-9]{2})?$`

#### Identifiant RAE de l’aide au titre de laquelle la subvention est attribuée - Propriété `idRAE`

> *Description : Numéro unique de référencement dans le [Répertoire des Aides aux Entreprises](https://aides-entreprises.fr/). Ce champ ne concerne que les subventions attribuées au titre d’une aide référencée dans la [base de données du RAE](https://data.aides-entreprises.fr/documentation) gérée par l'Institut Supérieur des Métiers.<br/>Ex : 12345*
- Valeur optionnelle
- Type : chaîne de caractères
- Moins de 5 caractères

#### Aide d'Etat notifiée à la Commission Européenne - Propriété `notificationUE`

> *Description : Subvention attribuée au titre d’une aide de minimis notifiée à la Commission Européenne en vertu des dispositions du règlement n° 1407/2013 du 18 décembre 2013. Seules les valeurs 'oui' ou 'non' sont autorisées.<br/>Ex : non*
- Valeur obligatoire
- Type : booléen

#### Pourcentage du montant total de la subvention attribuée au bénéficiaire - Propriété `pourcentageSubvention`

> *Description : Pourcentage exprimé sous la forme d'un nombre décimal. Dans le cas d’un bénéficiaire unique, le pourcentage est 100%, soit '1.00' en nombre décimal. Dans le cas de bénéficiaires multiples, le pourcentage du montant attribué au bénéficiaire correspond à la part qui lui est versée : par exemple 45%, soit '0.45' en nombre décimal. Le signe de séparation entre les parties entière et décimale du nombre est le point.<br/>Ex : 0.45*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre 0.01 et 1.0