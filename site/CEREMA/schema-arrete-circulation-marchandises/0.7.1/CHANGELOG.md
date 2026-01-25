<MenuSchema />

<MenuSchema />

# Changelog

## v0.7.1
- Supprime le pattern pour `GEOM_WKT`
- Supprime le pattern pour `PERIODE_JH`
- Simplifie la description de `ID`
- Modifie le type de `REGL_ARTICLE` en `string`
- Met les différentes valeurs de `VEH_TYPES` dans la description

## v0.7.0
- Valeurs multiples possibles pour `ARR_CONSIDERANT` (ex. de Martigues 06.2018)
- Ajoute le champ `GEOM_DEBUT`
- Ajoute le champ `GEOM_FIN`

## v0.6.1
- Renomme `ARR_INSEE` en `COLL_INSEE`
- Renomme `VEH_PTAC` en `VEH_TONNAGE`
- Champs mis dans un autre ordre (ex, `COLL_INSEE` après `COLL_NOM`, `EMPRISE_SENS` après `EMPRISE_FIN`)
- Support de `POLYGON` pour `GEOM_WKT` (Cas de communes entières ou de quartiers sur lesquels s'appliquerait la règlementation)

## v0.6.0
- Suppression du champ `COLL_SIRET`
- Ajout de lien vers l'assistant pour le champ `PERIODE_JH` vers https://cerema-med.shinyapps.io/groom-groom
- Mention du schéma sur les ZFE pour le champ `EMPRISE_DESIGNATION`
- Description simplifiée pour le champ `GEOM_WKT`

## v0.5.0 (retour enquête + réunion, simplification du schéma)
- Renommage du schéma en arrete-circulation-marchandises
- `ARR_DATE_CREATION` devient `ARR_DATE`
- Suppression de `ARR_DATE_MAJ`
- Suppression de `ZONE_TYPE`
- Suppression de `ZONE_REF`
- Correction de la regex de `VEH_TYPE`
- Suppression de la regex pattern de `VEH_USAGE`
- `SECTION_VOIE` devient `EMPRISE_DESIGNATION` (englobe les voies et les communes entières)
- `SECTION_SENS` devient `EMPRISE_SENS`
- `SECTION_DEBUT_*` devient `EMPRISE_DEBUT`
- `SECTION_FIN_*` devient `EMPRISE_FIN`
- Suppression de `GEOM_JSON`
- Regex pattern pour `GEOM_WKT`
- `VEH_TYPE` devient `VEH_TYPES`
- `VEH_MOTOR` devient `VEH_MOTORS`
- `VEH_USAGE` devient `VEH_USAGES`
- `VEH_CQA` devient `VEH_CQAS`

## v0.4.1
- Ajoute la regex SIRET
- Remplace la valeur `N/C` par la valeur `NC`, plus simple, si pas de valeur
- Choix du délimiteur `|` pour séparer des valeurs. Ex : `"(?:(?:^|\\|)^(Poids lourds|Véhicules utilitaires légers|Vélo-cargos|Tous véhicules))+$"`
- Modifie la regex de `SECTION_VOIE` pour inclure les parenthèses (par ex. `Avenue Nelson Mandela (RD59c)`)
- Supprime `NC` des `missingValues`
- Ajoute la regex `((?:(?:^|;\s?)(((((Mo|Tu|We|Th|Fr|Sa|Su|PH|SH)|(?:(?:|,)(Mo|Tu|We|Th|Fr|Sa|Su))+|((Mo|Tu|We|Th|Fr|Sa|Su)-(Mo|Tu|We|Th|Fr|Sa|Su))))\s((([0-1][0-9]|2[0-4]):([0-5][0-9]))-(([0-1][0-9]|2[0-4]):([0-5][0-9]))(,(([0-1][0-9]|2[0-4]):([0-5][0-9]))-(([0-1][0-9]|2[0-4]):([0-5][0-9])))?))|((Mo|Tu|We|Th|Fr|Sa|Su|PH|SH) off)|(sunrise-sunset)))+$|(24\/7))` pour le format Opening Hours utilisé dans le champ `PERIODE_JH`

## v0.4.0 (corrections Etalab)
- Corrections apportées par Geoffrey Aldebert sur les regexes du schema.json
- Ajout d'un exemple valide dans resources
- Intégration continue OK
- Regex pour `ARR_INSEE`
- Format `uri` pour `ARR_URL`
- Regex multivalues sur le modèle de `(?:(?:^|,)^(Poids lourds|Véhicules utilitaires légers|Vélo-cargos|Tous véhicules))+$`
- Nouveaux usages pour `VEH_USAGE`
- Ajout de pattern pour `PERIODE_JH` : `(.*?)((\\d{1,2}:\\d{2})-(\\d{1,2}:\\d{2})|24/7)`
- `ID` Primary Key

## v0.3.3 (enrichissement des usages)
- Ajout de ressources (`sources`)
- Ajout de Julie Raffaillac dans les contributeurs
- Ajout de Vélo-cargos dans `VEH_TYPE`
- Ajout de valeurs dans `VEH_USAGE`

		- Citernes                                                                                                   
		- Véhicules d'approvisionnement des marchés                                                                                               
		- Véhicules effectuant du transport exceptionnel au sens de l'article R.433-1 du code de la route et munis d'une autorisation préfectorale
		- Véhicules de transport de matériaux
		- Véhicules porte-voitures
- Ajout de valeurs dans `VEH_CQA`
- Renommage de `SECTION_COTE` en `SECTION_SENS`
- Ajout de Nord, Sud, Est, Ouest dans `SECTION_SENS`

## v0.3.2
- Ajout de valeur `Autocars` dans `VEH_USAGE`
- Ajout de valeur `Transport de denrées animales ou végétales` dans `VEH_USAGE`

## v0.3.1
- Renommage de `SECTION_REGL_ID` renommé en `ID`
- Ajout de Véhicules de travaux dans `VEH_USAGE`
- Réordonnancement des champs `ARR_*`

## v0.3.0

Publication sur le repo github du Cerema en vue de [schema.data.gouv.fr](http://schema.data.gouv.fr/)

- Modification des types des champs `VEH_USAGE`, `VEH_MOTOR`, `VEH_CQA` de **array** vers **string** avec regex pattern 'Séparation par caractère `|`' car questionnement sur prise en charge du type **array** par la plateforme de publication et de validation des données d'Etalab
- Ajout de champ `SECTION_DEBUT_POINT`
- Ajout de champ `SECTION_DEBUT_REF`
- Ajout de champ `SECTION_FIN_POINT`
- Ajout de champ `SECTION_FIN_REF`

## v0.2.3

[Voir sur OpenDataFrance](https://opendatafrance.gitbook.io/fablog/territoires/chantiers/partage-des-donnees/standardisation/arretes-de-circulation#changelog)

## v0.2.2

[Voir sur OpenDataFrance](https://opendatafrance.gitbook.io/fablog/territoires/chantiers/partage-des-donnees/standardisation/arretes-de-circulation#changelog)

## v0.2.1

[Voir sur OpenDataFrance](https://opendatafrance.gitbook.io/fablog/territoires/chantiers/partage-des-donnees/standardisation/arretes-de-circulation#changelog)

## v0.2.0

Intégration du schéma sur le gitbook d'OpenDataFrance et revue par Jean-Marie Bourgogne

[Voir sur OpenDataFrance](https://opendatafrance.gitbook.io/fablog/territoires/chantiers/partage-des-donnees/standardisation/arretes-de-circulation#changelog)

## v0.1.0
[Première proposition du schéma sur framapad](https://lite.framacalc.org/9ms6-schema-circulation)
