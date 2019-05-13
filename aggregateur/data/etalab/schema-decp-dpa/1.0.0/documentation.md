---
homepage: https://github.com/etalab/schema-decp-dpa
permalink: /etalab/schema-decp-dpa/latest/documentation.html
redirect_from: /etalab/schema-decp-dpa/1.0.0/documentation.html
title: Spécification du fichier de déclaration de profil d'acheteur
version: 1.0.0
---

## Spécification du fichier de déclaration de profil d'acheteur

Spécification du fichier de déclaration de profil d'acheteur

- Auteur : Alexandre Bulté pour Etalab
- Schéma créé le : 02/18/19
- Site web : https://github.com/etalab/schema-decp-dpa
- Données d'exemple : https://github.com/etalab/schema-decp-dpa/blob/master/exemple-valide.csv
- Version : 1.0.0

### Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|siretAcheteur|chaîne de caractères|Le numéro SIRET de l'acheteur|79248336400024|Valeur obligatoire, Valeur unique, Motif : `^\d{14}$`|
|urlProfilAcheteur|chaîne de caractères (format `uri`)|L'adresse URL du profil d'acheteur|http://monacheteur.com/profil|Valeur obligatoire|
|urlDCAT|chaîne de caractères (format `uri`)|L’adresse URL du catalogue DCAT qui répertorie les données|http://dcat.monacheteur.com/catalog.ttl|Valeur optionnelle|
|coordonnees|chaîne de caractères|Les coordonnées de l'acheteur concerné|Service Achat, DINSIC, 20 avenue de Ségur, 75007 Paris|Valeur obligatoire|