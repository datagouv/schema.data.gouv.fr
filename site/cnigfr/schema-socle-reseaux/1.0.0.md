<MenuSchema />

<MenuSchema />

<MenuSchema />

# Schéma de données Socle des Réseaux (STAR-DT)

## Description
Le StaR-DT est un géostandard de description simplifiée des réseaux relevant de la réglementation anti-endommagement, à savoir l’arrêté du 15 février 2012 modifié en application du décret DT-DICT (Décret n° 2011-1241 du 5 octobre 2011 et ses décrets modificatifs), cité dans le document sous son nom courant Décret DT-DICT.
Limité aux objets les plus utiles et en n'abordant aucune logique « métiers », le StaR-DT constitue le socle commun de base décrivant à très grande échelle les réseaux concernés par le Décret DT-DICT afin de permettre à leurs gestionnaires et aux collectivités concernées d’échanger les informations utiles à la géolocalisation des ouvrages en amont des travaux. La [documentation du standard](https://cnig.gouv.fr/IMG/documents_wordpress/2019/11/CNIG_STAR-DT_v1.0.pdf) est disponible ici.

## Objectif
Le StaR-DT est un socle commun qui est composé par des données « vecteurs ». Il a pour objectif de fiabiliser l’échange de données cartographiques des implantations des réseaux (mais aussi l'établissement de plans de synthèse) situés à proximité de l'emprise d'un chantier entre responsables de projets, exécutants de travaux (au sens du Décret DT-DICT) et leurs prestataires d'études.

Ce géostandard n’a pas vocation à être utilisé pour spécifier des bases de données métiers pour les exploitants de réseaux. Aussi la précision avec laquelle doit être décrite un objet porte avant tout sur son positionnement géographique. Plus explicitement une description d’affleurants ne servira qu’à positionner le réseau en surface mais en aucun cas à connaitre sa fonction dans l’exploitation du réseau.

La fourniture de données vectorielles véhiculées par ce géostandard n’a pas vocation à remplacer le plan non vectoriel produit par les exploitants en réponse aux DT-DICT. En effet, ce dernier permet de fournir des informations métier riches et nécessaires aux travaux, constitue une édition garantie par l’exploitant et sa fourniture est réglementaire. Les données véhiculées par StaR-DT et les plans non vectoriels joints historiquement aux récépissés de DT-DICT sont donc complémentaires. 

Les données vectorielles véhiculées par ce géostandard doivent être superposées avec un fond de plan grande échelle de précision adéquate et mutualisé (PCRS) dans le cadre de la production de plans de synthèse des réseaux en vue du marquage-piquetage. En l’absence d’un fond de plan PCRS, les exploitants pourront choisir délibérément de fournir les données vectorielles de leurs réseaux, sans qu’on puisse les y contraindre. Il n’existe en effet aucune obligation réglementaire à le faire et il appartient à chaque exploitant d’apprécier le risque potentiel d’erreur sur les plans de synthèse produits en cas d’incohérence entre le fond de plan utilisé et les données StaR-DT.

Dans le cadre des réponses aux DT-DICT, les responsabilités respectives des gestionnaires de fonds de plans mutualisés, responsables de projets, exécutants de travaux (au sens du Décret DT-DICT) , des exploitants de réseaux et de leurs prestataires d'études sont fixées par la réglementation adhoc.

Le géostandard doit disposer de métadonnées suffisantes pour assurer la généalogie du produit, comme la date d'extraction et la date de mise à jour des données... 
Il doit aussi disposer de métadonnées précisant l'usage limité du jeu de données : le chantier concerné, la durée de validité des données, les conditions de diffusion des données à des tiers…

Le présent document vise à spécifier le géostandard StaR-DT. Il se compose de recommandations logiques permettant son articulation avec le fond de plan au format standard PCRS, établi et mis à jour par l'autorité publique locale compétente. Il est complété par une annexe pour spécifier les représentations recommandées des différents objets. Il pourra être enrichi de retours d’expérience via un guide de bonnes pratiques.

## Versions
- 1.0 du 15 novembre 2019 : 1.0.0
- 0.5 du 23 juillet 2019 : 0.5.0
- 0.4.1 du 27 mai 2019 : 0.4.1
- 0.3 du 28 mars 2019 : 0.3.0
- 0.2 : 0.2.0
- 0.1 du 8 février 2019 : 0.1.0
