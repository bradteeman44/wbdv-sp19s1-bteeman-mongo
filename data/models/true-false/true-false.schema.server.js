const mongoose = require('mongoose');
const trueFalseSchema = mongoose.Schema({
    _id: Number,
    isTrue: Boolean
}, {collection: 'true-false'});
module.exports = trueFalseSchema;
