---
permalink: /scdl/adresses/latest.html
redirect_from: /scdl/adresses/1.1.4.html
title: Base adresse locale
version: 1.1.4
---

# Base adresse locale

Spécification du modèle de données relatif aux adresses locales d’une collectivité (BAL)

## Contexte

En France, la création des voies et des adresses est une compétence exercée par les communes et s'appuie sur des décisions prises par les conseils municipaux. La mise en oeuvre de cette compétence peut néanmoins être déléguée à un [Etablissement Public de Coopération Intercommunale](https://fr.wikipedia.org/wiki/%C3%89tablissement_public_de_coop%C3%A9ration_intercommunale) (EPCI). Le regroupement de tout ou partie des adresses d’une collectivité dans une base de données permet d'outiller la gestion et la publication de cette ressource.

En 2016, dans le cadre du [groupe de travail "SIG et Topographie"](http://www.aitf.fr/groupe-travail/sig-topographie) rassemblant des ingénieurs territoriaux de différentes collectivités locales, l’Association des Ingénieurs Territoriaux de France (AITF) a défini un modèle d'échange de données entre les bases voie-adresse gérées localement et la Base Adresse Nationale (BAN). En l'absence d'un cadre réglementaire précis, cette spécification d'un modèle de données simple applicable à une Base Adresse Locale (BAL) permet de standardiser la publication en open data des adresses d'une collectivité.

La spécification SCDL du modèle de données relatif aux adresses locales d’une collectivité a donc été élaborée à partir de la proposition d’un [modèle de données simple visant à alimenter la BAN par des fichiers](https://cms.geobretagne.fr/sites/default/files/documents/aitf-sig-topo-adresse-fichier-echange-simplifie-v_1.1_0.pdf) de l'AITF. Si nécessaire, elle sera mise à jour, adaptée et consolidée à partir de cette même source.

#### Avertissement !

L'utilisation de cette spécification requiert de prêter une attention toute particulière aux points suivants :

* Contrairement aux recommandations applicables à toutes les spécifications SCDL, le modèle de l'AITF prévoit que le séparateur de colonnes du fichier tabulaire doit être le point-virgule et pas la virgule.
* De même, les règles de nommage sont légèrement différentes : le nom du fichier comporte la date de création du jeu de données, la désignation du producteur et son code SIREN. Le tout sans espace ni accent et en minuscules, soit : AAAAMMJJ\_producteur\_siren.csv. Exemple : '20151004\_rennes\_213502388.csv'

## Voir aussi

La spécification du modèle de données peut être utilement complétée par les documents suivants :

* [Fichier gabarit à télécharger au format xlsx](https://scdl.opendatafrance.net/docs/templates/adresses.xlsx)
* [Schéma de validation](https://git.opendatafrance.net/scdl/adresses/blob/master/schema.json)

Pour faciliter la production et améliorer la qualité des données au format Base Adresse Locale, la mission Etalab de la DINSIC, met à disposition des outils dédiés sur le portail adresse.data.gouv.fr :

* [Le validateur BAL](https://adresse.data.gouv.fr/bases-locales/validateur) permet de vérifier la conformité d'un fichier BAL
* [L'éditeur BAL](https://adresse.data.gouv.fr/bases-locales/editeur) permet de créer et/ou de modifier un fichier BAL

Les sources de ces outils sont disponibles sur le [dépôt Github de la mission Etalab](https://github.com/etalab/adresse.data.gouv.fr).

Pour poser une question, commenter, faire un retour d’usage ou contribuer à l’amélioration du modèle de données, vous pouvez :

* adresser un message à [scdl@opendatafrance.email](mailto:scdl@opendatafrance.email?subject=Base%20Adresse%20Locale)
* ouvrir un ticket sur le [dépôt GitLab d’OpenDataFrance](https://git.opendatafrance.net/scdl/adresses/issues)