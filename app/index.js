const express = require('express');
const app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
var path = require('path');
app.set('view engine', 'ejs');
app.get('/login',function(req,res) {
    res.render('login')
})
app.get('/index', function(req,res) {
    res.render('index')
})
app.post('/search', function(req,res) { 
    let query = req.body
})
app.listen(8080)