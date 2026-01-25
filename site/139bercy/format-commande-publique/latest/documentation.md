<MenuSchema />

<MenuSchema />

## format-commande-publique

Données essentielles des marchés publics français

Données des attributions de marchés publics et de contrats de concessions supérieures à 40 000 euros.

- Site web : https://github.com/139bercy/format-commande-publique
- Version : 2.0.2

### Arborescence des propriétés :

#### Marché et concessions - Propriété marches
> *Description : Liste de marchés et de concessions*<br>
- Valeur optionnelle
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété marche
- Type : liste

<blockquote>
<details>

<summary>Cette propriété doit contenir une liste d'éléments parmi les suivants :</summary>

#### Format réglementaire de publication des données essentielles des marchés publics français - Propriété marcheList
- Valeur optionnelle
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Identifiant de marché - Propriété id
> *Description : L'identifiant de marché est un numéro d'ordre interne propre à l'acheteur public (1 à 16 caractères). Les caractères spéciaux suivants sont à éviter autant que possible : &, ", \, <, espace, virgule, point virgule.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Type d'objet (marché, contrat de concession) - Propriété _type
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

</details>
</blockquote>

#### Nature du marché - Propriété nature
> *Description : La nature du marché.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées :
   - Marché
   - Marché de partenariat
   - Marché de défense ou de sécurité

