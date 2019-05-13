;(function() {

  // Add anchors to titles
  [].forEach.call(document.querySelectorAll('.markdown'), function(container) {
    [].forEach.call(container.querySelectorAll('h2,h3,h4,h5,h6'), function(title) {
      const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#icon-link');

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.appendChild(use);

      const anchor = document.createElement('a');
      anchor.href = '#' + title.id;
      anchor.classList.add('anchor');
      anchor.appendChild(svg);

      title.appendChild(anchor);
    });
  });

  // Add .table class to all tables
  tables = document.getElementsByTagName('table');
  for (index = 0; index < tables .length; ++index) {
      tables[index].classList.add("table");
  }
})();
