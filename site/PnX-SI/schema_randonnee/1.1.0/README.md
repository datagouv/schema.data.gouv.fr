<MenuSchema />

<MenuSchema />

# Schéma itinéraires de randonnées

Ce schéma permet de modéliser les itinéraires de randonnées afin de favoriser les échanges de données entre structures productrices et utilisatrices (communautés de communes, parcs naturels, départements...)

## Contexte

Dans le cadre du programme européen [Alcotra](https://www.interreg-alcotra.eu/fr/decouvrir-alcotra/les-projets-finances/mito-modeles-integres-pour-le-tourisme-outdoor-dans-lespace) (PITEM MITO), le Parc national des Écrins a réalisé un standard d'échange de données entre les différents partenaires français et italiens du projet. Pour cela, il a réalisé une analyse du socle commun de données permettant de définir certaines activités outdoor, dont la randonnée. Fin 2020, ce standard a été validé par les partenaires du projet Européen.

Afin d'apporter une valeur ajoutée à ce projet, début 2021, le Parc national a proposé à différents acteurs de travailler à partir de ce socle commun à la création d'un "schéma de données" concernant les itinéraires de randonnée. Ce schéma vient enrichir les schémas disponibles sur le site [schema.data.gouv.fr](https://schema.data.gouv.fr), pour permettre de publier facilement des données standardisées et interopérables en open data, notamment sur le site [data.gouv.fr](https://data.gouv.fr).

Les différents documents et compte-rendus des ateliers du groupe de travail sont disponibles dans son [dossier partagé](https://geotrek.ecrins-parcnational.fr/ressources/gt/10-schema-donnees-randonnees/).

## Périmètre

* Le schéma est un outil de partage d’un socle partagé
* Il est multi-pratiques avec les champs génériques et communs
* Il possède des champs facultatifs pour plus de flexibilité
* Il ne comprend pas les champs spécifiques à chaque pratique
* Il ne comprend pas les patrimoines associées aux randonnées
* Il ne comprend pas les services touristiques à proximité des randonnées
* Il ne comprend pas les autres activités (escalade, vol libre, eau vive...)

## Schéma

Schéma au format [JSON Schema](https://json-schema.org/), version [`draft-07`](https://json-schema.org/specification-links.html#draft-7) disponible [ici](schema.json).

Un fichier d'exemple valide avec 10 itinéraires de randonnée est disponible [ici](exemple-valide.json). L'intégralité des champs du premier itinéraire sont renseignés en guise d'exemple exhaustif.

## Attributs

| Attributs              	| Type                 	| Format 	| Obligatoire 	| Description                                                                                                   	|
|------------------------	|----------------------	|--------	|-------------	|---------------------------------------------------------------------------------------------------------------	|
| id_local               	| chaîne de caractères 	|        	| Oui         	| Identifiant de l’objet dans sa BDD source                                                                     	|
| producteur             	| chaîne de caractères 	|        	| Oui         	| Structure(s) productrice(s) de l'itinéraire                                                                   	|
| contact                	| chaîne de caractères 	| email  	| Non         	| Contact de la structure publicatrice du jeu de données                                                        	|
| uuid                   	| chaîne de caractères 	| uuid   	| Non         	| Identifiant unique de type UUID                                                                               	|
| url                    	| chaîne de caractères 	| uri    	| Non         	| URL de la fiche source de l'itinéraire                                                                        	|
| id_osm                 	| nombre entier        	|        	| Non         	| Identifiant de la relation OSM correspondante                                                                 	|
| nom_itineraire         	| chaîne de caractères 	|        	| Oui         	| Nom de l'itinéraire                                                                                           	|
| geometry               	| chaîne de caractères 	| object 	| Oui         	| Géométrie linéaire de l’itinéraire                                                                            	|
| pratique               	| chaîne de caractères 	|        	| Oui         	| Pratique de l'itinéraire (liste de valeurs contrainte)                                                                                     	|
| type_itineraire        	| chaîne de caractères 	|        	| Non         	| Type d'itinéraire (liste de valeurs contrainte)                                                                                            	|
| communes_nom           	| chaîne de caractères 	|        	| Non         	| Noms des communes traversées par l'itinéraire                                                                 	|
| communes_code          	| chaîne de caractères 	|        	| Non         	| Codes INSEE des communes traversées par l'itinéraire                                                          	|
| depart                 	| chaîne de caractères 	|        	| Oui         	| Nom du point de départ                                                                                        	|
| arrivee                	| chaîne de caractères 	|        	| Oui         	| Nom du point d'arrivée                                                                                        	|
| duree                  	| nombre réel          	|        	| Non         	| Durée de l'itinéraire en heures                                                                               	|
| balisage               	| chaîne de caractères 	|        	| Non         	| Balisage(s) utilisé(s) sur l'itinéraire                                                                       	|
| longueur               	| nombre réel          	|        	| Non         	| Longueur de l'itinéraire (en mètres)                                                                          	|
| difficulte             	| chaîne de caractères 	|        	| Non         	| Difficulté de l'itinéraire                                                                                    	|
| altitude_max           	| nombre entier        	|        	| Non         	| Altitude maximum de l'itinéraire (en mètres)                                                                  	|
| altitude_min           	| nombre entier        	|        	| Non         	| Altitude minimum de l'itinéraire (en mètres)                                                                  	|
| denivele_positif       	| nombre entier        	|        	| Non         	| Dénivelé positif de l'itinéraire (en mètres)                                                                  	|
| denivele_negatif       	| nombre entier        	|        	| Non         	| Dénivelé négatif de l'itinéraire (en mètres)                                                                  	|
| instructions           	| chaîne de caractères 	|        	| Oui         	| Description détaillée (pas à pas) du tracé de l'itinéraire                                                    	|
| presentation           	| chaîne de caractères 	|        	| Non         	| Présentation détaillée de l'itinéraire                                                                        	|
| presentation_courte    	| chaîne de caractères 	|        	| Non         	| Présentation courte résumant l'itinéraire                                                                     	|
| themes                 	| chaîne de caractères 	|        	| Non         	| Thèmes ou mots-clefs caractérisant l'itinéraire                                                               	|
| recommandations        	| chaîne de caractères 	|        	| Non         	| Recommandations sur l'itinéraire                                                                              	|
| accessibilite          	| chaîne de caractères 	|        	| Non         	| Accessibilité de l'itinéraire à des publics particuliers                                                      	|
| acces_routier          	| chaîne de caractères 	|        	| Non         	| Informations sur les accès routiers                                                                           	|
| transports_commun      	| chaîne de caractères 	|        	| Non         	| Informations sur les accès en transports en commun                                                            	|
| parking_info           	| chaîne de caractères 	|        	| Non         	| Informations sur le parking                                                                                   	|
| parking_geometrie      	| chaîne de caractères 	|        	| Non         	| Localisation du parking                                                                                       	|
| date_creation          	| chaîne de caractères 	| date   	| Non         	| Date de création de l'itinéraire dans sa BDD source (AAAA-MM-JJ)                                              	|
| date_modification      	| chaîne de caractères 	| date   	| Non         	| Date de dernière modification de l'itinéraire dans sa BDD source (AAAA-MM-JJ)                                 	|
| medias                 	| tableau              	|        	| Non         	| Médias de l’itinéraire (photos, vidéos, audios, documents) avec titre, légende, type, url, auteur et licence) 	|
| itineraire_parent      	| chaîne de caractères 	|        	| Non         	| id_local de l'itinéraire parent dans sa BDD source                                                            	|
| type_sol               	| chaîne de caractères 	|        	| Non         	| Types de sol sur lesquels se parcourt l'itinéraire                                                            	|
| pdipr_inscription      	| booléen              	|        	| Non         	| Inscription au PDIPR                                                                                          	|
| pdipr_date_inscription 	| chaîne de caractères 	| date   	| Non         	| Date d'inscription au PDIPR (AAAA-MM-JJ)                                                                      	|

Deux attributs ont des valeurs contraintes :
 - `pratique` doit être égal à "pédestre", "trail", "VTT", "cyclo", "gravel", "équestre", "ski de fond", "ski de rando", "raquettes" ou "autre"
 - `type_itineraire` doit être égal à "aller-retour", "boucle", "aller simple", "itinérance" ou "étape"

## Validateur

Un script Python permet de valider le fichier `itineraires_rando.json` exporté.

Le script et sa documentation sont disponibles dans le dossier [`/tools/2_validate_data`](/tools/2_validate_data)

## Geotrek

Si vous utilisez une base de données Geotrek, deux méthodes sont proposées pour exporter vos données de manière conforme au schéma, ainsi que pour automatiser cet export et la publication sur data.gouv.fr. Les deux méthodes sont décrites dans le dossier [`/geotrek`](/geotrek).

## Remerciements

Nous tenons à remercier les membres du groupe de travail pour leur investissement dans l'élaboration de ce schéma :

* [ADN Tourisme](https://www.adn-tourisme.fr)
* [APIDAE Tourisme](https://www.apidae-tourisme.com)
* [Apitux](http://www.apitux.com)
* [Auvergne-Rhône-Alpes Tourisme](https://www.auvergnerhonealpes-tourisme.com)
* [Conseil départemental des Alpes-de-Haute-Provence](http://www.mondepartement04.fr)
* [Conseil départemental des Côtes d'Armor](https://cotesdarmor.fr)
* [Conseil départemental des Hautes-Alpes](https://www.hautes-alpes.fr)
* [Conseil départemental du Vaucluse](https://www.vaucluse.fr)
* [DATAtourisme](https://www.datatourisme.gouv.fr)
* [Etalab](https://www.etalab.gouv.fr) / [DINUM](https://www.numerique.gouv.fr)
* [IGN](https://www.ign.fr)
* [Office français de la biodiversité](https://ofb.gouv.fr)
* [Parc national des Écrins](https://www.ecrins-parcnational.fr)
* [Parc national des Cévennes](https://www.cevennes-parcnational.fr)
* [Parc naturel régional du Luberon](https://www.parcduluberon.fr)
* [Pôle ressources national sports de nature](https://www.sportsdenature.gouv.fr)
* [Région Ligurie](https://www.regione.liguria.it)
* [Région SUD](https://www.maregionsud.fr)
