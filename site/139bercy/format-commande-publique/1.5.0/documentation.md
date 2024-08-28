<MenuSchema />

## format-commande-publique

Données essentielles des marchés publics français

Données des attributions de marchés publics et de contrats de concessions supérieures à 40 000 euros.

- Site web : https://github.com/139bercy/format-commande-publique
- Version : 1.5.0

### Arborescence des propriétés :

#### Marché et concessions - Propriété marches
> *Description : Liste de marchés et de concessions*<br>
- Valeur optionnelle
- Type : liste

<blockquote>
<details>

<summary>Cette propriété doit contenir une liste d'éléments parmi les suivants :</summary>

#### Format réglementaire de publication des données essentielles des marchés publics français - Propriété marche
- Valeur optionnelle
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Identifiant de marché - Propriété id
> *Description : L'identifiant de marché est composé de trois parties: l'année de notification (4 caractères), le numéro d'ordre interne propre à l'acheteur public (1 à 10 caractères alphanumériques), le numéro d'ordre de la modification (2 caractères, 00 si pas de modification, 01 si une modification, etc.). Exemples : 201872300 (2018 723 00), 2019000111202 (2019 00001112 02).*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Identifiant unique de marché - Propriété uid
> *Description : L'identifiant unique de marché est composé du SIRET de l'acheteur et de l'identifiant de marché, et permet d'éviter les conflits d'identifiants entre marchés passé par des acheteurs différents. Exemples : 23350001600040201872300 (23350001600040 201872300), 233500016000402019000111202 (23350001600040 20190000111202).*<br>
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^[0-9]{14}.{7,16}$`

#### Type d'objet (marché, marché de sécurité, contrat de concession) - Propriété _type
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^Marché$`

#### Propriété acheteur
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Identifiant SIRET de l'acheteur - Propriété id
> *Description : http://xml.insee.fr/schema/siret.html#SIRET_stype*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[0-9]{14}$`

#### Nom de l'acheteur - Propriété nom
> *Description : Nom de l'acheteur (le caractère univoque est assuré par le SIRET). Exemple : "Région Bretagne"*<br>
- Valeur obligatoire
- Type : chaîne de caractères

</details>
</blockquote>

#### Nature du marché - Propriété nature
> *Description : La nature du marché.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées :
   - Marché
   - Marché de partenariat
   - Accord-cadre
   - Marché subséquent

