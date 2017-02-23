var express = require('express'),
    bodyParser = require('body-parser')
    app = express();
var path = require('path');
var dataStore = require('nedb');
var natural = require('natural'),
    intentCalssifier = new natural.BayesClassifier(),
    subjectClassifier = new natural.BayesClassifier(),
    typeClassifier = new natural.BayesClassifier(),
    ordinalClassifier = new natural.BayesClassifier();


var db = new dataStore({filename: path.join(__dirname, 'db','db')});
db.loadDatabase();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/training',function(req, res){
    res.sendFile(path.join(__dirname, 'training.html'));
});

app.get('/login',function(req, res){
    res.sendFile(path.join(__dirname, 'login.html'));
});
app.post('/training',function(req, res){
    if(req.body.query)
        res.sendStatus(200);
});

var server = app.listen(process.env.PORT || '3000',function(){
    //classifier.addDocument('write se experiment 2', 'Write');
    console.log('The servers up yo.');
});