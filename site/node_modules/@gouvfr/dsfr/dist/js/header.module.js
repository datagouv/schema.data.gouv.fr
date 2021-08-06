/*! DSFR v1.1.0 | SPDX-License-Identifier: MIT | License-Filename: LICENCE.md | restricted use (see terms and conditions) */

const namespace = 'dsfr';

const api = window[namespace] || { core: {} };
window[namespace] = api;

const HEADER_SELECTOR = api.core.ns.selector('header');
const HEADER_SEARCH_SELECTOR = api.core.ns.selector('header__search');
const HEADER_MENU_SELECTOR = api.core.ns.selector('header__menu');
const HEADER_TOOLS_LINKS_SELECTOR = api.core.ns.selector('header__tools-links');
const HEADER_MENU_LINKS_SELECTOR = api.core.ns.selector('header__menu-links');
const HEADER_LINKS_GROUP_SELECTOR = `${HEADER_TOOLS_LINKS_SELECTOR} ${api.core.ns.selector('links-group')}`;

class Header {
  constructor (header) {
    this.header = header || document.querySelector(HEADER_SELECTOR);
    this.modals = [];

    this.init();
  }

  getModal (selector) {
    const element = this.header.querySelector(selector);
    if (!element) return;
    const modals = api.core.Instance.getInstances(element, api.Modal);
    if (!modals || !modals.length) return;
    this.modals.push(new HeaderModal(modals[0]));
  }

  init () {
    this.getModal(HEADER_SEARCH_SELECTOR);
    this.getModal(HEADER_MENU_SELECTOR);

    this.linksGroup = this.header.querySelector(HEADER_LINKS_GROUP_SELECTOR);

    this.toolsLinks = this.header.querySelector(HEADER_TOOLS_LINKS_SELECTOR);
    this.menuLinks = this.header.querySelector(HEADER_MENU_LINKS_SELECTOR);

    this.changing = this.change.bind(this);

    window.addEventListener('resize', this.changing);
    this.change();
  }

  change () {
    this.isLarge = window.matchMedia('(min-width: 62em)').matches;

    if (this.isLarge) this.modals.forEach((modal) => modal.disable());
    else this.modals.forEach((modal) => modal.enable());

    if (this.linksGroup !== null) {
      if (this.isLarge) this.toolsLinks.appendChild(this.linksGroup);
      else this.menuLinks.appendChild(this.linksGroup);
    }
  }
}

class HeaderModal {
  constructor (modal) {
    this.modal = modal;
  }

  enable () {
    this.modal.element.setAttribute('role', 'dialog');
    this.modal.element.setAttribute('aria-labelledby', this.modal.primary.element.id);
  }

  disable () {
    this.modal.conceal();
    this.modal.element.removeAttribute('role');
    this.modal.element.removeAttribute('aria-labelledby');
  }
}

api.Header = Header;

const build = () => {
  const elements = Array.prototype.slice.call(document.querySelectorAll(HEADER_SELECTOR));

  const headers = [];

  for (const element of elements) headers.push(new Header(element));
};

/* eslint-disable no-new */

new api.core.Initializer(HEADER_SELECTOR, [build]);
//# sourceMappingURL=header.module.js.map
