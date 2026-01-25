<MenuSchema />

<MenuSchema />

## Lieux de médiation numérique

Spécification du standard national des lieux de médiation numérique

- Auteur : Datactivist et la MedNum pour l'Agence nationale de la cohésion des territoires (ANCT)
- Schéma créé le : 04/07/2022
- Site web : https://github.com/LaMednum/standard-mediation-num
- Version : 0.1.0
- Clé primaire : `id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id](#identifiant-unique-local-du-lieu-propriete-id) | chaîne de caractères  | Oui |
| [pivot](#siret-ou-rna-propriete-pivot) | chaîne de caractères  | Oui |
| [nom](#nom-propriete-nom) | chaîne de caractères  | Oui |
| [commune](#commune-propriete-commune) | chaîne de caractères  | Oui |
| [code_postal](#code-postal-propriete-code-postal) | chaîne de caractères  | Oui |
| [code_insee](#code-officiel-geographique-propriete-code-insee) | chaîne de caractères  | Non |
| [adresse](#adresse-propriete-adresse) | chaîne de caractères  | Oui |
| [complement_adresse](#complement-d-adresse-propriete-complement-adresse) | chaîne de caractères  | Non |
| [latitude](#latitude-propriete-latitude) | nombre réel  | Non |
| [longitude](#longitude-propriete-longitude) | nombre réel  | Non |
| [cle_ban](#cle-nationale-d'interoperabilite-de-l-adresse-propriete-cle-ban) | chaîne de caractères  | Non |
| [typologie](#typologie-propriete-typologie) | chaîne de caractères  | Non |
| [telephone](#numero-de-telephone-propriete-telephone) | chaîne de caractères  | Non |
| [courriel](#courriel-propriete-courriel) | chaîne de caractères  | Non |
| [site_web](#site-web-propriete-site-web) | chaîne de caractères  | Non |
| [horaires](#horaires-propriete-horaires) | chaîne de caractères  | Non |
| [presentation_resume](#presentation-resume-propriete-presentation-resume) | chaîne de caractères  | Non |
| [presentation_detail](#presentation-detaillee-propriete-presentation-detail) | chaîne de caractères  | Non |
| [source](#structure-collectant-la-donnee-propriete-source) | chaîne de caractères  | Non |
| [structure_parente](#structure-parente-propriete-structure-parente) | chaîne de caractères  | Non |
| [date_maj](#date-de-mise-a-jour-propriete-date-maj) | date (format `default`) | Oui |
| [services](#services-propriete-services) | chaîne de caractères  | Oui |
| [publics_accueillis](#publics-accueillis-propriete-publics-accueillis) | chaîne de caractères  | Non |
| [conditions_acces](#conditions-d-acces-propriete-conditions-acces) | chaîne de caractères  | Non |
| [labels_nationaux](#labels-nationaux-propriete-labels-nationaux) | chaîne de caractères  | Non |
| [labels_autres](#autres-labels-propriete-labels-autres) | chaîne de caractères  | Non |
| [modalites_accompagnement](#modalites-d-accompagnement-propriete-modalites-accompagnement) | chaîne de caractères  | Non |
| [accessibilite](#accessibilite-accueil-handicap-propriete-accessibilite) | chaîne de caractères  | Non |
| [prise_rdv](#prise-de-rdv-propriete-prise-rdv) | chaîne de caractères  | Non |

#### Identifiant unique local du lieu - Propriété `id`

> *Description : Ce champ contient un identifiant unique local. Le producteur de données le génère librement selon sa méthode. Il peut par exemple s'agir d'une suite de lettres et/ou de chiffres, ou d'un UUID (universal unique identifier) produit aléatoirement : https://www.uuidgenerator.net/ Ce champ permet d'éviter localement les doublons, par exemple dans le cas où deux lieux auraient le même SIRET. Il est un pré-requis pour assurer la compatibilité avec le référentiel national sur l'offre d'insertion : https://www.data.inclusion.beta.gouv.fr/*<br/>*Exemple : structure-1*
- Valeur obligatoire
- Type : chaîne de caractères

#### SIRET ou RNA - Propriété `pivot`

> *Description : Ce champ contient une donnée pivot provenant d'une des deux bases de référence : le répertoire SIRENE des entreprises et de leurs établissements de l'Insee ou le Répertoire national des associations du ministère de l'intérieur (RNA). Pour chaque lieu, il faut indiquer soit le code SIRET (dont disposent la majorité des associations) récupérable via annuaire-entreprises.data.gouv.fr soit le numéro RNA (Répertoire National des Associations) du lieu récupérable via journal-officiel.gouv.fr/pages/associations-recherche/. Les associations disposant d'un SIRET doivent renseigner uniquement ce code. Le RNA n'est à renseigner que dans le cas où une association ne disposerait pas de SIRET. Dans la mesure du possible, les concepteurs du schéma mettront à disposition des outils pour associer facilement les données au SIRET correspondant. Dans le cas où le SIRET concernerait plusieurs lieux (plusieurs bibliothèques rattachées à une même commune par exemple), l'identification unique permettra de les dédoublonner. Ce champ est un pré-requis pour assurer la compatibilité avec data.inclusion.*<br/>*Exemple : 43493312300029*
- Valeur obligatoire
- Type : chaîne de caractères

#### Nom - Propriété `nom`

> *Description : Ce champ contient le nom du lieu.*<br/>*Exemple : Anonymal*
- Valeur obligatoire
- Type : chaîne de caractères

#### Commune - Propriété `commune`

> *Description : Ce champ contient le nom de la commune rattachée à l'adresse du lieu. Le site national des adresses permet de rechercher une adresse (voie, lieu-dit, commune, code postal) : adresse.data.gouv.fr*<br/>*Exemple : Reims*
- Valeur obligatoire
- Type : chaîne de caractères

#### Code postal - Propriété `code_postal`

> *Description : Ce champ contient le code postal rattaché à l'adresse du lieu. Le site national des adresses permet de rechercher une adresse (voie, lieu-dit, commune, code postal) : adresse.data.gouv.fr*<br/>*Exemple : 51100*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{5}$`

