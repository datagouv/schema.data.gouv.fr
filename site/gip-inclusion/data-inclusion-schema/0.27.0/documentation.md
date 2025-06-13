<MenuSchema />

## data-inclusion-schema

Services de l’inclusion

Services de l’inclusion

- Site web : https://github.com/gip-inclusion/data-inclusion-schema
- Version : 0.27.0

### Arborescence des propriétés :

#### Adresse - Propriété adresse
- Valeur optionnelle

#### Code Insee - Propriété code_insee
- Valeur optionnelle

#### Code Postal - Propriété code_postal
- Valeur optionnelle

#### Commune - Propriété commune
- Valeur optionnelle

#### Complement Adresse - Propriété complement_adresse
- Valeur optionnelle

#### Contact Nom Prenom - Propriété contact_nom_prenom
- Valeur optionnelle

#### Courriel - Propriété courriel
> *Description : Courriel à utiliser pour obtenir des informations complémentaires sur le service. Si le mode de mobilisation est `envoyer-un-email`, peut être utilisé pour mobiliser le service.  Doit suivre le format de la RFC 5322. Vérification de l’existence du destinataire (envoi d’un courrier de notification)  Si non conforme ou destinataire inexistant, suppression de la valeur.*<br>
> *Exemple : exemple@inclusion.gouv.fr*
- Valeur optionnelle

#### Date de dernière modification - Propriété date_maj
> *Description : Date de dernière modification du service chez le producteur de données.*<br>
> *Exemple : 2025-02-14*
- Valeur obligatoire
- Type : chaîne de caractères

#### Formulaire En Ligne - Propriété formulaire_en_ligne
- Valeur optionnelle

#### Frais - Propriété frais
- Valeur optionnelle

#### Frais Autres - Propriété frais_autres
- Valeur optionnelle

#### Id - Propriété id
- Valeur obligatoire
- Type : chaîne de caractères

#### Justificatifs - Propriété justificatifs
- Valeur optionnelle

#### Latitude - Propriété latitude
- Valeur optionnelle

#### Longitude - Propriété longitude
- Valeur optionnelle

#### Modes Accueil - Propriété modes_accueil
- Valeur optionnelle

#### Modes Orientation Accompagnateur - Propriété modes_orientation_accompagnateur
- Valeur optionnelle

#### Modes Orientation Accompagnateur Autres - Propriété modes_orientation_accompagnateur_autres
- Valeur optionnelle

#### Modes Orientation Beneficiaire - Propriété modes_orientation_beneficiaire
- Valeur optionnelle

#### Modes Orientation Beneficiaire Autres - Propriété modes_orientation_beneficiaire_autres
- Valeur optionnelle

#### Nom - Propriété nom
> *Description : Nom du service.  Chaîne de caractères entre 3 et 150 caractères, ne se terminant pas par un point.*<br>
> *Exemple : Atelier insertion et posture professionnelle*
- Valeur obligatoire
- Type : chaîne de caractères

#### Nombre Semaines - Propriété nombre_semaines
> *Description : Nombre de semaines sur lequel dure le service.  Ne peut pas être inférieur à 1. L’absence de valeur signifie que le service n’est pas concerné (exemple aide financière) ou que l’information n’est pas disponible.  Champ utilisé dans le cadre des 15h-20h d’activité hebdomadaire des BRSA.*<br>
> *Exemple : 3*
- Valeur optionnelle

#### Page Web - Propriété page_web
> *Description : Lien vers une page web dédiée au service sur le site web de la structure. Ce champ n’est pas destiné à recevoir un lien vers le site d’un producteur de donnée.*<br>
> *Exemple : https://insersol.fr/biclou-atelier-reparation-participatif-solidaire/*
- Valeur optionnelle

#### Pre Requis - Propriété pre_requis
- Valeur optionnelle

#### Presentation Detail - Propriété presentation_detail
- Valeur optionnelle

#### Presentation Resume - Propriété presentation_resume
- Valeur optionnelle

#### Prise Rdv - Propriété prise_rdv
- Valeur optionnelle

#### Profils - Propriété profils
- Valeur optionnelle

#### Profils Precisions - Propriété profils_precisions
- Valeur optionnelle

#### Source - Propriété source
- Valeur obligatoire
- Type : chaîne de caractères

#### Structure Id - Propriété structure_id
- Valeur obligatoire
- Type : chaîne de caractères

#### Téléphone - Propriété telephone
> *Description : Numéro de téléphone à utiliser pour obtenir des informations complémentaires sur le service. Si le mode de mobilisation est `telephoner`, peut être utilisé pour mobiliser le service.  Chaîne de caractères contenant un seul numéro de téléphone, de préférence au format E.164.*<br>
> *Exemple : +33123456789*
- Valeur optionnelle

#### Thematiques - Propriété thematiques
- Valeur optionnelle

#### Types - Propriété types
- Valeur optionnelle

#### Volume Horaire Hebdomadaire - Propriété volume_horaire_hebdomadaire
> *Description : Durée du service en heures sur une semaine.  L’absence de valeur signifie que le service n’est pas concerné (exemple aide financière) ou que l’information n’est pas disponible.  Champ utilisé dans le cadre des 15h-20h d’activité hebdomadaire des BRSA.*<br>
> *Exemple : 1*
- Valeur optionnelle

#### Zone Diffusion Code - Propriété zone_diffusion_code
- Valeur optionnelle

#### Zone Diffusion Nom - Propriété zone_diffusion_nom
- Valeur optionnelle

