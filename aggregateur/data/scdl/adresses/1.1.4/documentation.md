---
permalink: /scdl/adresses/latest/documentation.html
redirect_from: /scdl/adresses/1.1.4/documentation.html
title: Documentation de Base adresse locale
version: 1.1.4
---

## adresses

Base adresse locale

Spécification du modèle de données relatif aux adresses locales d’une collectivité (BAL)

- Schéma créé le : 30/05/2018
- Site web : https://git.opendatafrance.net/scdl/adresses
- Version : 1.1.4

### Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|cle_interop (Clé d'interopérabilité)|chaîne de caractères|Cette clé combine le [code INSEE de la commune](https://fr.wikipedia.org/wiki/Code_Insee) sur 5 caractères (incluant 'A' ou 'B' pour la Corse) + le code de voie issu du [FANTOIR](https://fr.wikipedia.org/wiki/FANTOIR) de la DGFiP sur 4 caractères + le numéro d’adresse sur 5 caractères préfixé par des zéros + un suffixe s'il existe, qui peut être un indice de répétition ('bis', 'ter', 'qua', 'qui', etc... codés sur 3 caractères) et/ou un complément ('a', 'b', 'c', 'a1', 'b2', 'lesmimosas', etc... sans limitation du nombre de caractères). Chaque élément est séparé par un tiret du bas et les lettres sont en minuscule.|35238_3961_00007_bis|Valeur obligatoire, Taille minimale : 16, Motif : `^[A-Za-z0-9_]+$`|
|uid_adresse (Identifiant unique national d’adresse)|chaîne de caractères (format `uuid`)|Cet identifiant unique d’adresse est géré et attribué par le service "guichet national d’identification" de la Base Adresse Nationale. Dans l'attente de la mise en place de ce service, les règles de création ou de gestion de cet identifiant ne sont pas connues. La valeur de ce champ est donc optionnelle et sera laissée vide aussi longtemps que le service d'identification ne sera pas opérationnel.|||
|voie_nom (Nom complet de la voie)|chaîne de caractères|Ce champ contient la concaténation du type et du nom de la voie ou le nom d'un lieu-dit, exprimés en majuscules et minuscules accentuées.|'Allée de Bréhat' pour une concaténation ou 'Le pré aux grenouilles' pour un lieu-dit|Valeur obligatoire, Taille minimale : 3, Motif : `^[a-zA-Z0-9\-\'\s\d\u00C0-\u00FF]+$`|
|numero (Numéro d’adresse)|nombre entier|Numéro d’adresse dans la voie et, dans le cas des voies sans adresse, la valeur “99999” est attendue|130|Valeur obligatoire, Valeur minimale : 0, Valeur maximale : 99999|
|suffixe (Information suffixée qui complète et précise le numéro d’adresse)|chaîne de caractères|Cette information peut être un indice de répétition ('bis', 'ter', 'qua', 'qui', etc... codés sur 3 caractères en minuscules) ou un complément comme le nom d'entrée d'immeuble ('a', 'b', 'c', 'a1', 'b2', 'lesmimosas', etc... codés en minuscules non accentuées, sans espace ni limite du nombre de caractères).|'ter' pour un indice de répétition ou 'lesmimosas' pour un nom d'entrée d'immeuble|Motif : `^[a-z\d\u00DF-\u00FF]+$`|
|commune_nom (Nom officiel de la commune)|chaîne de caractères|Ce champ doit permettre d’identifier rapidement le territoire concerné et d'éviter les quiproquos.|Brest|Valeur obligatoire, Motif : `^[A-Za-z\s\-\u00C0-\u00FF]+$`|
|position (Code de position de l’adresse)|chaîne de caractères|Ce code décrit la position d’une adresse à partir d’une liste de valeurs qui provient de la spécification INSPIRE v 3.1 sur le thème "Adresses". Les valeurs attendues sont, au choix, 'délivrance postale', 'entrée', 'bâtiment', 'cage d’escalier', 'logement', 'parcelle', 'segment', ou 'service technique'.|cage d’escalier|Valeur obligatoire, Valeurs autorisées : délivrance postale, entrée, bâtiment, cage d’escalier, logement, parcelle, segment, service technique|
|x (Coordonnée X)|nombre réel|Coordonnée X du système légal en vigueur sur le territoire concerné, conformément à l’article 1 du [décret n° 2006-272](https://www.legifrance.gouv.fr/jo_pdf.do?id=JORFTEXT000000813996) du 3 mars 2006. Le signe de séparation entre les parties entière et décimale du nombre est le point.|145377.5||
|y (Coordonnée Y)|nombre réel|Coordonnée Y du système légal en vigueur sur le territoire concerné, conformément à l’article 1 du [décret n° 2006-272](https://www.legifrance.gouv.fr/jo_pdf.do?id=JORFTEXT000000813996) du 3 mars 2006. Le signe de séparation entre les parties entière et décimale du nombre est le point.|6835665.67||
|long (Longitude)|nombre réel|Coordonnée de longitude exprimée en [WGS 84](https://fr.wikipedia.org/wiki/WGS_84). Le signe de séparation entre les parties entière et décimale du nombre est le point.|-4.502217943385534||
|lat (Latitude)|nombre réel|Coordonnée de latitude exprimée en [WGS 84](https://fr.wikipedia.org/wiki/WGS_84). Le signe de séparation entre les parties entière et décimale du nombre est le point.|48.383985827041485||
|source (Nom de la source)|chaîne de caractères|Ce nom peut désigner, au choix, la collectivité ayant créé juridiquement l’adresse (par délibération), l'entité ayant créé la donnée, ou l’entité ayant diffusé / publié la donnée.|Rennes Métropole|Valeur obligatoire, Motif : `[a-zA-Z0-9\-\d\s\u00C0-\u00FF]+`|
|date_der_maj (Date de dernière mise à jour)|date|Cette date est celle de la dernière mise à jour connue de la donnée. Elle ne correspond pas à la date de publication du jeu de données en open data. Elle est exprimée au format AAAA-MM-JJ suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).|2014-10-01|Valeur obligatoire|