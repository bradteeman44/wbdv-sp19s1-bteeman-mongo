const dao = require('../data/daos/university.dao.server')
module.exports = function(app) {

    function createAnswer(req, res) {
        dao.createAnswer(req.body)
            .then(response => res.json(response))
    }

    function findAnswersByStudent(req, res) {
        dao.findAnswersByStudent(req.params['sid'])
            .then(response => res.json(response))
    }

    function findAnswersByQuestion(req, res) {
        dao.findAnswersByQuestion(req.params['qid'])
            .then(response => res.json(response))
    }

    function findAllAnswers(req, res) {
        dao.findAllAnswers()
            .then(response => res.json(response))
    }

    function findAnswerById(req, res) {
        dao.findAnswerById(req.params.id)
            .then(response => res.json(response))
    }

    function deleteAnswer(req, res) {
        dao.deleteAnswer(req.params.id)
            .then(response => res.json(response))
    }

    app.post('/api/student/:sid/question/:qid/answer', createAnswer);
    app.get('/api/student/:sid/question/:qid/answer', findAnswersByStudent);
    app.get('/api/question/:qid/student/:sid/answer', findAnswersByQuestion);
    app.get('/api/answer/:id', findAnswerById);
    app.get('/api/answer', findAllAnswers);
    app.delete('/api/answer/:id', deleteAnswer);
};