#### Objet du marché - Propriété objet
> *Description : Description synthétique de l'objet du marché ou du lot.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Code CPV - Propriété codeCPV
> *Description : Nomenclature européenne permettant d'identifier les catégories de biens et de service faisant l'objet du marché (http://simap.ted.europa.eu/web/simap/cpv). Exemple: 45112500 (même si toléré, il préférable d'omettre le caractère de contrôle (-9))*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[0-9]{8}(\-[0-9])?$`

#### Procédure de passation du marché - Propriété procedure
> *Description : La procédure de passation de marché utilisée par l'acheteur*<br>
- Valeur obligatoire
- Valeurs autorisées :
   - Procédure adaptée
   - Appel d'offres ouvert
   - Appel d'offres restreint
   - Marché passé sans publicité ni mise en concurrence préalable
   - Dialogue compétitif
   - Procédure avec négociation

#### Lieu d'exécution principal du marché - Propriété lieuExecution
> *Description : Commune, canton, arrondissement, département, région ou pays d'exécution du marché.*<br>
- Valeur obligatoire
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Code du lieu d'exécution - Propriété code
> *Description : Code du lieu d'exécution (code postal, commune, canton, arrondissement, département, région, pays). Les codes INSEE sont à privilégier aux dépens du code postal. Exemple : 2B002*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Type de code du lieu d'exécution - Propriété typeCode
> *Description : Le type de code utilisé pour désigner le lieu d'exécution. Hormis le « Code postal », les codes sont des codes géographiques gérés par l'INSEE (http://www.insee.fr/fr/methodes/nomenclatures/cog/default.asp)*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées :
   - Code postal
   - Code commune
   - Code arrondissement
   - Code canton
   - Code département
   - Code région
   - Code pays

#### Nom du lieu d'exécution - Propriété nom
- Valeur obligatoire
- Type : chaîne de caractères

</details>
</blockquote>

#### Durée initiale du marché - Propriété dureeMois
> *Description : La durée du marché, en mois, telle que définie au moment de la publication des données. Si une fois les données initiales du marché publiées une modification de la durée du marché intervient, elle doit être retranscrite via un objet enfant de Modifications et la propriété Duree initiale ne doit pas être modifiée. La durée initale du marché comprend la durée des tranches et reconductions potentielles.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Date de la notification du marché - Propriété dateNotification
> *Description : Date à laquelle le marché a été notifié au(x) titulaire(s), au format AAAA-MM-JJ.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{4}-[01]\d-[0-3]\d([+-][0-2]\d:[0-5]\dZ?)?$`

#### Date de la publication des données essentielles du marché - Propriété datePublicationDonnees
> *Description : Date à laquelle les données essentielles du marché décrit ont été publiées pour la première fois. Cette date n'est donc pas mise à jour en cas de modification du marché.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{4}-[01]\d-[0-3]\d([+-][0-2]\d:[0-5]\dZ?)?$`

#### Montant forfaitaire ou estimé maximum HT - Propriété montant
- Valeur obligatoire
- Type : nombre

#### Forme du prix - Propriété formePrix
> *Description : Ferme : le prix est fixé pour toute la durée marché. Ferme et actualisable : le prix peut évoluer périodiquement selon des conditions prévues dans le contrat initial (ex: variation d'indice. Révisable : l'acheteur et le titulaire peuvent s'entendre sur une modification du prix après la signature du marché.)*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées :
   - Ferme
   - Ferme et actualisable
   - Révisable

#### Titulaires du marché - Propriété titulaires
> *Description : Les opérateurs économiques titulaires du marché*<br>
- Valeur obligatoire
- Type : liste

<blockquote>
<details>

<summary>Cette propriété doit contenir une liste d'éléments parmi les suivants :</summary>

#### Titulaire - Propriété Titulaire
- Valeur optionnelle
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Type d'identifiant du titulaire - Propriété typeIdentifiant
> *Description : Le type d'identifiant utilisé pour identifier le titulaire du marché.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées :
   - SIRET
   - TVA
   - TAHITI
   - RIDET
   - FRWF
   - IREP
   - UE
   - HORS-UE

#### Identifiant du titulaire - Propriété id
> *Description : Types d'identifiants possibles (favoriser le SIRET) : SIRET, TVA, TAHITI, RIDET, FRWF, IREP, UE, HORS-UE.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Dénomination sociale du titulaire - Propriété denominationSociale
> *Description : Nom de l'opérateur économique intervenant sur le marché . Exemple : "Transit 2000 SA"*<br>
- Valeur obligatoire
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

#### Modifications des données du marché après leur publication initiale - Propriété modifications
> *Description : Une fois les données essentielles du marché publiées, aucune modification des données n'est possible, si ce n'est l'ajout d'objets dans Modifications.*<br>
- Valeur obligatoire
- Type : liste

<blockquote>
<details>

<summary>Cette propriété doit contenir une liste d'éléments parmi les suivants :</summary>

#### Modification - Propriété Modification
> *Description : Une modification du marché ayant lieu après la publication des données essentielles du marché.*<br>
- Valeur optionnelle
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Objet de la modification - Propriété objetModification
> *Description : Exemple : "Modification du titulaire du marché. Nouveau titulaire : Rodriguez SAS".*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Date de la notification de la modification - Propriété dateNotificationModification
> *Description : Date à laquelle la modification du marché public a été notifiée par l'acheteur.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{4}-[01]\d-[0-3]\d([+-][0-2]\d:[0-5]\dZ?)?$`

#### Date de la republication des données incluant la modification - Propriété datePublicationDonneesModification
> *Description : Date à laquelle les données essentielles sont republiées suite à la modification, au format AAAA-MM-JJ.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{4}-[01]\d-[0-3]\d([+-][0-2]\d:[0-5]\dZ?)?$`

#### Nouvelle durée, en mois - Propriété dureeMois
- Valeur obligatoire
- Type : nombre entier

#### Nouveau montant - Propriété montant
- Valeur obligatoire
- Type : nombre

#### Liste des titulaires après la modification - Propriété titulaires
- Valeur obligatoire
- Type : liste

<blockquote>
<details>

<summary>Cette propriété doit contenir une liste d'éléments parmi les suivants :</summary>

#### Titulaire - Propriété Titulaire
- Valeur optionnelle
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Type d'identifiant du titulaire - Propriété typeIdentifiant
> *Description : Le type d'identifiant utilisé pour identifier le titulaire du marché.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées :
   - SIRET
   - TVA
   - TAHITI
   - RIDET
   - FRWF
   - IREP
   - UE
   - HORS-UE

#### Identifiant du titulaire - Propriété id
> *Description : Types d'identifiants possibles (favoriser le SIRET) : SIRET, TVA, TAHITI, RIDET, FRWF, IREP, UE, HORS-UE.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Dénomination sociale du titulaire - Propriété denominationSociale
> *Description : Nom de l'opérateur économique intervenant sur le marché . Exemple : "Transit 2000 SA"*<br>
- Valeur obligatoire
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

#### Format réglementaire de publication des données essentielles des contrats de concession français - Propriété contrat-concession
- Valeur optionnelle
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Identifiant de marché - Propriété id
> *Description : L'identifiant de contrat de concession est composé de trois parties: l'année de notification (4 caractères), le numéro d'ordre interne propre à l'acheteur public (1 à 10 caractères alphanumériques), le numéro d'ordre de la modification (2 caractères, 00 si pas de modification, 01 si une modification, etc.). Exemples : 201872300 (2018 723 00), 2019000111202 (2019 00001112 02).*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Identifiant unique de marché - Propriété uid
> *Description : L'identifiant unique de marché est composé du SIRET de l'acheteur et de l'identifiant de marché, et permet d'éviter les conflits d'identifiants entre marchés passé par des acheteurs différents. Exemples : 23350001600040201872300 (23350001600040 201872300), 233500016000402019000111202 (23350001600040 20190000111202).*<br>
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^[0-9]{14}.{7,16}$`

#### Type d'objet (marché, marché de sécurité, contrat de concession) - Propriété _type
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^Contrat de concession$`

#### Autorité concédante - Propriété autoriteConcedante
> *Description : L'autorité concédante qui signe le contrat de concession.*<br>
- Valeur obligatoire
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Identifiant SIRET de l'autorité concédante - Propriété id
> *Description : http://xml.insee.fr/schema/siret.html#SIRET_stype*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[0-9]{14}$`

#### Nom de l'autorité concédante - Propriété nom
> *Description : Nom de l'autorité concédante (le caractère univoque est assuré par le SIRET). Exemple : "Région Bretagne"*<br>
- Valeur obligatoire
- Type : chaîne de caractères

</details>
</blockquote>

#### Nature du marché - Propriété nature
> *Description : La nature du marché.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées :
   - Concession de travaux
   - Concession de service
   - Concession de service public
   - Délégation de service public

#### Objet du contrat de concession - Propriété objet
> *Description : Description synthétique de l'objet du contrat de concession.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Procédure de passation utilisée - Propriété procedure
> *Description : La procédure de passation de marché utilisée par l'autorité concédante*<br>
- Valeur obligatoire
- Valeurs autorisées :
   - Procédure négociée ouverte
   - Procédure non négociée ouverte
   - Procédure négociée restreinte
   - Procédure non négociée restreinte

#### Lieu d'exécution principal du marché - Propriété lieuExecution
> *Description : Commune, département, région ou pays d'exécution du marché.*<br>
- Valeur obligatoire
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Identifiant du lieu principal d'exécution - Propriété code
> *Description : Code du lieu d'exécution (code postal, commune, canton, arrondissement, département, région, pays). Les codes INSEE sont à privilégier aux dépens du code postal. Exemple : 2B002.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Type d'identifiant utilisé pour le lieu principal d'exécution - Propriété typeCode
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées :
   - Code postal
   - Code commune
   - Code arrondissement
   - Code canton
   - Code département
   - Code région
   - Code pays

#### Nom du lieu d'exécution - Propriété nom
- Valeur obligatoire
- Type : chaîne de caractères

</details>
</blockquote>

#### Durée du contrat de concession - Propriété dureeMois
> *Description : La durée du contrat de concession, en mois.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Date de la signature du marché - Propriété dateSignature
> *Description : Date à laquelle le contrat de concession a été signé par l'autorité concédante, au format AAAA-MM-JJ.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{4}-[01]\d-[0-3]\d([+-][0-2]\d:[0-5]\dZ?)?$`

#### Date de la publication des données essentielles du contrat de concession - Propriété datePublicationDonnees
> *Description : Date à laquelle les données essentielles du contrat de concession ont été publiées sur le profil d'autorité concédante, au format AAAA-MM-JJ.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{4}-[01]\d-[0-3]\d([+-][0-2]\d:[0-5]\dZ?)?$`

#### Date du début de l'exécution du contrat de concession - Propriété dateDebutExecution
> *Description : Date à laquelle a commencé l'exécution du contrat de concession, au format AAAA-MM-JJ.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{4}-[01]\d-[0-3]\d([+-][0-2]\d:[0-5]\dZ?)?$`

#### Valeur globale attribuée - Propriété valeurGlobale
- Valeur obligatoire
- Type : nombre

#### Montant de la subvention publique ou de tout autre avantage financier - Propriété montantSubventionPublique
> *Description : Si aucune avantage financier n'est octroyée, indiquer 0.*<br>
- Valeur obligatoire
- Type : nombre

#### Données d'exécution - Propriété donneesExecution
> *Description : Les données d'exécution du contrat de concession à une date donnée. Tous les ans, l'autorité concédante publie les données d'exécution, jusqu'à la fin du contrat de concession. Ces données ne sont inclues qu'à partir de la première année, pas lors de la publication initiale des données qui fait suite à la notification.*<br>
- Valeur obligatoire
- Type : liste

<blockquote>
<details>

<summary>Cette propriété doit contenir une liste d'éléments parmi les suivants :</summary>

#### Données d'éxecution - Propriété DonneesExecution
- Valeur optionnelle
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Date de publication des données d'exécution - Propriété datePublicationDonneesExecution
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{4}-[01]\d-[0-3]\d([+-][0-2]\d:[0-5]\dZ?)?$`

#### Dépenses d'investissement - Propriété depensesInvestissement
- Valeur obligatoire
- Type : nombre

#### Tarifs - Propriété tarifs
> *Description : Les principaux tarifs à la charge des usagers*<br>
- Valeur obligatoire
- Type : liste

<blockquote>
<details>

<summary>Cette propriété doit contenir une liste d'éléments parmi les suivants :</summary>

#### Tarif à la charge des usagers - Propriété Tarif
- Valeur optionnelle
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Intitulé du tarif - Propriété intituleTarif
- Valeur obligatoire
- Type : chaîne de caractères

#### Tarif - Propriété tarif
- Valeur obligatoire
- Type : nombre

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

#### Concessionnaires - Propriété concessionnaires
> *Description : Les opérateurs économiques auxquels a été attribué le contrat de concession*<br>
- Valeur obligatoire
- Type : liste

<blockquote>
<details>

<summary>Cette propriété doit contenir une liste d'éléments parmi les suivants :</summary>

#### Concessionnaire - Propriété Concessionnaire
- Valeur optionnelle
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Type d'identifiant du concessionnaire - Propriété typeIdentifiant
> *Description : Le type d'identifiant utilisé pour identifier le concessionnaire.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées :
   - SIRET
   - TVA
   - TAHITI
   - RIDET
   - FRWF
   - IREP
   - UE
   - HORS-UE

#### Identifiant du concessionnaire - Propriété id
> *Description : Types d'identifiants possibles (favoriser le SIRET) : SIRET, TVA, TAHITI, RIDET, FRWF, IREP, UE, HORS-UE.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Dénomination sociale du concessionnaire - Propriété denominationSociale
> *Description : Nom de l'opérateur économique intervenant sur le contrat de concession. Exemple : "Transit 2000 SA"*<br>
- Valeur obligatoire
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

#### Modifications des données du contrat de concession après leur publication initiale - Propriété modifications
> *Description : Une fois les données essentielles du contrat de concession publiées, aucune modification des données n'est possible, si ce n'est l'ajout d'objets dans Modifications.*<br>
- Valeur obligatoire
- Type : liste

<blockquote>
<details>

<summary>Cette propriété doit contenir une liste d'éléments parmi les suivants :</summary>

#### Modification - Propriété Modification
> *Description : Une modification du contrat de concession ayant lieu après la publication initiale des données essentielles.*<br>
- Valeur optionnelle
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Objet de la modification - Propriété objetModification
> *Description : Exemple : "Modification de la durée, de 24 à 36 mois.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Date de la signature de la modification - Propriété dateSignatureModification
> *Description : Date à laquelle la modification du contrat de concession a été signée par l'autorité concédante.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{4}-[01]\d-[0-3]\d([+-][0-2]\d:[0-5]\dZ?)?$`

#### Date de la republication des données incluant la modification - Propriété datePublicationDonneesModification
> *Description : Date à laquelle les données essentielles sont republiées suite à la modification, au format AAAA-MM-JJ.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{4}-[01]\d-[0-3]\d([+-][0-2]\d:[0-5]\dZ?)?$`

#### Nouvelle durée en mois. - Propriété dureeMois
- Valeur obligatoire
- Type : nombre entier

#### Nouvelle valeur globale - Propriété valeurGlobale
- Valeur obligatoire
- Type : nombre

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

