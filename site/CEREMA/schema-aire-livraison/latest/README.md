<MenuSchema />

<MenuSchema />

# Schéma sur les aires de livraison
Ceci est le répertoire du schéma sur les aires de livraison.

Ce travail a été conduit en partenariat avec OpenDataFrance et La Région SUD et sera poursuivi en 2024 avec la DGITM dans le cadre de la startup d'état [Dialog](https://beta.gouv.fr/startups/dialogue.html).

Une première écriture du schéma est proposée sachant qu'en 2024, les parties prenantes et acteurs de la logistique seront conviés à son élaboration de manière plus approfondie.

## À propos

Le schéma sur les aires de livraison vise à proposer [une structure](https://github.com/CEREMA/schema-aire-livraison/blob/master/documentation/schema-page.md) selon laquelle saisir les **informations** contenues dans ces arrêtés dans un tableau de données. 

Le schéma proposé se veut volontairement [assez simple (un seul tableau de saisie)](https://github.com/CEREMA/schema-aire-livraison/blob/main/exemple-antibes.csv) afin de **faciliter** la production de données d'arrêtés par le plus grand nombre et donc de faciliter leur diffusion.

Le schéma comporte les **champs** essentiels pour identifier les paramètres d'un arrêté ainsi que les caractéristiques de l'aire de livraison elle même. Sa structure est cohérente et reprend les champs du [schéma des arrêtés permanents de circulation en ville pour le transport de marchandises](https://schema.data.gouv.fr/CEREMA/schema-arrete-circulation-marchandises/).

Un jeu de données a été créé sur la version initiale du schéma (la [v0.1.0](https://github.com/CEREMA/schema-aire-livraison/tree/v0.1.0)) par la Ville d'Antibes. [Il est disponible sur data.gouv.fr](https://www.data.gouv.fr/datasets/aires-de-livraison-a-antibes-juan-les-pins).

Les auteurs initiaux du schéma sont Mathieu RAJERISON (Cerema) & Cédric BARIOU (Cerema), en s'appuyant sur les travaux de la Fabrique de la Logistique, en particulier ceux d'OpenDataFrance.

### Evolution du schéma en 2026

Une mise à jour du schéma à été travaillée en 2025 dans le cadre du projet DigiLog (programme InTerLUD+). 

Certains champs du standard Curb Data Specification (https://github.com/openmobilityfoundation/curb-data-specification) ont été traduits et ajoutés au schéma. 

Cette nouvelle version (la v1.0.0) vise une caractérisation plus détaillée des aires de livraisons et une intégration dans les outils JOPTIMIZ (https://www.interlud.green/projets-et-etudes-1/outils-innovants).

[Un fichier d'exemple sur le Grand Lyon](https://raw.githubusercontent.com/CEREMA/schema-aire-livraison/refs/tags/v1.0.0/exemple-grand-lyon.csv) est fourni pour la dernière version du schéma.

#### Contributeurs du schéma v1.0.0

Les contributeurs de cette évolution sont Evan BOULOGNE et Philippe RAPIN (Urban Radar), Timothée FRITSCH HUMBLET (Cerema), Hélène DE SOLERE (Cerema) et Jean-Philippe Elie (Logistic Low Carbon).



## Le schéma

[Voir le schéma au format JSON TableSchema ](https://github.com/CEREMA/schema-aire-livraison/blob/main/schema.json)  
[Voir la documentation associée au schéma (liste des champs et valeurs possibles)](https://github.com/CEREMA/schema-aire-livraison/blob/main/documentation/schema-page.md)   

## Inspirations pour le schéma

### Pages de travail

Les pages suivantes ont permis de travailler autour d'un schéma sur les aires de livraison :

- [Répertoire FabLog d'OpenDataFrance](https://opendatafrance.gitbook.io/fablog/groupes-de-travail/partage-des-donnees/zones-de-livraison)  
- [Framapad](https://mypads.framapad.org/mypads/?/mypads/group/espace-de-travail-normalisation-ch36h71o/pad/view/draft-aires-de-livraison-zv13l47tc)

### Jeux de données

Autrement, on trouve sur internet plusieurs jeux de données ouverts sur les aires de livraison, qui ont servi d'inspiration au schéma :

- [Hauts de Seine](https://www.data.gouv.fr/fr/datasets/aires-de-livraison/) contient, entre autres :
  - Côté de la route (`LOC_NUM`)
  - Longueur + Largeur
  - Sens
  - Lim. vitesse
  - Heure de début  + heure de fin
- [Toulouse](https://data.toulouse-metropole.fr/explore/dataset/aires-de-livraison/)
  - Champ relatif à la domanialité
- [Paris](https://opendata.paris.fr/explore/dataset/stationnement-voie-publique-emplacements/table/?disjunctive.regpri&disjunctive.regpar&disjunctive.typsta&disjunctive.arrond&disjunctive.zoneres&disjunctive.locsta&disjunctive.parite&disjunctive.signhor&disjunctive.signvert&disjunctive.confsign&disjunctive.typemob&disjunctive.zoneasp&disjunctive.stv&disjunctive.prefet&q=livraison&refine.regpri=LIVRAISON&sort=typemob&basemap=jawg.dark&location=16,48.85483,2.33805)
  - Carte présente : https://www.paris.fr/pages/logistique-marchandises-livraisons-4738 (capgeo.sig.fr)
    - https://capgeo.sig.paris.fr/Apps/Places_Livraison/
  - Mention de la carte interactive : https://www.paris.fr/pages/paris-experimente-pour-une-meilleure-utilisation-des-places-de-livraison-16080
- [Nantes](https://data.nantesmetropole.fr/explore/dataset/244400404_aires-livraison-nantes-metropole/table/?disjunctive.commune&sort=debattement)
  - Champ débattement
- [Mulhouse](https://data.mulhouse-alsace.fr/explore/dataset/68224_aires-de-livraison-sur-mulhouse/table/?location=17,47.75468,7.33279&basemap=jawg.streets)
  - Ce jeu de données est assez minimaliste et comporte peu de champs

## Outils

### Scripts locaux

Ils sont dans le dossier `scripts`:

- [01-Tester-Schema.bat (vérifier la conformité du schéma)](https://github.com/CEREMA/schema-aire-livraison/blob/main/scripts/01-Tester-Schema.bat)
- [02-Creer-Documentation.bat (créer la documentation du schéma)](https://github.com/CEREMA/schema-aire-livraison/blob/main/scripts/02-Creer-Documentation.bat)
- [03-Tester-Exemple.bat (tester la conformité du fichier exemple)](https://github.com/CEREMA/schema-aire-livraison/blob/main/scripts/03-Tester-Exemple.bat)

Ces scripts s'appuient sur la librairie [frictionless](https://framework.frictionlessdata.io/).

### Autres

[Reformater le schéma JSON TableSchema](https://jsonformatter.curiousconcept.com/#)
