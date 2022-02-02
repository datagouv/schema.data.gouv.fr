(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{673:function(e,r,t){"use strict";t.r(r);var i=t(44),_=Object(i.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("MenuSchema"),e._v(" "),t("h2",{attrs:{id:"hautes-remunerations"}},[e._v("hautes-remunerations")]),e._v(" "),t("p",[e._v("Hautes rémunérations dans la fonction publique")]),e._v(" "),t("p",[e._v("Spécification du fichier de déclaration des dix rémunérations les plus élevées des agents publiques")]),e._v(" "),t("ul",[t("li",[e._v("Schéma créé le : 23.09.2020")]),e._v(" "),t("li",[e._v("Site web : http://github.com/restuccia/schema-hautes-remunerations")]),e._v(" "),t("li",[e._v("Version : 0.1.0")])]),e._v(" "),t("h3",{attrs:{id:"modele-de-donnees"}},[e._v("Modèle de données")]),e._v(" "),t("h5",{attrs:{id:"liste-des-proprietes"}},[e._v("Liste des propriétés")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Propriété")]),e._v(" "),t("th",[e._v("Type")]),e._v(" "),t("th",[e._v("Obligatoire")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("a",{attrs:{href:"#propriete-siren"}},[e._v("siren")])]),e._v(" "),t("td",[e._v("chaîne de caractères")]),e._v(" "),t("td",[e._v("Oui")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"#propriete-denomination-employeur"}},[e._v("denomination_employeur")])]),e._v(" "),t("td",[e._v("chaîne de caractères")]),e._v(" "),t("td",[e._v("Oui")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"#propriete-type-administration"}},[e._v("type_administration")])]),e._v(" "),t("td",[e._v("chaîne de caractères")]),e._v(" "),t("td",[e._v("Oui")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"#propriete-annee"}},[e._v("annee")])]),e._v(" "),t("td",[e._v("année")]),e._v(" "),t("td",[e._v("Oui")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"#propriete-somme-10-plus-hautes-remunerations-brutes"}},[e._v("somme_10_plus_hautes_remunerations_brutes")])]),e._v(" "),t("td",[e._v("nombre réel")]),e._v(" "),t("td",[e._v("Oui")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"#propriete-nb-femmes-beneficiaires"}},[e._v("nb_femmes_beneficiaires")])]),e._v(" "),t("td",[e._v("nombre entier")]),e._v(" "),t("td",[e._v("Oui")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"#propriete-nb-hommes-beneficiaires"}},[e._v("nb_hommes_beneficiaires")])]),e._v(" "),t("td",[e._v("nombre entier")]),e._v(" "),t("td",[e._v("Oui")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"#propriete-duree-cumulee-mois"}},[e._v("duree_cumulee_mois")])]),e._v(" "),t("td",[e._v("nombre réel")]),e._v(" "),t("td",[e._v("Oui")])]),e._v(" "),t("tr",[t("td",[t("a",{attrs:{href:"#propriete-commentaires"}},[e._v("commentaires")])]),e._v(" "),t("td",[e._v("chaîne de caractères")]),e._v(" "),t("td",[e._v("Non")])])])]),e._v(" "),t("h4",{attrs:{id:"propriete-siren"}},[e._v("Propriété "),t("code",[e._v("siren")])]),e._v(" "),t("blockquote",[t("p",[t("em",[e._v("Description : Le numéro SIREN de l'organisme"),t("br"),e._v("Ex : 110046018")])])]),e._v(" "),t("ul",[t("li",[e._v("Valeur obligatoire")]),e._v(" "),t("li",[e._v("Type : chaîne de caractères")]),e._v(" "),t("li",[e._v("Motif : "),t("code",[e._v("^\\d{9}$")])])]),e._v(" "),t("h4",{attrs:{id:"propriete-denomination-employeur"}},[e._v("Propriété "),t("code",[e._v("denomination_employeur")])]),e._v(" "),t("blockquote",[t("p",[t("em",[e._v("Description : Dénomination de l'employeur telle que saisie dans la base Sirene des entreprises et de leurs établissements. Vous pouvez accéder à cette dénomination exacte via le site annuaire-entreprises.data.gouv.fr"),t("br"),e._v("Ex : Ministère de la Culture")])])]),e._v(" "),t("ul",[t("li",[e._v("Valeur obligatoire")]),e._v(" "),t("li",[e._v("Type : chaîne de caractères")])]),e._v(" "),t("h4",{attrs:{id:"propriete-type-administration"}},[e._v("Propriété "),t("code",[e._v("type_administration")])]),e._v(" "),t("blockquote",[t("p",[t("em",[e._v("Description : Le type d'administration "),t("br"),e._v("Ex : Région")])])]),e._v(" "),t("ul",[t("li",[e._v("Valeur obligatoire")]),e._v(" "),t("li",[e._v("Type : chaîne de caractères")]),e._v(" "),t("li",[e._v("Valeurs autorisées :\n"),t("ul",[t("li",[e._v("Département ministériel")]),e._v(" "),t("li",[e._v("Région")]),e._v(" "),t("li",[e._v("Département")]),e._v(" "),t("li",[e._v("Autre collectivité territoriale")]),e._v(" "),t("li",[e._v("EPCI à fiscalité propre")]),e._v(" "),t("li",[e._v("Etablissement hospitalier")]),e._v(" "),t("li",[e._v("Autre")])])])]),e._v(" "),t("h4",{attrs:{id:"propriete-annee"}},[e._v("Propriété "),t("code",[e._v("annee")])]),e._v(" "),t("blockquote",[t("p",[t("em",[e._v("Description : Année"),t("br"),e._v("Ex : 2019")])])]),e._v(" "),t("ul",[t("li",[e._v("Valeur obligatoire")]),e._v(" "),t("li",[e._v("Type : année")])]),e._v(" "),t("h4",{attrs:{id:"propriete-somme-10-plus-hautes-remunerations-brutes"}},[e._v("Propriété "),t("code",[e._v("somme_10_plus_hautes_remunerations_brutes")])]),e._v(" "),t("blockquote",[t("p",[t("em",[e._v("Description : Somme des 10 plus hautes rémunérations brutes en euros (intégrant les primes et avantages en nature)."),t("br"),e._v("Ex : 1609769")])])]),e._v(" "),t("ul",[t("li",[e._v("Valeur obligatoire")]),e._v(" "),t("li",[e._v("Type : nombre réel")]),e._v(" "),t("li",[e._v("Valeur supérieur à 0")])]),e._v(" "),t("h4",{attrs:{id:"propriete-nb-femmes-beneficiaires"}},[e._v("Propriété "),t("code",[e._v("nb_femmes_beneficiaires")])]),e._v(" "),t("blockquote",[t("p",[t("em",[e._v("Description : Nombre de femmes bénéficiaires"),t("br"),e._v("Ex : 5")])])]),e._v(" "),t("ul",[t("li",[e._v("Valeur obligatoire")]),e._v(" "),t("li",[e._v("Type : nombre entier")]),e._v(" "),t("li",[e._v("Valeur entre 0 et 10")])]),e._v(" "),t("h4",{attrs:{id:"propriete-nb-hommes-beneficiaires"}},[e._v("Propriété "),t("code",[e._v("nb_hommes_beneficiaires")])]),e._v(" "),t("blockquote",[t("p",[t("em",[e._v("Description : Nombre d'hommes bénéficiaires"),t("br"),e._v("Ex : 5")])])]),e._v(" "),t("ul",[t("li",[e._v("Valeur obligatoire")]),e._v(" "),t("li",[e._v("Type : nombre entier")]),e._v(" "),t("li",[e._v("Valeur entre 0 et 10")])]),e._v(" "),t("h4",{attrs:{id:"propriete-duree-cumulee-mois"}},[e._v("Propriété "),t("code",[e._v("duree_cumulee_mois")])]),e._v(" "),t("blockquote",[t("p",[t("em",[e._v("Description : Durée cumulée en nombre de mois. La durée cumulée en nombre de mois correspond à la somme des durées d'activité des 10 personnes percevant les plus hautes rémunérations. Par exemple, si chacun a travaillé l'année entière, la durée cumulée vaudra 10x12=120 mois. Si parmi ces 10 personnes, une a été rémunérée 8.5 mois, la somme vaudra 9x12+8.5=116.5 mois. Cette colonne fournira un élément d'explication aux variations annuelles, les rémunérations n'étant pas redressé de la durée d'activité."),t("br"),e._v("Ex : 120")])])]),e._v(" "),t("ul",[t("li",[e._v("Valeur obligatoire")]),e._v(" "),t("li",[e._v("Type : nombre réel")]),e._v(" "),t("li",[e._v("Valeur entre 0 et 120")])]),e._v(" "),t("h4",{attrs:{id:"propriete-commentaires"}},[e._v("Propriété "),t("code",[e._v("commentaires")])]),e._v(" "),t("blockquote",[t("p",[t("em",[e._v("Description : Commentaires"),t("br"),e._v("Ex : Commentaire")])])]),e._v(" "),t("ul",[t("li",[e._v("Valeur optionnelle")]),e._v(" "),t("li",[e._v("Type : chaîne de caractères")])])],1)}),[],!1,null,null,null);r.default=_.exports}}]);