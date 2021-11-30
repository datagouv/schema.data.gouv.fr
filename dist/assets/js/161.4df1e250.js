(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{652:function(e,s,t){"use strict";t.r(s);var n=t(44),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("MenuSchema"),e._v(" "),t("h1",{attrs:{id:"schema-de-donnees-d-amenagements-cyclables"}},[e._v("Schéma de données d'aménagements cyclables")]),e._v(" "),t("p",[e._v("Schéma des aménagements cyclables.\nCe schéma permet de modéliser et définir les aménagements cyclables sur le territoire national.")]),e._v(" "),t("h2",{attrs:{id:"contexte"}},[e._v("Contexte")]),e._v(" "),t("p",[e._v("Dans le cadre des travaux de l’équipe du Point d’accès national et de la mise en oeuvre de l’ouverture des données pour améliorer l’information dont disposent les voyageurs, l’équipe de transport.data.gouv.fr, en collaboration avec l'association Vélo & Territoires, propose une solution simple et structurée pour l’ouverture des données sur les aménagements cyclables : la Base Nationale des Aménagements Cyclables (BNAC).")]),e._v(" "),t("p",[e._v("Le schéma de la base de données a été co-construit avec Vélo & Territoires, les producteurs de données et les réutilisateurs. Cinq ateliers ouverts (le 14/04/2020, le 8/06/2020, le 27/06/2019, le 8/07/2020 et le 27/08/2020) ont permis sa production. Il a été établi après une enquête et plusieurs réunions du groupe de travail.")]),e._v(" "),t("h2",{attrs:{id:"cadre-juridique"}},[e._v("Cadre juridique")]),e._v(" "),t("p",[e._v("L’ouverture des données sur les aménagements cyclables nécessaires à l’information voyageur est une obligation légale, définie par le règlement délégué (UE) 2017/1926 concernant la mise à disposition de services d’informations sur les déplacements multimodaux. Le règlement statue la création d’un Point d’Accès National par pays membre ainsi que la mise à disposition des données nécéssaires à l’information voyageur sur celui-ci. Le règlement exige la mise à disposition des données concernant les caractéristiques du réseau cyclable à échéance du 1er décembre 2019.")]),e._v(" "),t("p",[e._v("Ces obligations sont précisées en droit français par la loi d’orientation des mobilités (LOM). Elle désigne les collectivités territoriales comme étant responsables de la mise à disposition des données sur la plateforme transport.data.gouv.fr, qui constitue le Point d’Accès National des données de mobilité pour la France.\nLes collectivités ont la responsabilité de transmettre les données existantes les plus complètes possibles.")]),e._v(" "),t("h2",{attrs:{id:"finalite"}},[e._v("Finalité")]),e._v(" "),t("p",[e._v("Afin de faciliter la réutilisation et réduire le coût d’intégration de ces données dans des services tiers, un schéma a été défini afin d’assurer une harmonisation de ces données sur l’ensemble du territoire. Ce schéma définit des informations indispensables et complémentaires à fournir par le producteur. Cette distinction a été mise en place pour ne pas pénaliser les petits producteurs de données, et définit un standard minimal de complétude des données. Il est toutefois demandé aux producteurs de données de compléter le schéma avec le plus grand niveau de détail possible, afin de transmettre une information plus riche à l’usager final. La base des aménagements cyclables permet ainsi de regrouper en un unique fichier consolidé l’ensemble des infrastructures cyclables.")]),e._v(" "),t("p",[e._v("La base présente plusieurs cas d’usage :\nElle recense les aménagements cyclables d’une collectivité en permettant à des services de calcul d’itinéraire d’intégrer ces données. Cela permet notamment à ces services de proposer des itinéraires favorisant la mobilité douce à leurs usagers. Elle peut servir également à favoriser l'usage du vélo dans les plans de mobilité des entreprises.")]),e._v(" "),t("p",[e._v("Ce dataset comprend notamment :")]),e._v(" "),t("ul",[t("li",[e._v("le code INSEE de la commune ;")]),e._v(" "),t("li",[e._v("la géolocalisation des aménagements cyclables ;")]),e._v(" "),t("li",[e._v("le type d'aménagement cyclable ;")]),e._v(" "),t("li",[e._v("la vitesse de circulation des véhicules motorisés dans le trafic adjacent.")])]),e._v(" "),t("p",[e._v("Attention : ce dataset ne concerne pas le stationnement cyclable. Vous trouverez le schéma national pour le stationnement cyclable "),t("a",{attrs:{href:"https://schema.data.gouv.fr/etalab/schema-stationnement-cyclable/latest.html",target:"",rel:"noopener noreferrer"}},[e._v("ici")])]),e._v(" "),t("h2",{attrs:{id:"format-de-fichier"}},[e._v("Format de fichier")]),e._v(" "),t("p",[e._v("Les jeux de données seront publiés au format GeoJSON. Certains champs sont obligatoires et d'autres optionnels. Les champs obligatoires doivent être complétés. Les champs optionnels peuvent être vides si la donnée n’est pas disponible. La colonne doit toutefois être présente.")]),e._v(" "),t("p",[e._v("Les producteurs pourront saisir leurs données sur :")]),e._v(" "),t("ul",[t("li",[e._v("des outils internes ;")]),e._v(" "),t("li",[e._v("OpenStreetMap (OSM);")]),e._v(" "),t("li",[e._v("les outils développés par Vélo & Territoires à savoir,")]),e._v(" "),t("li",[e._v("un "),t("a",{attrs:{href:"https://on3v.veremes.net/vmap/?mode_id=vmap&map_id=31&token=publictoken#",target:"",rel:"noopener noreferrer"}},[e._v("WebSIG")]),e._v(" ;")]),e._v(" "),t("li",[e._v("Un "),t("a",{attrs:{href:"https://github.com/etalab/schema-amenagements-cyclables/blob/master/tools/AC_TEMPLATE_SHP_QGIS.zip",target:"",rel:"noopener noreferrer"}},[e._v("gabarit au format shapefile")]),e._v(" pour QGIS ;")]),e._v(" "),t("li",[e._v("Un "),t("a",{attrs:{href:"https://github.com/etalab/schema-amenagements-cyclables/blob/master/tools/AC_SQL_POSTGIS.zip",target:"",rel:"noopener noreferrer"}},[e._v("script SQL pour la création d’une base de données Postgres/PostGIS")]),e._v(" « vierge ».")])]),e._v(" "),t("p",[e._v("Ces outils sont hébérgés dans le dossier "),t("a",{attrs:{href:"https://github.com/etalab/schema-amenagements-cyclables/tree/master/tools",target:"",rel:"noopener noreferrer"}},[e._v("tools")]),e._v(" de ce repo. Pour une demande d'accès au WebSIG ou toute autre question sur ces outils, vous pouvez contacter Fabien Commeaux de Vélo & Territoires à cette adresse : fabien.commeaux@velo-territoires.org")]),e._v(" "),t("h2",{attrs:{id:"publication"}},[e._v("Publication")]),e._v(" "),t("p",[e._v('Dans le but de maintenir à jour un répertoire consolidé des aménagements cyclables en France, les collectivités sont invitées à transmettre systématiquement les données relatives à leurs aménagements.\nElles peuvent ajouter le mot-clef "aménagement cyclable" lors de la publication du jeu de données dans leur espace de publication ou directement sur data.gouv.fr.\nLes producteurs pourront :')]),e._v(" "),t("ul",[t("li",[e._v("publier directement sur data.gouv.fr ;")]),e._v(" "),t("li",[e._v("déléguer la publication des données à Vélo & Territoires si les données ont été saisie sur leur WebSIG ;")]),e._v(" "),t("li",[e._v("demander à Géovélo de convertir leurs données vers le schéma national si elle")]),e._v(" "),t("li",[e._v("publier sur OpenStreetMap et Géovélo se chargera de la publication avec une conversion vers le schéma.")])]),e._v(" "),t("p",[e._v('Nous préconisons aux producteurs de données de publier leurs fichiers avec la règle de nommage suivante : amenagementcyclable_nom.geojson avec nom étant le nom de la collectivité productrice des données, par exemple AménagementCyclable_Ain.geojson. Nous invitons également les producteurs de données à séléctionner "schéma d\'aménagements cyclables" dans la liste déroulante de la section "schema" sur data.gouv.fr lorsqu\'ils publieront leurs fichiers.')]),e._v(" "),t("p",[e._v("En cas de mise à jour d’un fichier déjà intégré à la base consolidée, il est recommandé de prévenir l’équipe transport.data.gouv.fr qui s’assurera de l'actualisation du fichier en question et de son intégration dans la base consolidée à l'adresse : contact@transport.beta.gouv.fr")]),e._v(" "),t("h2",{attrs:{id:"consolidation"}},[e._v("Consolidation")]),e._v(" "),t("p",[e._v("Cette base de données ainsi construite est issue de l’assemblage de fichiers de données transmis par des producteurs. Nous tenons à les remercier pour leur travail de normalisation des fichiers.")]),e._v(" "),t("p",[e._v("Trois bases seront publiées sur transport.data.gouv.fr :")]),e._v(" "),t("ul",[t("li",[e._v("une base nationale regroupant les données publiées par les collectivités sur data.gouv.fr ;")]),e._v(" "),t("li",[e._v("une "),t("a",{attrs:{href:"https://transport.data.gouv.fr/datasets/amenagements-cyclables-france-metropolitaine/",target:"",rel:"noopener noreferrer"}},[e._v("base rassemblant les données publiées sur OSM")]),e._v(". Géovélo sera en charge de l'extraction de ces données et de leur mise à jour mensuelle ;")]),e._v(" "),t("li",[e._v("une base nationale consolidant les données publiées par les collectivités sur data.gouv.ft et celles publiées sur OSM.")])]),e._v(" "),t("h2",{attrs:{id:"mise-a-jour"}},[e._v("Mise-à-jour")]),e._v(" "),t("p",[e._v("La consolidation de la base sera effectuée en continu par transport.data.gouv.fr à partir des fichiers publiés sur data.gouv avec le tag “aménagements cyclables” par les producteurs, Vélo & Territoires et Géovélo. De nouvelles versions seront publiées lorsque de nouveaux aménagements cyclables seront recensés ou mis-à-jour par les producteurs. Cette mise à jour se fait à partir du fichier communiqué précédemment et en reprenant, en les modifiant le cas échéant, les données existantes. Le fichier principal du dataset constitue ainsi systématiquement la dernière mise-à-jour.")]),e._v(" "),t("h2",{attrs:{id:"conditions-d-utilisation"}},[e._v("Conditions d’utilisation")]),e._v(" "),t("p",[e._v("Comme indiqué dans les métadonnées, le fichier et ses mises-à-jour sont distribués sous la licence ODbL. Cela signifie que vous pouvez télécharger librement cette base, la réutiliser, la modifier, l’utiliser commercialement, etc, tant que vous en mentionnez la source (par exemple dans les mentions légales de votre application) et que vous repartagez les modifications, améliorations et corrections éventuelles dans les mêmes conditions que cette base (licence ODbL). Plus d’informations ici.")]),e._v(" "),t("p",[e._v("Nous tenons à remercier les membres du groupe de travail pour leur investissement dans l'élaboration de ce schéma.")])],1)}),[],!1,null,null,null);s.default=a.exports}}]);