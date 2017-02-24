var dataStore = require('nedb');
var natural = require('natural');
var classifier = new natural.BayesClassifier();

var subjectTrainer = new dataStore({ filename: './db/subjectTrainer' });
subjectTrainer.loadDatabase();
var subjecttTrainerTemplate = new dataStore({ filename: './db/subjectTrainerTemplate' });
subjecttTrainerTemplate.loadDatabase();

module.exports = {
    addSubject: function (subject, label) {
        subjecttTrainerTemplate.find({}, function (err, docs) {
            for (x in subject) {
                subjectTrainer.insert({
                    query: docs.query.replace(/%.*%/g, subject[x]),
                    label: label
                });
            }
        });
    }
};