#### Code officiel géographique - Propriété `code_insee`

> *Description : Ce champ contient le code officiel géographique de la commune rattachée à l'adresse du lieu.*<br/>*Exemple : 51454*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### Adresse - Propriété `adresse`

> *Description : Ce champ contient les éléments de l'adresse du lieu relatifs à la voie. Typiquement, <numero_voie> <indice_de_repetition> <type_voie> <libelle_voie>. Le site national des adresses permet de rechercher une adresse (voie, lieu-dit, commune, code postal) : adresse.data.gouv.fr*<br/>*Exemple : 12 BIS RUE DE LECLERCQ*
- Valeur obligatoire
- Type : chaîne de caractères

#### Complément d'adresse - Propriété `complement_adresse`

> *Description : Ce champ contient des éléments permettant de préciser l'adresse et la situation exactes du lieu, afin d'en permettre l'accès aux usagers. Cela peut être un numéro d'appartement, un étage, un lieu-dit, etc.*<br/>*Exemple : Le patio du bois de l'Aulne*
- Valeur optionnelle
- Type : chaîne de caractères

#### Latitude - Propriété `latitude`

> *Description : Ce champ contient la latitude du lieu, dans le système WGS84 (GPS), typiquement issue du géocodage de son adresse et pouvant servir à la localiser. Il est possible de copier les coordonnées GPS depuis le site : adresse.data.gouv.fr*<br/>*Exemple : 43.52609*
- Valeur optionnelle
- Type : nombre réel

#### Longitude - Propriété `longitude`

> *Description : Ce champ contient la longitude du lieu, dans le système WGS84 (GPS), typiquement issue du géocodage de son adresse et pouvant servir à la localiser. Il est possible de copier les coordonnées GPS depuis le site : adresse.data.gouv.fr*<br/>*Exemple : 5.41423*
- Valeur optionnelle
- Type : nombre réel

#### Clé nationale d’interopérabilité de l'adresse - Propriété `cle_ban`

