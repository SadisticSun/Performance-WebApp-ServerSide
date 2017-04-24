var express          = require('express'),
    compression      = require('compression'),
    request          = require('request'),
    bodyParser       = require('body-parser'),
    app              = express(),
    urlencodedParser = bodyParser.urlencoded({
    extended: false
});
var APIconfig = {
    KEY: 'dc6zaTOxFJmzC',
    LIMIT: 20
};
app.use(compression());
app.set('port', (process.env.PORT || 8080));
app.use(urlencodedParser);
app.set('view engine', 'ejs');
app.use(compression());
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/search', function(req, res) {
    var data = {};
    res.render('search', {
        user_query: req.query,
        items: null
    });
});

objects = [];

app.post('/search', urlencodedParser, function(req, res) {
    var userQuery = req.body.query;
    doApiCall(userQuery, APIconfig.KEY, APIconfig.LIMIT, function(data) {
        objects.push(data.data);
        // console.log('objects[] bevat nu: ' + objects);
        res.render('search', {
            user_query: userQuery,
            items: data.data
        });
    });
});

app.get('/details/:id', function(req, res) {
    res.render('details', {
        single_img_url: 'https://media4.giphy.com/media/' + req.params.id + '/200.gif'
    });
});

app.listen(app.get('port'), function() {
    console.log('App listening on: http://localhost:8080');
});

function doApiCall(query, key, limit, callback) {
    var url = 'https://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=' + key + '&limit=' + limit;
    console.log("URL is: " + url);
    request(url, function(error, response, body) {
        var parsedData = JSON.parse(body);
        callback(parsedData);
    });
}
