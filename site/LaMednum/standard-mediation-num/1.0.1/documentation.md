<MenuSchema />

## standard-mediation-num

Lieux de médiation numérique

Spécification du standard national des lieux de médiation numérique

- Auteur : Datactivist, la MedNum et l'équipe de la cartographie nationale de l'ANCT.
- Schéma créé le : 04/07/2022
- Site web : https://github.com/LaMednum/standard-mediation-num
- Version : v1.0.1
- Clé primaire : `id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id](#identifiant-unique-local-du-lieu-propriete-id) | chaîne de caractères  | Oui |
| [pivot](#siret-ou-rna-ou-ridet-propriete-pivot) | chaîne de caractères  | Oui |
| [nom](#nom-propriete-nom) | chaîne de caractères  | Oui |
| [commune](#commune-propriete-commune) | chaîne de caractères  | Oui |
| [code_postal](#code-postal-propriete-code-postal) | chaîne de caractères  | Oui |
| [code_insee](#code-insee-propriete-code-insee) | chaîne de caractères  | Non |
| [adresse](#adresse-propriete-adresse) | chaîne de caractères  | Oui |
| [complement_adresse](#complement-d-adresse-propriete-complement-adresse) | chaîne de caractères  | Non |
| [latitude](#latitude-propriete-latitude) | nombre réel  | Non |
| [longitude](#longitude-propriete-longitude) | nombre réel  | Non |
| [typologie](#typologie-propriete-typologie) | chaîne de caractères  | Non |
| [telephone](#numero-de-telephone-propriete-telephone) | chaîne de caractères  | Non |
| [courriels](#courriel(s)-propriete-courriels) | chaîne de caractères  | Non |
| [site_web](#site-web-propriete-site-web) | chaîne de caractères  | Non |
| [horaires](#horaires-propriete-horaires) | chaîne de caractères  | Non |
| [presentation_resume](#presentation-resume-propriete-presentation-resume) | chaîne de caractères  | Non |
| [presentation_detail](#presentation-detaillee-propriete-presentation-detail) | chaîne de caractères  | Non |
| [source](#structure-collectant-la-donnee-propriete-source) | chaîne de caractères  | Non |
| [itinerance](#itinerance-propriete-itinerance) | chaîne de caractères  | Non |
| [structure_parente](#structure-parente-propriete-structure-parente) | chaîne de caractères  | Non |
| [date_maj](#date-de-mise-a-jour-propriete-date-maj) | date (format `default`) | Oui |
| [services](#services-propriete-services) | chaîne de caractères  | Non |
| [publics_specifiquement_adresses](#publics-specifiquement-adresses-propriete-publics-specifiquement-adresses) | chaîne de caractères  | Non |
| [prise_en_charge_specifique](#prise-en-charge-specifique-propriete-prise-en-charge-specifique) | chaîne de caractères  | Non |
| [frais_a_charge](#frais-a-charge-propriete-frais-a-charge) | chaîne de caractères  | Non |
| [dispositif_programmes_nationaux](#dispositifs-et-programmes-nationaux-propriete-dispositif-programmes-nationaux) | chaîne de caractères  | Non |
| [formations_labels](#formations-et-labels-propriete-formations-labels) | chaîne de caractères  | Non |
| [autres_formations_labels](#autres-formations-et-labels-propriete-autres-formations-labels) | chaîne de caractères  | Non |
| [modalites_acces](#modalites-d-acces-propriete-modalites-acces) | chaîne de caractères  | Non |
| [modalites_accompagnement](#modalites-d-accompagnement-propriete-modalites-accompagnement) | chaîne de caractères  | Non |
| [fiche_acces_libre](#fiche-acces-libre-propriete-fiche-acces-libre) | chaîne de caractères  | Non |
| [prise_rdv](#prise-de-rdv-propriete-prise-rdv) | chaîne de caractères  | Non |

#### Identifiant unique local du lieu - Propriété `id`

> *Description : Ce champ contient un identifiant unique local. Le producteur de données le génère librement selon sa méthode. Il peut par exemple s'agir d'une suite de lettres et/ou de chiffres, ou d'un UUID (universal unique identifier) produit aléatoirement : https://www.uuidgenerator.net/ Ce champ permet d'éviter localement les doublons, par exemple dans le cas où deux lieux auraient le même SIRET. Il est un pré-requis pour assurer la compatibilité avec le référentiel national sur l'offre d'insertion : https://www.data.inclusion.beta.gouv.fr/*<br/>*Exemple : structure-1*
- Valeur obligatoire
- Type : chaîne de caractères

#### SIRET ou RNA ou RIDET - Propriété `pivot`

> *Description : Ce champ contient une donnée pivot provenant d'une des deux bases de référence : le répertoire SIRENE des entreprises et de leurs établissements de l'Insee ou le Répertoire national des associations du ministère de l'intérieur (RNA). Pour chaque lieu, il faut indiquer soit le code SIRET (dont disposent la majorité des associations) récupérable via annuaire-entreprises.data.gouv.fr soit le numéro RNA (Répertoire National des Associations) du lieu récupérable via journal-officiel.gouv.fr/pages/associations-recherche/. Les associations disposant d'un SIRET doivent renseigner uniquement ce code. Le RNA n'est à renseigner que dans le cas où une association ne disposerait pas de SIRET. Dans la mesure du possible, les concepteurs du schéma mettrons à disposition des outils pour associer facilement les données au SIRET correspondant. Dans le cas où le SIRET concernerait plusieurs lieux (plusieurs bibliothèques rattachées à une même commune par exemple), l'identification unique permettra de les dédoublonner. Si votre lieu se situe en Polynésie française ou en Nouvelle-Calédonie, nous vous invitons à renseigner le numéro de Répertoire d'Identification Des Entreprises et des Établissements (RIDET)  Ce champ est un pré-requis pour assurer la compatibilité avec data.inclusion.*<br/>*Exemple : 43493312300029*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[a-zA-Z0-9]{9,14}$`

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

