const dao = require('../data/daos/university.dao.server')
module.exports = function(app) {

    function createStudent(req, res) {
       dao.createStudent(req.body)
            .then(response => res.json(response))
    }

    function findAllStudents(req, res) {
        dao.findAllStudents()
            .then(response => res.json(response))
    }

    function findStudentById(req, res) {
        dao.findStudentById(req.params.id)
            .then(response => res.json(response))
    }

    function updateStudent(req, res) {
        dao.updateStudent(req.params.id, req.body)
            .then(response => res.json(response))
    }

    function deleteStudent(req, res) {
        dao.deleteStudent(req.params.id)
            .then(response => res.json(response))
    }

    app.post('/api/student', createStudent);
    app.get('/api/student', findAllStudents);
    app.get('/api/student/:id', findStudentById);
    app.put('/api/student/:id', updateStudent);
    app.delete('/api/student/:id', deleteStudent);

};
