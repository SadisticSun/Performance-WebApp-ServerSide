
(function(){
    "use strict";

    var loadCSS = function(href, before, media){
      var ss = window.document.createElement('link');
      var ref = before || window.document.getElementsByTagName('script')[0];
      var sheets = window.document.styleSheets;
      ss.rel =  'stylesheet';
      ss.href = href;
      ref.parentNode.insertBefore(ss, ref);
      function toggleMedia() {
          var defined;
          for (var i = 0; i < sheets.length; i++) {
              if (sheets[i].href && sheets[i].href.indexOf(href) > -1) {
                  defined = true;
              }
          }
          if (defined) {
              ss.media = media || 'all';
          }
          else {
              setTimeout(toggleMedia);
          }
      }
      toggleMedia();
      return ss;
    };
    var stylesheet = loadCSS( "./css/main.css" );
    console.log(stylesheet);

    var utils = {
        $: function(id) {
            return document.querySelector(id);
        }
    };

    var DOMelements = {
        results: utils.$('#searchresults')
    };

    var icons = {
        grid: utils.$('#grid-icon'),
        rows: utils.$('#row-icon')
    };

    icons.rows.addEventListener('click', function (event) {
        event.preventDefault();
        DOMelements.results.classList.add('rowLayout');
        icons.grid.classList.remove('active');
        icons.rows.classList.add('active');
    });

    icons.grid.addEventListener('click', function (event) {
        event.preventDefault();
        if (DOMelements.results.classList.contains('rowLayout')) {
            DOMelements.results.classList.remove('rowLayout');
            icons.grid.classList.add('active');
            icons.rows.classList.remove('active');
        }
    });

})();
