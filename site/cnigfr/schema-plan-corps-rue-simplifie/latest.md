<MenuSchema />

<MenuSchema />

<MenuSchema />

# Schéma de données plan du corps de rue simplifié (PCRS)

## Description
Le Plan du Corps de Rue Simplifié est un ensemble de données destinées à servir de support topographique échangeable et mutualisable pour satisfaire à la législation en vigueur, à savoir l’arrêté du 15 février 2012 en application du décret DT-DICT1, cité dans le document sous son nom courant Décret DT-DICT. Le PCRS constitue le socle commun de base décrivant à très grande échelle les limites apparentes de la voirie aussi urbaine dense qu’en zone rurale. Limité aux objets les plus utiles et en n'abordant aucune logique « métiers », le PCRS est destiné à servir de support à un grand nombre d'applications requérant une précision d'ordre centimétrique² et un géoréférencement. La [documentation du standard](https://cnig.gouv.fr/IMG/documents_wordpress/2017/12/CNIG_RTGE_PCRS_v2.0.pdf) est disponible ici.

## Objectif
Le PCRS est un socle commun qui est composé par des données « vecteurs » et « raster ». Sur un territoire donné, le PCRS peut être constitué à dominante Vecteur ou Raster. Le composant Raster est composé le plus souvent d’orthophotoplan et a minima de composants vecteurs : noms et numéros de voies ainsi que les affleurants.

Le PCRS est un standard d’échange et n’est pas destiné à se substituer aux bases de données métier des collectivités ou des exploitants de réseaux. Les affleurants figurent dans la nomenclature du PCRS en tant qu’objet affleurant. Cette modélisation n’implique pas de lien avec l’objet métier sous-jacent, cependant elle permet de représenter l’affleurant, et sa géométrie, pour permettre de se localiser sur le terrain. Dans le cadre des réponses aux DT DICT, les responsabilités respectives des gestionnaires de PCRS et des exploitants de réseaux sont fixés par la réglementation adhoc.

Il doit disposer de métadonnées suffisantes pour assurer la généalogie du produit comme les techniques et conditions d’acquisition, le matériel utilisé. Le présent document vise à spécifier le géostandard PCRS, il pourra être complété en fonction des besoins par des annexes pour définir les représentations du PCRS par exemple. Il peut galement être enrichi de retours d’expérience via un guide de bonnes pratiques. Des cahiers des charges types utilisés pour des marchés de production de PCRS pourront aussi être mis à disposition.

## Versions
- 2.0 AV du 15 septembre 2017 : 2.0.4
- 2.0 SR du 5 juin 2017 : 2.0.3
- 2.0 beta3 du 3 mai 2017 : 2.0.2
- 2.0 beta2 du 7 mars 2017 : 2.0.1
- 2.0 beta1 du 17 février 2017 : 2.0.0
- 1.0 du 14 mai 2015 : 1.0.0
