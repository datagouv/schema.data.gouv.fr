/*! DSFR v1.1.0 | SPDX-License-Identifier: MIT | License-Filename: LICENCE.md | restricted use (see terms and conditions) */

(function () {
  'use strict';

  var namespace = 'dsfr';

  var api = window[namespace] || { core: {} };
  window[namespace] = api;

  var HEADER_SELECTOR = api.core.ns.selector('header');
  var HEADER_SEARCH_SELECTOR = api.core.ns.selector('header__search');
  var HEADER_MENU_SELECTOR = api.core.ns.selector('header__menu');
  var HEADER_TOOLS_LINKS_SELECTOR = api.core.ns.selector('header__tools-links');
  var HEADER_MENU_LINKS_SELECTOR = api.core.ns.selector('header__menu-links');
  var HEADER_LINKS_GROUP_SELECTOR = HEADER_TOOLS_LINKS_SELECTOR + " " + (api.core.ns.selector('links-group'));

  var Header = function Header (header) {
    this.header = header || document.querySelector(HEADER_SELECTOR);
    this.modals = [];

    this.init();
  };

  Header.prototype.getModal = function getModal (selector) {
    var element = this.header.querySelector(selector);
    if (!element) { return; }
    var modals = api.core.Instance.getInstances(element, api.Modal);
    if (!modals || !modals.length) { return; }
    this.modals.push(new HeaderModal(modals[0]));
  };

  Header.prototype.init = function init () {
    this.getModal(HEADER_SEARCH_SELECTOR);
    this.getModal(HEADER_MENU_SELECTOR);

    this.linksGroup = this.header.querySelector(HEADER_LINKS_GROUP_SELECTOR);

    this.toolsLinks = this.header.querySelector(HEADER_TOOLS_LINKS_SELECTOR);
    this.menuLinks = this.header.querySelector(HEADER_MENU_LINKS_SELECTOR);

    this.changing = this.change.bind(this);

    window.addEventListener('resize', this.changing);
    this.change();
  };

  Header.prototype.change = function change () {
    this.isLarge = window.matchMedia('(min-width: 62em)').matches;

    if (this.isLarge) { this.modals.forEach(function (modal) { return modal.disable(); }); }
    else { this.modals.forEach(function (modal) { return modal.enable(); }); }

    if (this.linksGroup !== null) {
      if (this.isLarge) { this.toolsLinks.appendChild(this.linksGroup); }
      else { this.menuLinks.appendChild(this.linksGroup); }
    }
  };

  var HeaderModal = function HeaderModal (modal) {
    this.modal = modal;
  };

  HeaderModal.prototype.enable = function enable () {
    this.modal.element.setAttribute('role', 'dialog');
    this.modal.element.setAttribute('aria-labelledby', this.modal.primary.element.id);
  };

  HeaderModal.prototype.disable = function disable () {
    this.modal.conceal();
    this.modal.element.removeAttribute('role');
    this.modal.element.removeAttribute('aria-labelledby');
  };

  api.Header = Header;

  var build = function () {
    var elements = Array.prototype.slice.call(document.querySelectorAll(HEADER_SELECTOR));

    var headers = [];

    for (var i = 0, list = elements; i < list.length; i += 1) {
      var element = list[i];

      headers.push(new Header(element));
    }
  };

  /* eslint-disable no-new */

  new api.core.Initializer(HEADER_SELECTOR, [build]);

}());
//# sourceMappingURL=header.nomodule.js.map
