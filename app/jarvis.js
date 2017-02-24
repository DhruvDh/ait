var dataStore = require('nedb');
var natural = require('natural'),
    dayClassifier = new natural.BayesClassifier(),
    typeClassifier = new natural.BayesClassifier();
var dayTrainer = new dataStore({ filename: './db/dayTrainer' });
var typeTrainer = new dataStore({ filename: './db/typeTrainer' });
var subjectClassifier = new natural.BayesClassifier();
var subjectTrainer = new dataStore({ filename: './db/subjectTrainer' });
subjectTrainer.loadDatabase();
var subjecttTrainerTemplate = new dataStore({ filename: './db/subjectTrainerTemplate' });
subjecttTrainerTemplate.loadDatabase();

module.exports = {
    trainSubject: function (query, subject) {
        //subjectClassifier.addDocument(query, subject);
        subjecttTrainerTemplate.insert({ query: query, label: "%label%" });
        //subjectClassifier.train();
    },
    getSubject: function (query) {
        return subjectClassifier.classify(query);
    }
};