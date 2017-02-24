var dataStore = require('nedb');
var natural = require('natural'),
    dayClassifier = new natural.BayesClassifier(),
    typeClassifier = new natural.BayesClassifier();
var dayTrainer = new dataStore({filename: './db/dayTrainer'});
var typeTrainer = new dataStore({filename: './db/typeTrainer'});


module.exports = {
    initSubjectClassifier: function(){
        var subjectClassifier = new natural.BayesClassifier();
        var subjectTrainer = new dataStore({filename: './db/subjectTrainer'});
        subjectTrainer.loadDatabase();
    },
    trainSubject: function(query, subject){
        subjectClassifier.addDocument(query, subject);
        subjectTrainer.insert({query: query, label: subject});
    },
    getSubject: function(query, context){

    }
};