#### Code INSEE - Propriété `code_insee`

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

#### Typologie - Propriété `typologie`

> *Description : La valeur de ce champ indique le type du lieu : CCAS, ASSO, COMMUNE, etc. Les valeurs possibles (il est possible d'en renseigner plusieurs) sont restreintes au vocabulaire décrivant les types de structures : https://www.data.inclusion.beta.gouv.fr/schemas-de-donnees-de-loffre/schema-des-structures-dinsertion/typologies-de-structure*<br/>*Exemple : TIERS_LIEUX|ASSO*
- Valeur optionnelle
- Type : chaîne de caractères

#### Numéro de téléphone - Propriété `telephone`

> *Description : Ce champ contient un numéro de téléphone du lieu. Le format international doit être respecté : le premier zéro suivant l'indicatif pays (+33) est supprimé et il n'y a pas d'espaces.*<br/>*Exemple : +33180059880*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(\+33|\+590|\+594|\+262|\+596|\+269|\+687|\+689|\+508|\+681)(\d){6,9}$`

#### Courriel(s) - Propriété `courriels`

> *Description : Ce champ contient l'adresse email générique de contact du lieu. Si besoin, vous pouvez renseigner plusieurs courriels en les séparant par un `|`.*<br/>*Exemple : contact@laquincaillerie.tl|responsable@laquincaillerie.tl*
- Valeur optionnelle
- Type : chaîne de caractères

#### Site web - Propriété `site_web`

> *Description : Ce champ contient une ou plusieurs URL vers le site internet du lieu et/ou les réseaux sociaux. Pour renseigner plusieurs URL, il est nécessaire de les séparer par un `|`.*<br/>*Exemple : https://www.laquincaillerie.tl/|https://m.facebook.com/laquincaillerienumerique/*
- Valeur optionnelle
- Type : chaîne de caractères

#### Horaires - Propriété `horaires`

> *Description : Ce champ indique les jours et horaires d'ouverture du lieu, en respectant le format proposé par OpenStreetMap (https://wiki.openstreetmap.org/wiki/FR:Key:opening_hours). L'outil YoHours (https://projets.pavie.info/yohours/) permet de générer des horaires au bon format. Le format OSM permet d'indiquer des exceptions pendant certaines périodes (vacances, jours fériés…). Pour les générer au bon format en utilisant YoHours, il suffit de les renseigner en cliquant sur le bouton 'plus' vert, situé en haut à gauche.*<br/>*Exemple : Mo-Fr 09:00-12:00,14:00-18:30; Sa 08:30-12:00*
- Valeur optionnelle
- Type : chaîne de caractères

#### Présentation résumé - Propriété `presentation_resume`

> *Description : Ce champ contient une courte description du lieu (280 caractères maximum).*<br/>*Exemple : Notre association propose des formations aux outils numériques à destination des personnes âgées.*
- Valeur optionnelle
- Type : chaîne de caractères
- Moins de 280 caractères

#### Présentation détaillée - Propriété `presentation_detail`

> *Description : Ce champ contient une description plus détaillée du lieu. Il est par exemple possible de préciser si des aidants sont itinérants.*<br/>*Exemple : Notre parcours d'initiation permet l'acquisition de compétences numériques de base. Nous proposons également un accompagnement à destination des personnes déjà initiées qui souhaiteraient approfondir leurs connaissances. Du matériel informatique est en libre accès pour nos adhérents tous les après-midis. En plus de d'accueillir les personnes dans notre lieu en semaine (sur rendez-vous), nous assurons une permanence le samedi matin dans la médiathèque XX.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Structure collectant la donnée - Propriété `source`

> *Description : La valeur de ce champ détaille la structure qui a collecté les données sur le lieu. Cela peut être la structure elle-même ou une structure tierce (une collectivité territoriale, un réseau de médiation numérique...)*<br/>*Exemple : Hubik*
- Valeur optionnelle
- Type : chaîne de caractères

#### Itinérance - Propriété `itinerance`

> *Description : Ce champ permet d'informer si c'est un lieu de médiation itinérant comme un bus numérique, une cyber-caravane ou un camion connecté. Sélectionner une ou plusieurs valeurs séparées par un `|` parmi la liste suivante : 'Itinérant;Fixe'*<br/>*Exemple : Itinérant*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(Itinérant|Fixe))+$`

#### Structure parente - Propriété `structure_parente`

> *Description : Ce champ permet de décrire le réseau/la structure auquel le lieu appartient. Pour le remplir, indiquer le nom de cette entité.*<br/>*Exemple : SIRET de la ville pour une bibliothèque*
- Valeur optionnelle
- Type : chaîne de caractères

#### Date de mise à jour - Propriété `date_maj`

> *Description : Ce champ contient la date à laquelle la donnée considérée a été mise à jour. Il respecte le format ISO 8601 : année-mois-jour (YYYY-MM-DD).*<br/>*Exemple : 2024-04-02*
- Valeur obligatoire
- Type : date (format `default`)

#### Services - Propriété `services`

> *Description : Ce champ permet de décrire les types d'accompagnement proposés dans l'offre du lieu. Sélectionner une ou plusieurs valeurs séparées par un `|` parmi la liste suivante :  Aide aux démarches administratives;Maîtrise des outils numériques du quotidien;Insertion professionnelle via le numérique;Utilisation sécurisée du numérique;Parentalité et éducation avec le numérique;Loisirs et créations numériques;Comprehension du monde numérique;Accès internet et matériel informatique;Acquisition de matériel informatique à prix solidaire.*<br/>*Exemple : Maîtrise des outils numériques du quotidien|Insertion professionnelle via le numérique|Loisirs et créations numériques*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(Aide aux démarches administratives|Maîtrise des outils numériques du quotidien|Insertion professionnelle via le numérique|Utilisation sécurisée du numérique|Parentalité et éducation avec le numérique|Loisirs et créations numériques|Compréhension du monde numérique|Accès internet et matériel informatique|Acquisition de matériel informatique à prix solidaire))+$`

#### Publics spécifiquement adressés - Propriété `publics_specifiquement_adresses`

> *Description : Par défaut, un lieu d'inclusion numérique est inclusif et peut accueillir tout public. Malgré tout, certains lieux sont habilités à recevoir exclusivement certains publics précis ! Ce champ permet de spécifier si l'action du lieu est tournée vers un public spécifiquement adressé. Sélectionner une ou plusieurs valeurs séparées par un `|` parmi la liste suivante : Jeunes;Étudiants;Familles et/ou enfants;Seniors;Femmes*<br/>*Exemple : Jeunes|Femmes*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(Jeunes|Étudiants|Familles et/ou enfants|Seniors|Femmes))+$`

#### Prise en charge spécifique - Propriété `prise_en_charge_specifique`

> *Description : Ce champ permet d'informer si le lieu est en mesure d'accompagner et soutenir des publics ayant des besoins particuliers. Sélectionner une ou plusieurs valeurs séparées par un `|` parmi la liste suivante :Surdité;Handicaps moteurs;Handicaps mentaux;Illettrisme;Langues étrangères (anglais);Langues étrangères (autres) sont tous des formes de déficience visuelle.*<br/>*Exemple : Surdité|Illettrisme|Langues étrangères (anglais)*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(Surdité|Handicaps moteurs|Handicaps mentaux|Illettrisme|Langues étrangères \(anglais\)|Langues étrangères \(autres\)|Déficience visuelle))+$`