#### Objet du marché - Propriété objet
> *Description : Description synthétique de l'objet du marché ou du lot.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Code CPV - Propriété codeCPV
> *Description : Nomenclature européenne permettant d'identifier les catégories de biens et de service faisant l'objet du marché (http://simap.ted.europa.eu/web/simap/cpv). Exemple: 45112500 (même si toléré, il préférable d'omettre le caractère de contrôle (-9))*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[0-9]{8}(-[0-9])?$`

#### Technique d'achat - Propriété techniques
> *Description : Liste des techniques d'achat utilisées par l'acheteur*<br>
- Valeur obligatoire
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### technique - Propriété technique
- Valeur obligatoire
- Type : liste
- Valeurs autorisées :
   - Accord-cadre
   - Concours
   - Système de qualification
   - Système d'acquisition dynamique
   - Catalogue électronique
   - Enchère électronique
   - Sans objet

</details>
</blockquote>

#### modalités d'exécution - Propriété modalitesExecution
> *Description : la ou les modalités d'exécution du marché public*<br>
- Valeur obligatoire
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### modaliteExecution - Propriété modaliteExecution
- Valeur obligatoire
- Type : liste
- Valeurs autorisées :
   - Tranches
   - Bons de commande
   - Marchés subséquents
   - Sans objet

</details>
</blockquote>

#### Identifiant de marché - Propriété idAccordCadre
> *Description : L'identifiant de marché est un numéro d'ordre interne propre à l'acheteur public (1 à 16 caractères). Les caractères spéciaux suivants sont à éviter autant que possible : &, ", \, <, espace, virgule, point virgule.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Marché innovant - Propriété marcheInnovant
> *Description : Marché public comportant des travaux, services ou fournitures innovants*<br>
- Valeur obligatoire
- Type : booléen

#### CCAG de référence - Propriété ccag
> *Description : Cahiers des clauses administratives générales de référence du marché public*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées :
   - Travaux
   - Maitrise d'œuvre
   - Fournitures courantes et services
   - Marchés industriels
   - Prestations intellectuelles
   - Techniques de l'information et de la communication
   - Pas de CCAG

#### Nombre d'offres reçues - Propriété offresRecues
> *Description : Nombre d'offres reçues par l'acheteur de la part des soumissionnaires. Comprend aussi les offres irrégulières, inacceptables, inappropriées et anormalement basses.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Attribution d'une avance - Propriété attributionAvance
> *Description : Une avance a été attribuée au titulaire principal du marché public*<br>
- Valeur obligatoire
- Type : booléen

#### Taux de l'avance - Propriété tauxAvance
> *Description : Taux de l'avance attribuée au titulaire principal du marché public par rapport au montant du marché (O.1 = 10 % du montant du marché). En fonction de la valeur de attributionAvance, une valeur égale à 0 signifie qu'il y a une avance  mais que le taux n'est pas connu (attributionAvance=true).*<br>
- Valeur optionnelle
- Type : nombre

#### Type de groupement d'opérateurs - Propriété typeGroupementOperateurs
> *Description : Le type de groupement d'entreprises ou d'opérateurs économiques*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées :
   - Conjoint
   - Solidaire
   - Pas de groupement

#### Sous-traitance déclarée - Propriété sousTraitanceDeclaree
> *Description : Au moment de la notification du marché, les titulaires du marché ont déclaré s'appuyer sur un ou plusieurs sous-traitants pour ce marché public.*<br>
- Valeur obligatoire
- Type : booléen

#### Actes spéciaux de sous-traitance - Propriété actesSousTraitance
> *Description : Les actes spéciaux de sous-traitance ayant été notifiés par l'acheteur.*<br>
- Valeur optionnelle
- Type : liste

<blockquote>
<details>

<summary>Cette propriété doit contenir une liste d'éléments parmi les suivants :</summary>

#### Propriété ActeSousTraitanceArray
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Acte spécial de sous-traitance - Propriété acteSousTraitance
- Valeur obligatoire
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Numéro d'identification de l'acte spécial de sous-traitance - Propriété id
> *Description : Numéro permettant d'identifier l'acte spécial de sous-traitance. Il doit être unique au sein d'un marché public et former une séquence croissante correspondant à l'ordre des notifications.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Sous-traitant - Propriété sousTraitant
> *Description : Sous-traitant d'un acte spécial de sous-traitance*<br>
- Valeur obligatoire
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Type d'identifiant du sous-traitant - Propriété typeIdentifiant
> *Description : Le type d'identifiant utilisé pour identifier le sous-traitant du marché.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées :
   - SIRET
   - TVA
   - TAHITI
   - RIDET
   - FRWF
   - IREP
   - HORS-UE

#### Identifiant du sous-traitant - Propriété id
> *Description : Types d'identifiants possibles (favoriser le SIRET) : SIRET, TVA, TAHITI, RIDET, FRWF, IREP, HORS-UE.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

</details>
</blockquote>

#### Durée de l'acte spécial de sous-traitance - Propriété dureeMois
> *Description : La durée de l'acte spécial de sous-traitance, en mois, telle que définie au moment de sa notification. Si une fois les données initiales de l'acte spécial publiées une modification de sa durée intervient, elle doit être retranscrite via un objet enfant de modificationsActesSousTraitance et la propriété dureeMois initiale ne doit pas être modifiée.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Date de notification de l'acte spécial de sous-traitance - Propriété dateNotification
> *Description : Date à laquelle l'acte spéciale de sous-traitance a été notifié au sous-traitant, au format AAAA-MM-JJ.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `\d{4}-\d{2}-\d{2}`

#### Date de la publication des données de l'acte spécial de sous-traitance - Propriété datePublicationDonnees
> *Description : Date à laquelle les données essentielles de l'acte de sous-traitance ont été publiées sur data.gouv.fr, au format AAAA-MM-JJ.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `\d{4}-\d{2}-\d{2}`

#### Montant HT de l'acte spécial de sous-traitance - Propriété montant
> *Description : Le montant HT de l'acte spécial de sous-traitance ou montant estimé maximum attribué, tel que définie au moment de sa notification. Si une fois les données initiales de l'acte spécial publiées une modification de son montant intervient, elle doit être retranscrite via un objet enfant de modificationsActesSousTraitance et la propriété montant initiale ne doit pas être modifiée.*<br>
- Valeur obligatoire
- Type : nombre

#### Modalités de variation du prix de l'acte spécial de sous-traitance - Propriété variationPrix
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées :
   - Ferme
   - Actualisable
   - Révisable

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

#### Procédure de passation du marché - Propriété procedure
> *Description : La procédure de passation de marché utilisée par l'acheteur*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées :
   - Procédure adaptée
   - Appel d'offres ouvert
   - Appel d'offres restreint
   - Procédure avec négociation
   - Marché passé sans publicité ni mise en concurrence préalable
   - Dialogue compétitif

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
- Motif : `\d{4}-\d{2}-\d{2}`

#### Date de la publication des données essentielles du marché - Propriété datePublicationDonnees
> *Description : Date à laquelle les données essentielles du marché décrit ont été publiées sur data.gouv.fr pour la première fois. Cette date n'est donc pas mise à jour en cas de modification du marché.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `\d{4}-\d{2}-\d{2}`

#### Montant forfaitaire ou estimé maximum HT - Propriété montant
- Valeur obligatoire
- Type : nombre

#### type prix - Propriété typesPrix
> *Description : Le type prix du marché public*<br>
- Valeur obligatoire
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Type Prix - Propriété typePrix
- Valeur obligatoire
- Type : liste
- Valeurs autorisées :
   - Définitif ferme
   - Définitif actualisable
   - Définitif révisable
   - Provisoire

</details>
</blockquote>

#### Forme du prix - Propriété formePrix
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées :
   - Unitaire
   - Forfaitaire
   - Mixte

#### Part des produits provenant de l'Union européenne - Propriété origineUE
> *Description : Pour les marchés de fournitures de denrées alimentaires, de véhicules, de produits de santé et d'habillement, selon la liste annexée à l'arrêté, la part des produits issus de l'Union européenne avec laquelle le marché sera exécuté. 0.2 = 20 % de la part des produits provient de l'Union européenne. Cette valeur ne peut pas être inférieure à la valeur d'origineFrance.*<br>
- Valeur optionnelle
- Type : nombre

#### Part des produits français - Propriété origineFrance
> *Description : Pour les marchés de fournitures de denrées alimentaires, de véhicules, de produits de santé et d'habillement, selon la liste annexée à l'arrêté, la part des produits français avec laquelle le marché sera exécuté. 0.2 = 20 % de la part des produits sont français. Cette valeur ne peut pas être supérieure à la valeur d'origineUE.*<br>
- Valeur optionnelle
- Type : nombre

#### Titulaires du marché - Propriété titulaires
> *Description : Les opérateurs économiques titulaires du marché*<br>
- Valeur obligatoire
- Type : liste

<blockquote>
<details>

<summary>Cette propriété doit contenir une liste d'éléments parmi les suivants :</summary>

#### Propriété TitulaireArray
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### titulaire - Propriété titulaire
- Valeur obligatoire
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
   - HORS-UE

#### Identifiant du titulaire - Propriété id
> *Description : Types d'identifiants possibles (favoriser le SIRET) : SIRET, TVA, TAHITI, RIDET, FRWF, IREP, HORS-UE.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

#### Considérations sociales - Propriété considerationsSociales
> *Description : Les considérations sociales du marché public*<br>
- Valeur obligatoire
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

</details>
</blockquote>

#### Considérations environnementales - Propriété considerationsEnvironnementales
> *Description : Les considérations environnementales du marché public*<br>
- Valeur obligatoire
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

</details>
</blockquote>

#### Modifications des actes spéciaux de sous-traitance - Propriété modificationsActesSousTraitance
> *Description : Une fois les données essentielles d'un acte spécial de sous-traitance publiées dans actesSousTraitance, aucune modification des données n'est possible, si ce n'est par l'ajout d'objets dans modificationsActesSousTraitance.*<br>
- Valeur optionnelle
- Type : liste

<blockquote>
<details>

<summary>Cette propriété doit contenir une liste d'éléments parmi les suivants :</summary>

#### Propriété ModificationActesSousTraitanceArray
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Modification d'un acte spécial de sous-traitance - Propriété modificationActeSousTraitance
- Valeur obligatoire
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Numéro d'identification de l'acte spécial de sous-traitance - Propriété id
> *Description : Numéro permettant d'identifier l'acte spécial de sous-traitance à modifier.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Durée de l'acte spécial de sous-traitance - Propriété dureeMois
> *Description : La nouvelle durée de l'acte spécial de sous-traitance, en mois.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Date de notification de la modification de l'acte spécial de sous-traitance - Propriété dateNotificationModificationSousTraitance
> *Description : Date à laquelle la modification de l'acte spécial de sous-traitance a été notifiée au sous-traitant, au format AAAA-MM-JJ.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `\d{4}-\d{2}-\d{2}`

#### Nouveau montant HT de l'acte spécial de sous-traitance ou montant estimé maximum attribué - Propriété montant
> *Description : Le nouveau montant HT de la sous-traitance*<br>
- Valeur obligatoire
- Type : nombre

#### Date de la publication des données de la modification de l'acte spécial de sous-traitance - Propriété datePublicationDonnees
> *Description : Date à laquelle les données essentielles sont republiées suite à la modification, au format AAAA-MM-JJ.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `\d{4}-\d{2}-\d{2}`

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

#### Modifications des données du marché après leur publication initiale - Propriété modifications
> *Description : Une fois les données essentielles du marché publiées, aucune modification des données n'est possible, si ce n'est l'ajout d'objets dans Modifications.*<br>
- Valeur optionnelle
- Type : liste

<blockquote>
<details>

<summary>Cette propriété doit contenir une liste d'éléments parmi les suivants :</summary>

#### Propriété ModificationArray
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Modification - Propriété modification
> *Description : Une modification du marché ayant lieu après la publication des données essentielles du marché.*<br>
- Valeur obligatoire
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Numéro d'identification de la modification - Propriété id
> *Description : Numéro permettant d'identifier la modification. Il doit être unique au sein d'un marché public et former une séquence croissante correspondant à l'ordre de notification des modifications.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Date de la notification de la modification - Propriété dateNotificationModification
> *Description : Date à laquelle la modification du marché public a été notifiée au titulaire.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `\d{4}-\d{2}-\d{2}`

#### Date de la republication des données incluant la modification - Propriété datePublicationDonneesModification
> *Description : Date à laquelle les données essentielles sont republiées suite à la modification, au format AAAA-MM-JJ.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `\d{4}-\d{2}-\d{2}`

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

#### Propriété TitulaireArray
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### titulaire - Propriété titulaire
- Valeur obligatoire
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
   - HORS-UE

#### Identifiant du titulaire - Propriété id
> *Description : Types d'identifiants possibles (favoriser le SIRET) : SIRET, TVA, TAHITI, RIDET, FRWF, IREP, HORS-UE.*<br>
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

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

#### Propriété contrat-concession
- Type : liste

<blockquote>
<details>

<summary>Cette propriété doit contenir une liste d'éléments parmi les suivants :</summary>

#### Format réglementaire de publication des données essentielles des contrats de concession français - Propriété contrat-concessionList
- Valeur optionnelle
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Identifiant de contrat de concession - Propriété id
> *Description : L'identifiant de contrat de concession est un numéro d'ordre interne propre à l'acheteur public (1 à 16 caractères). Les caractères spéciaux suivants sont à éviter autant que possible : &, ", \, <, espace, virgule, point virgule.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

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
- Type : chaîne de caractères
- Valeurs autorisées :
   - Procédure négociée ouverte
   - Procédure non négociée ouverte
   - Procédure négociée restreinte
   - Procédure non négociée restreinte

#### Durée du contrat de concession - Propriété dureeMois
> *Description : La durée du contrat de concession, en mois.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Date de la signature du marché - Propriété dateSignature
> *Description : Date à laquelle le contrat de concession a été signé par l'autorité concédante, au format AAAA-MM-JJ.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `\d{4}-\d{2}-\d{2}`

#### Date de la publication des données essentielles du contrat de concession - Propriété datePublicationDonnees
> *Description : Date à laquelle les données essentielles du contrat de concession ont été publiées par l'acheteur sur data.gouv.fr, au format AAAA-MM-JJ.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `\d{4}-\d{2}-\d{2}`

#### Date du début de l'exécution du contrat de concession - Propriété dateDebutExecution
> *Description : Date à laquelle a commencé l'exécution du contrat de concession, au format AAAA-MM-JJ.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `\d{4}-\d{2}-\d{2}`

#### Valeur globale attribuée - Propriété valeurGlobale
- Valeur obligatoire
- Type : nombre

#### Montant de la subvention publique ou de tout autre avantage financier - Propriété montantSubventionPublique
> *Description : Si aucune avantage financier n'est octroyée, indiquer 0.*<br>
- Valeur obligatoire
- Type : nombre

#### Données d'exécution - Propriété donneesExecution
> *Description : Les données d'exécution du contrat de concession à une date donnée. Tous les ans, l'autorité concédante publie les données d'exécution, jusqu'à la fin du contrat de concession. Ces données ne sont inclues qu'à partir de la première année, pas lors de la publication initiale des données qui fait suite à la notification.*<br>
- Valeur optionnelle
- Type : liste

<blockquote>
<details>

<summary>Cette propriété doit contenir une liste d'éléments parmi les suivants :</summary>

#### Propriété DonneesExecutionArray
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Données d'éxecution - Propriété donneesAnnuelles
- Valeur obligatoire
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Date de publication des données d'exécution - Propriété datePublicationDonneesExecution
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `\d{4}-\d{2}-\d{2}`

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

#### Propriété TarifArray
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Tarif à la charge des usagers - Propriété tarif
- Valeur obligatoire
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

#### Propriété ConcessionnaireArray
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Concessionnaire - Propriété concessionnaire
- Valeur obligatoire
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
   - HORS-UE

#### Identifiant du concessionnaire - Propriété id
> *Description : Types d'identifiants possibles (favoriser le SIRET) : SIRET, TVA, TAHITI, RIDET, FRWF, IREP, HORS-UE.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

#### Considérations sociales - Propriété considerationsSociales
> *Description : Les considérations sociales du marché public*<br>
- Valeur obligatoire
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

</details>
</blockquote>

#### Considérations environnementales - Propriété considerationsEnvironnementales
> *Description : Les considérations environnementales du marché public*<br>
- Valeur obligatoire
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

</details>
</blockquote>

#### Modifications des données du contrat de concession après leur publication initiale - Propriété modifications
> *Description : Une fois les données essentielles du contrat de concession publiées, aucune modification des données n'est possible, si ce n'est l'ajout d'objets dans Modifications.*<br>
- Valeur optionnelle
- Type : liste

<blockquote>
<details>

<summary>Cette propriété doit contenir une liste d'éléments parmi les suivants :</summary>

#### Propriété ModificationArray
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Modification - Propriété modification
> *Description : Une modification du contrat de concession ayant lieu après la publication initiale des données essentielles.*<br>
- Valeur obligatoire
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Numéro d'identification de la modification - Propriété id
> *Description : Ce numéro permet d'identifier une modification de manière unique au sein d'un marché public. Les numéros d'identification de modification doivent être attribués de manière séquentielle de façon à pouvoir trier les modifications par ordre chronologique croissant.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Date de la signature de la modification - Propriété dateSignatureModification
> *Description : Date à laquelle la modification du contrat de concession a été signée par l'autorité concédante.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `\d{4}-\d{2}-\d{2}`

#### Date de la republication des données incluant la modification - Propriété datePublicationDonneesModification
> *Description : Date à laquelle les données essentielles sont republiées suite à la modification, au format AAAA-MM-JJ.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `\d{4}-\d{2}-\d{2}`

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

</details>
</blockquote>

</details>
</blockquote>

