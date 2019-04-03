const dao = require('../data/daos/university.dao.server')
module.exports = function(app) {

    function createQuestion(req, res) {
        dao.createQuestion(req.body)
            .then(response => res.json(response))
    }

    function findAllQuestions(req, res) {
        dao.findAllQuestions()
            .then(response => res.json(response))
    }

    function findQuestionById(req, res) {
        dao.findQuestionById(req.params.id)
            .then(response => res.json(response))
    }

    function updateQuestion(req, res) {
        dao.updateQuestion(req.params.id, req.body)
            .then(response => res.json(response))
    }

    function deleteQuestion(req, res) {
        dao.deleteQuestion(req.params.id)
            .then(response => res.json(response))
    }

    app.post('/api/question', createQuestion);
    app.get('/api/question', findAllQuestions);
    app.get('/api/question/:id', findQuestionById);
    app.put('/api/question/:id', updateQuestion);
    app.delete('/api/question/:id', deleteQuestion);

};
