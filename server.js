var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/',function(req, res){
    res.send('Yo whats up man');
});

app.get('/index.html',function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

var server = app.listen(process.env.PORT || '3000',function(){
    console.log('The servers up yo.')
});