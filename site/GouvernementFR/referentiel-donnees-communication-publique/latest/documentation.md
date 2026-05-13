<MenuSchema />

## referentiel-donnees-communication-publique

Dépôt de référence des schémas de données et de la documentation des jeux de données ouverts

Dépôt de référence des schémas de données et de la documentation des jeux de données ouverts publiés par le **Service d'information du Gouvernement (SIG).

- Site web : https://github.com/GouvernementFR/referentiel-donnees-communication-publique
- Version : 0.1.0

### Arborescence des propriétés :

#### Propriété version
> *Description : Version du communiqué. Incrémentée de +1 à chaque publication.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété langue
> *Description : Langue du communiqué, norme ISO Alpha-2.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété type_document
> *Description : Type de document*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées :
   - communique_de_presse
   - dossier_de_presse

#### Propriété mots_cles
> *Description : Mots-clés libres associés au communiqué. Optionnels.*<br>
- Valeur optionnelle
- Type : liste

#### Propriété lieu_diffusion
> *Description : Lieu d'émission du communiqué (ex : "Hôtel de Matignon", "Paris").*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété date_diffusion
> *Description : Date de diffusion au format ISO 8601 (AAAA-MM-JJ).*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété personnalites
> *Description : Personnalités du Gouvernement associées au communiqué, référencées par leur UUID issu de composition-gouvernement.json. Au moins une obligatoire.*<br>
- Valeur obligatoire
- Type : liste
#### Propriété id
> *Description : UUID de la personnalité.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété thematiques
> *Description : Thématiques officielles associées, référencées par leur UUID issu de thematiques.json. Au moins une obligatoire.*<br>
- Valeur obligatoire
- Type : liste
#### Propriété id
> *Description : UUID de la thématique.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété sous_thematiques
> *Description : Sous-thématiques officielles associées. Optionnelles mais recommandées.*<br>
- Valeur optionnelle
- Type : liste
#### Propriété id
> *Description : UUID de la sous-thématique.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété mission
> *Description : Mission essentielle de l'État associée au communiqué. Optionnelle. Référencée par son UUID issu de missions-essentielles.json.*<br>
- Valeur optionnelle
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété id
> *Description : UUID de la mission essentielle.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

</details>
</blockquote>

#### Propriété objet
> *Description : Objet de communication interministérielle associé au communiqué. Optionnel. Référencé par son UUID issu de missions-essentielles.json.*<br>
- Valeur optionnelle
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété id
> *Description : ID de l'objet de communication interministérielle.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

</details>
</blockquote>

#### Propriété contenu
> *Description : Corps complet du communiqué au format Markdown.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété contacts_presse
> *Description : Contacts presse associés au communiqué (0 à n). Optionnels.*<br>
- Valeur optionnelle
- Type : liste
#### Propriété civilite
> *Description : Civilité du contact. Null si le contact est un service.*<br>
- Valeur optionnelle
- Type : chaîne de caractères ou `null`
- Valeurs autorisées :
   - M.
   - Mme
   - `null`

#### Propriété contact_privilegie
> *Description : Nom de la personne ou du service (ex : "Sophie Martin", "Bureau de presse de Bercy").*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété fonction
> *Description : Poste ou rôle du contact. Optionnel.*<br>
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

#### Propriété email
> *Description : Adresse email de contact. Obligatoire.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété telephone
> *Description : Numéro de téléphone au format +33... ou 06...*<br>
- Valeur optionnelle
- Type : chaîne de caractères ou `null`
- Motif : `^(\+33|0)[0-9 ]{8,14}$`

#### Propriété lien_formulaire
> *Description : Lien vers un formulaire de contact. Optionnel.*<br>
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

#### Propriété adresse_physique
> *Description : Adresse postale du contact. Optionnelle.*<br>
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

#### Propriété pieces_jointes
> *Description : Liste des pièces jointes associées au communiqué.*<br>
- Valeur optionnelle
- Type : liste
#### Propriété libelle
> *Description : Libellé de la pièce jointe.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété lien
> *Description : URL de la pièce jointe.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété poids
> *Description : Poids en octets.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété mimetype
> *Description : MIME type au format type/sous-type.*<br>
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[a-zA-Z0-9!#$&^_.+-]+\/[a-zA-Z0-9!#$&^_.+-]+$`