#### Frais à charge - Propriété `frais_a_charge`

> *Description : Ce champ indique les conditions financières d'accès au lieu. Sélectionner une ou plusieurs valeurs séparées par un `|` parmi la liste suivante : Gratuit;Gratuit sous condition;Payant*<br/>*Exemple : Gratuit sous condition|Payant*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(Gratuit|Gratuit sous condition|Payant))+$`

#### Dispositifs et programmes nationaux - Propriété `dispositif_programmes_nationaux`

> *Description : Ce champ indique si le lieu appartient à un dispositif ou à un programme national. Sélectionner une ou plusieurs valeurs séparées par un `|` parmi la liste suivante : Aidants Connect;Bibliothèques numérique de référence;Certification PIX; Conseillers numériques;Emmaüs Connect;France Services;Grande école du numérique;La Croix Rouge;Point d'accès numérique CAF;Promeneurs du net;Relais numérique (Emmaüs Connect)*<br/>*Exemple : Aidants Connect|Conseillers numériques|La Croix Rouge*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(Aidants Connect|Bibliothèques numérique de référence|Certification PIX|Conseillers numériques|Emmaüs Connect|France Services|Grande école du numérique|La Croix Rouge|Point d'accès numérique CAF|Promeneurs du net|Relais numérique \(Emmaüs Connect\)))+$`

#### Formations et labels - Propriété `formations_labels`

> *Description : Ce champ indique si le lieu a obtenu un(e) ou plusieurs formations et labels. Cette liste est évolutive, si vous ne trouvez pas ce que vous cherchez vous pouvez vous référer au champ 'Autres formations ou labels'. Sélectionner une ou plusieurs valeurs séparées par un `|` parmi la liste suivante : Formé à « Mon Espace Santé »;Formé à « DUPLEX » (illettrisme);Arnia/MedNum BFC (Bourgogne-Franche-Comté);Collectif ressources et acteurs réemploi (Normandie);Fabriques de Territoire;Les Éclaireurs du numérique (Drôme);Mes Papiers (Métropole de Lyon) ;ORDI 3.0;SUD LABS (PACA)*<br/>*Exemple : Formé à « Mon Espace Santé »|Arnia/MedNum BFC (Bourgogne-Franche-Comté)*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(Formé à « Mon Espace Santé »|Formé à « DUPLEX » \(illettrisme\)|Arnia/MedNum BFC \(Bourgogne-Franche-Comté\)|Collectif ressources et acteurs réemploi \(Normandie\)|Fabriques de Territoire|Les Éclaireurs du numérique \(Drôme\)|Mes Papiers \(Métropole de Lyon\)|ORDI 3.0|SUD LABS \(PACA\)))+$`

