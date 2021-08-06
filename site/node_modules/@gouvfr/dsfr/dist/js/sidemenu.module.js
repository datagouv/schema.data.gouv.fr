/*! DSFR v1.1.0 | SPDX-License-Identifier: MIT | License-Filename: LICENCE.md | restricted use (see terms and conditions) */

const namespace = 'dsfr';

const api = window[namespace] || { core: {} };
window[namespace] = api;

const SIDEMENU_CLASS = api.core.ns('sidemenu');
const SIDEMENU_LIST_CLASS = api.core.ns('sidemenu__list');

/* eslint-disable no-new */

api.Collapse.register(SIDEMENU_CLASS, SIDEMENU_LIST_CLASS);
//# sourceMappingURL=sidemenu.module.js.map