> *Description : Cet identifiant est la clé nationale d’interopérabilité de la Base Adresse Nationale (BAN). Il permet de distinguer plus facilement les lieux entre les bases, notamment quand le SIRET est identique à plusieurs lieux.  Il désigne une valeur unique à chaque adresse, il peut être récupéré facilement en recherchant l’adresse du lieu sur le site : adresse.data.gouv.fr *<br/>*Exemple : 13001_3079_00001*
- Valeur optionnelle
- Type : chaîne de caractères

#### Typologie - Propriété `typologie`

> *Description : La valeur de ce champ indique le type du lieu : CCAS, ASSO, COMMUNE, etc. Les valeurs possibles (il est possible d'en renseigner plusieurs) sont restreintes au vocabulaire décrivant les types de structures : https://www.data.inclusion.beta.gouv.fr/schemas-de-donnees-de-loffre/schema-des-structures-dinsertion/typologies-de-structure*<br/>*Exemple : TIERS_LIEUX;ASSO*
- Valeur optionnelle
- Type : chaîne de caractères

#### Numéro de téléphone - Propriété `telephone`

> *Description : Ce champ contient un numéro de téléphone du lieu. Le format international doit être respecté : le premier zéro suivant l'indicatif pays (+33) est supprimé et il n'y a pas d'espaces.*<br/>*Exemple : +33180059880*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(\+33|\+590|\+594|\+262|\+596|\+269|\+687|\+689|\+508|\+681)(\d){6,9}$`

#### Courriel - Propriété `courriel`

> *Description : Ce champ contient l'adresse email générique de contact du lieu.*<br/>*Exemple : contact@laquincaillerie.tl*
- Valeur optionnelle
- Type : chaîne de caractères

#### Site web - Propriété `site_web`

> *Description : Ce champ contient une ou plusieurs URL vers le site internet du lieu et/ou les réseaux sociaux. Pour renseigner plusieurs URL, il est nécessaire de les séparer par une virgule, sans espace.*<br/>*Exemple : https://www.laquincaillerie.tl/;https://m.facebook.com/laquincaillerienumerique/*
- Valeur optionnelle
- Type : chaîne de caractères

#### Horaires - Propriété `horaires`

> *Description : Ce champ indique les jours et horaires d'ouverture du lieu, en respectant le format proposé par OpenStreetMap (https://wiki.openstreetmap.org/wiki/FR:Key:opening_hours). L'outil YoHours (https://projets.pavie.info/yohours/) permet de générer des horaires au bon format. Le format OSM permet d'indiquer des exceptions pendant certaines périodes (vacances, jours fériés…). Pour les générer au bon format en utilisant YoHours, il suffit de les renseigner en cliquant sur le bouton 'plus' vert, situé en haut à gauche.*<br/>*Exemple : Mo-Fr 09:00-12:00,14:00-18:30; Sa 08:30-12:00*
- Valeur optionnelle
- Type : chaîne de caractères

#### Présentation résumé - Propriété `presentation_resume`

> *Description : Ce champ contient une courte description du lieu (500 caractères maximum).*<br/>*Exemple : Notre association propose des formations aux outils numériques à destination des personnes âgées.*
- Valeur optionnelle
- Type : chaîne de caractères
- Moins de 500 caractères

#### Présentation détaillée - Propriété `presentation_detail`

> *Description : Ce champ contient une description plus détaillée du lieu. Il est par exemple possible de préciser si des aidants sont itinérants.*<br/>*Exemple : Notre parcours d'initiation permet l'acquisition de compétences numériques de base. Nous proposons également un accompagnement à destination des personnes déjà initiées qui souhaiteraient approfondir leurs connaissances. Du matériel informatique est en libre accès pour nos adhérents tous les après-midis. En plus de d'accueillir les personnes dans notre lieu en semaine (sur rendez-vous), nous assurons une permanence le samedi matin dans la médiathèque XX.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Structure collectant la donnée - Propriété `source`

> *Description : La valeur de ce champ détaille la structure qui a collecté les données sur le lieu. Cela peut être la structure elle-même ou une structure tierce (une collectivité territoriale, un réseau de médiation numérique...)*<br/>*Exemple : Hubik*
- Valeur optionnelle
- Type : chaîne de caractères

#### Structure parente - Propriété `structure_parente`

> *Description : Ce champ permet de décrire le réseau/la structure auquel le lieu appartient. Pour le remplir, indiquer le nom de cette entité.*<br/>*Exemple : Pôle emploi*
- Valeur optionnelle
- Type : chaîne de caractères

#### Date de mise à jour - Propriété `date_maj`

> *Description : Ce champ contient la date à laquelle la donnée considérée a été mise à jour. Il respecte le format ISO 8601 : année-mois-jour (YYYY-MM-DD).*<br/>*Exemple : 2022-06-02*
- Valeur obligatoire
- Type : date (format `default`)

#### Services - Propriété `services`

> *Description : Ce champ permet de décrire les types d'accompagnement proposés dans l'offre du lieu. Sélectionner une ou plusieurs valeurs séparées par un point-virgule sans espace parmi la liste suivante : Devenir autonome dans les démarches administratives ; Réaliser des démarches administratives avec un accompagnement ; Prendre en main un smartphone ou une tablette ; Prendre en main un ordinateur ; Utiliser le numérique au quotidien ; Approfondir ma culture numérique ; Favoriser mon insertion professionnelle ; Accéder à une connexion internet ; Accéder à du matériel ; S'équiper en matériel informatique ; Créer et développer mon entreprise ; Créer avec le numérique ; Accompagner les démarches de santé ; Promouvoir la citoyenneté numérique ; Soutenir la parentalité et l'éducation avec le numérique*<br/>*Exemple : Devenir autonome dans les démarches administratives;Réaliser des démarches administratives avec un accompagnement;Prendre en main un smartphone ou une tablette;Prendre en main un ordinateur;Utiliser le numérique au quotidien;Approfondir ma culture numérique;Favoriser mon insertion professionnelle;Accéder à une connexion internet;Accéder à du matériel*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `(?:(?:^|;)(Devenir autonome dans les démarches administratives|Réaliser des démarches administratives avec un accompagnement|Prendre en main un smartphone ou une tablette|Prendre en main un ordinateur|Utiliser le numérique au quotidien|Approfondir ma culture numérique|Favoriser mon insertion professionnelle|Accéder à une connexion internet|Accéder à du matériel|S'équiper en matériel informatique|Créer et développer mon entreprise|Créer avec le numérique|Accompagner les démarches de santé|Promouvoir la citoyenneté numérique|Soutenir la parentalité et l'éducation avec le numérique))+$`

#### Publics accueillis - Propriété `publics_accueillis`

> *Description : Ce champ permet d'informer sur les types de publics que le lieu est en mesure d'accueillir. Sélectionner une ou plusieurs valeurs séparées par un point-virgule sans espace parmi la liste suivante : Seniors (+ 65 ans) ; Familles/enfants ; Adultes ; Jeunes (16-26 ans) ; Public langues étrangères ; Déficience visuelle ; Surdité ; Handicaps psychiques : troubles psychiatriques donnant lieu à des atteintes comportementales ; Handicaps mentaux : déficiences limitant les activités d'une personne ; Uniquement femmes ; Personnes en situation d'illettrisme*<br/>*Exemple : Seniors (+ 65 ans);Familles/enfants;Adultes;Déficience visuelle*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|;)(Seniors \(\+ 65 ans\)|Familles/enfants|Adultes|Jeunes \(16-26 ans\)|Public langues étrangères|Déficience visuelle|Surdité|Handicaps psychiques : troubles psychiatriques donnant lieu à des atteintes comportementales|Handicaps mentaux : déficiences limitant les activités d'une personne|Uniquement femmes|Personnes en situation d'illettrisme))+$`

#### Conditions d'accès - Propriété `conditions_acces`

> *Description : Ce champ indique les conditions financières d'accès au lieu. Sélectionner une ou plusieurs valeurs séparées par un point-virgule sans espace parmi la liste suivante : Gratuit : Je peux accéder gratuitement au lieu et à ses services ; Gratuit sous condition : La gratuité est conditionnée à des critères (situation familiale, convention avec un organisme social...) ; Payant : L'accès au lieu et/ou à ses services est payant ; Adhésion : L'accès au lieu et/ou à ses services nécessite d'y adhérer ; Accepte le Pass numérique : Il est possible d'utiliser un Pass numérique pour accéder au lieu*<br/>*Exemple : Gratuit sous condition : La gratuité est conditionnée à des critères (situation familiale, convention avec un organisme social...);Payant : L'accès au lieu et/ou à ses services est payant;Accepte le Pass numérique : Il est possible d'utiliser un Pass numérique pour accéder au lieu*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|;)(Gratuit : Je peux accéder gratuitement au lieu et à ses services|Gratuit sous condition : La gratuité est conditionnée à des critères \(situation familiale, convention avec un organisme social\.\.\.\)|Payant : L'accès au lieu et/ou à ses services est payant|Accepte le Pass numérique : Il est possible d'utiliser un Pass numérique pour accéder au lieu|Adhésion : L'accès au lieu et/ou à ses services nécessite d'y adhérer))+$`

