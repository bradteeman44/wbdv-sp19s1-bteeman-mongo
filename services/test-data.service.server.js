const dao = require('../data/daos/university.dao.server')
module.exports = function(app) {

    function populateDatabase(req, res) {
        dao.populateDatabase()
            .then(response => res.json(response))
    }

    function truncateDatabase(req, res) {
        dao.truncateDatabase()
            .then(response => res.json(response))
    }

    app.post('/api/populate', populateDatabase);
    app.delete('/api/all', truncateDatabase);

};
