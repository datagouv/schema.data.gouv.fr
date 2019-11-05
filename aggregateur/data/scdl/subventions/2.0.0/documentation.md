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

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|nomAttribuant (Nom de l'attribuant)|chaîne de caractères|Nom officiel de la collectivité attribuant la subvention.|Région Bretagne|Valeur obligatoire|
|idAttribuant (Identification de l'attribuant)|chaîne de caractères|Identifiant du [Système d'Identification du Répertoire des Etablissements](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_%C3%A9tablissements) (SIRET) de la collectivité attribuant la subvention, composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant.|23350001600040|Valeur obligatoire, Motif : `^\d{14}$`|
|dateConvention (Date de la convention de subvention)|date|Date de la convention au format AAAA-MM-JJ suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).|2017-06-27|Valeur obligatoire|
|referenceDecision (Référence de la décision)|chaîne de caractères|Identifiant interne de l’acte matérialisant la décision d’attribution de la subvention. Sa composition dépend des pratiques propres à la collectivité.|2017-03-103||
|nomBeneficiaire (Nom du bénéficiaire)|chaîne de caractères|Nom officiel ou raison sociale du bénéficiaire de la subvention.|Association Les Petits Débrouillards Bretagne|Valeur obligatoire|
|idBeneficiaire (Identification du bénéficiaire)|chaîne de caractères|Identifiant du [Système d'Identification du Répertoire des Etablissements](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_%C3%A9tablissements) (SIRET) du bénéficiaire de la subvention, composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant.|38047555800058|Valeur obligatoire, Motif : `^\d{14}$`|
|objet (Objet de la subvention)|chaîne de caractères|Description de l'objet de la subvention attribuée limitée à 256 caractères maximum.|Animations climat-énergie dans les lycées de la région|Valeur obligatoire, Taille maximale : 256|
|montant (Montant total de la subvention)|nombre réel|Montant total de la subvention attribuée, exprimé en euros et calculé avant répartition entre les bénéficiaires dans le cas de bénéficaires multiples. Le signe de séparation entre les parties entière et décimale du nombre est le point.|47800.20|Valeur obligatoire|
|nature (Nature de la subvention)|chaîne de caractères|Plusieurs choix possibles en combinant les valeurs 'aide en numéraire' et/ou 'aide en nature'. Les valeurs autorisées sont 'aide en numéraire', 'aide en nature', 'aide en numéraire;aide en nature', 'aide en nature;aide en numéraire'. Quand la nature de la subvention est à la fois en numéraire et en nature, le signe de séparation des valeurs est le point-virgule.|aide en numéraire;aide en nature|Valeur obligatoire, Valeurs autorisées : aide en numéraire, aide en nature, aide en numéraire;aide en nature, aide en nature;aide en numéraire|
|conditionsVersement (Conditions de versement de la subvention)|chaîne de caractères|Choix unique parmi plusieurs valeurs possibles : 'unique', 'échelonné' ou 'autre'. La valeur 'autre' correspond à une description libre des modalités de versement de la subvention dans la limite de 256 caractères maximum.|échelonné|Valeur obligatoire, Taille maximale : 256|
|datesPeriodeVersement (Date ou période de versement)|chaîne de caractères|Si le versement est unique et que la date précise est connue, alors il s'agit d'une date au format AAAA-MM-JJ suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601). Si le versement est échelonné (ou que la date précise de versement unique est inconnue), alors il s'agit d'une période exprimée au format AAAA-MM-JJ/AAAA-MM-JJ où le séparateur entre la première et la seconde date de l'intervalle est la barre oblique suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).|'2017-03-14' pour une date ou '2017-03-14/2018-03-14' pour une période|Valeur obligatoire, Motif : `^[0-9]{4}\-[0-9]{2}\-[0-9]{2}(\/[0-9]{4}\-[0-9]{2}\-[0-9]{2})?$`|
|idRAE (Identifiant RAE de l’aide au titre de laquelle la subvention est attribuée)|chaîne de caractères|Numéro unique de référencement dans le [Répertoire des Aides aux Entreprises](https://aides-entreprises.fr/). Ce champ ne concerne que les subventions attribuées au titre d’une aide référencée dans la [base de données du RAE](https://data.aides-entreprises.fr/documentation) gérée par l'Institut Supérieur des Métiers.|12345|Taille maximale : 5|
|notificationUE (Aide d'Etat notifiée à la Commission Européenne)|booléen|Valeurs considérées comme vraies : ['oui']Valeurs considérées comme fausses : ['non']Subvention attribuée au titre d’une aide de minimis notifiée à la Commission Européenne en vertu des dispositions du règlement n° 1407/2013 du 18 décembre 2013. Seules les valeurs 'oui' ou 'non' sont autorisées.|non|Valeur obligatoire|
|pourcentageSubvention (Pourcentage du montant total de la subvention attribuée au bénéficiaire)|nombre réel|Pourcentage exprimé sous la forme d'un nombre décimal. Dans le cas d’un bénéficiaire unique, le pourcentage est 100%, soit '1.00' en nombre décimal. Dans le cas de bénéficiaires multiples, le pourcentage du montant attribué au bénéficiaire correspond à la part qui lui est versée : par exemple 45%, soit '0.45' en nombre décimal. Le signe de séparation entre les parties entière et décimale du nombre est le point.|0.45|Valeur obligatoire, Valeur minimale : 0.01, Valeur maximale : 1.0|