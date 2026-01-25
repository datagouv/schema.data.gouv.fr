<MenuSchema />

<MenuSchema />

## data-inclusion-schema

Services de l’inclusion

Services de l’inclusion

- Site web : https://github.com/gip-inclusion/data-inclusion-schema
- Version : 1.0.3

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

#### Conditions d’accès - Propriété conditions_acces
> *Description : Conditions d’accès au service.  Il peut s’agir de prérequis ou de justificatifs à présenter.*<br>
> *Exemple : Maîtrise de la langue française à l’oral et à l’écrit*
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

#### Description - Propriété description
> *Description : Description du service.  Idéalement entre 200 et 2000 caractères. Privilégier des phrases courtes et un langage simple.*<br>
> *Exemple : Cet atelier-conseil vous permet d’identifier les compétences à développer pour atteindre vos objectifs d’évolution professionnelle et à découvrir les différentes modalités de formation.  Durée d’une journée et inscription via votre espace France Travail.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété frais
> *Description : Indique si l’accès au service est payant ou gratuit.  Si le service comporte des frais, ceux-ci devraient être précisés dans le champ `frais_precisions`.*<br>
> *Exemple : gratuit*
- Valeur optionnelle

#### Précisions sur les frais - Propriété frais_precisions
> *Description : Précisions sur les éventuels frais pour accéder au service.*<br>
> *Exemple : 10€ pour l’adhésion annuelle*
- Valeur optionnelle

#### Horaires d’accueil du public - Propriété horaires_accueil
> *Description : Horaires d’accueil du public pour ce service.  Si le champ n’est pas renseigné, les horaires d’accueil de la structure peuvent être utilisés.  Doit être au format [OpenStreetMap Opening Hours](https://wiki.openstreetmap.org/wiki/FR:Key:opening_hours).  [Outil d’aide à la saisie](https://projets.pavie.info/yohours/).*<br>
> *Exemple : Mo-Fr 08:30-12:30; PH off*
- Valeur optionnelle

#### Id - Propriété id
> *Description : Identifiant unique du service, obtenu par une combinaison de l’identifiant du producteur et de l’identifiant du service (fourni par le producteur).*<br>
> *Exemple : emplois-de-linclusion--17*
- Valeur obligatoire
- Type : chaîne de caractères

#### Latitude - Propriété latitude
- Valeur optionnelle

#### Lien Mobilisation - Propriété lien_mobilisation
> *Description : Lien pour accéder ou mobiliser l’offre de service.*<br>
> *Exemple : https://www.actionlogement.fr/demande-cfi*
- Valeur optionnelle

#### Lien Source - Propriété lien_source
> *Description : Lien pour accéder au service sur le site web du producteur.*<br>
> *Exemple : https://dora.inclusion.beta.gouv.fr/services/ass-pour-droit-a-l-i-nhes*
- Valeur optionnelle

#### Longitude - Propriété longitude
- Valeur optionnelle

#### Mobilisable Par - Propriété mobilisable_par
> *Description : Indique qui peut mobiliser le service : usagers, professionnels ou les deux.*<br>
> *Exemple : ['professionnels']*
- Valeur optionnelle

#### Mobilisation Precisions - Propriété mobilisation_precisions
> *Description : Précisions sur les modes de mobilisation du service.*<br>
> *Exemple : La demande est à faire depuis l’espace personnel du demandeur d’emploi, rubrique « mes aides », formulaire spécifique « Aide à la mobilité ».*
- Valeur optionnelle

#### Modes Accueil - Propriété modes_accueil
- Valeur optionnelle

#### Modes Mobilisation - Propriété modes_mobilisation
> *Description : Modes de mobilisation de l’offre de service.*<br>
> *Exemple : ['envoyer-un-courriel']*
- Valeur optionnelle

#### Nom - Propriété nom
> *Description : Nom du service.  Chaîne de caractères entre 3 et 150 caractères. Idéalement ne se termine pas par un point (sauf "etc.").*<br>
> *Exemple : Atelier insertion et posture professionnelle*
- Valeur obligatoire
- Type : chaîne de caractères

#### Nombre Semaines - Propriété nombre_semaines
> *Description : Nombre de semaines sur lequel dure le service.  Ne peut pas être inférieur à 1. L’absence de valeur signifie que le service n’est pas concerné (exemple aide financière) ou que l’information n’est pas disponible.  Champ utilisé dans le cadre des 15h-20h d’activité hebdomadaire des BRSA.*<br>
> *Exemple : 3*
- Valeur optionnelle

#### Publics - Propriété publics
> *Description : Publics visés par le service.  Un bénéficiaire est éligible s’il appartient à (au moins) un des publics spécifiés.  Les services sans publics spécifiques doivent contenir uniquement la valeur `tous-publics`. Celle-ci ne peut pas être utilisée avec d’autres valeurs.  Des informations complémentaires peuvent être précisées dans le champ `publics_precisions`.*<br>
> *Exemple : ['femmes']*
- Valeur optionnelle

#### Précisions sur les publics - Propriété publics_precisions
> *Description : Précisions sur les publics visés par le service.*<br>
> *Exemple : Le jeune entre 15 et 18 ans.*
- Valeur optionnelle

#### Source - Propriété source
> *Description : Identifiant du producteur original de la donnée.*<br>
> *Exemple : emplois-de-linclusion*
- Valeur obligatoire
- Type : chaîne de caractères

#### ID structure - Propriété structure_id
> *Description : Identifiant unique de la structure rattachée au service.*<br>
> *Exemple : dora--42*
- Valeur obligatoire
- Type : chaîne de caractères

#### Téléphone - Propriété telephone
> *Description : Numéro de téléphone à utiliser pour obtenir des informations complémentaires sur le service. Si le mode de mobilisation est `telephoner`, peut être utilisé pour mobiliser le service.  Chaîne de caractères contenant un seul numéro de téléphone, de préférence au format E.164.*<br>
> *Exemple : +33123456789*
- Valeur optionnelle

#### Thematiques - Propriété thematiques
> *Description : Thématiques adressées par le service.*<br>
> *Exemple : ['numerique--acquerir-un-equipement']*
- Valeur optionnelle

#### Propriété type
> *Description : Type de service.*<br>
> *Exemple : accompagnement*
- Valeur optionnelle

#### Volume Horaire Hebdomadaire - Propriété volume_horaire_hebdomadaire
> *Description : Durée du service en heures sur une semaine.  L’absence de valeur signifie que le service n’est pas concerné (exemple aide financière) ou que l’information n’est pas disponible.  Champ utilisé dans le cadre des 15h-20h d’activité hebdomadaire des BRSA.*<br>
> *Exemple : 1*
- Valeur optionnelle

#### Zone d’éligibilité - Propriété zone_eligibilite
> *Description : Zone géographique d’éligibilité du service.  Contient une liste de codes issus du [Code Officiel Géographique](https://www.insee.fr/fr/information/2560452) maintenu par l’INSEE.  Chaque code dans cette liste peut être un code commune, un code département, un code EPCI ou un code pays.  Si le service est éligible à l’ensemble d’une région, lister les codes des departements de cette région.  Si le service est éligible sur l’ensemble du territoire national, utiliser le code `france` (France) ou le code pays `99100`.  data·inclusion vérifie la validité des codes fournis. Les codes invalides sont supprimés de la liste.  [Outil de recherche des codes](https://www.insee.fr/fr/recherche/recherche-geographique)*<br>
> *Exemple : ['75056']*
- Valeur optionnelle

