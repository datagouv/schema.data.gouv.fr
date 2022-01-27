(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{593:function(e,t,r){"use strict";r.r(t);var a=r(44),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("MenuSchema"),e._v(" "),r("h1",{attrs:{id:"schema-itineraires-de-randonnees"}},[e._v("Schéma itinéraires de randonnées")]),e._v(" "),r("p",[e._v("Ce schéma permet de modéliser les itinéraires de randonnées afin de favoriser les échanges de données entre structures productrices et utilisatrices (communautés de communes, parcs naturels, départements...)")]),e._v(" "),r("h2",{attrs:{id:"contexte"}},[e._v("Contexte")]),e._v(" "),r("p",[e._v("Dans le cadre du programme européen "),r("a",{attrs:{href:"https://www.interreg-alcotra.eu/fr/decouvrir-alcotra/les-projets-finances/mito-modeles-integres-pour-le-tourisme-outdoor-dans-lespace",target:"",rel:"noopener noreferrer"}},[e._v("Alcotra")]),e._v(" (PITEM MITO), le Parc national des Écrins a réalisé un standard d'échange de données entre les différents partenaires français et italiens du projet. Pour cela, il a réalisé une analyse du socle commun de données permettant de définir certaines activités outdoor, dont la randonnée. Fin 2020, ce standard a été validé par les partenaires du projet Européen.")]),e._v(" "),r("p",[e._v("Afin d'apporter une valeur ajoutée à ce projet, début 2021, le Parc national a proposé à différents acteurs de travailler à partir de ce socle commun à la création d'un \"schéma de données\" concernant les itinéraires de randonnée. Ce schéma vient enrichir les schémas disponibles sur le site "),r("a",{attrs:{href:"https://schema.data.gouv.fr",target:"",rel:"noopener noreferrer"}},[e._v("schema.data.gouv.fr")]),e._v(", pour permettre de publier facilement des données standardisées et interopérables en open data, notamment sur le site "),r("a",{attrs:{href:"https://data.gouv.fr",target:"",rel:"noopener noreferrer"}},[e._v("data.gouv.fr")]),e._v(".")]),e._v(" "),r("p",[e._v("Les différents documents et compte-rendus des ateliers du groupe de travail sont disponibles dans son "),r("a",{attrs:{href:"https://geotrek.ecrins-parcnational.fr/ressources/gt/10-schema-donnees-randonnees/",target:"",rel:"noopener noreferrer"}},[e._v("dossier partagé")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"perimetre"}},[e._v("Périmètre")]),e._v(" "),r("ul",[r("li",[e._v("Le schéma est un outil de partage d’un socle partagé")]),e._v(" "),r("li",[e._v("Il est multi-pratiques avec les champs génériques et communs")]),e._v(" "),r("li",[e._v("Il possède des champs facultatifs pour plus de flexibilité")]),e._v(" "),r("li",[e._v("Il ne comprend pas les champs spécifiques à chaque pratique")]),e._v(" "),r("li",[e._v("Il ne comprend pas les patrimoines associées aux randonnées")]),e._v(" "),r("li",[e._v("Il ne comprend pas les services touristiques à proximité des randonnées")]),e._v(" "),r("li",[e._v("Il ne comprend pas les autres activités (escalade, vol libre, eau vive...)")])]),e._v(" "),r("h2",{attrs:{id:"schema"}},[e._v("Schéma")]),e._v(" "),r("p",[e._v("Schéma au format "),r("a",{attrs:{href:"https://json-schema.org/",target:"",rel:"noopener noreferrer"}},[e._v("JSON Schema")]),e._v(", version "),r("a",{attrs:{href:"https://json-schema.org/specification-links.html#draft-7",target:"",rel:"noopener noreferrer"}},[r("code",[e._v("draft-07")])]),e._v(" disponible "),r("a",{attrs:{href:"https://github.com/PnX-SI/schema_randonnee/raw/master/schema.json",target:"",rel:"noopener noreferrer"}},[e._v("ici")]),e._v(".")]),e._v(" "),r("p",[e._v("Un fichier d'exemple valide avec 10 randonnées est disponible "),r("a",{attrs:{href:"https://github.com/PnX-SI/schema_randonnee/raw/v1.0.2/exemple-valide.json",target:"",rel:"noopener noreferrer"}},[e._v("ici")]),e._v(". L'intégralité des champs du premier itinéraire sont renseignés en guise d'exemple exhaustif.")]),e._v(" "),r("h2",{attrs:{id:"attributs"}},[e._v("Attributs")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Attributs")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Format")]),e._v(" "),r("th",[e._v("Obligatoire")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("id_local")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Oui")]),e._v(" "),r("td",[e._v("Identifiant de l’objet dans sa BDD source")])]),e._v(" "),r("tr",[r("td",[e._v("producteur")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Oui")]),e._v(" "),r("td",[e._v("Structure(s) productrice(s) de l'itinéraire")])]),e._v(" "),r("tr",[r("td",[e._v("contact")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td",[e._v("email")]),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Contact de la structure publicatrice du jeu de données")])]),e._v(" "),r("tr",[r("td",[e._v("uuid")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td",[e._v("uuid")]),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Identifiant unique de type UUID")])]),e._v(" "),r("tr",[r("td",[e._v("url")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td",[e._v("uri")]),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("URL de la fiche source de l'itinéraire")])]),e._v(" "),r("tr",[r("td",[e._v("id_osm")]),e._v(" "),r("td",[e._v("nombre entier")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Identifiant de la relation OSM correspondante")])]),e._v(" "),r("tr",[r("td",[e._v("nom_itineraire")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Oui")]),e._v(" "),r("td",[e._v("Nom de l'itinéraire")])]),e._v(" "),r("tr",[r("td",[e._v("geometry")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td",[e._v("object")]),e._v(" "),r("td",[e._v("Oui")]),e._v(" "),r("td",[e._v("Géométrie linéaire de l’itinéraire")])]),e._v(" "),r("tr",[r("td",[e._v("pratique")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Oui")]),e._v(" "),r("td",[e._v("Pratique de l'itinéraire")])]),e._v(" "),r("tr",[r("td",[e._v("type_itineraire")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Type d'itinéraire")])]),e._v(" "),r("tr",[r("td",[e._v("communes_nom")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Noms des communes traversées par l'itinéraire")])]),e._v(" "),r("tr",[r("td",[e._v("communes_code")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Codes INSEE des communes traversées par l'itinéraire")])]),e._v(" "),r("tr",[r("td",[e._v("depart")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Oui")]),e._v(" "),r("td",[e._v("Nom du point de départ")])]),e._v(" "),r("tr",[r("td",[e._v("arrivee")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Oui")]),e._v(" "),r("td",[e._v("Nom du point d'arrivée")])]),e._v(" "),r("tr",[r("td",[e._v("duree")]),e._v(" "),r("td",[e._v("nombre réel")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Durée de l'itinéraire en heures")])]),e._v(" "),r("tr",[r("td",[e._v("balisage")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Balisage(s) utilisé(s) sur l'itinéraire")])]),e._v(" "),r("tr",[r("td",[e._v("longueur")]),e._v(" "),r("td",[e._v("nombre réel")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Longueur de l'itinéraire (en mètres)")])]),e._v(" "),r("tr",[r("td",[e._v("difficulte")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Difficulté de l'itinéraire")])]),e._v(" "),r("tr",[r("td",[e._v("altitude_max")]),e._v(" "),r("td",[e._v("nombre entier")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Altitude maximum de l'itinéraire (en mètres)")])]),e._v(" "),r("tr",[r("td",[e._v("altitude_min")]),e._v(" "),r("td",[e._v("nombre entier")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Altitude minimum de l'itinéraire (en mètres)")])]),e._v(" "),r("tr",[r("td",[e._v("denivele_positif")]),e._v(" "),r("td",[e._v("nombre entier")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Dénivelé positif de l'itinéraire (en mètres)")])]),e._v(" "),r("tr",[r("td",[e._v("denivele_negatif")]),e._v(" "),r("td",[e._v("nombre entier")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Dénivelé négatif de l'itinéraire (en mètres)")])]),e._v(" "),r("tr",[r("td",[e._v("instructions")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Oui")]),e._v(" "),r("td",[e._v("Description détaillée (pas à pas) du tracé de l'itinéraire")])]),e._v(" "),r("tr",[r("td",[e._v("presentation")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Présentation détaillée de l'itinéraire")])]),e._v(" "),r("tr",[r("td",[e._v("presentation_courte")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Présentation courte résumant l'itinéraire")])]),e._v(" "),r("tr",[r("td",[e._v("themes")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Thèmes ou mots-clefs caractérisant l'itinéraire")])]),e._v(" "),r("tr",[r("td",[e._v("recommandations")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Recommandations sur l'itinéraire")])]),e._v(" "),r("tr",[r("td",[e._v("accessibilite")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Accessibilité de l'itinéraire à des publics particuliers")])]),e._v(" "),r("tr",[r("td",[e._v("acces_routier")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Informations sur les accès routiers")])]),e._v(" "),r("tr",[r("td",[e._v("transports_commun")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Informations sur les accès en transports en commun")])]),e._v(" "),r("tr",[r("td",[e._v("parking_info")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Informations sur le parking")])]),e._v(" "),r("tr",[r("td",[e._v("parking_geometrie")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Localisation du parking")])]),e._v(" "),r("tr",[r("td",[e._v("date_creation")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td",[e._v("date")]),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Date de création de l'itinéraire dans sa BDD source (AAAA-MM-JJ)")])]),e._v(" "),r("tr",[r("td",[e._v("date_modification")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td",[e._v("date")]),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Date de dernière modification de l'itinéraire dans sa BDD source (AAAA-MM-JJ)")])]),e._v(" "),r("tr",[r("td",[e._v("medias")]),e._v(" "),r("td",[e._v("tableau")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Médias de l’itinéraire (photos, vidéos, audios, documents) avec titre, légende, type, url, auteur et licence)")])]),e._v(" "),r("tr",[r("td",[e._v("itineraire_parent")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("id_local de l'itinéraire parent dans sa BDD source")])]),e._v(" "),r("tr",[r("td",[e._v("type_sol")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Types de sol sur lesquels se parcourt l'itinéraire")])]),e._v(" "),r("tr",[r("td",[e._v("pdipr_inscription")]),e._v(" "),r("td",[e._v("booléen")]),e._v(" "),r("td"),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Inscription au PDIPR")])]),e._v(" "),r("tr",[r("td",[e._v("pdipr_date_inscription")]),e._v(" "),r("td",[e._v("chaîne de caractères")]),e._v(" "),r("td",[e._v("date")]),e._v(" "),r("td",[e._v("Non")]),e._v(" "),r("td",[e._v("Date d'inscription au PDIPR (AAAA-MM-JJ)")])])])]),e._v(" "),r("h2",{attrs:{id:"validateur"}},[e._v("Validateur")]),e._v(" "),r("p",[e._v("Un script Node.js permet de valider le fichier "),r("code",[e._v("itineraires_rando.json")]),e._v(" exporté.")]),e._v(" "),r("p",[e._v("Le script et sa documentation sont disponibles dans le dossier "),r("a",{attrs:{href:"https://github.com/PnX-SI/schema_randonnee/tree/master/local_validator",target:"",rel:"noopener noreferrer"}},[r("code",[e._v("/local_validator")])])]),e._v(" "),r("h2",{attrs:{id:"geotrek"}},[e._v("Geotrek")]),e._v(" "),r("p",[e._v("Si vous utilisez une base de données Geotrek, le dossier "),r("a",{attrs:{href:"https://github.com/PnX-SI/schema_randonnee/tree/master/geotrek",target:"",rel:"noopener noreferrer"}},[r("code",[e._v("/geotrek")])]),e._v(" contient une vue SQL permettant d'exporter les données conformes au schéma, ainsi qu'un script pour automatiser et valider cet export.")]),e._v(" "),r("h2",{attrs:{id:"remerciements"}},[e._v("Remerciements")]),e._v(" "),r("p",[e._v("Nous tenons à remercier les membres du groupe de travail pour leur investissement dans l'élaboration de ce schéma :")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.adn-tourisme.fr",target:"",rel:"noopener noreferrer"}},[e._v("ADN Tourisme")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.apidae-tourisme.com",target:"",rel:"noopener noreferrer"}},[e._v("APIDAE Tourisme")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.apitux.com",target:"",rel:"noopener noreferrer"}},[e._v("Apitux")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.auvergnerhonealpes-tourisme.com",target:"",rel:"noopener noreferrer"}},[e._v("Auvergne-Rhône-Alpes Tourisme")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.mondepartement04.fr",target:"",rel:"noopener noreferrer"}},[e._v("Conseil départemental des Alpes-de-Haute-Provence")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://cotesdarmor.fr",target:"",rel:"noopener noreferrer"}},[e._v("Conseil départemental des Côtes d'Armor")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.hautes-alpes.fr",target:"",rel:"noopener noreferrer"}},[e._v("Conseil départemental des Hautes-Alpes")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.vaucluse.fr",target:"",rel:"noopener noreferrer"}},[e._v("Conseil départemental du Vaucluse")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.datatourisme.gouv.fr",target:"",rel:"noopener noreferrer"}},[e._v("DATAtourisme")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.etalab.gouv.fr",target:"",rel:"noopener noreferrer"}},[e._v("Etalab")]),e._v(" / "),r("a",{attrs:{href:"https://www.numerique.gouv.fr",target:"",rel:"noopener noreferrer"}},[e._v("DINUM")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.ign.fr",target:"",rel:"noopener noreferrer"}},[e._v("IGN")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://ofb.gouv.fr",target:"",rel:"noopener noreferrer"}},[e._v("Office français de la biodiversité")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.ecrins-parcnational.fr",target:"",rel:"noopener noreferrer"}},[e._v("Parc national des Écrins")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.cevennes-parcnational.fr",target:"",rel:"noopener noreferrer"}},[e._v("Parc national des Cévennes")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.parcduluberon.fr",target:"",rel:"noopener noreferrer"}},[e._v("Parc naturel régional du Luberon")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.sportsdenature.gouv.fr",target:"",rel:"noopener noreferrer"}},[e._v("Pôle ressources national sports de nature")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.regione.liguria.it",target:"",rel:"noopener noreferrer"}},[e._v("Région Ligurie")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.maregionsud.fr",target:"",rel:"noopener noreferrer"}},[e._v("Région SUD")])])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);