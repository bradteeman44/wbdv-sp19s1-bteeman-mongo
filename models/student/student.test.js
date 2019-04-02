require('../../data/db')()
const dao = require('./student.dao.server');
dao.find().then(response => console.log(response))