#### Autres formations et labels - Propriété `autres_formations_labels`

> *Description : Ce champ permet de préciser si le lieu a obtenu d’autres formations ou labels non proposés dans le champ 'Formations et labels'.*<br/>*Exemple : Label et la bête*
- Valeur optionnelle
- Type : chaîne de caractères

#### Modalités d'accès - Propriété `modalites_acces`

> *Description : Ce champ fournit des informations sur les différentes étapes ou démarches à suivre pour se rendre au lieu d'inclusion numérique et bénéficier de ses services. Sélectionner une ou plusieurs valeurs séparées par un `|` parmi la liste suivante : Se présenter;Téléphoner;Contacter par mail;Prendre un RDV en ligne;Ce lieu n'accueille pas de public;Envoyer un mail avec une fiche de prescription*<br/>*Exemple : Se présenter|Téléphoner*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(Se présenter|Téléphoner|Contacter par mail|Prendre un RDV en ligne|Ce lieu n'accueille pas de public|Envoyer un mail avec une fiche de prescription))+$`

#### Modalités d'accompagnement - Propriété `modalites_accompagnement`

> *Description : Ce champ indique les types d'accompagnement proposés par le lieu. Sélectionner une ou plusieurs valeurs séparées par un `|` parmi la liste suivante : En autonomie;Accompagnement individuel; Dans un atelier collectif : j'apprends collectivement à utiliser le numérique;À distance (par téléphone ou en visioconférence)*<br/>*Exemple : Dans un atelier collectif|À distance|En autonomie|Accompagnement individuel*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|\|)(En autonomie|Accompagnement individuel|Dans un atelier collectif|À distance))+$`

#### Fiche Accès libre - Propriété `fiche_acces_libre`

> *Description : Ce champ contient une url renvoyant vers le profil acceslibre du lieu : https://acceslibre.beta.gouv.fr/. Acceslibre est un service public porté par le Ministère de la Transition Écologique afin de collecter et de partager les données d'accessibilité des établissements recevant du public. Le remplissage d'une fiche prend moins de 5 minutes.*<br/>*Exemple : https://acceslibre.beta.gouv.fr/app/29-lampaul-plouarzel/a/bibliotheque-mediatheque/erp/mediatheque-13/*
- Valeur optionnelle
- Type : chaîne de caractères

#### Prise de rdv - Propriété `prise_rdv`

> *Description : Ce champ contient une url renvoyant vers le site de prise de rendez-vous en ligne avec les aidants du lieu.*<br/>*Exemple : https://www.rdv-solidarites.fr/*
- Valeur optionnelle
- Type : chaîne de caractères
