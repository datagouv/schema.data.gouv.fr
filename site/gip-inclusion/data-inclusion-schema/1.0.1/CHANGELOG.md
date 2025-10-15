<MenuSchema />

# Journal des changements

## 1.0.1 - 2025-10-14

### Ajouts

* ajout des champs `volume_horaire_hebdomadaire` et `nombre_semaines`
* ajout du champ `mobilisable_par` et du référentiel associé
* ajout des champs `typologie` & `reseaux_porteurs`

### Changements

* validation des champs `nom` et `date_maj`
* refonte du référentiel des `thematiques`
* améliorations de la documentation de chaque champ existant en v0 et v1
* fusion des champs service `pre_requis` et `justificatifs` dans un nouveau champ `conditions_acces`
* fusion des champs structure `typologie` et `labels_nationaux` dans un nouveau champ `reseaux_porteurs`
* refonte du référentiel des `frais`
* remplacement des champs `modes_orientation_***_autres` en faveur d'un champ unique `modes_mobilisation_precisions`
* remplacement des champs `modes_orientation_***` en faveur d'un champ unique `modes_mobilisation`
* remplacement des champs `presentation_***` en faveur d'un champ unique `description` et mise à jour du critère de qualité `description_bien_definie`
* remplacement des champs `prise_rdv`, `formulaire_en_ligne` et `page_web` en faveur d'un champ unique `lien_mobilisation`
* remplacement des champs `zone_diffusion_***` en faveur d'un champ unique `zone_eligibilite`
* remplacement des champs `zone_diffusion_***` par le champ `zone_eligibilite`
* remplacement du champ `types` en faveur du champ `type`
* remplacement du critère score de qualité `au_moins_un_mode_orientation` par `modes_mobilisation_bien_definis`
* renommage du champ `accessibilite` par le champ `accessibilite_lieu`
* renommage du champ service `frais_autres` en `frais_precisions`
* renommage du champ service `recurrence` en `horaires_accueil`
* renommage du champ structure `horaires_ouverture` en `horaires_accueil`
* transformation du champ "id" pour en faire la clé primaire unique de chaque service & structure
* renommage `profils` en `publics` et refonte du référentiel associé
* validation du bon usage de la valeur `tous-publics`
* validation des dates de mise à jour `date_maj`
* validation des `nom`s de structures et de services

### Suppressions

**Schéma structure**

* suppression du champ `antenne`
* suppression du champ `rna`
* suppression du champ `thematiques`
* suppression du champ `labels_autres`

**Schéma service**

* suppression du champ `contact_public`
* suppression du champ `cumulable`
* suppression du champ `date_creation`
* suppression du champ `date_suspension`
