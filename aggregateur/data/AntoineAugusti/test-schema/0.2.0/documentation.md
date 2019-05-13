---
homepage: https://github.com/AntoineAugusti/vacances-scolaires
permalink: /AntoineAugusti/test-schema/0.2.0/documentation.html
redirect_from: null
title: Vacances scolaires en France
version: 0.2.0
---

## Vacances scolaires en France

description!

- Auteur : Antoine Augusti <antoine.augusti@gmail.com>
- Schéma créé le : 12/20/18
- Site web : https://github.com/AntoineAugusti/vacances-scolaires
- Version : 0.2.0
- Clé primaire : `date`

### Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|date|date (format `%Y-%m-%d`)|Date|2018-01-01||
|vacances_zone_a|booléen|Est-ce que la zone A est en vacances à cette date|true, false||
|vacances_zone_b|booléen|Est-ce que la zone B est en vacances à cette date|true, false||
|vacances_zone_c|booléen|Est-ce que la zone C est en vacances à cette date|true, false||
|nom_vacances|chaîne de caractères|Si au moins une des zones est en vacances, le nom des vacances|true, false||