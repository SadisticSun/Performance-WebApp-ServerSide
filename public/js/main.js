
(function(){
    "use strict";


    var utils = {
        $: function() {
            return document.querySelector(id);
        }
    };

    utils.$('#search-form').addEventListener('submit', function (e) {
        e.preventDefault();
    });

    //
    var APIconfig = {
        KEY: 'dc6zaTOxFJmzC',
        URL: 'https://api.giphy.com/v1/gifs/search?q=' + this.QUERY + '&api_key=' + this.KEY + '&limit=' + this.LIMIT,
        LIMIT: 25,
        QUERY: 'cat',
        call: function () {
            console.log('zoeken..');
            // aja()
            //     .url(APIconfig.URL)
            //     .on('success', function (data) {
            //         console.log(data);
            //     }).go();
        }
    };
    //
    // var elements = {
    //     _search:    utils.$('#search'),
    //     _input:     utils.$('#input'),
    //     _results:   utils.$('#search-results')
    //
    // };
    //
    // var app = {
    //     init: function () {
    //         elements._search.addEventListener('click', function (e) {
    //             e.preventDefault();
    //             // APIconfig.QUERY = elements._input.value;
    //             APIconfig.call();
    //         })
    //     }
    // };
    // app.init();
})();
