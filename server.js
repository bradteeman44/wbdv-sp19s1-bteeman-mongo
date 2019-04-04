var express = require('express');
var app = express();
require('./data/db')();
var bodyParser = require('body-parser');
var session = require('express-session');
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);

const studentService = require('./services/student.service.server');
const questionService = require('./services/question.service.server');
const answerService = require('./services/answer.service.server');
const testDataService = require('./services/test-data.service.server');
studentService(app);
questionService(app);
answerService(app);
testDataService(app);
