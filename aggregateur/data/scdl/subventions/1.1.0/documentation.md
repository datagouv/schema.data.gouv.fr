---
permalink: /scdl/subventions/1.1.0/documentation.html
redirect_from: null
title: Schéma SCDL Subventions
version: 1.1.0
---

## Schéma SCDL Subventions

Schéma validant le format relatif aux subventions du SCDL (Socle Commun des Données Locales).

- Auteur : OpenDataFrance
- Schéma créé le : 04/27/18
- Site web : https://git.opendatafrance.net/scdl/subventions
- Version : 1.1

### Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|nomAttribuant (Nom de l'attribuant)|chaîne de caractères|Nom officiel de l'organisme attribuant la subvention|Région Bretagne|Valeur obligatoire|
|idAttribuant (Identification de l'attribuant)|chaîne de caractères|Identifiant du Système d'Identification du Répertoire des Etablissements (SIRET)|23350001600040|Valeur obligatoire, Motif : `^\d{14}$`|
|dateConvention (Date de la convention de subvention)|date|Date de la convention au format AAAA-MM-JJ (ISO 8601)|2017-06-27|Valeur obligatoire|
|referenceDecision (Référence de la décision)|chaîne de caractères|Identifiant interne de l’acte matérialisant la décision d’attribution de la subvention|Z34507|Valeur optionnelle|
|nomBeneficiaire (Nom du bénéficiaire)|chaîne de caractères|Nom officiel (raison sociale) du bénéficiaire de la subvention|Rodriguez SA|Valeur obligatoire|
|idBeneficiaire (Identification du bénéficiaire)|chaîne de caractères|Identifiant du Système d'Identification du Répertoire des Etablissements (SIRET)|81223113200026|Valeur obligatoire, Motif : `^\d{14}$`|
|objet (Objet de la subvention)|chaîne de caractères|Description de l'objet de la subvention|Aide à l'embauche|Valeur obligatoire, Taille maximale : 256|
|montant (Montant total de la subvention)|nombre réel|Montant total de la subvention avant répartition entre les bénéficiaires|22000.80|Valeur obligatoire|
|nature (Nature de la subvention)|chaîne de caractères|Liste de plusieurs choix possibles séparés par des point-virgules|aide en numéraire;aide en nature|Valeur obligatoire, Valeurs autorisées : aide en numéraire, aide en nature, aide en numéraire;aide en nature, aide en nature;aide en numéraire|
|conditionsVersement (Conditions de versement de la subvention)|chaîne de caractères|Description des conditions de versement de la subvention. Valeur parmi 'unique', 'échelonné' ou texte libre.||Valeur obligatoire, Taille maximale : 256|
|datesPeriodeVersement (Date ou période de versement)|chaîne de caractères|Si le versement est unique et que la date précise est connue, alors il s'agit d'une date au format AAAA-MM-JJ (ISO 8601). Si le versement est échelonné (ou que la date précise de versement unique est inconnue), alors il s'agit d'une période exprimée au format AAAA-MM-JJ/AAAA-MM-JJ (ISO 8601).|2017-12-14|Valeur obligatoire, Motif : `^[0-9]{4}\-[0-9]{2}\-[0-9]{2}(\/[0-9]{4}\-[0-9]{2}\-[0-9]{2})?$`|
|idRAE (Numéro unique de référencement dans le Répertoire des Aides aux Entreprises)|chaîne de caractères|Numéro unique RAE communiqué par le service aides-entreprises.fr|12345|Valeur optionnelle|
|notificationUE (Aide d'Etat notifiée à la Commission européenne)|booléen|Valeurs considérées comme vraies : ['oui']Valeurs considérées comme fausses : ['non']Booléen : oui ou non|oui|Valeur obligatoire|
|pourcentageSubvention (Pourcentage du montant total de la subvention attribuée au bénéficiaire)|nombre réel|Pourcentage exprimé sous la forme d'un nombre avec un point comme séparateur de décimales|0.8|Valeur obligatoire, Valeur minimale : 0, Valeur maximale : 1|