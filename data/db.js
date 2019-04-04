module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'white-board';
    var connectionString = 'mongodb://heroku_6v8mkhfv:v119njimliajbr6suurp38jqjr@ds147344.mlab.com:47344/';
    connectionString += databaseName;
    mongoose.connect(connectionString);
};
