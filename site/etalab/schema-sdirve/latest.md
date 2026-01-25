<MenuSchema />

<MenuSchema />

<MenuSchema />

# Schéma directeur des Infrastructures de recharges pour véhicules électriques

Afin d’accélérer le déploiement des IRVE ouvertes au public et d’en assurer la cohérence territoriale, l’article 68 de la loi d’orientation des mobilités prévoit la possibilité, pour les collectivités ou établissements publics, de réaliser un schéma directeur de développement des IRVE. 

Il s’agit d’un dispositif facultatif qui donne à la collectivité un rôle de « chef d’orchestre » du développement de l’offre de recharge sur son territoire, pour aboutir à une offre coordonnée entre les maîtres d’ouvrage publics et privés, cohérente avec les politiques locales de mobilité et adaptée aux besoins.

Ce dispositif est encadré par plusieurs textes règlementaires:
- [Le décret n° 2021-565 du 10 mai 2021](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043490106) relatif aux schémas directeurs de développement des infrastructures de recharges ouvertes au public pour les véhicules électriques et les véhicules hybrides rechargeables qui décrit le contenu détaillé du schéma directeur
- [L’arrêté du 10 mai 2021](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000043490176/) pris en application des articles R. 353-5-4, R. 353-5-6 et R. 353-5-9 du code de l'énergie qui définit les modalités de publication des principales données de diagnostic et des objectifs opérationnels du schéma directeur 
- [Le décret n° 2021-566 du 10 mai 2021](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043490129) relatif à la fourniture d'informations d'usage des infrastructures de recharge ouvertes au public pour les véhicules électriques et les véhicules hybrides rechargeables  par les opérateurs concernés dans le cadre de la réalisation d’un schéma directeur

## Création d’un fichier de données conforme

Les données collectées doivent respecter un formalisme particulier (schéma de données) décrit sur la [section documentation de cette page](https://schema.data.gouv.fr/etalab/schema-sdirve/latest/documentation.html).

Les données sont à remplir au format CSV, encodage UTF-8.

Pour faciliter le remplissage des données, Etalab met à disposition un générateur CSV conforme au schéma de données, vous permettant de remplir les différents champs demandés. Cet outil vous permet de vous assurer que les données que vous remplissez sont au bon format. Pour l’utiliser, rendez-vous sur publier.etalab.studio, vous pourrez alors publier votre fichier à partir :
- d’un fichier csv déjà existant. (vous pouvez partir de [ce fichier exemple](https://www.data.gouv.fr/fr/datasets/fichier-exemple-schema-directeur-des-infrastructures-de-recharges-pour-vehicules-electriques/)).
- d’un formulaire
- d’un tableur (encore en expérimentation)

Une fois vos données chargées ou remplies, un formulaire vous proposera de les publier sur data.gouv.fr

Plusieurs solutions existent pour générer ce fichier CSV.

Le présent schéma de données doit être utilisé au moment de la finalisation du schéma directeur, à deux reprises : 

## 1. Validation par le préfet

Conformément à l’article R. 353-5-6 du Code de l’énergie précisé par l’arrêté du 10 mai 2021, après une première adoption, le projet de schéma directeur est transmis au préfet de département, accompagné d’indicateurs de synthèse relatifs au diagnostic et aux objectifs opérationnels. 

Ces indicateurs sont transmis sous forme de fichier au format CSV, conformément au schéma de données publié sur cette page.

Ils comprennent : 

**L’état des lieux de l'existant :**
- nombre de points de charge (par catégorie de puissance) ouverts au public ; 
- indicateurs d'usage des points de charge, basés sur les données récoltées en application du décret n° 2021-566  :
    - nombre moyen de sessions de recharge quotidiennes sur les 24 mois précédant l’élaboration du diagnostic ;
    - durée moyenne des sessions de recharge réussies en minutes sur les 24 mois précédant l’élaboration du diagnostic ;
    - taux de disponibilité moyen sur les 24 mois précédant l’élaboration du diagnostic.

**L’estimation de l'offre ouverte au public** dont le développement est prévu indépendamment du schéma directeur ;

**L’estimation du parc** (VP a minima) électrique à l'échéance opérationnelle, en distinguant les véhicules électriques et les véhicules hybrides rechargeables.

S’agissant des objectifs opérationnels, il s’agira de renseigner le nombre de points de charge, au total et par catégorie de puissance unitaire :
- supérieur ou égal à 7,4 kVA
- supérieur à 7,4 kVA et inférieur ou égal à 22 kVA 
- supérieur à 22kVA et inférieur à 150 kVA
- supéieur ou égal à 150 kVA	

Au sein des catégories de puissance unitaires, le nombre de points de charge pourra être décliné optionnellement en fonction de leur usage principal (résidentiel, professionnel, occasionnel / transit).

L’ensemble de ces données aura une précision communale a minima, avec la possibilité pour les établissements publics qui le souhaitent de déclarer les données à une précision supérieure (maille IRIS).

L’ensemble de ces données ont pour objectif d’éclairer les objectifs fixés à l’échéance opérationnelle. L’analyse réalisée par les services de l’État quant à la pertinence et au réalisme des objectifs opérationnels s’appuiera en effet sur le projet de schéma directeur et en particulier les données de diagnostic précitées. 


## 2. Adoption définitive et publication des données en open data

Après avis positif du préfet, ou sans réponse dans un délai de deux mois après transmission initiale, le schéma directeur est validé. Dans le cas contraire, l’établissement public modifie son projet de schéma directeur et le soumet à une nouvelle délibération.

Puis les données visées seront également publiées en open data par la collectivité sur data.gouv.fr dans un délai de deux mois suivant l’adoption définitive, toujours conformément au schéma de données publié sur cette page.  

À noter, ces informations seront automatiquement agrégées sur le site data.gouv.fr pour permettre **un suivi national des schémas directeurs**. 

En complément, le schéma directeur adopté par l’établissement public doit être rendu public ; la mise en ligne du document sous un format PDF sur le site de l’établissement public, pour un téléchargement libre, est très fortement recommandée ; le lien de téléchargement figure parmi les données à renseigner dans le schéma de données publié sur cette page.