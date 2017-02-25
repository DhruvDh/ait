var express = require('express'),
    bodyParser = require('body-parser')
app = express();
var path = require('path');
var dataStore = require('nedb');
var JARVIS = require('./app/jarvis.js');

var db = new dataStore({ filename: path.join(__dirname, 'db', 'db') });
db.loadDatabase();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/training', function (req, res) {
    res.sendFile(path.join(__dirname, 'training.html'));
});

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, 'login.html'));
});
app.post('/training', function (req, res) {
    if (req.body.query) {
        JARVIS.trainSubject();
        JARVIS.trainType();
        JARVIS.trainDays();
        res.json({
            subject: JARVIS.getSubject(req.body.query),
            type: JARVIS.getType(req.body.query),
            day: JARVIS.getDay(req.body.query)
        });
    }
});

var server = app.listen(process.env.PORT || '3000', function () {
    //classifier.addDocument('write se experiment 2', 'Write');
    console.log('The servers up yo.');
});