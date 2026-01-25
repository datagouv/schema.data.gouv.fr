<MenuSchema />

<MenuSchema />

<MenuSchema />

# Géostandard de réseaux électriques StaR-Elec

## Description
La [documentation du standard](https://cnig.gouv.fr/IMG/pdf/cnig_star-elec_v1_02.pdf) est disponible ici.

Le StaR-Elec est un géostandard vectoriel métier, transverse aux maîtres d’ouvrage de réseaux électriques en espaces extérieurs, basé sur le modèle de StaR-DT et utilisable pour diverses thématiques (transport, distribution, éclairage extérieur, signalisation…).

Il vise à répondre au besoin de modélisation des ouvrages construits pour les échanges entre acteurs d’un projet (MOA, MOE, entreprise de travaux, topographe, cartographe), depuis la phase de conception jusqu’au récolement et l’intégration dans les SI de l’exploitant. De ce fait, il constituerait une sorte de jumeau numérique de l’ouvrage, de plus en plus détaillé au fil de son jalonnement.

Il ambitionne ainsi de diminuer les coûts et rationaliser le transfert des informations sans spécifier la collecte de données supplémentaires par rapport à ce qui est fait aujourd'hui mais en évitant les ressaisies multiples. Le format choisi devra être adapté à la gestion d’attributs et de la topologie du réseau, ainsi qu’à une interopérabilité avec les IFC (BIM), le standard Inspire (la compatibilité devrait être héritée de StaR-DT) et autres standards de l’OGC.

## Objectif
Il vise à répondre au besoin de modélisation des ouvrages construits pour les échanges entre acteurs d’un projet (MOA, MOE, entreprise de travaux, topographe, cartographe), à la suite de l’expression de besoin des ouvrages à construire – d’un programme de travaux établi, jusqu’au récolement et l’intégration dans les SI de l’exploitant. De ce fait, il permet de constituer une sorte de jumeau numérique de l’ouvrage, de plus en plus détaillé au fil de son jalonnement.

S’agissant d’un standard d’échange de données, il n’a pas vocation à servir de base pour la définition d’un Système d’Information Géographique servant à l’exploitation d’un réseau. Un des enjeux de la mise en place du standard StaR-Elec sur un chantier est d’éviter qu’un acteur dégrade les informations précédemment accumulées par les récédents intervenants en y apportant les données qu’il est chargé de renseigner, étant donné l’aspect séquentiel d’enrichissement du jeu de données.

Il ambitionne ainsi de diminuer les coûts et rationaliser le transfert des informations sans spécifier la collecte de données supplémentaires par rapport à ce qui est fait aujourd'hui mais en évitant les ressaisies multiples. Le format choisi est adapté à la gestion d’attributs et de la topologie du réseau, ainsi qu’à une interopérabilité avec les IFC (BIM), le standard Inspire (via le lien avec StaR-DT) et autres standards de l’OGC.

Le géostandard doit disposer de métadonnées suffisantes pour assurer la généalogie du produit, comme la date d'extraction et la date de mise à jour des données... Il doit aussi disposer de métadonnées précisant l'usage limité du jeu de données : le chantier concerné, la durée de validité des données, les conditions de diffusion des données à des tiers…

Le présent document vise à spécifier le géostandard StaR-Elec. Il se compose de recommandations logiques permettant sa mise en œuvre sur des chantiers, de définitions des 
différents objets et attributs utilisés, de règles d’utilisation des relations entre les objets afin d’assurer l’échange des informations suivantes :
- Schéma électrique détaillé, jusqu’à l’intérieur des installations (coffrets, armoires, postes…)
- Lever topographique précis et géoréférencé
- Approvisionnement et traçabilité du matériel
- Rattachement de documents divers aux ouvrages

Il est complété par une annexe d’exemples de modélisations d’ouvrages correspondant à des 
cas d’échanges de données afin d’illustrer les spécifications.


## Versions
- 1.02 du 24 novembre 2022 : 1.0.2
- 1.01 du 19 octobre 2022 : 1.0.1
- 1.0 du 27 juillet 2022 : 1.0.0
- 0.9 du 17 juin 2022 : 0.9.0
- 0.8 du 6 mai 2022 : 0.8.0
- 0.7 du 8 mars 2022 : 0.7.0
- 0.6 du 14 février 2022 : 0.6.0
- 0.5 du 29 décembre 2021 : 0.5.0
- 0.4 du 12 octobre 2021 : 0.4.0
- 0.2 du 24 septembre 2021 : 0.2.0
- 0.1 du 22 septembre 2021 : 0.1.0
