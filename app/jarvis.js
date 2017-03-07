var dataStore = require('nedb');
var addSubject = require('./addSubject.js');

var natural = require('natural'),
    dayClassifier = new natural.LogisticRegressionClassifier(),
    typeClassifier = new natural.LogisticRegressionClassifier(),
    treeBank = new natural.RegexpTokenizer({ pattern: /[,\s]+/ });

var dayTrainer = new dataStore({ filename: './db/dayTrainer' });
var typeTrainer = new dataStore({ filename: './db/typeTrainer' });

var subjectClassifier = new natural.LogisticRegressionClassifier();

var subjectTrainer = new dataStore({ filename: './db/subjectTrainer' });
subjectTrainer.loadDatabase();

module.exports = {
    trainSubject: function () {
        subjectClassifier.addDocument("ait", "AIT");
        subjectClassifier.addDocument("AIT", "AIT");
        subjectClassifier.addDocument("Advanced Internet Technology", "AIT");
        subjectClassifier.addDocument("se", "SE");
        subjectClassifier.addDocument("SE", "SE");
        subjectClassifier.addDocument("Software Engineering", "SE");
        subjectClassifier.addDocument("ds", "DS");
        subjectClassifier.addDocument("DS", "DS");
        subjectClassifier.addDocument("Distributed Systems", "DS");
        subjectClassifier.addDocument("Data Mining Business Intelligence", "DMBI");
        subjectClassifier.addDocument("DBMI", "DMBI");
        subjectClassifier.addDocument("dmbi", "DMBI");
        subjectClassifier.addDocument("sws", "SWS");
        subjectClassifier.addDocument("SWS", "SWS");
        subjectClassifier.addDocument("ieee", "Committee/IEEE");
        subjectClassifier.addDocument("iete", "Committee/IETE");
        subjectClassifier.addDocument("itsa", "Committee/ITSA");
        subjectClassifier.addDocument("csi", "Committee/CSI");
        subjectClassifier.addDocument("codex", "Committee/CODEX");
        subjectClassifier.train();
    },
    trainType: function () {
        typeClassifier.addDocument("experiment", "Experiment");
        typeClassifier.addDocument("expt", "Experiment");
        typeClassifier.addDocument("exp", "Experiment");
        typeClassifier.addDocument("practical", "Experiment");
        typeClassifier.addDocument("prac", "Experiment");
        typeClassifier.addDocument("output", "Experiment/Output");
        typeClassifier.addDocument("screenshot", "Experiment/Output");
        typeClassifier.addDocument("ss", "Experiment/Output");
        typeClassifier.addDocument("conclusion", "Experiment/Conclusion");
        typeClassifier.addDocument("conc", "Experiment/Conculsion");
        typeClassifier.addDocument("post exp", "Experiment/PostExp");
        typeClassifier.addDocument("post expt", "Experiment/PostExp");

        typeClassifier.addDocument("descriptive test", "Test/Descriptive");
        typeClassifier.addDocument("desc test", "Test/Descriptive");
        typeClassifier.addDocument("dt", "Test/Descriptive");
        typeClassifier.addDocument("objective test", "Test/Objective");
        typeClassifier.addDocument("obj test", "Test/Objective");
        typeClassifier.addDocument("ot", "Test/Objective");
        typeClassifier.addDocument("internal assesment test", "Test/IA");
        typeClassifier.addDocument("iat", "Test/IA");
        typeClassifier.addDocument("test", "Test");
        typeClassifier.addDocument("tutorial test", "Test/Tutorial");

        typeClassifier.addDocument("assignment", "Assignment");
        typeClassifier.addDocument("assgn", "Assignment");
        typeClassifier.addDocument("ass", "Assignment")


        typeClassifier.addDocument("tutorial", "Tutorial");
        typeClassifier.addDocument("tuts", "Tutorial");
        typeClassifier.addDocument("tut", "Tutorial");

        typeClassifier.addDocument("homework", "Homework");
        typeClassifier.addDocument("hw", "Homework");

        typeClassifier.addDocument("library", "Library");

        typeClassifier.addDocument("payment", "Payment");
        typeClassifier.addDocument("pay", "Payment");

        typeClassifier.addDocument("register", "Register");
        typeClassifier.addDocument("registeration", "Register");

        typeClassifier.addDocument("meet", "Meeting");
        typeClassifier.addDocument("meeting", "Meeting");

        typeClassifier.addDocument("workshop", "Workshop");
        typeClassifier.addDocument("pay workshop", "Workshop/Payment");
        typeClassifier.addDocument("payment workshop", "Workshop/Payment");

        typeClassifier.addDocument("seminar", "Seminar");

        typeClassifier.addDocument("textbook", "Book/Text");
        typeClassifier.addDocument("text book", "Book/Text");
        typeClassifier.addDocument("reference book", "Book/Reference");
        typeClassifier.addDocument("ref book", "Book/Reference");
        typeClassifier.addDocument("notebook", "Book/Note");
        typeClassifier.addDocument("note book", "Book/Note");

        typeClassifier.addDocument("library textbook", "Libr`ary/Book/Text");
        typeClassifier.addDocument("library text book", "Library/Book/Text");
        typeClassifier.addDocument("library reference book", "Library/Book/Reference");
        typeClassifier.addDocument("library ref book", "Library/Book/Reference");

        typeClassifier.addDocument("project", "Project");
        typeClassifier.addDocument("proj", "Project");
        typeClassifier.addDocument("report", "Report");

        typeClassifier.addDocument("presentation", "Presentation");
        typeClassifier.addDocument("double sided sheets", "Sheets/Double");
        typeClassifier.addDocument("double side sheet", "Sheets/Double");
        typeClassifier.addDocument("single side sheet", "Sheets/Single");
        typeClassifier.addDocument("single sided sheets", "Sheets/Single");
        typeClassifier.addDocument("file", "File");
        typeClassifier.addDocument("index", "Index");
        typeClassifier.addDocument("certificate", "Certificate");
        typeClassifier.addDocument("buy double sided sheets", "Buy/Sheets/Double");
        typeClassifier.addDocument("buy double side sheet", "Buy/Sheets/Double");
        typeClassifier.addDocument("buy single side sheet", "Buy/Sheets/Single");
        typeClassifier.addDocument("buy single sided sheets", "Buy/Sheets/Single");
        typeClassifier.addDocument("buy file", "Buy/File");
        typeClassifier.addDocument("buy index", "Buy/Index");
        typeClassifier.addDocument("buy certificate", "Buy/Certificate");
        typeClassifier.train();
    },
    trainDays: function () {
        dayClassifier.addDocument("monday", "Monday");
        dayClassifier.addDocument("mon", "Monday");
        dayClassifier.addDocument("Tuesday", "Tuesday");
        dayClassifier.addDocument("tues", "Tuesday");
        dayClassifier.addDocument("wednesday", "Wednesday");
        dayClassifier.addDocument("wed", "Wednesday");
        dayClassifier.addDocument("thursday", "Thursday");
        dayClassifier.addDocument("thurs", "Thursday");
        dayClassifier.addDocument("friday", "Friday");
        dayClassifier.addDocument("friday", "Friday");
        dayClassifier.addDocument("saturday", "Saturday");
        dayClassifier.addDocument("sat", "Saturday");
        dayClassifier.addDocument("sunday", "Sunday");
        dayClassifier.addDocument("sun", "Sunday");

        dayClassifier.addDocument("next monday", "Next/Monday");
        dayClassifier.addDocument("next mon", "Next/Monday");
        dayClassifier.addDocument("next Tuesday", "Next/Tuesday");
        dayClassifier.addDocument("next tues", "Next/Tuesday");
        dayClassifier.addDocument("next wednesday", "Next/Wednesday");
        dayClassifier.addDocument("next wed", "Next/Wednesday");
        dayClassifier.addDocument("next thursday", "Next/Thursday");
        dayClassifier.addDocument("next thurs", "Next/Thursday");
        dayClassifier.addDocument("next friday", "Next/Friday");
        dayClassifier.addDocument("next friday", "Next/Friday");
        dayClassifier.addDocument("next saturday", "Next/Saturday");
        dayClassifier.addDocument("next sat", "Next/Saturday");
        dayClassifier.addDocument("next sunday", "Next/Sunday");
        dayClassifier.addDocument("next sun", "Next/Sunday");

        dayClassifier.addDocument("today", "Today");
        dayClassifier.addDocument("aaj", "Today");
        dayClassifier.addDocument("tomorrow", "Tomorrow");
        dayClassifier.addDocument("tom", "Tomorrow");
        dayClassifier.addDocument("by tomorrow", "Tomorrow");
        dayClassifier.addDocument("by tom", "Tomorrow");
        dayClassifier.addDocument("next week", "Next/Week");
        dayClassifier.addDocument("day after tomorrow", "Tomorrow2");
        dayClassifier.addDocument("day after tom", "Tomorrow2");

        dayClassifier.train();
    },
    getOrdinal: function (query) {
        var isOrdinalPreceeder = true;
        var suceceedingOrdinals = /(\d+)[\s,]+/ig;
        var preceedingOrdianls = /(\d+)\w{2}[\s,]*/ig;

        var dates = /\d{1,2}[\/\\]\d{1,2}[\/|\\]?\d{0,4}/ig;
        if (dates.exec(query + " "))
            query = query.replace(dates.exec(query + " ")[0], ' ');

        var ordinals = [];
        var temp;
        do {
            temp = suceceedingOrdinals.exec(query + " ");
            if (temp) {
                isOrdinalPreceeder = false;
                ordinals.push(temp[1]);
            }
        } while (temp);

        if (isOrdinalPreceeder) {
            do {
                temp = preceedingOrdianls.exec(query + " ");
                if (temp) {
                    ordinals.push(temp[1]);
                }
            } while (temp);
        }

        return ordinals;
    },
    getDay: function (query, timetable, batch) {
        var res = {};
        res.found = false;
        res.class = dayClassifier.classify(query);
        res.classifications = dayClassifier.getClassifications(query);

        res.classifications.forEach(function (x, i, y) {
            if (x.value != 0.5)
                res.found = true;
        })

        if (!res.found) {
            var dates = /\d{1,2}[\/\\]\d{1,2}[\/|\\]?\d{0,4}/ig;
            res.class = dates.exec(query + " ") ? dates.exec(query + " ")[0] : null;
            if (res.class)
                res.found = true;
            res.classifications = null;
        }

        var today = new Date();
        var subject = this.getSubject(query);
        var type = this.getType(query);
        var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
        console.log("today is: " + days[today.getDay()]);
        if (subject.found && !res.found) {
            if (type.class.search("Experiment") != -1) {
                timetable.forEach(function (day, index, tt) {
                    day.forEach(function (period, i, periods) {
                        if (period != undefined)
                            if (period.type == "prac")
                                if (period.subject(batch) == subject.class)
                                    if (index+1 == today.getDay())
                                    { res.class = "Today"; res.found = true;}
                                    else if (index < today.getDay)
                                    { res.class = "Next/" + days[index+1]; res.found = true; }
                                    else
                                    { res.class = days[index+1]; res.found = true; }
                    })
                })
            }
        }

        return res;
    },
    getType: function (query) {
        var res = {};
        res.found = false;
        res.class = typeClassifier.classify(query);
        res.classifications = typeClassifier.getClassifications(query);

        res.classifications.forEach(function (x, i, y) {
            if (x.value != 0.5)
                res.found = true;
        })

        return res;
    },
    getSubject: function (query) {
        var res = {};
        res.found = false;
        res.class = subjectClassifier.classify(query);
        res.classifications = subjectClassifier.getClassifications(query);

        res.classifications.forEach(function (x, i, y) {
            if (x.value != 0.5)
                res.found = true;
        })

        return res;
    }
};