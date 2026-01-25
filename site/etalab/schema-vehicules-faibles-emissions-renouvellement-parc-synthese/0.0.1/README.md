<MenuSchema />

<MenuSchema />

# Part des véhicules à faibles émissions dans le renouvellement des parcs d’entreprises de location, location-vente, de crédit-bail de véhicules, des plateformes de livraisons et des centrales de réservation de taxi et VTC

Spécification du fichier d’échange relatif aux parts de véhicules à faibles émissions dans les parcs de véhicules des entreprises de location, location-vente et crédit-bail de véhicules, des plateformes de livraison, des centrales de réservation de taxi et de VTC.

## Contexte

L’article L. 224-10 du code de l’environnement soumet les entreprises qui gèrent un parc de plus de 100 véhicules (y compris les entreprises de location, location-vente et crédit-bail) à une obligation d’incorporation de véhicules à faibles émissions et de véhicules à très faibles émissions lors du renouvellement de cette flotte. L’article L. 224-11 du code de l’environnement soumet les centrales de réservation des taxis et des VTC qui mettent en relation un nombre de conducteurs supérieur 100 à l’obligation d’utiliser une part croissante de véhicules à faibles émissions pour cette mise en relation. L’article L. 224-11-1 du code de l’environnement, qui entre en vigueur le 1er janvier 2023, soumet les plateformes de livraison qui mettent en relation plus de 50 travailleurs à l'obligation de s’assurer qu’une part croissante de véhicules à deux ou trois roues à très faibles émissions ou de vélos est utilisée pour cette mise en relation.

Afin de réaliser un suivi national, l’article L. 224-12 du code de l’environnement fixe une obligation de publication de ces parts de véhicules à faibles et très faibles émissions mises en relation durant l’année précédente. Par dérogation aux obligations de rapportage classiques des entreprises et de la commande publique (voir [ici](https://schema.data.gouv.fr/etalab/schema-vehicules-faibles-emissions-renouvellement-parc/latest.html)), les entreprises de location, location-vente et crédit-bail de véhicules, les centrales de réservation de taxi et de VTC, les plateformes de livraison ne doivent transmettre que les informations relatives à l’identité des personnes morales et les parts de véhicules à faibles et très faibles émissions incorporés au parc au cours de l’année N-1, et non les données brutes (nombre de véhicules à faibles émissions, nombre de véhicules dans la flotte…). En revanche, l’intégralité des données fixées par arrêtés (voir ci-dessous "Documents de cadrage juridique") doit impérativement être transmise par mail aux services en charges du suivi selon les modalités prévues (voir la section « obligation de rapportage » sur [cette page](https://www.ecologie.gouv.fr/developper-lautomobile-propre-et-voitures-electriques)).

## Documents de cadrage juridique

- [Décret n° 2021-1600 du 9 décembre 2021 pris pour l'application des articles L. 224-11 et L. 224-12 du code de l'environnement en ce qui concerne les centrales de réservation mentionnées à l'article L. 3142-1 du code des transports](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044464309)
- [Arrêté du 9 décembre 2021 fixant les termes et modalités de publication du pourcentage de véhicules à faibles émissions parmi les véhicules mis en relation par les centrales de réservation](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000044464353/2022-03-01/)
- [Décret n° 2020-1726 du 29 décembre 2020 relatif au suivi et à la publication du pourcentage de véhicules à faibles et à très faibles émissions parmi les véhicules ayant fait l’objet d’un renouvellement de parc conformément aux dispositions applicables à certaines personnes, pris pour l’application de l’article 79 de la loi no 2019-1428 du 24 décembre 2019 d’orientation des mobilités](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000042754268)
- [Arrêté du 29 décembre 2020 et l'arrêté du 5 avril 2022 fixant les termes et modalités de publication du pourcentage de véhicules à faibles et à très faibles émissions parmi les véhicules intégrés dans un renouvellement de parc, modifié par l’arrêté du 28 avril 2021.](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000042754492)
- [Décret n° 2022-474 du 4 avril 2022 pris pour l'application de l'article 114 de la loi n° 2021-1104 du 22 août 2021 portant lutte contre le dérèglement climatique et renforcement de la résilience face à ses effets](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000045470632)
- [Arrêté du 5 avril 2022 fixant les termes et modalités de publication du pourcentage de cycles, y compris à pédalage assisté, ou de véhicules à moteur à deux ou trois roues à très faibles émissions parmi les véhicules mis en relation par les plateformes visées à l'article L. 224-11-1 du code de l'environnement](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000045590767)

## Création d'un fichier de données conforme

Les données collectées doivent respecter un formalisme particulier (schéma de données) décrit [sur la section documentation de cette page](https://schema.data.gouv.fr/etalab/schema-vehicules-faibles-emissions-renouvellement-parc-synthese/latest/documentation.html).

Les données sont à remplir au format CSV, encodage UTF-8.

## Utilisation d'un outil d'aide à la saisie

Pour faciliter le remplissage des données, Etalab met à disposition un générateur CSV conforme au schéma de données, vous permettant de remplir les différents champs demandés. Cet outil vous permet de vous assurer que les données que vous remplissez sont au bon format. Pour l'utiliser, rendez-vous sur [publier.etalab.studio](https://publier.etalab.studio/select?schema=etalab%2Fschema-vehicules-faibles-emissions-renouvellement-parc-synthese), vous pourrez alors publier votre fichier à partir :
- d'un fichier csv déjà existant
- d'un formulaire (outil d’aide à la saisie) 
- d'un outil de tableur (outil d’aide à la saisie) 

Une fois vos données chargées ou remplies, il vous sera proposé de les publier sur data.gouv.fr.
