<MenuSchema />

<MenuSchema />

# Catalogue simplifié

Spécification du modèle de données relatif au catalogue des jeux de données publiés en open data par une collectivité

## Contexte

Le catalogue opendata d'une collectivité rassemble les métadonnées de description des jeux de données qu'elle publie. Il peut être généré automatiquement par la plateforme qui les héberge ou qui les moissonne. Plusieurs standards permettent de normaliser les métadonnées d'un catalogue \(INSPIRE pour les données géographiques, DCAT et ses déclinaisons pour tout type de données ouvertes\), mais les catalogues locaux, lorsqu'ils existent, qu'ils soient exposés via une API ou extraits sous forme de fichiers, dépendent souvent de la capacité technique de la solution utilisée et de son paramétrage \(formats différents, plus ou moins riches ou étendus, en fonction de la plateforme, catalogue unique et pas pour chaque producteur quand la plateforme est mutualisée, distinction ou non entre jeux de données et ressources, etc\). Sans compter que de nombreuses collectivités utilisent de simples sites web pour mettre à disposition leurs données.

La spécification d'un modèle de données simplifié doit permettre d'harmoniser ces catalogues locaux dans un format accessible à toutes les collectivités et faciliter leur consolidation dans un inventaire national, le "catalogue des catalogues des données locales ouvertes".

Cette spécification a été élaborée à partir des sources suivantes :

* [Guide de saisie des éléments de métadonnées INSPIRE](http://cnig.gouv.fr/wp-content/uploads/2014/01/Guide-de-saisie-des-%C3%A9l%C3%A9ments-de-m%C3%A9tadonn%C3%A9es-INSPIRE-v1.1-final-light.pdf) - Recommandation du Conseil National de l'Information Géographique \(2013\)
* [Guide de mise en oeuvre du schéma DCAT-AP](https://docs.google.com/document/d/1qMDqBjrTJVu3t9RH94aLSW7Z3jhH1SjoBrWhW9PZkJ4/) rédigé par Pascal Romain du Département de la Gironde pour OpenDataFrance à partir du draft final de la spécification de la Commission Européenne \(2014\)
* [Data Catalog Vocabulary \(DCAT\)](https://www.w3.org/TR/vocab-dcat/) - Recommandation W3C relative au vocabulaire des catalogues de données publiés sur le web \(2014\)
* [DCAT Application Profile for data portals in Europe](https://joinup.ec.europa.eu/solution/dcat-application-profile-data-portals-europe/releases) \([DCAT-AP v1.1](https://github.com/SEMICeu/DCAT-AP/raw/master/releases/1.1/dcat-ap_1.1.pdf) en 2015 et [DCAT-AP v1.2](https://joinup.ec.europa.eu/sites/default/files/distribution/access_url/2018-11/014bde52-eb3c-4060-8c3c-fcd0dfc07a8a/DCAT_AP_1.2.pdf) en 2018\) - Spécification de la Commission Européenne, basée sur le vocabulaire DCAT, visant à décrire les jeux de données du secteur public en Europe, également disponible sur le [dépôt Github de l'initiative SEMICeu](https://github.com/SEMICeu/DCAT-AP)

## Outils

* [![](https://scdl.opendatafrance.net/docs/assets/validata-logo-horizontal.png)](https://go.validata.fr/table-schema?schema_name=scdl.catalogue) [Valider un fichier avec Validata](https://go.validata.fr/table-schema?schema_name=scdl.catalogue)
* [Créer un fichier avec CSV Good Generator](https://csv-gg.etalab.studio/?schema=scdl%2Fcatalogue)
* [Télécharger un fichier gabarit au format XLSX](https://scdl.opendatafrance.net/docs/templates/catalogue.xlsx)

## Voir aussi

Pour poser une question, commenter, faire un retour d’usage ou contribuer à l’amélioration du modèle de données, vous pouvez :

* adresser un message à [scdl@opendatafrance.email](mailto:scdl@opendatafrance.email?subject=Catalogue%20simplifié)
* ouvrir un ticket sur le [dépôt GitLab d’OpenDataFrance](https://git.opendatafrance.net/scdl/catalogue/issues/new)
