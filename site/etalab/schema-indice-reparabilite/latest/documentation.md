<MenuSchema />

## indice-reparabilite

Indice de réparabilité

Schéma de données pour l'indice de réparabilité

- Schéma créé le : 19/05/2023
- Site web : https://github.com/etalab/schema-indice-reparabilite
- Version : 0.1.2
- Clé primaire : `id_unique`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id_unique](#propriete-id-unique) | chaîne de caractères  | Oui |
| [id_modele](#propriete-id-modele) | chaîne de caractères  | Oui |
| [referentiel_id_modele](#propriete-referentiel-id-modele) | chaîne de caractères  | Oui |
| [nom_modele](#propriete-nom-modele) | chaîne de caractères  | Oui |
| [categorie_produit](#propriete-categorie-produit) | chaîne de caractères  | Oui |
| [id_metteur_sur_le_marche](#propriete-id-metteur-sur-le-marche) | chaîne de caractères  | Oui |
| [referentiel_id_metteur_sur_marche](#propriete-referentiel-id-metteur-sur-marche) | chaîne de caractères  | Oui |
| [nom_metteur_sur_le_marche](#propriete-nom-metteur-sur-le-marche) | chaîne de caractères  | Oui |
| [date_calcul](#propriete-date-calcul) | date  | Oui |
| [url_tableau_detail_notation](#propriete-url-tableau-detail-notation) | chaîne de caractères  | Non |
| [note_ir](#propriete-note-ir) | nombre réel  | Oui |
| [note_c1](#propriete-note-c1) | nombre réel  | Oui |
| [note_c2](#propriete-note-c2) | nombre réel  | Oui |
| [note_c3](#propriete-note-c3) | nombre réel  | Oui |
| [note_c4](#propriete-note-c4) | nombre réel  | Oui |
| [note_c5](#propriete-note-c5) | nombre réel  | Oui |
| [note_c2.1](#propriete-note-c2-1) | nombre réel  | Oui |
| [note_c2.2](#propriete-note-c2-2) | nombre réel  | Oui |
| [note_c2.3](#propriete-note-c2-3) | nombre réel  | Oui |
| [note_c3.1](#propriete-note-c3-1) | nombre réel  | Oui |
| [note_c3.2](#propriete-note-c3-2) | nombre réel  | Oui |
| [note_c3.3](#propriete-note-c3-3) | nombre réel  | Oui |
| [note_c3.4](#propriete-note-c3-4) | nombre réel  | Oui |
| [note_c5.1](#propriete-note-c5-1) | nombre réel  | Oui |
| [note_c5.2](#propriete-note-c5-2) | nombre réel  | Non |
| [note_c5.3](#propriete-note-c5-3) | nombre réel  | Non |
| [lien_documentation](#propriete-lien-documentation) | chaîne de caractères  | Non |
| [nom_piece_detachee_1_reparateur](#propriete-nom-piece-detachee-1-reparateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_1_reparateur](#propriete-delai-jours-piece-detachee-1-reparateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_1_reparateur](#propriete-nb-annees-disponibilite-piece-detachee-1-reparateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_2_reparateur](#propriete-nom-piece-detachee-2-reparateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_2_reparateur](#propriete-delai-jours-piece-detachee-2-reparateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_2_reparateur](#propriete-nb-annees-disponibilite-piece-detachee-2-reparateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_3_reparateur](#propriete-nom-piece-detachee-3-reparateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_3_reparateur](#propriete-delai-jours-piece-detachee-3-reparateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_3_reparateur](#propriete-nb-annees-disponibilite-piece-detachee-3-reparateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_4_reparateur](#propriete-nom-piece-detachee-4-reparateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_4_reparateur](#propriete-delai-jours-piece-detachee-4-reparateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_4_reparateur](#propriete-nb-annees-disponibilite-piece-detachee-4-reparateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_5_reparateur](#propriete-nom-piece-detachee-5-reparateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_5_reparateur](#propriete-delai-jours-piece-detachee-5-reparateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_5_reparateur](#propriete-nb-annees-disponibilite-piece-detachee-5-reparateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_6_reparateur](#propriete-nom-piece-detachee-6-reparateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_6_reparateur](#propriete-delai-jours-piece-detachee-6-reparateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_6_reparateur](#propriete-nb-annees-disponibilite-piece-detachee-6-reparateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_7_reparateur](#propriete-nom-piece-detachee-7-reparateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_7_reparateur](#propriete-delai-jours-piece-detachee-7-reparateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_7_reparateur](#propriete-nb-annees-disponibilite-piece-detachee-7-reparateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_8_reparateur](#propriete-nom-piece-detachee-8-reparateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_8_reparateur](#propriete-delai-jours-piece-detachee-8-reparateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_8_reparateur](#propriete-nb-annees-disponibilite-piece-detachee-8-reparateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_9_reparateur](#propriete-nom-piece-detachee-9-reparateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_9_reparateur](#propriete-delai-jours-piece-detachee-9-reparateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_9_reparateur](#propriete-nb-annees-disponibilite-piece-detachee-9-reparateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_10_reparateur](#propriete-nom-piece-detachee-10-reparateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_10_reparateur](#propriete-delai-jours-piece-detachee-10-reparateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_10_reparateur](#propriete-nb-annees-disponibilite-piece-detachee-10-reparateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_11_reparateur](#propriete-nom-piece-detachee-11-reparateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_11_reparateur](#propriete-delai-jours-piece-detachee-11-reparateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_11_reparateur](#propriete-nb-annees-disponibilite-piece-detachee-11-reparateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_12_reparateur](#propriete-nom-piece-detachee-12-reparateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_12_reparateur](#propriete-delai-jours-piece-detachee-12-reparateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_12_reparateur](#propriete-nb-annees-disponibilite-piece-detachee-12-reparateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_13_reparateur](#propriete-nom-piece-detachee-13-reparateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_13_reparateur](#propriete-delai-jours-piece-detachee-13-reparateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_13_reparateur](#propriete-nb-annees-disponibilite-piece-detachee-13-reparateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_14_reparateur](#propriete-nom-piece-detachee-14-reparateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_14_reparateur](#propriete-delai-jours-piece-detachee-14-reparateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_14_reparateur](#propriete-nb-annees-disponibilite-piece-detachee-14-reparateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_15_reparateur](#propriete-nom-piece-detachee-15-reparateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_15_reparateur](#propriete-delai-jours-piece-detachee-15-reparateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_15_reparateur](#propriete-nb-annees-disponibilite-piece-detachee-15-reparateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_1_producteur](#propriete-nom-piece-detachee-1-producteur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_1_producteur](#propriete-delai-jours-piece-detachee-1-producteur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_1_producteur](#propriete-nb-annees-disponibilite-piece-detachee-1-producteur) | chaîne de caractères  | Non |
| [nom_piece_detachee_2_producteur](#propriete-nom-piece-detachee-2-producteur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_2_producteur](#propriete-delai-jours-piece-detachee-2-producteur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_2_producteur](#propriete-nb-annees-disponibilite-piece-detachee-2-producteur) | chaîne de caractères  | Non |
| [nom_piece_detachee_3_producteur](#propriete-nom-piece-detachee-3-producteur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_3_producteur](#propriete-delai-jours-piece-detachee-3-producteur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_3_producteur](#propriete-nb-annees-disponibilite-piece-detachee-3-producteur) | chaîne de caractères  | Non |
| [nom_piece_detachee_4_producteur](#propriete-nom-piece-detachee-4-producteur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_4_producteur](#propriete-delai-jours-piece-detachee-4-producteur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_4_producteur](#propriete-nb-annees-disponibilite-piece-detachee-4-producteur) | chaîne de caractères  | Non |
| [nom_piece_detachee_5_producteur](#propriete-nom-piece-detachee-5-producteur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_5_producteur](#propriete-delai-jours-piece-detachee-5-producteur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_5_producteur](#propriete-nb-annees-disponibilite-piece-detachee-5-producteur) | chaîne de caractères  | Non |
| [nom_piece_detachee_6_producteur](#propriete-nom-piece-detachee-6-producteur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_6_producteur](#propriete-delai-jours-piece-detachee-6-producteur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_6_producteur](#propriete-nb-annees-disponibilite-piece-detachee-6-producteur) | chaîne de caractères  | Non |
| [nom_piece_detachee_7_producteur](#propriete-nom-piece-detachee-7-producteur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_7_producteur](#propriete-delai-jours-piece-detachee-7-producteur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_7_producteur](#propriete-nb-annees-disponibilite-piece-detachee-7-producteur) | chaîne de caractères  | Non |
| [nom_piece_detachee_8_producteur](#propriete-nom-piece-detachee-8-producteur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_8_producteur](#propriete-delai-jours-piece-detachee-8-producteur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_8_producteur](#propriete-nb-annees-disponibilite-piece-detachee-8-producteur) | chaîne de caractères  | Non |
| [nom_piece_detachee_9_producteur](#propriete-nom-piece-detachee-9-producteur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_9_producteur](#propriete-delai-jours-piece-detachee-9-producteur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_9_producteur](#propriete-nb-annees-disponibilite-piece-detachee-9-producteur) | chaîne de caractères  | Non |
| [nom_piece_detachee_10_producteur](#propriete-nom-piece-detachee-10-producteur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_10_producteur](#propriete-delai-jours-piece-detachee-10-producteur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_10_producteur](#propriete-nb-annees-disponibilite-piece-detachee-10-producteur) | chaîne de caractères  | Non |
| [nom_piece_detachee_11_producteur](#propriete-nom-piece-detachee-11-producteur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_11_producteur](#propriete-delai-jours-piece-detachee-11-producteur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_11_producteur](#propriete-nb-annees-disponibilite-piece-detachee-11-producteur) | chaîne de caractères  | Non |
| [nom_piece_detachee_12_producteur](#propriete-nom-piece-detachee-12-producteur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_12_producteur](#propriete-delai-jours-piece-detachee-12-producteur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_12_producteur](#propriete-nb-annees-disponibilite-piece-detachee-12-producteur) | chaîne de caractères  | Non |
| [nom_piece_detachee_13_producteur](#propriete-nom-piece-detachee-13-producteur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_13_producteur](#propriete-delai-jours-piece-detachee-13-producteur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_13_producteur](#propriete-nb-annees-disponibilite-piece-detachee-13-producteur) | chaîne de caractères  | Non |
| [nom_piece_detachee_14_producteur](#propriete-nom-piece-detachee-14-producteur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_14_producteur](#propriete-delai-jours-piece-detachee-14-producteur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_14_producteur](#propriete-nb-annees-disponibilite-piece-detachee-14-producteur) | chaîne de caractères  | Non |
| [nom_piece_detachee_15_producteur](#propriete-nom-piece-detachee-15-producteur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_15_producteur](#propriete-delai-jours-piece-detachee-15-producteur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_15_producteur](#propriete-nb-annees-disponibilite-piece-detachee-15-producteur) | chaîne de caractères  | Non |
| [nom_piece_detachee_1_distributeur](#propriete-nom-piece-detachee-1-distributeur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_1_distributeur](#propriete-delai-jours-piece-detachee-1-distributeur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_1_distributeur](#propriete-nb-annees-disponibilite-piece-detachee-1-distributeur) | chaîne de caractères  | Non |
| [nom_piece_detachee_2_distributeur](#propriete-nom-piece-detachee-2-distributeur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_2_distributeur](#propriete-delai-jours-piece-detachee-2-distributeur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_2_distributeur](#propriete-nb-annees-disponibilite-piece-detachee-2-distributeur) | chaîne de caractères  | Non |
| [nom_piece_detachee_3_distributeur](#propriete-nom-piece-detachee-3-distributeur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_3_distributeur](#propriete-delai-jours-piece-detachee-3-distributeur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_3_distributeur](#propriete-nb-annees-disponibilite-piece-detachee-3-distributeur) | chaîne de caractères  | Non |
| [nom_piece_detachee_4_distributeur](#propriete-nom-piece-detachee-4-distributeur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_4_distributeur](#propriete-delai-jours-piece-detachee-4-distributeur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_4_distributeur](#propriete-nb-annees-disponibilite-piece-detachee-4-distributeur) | chaîne de caractères  | Non |
| [nom_piece_detachee_5_distributeur](#propriete-nom-piece-detachee-5-distributeur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_5_distributeur](#propriete-delai-jours-piece-detachee-5-distributeur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_5_distributeur](#propriete-nb-annees-disponibilite-piece-detachee-5-distributeur) | chaîne de caractères  | Non |
| [nom_piece_detachee_6_distributeur](#propriete-nom-piece-detachee-6-distributeur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_6_distributeur](#propriete-delai-jours-piece-detachee-6-distributeur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_6_distributeur](#propriete-nb-annees-disponibilite-piece-detachee-6-distributeur) | chaîne de caractères  | Non |
| [nom_piece_detachee_7_distributeur](#propriete-nom-piece-detachee-7-distributeur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_7_distributeur](#propriete-delai-jours-piece-detachee-7-distributeur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_7_distributeur](#propriete-nb-annees-disponibilite-piece-detachee-7-distributeur) | chaîne de caractères  | Non |
| [nom_piece_detachee_8_distributeur](#propriete-nom-piece-detachee-8-distributeur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_8_distributeur](#propriete-delai-jours-piece-detachee-8-distributeur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_8_distributeur](#propriete-nb-annees-disponibilite-piece-detachee-8-distributeur) | chaîne de caractères  | Non |
| [nom_piece_detachee_9_distributeur](#propriete-nom-piece-detachee-9-distributeur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_9_distributeur](#propriete-delai-jours-piece-detachee-9-distributeur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_9_distributeur](#propriete-nb-annees-disponibilite-piece-detachee-9-distributeur) | chaîne de caractères  | Non |
| [nom_piece_detachee_10_distributeur](#propriete-nom-piece-detachee-10-distributeur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_10_distributeur](#propriete-delai-jours-piece-detachee-10-distributeur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_10_distributeur](#propriete-nb-annees-disponibilite-piece-detachee-10-distributeur) | chaîne de caractères  | Non |
| [nom_piece_detachee_11_distributeur](#propriete-nom-piece-detachee-11-distributeur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_11_distributeur](#propriete-delai-jours-piece-detachee-11-distributeur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_11_distributeur](#propriete-nb-annees-disponibilite-piece-detachee-11-distributeur) | chaîne de caractères  | Non |
| [nom_piece_detachee_12_distributeur](#propriete-nom-piece-detachee-12-distributeur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_12_distributeur](#propriete-delai-jours-piece-detachee-12-distributeur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_12_distributeur](#propriete-nb-annees-disponibilite-piece-detachee-12-distributeur) | chaîne de caractères  | Non |
| [nom_piece_detachee_13_distributeur](#propriete-nom-piece-detachee-13-distributeur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_13_distributeur](#propriete-delai-jours-piece-detachee-13-distributeur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_13_distributeur](#propriete-nb-annees-disponibilite-piece-detachee-13-distributeur) | chaîne de caractères  | Non |
| [nom_piece_detachee_14_distributeur](#propriete-nom-piece-detachee-14-distributeur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_14_distributeur](#propriete-delai-jours-piece-detachee-14-distributeur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_14_distributeur](#propriete-nb-annees-disponibilite-piece-detachee-14-distributeur) | chaîne de caractères  | Non |
| [nom_piece_detachee_15_distributeur](#propriete-nom-piece-detachee-15-distributeur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_15_distributeur](#propriete-delai-jours-piece-detachee-15-distributeur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_15_distributeur](#propriete-nb-annees-disponibilite-piece-detachee-15-distributeur) | chaîne de caractères  | Non |
| [nom_piece_detachee_1_consommateur](#propriete-nom-piece-detachee-1-consommateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_1_consommateur](#propriete-delai-jours-piece-detachee-1-consommateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_1_consommateur](#propriete-nb-annees-disponibilite-piece-detachee-1-consommateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_2_consommateur](#propriete-nom-piece-detachee-2-consommateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_2_consommateur](#propriete-delai-jours-piece-detachee-2-consommateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_2_consommateur](#propriete-nb-annees-disponibilite-piece-detachee-2-consommateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_3_consommateur](#propriete-nom-piece-detachee-3-consommateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_3_consommateur](#propriete-delai-jours-piece-detachee-3-consommateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_3_consommateur](#propriete-nb-annees-disponibilite-piece-detachee-3-consommateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_4_consommateur](#propriete-nom-piece-detachee-4-consommateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_4_consommateur](#propriete-delai-jours-piece-detachee-4-consommateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_4_consommateur](#propriete-nb-annees-disponibilite-piece-detachee-4-consommateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_5_consommateur](#propriete-nom-piece-detachee-5-consommateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_5_consommateur](#propriete-delai-jours-piece-detachee-5-consommateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_5_consommateur](#propriete-nb-annees-disponibilite-piece-detachee-5-consommateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_6_consommateur](#propriete-nom-piece-detachee-6-consommateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_6_consommateur](#propriete-delai-jours-piece-detachee-6-consommateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_6_consommateur](#propriete-nb-annees-disponibilite-piece-detachee-6-consommateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_7_consommateur](#propriete-nom-piece-detachee-7-consommateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_7_consommateur](#propriete-delai-jours-piece-detachee-7-consommateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_7_consommateur](#propriete-nb-annees-disponibilite-piece-detachee-7-consommateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_8_consommateur](#propriete-nom-piece-detachee-8-consommateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_8_consommateur](#propriete-delai-jours-piece-detachee-8-consommateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_8_consommateur](#propriete-nb-annees-disponibilite-piece-detachee-8-consommateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_9_consommateur](#propriete-nom-piece-detachee-9-consommateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_9_consommateur](#propriete-delai-jours-piece-detachee-9-consommateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_9_consommateur](#propriete-nb-annees-disponibilite-piece-detachee-9-consommateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_10_consommateur](#propriete-nom-piece-detachee-10-consommateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_10_consommateur](#propriete-delai-jours-piece-detachee-10-consommateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_10_consommateur](#propriete-nb-annees-disponibilite-piece-detachee-10-consommateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_11_consommateur](#propriete-nom-piece-detachee-11-consommateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_11_consommateur](#propriete-delai-jours-piece-detachee-11-consommateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_11_consommateur](#propriete-nb-annees-disponibilite-piece-detachee-11-consommateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_12_consommateur](#propriete-nom-piece-detachee-12-consommateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_12_consommateur](#propriete-delai-jours-piece-detachee-12-consommateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_12_consommateur](#propriete-nb-annees-disponibilite-piece-detachee-12-consommateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_13_consommateur](#propriete-nom-piece-detachee-13-consommateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_13_consommateur](#propriete-delai-jours-piece-detachee-13-consommateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_13_consommateur](#propriete-nb-annees-disponibilite-piece-detachee-13-consommateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_14_consommateur](#propriete-nom-piece-detachee-14-consommateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_14_consommateur](#propriete-delai-jours-piece-detachee-14-consommateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_14_consommateur](#propriete-nb-annees-disponibilite-piece-detachee-14-consommateur) | chaîne de caractères  | Non |
| [nom_piece_detachee_15_consommateur](#propriete-nom-piece-detachee-15-consommateur) | chaîne de caractères  | Non |
| [delai_jours_piece_detachee_15_consommateur](#propriete-delai-jours-piece-detachee-15-consommateur) | chaîne de caractères  | Non |
| [nb_annees_disponibilite_piece_detachee_15_consommateur](#propriete-nb-annees-disponibilite-piece-detachee-15-consommateur) | chaîne de caractères  | Non |

#### Propriété `id_unique`

> *Description : L'identifiant garantissant l'unicité du modèle de produits faisant l'objet d'un indice de réparabilité. Il est obtenu en concaténant l'identifiant du modèle, l'identifiant du fabricant et la date du calcul de l'indice. Les trois éléments sont séparés par un tiret -.*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[\w.]+-[\w]+-\d{4}-\d{2}-\d{2}$`

#### Propriété `id_modele`

> *Description : La référence commerciale du modèle ou l'identifiant du modèle*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[\w.]+$`

#### Propriété `referentiel_id_modele`

> *Description : Le type de référence utilisé pour l'identifiant du produit selon la norme internationale ISO 15459.*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - GTIN_EAN
    - SH4

#### Propriété `nom_modele`

> *Description : La dénomination officielle du modèle*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `categorie_produit`

> *Description : La catégorie du produit selon la nomenclature des catégories définies par arrêté faisant l'objet d'un indice*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Aspirateur filaire
    - Aspirateur non filaire
    - Aspirateur robot
    - Lave-linge à chargement frontal (ou Lave-linge hublot)
    - Lave-linge à chargement par le haut (ou Lave-linge top)
    - ordinateur portable
    - Smartphone
    - Tondeuse à gazon électrique batterie
    - Tondeuse à gazon électrique robot
    - Tondeuse à gazon électrique filaire
    - Nettoyeur haute pression
    - Téléviseur
    - Lave-vaisselle

#### Propriété `id_metteur_sur_le_marche`

> *Description : L'identifiant du metteur sur le marché*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[\w]+$`

#### Propriété `referentiel_id_metteur_sur_marche`

> *Description : Le type de référence utilisé pour l'identifiant du metteur sur le marché.*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - GLN
    - SYDEREP

#### Propriété `nom_metteur_sur_le_marche`

> *Description : La dénomination officielle du metteur sur le marché*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `date_calcul`

> *Description : La date à laquelle le calcul de l'indice a été effectué*
- Valeur obligatoire
- Type : date

#### Propriété `url_tableau_detail_notation`

> *Description : Le lien vers le tableau du détail de la notation*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(https?)://[^\s/$.?#].[^\s]*$`

#### Propriété `note_ir`

> *Description : La note finale de l'indice de réparabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_c1`

> *Description : La note du critère 1 documentation : note sur 20 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 20

#### Propriété `note_c2`

> *Description : La note du critère 2 démontabilité : note sur 20 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 20

#### Propriété `note_c3`

> *Description : La note du critère 3 disponibilité des pièces détachées : note sur 20 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 20

#### Propriété `note_c4`

> *Description : La note du critère 4 Prix : note sur 20 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 20

#### Propriété `note_c5`

> *Description : La note du critère 5 spécifique : note sur 20 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 20

#### Propriété `note_c2.1`

> *Description : La note du sous-critère 2.1 : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_c2.2`

> *Description : La note du sous-critère 2.2 : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_c2.3`

> *Description : La note du sous-critère 2.3 : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_c3.1`

> *Description : La note du sous-critère 3.1 : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_c3.2`

> *Description : La note du sous-critère 3.2 : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_c3.3`

> *Description : La note du sous-critère 3.3 : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_c3.4`

> *Description : La note du sous-critère 3.4 : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_c5.1`

> *Description : La note du sous-critère 5.1 : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_c5.2`

> *Description : La note du sous-critère 5.2 (le cas échéant) : note sur 10 comportant une décimale*
- Valeur optionnelle
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_c5.3`

> *Description : La note du sous-critère 5.3 (le cas échéant) : note sur 10 comportant une décimale*
- Valeur optionnelle
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `lien_documentation`

> *Description : Le lien vers la documentation technique disponible (ou modalités d'accès)*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(https?)://[^\s/$.?#].[^\s]*$`

#### Propriété `nom_piece_detachee_1_reparateur`

> *Description : Le nom de la pièce détachée n°1 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_1_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°1 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_1_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°1 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_2_reparateur`

> *Description : Le nom de la pièce détachée n°2 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_2_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°2 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_2_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°2 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_3_reparateur`

> *Description : Le nom de la pièce détachée n°3 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_3_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°3 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_3_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°3 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_4_reparateur`

> *Description : Le nom de la pièce détachée n°4 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_4_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°4 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_4_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°4 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_5_reparateur`

> *Description : Le nom de la pièce détachée n°5 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_5_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°5 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_5_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°5 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_6_reparateur`

> *Description : Le nom de la pièce détachée n°6 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_6_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°6 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_6_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°6 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_7_reparateur`

> *Description : Le nom de la pièce détachée n°7 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_7_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°7 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_7_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°7 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_8_reparateur`

> *Description : Le nom de la pièce détachée n°8 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_8_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°8 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_8_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°8 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_9_reparateur`

> *Description : Le nom de la pièce détachée n°9 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_9_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°9 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_9_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°9 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_10_reparateur`

> *Description : Le nom de la pièce détachée n°10 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_10_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°10 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_10_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°10 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_11_reparateur`

> *Description : Le nom de la pièce détachée n°11 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_11_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°11 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_11_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°11 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_12_reparateur`

> *Description : Le nom de la pièce détachée n°12 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_12_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°12 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_12_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°12 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_13_reparateur`

> *Description : Le nom de la pièce détachée n°13 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_13_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°13 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_13_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°13 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_14_reparateur`

> *Description : Le nom de la pièce détachée n°14 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_14_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°14 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_14_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°14 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_15_reparateur`

> *Description : Le nom de la pièce détachée n°15 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_15_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°15 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_15_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°15 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_1_producteur`

> *Description : Le nom de la pièce détachée n°1 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_1_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°1 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_1_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°1 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_2_producteur`

> *Description : Le nom de la pièce détachée n°2 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_2_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°2 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_2_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°2 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_3_producteur`

> *Description : Le nom de la pièce détachée n°3 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_3_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°3 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_3_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°3 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_4_producteur`

> *Description : Le nom de la pièce détachée n°4 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_4_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°4 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_4_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°4 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_5_producteur`

> *Description : Le nom de la pièce détachée n°5 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_5_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°5 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_5_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°5 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_6_producteur`

> *Description : Le nom de la pièce détachée n°6 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_6_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°6 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_6_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°6 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_7_producteur`

> *Description : Le nom de la pièce détachée n°7 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_7_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°7 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_7_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°7 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_8_producteur`

> *Description : Le nom de la pièce détachée n°8 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_8_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°8 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_8_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°8 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_9_producteur`

> *Description : Le nom de la pièce détachée n°9 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_9_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°9 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_9_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°9 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_10_producteur`

> *Description : Le nom de la pièce détachée n°10 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_10_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°10 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_10_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°10 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_11_producteur`

> *Description : Le nom de la pièce détachée n°11 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_11_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°11 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_11_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°11 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_12_producteur`

> *Description : Le nom de la pièce détachée n°12 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_12_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°12 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_12_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°12 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_13_producteur`

> *Description : Le nom de la pièce détachée n°13 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_13_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°13 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_13_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°13 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_14_producteur`

> *Description : Le nom de la pièce détachée n°14 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_14_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°14 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_14_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°14 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_15_producteur`

> *Description : Le nom de la pièce détachée n°15 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_15_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°15 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_15_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°15 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_1_distributeur`

> *Description : Le nom de la pièce détachée n°1 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_1_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°1 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_1_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°1 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_2_distributeur`

> *Description : Le nom de la pièce détachée n°2 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_2_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°2 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_2_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°2 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_3_distributeur`

> *Description : Le nom de la pièce détachée n°3 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_3_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°3 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_3_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°3 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_4_distributeur`

> *Description : Le nom de la pièce détachée n°4 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_4_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°4 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_4_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°4 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_5_distributeur`

> *Description : Le nom de la pièce détachée n°5 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_5_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°5 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_5_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°5 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_6_distributeur`

> *Description : Le nom de la pièce détachée n°6 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_6_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°6 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_6_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°6 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_7_distributeur`

> *Description : Le nom de la pièce détachée n°7 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_7_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°7 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_7_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°7 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_8_distributeur`

> *Description : Le nom de la pièce détachée n°8 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_8_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°8 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_8_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°8 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_9_distributeur`

> *Description : Le nom de la pièce détachée n°9 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_9_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°9 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_9_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°9 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_10_distributeur`

> *Description : Le nom de la pièce détachée n°10 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_10_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°10 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_10_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°10 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_11_distributeur`

> *Description : Le nom de la pièce détachée n°11 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_11_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°11 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_11_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°11 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_12_distributeur`

> *Description : Le nom de la pièce détachée n°12 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_12_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°12 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_12_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°12 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_13_distributeur`

> *Description : Le nom de la pièce détachée n°13 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_13_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°13 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_13_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°13 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_14_distributeur`

> *Description : Le nom de la pièce détachée n°14 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_14_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°14 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_14_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°14 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_15_distributeur`

> *Description : Le nom de la pièce détachée n°15 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_15_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°15 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_15_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°15 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_1_consommateur`

> *Description : Le nom de la pièce détachée n°1 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_1_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°1 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_1_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°1 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_2_consommateur`

> *Description : Le nom de la pièce détachée n°2 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_2_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°2 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_2_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°2 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_3_consommateur`

> *Description : Le nom de la pièce détachée n°3 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_3_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°3 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_3_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°3 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_4_consommateur`

> *Description : Le nom de la pièce détachée n°4 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_4_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°4 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_4_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°4 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_5_consommateur`

> *Description : Le nom de la pièce détachée n°5 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_5_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°5 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_5_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°5 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_6_consommateur`

> *Description : Le nom de la pièce détachée n°6 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_6_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°6 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_6_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°6 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_7_consommateur`

> *Description : Le nom de la pièce détachée n°7 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_7_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°7 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_7_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°7 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_8_consommateur`

> *Description : Le nom de la pièce détachée n°8 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_8_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°8 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_8_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°8 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_9_consommateur`

> *Description : Le nom de la pièce détachée n°9 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_9_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°9 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_9_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°9 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_10_consommateur`

> *Description : Le nom de la pièce détachée n°10 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_10_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°10 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_10_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°10 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_11_consommateur`

> *Description : Le nom de la pièce détachée n°11 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_11_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°11 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_11_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°11 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_12_consommateur`

> *Description : Le nom de la pièce détachée n°12 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_12_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°12 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_12_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°12 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_13_consommateur`

> *Description : Le nom de la pièce détachée n°13 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_13_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°13 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_13_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°13 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_14_consommateur`

> *Description : Le nom de la pièce détachée n°14 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_14_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°14 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_14_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°14 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible

#### Propriété `nom_piece_detachee_15_consommateur`

> *Description : Le nom de la pièce détachée n°15 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Tubes
    - Filtres / préfiltres
    - Carte électronique de commande
    - Carte électronique de puissance
    - Afficheur
    - Manette / actionneur de variateur (partie mécanique)
    - Poignée
    - Réceptacle à poussière ou trappe d'accès au sac
    - Roues avant de guidage
    - Bouton enrouleur
    - Enrouleur avec câble prise incluse
    - Moteur d'aspiration
    - Tête d'aspiration
    - Interrupteur marche/arrêt
    - Flexible
    - Roulettes / roues
    - Batterie
    - Rouleau brosse
    - Chargeur
    - Moteur de déplacement (avec ou sans roues motrices)
    - Capteur bumper
    - Station d'alimentation
    - Station d'accueil
    - Roues motrice (avec ou sans moteur de déplacement)
    - Moteur brosse latérale
    - Roue suiveuse
    - Moteur et balais (ou charbons de moteur)
    - Transmission entre moteur et tambour (courroie)
    - Amortisseurs et ressorts
    - Tambour de lavage (dont croisillon et roulements)
    - Conduites et matériel connexe (incluant l'ensemble des flexibles, vannes, filtres et systèmes aquastop)
    - Affichage électroniques
    - Manocontacts
    - Thermostats et capteurs
    - Portes, charnières et joints de porte (portillon et aube de tambour)
    - Logiciels et micrologiciels, y compris de réinitialisation
    - Manchette ou soufflet
    - Assemblage verrouillage porte
    - Pompes
    - Générateurs de chaleur, éléments chauffants
    - Système de detection du niveau d'eau
    - Filtre principal
    - Charnières de porte
    - Affichage et commande électronique
    - Panier inférieur
    - Sonde
    - Tuyau d'évacuation
    - Bras d'aspertion inférieur
    - Electrovanne
    - Joint de porte
    - Pompe de vidange
    - Contact de fermeture de porte
    - Générateurs de chaleur, élément chauffant
    - Pompe de cyclage
    - Carte mère
    - Mémoire (RAM)
    - Ventilateurs / Radiateurs
    - Clavier
    - Ports et connecteurs pour connecter les équipement externes (USB, HDMI, VGA)
    - Composant mémoire de masse (HDD – SSD)
    - Dispositif d'affichage
    - Connecteur d'alimentation
    - Connecteur de charge
    - Connecteur
    - Boutons
    - Microphone
    - Haut-parleur
    - Caméra frontale
    - Caméra dorsale
    - Guidon
    - Panier
    - Hauteur de coupe
    - Capot
    - Moteur
    - Lames
    - Porte lames
    - Roues
    - Cartes électroniques
    - Moteur de coupe
    - Moteur d'avance
    - Station de charge
    - Arrêt d'urgence
    - Interface utilisateurs
    - Chargeur station
    - Charbons
    - Piston distributeur
    - Filtre / tamis
    - Kit réparation clapet anti-retours
    - Kit réparation d'étanchéité piston (pochette de joint)
    - Cadre de poignée
    - Lance
    - Buse
    - Pistolet
    - Flexible haute pression
    - Commutateur marche/arrêt
    - Condensateur
    - Cache arrière
    - Module Wi-Fi
    - Module Bluetooth
    - Récepteur Infrarouge (IR)
    - Connecteurs pour connecter les équipements externes (câble antenne, USB, DVD et Blue-Ray)
    - Télécommande
    - Sources d'alimentation externes
    - Sources d'alimentation internes
    - Carte principale (main board)
    - Dalle
    - Manchette de hublot
    - Kit réparation régulation (du système de pression de la pompe)
    - Cartes de circuit imprimé
    - Connecteurs

#### Propriété `delai_jours_piece_detachee_15_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°15 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <3
    - <5
    - <6
    - <10
    - \>11
    - Non disponible

#### Propriété `nb_annees_disponibilite_piece_detachee_15_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°15 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - <5
    - <7
    - <9
    - <10
    - 5
    - 6
    - 7
    - 8
    - 9
    - 10
    - 11
    - 12
    - 13
    - \>7
    - \>9
    - \>11
    - \>13
    - \>14
    - Non disponible
