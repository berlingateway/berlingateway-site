(function () {
  'use strict';

  function initAnchorNav(navEl) {
    var links = Array.prototype.slice.call(
      navEl.querySelectorAll('.bg-anchor-nav__link')
    );
    if (!links.length) return;

    var targets = links
      .map(function (link) {
        var id = link.getAttribute('href');
        if (!id || id.charAt(0) !== '#') return null;
        var el = document.getElementById(id.slice(1));
        return el ? { link: link, el: el } : null;
      })
      .filter(Boolean);

    if (!targets.length) return;

    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id = link.getAttribute('href');
        if (!id || id.charAt(0) !== '#') return;
        var el = document.getElementById(id.slice(1));
        if (!el) return;
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (history.pushState) {
          history.pushState(null, '', id);
        }
      });
    });

    var ticking = false;

    function setActive() {
      var scrollPos = window.scrollY || window.pageYOffset;
      var current = targets[0];

      targets.forEach(function (t) {
        if (t.el.offsetTop - 80 <= scrollPos) {
          current = t;
        }
      });

      targets.forEach(function (t) {
        t.link.classList.toggle(
          'bg-anchor-nav__link--active',
          t === current
        );
        if (t === current) {
          t.link.setAttribute('aria-current', 'true');
        } else {
          t.link.removeAttribute('aria-current');
        }
      });

      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(setActive);
        ticking = true;
      }
    });

    setActive();
  }

  document.addEventListener('DOMContentLoaded', function () {
    var navs = document.querySelectorAll('.bg-anchor-nav');
    navs.forEach(initAnchorNav);
  });
})();
