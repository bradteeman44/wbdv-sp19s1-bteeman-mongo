const mongoose = require('mongoose');
const TrueFalseSchema = require('../true-false/true-false.schema.server');
const MultipleChoiceSchema = require('../multiple-choice/multiple-choice.schema.server');
const questionSchema = mongoose.Schema({
    _id: Number,
    question: String,
    points: Number,
    questionType: {
        type: String,
        enum: ["TRUE_FALSE", "MULTIPLE_CHOICE"],
        required: true
    },
    multipleChoice: {
        type: MultipleChoiceSchema,
        required: isMultipleChoice()
    },
    trueFalse: {
        type: TrueFalseSchema,
        required: isTrueFalse()
    }
}, {collection: 'questions'});

function isTrueFalse() {
    return this.enum === "TRUE_FALSE";
}

function isMultipleChoice() {
    return this.enum === "MULTIPLE_CHOICE";
}

module.exports = questionSchema;
