(function() {
  // Lazy load images with data-src
  function initLazy() {
    var lazyImages = [].slice.call(document.querySelectorAll('img[data-src]'));
    if (!('IntersectionObserver' in window)) {
      lazyImages.forEach(function(img) { img.src = img.getAttribute('data-src'); });
      return;
    }
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '200px 0px', threshold: 0.01 });
    lazyImages.forEach(function(img) { observer.observe(img); });
  }

  // Simple lightbox for anchors with data-lightbox
  function initLightbox() {
    var links = [].slice.call(document.querySelectorAll('a[data-lightbox]'));
    if (links.length === 0) return;

    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = '\n      <button class="lightbox-close" aria-label="Close">×</button>\n      <img alt="">\n    ';
    document.body.appendChild(overlay);

    var imgEl = overlay.querySelector('img');
    var closeBtn = overlay.querySelector('.lightbox-close');

    function open(src, alt) {
      imgEl.src = src;
      imgEl.alt = alt || '';
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      overlay.classList.remove('active');
      imgEl.removeAttribute('src');
      document.body.style.overflow = '';
    }

    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var href = link.getAttribute('href');
        var alt = '';
        var img = link.querySelector('img');
        if (img) alt = img.getAttribute('alt') || '';
        open(href, alt);
      });
    });

    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) close();
    });
    closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') close();
    });
  }

  // Portfolio tag filtering
  function initFiltering() {
    var controls = document.querySelector('.portfolio-controls');
    var grid = document.querySelector('.portfolio-grid');
    if (!controls || !grid) return;

    var buttons = [].slice.call(controls.querySelectorAll('.filter-btn'));
    var cards = [].slice.call(grid.querySelectorAll('.portfolio-card'));
    var activeTag = 'all';

    function apply() {
      cards.forEach(function(card) {
        var tags = (card.getAttribute('data-tags') || '').toLowerCase().split(/\s+/).filter(Boolean);
        var show = activeTag === 'all' || tags.indexOf(activeTag) !== -1;
        card.style.display = show ? '' : 'none';
      });
    }

    buttons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        buttons.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        activeTag = (btn.getAttribute('data-tag') || 'all').toLowerCase();
        apply();
      });
    });

    // initial
    var initActive = controls.querySelector('.filter-btn.active');
    if (initActive) activeTag = (initActive.getAttribute('data-tag') || 'all').toLowerCase();
    apply();
  }

  document.addEventListener('DOMContentLoaded', function() {
    initLazy();
    initLightbox();
    initFiltering();
  });
})();
