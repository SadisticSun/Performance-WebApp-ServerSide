
(function(){
    "use strict";

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
