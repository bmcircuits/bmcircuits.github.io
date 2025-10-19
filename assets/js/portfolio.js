(function(){
  function unique(arr){ return Array.from(new Set(arr)); }

  function init(){
    var container = document.querySelector('[data-portfolio-grid]');
    var buttons = document.querySelectorAll('[data-filter]');
    if (!container || !buttons.length) return;

    buttons.forEach(function(btn){
      btn.addEventListener('click', function(){
        var tag = btn.getAttribute('data-filter');
        buttons.forEach(function(b){ b.classList.remove('special'); });
        btn.classList.add('special');
        var items = container.querySelectorAll('[data-tags]');
        items.forEach(function(el){
          var tags = (el.getAttribute('data-tags') || '').split(',').filter(Boolean);
          var show = tag === 'all' || tags.indexOf(tag) !== -1;
          el.style.display = show ? '' : 'none';
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
