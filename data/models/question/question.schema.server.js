const mongoose = require('mongoose');
const TrueFalseSchema = require('../true-false/true-false.schema.server');
const MultipleChoiceSchema = require('../multiple-choice/multiple-choice.schema.server');
const questionSchema = mongoose.Schema({
    _id: Number,
    question: String,
    points: Number,
    questionType: String,
    multipleChoice: MultipleChoiceSchema,
    trueFalse: TrueFalseSchema
}, {collection: 'questions'});
module.exports = questionSchema;
