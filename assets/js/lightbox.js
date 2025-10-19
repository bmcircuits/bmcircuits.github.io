(function(){
  function createOverlay(){
    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    var close = document.createElement('div');
    close.className = 'lightbox-close';
    close.innerHTML = '&times;';
    close.addEventListener('click', function(){
      overlay.classList.remove('open');
      setTimeout(function(){ document.body.removeChild(overlay); }, 150);
      document.body.style.overflow = '';
    });

    overlay.appendChild(close);

    overlay.addEventListener('click', function(e){
      if (e.target === overlay) close.click();
    });

    return overlay;
  }

  function openLightbox(src){
    var overlay = createOverlay();
    var img = document.createElement('img');
    img.src = src;
    overlay.appendChild(img);
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(function(){ overlay.classList.add('open'); });
  }

  function init(){
    document.addEventListener('click', function(e){
      var a = e.target.closest('a.lightbox');
      if (!a) return;
      e.preventDefault();
      var href = a.getAttribute('href');
      if (href) openLightbox(href);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
