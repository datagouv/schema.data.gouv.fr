<MenuSchema />

# Schéma itinéraires de randonnées

Ce schéma permet de modéliser les itinéraires de randonnées afin de favoriser les échanges de données entre structures productrices et utilisatrices (communautés de communes, parcs naturels, départements...).

## Contexte

Dans le cadre du programme européen [Alcotra](https://www.interreg-alcotra.eu/fr/decouvrir-alcotra/les-projets-finances/mito-modeles-integres-pour-le-tourisme-outdoor-dans-lespace) (PITEM MITO), le Parc national des Écrins est mandaté afin de réaliser un standard d'échange de données entre les différents partenaires français et italiens. Pour cela, il a réalisé une analyse du socle commun de données permettant de définir certaines activités outdoor, dont la randonnée. Fin 2020, ce standard a été validé par les partenaires du projet Européen. La présentation de ce référentiel est accessible : https://geotrek.ecrins-parcnational.fr/ressources/presentations/2020-11-PITEM-MITO-Outdoor-Data-Presentation-socle-commun.pdf

Afin d'apporter une valeur ajoutée à ce projet, le Parc national souhaite travailler à partir de ce socle commun à la création d'un "schéma de données" concernant les itinéraires de randonnée. À terme, il est envisagé que ce schéma vienne enrichir les schémas disponibles sur le site https://schema.data.gouv.fr/, ce qui permettait de publier facilement des données standardisées et interopérables en open data, notamment sur le site data.gouv.fr.

# Partie ci-dessous non mise à jour avec le JSON Schema

## Schéma

Schéma au format [JSON Schema](https://json-schema.org/), version `[draft-07](https://json-schema.org/specification-links.html#draft-7)` disponible [ici](https://github.com/PnX-SI/schema_randonnee/blob/master/schema.json).

Un fichier d'exemple valide avec 10 randonnées est disponible [ici](https://github.com/PnX-SI/schema_randonnee/blob/master/exemple-valide.csv). Le premier itinéraire a l'intégralité de ses champs remplis en guise d'exemple exhaustif.

Un modèle de donnée csv est diponible, ainsi qu'une requête SQL de création d'une table conforme au schéma.


## Geotrek

Le Parc national des Écrins et le Parc national des Cévennes, entre autres, utilisent l'application [Geotrek](https://github.com/GeotrekCE) pour gérer leurs itinéraires de randonnée et les publier sur leur site internet. Une vue PostgreSQL est disponible dans le dossier `SQL`, elle permet de formater des itinéraires issus de Geotrek pour qu'ils soient compatibles avec le schéma de données.

De nombreuses clauses `CASE WHEN` sont spécifiques aux données du Parc national des Cévennes à partir desquelles cette vue a été créée. Des choix arbitraires ont été faits, par exemple pour la conversion de l'échelle de difficultés du parc dans les échelles de difficulté du schéma. Il est nécessaire d'adapter cette vue selon la construction des données Geotrek de votre structure.

Vue compatible avec `PostgreSQL 10.16` / `PostGIS 2.4` / `Geotrek-admin 2.??`

Un script shell `export_geojson.sh` permet :

* d'exporter les données de la vue `v_treks_schema` au format GeoJSON avec `ogr2ogr v??`



## Remerciements

Nous tenons à remercier les membres du groupe de travail pour leur investissement dans l'élaboration de ce schéma :

* [ADN Tourisme](https://www.adn-tourisme.fr/)
* [APIDAE Tourisme](https://www.apidae-tourisme.com/)
* [Apitux](http://www.apitux.com/)
* [April](https://www.april.org/)
* [Auvergne-Rhône-Alpes Tourisme](https://www.auvergnerhonealpes-tourisme.com/)
* [Conseil départemental des Côtes d'Armor](https://cotesdarmor.fr/)
* [Conseil départemental des Hautes-Alpes](https://www.hautes-alpes.fr/)
* [Conseil départemental du Vaucluse](https://www.vaucluse.fr/)
* [DATAtourisme](https://www.datatourisme.gouv.fr/)
* [Etalab](https://www.etalab.gouv.fr/) / [DINUM](https://www.numerique.gouv.fr/)
* [IGN](https://www.ign.fr/)
* [Parc national des Écrins](https://www.ecrins-parcnational.fr/)
* [Parc national des Cévennes](https://www.cevennes-parcnational.fr/)
* [Parc naturel régional du Luberon](https://www.parcduluberon.fr/)
* [Région Ligurie](https://www.regione.liguria.it/)
* [Région SUD](https://www.maregionsud.fr/)