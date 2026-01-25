<MenuSchema />

<MenuSchema />

# Schéma menus restauration collective

Ce schéma permet de décrire la composition des menus proposés par les collectivités locales ou les syndicats mixtes de restauration. Il s'attache à permettre de détailler la compositions des menus en listant les différents plats qui les composent et d'indiquer des éléments descriptifs relatifs à l'origine des plats. 
Pour un jour donné, les producteurs de données doivent donc détailler sur autant de lignes que nécessaire chacun des plats qui composent le menu du jour. Ils peuvent ainsi pour chaque plat détailler les origines (SIQO et labels), les régimes ou textures associées, les convives destinataires ou le prix théorique de chaque plat.

La tracabilité des données est assurée par 3 champs permettant d'indiquer la date de première publication, celle d'éventuelle modification et un champ permettant d'indiquer les motifs d'éventuelles mises à jour.

## Contexte

Cette initiative vide à standardiser la publication des jeux de données relatifs aux offres de restauration collective. Elle concerne la restauration scolaire mais peut s'étendre aux offres de restauration pour les personnes âgées, les restaurants administratifs ou les centres de loisirs. Elle s'articule autour des notions de menus, et des plats qui les composent. 
Elle doit permettre de garantir l'interopérabilité entre les données produites au sein de chaque territoire et d'offrir aux éditeurs de logiciels de gestion un cadre de référence facilitant l'export de leurs données en open data.

Un schéma complémentaire est dédié à la composition des plats permettant pour ceux qui le souhaitent de décire les produits et nutriments qui entrent dans la composition des plats. Les 2 schémas sont liés par une clé commune "codePlat" (respectivement menuPlatCode et platCode).


## Documents de cadrage juridique

* [Loi n°2018-938 du 30 octobre 2018](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000037547946/#JORFARTI000037547961) pour l'équilibre des relations commerciales dans le secteur agricole et alimentaire et une alimentation saine, durable et accessible à tous.
* [Décret n°1227-2011](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000024614716/) relatif à la qualité nutritionnelle des repas servis en restauration scolaire.
* [Recommandations du GEMRCN](https://www.economie.gouv.fr/daj/recommandation-nutrition) (Groupe d'Etude des Marchés de la Restauration Collective et Nutrition,
* [Réglement (UE) n°1169/2011](https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2011:304:0018:0063:FR:PDF) concernant l'information des consommateurs sur les denrées alimentaires (réglement INCO).
* [Règlement (UE) n°1169/2011](https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2011:304:0018:0063:FR:PDF) concernant l’information du consommateur sur les denrées alimentaires et notamment ses articles 9, 21, 44 et l’annexe II sur les substances ou produits provoquant des allergies ou intolérances.
* [Décret n°2015-447 du 17 avril 2015](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000019735750) relatif à l’information des consommateurs sur les allergènes et les denrées alimentaires non préemballées.        

## Outils

* [![](https://scdl.opendatafrance.net/docs/assets/validata-logo-horizontal.png)](https://go.validata.fr/table-schema?schema_name=scdl.menus-collectifs) [Valider un fichier avec Validata](http://go.validata.fr/table-schema?schema_name=scdl.menus-collectifs)
* [Créer un fichier avec CSV Good Generator](https://csv-gg.etalab.studio/?schema=scdl)
* [Télécharger un fichier gabarit au format XLSX](https://git.opendatafrance.net/scdl/menus-collectifs/-/raw/master/examples/menus-collectifs_valide.xlsx?inline=false)


## Voir aussi

* adresser un message à [scdl@opendatafrance.email](mailto:scdl@opendatafrance.email?subject=menus-collectifs)
* ouvrir un ticket sur le [dépôt GitLab d’OpenDataFrance](https://git.opendatafrance.net/scdl/menus-collectifs/issues)
    