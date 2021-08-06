/*! DSFR v1.1.0 | SPDX-License-Identifier: MIT | License-Filename: LICENCE.md | restricted use (see terms and conditions) */

const namespace = 'dsfr';

const api = window[namespace] || { core: {} };
window[namespace] = api;

const TABLE_SELECTOR = api.core.ns.selector('table');
const TABLE_NOSCROLL_SELECTOR = api.core.ns('table--no-scroll');
const LEFT = 'left';
const RIGHT = 'right';
const SHADOW_CLASS = api.core.ns('table--shadow');
const SHADOW_LEFT_CLASS = api.core.ns('table--shadow-left');
const SHADOW_RIGHT_CLASS = api.core.ns('table--shadow-right');
const SCROLL_OFFSET = 1; // valeur en px du scroll avant laquelle le shadow s'active ou se desactive

class Table {
  constructor (table) {
    this.init(table);
  }

  init (table) {
    this.table = table;
    this.table.setAttribute(api.core.ns.attr('js-table'), 'true'); // TODO: code provisoire en attendant la refacto du JS dynamique
    this.tableElem = this.table.querySelector('table');
    this.tableContent = this.tableElem.querySelector('tbody');
    this.isScrollable = this.tableContent.offsetWidth > this.tableElem.offsetWidth;
    this.caption = this.tableElem.querySelector('caption');
    this.captionHeight = 0;
    const scrolling = this.change.bind(this);
    this.tableElem.addEventListener('scroll', scrolling);
  }

  change () {
    const newScroll = this.tableContent.offsetWidth > this.tableElem.offsetWidth;
    let firstTimeScrollable = this.tableElem.offsetWidth > this.table.offsetWidth;
    if (newScroll || firstTimeScrollable) {
      if (!this.table.classList.contains(TABLE_NOSCROLL_SELECTOR)) this.scroll();
    } else {
      if (newScroll !== this.isScrollable) this.delete();
    }
    this.isScrollable = newScroll;
    firstTimeScrollable = false;
    const captionSize = this.caption.getBoundingClientRect();
    this.table.style.setProperty('--table-offset', captionSize.height + 'px');
  }

  delete () {
    api.core.removeClass(this.table, SHADOW_RIGHT_CLASS);
    api.core.removeClass(this.table, SHADOW_LEFT_CLASS);
    api.core.removeClass(this.table, SHADOW_CLASS);
    if (this.caption) {
      this.tableElem.style.marginTop = '';
      this.caption.style.top = '';
      this.tableElem.style.marginBottom = '';
      this.caption.style.bottom = '';
    }
  }

  scroll () {
    api.core.addClass(this.table, SHADOW_CLASS);
    this.setShadowPosition();
  }

  /* affiche les blocs shadow en fonction de la position du scroll, en ajoutant la classe visible */
  setShadowPosition () {
    const tableScrollLeft = this.getScrollPosition(LEFT);
    const tableScrollRight = this.getScrollPosition(RIGHT);

    // on inverse en cas de lecture droite - gauche
    if (document.documentElement.getAttribute('dir') === 'rtl') {
      this.setShadowVisibility(RIGHT, tableScrollLeft);
      this.setShadowVisibility(LEFT, tableScrollRight);
    } else {
      this.setShadowVisibility(LEFT, tableScrollLeft);
      this.setShadowVisibility(RIGHT, tableScrollRight);
    }
  }

  /* Donne le nombre de pixels scrollés honrizontalement dans un element scrollable */
  getScrollPosition (side) {
    let inverter = 1;
    // on inverse en cas de lecture droite - gauche pour que la valeur de scroll soit toujours positive
    if (document.documentElement.getAttribute('dir') === 'rtl') {
      inverter = -1;
    }
    switch (side) {
      case LEFT:
        return this.tableElem.scrollLeft * inverter;
      case RIGHT:
        return this.tableContent.offsetWidth - this.tableElem.offsetWidth - this.tableElem.scrollLeft * inverter;
      default:
        return false;
    }
  }

  /* ajoute la classe fr-table--shadow-right ou fr-table--shadow-right sur fr-table
   en fonction d'une valeur de scroll et du sens (right, left) */
  setShadowVisibility (side, scrollPosition) {
    // si on a pas scroll, ou qu'on scroll jusqu'au bout
    if (scrollPosition <= SCROLL_OFFSET) {
      if (side === LEFT) api.core.removeClass(this.table, SHADOW_LEFT_CLASS);
      else if (side === RIGHT) api.core.removeClass(this.table, SHADOW_RIGHT_CLASS);
    } else {
      if (side === LEFT) api.core.addClass(this.table, SHADOW_LEFT_CLASS);
      else if (side === RIGHT) api.core.addClass(this.table, SHADOW_RIGHT_CLASS);
    }
  }
}

api.Table = Table;

const tables = [];

const change = () => {
  for (let i = 0; i < tables.length; i++) tables[i].change();
};

const build = () => {
  const tableNodes = document.querySelectorAll(TABLE_SELECTOR);
  for (let i = 0; i < tableNodes.length; i++) tables.push(new Table(tableNodes[i]));

  window.addEventListener('resize', change);
  window.addEventListener('orientationchange', change);
  change();
};

/* eslint-disable no-new */

new api.core.Initializer(TABLE_SELECTOR, [build]);
//# sourceMappingURL=table.module.js.map
