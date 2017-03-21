const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const APIconfig = {
    KEY: 'dc6zaTOxFJmzC',
    LIMIT: 25
};

function doApiCall(query, key, limit) {

    var url = 'https://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=' + key + '&limit=' + limit;
    console.log(url);

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var parsedData = JSON.parse(body);
            parsedData.data.forEach(function (obj) {
                console.log(obj.url);
            })
        } else {
            console.log('Er ging iets mis met het ophalen van de data uit de API...')
        }
    });
}

app.use(urlencodedParser);
// app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index')
});

app.get('/about', function (req, res) {
    res.render('about')
});

app.get('/search', function (req, res) {
    res.render('search', {qs: req.query});
});

app.post('/search', urlencodedParser, function(req, res) {
    var userQuery = req.body.query;
    console.log(req.body.query);
    res.render('search', {qs: req.body});
    doApiCall(userQuery, APIconfig.KEY, APIconfig.LIMIT);

});


app.listen(3000, function () {
    console.log('App listening on: http://localhost:3000')
});


