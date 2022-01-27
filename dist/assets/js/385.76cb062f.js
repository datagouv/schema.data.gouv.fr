(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{876:function(e,_,v){"use strict";v.r(_);var o=v(44),l=Object(o.a)({},(function(){var e=this,_=e.$createElement,v=e._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("MenuSchema"),e._v(" "),v("h1",{attrs:{id:"schema-du-format-scdl-relatif-aux-deliberations-adoptees-par-une-assemblee-locale"}},[e._v("Schéma du format SCDL relatif aux délibérations adoptées par une assemblée locale")]),e._v(" "),v("p",[e._v("En cours de développement.")]),e._v(" "),v("h2",{attrs:{id:"custom-checks"}},[e._v("Custom checks")]),e._v(" "),v("p",[e._v("Par colonne :")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("BUDGET_ANNEE")]),e._v(" : valider les intervalles de date entre deux années\n"),v("ul",[v("li",[e._v("année 1 < année 2")])])]),e._v(" "),v("li",[v("code",[e._v("DELIB_MATIERE_NOM")]),e._v(" : valider les noms de niveau 1 (avant le "),v("code",[e._v("/")]),e._v("), à savoir leur appartenance à une liste fermée")]),e._v(" "),v("li",[v("code",[e._v("PREF_ID")]),e._v(" : valider les chiffres en fonction du préfixe")])]),e._v(" "),v("p",[e._v("Inter-colonnes :")]),e._v(" "),v("ul",[v("li",[e._v("soit toutes les colonnes "),v("code",[e._v("BUDGET_*")]),e._v(" sont remplies, soit aucune")]),e._v(" "),v("li",[e._v("soit toutes les colonnes "),v("code",[e._v("VOTE_*")]),e._v(" sont remplies, soit aucune")]),e._v(" "),v("li",[v("code",[e._v("PREF_DATE")]),e._v(" >= "),v("code",[e._v("DELIB_DATE")])]),e._v(" "),v("li",[v("code",[e._v("VOTE_EFFECTIF")]),e._v(" >= "),v("code",[e._v("VOTE_REEL")])]),e._v(" "),v("li",[v("code",[e._v("VOTE_REEL")]),e._v(" >= "),v("code",[e._v("VOTE_POUR")])]),e._v(" "),v("li",[v("code",[e._v("VOTE_REEL")]),e._v(" >= "),v("code",[e._v("VOTE_CONTRE")])]),e._v(" "),v("li",[v("code",[e._v("VOTE_REEL")]),e._v(" >= "),v("code",[e._v("VOTE_ABSTENTION")])]),e._v(" "),v("li",[v("code",[e._v("VOTE_POUR")]),e._v(" + "),v("code",[e._v("VOTE_CONTRE")]),e._v(" + "),v("code",[e._v("VOTE_ABSTENTION")]),e._v(" = "),v("code",[e._v("VOTE_REEL")])])])],1)}),[],!1,null,null,null);_.default=l.exports}}]);