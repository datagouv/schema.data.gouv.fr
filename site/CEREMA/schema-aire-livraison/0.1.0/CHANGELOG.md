<MenuSchema />

<MenuSchema />

# 0.2

## EMPRISE_NBPLACES

Joy Pasquet : 

> EMPRISE_NBPLACES : la possibilité d'avoir plusieurs places couvertes dans une seule et même entité digitale (même si un arrêté unique permet de créer plusieurs aires d'un coup) contredit à mon avis le paramètre unique GEOM_XY. En cas de places multiples, quelles coordonnées fournir ? J'imagine que ça serait le centroïde, mais ça ferait perdre en valeur la digitalisation de l'aire. Mon conseil serait d'avoir une entité (ID unique) pour chaque aire (ou « place »). Je ne vois pas la valeur ajoutée d'utiliser un seul ID pour plusieurs places, même si ces places ont été créées par un seul arrêté.

Cédric :

> au delà de la création de plusieurs AL issues d'un même arrêté que nous pouvons gérer (idem au schéma de circulation avec plusieurs lignes) , certains arrêtés déjà publié en OD (ex : Toulouse : https://www.data.gouv.fr/fr/datasets/aires-de-livraison-1/), peuvent stipuler le nombres d' AL sur une même "ligne" ,
>  2 cas de figures effectivement :
> \- 1 seule entité géométrique , avec plusieurs AL associés éventuellement
> \- 1 seule identité géométrique = 1 AL
> Si on se projette, sur un cas de places monitorées (libre/occupé), il sera intéressant pour les livreurs de savoir si une des AL situées sur le même endroit géographique sera disponible. Il est donc indispensable d'avoir une seule entité en cohérence avec le GEOM_XY unique , comme le suggère Mme Pasquet.

> 

## INTERV_REGIME

Joy Pasquet :

> INTERV_REGIME : les catégories proposées ne sont pas mutuellement exclusives, ce qui pourrait poser problème à l'avenir. Ma suggestion serait de supprimer la catégorie « exclusif » puisque l'exclusivité est déjà sous-entendue dans « livraison » et « transport de fonds ». Par ailleurs je ne comprends pas à quoi correspond « alterné » par rapport à « mixte » : si c'est différent de l'alternance avec du stationnement particulier, autant être plus explicite (je ne sais pas s'il y a de l'alternance avec d'autres usages que du stationnement).

Cédric :

> ok pour la suppression de exclusif
> ok pour suppression "alterné " , résidu du 1er schéma sur le stationnement (valable pour les véhicules ) mais n'a pas lieu d'être pour la livraison

## EMPRISE_LONGUEUR, EMPRISE_LARGEUR

Joy :

> Peut-être faudrait-il une propriété optionnelle sur des limitations réglementaires dans la longueur des véhicules, en plus du tonnage (VEH_TONNAGE) ? Je sais que certaines villes limitent l'accès à certains quartiers sur la base des longueurs de véhicule, je ne sais pas si ça commence à être fait pour des aires de livraison également.

Cédric :

> Effectivement certains arrêtés de circulation limitent des PL en longueur sur certaines voiries . Je n'ai pas vu ce cas de figure sur des arrêtés d'AL mais notre vision est loin d'être exhaustive.
> Nous pourrions mettre le champ réglementaire "longueur " optionnel : VEH_LONGUEUR.

Mathieu :

> \- Ajouter EMPRISE_LONGUEUR, voire aussi EMPRISE_LARGEUR (?) dans le schéma standard

Cédric :

ok pour les 2

## VEH_TYPES

Joy :

> VEH_TYPES : les catégories devraient suivre les catégorisations dans le code de la route à mon avis. Un vélo cargo n'a pas de statut réglementaire, donc je conseillerais de mentionner plutôt « cycles » comme valeur possible, ou alors « cycles pour transport de marchandise » éventuellement. Cela permettrait aussi de laisser la porte ouverte aux ensembles vélo+remorque. Par ailleurs j'imagine qu'avant le « tous véhicules », il faudrait une catégorie « voitures particulières » et une autre pour les cyclomoteurs.

Cédric :

> A quoi sert le champ véhicule type ?
> on l'a mis surtout dans le schéma de circulation car les arrêtés spécifiés par ex "véhicules lourds, véhicules de livraison ".
>
> On voulait reprendre ce champ dans le schéma des AL mais par défaut, seuls les véhicules de livraison peuvent aller sur les AL. Les types véhicules sont discriminés par leur tonnage , voire leur longueur mais pas par un type.
>
> A ce jour, les vélos cargo se garent où ils veulent , il n'existe pas de réglementation.
> L'intérêt de garder ce champ , en prospective, serait de distinguer les véhicules lourds de livraison , des cycles de transport de marchandises. 
>
> Je suis pour ne pas l'intégrer ;)

## Autres champs

Joy :

> SIGNALISATION_HORIZONTALE/SIGNALISATION_VERTICALE : qui définit le « abimé » ? Et à quelle fréquence cette valeur a-t-elle des chances d'être mise à jour ? A mon sens cette valeur n'est pas idéale.
>
> REGLEMENT : je ne vois pas la valeur ajoutée car il n'y aura pas de lien vers l'éventuelle « charte de livraison ».
>
> TARIF_PRIX : comment faire en cas de tarification différenciée en fonction des usagers ? Et en cas de mise à jour de la tarification (je ne sais pas si l'arrêté doit être systématiquement mis à jour avant un changement de tarification) ?
>
> EMPRISE_SURFACE/EMPRISE_HAUTEUR_SOL/EMPRISE_HAUTEUR_PLAFOND : il manque l'unité.
>
> EQUIPEMENTS_IRVE : en complément de ce champ, un champ optionnel précisant la puissance de cette borne de recharge serait pertinent, pour aider les usagers à savoir s'il s'agit de recharge rapide ou non.

# 0.1

Version initiale