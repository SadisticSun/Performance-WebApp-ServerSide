var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index')
});

app.get('/about', function (req, res) {
    res.render('about')
});

app.get('/search', function (req, res) {
    res.render('search')
});

app.listen(3000, function () {
    console.log('Example app listening on: http://localhost:3000!')
});