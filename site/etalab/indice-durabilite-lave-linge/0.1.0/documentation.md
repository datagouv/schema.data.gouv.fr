<MenuSchema />

<MenuSchema />

## indice-durabilite-lave-linge

Lave-linge

Schéma de données pour l'indice de durabilité - lave-linge

- Schéma créé le : 30/11/2023
- Site web : https://github.com/etalab/schema-indice-durabilite
- Version : v0.1.0
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
| [note_id](#propriete-note-id) | nombre réel  | Oui |
| [note_reparabilite](#propriete-note-reparabilite) | nombre réel  | Oui |
| [note_fiabilite](#propriete-note-fiabilite) | nombre réel  | Oui |
| [note_A_c1](#propriete-note-a-c1) | nombre réel  | Oui |
| [note_A_c2](#propriete-note-a-c2) | nombre réel  | Oui |
| [note_A_c3](#propriete-note-a-c3) | nombre réel  | Oui |
| [note_A_c4](#propriete-note-a-c4) | nombre réel  | Oui |
| [note_A_c1.1](#propriete-note-a-c1-1) | nombre réel  | Oui |
| [note_A_c1.2](#propriete-note-a-c1-2) | nombre réel  | Oui |
| [note_A_c2.1](#propriete-note-a-c2-1) | nombre réel  | Oui |
| [note_A_c2.2](#propriete-note-a-c2-2) | nombre réel  | Oui |
| [note_A_c2.3](#propriete-note-a-c2-3) | nombre réel  | Oui |
| [note_A_c3.1](#propriete-note-a-c3-1) | nombre réel  | Oui |
| [note_A_c3.2](#propriete-note-a-c3-2) | nombre réel  | Oui |
| [note_A_c3.3](#propriete-note-a-c3-3) | nombre réel  | Oui |
| [note_A_c3.4](#propriete-note-a-c3-4) | nombre réel  | Oui |
| [note_B_c1](#propriete-note-b-c1) | nombre réel  | Oui |
| [note_B_c2](#propriete-note-b-c2) | nombre réel  | Oui |
| [note_B_c3](#propriete-note-b-c3) | nombre réel  | Oui |
| [note_B_c1.1](#propriete-note-b-c1-1) | nombre réel  | Oui |
| [note_B_c1.2](#propriete-note-b-c1-2) | nombre réel  | Oui |
| [note_B_c2.1](#propriete-note-b-c2-1) | nombre réel  | Oui |
| [note_B_c2.2](#propriete-note-b-c2-2) | nombre réel  | Oui |
| [note_B_c3.1](#propriete-note-b-c3-1) | nombre réel  | Oui |
| [note_B_c3.2](#propriete-note-b-c3-2) | nombre réel  | Oui |
| [accessibilite_compteur_usage](#propriete-accessibilite-compteur-usage) | nombre réel  | Oui |
| [lien_documentation_professionnel](#propriete-lien-documentation-professionnel) | chaîne de caractères  | Non |
| [lien_documentation_particuliers](#propriete-lien-documentation-particuliers) | chaîne de caractères  | Non |
| [nom_piece_1_liste_2](#propriete-nom-piece-1-liste-2) | chaîne de caractères  | Non |
| [etape_demontage_piece_1_liste_2](#propriete-etape-demontage-piece-1-liste-2) | chaîne de caractères  | Non |
| [nom_piece_2_liste_2](#propriete-nom-piece-2-liste-2) | chaîne de caractères  | Non |
| [etape_demontage_piece_2_liste_2](#propriete-etape-demontage-piece-2-liste-2) | chaîne de caractères  | Non |
| [nom_piece_3_liste_2](#propriete-nom-piece-3-liste-2) | chaîne de caractères  | Non |
| [etape_demontage_piece_3_liste_2](#propriete-etape-demontage-piece-3-liste-2) | chaîne de caractères  | Non |
| [nom_piece_4_liste_2](#propriete-nom-piece-4-liste-2) | chaîne de caractères  | Non |
| [etape_demontage_piece_4_liste_2](#propriete-etape-demontage-piece-4-liste-2) | chaîne de caractères  | Non |
| [nom_piece_5_liste_2](#propriete-nom-piece-5-liste-2) | chaîne de caractères  | Non |
| [etape_demontage_piece_5_liste_2](#propriete-etape-demontage-piece-5-liste-2) | chaîne de caractères  | Non |
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
    - `GTIN_EAN`
    - `SH4`

#### Propriété `nom_modele`

> *Description : La dénomination officielle du modèle*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `categorie_produit`

> *Description : Type de produit concerné. Ce champ est utile lors de la concaténation de fichiers issus de différentes classes du datapackage durabilité.*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Lave-linge`

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
    - `GLN`
    - `SYDEREP`

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

#### Propriété `note_id`

> *Description : La note finale de l'indice de durabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_reparabilite`

> *Description : La note obtenu aux critères de réparabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_fiabilite`

> *Description : La note obtenu aux critères de fiabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_A_c1`

> *Description : La note du critère 1 documentation du bloc réparabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_A_c2`

> *Description : La note du critère 2 démontabilité du bloc réparabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_A_c3`

> *Description : La note du critère 3 disponibilité des pièces détachées du bloc réparabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_A_c4`

> *Description : La note du critère 4 prix des pièces détachées du bloc réparabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_A_c1.1`

> *Description : La note du sous-critère 1.1 durée de mise à disposition de la documentation du bloc réparabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_A_c1.2`

> *Description : La note du sous-critère 1.2 accompagnement du consommateur au diagnostic et à l'autoréparation du bloc réparabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_A_c2.1`

> *Description : La note du sous-critère 2.1 nombre d'étapes de démontage du bloc réparabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_A_c2.2`

> *Description : La note du sous-critère 2.2 type d'outils du bloc réparabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_A_c2.3`

> *Description : La note du sous-critère 2.3 type de fixations du bloc réparabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_A_c3.1`

> *Description : La note du sous-critère 3.1 durée de mise à disposition pièces liste 2 du bloc réparabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_A_c3.2`

> *Description : La note du sous-critère 3.2 délai de livraison des pièces de la lise 2 du bloc réparabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_A_c3.3`

> *Description : La note du sous-critère 3.3 durée de mise à disposition des pièces liste 1 du bloc réparabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_A_c3.4`

> *Description : La note du sous-critère 3.4 délai de livraison pièces de la liste 1 du bloc réparabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_B_c1`

> *Description : La note du critère 1  Résistance aux contraintes et/ou à l'usure du bloc fiabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_B_c2`

> *Description : La note du critère 2 Maintenance et entretien du bloc fiabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_B_c3`

> *Description : La note du critère 3 Garantie de durabilité et processus qualité du bloc fiabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_B_c1.1`

> *Description : La note du critère 1.1 Résistance a l'usure du bloc fiabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_B_c1.2`

> *Description : La note du critère 1.2 Garanti moteur du bloc fiabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_B_c2.1`

> *Description : La note du critère 2.1 Maintenance du bloc fiabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_B_c2.2`

> *Description : La note du critère 2.2 Entretien du bloc fiabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_B_c3.1`

> *Description : La note du critère 3.1 Durée de la garantie commerciale de durabilité du bloc fiabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `note_B_c3.2`

> *Description : La note du critère 3.2 Mise en place d'un processus d'amélioration continue du bloc fiabilité : note sur 10 comportant une décimale*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 10

#### Propriété `accessibilite_compteur_usage`

> *Description : Nombre de points obtenus pour le critère relatif à l'accessibilité du compteur d'usage bloc fiabilité *
- Valeur obligatoire
- Type : nombre réel
- Valeurs autorisées : 
    - `0`
    - `1`
    - `2`

#### Propriété `lien_documentation_professionnel`

> *Description : Le lien vers la documentation technique disponible (ou modalités d'accès) a destination des professionnels*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(https?)://[^\s/$.?#].[^\s]*$`

#### Propriété `lien_documentation_particuliers`

> *Description : Le lien vers la documentation technique disponible (ou modalités d'accès) a destination des particuliers*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(https?)://[^\s/$.?#].[^\s]*$`

#### Propriété `nom_piece_1_liste_2`

> *Description : Le nom de la pièce détachée 1 de la liste 2*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`

#### Propriété `etape_demontage_piece_1_liste_2`

> *Description : nombre d'étapes de démontage nécessaires pour avoir la pièce unitairement la pièce 1 de la liste 2*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<7`
    - `13`
    - `19`
    - `>19`
    - `Non démontable`

#### Propriété `nom_piece_2_liste_2`

> *Description : Le nom de la pièce détachée 2 de la liste 2*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`

#### Propriété `etape_demontage_piece_2_liste_2`

> *Description : nombre d'étapes de démontage nécessaires pour avoir la pièce unitairement la pièce 2 de la liste 2*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<7`
    - `13`
    - `19`
    - `>19`
    - `Non démontable`

#### Propriété `nom_piece_3_liste_2`

> *Description : Le nom de la pièce détachée 3 de la liste 2*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`

#### Propriété `etape_demontage_piece_3_liste_2`

> *Description : nombre d'étapes de démontage nécessaires pour avoir la pièce unitairement la pièce 3 de la liste 2*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<7`
    - `13`
    - `19`
    - `>19`
    - `Non démontable`

#### Propriété `nom_piece_4_liste_2`

> *Description : Le nom de la pièce détachée 4 de la liste 2*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`

#### Propriété `etape_demontage_piece_4_liste_2`

> *Description : nombre d'étapes de démontage nécessaires pour avoir la pièce unitairement la pièce 4 de la liste 2*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<7`
    - `13`
    - `19`
    - `>19`
    - `Non démontable`

#### Propriété `nom_piece_5_liste_2`

> *Description : Le nom de la pièce détachée 5 de la liste 2*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`

#### Propriété `etape_demontage_piece_5_liste_2`

> *Description : nombre d'étapes de démontage nécessaires pour avoir la pièce unitairement la pièce 5 de la liste 2*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<7`
    - `13`
    - `19`
    - `>19`
    - `Non démontable`

#### Propriété `nom_piece_detachee_1_reparateur`

> *Description : Le nom de la pièce détachée n°1 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_1_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°1 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_1_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°1 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_2_reparateur`

> *Description : Le nom de la pièce détachée n°2 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_2_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°2 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_2_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°2 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_3_reparateur`

> *Description : Le nom de la pièce détachée n°3 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_3_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°3 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_3_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°3 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_4_reparateur`

> *Description : Le nom de la pièce détachée n°4 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_4_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°4 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_4_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°4 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_5_reparateur`

> *Description : Le nom de la pièce détachée n°5 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_5_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°5 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_5_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°5 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_6_reparateur`

> *Description : Le nom de la pièce détachée n°6 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_6_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°6 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_6_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°6 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_7_reparateur`

> *Description : Le nom de la pièce détachée n°7 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_7_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°7 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_7_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°7 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_8_reparateur`

> *Description : Le nom de la pièce détachée n°8 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_8_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°8 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_8_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°8 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_9_reparateur`

> *Description : Le nom de la pièce détachée n°9 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_9_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°9 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_9_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°9 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_10_reparateur`

> *Description : Le nom de la pièce détachée n°10 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_10_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°10 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_10_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°10 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_11_reparateur`

> *Description : Le nom de la pièce détachée n°11 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_11_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°11 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_11_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°11 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_12_reparateur`

> *Description : Le nom de la pièce détachée n°12 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_12_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°12 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_12_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°12 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_13_reparateur`

> *Description : Le nom de la pièce détachée n°13 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_13_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°13 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_13_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°13 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_14_reparateur`

> *Description : Le nom de la pièce détachée n°14 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_14_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°14 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_14_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°14 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_15_reparateur`

> *Description : Le nom de la pièce détachée n°15 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_15_reparateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°15 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_15_reparateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°15 de la liste 2 pour les reparateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_1_producteur`

> *Description : Le nom de la pièce détachée n°1 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_1_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°1 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_1_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°1 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_2_producteur`

> *Description : Le nom de la pièce détachée n°2 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_2_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°2 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_2_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°2 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_3_producteur`

> *Description : Le nom de la pièce détachée n°3 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_3_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°3 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_3_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°3 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_4_producteur`

> *Description : Le nom de la pièce détachée n°4 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_4_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°4 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_4_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°4 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_5_producteur`

> *Description : Le nom de la pièce détachée n°5 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_5_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°5 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_5_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°5 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_6_producteur`

> *Description : Le nom de la pièce détachée n°6 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_6_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°6 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_6_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°6 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_7_producteur`

> *Description : Le nom de la pièce détachée n°7 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_7_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°7 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_7_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°7 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_8_producteur`

> *Description : Le nom de la pièce détachée n°8 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_8_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°8 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_8_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°8 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_9_producteur`

> *Description : Le nom de la pièce détachée n°9 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_9_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°9 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_9_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°9 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_10_producteur`

> *Description : Le nom de la pièce détachée n°10 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_10_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°10 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_10_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°10 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_11_producteur`

> *Description : Le nom de la pièce détachée n°11 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_11_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°11 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_11_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°11 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_12_producteur`

> *Description : Le nom de la pièce détachée n°12 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_12_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°12 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_12_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°12 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_13_producteur`

> *Description : Le nom de la pièce détachée n°13 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_13_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°13 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_13_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°13 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_14_producteur`

> *Description : Le nom de la pièce détachée n°14 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_14_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°14 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_14_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°14 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_15_producteur`

> *Description : Le nom de la pièce détachée n°15 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_15_producteur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°15 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_15_producteur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°15 de la liste 2 pour les producteurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_1_distributeur`

> *Description : Le nom de la pièce détachée n°1 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_1_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°1 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_1_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°1 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_2_distributeur`

> *Description : Le nom de la pièce détachée n°2 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_2_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°2 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_2_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°2 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_3_distributeur`

> *Description : Le nom de la pièce détachée n°3 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_3_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°3 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_3_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°3 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_4_distributeur`

> *Description : Le nom de la pièce détachée n°4 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_4_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°4 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_4_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°4 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_5_distributeur`

> *Description : Le nom de la pièce détachée n°5 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_5_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°5 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_5_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°5 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_6_distributeur`

> *Description : Le nom de la pièce détachée n°6 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_6_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°6 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_6_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°6 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_7_distributeur`

> *Description : Le nom de la pièce détachée n°7 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_7_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°7 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_7_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°7 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_8_distributeur`

> *Description : Le nom de la pièce détachée n°8 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_8_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°8 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_8_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°8 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_9_distributeur`

> *Description : Le nom de la pièce détachée n°9 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_9_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°9 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_9_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°9 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_10_distributeur`

> *Description : Le nom de la pièce détachée n°10 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_10_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°10 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_10_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°10 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_11_distributeur`

> *Description : Le nom de la pièce détachée n°11 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_11_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°11 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_11_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°11 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_12_distributeur`

> *Description : Le nom de la pièce détachée n°12 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_12_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°12 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_12_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°12 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_13_distributeur`

> *Description : Le nom de la pièce détachée n°13 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_13_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°13 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_13_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°13 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_14_distributeur`

> *Description : Le nom de la pièce détachée n°14 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_14_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°14 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_14_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°14 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_15_distributeur`

> *Description : Le nom de la pièce détachée n°15 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_15_distributeur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°15 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_15_distributeur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°15 de la liste 2 pour les distributeurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_1_consommateur`

> *Description : Le nom de la pièce détachée n°1 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_1_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°1 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_1_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°1 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_2_consommateur`

> *Description : Le nom de la pièce détachée n°2 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_2_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°2 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_2_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°2 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_3_consommateur`

> *Description : Le nom de la pièce détachée n°3 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_3_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°3 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_3_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°3 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_4_consommateur`

> *Description : Le nom de la pièce détachée n°4 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_4_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°4 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_4_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°4 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_5_consommateur`

> *Description : Le nom de la pièce détachée n°5 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_5_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°5 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_5_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°5 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_6_consommateur`

> *Description : Le nom de la pièce détachée n°6 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_6_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°6 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_6_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°6 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_7_consommateur`

> *Description : Le nom de la pièce détachée n°7 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_7_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°7 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_7_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°7 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_8_consommateur`

> *Description : Le nom de la pièce détachée n°8 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_8_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°8 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_8_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°8 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_9_consommateur`

> *Description : Le nom de la pièce détachée n°9 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_9_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°9 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_9_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°9 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_10_consommateur`

> *Description : Le nom de la pièce détachée n°10 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_10_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°10 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_10_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°10 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_11_consommateur`

> *Description : Le nom de la pièce détachée n°11 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_11_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°11 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_11_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°11 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_12_consommateur`

> *Description : Le nom de la pièce détachée n°12 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_12_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°12 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_12_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°12 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_13_consommateur`

> *Description : Le nom de la pièce détachée n°13 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_13_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°13 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_13_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°13 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_14_consommateur`

> *Description : Le nom de la pièce détachée n°14 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_14_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°14 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_14_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°14 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`

#### Propriété `nom_piece_detachee_15_consommateur`

> *Description : Le nom de la pièce détachée n°15 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Manchette ou soufflet`
    - `Assemblage verrouillage porte`
    - `Pompes`
    - `Générateurs de chaleurs, éléments chauffants`
    - `Carte électronique de puissance`
    - `Moteur et balais (ou charbons de moteur)`
    - `Transmission entre moteur et tambour (courroie)`
    - `Amortisseurs et ressorts`
    - `Tambour de lavage (dont croisillon et roulements)`
    - `Conduites et matériel connexe (incluant l'ensemble des flexibles, filtres et systèmes aquastop)`
    - `Affichages électroniques`
    - `Manocontacts`
    - `Thermostats et capteurs`
    - `Portes, charnières et joints de porte (portillon et aube de tambour)`
    - `Logiciels et micrologiciels, y compris de reinitialisation`

#### Propriété `delai_jours_piece_detachee_15_consommateur`

> *Description : Le délai de livraison (en jours) de la pièce détachée n°15 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<3`
    - `<5`
    - `<10`
    - `>11`
    - `Non disponible`

#### Propriété `nb_annees_disponibilite_piece_detachee_15_consommateur`

> *Description : L'engagement (en années) de mise à disposition à partir de la date de mise sur le marché de la pièce détachée n°15 de la liste 2 pour les consommateurs*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `<11`
    - `13`
    - `15`
    - `>15`
    - `Non disponible`
