const mongoose= require('mongoose');
const questionSchema = require('../question/question.schema.server')
const quizWidgetSchema = mongoose.Schema({
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuestionModel'
    }]
}, {collection: 'question-widgets'});
module.exports = quizWidgetSchema;
