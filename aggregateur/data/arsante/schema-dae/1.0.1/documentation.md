---
permalink: /arsante/schema-dae/latest/documentation.html
redirect_from: /arsante/schema-dae/1.0.1/documentation.html
title: Documentation de DAE
version: 1.0.1
---

## DAE

DAE

Spécification du modèle de données relatif aux DAE

- Schéma créé le : 01/01/2020
- Site web : https://gitlab.com/arsante/atlasante/schema-dae
- Version : 1.0.1

### Modèle de données


####  Nom donné au DAE - Propriété `nom`

> *Description : <br/>Ex : DAE-MinSanté-Duquesne*
- Valeur obligatoire
- Type : chaîne de caractères

####  Latitude - Propriété `lat_coor1`

> *Description : Coordonnée de latitude  exprimée conformément au système national de référence de coordonnées géographiques et planimétriques ou à défaut en WGS 84. Le signe de séparation entre les parties entière et décimale du nombre est le point<br/>Ex : 48.8521329*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -90 et 90

####  Latitude - Propriété `long_coor1`

> *Description : Coordonnée de longitude exprimée conformément au système national de référence de coordonnées géographiques et planimétriques ou à défaut en WGS 84. Le signe de séparation entre les parties entière et décimale du nombre est le point<br/>Ex : 2.3068453*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -180 et 180

####  Numéro de la voie - Propriété `adr_num`

> *Description : Numéro de la voie et, le cas échéant, sufixe, d'implantation du DAE<br/>Ex : 14*
- Valeur optionnelle
- Type : chaîne de caractères

####  Type et nom de la voie - Propriété `adr_voie`

> *Description : Type et nom de la voie ou lieu-dit d'implantation du DAE<br/>Ex : Avenue Duquesne*
- Valeur optionnelle
- Type : chaîne de caractères

####  Code Postal de la commune d'implantation du DAE - Propriété `com_cp`

> *Description : Code Postal de la commune d'implantation du DAE<br/>Ex : 75350*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{5}$`

####  Code Insee de la commune d'implantation du DAE - Propriété `com_insee`

> *Description : Code Insee de la commune d'implantation du DAE<br/>Ex : 75056*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d[AB\d]\d{3}$`

####  Nom de la commune d'implantation du DAE - Propriété `com_nom`

> *Description : <br/>Ex : Paris*
- Valeur optionnelle
- Type : chaîne de caractères

####  Environnement d'accès du DAE - Propriété `acc`

> *Description : Environnement d'accès du DAE<br/>Ex : Intérieur*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Intérieur
    - Extérieur

#### Propriété `acc_lib`

> *Description : Accès libre du DAE<br/>Ex : oui*
- Valeur obligatoire
- Type : booléen

#### Propriété `acc_pcsec`

> *Description : Poste de sécurité<br/>Ex : oui*
- Valeur optionnelle
- Type : booléen

#### Propriété `acc_acc`

> *Description : Présence d'un accueil public<br/>Ex : oui*
- Valeur optionnelle
- Type : booléen

####  Etage d'accessibilité du DAE - Propriété `acc_etg`

> *Description : Etage du bâtiment dans lequel le DAE est accessible<br/>Ex : 0 ou -1*
- Valeur optionnelle
- Type : chaîne de caractères

####  Complément d'information sur l'accès au DAE - Propriété `acc_complt`

> *Description : Complément d'information sur l'accès au DAE<br/>Ex : Au bout du couloir, dans un renfoncement à droite*
- Valeur optionnelle
- Type : chaîne de caractères

####  Photo 1 du DAE dans son environnement. Il est préconisé un plan large pour que le DAE soit visible dans son environnement. La photo déposée devra être libre de droit, sous format Open Source - Propriété `photo1`

> *Description : Photo au format url. Fichier (jpg, png ou gif)<br/>Ex : http://www.monsite.com/monimage.jpg*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^https?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:jpg|jpeg|gif|png)`

####  Photo 2 du DAE dans son environnement. Il est préconisé un plan large pour que le DAE soit visible dans son environnement. La photo déposée devra être libre de droit, sous format Open Source - Propriété `photo2`

> *Description : Photo au format url. Fichier (jpg, png ou gif)<br/>Ex : http://www.monsite.com/monimage.jpg*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^https?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:jpg|jpeg|gif|png)`

####  Pour les DAE non-disponibles 7j/7, détail de la disponibilité de l'appareil - Propriété `disp_j`

> *Description : Liste de valeurs séparées par '|' parmi :  7j/7, lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche, jours fériés, événements<br/>Ex : lundi|mercredi|vendredi*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^(7j/7|lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche|jours fériés|événements){1}(\|(7j/7|lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche|jours fériés|événements))*$`

####  Pour les DAE non-disponibles 24h/24, détail de la disponibilité de l'appareil - Propriété `disp_h`

> *Description : Liste de valeurs séparées par '|' parmi : heures ouvrables, heures de nuit, 24h/24<br/>Ex : heures ouvrables|heures de nuit*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^(heures ouvrables|heures de nuit|24h/24){1}(\|(heures ouvrables|heures de nuit|24h/24))*$`

####  Complément d'information sur la disponibilité du DAE - Propriété `disp_complt`

> *Description : <br/>Ex : *
- Valeur optionnelle
- Type : chaîne de caractères

####  Numéro de téléphone 1 sur le site d'implantation du DAE - Propriété `tel1`

