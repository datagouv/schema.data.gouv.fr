<MenuSchema />

## DAE

DAE

Spécification du modèle de données relatif aux DAE

- Schéma créé le : 01/01/2020
- Site web : https://gitlab.com/arsante/atlasante/schema-dae
- Version : 1.0.2

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [nom](#nom-donne-au-dae-propriete-nom) | chaîne de caractères  | Oui |
| [lat_coor1](#latitude-propriete-lat-coor1) | nombre réel  | Oui |
| [long_coor1](#latitude-propriete-long-coor1) | nombre réel  | Oui |
| [adr_num](#numero-de-la-voie-propriete-adr-num) | chaîne de caractères  | Non |
| [adr_voie](#type-et-nom-de-la-voie-propriete-adr-voie) | chaîne de caractères  | Non |
| [com_cp](#code-postal-de-la-commune-d-implantation-du-dae-propriete-com-cp) | chaîne de caractères  | Non |
| [com_insee](#code-insee-de-la-commune-d-implantation-du-dae-propriete-com-insee) | chaîne de caractères  | Non |
| [com_nom](#nom-de-la-commune-d-implantation-du-dae-propriete-com-nom) | chaîne de caractères  | Non |
| [acc](#environnement-d-acces-du-dae-propriete-acc) | chaîne de caractères  | Oui |
| [acc_lib](#propriete-acc-lib) | booléen  | Oui |
| [acc_pcsec](#propriete-acc-pcsec) | booléen  | Non |
| [acc_acc](#propriete-acc-acc) | booléen  | Non |
| [acc_etg](#etage-d-accessibilite-du-dae-propriete-acc-etg) | chaîne de caractères  | Non |
| [acc_complt](#complement-d-information-sur-l-acces-au-dae-propriete-acc-complt) | chaîne de caractères  | Non |
| [photo1](#photo-1-du-dae-dans-son-environnement--il-est-preconise-un-plan-large-pour-que-le-dae-soit-visible-dans-son-environnement--la-photo-deposee-devra-etre-libre-de-droit,-sous-format-open-source-propriete-photo1) | chaîne de caractères (format `uri`) | Non |
| [photo2](#photo-2-du-dae-dans-son-environnement--il-est-preconise-un-plan-large-pour-que-le-dae-soit-visible-dans-son-environnement--la-photo-deposee-devra-etre-libre-de-droit,-sous-format-open-source-propriete-photo2) | chaîne de caractères (format `uri`) | Non |
| [disp_j](#pour-les-dae-non-disponibles-7j-7,-detail-de-la-disponibilite-de-l-appareil-propriete-disp-j) | chaîne de caractères  | Oui |
| [disp_h](#pour-les-dae-non-disponibles-24h-24,-detail-de-la-disponibilite-de-l-appareil-propriete-disp-h) | chaîne de caractères  | Oui |
| [disp_complt](#complement-d-information-sur-la-disponibilite-du-dae-propriete-disp-complt) | chaîne de caractères  | Non |
| [tel1](#numero-de-telephone-1-sur-le-site-d-implantation-du-dae-propriete-tel1) | chaîne de caractères  | Oui |
| [tel2](#numero-2-de-telephone-1-sur-le-site-d-implantation-du-dae-propriete-tel2) | chaîne de caractères  | Non |
| [site_email](#adresse-email-de-contact-du-site-ou-le-dae-a-ete-implante-propriete-site-email) | chaîne de caractères (format `email`) | Non |
| [date_instal](#date-d-installation-du-dae-propriete-date-instal) | date  | Non |
| [etat_fonct](#etat-de-fonctionnement-du-dae-propriete-etat-fonct) | chaîne de caractères  | Oui |
| [fab_siren](#numero-siren-du-fabricant-du-dae-propriete-fab-siren) | chaîne de caractères  | Non |
| [fab_rais](#raison-sociale-du-fabricant-du-dae-propriete-fab-rais) | chaîne de caractères  | Oui |
| [mnt_siren](#numero-siren-du-mainteneur-du-dae-propriete-mnt-siren) | chaîne de caractères  | Non |
| [mnt_rais](#raison-sociale-du-mainteneur-du-dae-propriete-mnt-rais) | chaîne de caractères  | Non |
| [modele](#nom-du-modele-de-dae-propriete-modele) | chaîne de caractères  | Oui |
| [num_serie](#numero-de-serie-du-dae-propriete-num-serie) | chaîne de caractères  | Oui |
| [id_euro](#identifiant-unique-du-dispositif-(iud-europeen)-propriete-id-euro) | chaîne de caractères  | Non |
| [lc_ped](#presence-d-electrodes-pediatriques-propriete-lc-ped) | booléen  | Non |
| [dtpr_lcped](#date-de-peremption-des-electrodes-pediatriques-exprimee-au-format-iso-8601-propriete-dtpr-lcped) | date  | Non |
| [dtpr_lcad](#date-de-peremption-des-electrodes-adultes-exprimee-au-format-iso-8601-propriete-dtpr-lcad) | date  | Non |
| [dtpr_bat](#date-de-peremption-de-la-batterie-exprimee-au-format-iso-8601-propriete-dtpr-bat) | date  | Non |
| [freq_mnt](#frequence-de-la-maintenance-propriete-freq-mnt) | chaîne de caractères  | Non |
| [dispsurv](#dispositif-de-surveillance-a-distance-du-dae-propriete-dispsurv) | booléen  | Non |
| [dermnt](#date-de-la-derniere-maintenance-du-dae-propriete-dermnt) | date  | Oui |
| [expt_siren](#numero-siren-de-l-exploitant-du-dae-propriete-expt-siren) | chaîne de caractères  | Oui |
| [expt_rais](#raison-sociale-de-l-exploitant-du-dae-propriete-expt-rais) | chaîne de caractères  | Oui |
| [expt_tel1](#numero-de-telephone-1-de-l-exploitant-propriete-expt-tel1) | chaîne de caractères  | Oui |
| [expt_tel2](#numero-de-telephone-2-de-l-exploitant-propriete-expt-tel2) | chaîne de caractères  | Non |
| [expt_email](#adresse-electronique-de-l-exploitant-propriete-expt-email) | chaîne de caractères (format `email`) | Oui |

#### Nom donné au DAE - Propriété `nom`

> *Description : *<br/>*Exemple : DAE-MinSanté-Duquesne*
- Valeur obligatoire
- Type : chaîne de caractères

#### Latitude - Propriété `lat_coor1`

> *Description : Coordonnée de latitude  exprimée conformément au système national de référence de coordonnées géographiques et planimétriques ou à défaut en WGS 84. Le signe de séparation entre les parties entière et décimale du nombre est le point*<br/>*Exemple : 48.8521329*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -90 et 90

#### Latitude - Propriété `long_coor1`

> *Description : Coordonnée de longitude exprimée conformément au système national de référence de coordonnées géographiques et planimétriques ou à défaut en WGS 84. Le signe de séparation entre les parties entière et décimale du nombre est le point*<br/>*Exemple : 2.3068453*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -180 et 180

#### Numéro de la voie - Propriété `adr_num`

> *Description : Numéro de la voie et, le cas échéant, sufixe, d'implantation du DAE*<br/>*Exemple : 14*
- Valeur optionnelle
- Type : chaîne de caractères

#### Type et nom de la voie - Propriété `adr_voie`

> *Description : Type et nom de la voie ou lieu-dit d'implantation du DAE*<br/>*Exemple : Avenue Duquesne*
- Valeur optionnelle
- Type : chaîne de caractères

#### Code Postal de la commune d'implantation du DAE - Propriété `com_cp`

> *Description : Code Postal de la commune d'implantation du DAE*<br/>*Exemple : 75350*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{5}$`

#### Code Insee de la commune d'implantation du DAE - Propriété `com_insee`

> *Description : Code Insee de la commune d'implantation du DAE*<br/>*Exemple : 75056*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d[AB\d]\d{3}$`

#### Nom de la commune d'implantation du DAE - Propriété `com_nom`

> *Description : *<br/>*Exemple : Paris*
- Valeur optionnelle
- Type : chaîne de caractères

#### Environnement d'accès du DAE - Propriété `acc`

> *Description : Environnement d'accès du DAE*<br/>*Exemple : Intérieur*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Intérieur`
    - `Extérieur`

#### Propriété `acc_lib`

> *Description : Accès libre du DAE*<br/>*Exemple : oui*
- Valeur obligatoire
- Type : booléen

#### Propriété `acc_pcsec`

> *Description : Poste de sécurité*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : booléen

#### Propriété `acc_acc`

> *Description : Présence d'un accueil public*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : booléen

#### Etage d'accessibilité du DAE - Propriété `acc_etg`

> *Description : Etage du bâtiment dans lequel le DAE est accessible*<br/>*Exemple : 0 ou -1*
- Valeur optionnelle
- Type : chaîne de caractères

#### Complément d'information sur l'accès au DAE - Propriété `acc_complt`

> *Description : Complément d'information sur l'accès au DAE*<br/>*Exemple : Au bout du couloir, dans un renfoncement à droite*
- Valeur optionnelle
- Type : chaîne de caractères

#### Photo 1 du DAE dans son environnement. Il est préconisé un plan large pour que le DAE soit visible dans son environnement. La photo déposée devra être libre de droit, sous format Open Source - Propriété `photo1`

> *Description : Photo au format url. Fichier (jpg, png ou gif)*<br/>*Exemple : http://www.monsite.com/monimage.jpg*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)
- Motif : `^https?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:jpg|jpeg|gif|png)`

#### Photo 2 du DAE dans son environnement. Il est préconisé un plan large pour que le DAE soit visible dans son environnement. La photo déposée devra être libre de droit, sous format Open Source - Propriété `photo2`

> *Description : Photo au format url. Fichier (jpg, png ou gif)*<br/>*Exemple : http://www.monsite.com/monimage.jpg*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)
- Motif : `^https?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:jpg|jpeg|gif|png)`

#### Pour les DAE non-disponibles 7j/7, détail de la disponibilité de l'appareil - Propriété `disp_j`

> *Description : Liste de valeurs séparées par '|' parmi :  7j/7, lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche, jours fériés, événements*<br/>*Exemple : lundi|mercredi|vendredi*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^(7j/7|lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche|jours fériés|événements){1}(\|(7j/7|lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche|jours fériés|événements))*$`

#### Pour les DAE non-disponibles 24h/24, détail de la disponibilité de l'appareil - Propriété `disp_h`

> *Description : Liste de valeurs séparées par '|' parmi : heures ouvrables, heures de nuit, 24h/24*<br/>*Exemple : heures ouvrables|heures de nuit*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^(heures ouvrables|heures de nuit|24h/24){1}(\|(heures ouvrables|heures de nuit|24h/24))*$`

#### Complément d'information sur la disponibilité du DAE - Propriété `disp_complt`

> *Description : *
- Valeur optionnelle
- Type : chaîne de caractères

#### Numéro de téléphone 1 sur le site d'implantation du DAE - Propriété `tel1`

> *Description : Numéro de téléphone 1 sur le site d'implantation du DAE (Conformité au standard norme ITU E123 et E164)*<br/>*Exemple : +33102030405*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^(\+33|0|\+262|\+269|\+508|\+590|\+594|\+596|\+681|\+687|\+689)[1-9](\d\d){4}$`

#### Numéro 2 de téléphone 1 sur le site d'implantation du DAE - Propriété `tel2`

> *Description : Numéro 2 de téléphone 1 sur le site d'implantation du DAE (Conformité au standard norme ITU E123 et E164)*<br/>*Exemple : +33102030405*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(\+33|0|\+262|\+269|\+508|\+590|\+594|\+596|\+681|\+687|\+689)[1-9](\d\d){4}$`

#### Adresse email de contact du site où le DAE a été implanté - Propriété `site_email`

> *Description : *<br/>*Exemple : p.nom@domaine.fr*
- Valeur optionnelle
- Type : chaîne de caractères (format `email`)

#### Date d'installation du DAE - Propriété `date_instal`

> *Description : Date d'installation du DAE  au format ISO 8601 AAAA-MM-JJ*<br/>*Exemple : 2019-09-30*
- Valeur optionnelle
- Type : date

#### Etat de fonctionnement du DAE - Propriété `etat_fonct`

> *Description : *<br/>*Exemple : En fonctionnement*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `En fonctionnement`
    - `Hors service`
    - `Supprimé définitivement`
    - `Absent momentanément`
    - `Inconnu`

#### Numéro SIREN du fabricant du DAE - Propriété `fab_siren`

> *Description : *<br/>*Exemple : 123456789*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{9}$`

#### Raison sociale du fabricant du DAE - Propriété `fab_rais`

> *Description : *<br/>*Exemple : CardiacScience, Philips, PhysioControl, Shiller, Zoll*
- Valeur obligatoire
- Type : chaîne de caractères

#### Numéro SIREN du mainteneur du DAE - Propriété `mnt_siren`

> *Description : *<br/>*Exemple : 123456789*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{9}$`

#### Raison sociale du mainteneur du DAE - Propriété `mnt_rais`

> *Description : *
- Valeur optionnelle
- Type : chaîne de caractères

#### Nom du modèle de DAE - Propriété `modele`

> *Description : *<br/>*Exemple : G3, HS1, CR+, Fredeasy, AED PLUS*
- Valeur obligatoire
- Type : chaîne de caractères

#### Numéro de série du DAE - Propriété `num_serie`

> *Description : *<br/>*Exemple : X09E409930*
- Valeur obligatoire
- Type : chaîne de caractères

#### Identifiant unique du dispositif (IUD européen) - Propriété `id_euro`

> *Description : *<br/>*Exemple : 1234567890*
- Valeur optionnelle
- Type : chaîne de caractères

#### Présence d'électrodes pédiatriques - Propriété `lc_ped`

> *Description : *<br/>*Exemple : oui*
- Valeur optionnelle
- Type : booléen

#### Date de péremption des électrodes pédiatriques exprimée au format ISO 8601 - Propriété `dtpr_lcped`

> *Description : *<br/>*Exemple : 2019-09-30*
- Valeur optionnelle
- Type : date

#### Date de péremption des électrodes adultes exprimée au format ISO 8601 - Propriété `dtpr_lcad`

> *Description : *<br/>*Exemple : 2019-09-30*
- Valeur optionnelle
- Type : date

#### Date de péremption de la batterie exprimée au format ISO 8601 - Propriété `dtpr_bat`

> *Description : *<br/>*Exemple : 2019-09-30*
- Valeur optionnelle
- Type : date

#### Fréquence de la maintenance - Propriété `freq_mnt`

> *Description : Echelle de temps entre deux interventions de maintenance sur un appareil) max  255 caractères*<br/>*Exemple : Tous les 6 mois*
- Valeur optionnelle
- Type : chaîne de caractères

#### Dispositif de surveillance à distance du DAE - Propriété `dispsurv`

> *Description : *<br/>*Exemple : oui*
- Valeur optionnelle
- Type : booléen

#### Date de la dernière maintenance du DAE - Propriété `dermnt`

> *Description : Date de la dernière maintenance du DAE  exprimée au format ISO 8601*<br/>*Exemple : 2019-09-30*
- Valeur obligatoire
- Type : date

#### Numéro SIREN de l'exploitant du DAE - Propriété `expt_siren`

> *Description : *
- Valeur obligatoire
- Type : chaîne de caractères

#### Raison sociale de l'exploitant du DAE - Propriété `expt_rais`

> *Description : *
- Valeur obligatoire
- Type : chaîne de caractères

#### Numéro de téléphone 1 de l'exploitant - Propriété `expt_tel1`

> *Description : Numéro de téléphone 1 de l'exploitant (Conformité au standard norme ITU E123 et E164)*<br/>*Exemple : +33102030405*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^(\+33|0|\+262|\+269|\+508|\+590|\+594|\+596|\+681|\+687|\+689)[1-9](\d\d){4}$`

#### Numéro de téléphone 2 de l'exploitant - Propriété `expt_tel2`

> *Description : Numéro de téléphone 2 de l'exploitant (Conformité au standard norme ITU E123 et E164)*<br/>*Exemple : +33102030405*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(\+33|0|\+262|\+269|\+508|\+590|\+594|\+596|\+681|\+687|\+689)[1-9](\d\d){4}$`

#### Adresse électronique de l'exploitant - Propriété `expt_email`

> *Description : *<br/>*Exemple : p.nom@domaine.fr*
- Valeur obligatoire
- Type : chaîne de caractères (format `email`)
