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

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|nom (Nom donné au DAE)|chaîne de caractères|DAE-MinSanté-Duquesne|Valeur obligatoire|
|lat_coor1 (Latitude)|nombre réel|Coordonnée de latitude  exprimée conformément au système national de référence de coordonnées géographiques et planimétriques ou à défaut en WGS 84. Le signe de séparation entre les parties entière et décimale du nombre est le point|48.8521329|Valeur obligatoire, Valeur minimale : -90, Valeur maximale : 90|
|long_coor1 (Latitude)|nombre réel|Coordonnée de longitude exprimée conformément au système national de référence de coordonnées géographiques et planimétriques ou à défaut en WGS 84. Le signe de séparation entre les parties entière et décimale du nombre est le point|2.3068453|Valeur obligatoire, Valeur minimale : -180, Valeur maximale : 180|
|adr_num (Numéro de la voie)|chaîne de caractères|Numéro de la voie et, le cas échéant, sufixe, d'implantation du DAE|14|Valeur optionnelle|
|adr_voie (Type et nom de la voie)|chaîne de caractères|Type et nom de la voie ou lieu-dit d'implantation du DAE|Avenue Duquesne|Valeur optionnelle|
|com_cp (Code Postal de la commune d'implantation du DAE)|chaîne de caractères|Code Postal de la commune d'implantation du DAE|75350|Valeur optionnelle, Motif : `^\d{5}$`|
|com_insee (Code Insee de la commune d'implantation du DAE)|chaîne de caractères|Code Insee de la commune d'implantation du DAE|75056|Valeur optionnelle, Motif : `^\d[AB\d]\d{3}$`|
|com_nom (Nom de la commune d'implantation du DAE)|chaîne de caractères|Paris|Valeur optionnelle|
|acc (Environnement d'accès du DAE)|chaîne de caractères|Environnement d'accès du DAE|Intérieur|Valeur obligatoire, Valeurs autorisées : Intérieur, Extérieur|
|acc_lib|booléen|Valeurs considérées comme vraies : ['oui']Valeurs considérées comme fausses : ['non']Accès libre du DAE|oui|Valeur obligatoire|
|acc_pcsec|booléen|Valeurs considérées comme vraies : ['oui']Valeurs considérées comme fausses : ['non']Poste de sécurité|oui|Valeur optionnelle|
|acc_acc|booléen|Valeurs considérées comme vraies : ['oui']Valeurs considérées comme fausses : ['non']Présence d'un accueil public|oui|Valeur optionnelle|
|acc_etg (Etage d'accessibilité du DAE)|chaîne de caractères|Etage du bâtiment dans lequel le DAE est accessible|0 ou -1|Valeur optionnelle|
|acc_complt (Complément d'information sur l'accès au DAE)|chaîne de caractères|Complément d'information sur l'accès au DAE|Au bout du couloir, dans un renfoncement à droite|Valeur optionnelle|
|photo1 (Photo 1 du DAE dans son environnement. Il est préconisé un plan large pour que le DAE soit visible dans son environnement. La photo déposée devra être libre de droit, sous format Open Source)|chaîne de caractères|Photo au format url. Fichier (jpg, png ou gif)|http://www.monsite.com/monimage.jpg|Valeur optionnelle, Motif : `^https?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:jpg|jpeg|gif|png)`|
|photo2 (Photo 2 du DAE dans son environnement. Il est préconisé un plan large pour que le DAE soit visible dans son environnement. La photo déposée devra être libre de droit, sous format Open Source)|chaîne de caractères|Photo au format url. Fichier (jpg, png ou gif)|http://www.monsite.com/monimage.jpg|Valeur optionnelle, Motif : `^https?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:jpg|jpeg|gif|png)`|
|disp_j (Pour les DAE non-disponibles 7j/7, détail de la disponibilité de l'appareil)|chaîne de caractères|Liste de valeurs séparées par '|' parmi :  7j/7, lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche, jours fériés, événements|lundi|mercredi|vendredi|Valeur obligatoire, Motif : `^(7j/7|lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche|jours fériés|événements){1}(\|(7j/7|lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche|jours fériés|événements))*$`|
|disp_h (Pour les DAE non-disponibles 24h/24, détail de la disponibilité de l'appareil)|chaîne de caractères|Liste de valeurs séparées par '|' parmi : heures ouvrables, heures de nuit, 24h/24|heures ouvrables|heures de nuit|Valeur obligatoire, Motif : `^(heures ouvrables|heures de nuit|24h/24){1}(\|(heures ouvrables|heures de nuit|24h/24))*$`|
|disp_complt (Complément d'information sur la disponibilité du DAE)|chaîne de caractères||Valeur optionnelle|
|tel1 (Numéro de téléphone 1 sur le site d'implantation du DAE)|chaîne de caractères|Numéro de téléphone 1 sur le site d'implantation du DAE (Conformité au standard norme ITU E123 et E164)|+33102030405|Valeur obligatoire, Motif : `^(\+33|0|\+262|\+269|\+508|\+590|\+594|\+596|\+681|\+687|\+689)[1-9](\d\d){4}$`|
|tel2 (Numéro 2 de téléphone 1 sur le site d'implantation du DAE)|chaîne de caractères|Numéro 2 de téléphone 1 sur le site d'implantation du DAE (Conformité au standard norme ITU E123 et E164)|+33102030405|Valeur optionnelle, Motif : `^(\+33|0|\+262|\+269|\+508|\+590|\+594|\+596|\+681|\+687|\+689)[1-9](\d\d){4}$`|
|site_email (Adresse email de contact du site où le DAE a été implanté)|chaîne de caractères (format `email`)|p.nom@domaine.fr|Valeur optionnelle|
|date_instal (Date d'installation du DAE)|date|Date d'installation du DAE  au format ISO 8601 AAAA-MM-JJ|2019-09-30|Valeur optionnelle|
|etat_fonct (Etat de fonctionnement du DAE)|chaîne de caractères|En fonctionnement|Valeur obligatoire, Valeurs autorisées : En fonctionnement, Hors service, Supprimé définitivement, Absent momentanément, Inconnu|
|fab_siren (Numéro SIREN du fabricant du DAE)|chaîne de caractères|123456789|Valeur optionnelle, Motif : `^\d{9}$`|
|fab_rais (Raison sociale du fabricant du DAE)|chaîne de caractères|CardiacScience, Philips, PhysioControl, Shiller, Zoll|Valeur obligatoire|
|mnt_siren (Numéro SIREN du mainteneur du DAE)|chaîne de caractères|123456789|Valeur optionnelle, Motif : `^\d{9}$`|
|mnt_rais (Raison sociale du mainteneur du DAE)|chaîne de caractères||Valeur optionnelle|
|modele (Nom du modèle de DAE)|chaîne de caractères|G3, HS1, CR+, Fredeasy, AED PLUS|Valeur obligatoire|
|num_serie (Numéro de série du DAE)|chaîne de caractères|X09E409930|Valeur obligatoire|
|id_euro (Identifiant unique du dispositif (IUD européen))|chaîne de caractères|1234567890|Valeur optionnelle|
|lc_ped (Présence d'électrodes pédiatriques)|booléen|Valeurs considérées comme vraies : ['oui']Valeurs considérées comme fausses : ['non']oui|Valeur optionnelle|
|dtpr_lcped (Date de péremption des électrodes pédiatriques exprimée au format ISO 8601)|date|2019-09-30|Valeur optionnelle|
|dtpr_lcad (Date de péremption des électrodes adultes exprimée au format ISO 8601)|date|2019-09-30|Valeur optionnelle|
|dtpr_bat (Date de péremption de la batterie exprimée au format ISO 8601)|date|2019-09-30|Valeur optionnelle|
|freq_mnt (Fréquence de la maintenance)|chaîne de caractères|Echelle de temps entre deux interventions de maintenance sur un appareil) max  255 caractères|Tous les 6 mois|Valeur optionnelle|
|dispsurv (Dispositif de surveillance à distance du DAE)|booléen|Valeurs considérées comme vraies : ['oui']Valeurs considérées comme fausses : ['non']oui|Valeur optionnelle|
|dermnt (Date de la dernière maintenance du DAE)|date|Date de la dernière maintenance du DAE  exprimée au format ISO 8601|2019-09-30|Valeur obligatoire|
|expt_siren (Numéro SIREN de l'exploitant du DAE)|chaîne de caractères||Valeur obligatoire|
|expt_rais (Raison sociale de l'exploitant du DAE)|chaîne de caractères||Valeur obligatoire|
|expt_tel1 (Numéro de téléphone 1 de l'exploitant)|chaîne de caractères|Numéro de téléphone 1 de l'exploitant (Conformité au standard norme ITU E123 et E164)|+33102030405|Valeur obligatoire, Motif : `^(\+33|0|\+262|\+269|\+508|\+590|\+594|\+596|\+681|\+687|\+689)[1-9](\d\d){4}$`|
|expt_tel2 (Numéro de téléphone 2 de l'exploitant)|chaîne de caractères|Numéro de téléphone 2 de l'exploitant (Conformité au standard norme ITU E123 et E164)|+33102030405|Valeur optionnelle, Motif : `^(\+33|0|\+262|\+269|\+508|\+590|\+594|\+596|\+681|\+687|\+689)[1-9](\d\d){4}$`|
|expt_email (Adresse électronique de l'exploitant)|chaîne de caractères (format `email`)|p.nom@domaine.fr|Valeur obligatoire|