> *Description : Numéro de téléphone 1 sur le site d'implantation du DAE (Conformité au standard norme ITU E123 et E164)<br/>Ex : +33102030405*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^(\+33|0|\+262|\+269|\+508|\+590|\+594|\+596|\+681|\+687|\+689)[1-9](\d\d){4}$`

####  Numéro 2 de téléphone 1 sur le site d'implantation du DAE - Propriété `tel2`

> *Description : Numéro 2 de téléphone 1 sur le site d'implantation du DAE (Conformité au standard norme ITU E123 et E164)<br/>Ex : +33102030405*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(\+33|0|\+262|\+269|\+508|\+590|\+594|\+596|\+681|\+687|\+689)[1-9](\d\d){4}$`

####  Adresse email de contact du site où le DAE a été implanté - Propriété `site_email`

> *Description : <br/>Ex : p.nom@domaine.fr*
- Valeur optionnelle
- Type : chaîne de caractères (format `email`)

####  Date d'installation du DAE - Propriété `date_instal`

> *Description : Date d'installation du DAE  au format ISO 8601 AAAA-MM-JJ<br/>Ex : 2019-09-30*
- Valeur optionnelle
- Type : date

####  Etat de fonctionnement du DAE - Propriété `etat_fonct`

> *Description : <br/>Ex : En fonctionnement*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - En fonctionnement
    - Hors service
    - Supprimé définitivement
    - Absent momentanément
    - Inconnu

####  Numéro SIREN du fabricant du DAE - Propriété `fab_siren`

> *Description : <br/>Ex : 123456789*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{9}$`

####  Raison sociale du fabricant du DAE - Propriété `fab_rais`

> *Description : <br/>Ex : CardiacScience, Philips, PhysioControl, Shiller, Zoll*
- Valeur obligatoire
- Type : chaîne de caractères

####  Numéro SIREN du mainteneur du DAE - Propriété `mnt_siren`

> *Description : <br/>Ex : 123456789*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{9}$`

####  Raison sociale du mainteneur du DAE - Propriété `mnt_rais`

> *Description : <br/>Ex : *
- Valeur optionnelle
- Type : chaîne de caractères

####  Nom du modèle de DAE - Propriété `modele`

> *Description : <br/>Ex : G3, HS1, CR+, Fredeasy, AED PLUS*
- Valeur obligatoire
- Type : chaîne de caractères

####  Numéro de série du DAE - Propriété `num_serie`

> *Description : <br/>Ex : X09E409930*
- Valeur obligatoire
- Type : chaîne de caractères

####  Identifiant unique du dispositif (IUD européen) - Propriété `id_euro`

> *Description : <br/>Ex : 1234567890*
- Valeur optionnelle
- Type : chaîne de caractères

####  Présence d'électrodes pédiatriques - Propriété `lc_ped`

> *Description : <br/>Ex : oui*
- Valeur optionnelle
- Type : booléen

####  Date de péremption des électrodes pédiatriques exprimée au format ISO 8601 - Propriété `dtpr_lcped`

> *Description : <br/>Ex : 2019-09-30*
- Valeur optionnelle
- Type : date

####  Date de péremption des électrodes adultes exprimée au format ISO 8601 - Propriété `dtpr_lcad`

> *Description : <br/>Ex : 2019-09-30*
- Valeur optionnelle
- Type : date

####  Date de péremption de la batterie exprimée au format ISO 8601 - Propriété `dtpr_bat`

> *Description : <br/>Ex : 2019-09-30*
- Valeur optionnelle
- Type : date

####  Fréquence de la maintenance - Propriété `freq_mnt`

> *Description : Echelle de temps entre deux interventions de maintenance sur un appareil) max  255 caractères<br/>Ex : Tous les 6 mois*
- Valeur optionnelle
- Type : chaîne de caractères

####  Dispositif de surveillance à distance du DAE - Propriété `dispsurv`

> *Description : <br/>Ex : oui*
- Valeur optionnelle
- Type : booléen

####  Date de la dernière maintenance du DAE - Propriété `dermnt`

> *Description : Date de la dernière maintenance du DAE  exprimée au format ISO 8601<br/>Ex : 2019-09-30*
- Valeur obligatoire
- Type : date

####  Numéro SIREN de l'exploitant du DAE - Propriété `expt_siren`

> *Description : <br/>Ex : *
- Valeur obligatoire
- Type : chaîne de caractères

####  Raison sociale de l'exploitant du DAE - Propriété `expt_rais`

> *Description : <br/>Ex : *
- Valeur obligatoire
- Type : chaîne de caractères

####  Numéro de téléphone 1 de l'exploitant - Propriété `expt_tel1`

> *Description : Numéro de téléphone 1 de l'exploitant (Conformité au standard norme ITU E123 et E164)<br/>Ex : +33102030405*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^(\+33|0|\+262|\+269|\+508|\+590|\+594|\+596|\+681|\+687|\+689)[1-9](\d\d){4}$`

####  Numéro de téléphone 2 de l'exploitant - Propriété `expt_tel2`

> *Description : Numéro de téléphone 2 de l'exploitant (Conformité au standard norme ITU E123 et E164)<br/>Ex : +33102030405*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(\+33|0|\+262|\+269|\+508|\+590|\+594|\+596|\+681|\+687|\+689)[1-9](\d\d){4}$`

####  Adresse électronique de l'exploitant - Propriété `expt_email`

> *Description : <br/>Ex : p.nom@domaine.fr*
- Valeur obligatoire
- Type : chaîne de caractères (format `email`)