#### Labels nationaux - Propriété `labels_nationaux`

> *Description : Ce champ indique si le lieu a obtenu un ou plusieurs labels nationaux. Sélectionner une ou plusieurs valeurs séparées par un point-virgule sans espace parmi la liste suivante : France Services ; CNFS ; APTIC ; Aidants Connect ; Fabriques de Territoire ; Grandes écoles du numérique ; Point relais CAF ; Point numérique CAF ; Relais pôle emploi ; French Tech ; Campus connecté*<br/>*Exemple : France Services;APTIC;Point relais CAF*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|;)(France Services|CNFS|APTIC|Aidants Connect|Fabriques de Territoire|Grandes écoles du numérique|Point relais CAF|Point numérique CAF|Relais pôle emploi|French Tech|Campus connecté))+$`

#### Autres labels - Propriété `labels_autres`

> *Description : Ce champ permet de préciser si le lieu a obtenu d'autres labels (régionaux, locaux...)*<br/>*Exemple : SudLabs;Nièvre médiation numérique*
- Valeur optionnelle
- Type : chaîne de caractères

#### Modalités d'accompagnement - Propriété `modalites_accompagnement`

> *Description : Ce champ indique les types d'accompagnement proposés par le lieu. Sélectionner une ou plusieurs valeurs séparées par un point-virgule sans espace parmi la liste suivante : Il est possible de renseigner plusieurs valeurs. Seul : j'ai accès à du matériel et une connexion ; Avec de l'aide : je suis accompagné seul dans l'usage du numérique ; Dans un atelier : j'apprends collectivement à utiliser le numérique ; A ma place : une personne habilitée fait les démarches à ma place*<br/>*Exemple : Seul : j'ai accès à du matériel et une connexion;Avec de l'aide : je suis accompagné seul dans l'usage du numérique*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|;)(Seul : j'ai accès à du matériel et une connexion|Avec de l'aide : je suis accompagné seul dans l'usage du numérique|Dans un atelier : j'apprends collectivement à utiliser le numérique|A ma place : une personne habilitée fait les démarches à ma place))+$`

#### Accessibilité / accueil handicap - Propriété `accessibilite`

> *Description : Ce champ contient une url renvoyant vers le profil acceslibre du lieu : https://acceslibre.beta.gouv.fr/. Acceslibre est un service public porté par le Ministère de la Transition Écologique afin de collecter et de partager les données d'accessibilité des établissements recevant du public. Le remplissage d'une fiche prend moins de 5 minutes.*<br/>*Exemple : https://acceslibre.beta.gouv.fr/app/29-lampaul-plouarzel/a/bibliotheque-mediatheque/erp/mediatheque-13/*
- Valeur optionnelle
- Type : chaîne de caractères

#### Prise de rdv - Propriété `prise_rdv`

> *Description : Ce champ contient une url renvoyant vers le site de prise de rendez-vous en ligne avec les aidants du lieu.*<br/>*Exemple : https://www.rdv-solidarites.fr/*
- Valeur optionnelle
- Type : chaîne de caractères
