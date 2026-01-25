<MenuSchema />

<MenuSchema />

<MenuSchema />


# Schéma des passages à niveau

Ce schéma permet de décrire les interactions entre le réseau ferroviaire, quel que soit son gestionnaire, et le réseau routier ouvert à la circulation publique.
Il est destiné aux gestionnaires d'infrastructures ferroviaires.

## Contexte

Un [fichier national](https://www.data.gouv.fr/fr/datasets/liste-des-passages-a-niveau/) décrivant les passages à niveau sur le réseau ferré national a été publié par SNCF Réseau en 2017, sur l'ensemble du territoire national.
Ce fichier a été mis à jour à plusieurs reprises depuis, mais n'inclut pas les passages à niveau hors Réseau Ferré national. Les informations ont notamment été reprises par le fournisseur d’information routière « Waze ».
Les passages à niveau, intersection entre les modes de transports routiers et ferroviaires, sont des lieux sujets à des accidents spécifiques, rarissimes mais parfois extrêmement graves. Depuis fin 2019, l'article 123 de la LOM oblige tout gestionnaire d'infrastructure ferroviaire à publier ses passages à niveau sur le point d'accès national, de façon à ce que ces données alimentent les outils d'aide à la conduite.
Le présent schéma de données a été constitué de façon à permettre aux gestionnaires d'infrastructures ferroviaire autres que SNCF Réseau de déclarer leurs passages à niveau, dans un format unifié permettant la compilation facile des données sur le site transport.data.gouv.fr.

## Cadre juridique
La loi 2019-1428 du 24 décembre 2019 d’orientation des mobilités demande en son article 123 la publication des passages à niveau sur le point d’accès national, ainsi que l’information de la présence d’un PN par les fournisseurs de services d'information, notamment les « GPS » de guidage des conducteurs.

*Après l'article L. 1115-3 du code des transports, tel qu'il résulte de l'article 25 de la présente loi, il est inséré un article L. 1115-4 ainsi rédigé :
« Art. L. 1115-4.-Le gestionnaire de l'infrastructure ferroviaire rend gratuitement accessibles et librement réutilisables les données relatives à la localisation des passages à niveau situés sur son réseau. Ces données, mises à jour, sont fournies dans un format normalisé, par l'intermédiaire du point d'accès national aux données mentionné à l'article 3 du règlement délégué (UE) 2017/1926 de la Commission du 31 mai 2017 complétant la directive 2010/40/ UE du Parlement européen et du Conseil en ce qui concerne la mise à disposition, dans l'ensemble de l'Union, de services d'informations sur les déplacements multimodaux.
« Les fournisseurs de services d'information sur la circulation fournissent aux usagers de la route les informations relatives à la présence d'un passage à niveau sur l'itinéraire emprunté. »*

Elle mentionne par ailleurs des préconisations particulières pour les services de transport collectif relativement aux passages à niveau, en son article 125.

*I.-Le chapitre VI du titre Ier du livre Ier de la troisième partie du code des transports est ainsi modifié : 
1° L'intitulé est ainsi rédigé : « Sûreté, sécurité et sanctions » ; 
2° Est ajoutée une section 5 ainsi rédigée :*

*« Section 5 
« Sécurité* 

*« Art. L. 3116-6.-Les véhicules utilisés dans le cadre de l'exécution d'un service de transport public collectif de personnes sont équipés d'un dispositif d'information sur la circulation, fixe ou amovible, permettant de signaler la présence d'un passage à niveau sur l'itinéraire emprunté. 
« L'obligation mentionnée au premier alinéa n'est pas applicable lorsque les véhicules sont utilisés pour un service régulier dont le ou les itinéraires, les points d'arrêt, les fréquences, les horaires et les tarifs sont fixés et publiés à l'avance.* 

*« Art. L. 3116-7.-L'autorité organisatrice de services publics réguliers de transport routier de personnes, notamment de transports scolaires, recherche des itinéraires alternatifs réduisant le nombre de franchissements de passages à niveau par les autocars ou autobus qui assurent ces services, dès lors que l'allongement du temps de parcours induit n'est pas disproportionné. L'autorité compétente notifie au représentant de l'Etat dans le département, aux gestionnaires de voirie concernés et aux gestionnaires d'infrastructure ferroviaire concernés son analyse et les données essentielles sur les franchissements résiduels. Le représentant de l'Etat dans le département met en place les instances de concertation nécessaires. »*

*II.-L'article L. 3116-6 du code des transports entre en vigueur six mois après la publication de la présente loi.*
Elle étend l’obligation de réalisation d’un diagnostic, en son article 125, précisé par le décret 2021-396 du 6 avril 2021.
*L'article L. 1614-1 du code des transports est complété par un alinéa ainsi rédigé :* 
*« Le gestionnaire de voirie, en coordination avec le gestionnaire d'infrastructures ferroviaires, réalise et met à jour un diagnostic de sécurité routière des passages à niveau ouverts à la circulation ferroviaire, routière ou piétonne situés à l'intersection de leurs réseaux respectifs, qui peut comporter des recommandations. La structure ainsi que les modalités d'exécution et de mise à disposition de ces diagnostics sont déterminées par voie réglementaire. »*

## Finalité
La connaissance exhaustive de la localisation des passages à niveau doit permettre de sécuriser les transports, notamment collectifs. 
Les données diffusées sont susceptibles d’être utilisées dans le cadre des commissions départementales de sécurité, réunissant notamment les gestionnaires de voirie et gestionnaires d’infrastructure ferroviaire, sous l’égide du préfet.

## Transmission des données
Dans le but de constituer un répertoire national des passages à niveau, ouvert et accessible à tous, les gestionnaires d’infrastructure ferroviaire doivent transmettre systématiquement, sous forme de tableau mis à jour, les données relatives aux passages à niveau sous leur gestion, dès lors qu’ils sont ouverts à la circulation ferroviaire.
Il est recommandé d’ajouter le mot-clef `passage-a-niveau` lors de la publication du jeu de données sur leur espace de publication ou directement sur data.gouv.fr
Les producteurs de données sont sensibilisés sur le fait que la plupart des données sont optionnelles, car elles correspondent au besoin de SNCF Réseau pour décrire les PN sur le réseau ferré national, mais pas forcément aux besoins de gestionnaires d’infrastructures aux réseaux plus petits. Il est seulement obligatoire de renseigner, l’identifiant du PN, ses coordonnées géographiques, l’identifiant du producteur (son SIREN) et la date de mise à jour.

## Format des fichiers
Le fichier doit être encodé en UTF-8 et utiliser le point-virgule comme séparateur de colonnes. L’en-tête de colonne sur la première ligne est obligatoire. Tous les champs sont obligatoires ; si la donnée n’est pas disponible, la colonne doit être présente et vide.
Nom du fichier : `AAAAMMJJ_idproducteur_passagesaniveau.csv` où `idproducteur` est le SIREN de l’entité productrice des données.

## Mises à jour
Les mises à jour sont effectuées à partir du fichier communiqué précédemment et en reprennent, en les modifiant le cas échéant, les données qui y figurent déjà.

## Fichiers disponibles

Ce dépôt contient un ensemble de fichiers utiles pour un dépôt d'un schéma [Table Schema](https://specs.frictionlessdata.io/table-schema/).

- [`CHANGELOG.md`](CHANGELOG.md) contient la liste des changements entre les différentes versions de votre schéma ;
- [`exemple-valide.csv`](exemple-valide.csv) est un fichier CSV d'exemple conforme par rapport au schéma décrit dans `schema.json`  ;
- [`LICENSE.md`](LICENSE.md) est le fichier de licence du dépôt. Nous recommandons d'utiliser la [Licence Ouverte](https://www.etalab.gouv.fr/licence-ouverte-open-licence), cette licence est recommandée par l'administration française pour le partage de données et de documents ;
- [`README.md`](README.md) est le fichier que vous lisez actuellement. À terme, il devra présenter votre schéma ;
- [`requirements.txt`](requirements.txt) liste les dépendances Python nécessaires pour effectuer des tests en intégration continue sur votre dépôt ;
- [`schema.json`](schema.json) est le schéma au format Table Schema.

### Intégration continue

Ce dépôt est configuré pour utiliser de l'intégration continue, si vous utilisez GitHub. À chaque commit, une suite de tests sera lancée via [GitHub Actions](https://github.com/features/actions) afin de vérifier :

- que votre schéma est valide à la spécification Table Schema ;
- que vos fichiers d'exemples sont conformes au schéma.

Si vous n'utilisez pas GitHub, vous pouvez lancer ces tests sur votre machine ou sur un autre service d'intégration continue comme Gitlab CI, Jenkins, Circle CI, Travis etc. Consultez la configuration utilisée dans [`.github/workflows/test.yml`](.github/workflows/test.yml).

Localement, voici la procédure à suivre pour installer l'environnement de test et lancer les tests :

```bash
# Création d'un environnement virtuel en Python 3
python3 -m venv venv
source venv/bin/activate

# Installation des dépendances
pip install -r requirements.txt

# Test de la validité du schéma
frictionless validate --type schema schema.json

# Test de la conformité des fichiers d'exemples
frictionless validate --schema schema.json exemple-valide.csv
```
