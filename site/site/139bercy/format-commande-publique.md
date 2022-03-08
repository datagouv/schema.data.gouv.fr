<MenuSchema />

# Format réglementaire pour la publication des données essentielles des marchés publics français

> v1.5.0

**Schémas du format réglementaire pour la publication des données essentielles des marchés publics français.**

L'arrêté du 14 avril 2017 relatif aux données essentielles dans la commande publique définit le cadre de l'ouverture des données des marchés publics. Ainsi, au 1er octobre, les données de tous les marchés supérieurs à 40 000 euros devront être publiées en Open Data sur le profil d'acheteur.

Ce dépôt est destiné à accueillir :

- les schémas (JSON et XML) permettant de vérifier la validité des données publiées
- des données exemples

## Les schémas

Les schémas sont conformes à l'[arrêté du 22 mars 2019](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000038318675&categorieLien=id).

- marches.json pour valider les données de marchés publics au format JSON
- marches.xsd pour valider les données de marchés au format XML
- marches-dgfip.xsd est un format dédié à la transmission des données des données du PES Marché par la DGFiP, avec des champs supplémentaires

Pour référencer ces schémas dans vos données et dans votre code informatique, voici les URL que nous vous recommandons d'utiliser :

- Toujours la dernière version :
  - JSON : https://schema.data.gouv.fr/schemas/139bercy/format-commande-publique/latest/marches.json
  - XML : non proposé pour le schéma XML ([#46](https://github.com/139bercy/format-commande-publique/issues/46#issuecomment-628710331))
- Version 1.5.0 (arrêté du 22 mars 2019) :
  - JSON : https://schema.data.gouv.fr/schemas/139bercy/format-commande-publique/1.5.0/marches.json
  - XML : https://raw.githubusercontent.com/etalab/format-commande-publique/master/marches.xsd
- Version 1.4.0 (arrêté modificatif du 27 juillet 2018) :
  - JSON : https://schema.data.gouv.fr/schemas/139bercy/format-commande-publique/1.4.0/marches.json
  - XML : https://raw.githubusercontent.com/139bercy/format-commande-publique/7655b975a208bd9f5adb7e1f9d6fa2dd5475b919/marches.xsd

## Test des schémas et des exemples

Un script de test, `test.sh`, est proposé pour tester...

- la validité des schémas XML par rapport à la spécification XML Schema 1.1
- la validité des exemples XML et JSON par rapport aux schémas XML et JSON correspondants

Pré-requis pour exécuter la suite de tests :

- bash
- libxml2-utils (pour `xmllint`)
- [ajv](https://www.npmjs.com/package/ajv-cli) (vous devez donc également installer [NodeJS et npm](https://nodejs.org/fr/))
- Java JDK (pour exécuter `xsd11-validator.jar`)

## Vos commentaires

Vos questions et commentaires sont les bienvenus [sur le forum d'Etalab](https://forum.etalab.gouv.fr/t/schemas-de-validation-des-donnees-essentielles-des-marches-publics/3141).

Si vous avez un compte Github, vous pouvez également [créer un ticket](https://github.com/139bercy/format-commande-publique/issues/new).

## Voir aussi

- [Le site Web thématique de la Direction des Affaires Juridiques du Ministère des Finances](https://www.economie.gouv.fr/daj/ouverture-des-donnees-commande-publique) et les ["Guides très pratiques" de la dématérialisation de la commande publique](https://www.economie.gouv.fr/daj/guide-tres-pratique-pour-accompagner-acheteurs-et-entreprises-sur-dematerialisation-des-marches)
- [Arrêté du 14 avril 2017 relatif aux données essentielles dans la commande publique](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000034492587&dateTexte=&categorieLien=id) (modifié par [l'arrêté du 27 juillet 2018](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000037282994&dateTexte=&categorieLien=id))
- [Arrêté modificatif du 27 juillet 2018 relatif aux données essentielles de la commande publique](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000037282994&dateTexte=&categorieLien=id)
- [Arrêté du 14 avril 2017 relatif aux fonctionnalités et exigences minimales des profils d'acheteurs](https://www.legifrance.gouv.fr/affichTexte.do;jsessionid=00B73A5DA9B3A710ABD6B312CD109476.tpdila16v_3?cidTexte=JORFTEXT000034492557&dateTexte=&oldAction=rechJO&categorieLien=id&idJO=JORFCONT000034491769)


## Notes de version

**1.5.0** (19 mai 2020)

- Mise à jour des schémas afin d'être conforme à l'arrêté du 22 mars 2019
- Migration vers 139bercy

**1.4.0** (14 mai 2020)

- Rassemblement des schémas en un seul fichier (ancien schéma "paquet")
- Suppression des référentiels et des scripts

**1.3.0** (8 octobre 2018)

- ajout du champ optionnel `uid` qui contient l'`id` du marché préfixé du SIRET de l'acheteur (et ajout de nouveaux exemples)
- ajout des tests de paquets dans le script de test

**1.2.0** (27 août 2018)

- Suppression des schémas et des références aux marchés défense et sécurité ([#32](https://github.com/139bercy/format-commande-publique/issues/32))
- Remplacement de `dateSignatureModification` par `dateNotificationModification` dans les schémas de marchés JSON et XML ([#34](https://github.com/139bercy/format-commande-publique/issues/34))
- Ajout d'un script de test des exemples JSON/XML et des schémas XML (`test.sh`) ([#2](https://github.com/139bercy/format-commande-publique/issues/2))
- *bug résolu* : Dans les schémas JSON, la date de signature de modification d'un contrat de concession et la date de notification d'une modification de marché sont maintenant des champs obligatoires
- *bug résolu* : dans le schéma XML des contrats de concession, l'objet d'une modification est maintenant limité à 256 caractères

**1.1.5** (21 août 2018)

- Propriété (invalide) `maxSize` remplacée par `maxLength` dans le schéma JSON des contrats de concessions ([#29](https://github.com/139bercy/format-commande-publique/issues/29))
- Suppression des sauts de ligne dans les schémas JSON afin de les rendre scrictement valides
- Suppression des propriétés `titulaire`, résultant de la conversion initiale depuis le XML ([#26](https://github.com/139bercy/format-commande-publique/issues/26) et [#28](https://github.com/139bercy/format-commande-publique/issues/28))

**1.1.4** (20 mars 2018)

- Harmonisation des noms de champs pour les identifiants d'acheteur/concessionnaire (remplacement de "siret" par "id" dans les schémas des concessions)


**1.1.3** (9 mars 2018)

- Harmonisation des libellés des codes de lieu

**1.1.2** (21 février 2018)

- Allongement du champ identifiant de marché afin d'accueillir le numéro d'ordre de modification prévu dans l'article 1 de l'arrêté ([voir #22](/139bercy/format-commande-publique/issues/22))
- Mise à jour et résolution de problèmes dans les fichiers exemples

**1.1.1** (1er février 2018)

- Résolution d'un bug dans le schéma XML des paquets

**1.1.0** (2 octobre 2017)

- Ajout du type de document ["paquet"](https://github.com/139bercy/format-commande-publique/tree/master/exemples/xml) via l'élément `marches` dans le format XML pour publier plusieurs marchés, de différent types, dans un même fichier XML
- Exemples : remplacement de l'URL des schémas pour une URL absolue, et non relative

**1.0.2** (29 septembre 2017)

- Correction : le champ `montantSubventionPublique` avait été appelé `montantAvantagesFinanciers`
- Correction : les `ìd` des schémas JSON utilisaient des URN, au lieu d'URI
- Correction : la version 2017_1 des référentiels n'était en fait pas la dernière. Se référer au [texte en ligne](https://www.legifrance.gouv.fr/affichTexte.do?$)

**1.0.1** (18 juillet 2017)

- Correction : le champ `dateSignatureModification` avait été oublié dans les schémas JSON et XML, et dans les exemples
- Correction : le champ `donneesExecution` était mal écrit dans un des exemples XML
- Correction : la clé `description` de l'objet `id` était en double dans le schéma JSON des marchés défense et sécurité
- Suppression de la balise \<\_type> dans les schémas et exemples XML
- Mise à jour des liens dans le README
_
**1.0.0** (2 mai 2017)

- Ajout du concept de "paquet" via l'array `marches` dans le format JSON pour publier plusieurs marchés, de différent types, dans un même fichier JSON
- Ajout de la propriété `_type` dans le format JSON pour distinguer le type de marché (marché public, marché défense et sécurité, contrat de concession)

**0.4.0** (13 janvier 2016)

**1.0.0** (2 mai 2017)

- Ajout des liens vers les arrêtés publiés
- Ajout du schéma "paquet" pour les données JSON, permettant d'avoir plusieurs marchés/contrats de concessions dans un même fichier.
- La même fonctionnalité sera bientôt disponible pour les données XML

**0.4.0** (13 janvier 2017)

- Création de quelques données exemples en JSON et XML
- Quelques changements esthétiques dans les référentiels

**0.3.1** (30 décembre 2016)

- Bug réglé : oubli de l'identification de l'acheteur dans le schéma des marchés défense et sécurité
- Bug réglé : la structure du schéma des contrats de concession était invalide
- La propriété `donneesExecution` doit être présente, mais peut être une liste vide
- Remplacement des apostrophes ’ par des apostrophes '

**0.3.0** (27 décembre 2016)

- mise à jour des schémas et des référentiels pour coller à l'arrêté relatif aux données essentielles, version **13/12/2016**

**0.2.1** (9 novembre 2016)

- ajout de liens autour de la spécification JSON Schema ([ici](https://github.com/139bercy/format-commande-publique/tree/master/json-schema))
- correction de coquilles

**0.2.0** (28 octobre 2016)

- mise à jour des schémas pour coller à l'arrêté relatif aux données essentielles, version **28/10/2016**
- Ajout d'information dans le README

**0.1.0** (13 septembre 2016)

- schémas pour les marchés publics, les marchés de défense ou de sécurité, et les concessions
- schémas JSON conformes à la norme **JSON Schema draft v4**
- pas (encore) de tests du schéma
