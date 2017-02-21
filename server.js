var express = require('express'),
    app = express();
var path = require('path');
var dataStore = require('nedb');
var natural = require('natural'),
    intentCalssifier = new natural.BayesClassifier(),
    subjectClassifier = new natural.BayesClassifier(),


var db = new dataStore({filename: path.join(__dirname, 'db','db')});
db.loadDatabase();

app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

var server = app.listen(process.env.PORT || '3000',function(){
    classifier.addDocument('write se experiment 2', 'Write');
    console.log('The servers up yo.');
});