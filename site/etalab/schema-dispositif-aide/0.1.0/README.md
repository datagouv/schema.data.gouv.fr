<MenuSchema />

# Schéma des dispositifs d'aides

Ce schéma de données définit un modèle permettant de spécifier les dispositifs d'aides publiques sous leurs différentes formes afin de favoriser leur diffusion vers leurs bénéficiaires.

## Contexte

Les dispositifs d'aides publiques peuvent prendre plusieurs formes (appels à projets, appels à manifestations d’intérêt, appels à communs, appels à candidatures...). Ils sont destinés à des acteurs multiples : des collectivités, des entreprises, des associations, des organismes de recherche, etc qui désirent bénéficier d'aides financières (subvention, dotation, prêt, avance remboursable, prise de participation...) ou d'aides en ingénierie (pour réaliser/financer des études, accompagner un projet, ou le valoriser a posteriori).

Ces dispositifs sont nombreux et sont créés par des entités publiques de portée locale ou nationale, induisant de la complexité pour les bénéficiaires potentiels de ces dispositifs : *comment s'assurer de la pertinence d'un dispositif ? Comment "comparer" des dispositifs entre eux ?*. 

Pour les acteurs publics à l'origine de ces dispositifs, il y a également un enjeu de positionnement et de lisibilité : *Quelle complémentarité avec les dispositifs existants ? Comment rédiger mon dispositif pour le rendre compréhensible pour ses bénéficiaires potentiels ?*

## Finalité

Afin de faciliter la connaissance et l'échange de données relatives à ces dispositifs entre les services numériques publics, et améliorer le service rendu aux bénéficiaires, ce schéma de données a été créé, agrégeant la connaissance sur de nombreux dispositifs publics.

Les acteurs publics, créateurs de dispositifs, verront ainsi leurs dispositifs relayés dans d'autres services comme mission-transition-ecologique.beta.gouv.fr afin de toucher un plus grand nombre de bénéficiaires.

L'utilisation d'un schéma de données partagé est également utile pour faciliter l'articulation entre dispositifs, et offrir une meilleure lisibilité aux bénéficiaires.

Enfin, il pourrait être pertinent de faire un lien entre un dispositif d'aide et les [subventions associées](https://schema.data.gouv.fr/scdl/subventions/) afin de connaitre les montants versés par ses dispositifs dans un usage de pilotage administratif ou d'évaluation de politique publique.

## Format des fichiers

Le fichier doit être au format csv, encodé en UTF-8. L'en-tête de colonne sur la première ligne est obligatoire.
Pour publier facilement un dispositif d'aide, il est possible d'utiliser le lien suviant : https://publier.etalab.studio/fr/select?schema=etalab%2Fschema-dispositif-aide

## Gestion du schéma

La gestion du schéma est centralisée sur le fichier grist suivant : https://grist.numerique.gouv.fr/o/docs/uC2J5niqzb48/Gestion-des-schemas-des-dispositifs-daide
Ce fichier est librement accessible en lecture. Vous y trouverez notamment les listes de valeurs autorisées pour les champs sur lesquels des contraintes ont été imposées. 
Vous y trouverez également un lien vers un channel de discussion si vous souhaitez participer au développement de ce schéma. 
