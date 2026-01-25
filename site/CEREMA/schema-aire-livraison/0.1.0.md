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

[Un fichier d'exemple](https://github.com/CEREMA/schema-aire-livraison/blob/main/exemple_antibes.csv) est fourni, avec la numérisation de trois aires de livraison sur la commune d'Antibes.

Auteurs principaux du schéma : Mathieu RAJERISON & Cédric BARIOU

## Le schéma

[Voir le schéma au format JSON TableSchema ](https://github.com/CEREMA/schema-aire-livraison/blob/main/schema.json)  
[Voir la documentation associée au schéma (liste des champs et valeurs possibles)](https://github.com/CEREMA/schema-aire-livraison/blob/main/documentation/schema-page.md)   

### Version *ultra*

Des champs supplémentaires sont disponibles pour le schéma dans sa version **ultra**

[Voir le schéma version **ultra** au format TableSchema (json)](https://github.com/CEREMA/schema-aire-livraison/blob/main/documentation/schema-page-ultra.md) 

### Contribuer au schéma

Vous pouvez donner votre avis sur le schéma via ce [questionnaire](https://forms.gle/R4TSNCpCyVPiacy48).

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

[Créer la documentation du schéma](https://github.com/CEREMA/schema-aire-livraison/blob/main/scripts/1-Creer-Documentation.bat)  
[Tester l'exemple avec frictionless](https://github.com/CEREMA/schema-aire-livraison/blob/main/scripts/2-Tester-Exemple.bat)

### Autres

[Reformater le schéma JSON TableSchema](https://jsonformatter.curiousconcept.com/#)

