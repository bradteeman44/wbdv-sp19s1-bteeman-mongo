require('../../db')()
const dao = require('./student.model.server');
dao.find().then(response => console.log(response))
