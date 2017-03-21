const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const APIconfig = {
    KEY: 'dc6zaTOxFJmzC',
    LIMIT: 25
};

// function load(query, callback) {
//     var url = 'https://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=' + APIconfig.KEY + '&limit=' + APIconfig.LIMIT;
//     request(url, function (err, res, body) {
//         callback(JSON.parse(body));
//     })
// }

function doApiCall(query, key, limit, callback) {

    var url = 'https://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=' + key + '&limit=' + limit;
    console.log("URL is: " + url);

    request(url, function (error, response, body) {
        var parsedData = JSON.parse(body);
        var urls = [];
        parsedData.data.forEach(function (obj) {
            urls.push(obj.images.fixed_height.url);
        });
        callback(urls);
        console.log(urls);
    });
}

app.use(urlencodedParser);

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index')
});

app.get('/about', function (req, res) {
    res.render('about')
});

app.get('/search', function (req, res) {
    res.render('search', {qs: req.query, urls: []});
});

app.post('/search', urlencodedParser, function(req, res) {
    var userQuery = req.body.query;
    console.log(req.body.query);
    doApiCall(userQuery, APIconfig.KEY, APIconfig.LIMIT, function (urls) {
        res.render('search', {qs: req.body, urls: urls})
    });

});


app.listen(3000, function () {
    console.log('App listening on: http://localhost:3000')
});


