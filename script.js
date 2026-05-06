// Highlight the nav link that matches the current page
(function () {
  var links = document.querySelectorAll('nav ul li a');
  var current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();
