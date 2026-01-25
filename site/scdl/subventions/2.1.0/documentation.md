<MenuSchema />

<MenuSchema />

## subventions

Subventions

Spécification du modèle de données relatif aux subventions attribuées par une collectivité

- Schéma créé le : 27/04/2018
- Site web : https://git.opendatafrance.net/scdl/subventions
- Version : 2.0.2

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [nomAttribuant](#nom-de-l-attribuant-propriete-nomattribuant) | chaîne de caractères  | Oui |
| [idAttribuant](#identification-de-l-attribuant-propriete-idattribuant) | chaîne de caractères  | Oui |
| [dateConvention](#date-de-la-convention-de-subvention-propriete-dateconvention) | date  | Oui |
| [referenceDecision](#reference-de-la-decision-propriete-referencedecision) | chaîne de caractères  | Non |
| [nomBeneficiaire](#nom-du-beneficiaire-propriete-nombeneficiaire) | chaîne de caractères  | Oui |
| [idBeneficiaire](#identification-siret-du-beneficiaire-propriete-idbeneficiaire) | chaîne de caractères  | Non |
| [rnaBeneficiaire](#identification-rna-du-beneficiaire-propriete-rnabeneficiaire) | chaîne de caractères  | Non |
| [objet](#objet-de-la-subvention-propriete-objet) | chaîne de caractères  | Oui |
| [montant](#montant-total-de-la-subvention-propriete-montant) | nombre réel  | Oui |
| [nature](#nature-de-la-subvention-propriete-nature) | chaîne de caractères  | Oui |
| [conditionsVersement](#conditions-de-versement-de-la-subvention-propriete-conditionsversement) | chaîne de caractères  | Oui |
| [datesPeriodeVersement](#date-ou-periode-de-versement-propriete-datesperiodeversement) | chaîne de caractères  | Oui |
| [idRAE](#identifiant-rae-de-l'aide-au-titre-de-laquelle-la-subvention-est-attribuee-propriete-idrae) | chaîne de caractères  | Non |
| [notificationUE](#aide-d-etat-notifiee-a-la-commission-europeenne-propriete-notificationue) | booléen  | Oui |
| [pourcentageSubvention](#pourcentage-du-montant-total-de-la-subvention-attribuee-au-beneficiaire-propriete-pourcentagesubvention) | nombre réel  | Oui |
| [dispositifAide](#identifiant-referencant-le-dispositif-d-aide-a-l-origine-de-la-subvention-propriete-dispositifaide) | chaîne de caractères  | Non |

#### Nom de l'attribuant - Propriété `nomAttribuant`

> *Description : Nom officiel de la collectivité attribuant la subvention.*<br/>*Exemple : Région Bretagne*
- Valeur obligatoire
- Type : chaîne de caractères

#### Identification de l'attribuant - Propriété `idAttribuant`

> *Description : Identifiant du [Système d'Identification du Répertoire des Etablissements](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_%C3%A9tablissements) (SIRET) de la collectivité attribuant la subvention, composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant.*<br/>*Exemple : 23350001600040*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Date de la convention de subvention - Propriété `dateConvention`

> *Description : Date de la convention au format AAAA-MM-JJ suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).*<br/>*Exemple : 2017-06-27*
- Valeur obligatoire
- Type : date

#### Référence de la décision - Propriété `referenceDecision`

> *Description : Identifiant interne de l’acte matérialisant la décision d’attribution de la subvention. Sa composition dépend des pratiques propres à la collectivité.*<br/>*Exemple : 2017-03-103*
- Valeur optionnelle
- Type : chaîne de caractères

#### Nom du bénéficiaire - Propriété `nomBeneficiaire`

> *Description : Nom officiel ou raison sociale du bénéficiaire de la subvention.*<br/>*Exemple : Association Les Petits Débrouillards Bretagne*
- Valeur obligatoire
- Type : chaîne de caractères

#### Identification SIRET du bénéficiaire - Propriété `idBeneficiaire`

> *Description : Identifiant du [Système d'Identification du Répertoire des Etablissements](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_%C3%A9tablissements) (SIRET) du bénéficiaire de la subvention, composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant. Dans le cadre précis d'une subvention en nature pour une association, il est possible de ne pas renseigner de SIRET. Il faudra alors renseigner le champ rnaBeneficiaire.*<br/>*Exemple : 38047555800058*
- Valeur optionnelle
- Type : chaîne de caractères

#### Identification RNA du bénéficiaire - Propriété `rnaBeneficiaire`

> *Description : Numéro d'identification RNA [Répertoire National des Associations](https://associations.gouv.fr/le-rna-repertoire-national-des-associations.html) du bénéficiaire de la subvention, débutant par 'W' et composé de 9 chiffres*<br/>*Exemple : W380475558*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^W\d{9}$`

#### Objet de la subvention - Propriété `objet`

> *Description : Description de l'objet de la subvention attribuée limitée à 256 caractères maximum.*<br/>*Exemple : Animations climat-énergie dans les lycées de la région*
- Valeur obligatoire
- Type : chaîne de caractères
- Moins de 256 caractères

#### Montant total de la subvention - Propriété `montant`

> *Description : Montant total de la subvention attribuée, exprimé en euros et calculé avant répartition entre les bénéficiaires dans le cas de bénéficaires multiples. Le signe de séparation entre les parties entière et décimale du nombre est le point.*<br/>*Exemple : 47800.20*
- Valeur obligatoire
- Type : nombre réel

#### Nature de la subvention - Propriété `nature`

> *Description : Plusieurs choix possibles en combinant les valeurs 'aide en numéraire' et/ou 'aide en nature'. Les valeurs autorisées sont 'aide en numéraire', 'aide en nature', 'aide en numéraire;aide en nature', 'aide en nature;aide en numéraire'. Quand la nature de la subvention est à la fois en numéraire et en nature, le signe de séparation des valeurs est le point-virgule.*<br/>*Exemple : aide en numéraire;aide en nature*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `aide en numéraire`
    - `aide en nature`
    - `aide en numéraire;aide en nature`
    - `aide en nature;aide en numéraire`

#### Conditions de versement de la subvention - Propriété `conditionsVersement`

> *Description : Choix unique parmi plusieurs valeurs possibles : 'unique', 'échelonné' ou 'autre'. La valeur 'autre' correspond à une description libre des modalités de versement de la subvention dans la limite de 256 caractères maximum.*<br/>*Exemple : échelonné*
- Valeur obligatoire
- Type : chaîne de caractères
- Moins de 256 caractères

#### Date ou période de versement - Propriété `datesPeriodeVersement`

> *Description : Si le versement est unique et que la date précise est connue, alors il s'agit d'une date au format AAAA-MM-JJ suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601). Si le versement est échelonné (ou que la date précise de versement unique est inconnue), alors il s'agit d'une période exprimée au format AAAA-MM-JJ/AAAA-MM-JJ où le séparateur entre la première et la seconde date de l'intervalle est la barre oblique suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).*<br/>*Exemple : 2017-03-14/2018-03-14*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[0-9]{4}\-[0-9]{2}\-[0-9]{2}(\/[0-9]{4}\-[0-9]{2}\-[0-9]{2})?$`

#### Identifiant RAE de l’aide au titre de laquelle la subvention est attribuée - Propriété `idRAE`

> *Description : Numéro unique de référencement dans le [Répertoire des Aides aux Entreprises](https://aides-entreprises.fr/). Ce champ ne concerne que les subventions attribuées au titre d’une aide référencée dans la [base de données du RAE](https://data.aides-entreprises.fr/documentation) gérée par l'Institut Supérieur des Métiers.*<br/>*Exemple : 12345*
- Valeur optionnelle
- Type : chaîne de caractères
- Moins de 5 caractères

#### Aide d'Etat notifiée à la Commission Européenne - Propriété `notificationUE`

> *Description : Subvention attribuée au titre d’une aide de minimis notifiée à la Commission Européenne en vertu des dispositions du règlement n° 1407/2013 du 18 décembre 2013. Seules les valeurs 'oui' ou 'non' sont autorisées.*<br/>*Exemple : non*
- Valeur obligatoire
- Type : booléen

#### Pourcentage du montant total de la subvention attribuée au bénéficiaire - Propriété `pourcentageSubvention`

> *Description : Pourcentage exprimé sous la forme d'un nombre décimal. Dans le cas d’un bénéficiaire unique, le pourcentage est 100%, soit '1.00' en nombre décimal. Dans le cas de bénéficiaires multiples, le pourcentage du montant attribué au bénéficiaire correspond à la part qui lui est versée : par exemple 45%, soit '0.45' en nombre décimal. Le signe de séparation entre les parties entière et décimale du nombre est le point.*<br/>*Exemple : 0.45*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre 0.01 et 1

#### Identifiant référençant le dispositif d'aide à l'origine de la subvention - Propriété `dispositifAide`

> *Description : Identifiant présent dans les données issues du [schéma des dispositifs d'aide](https://schema.data.gouv.fr/etalab/schema-dispositif-aide/). Il peut être utilisé à la place de l'identifiant `idRAE` qui ne concerne que les aides aux entreprises.*<br/>*Exemple : 65d5b6c7-102c-4440-ac3b-768f708edc0a*
- Valeur optionnelle
- Type : chaîne de caractères
