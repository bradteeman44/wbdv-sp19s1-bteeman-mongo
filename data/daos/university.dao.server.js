require('../db');
const studentModel = require('../models/student/student.model.server');
const questionModel = require('../models/question/question.model.server');
const answerModel = require('../models/answer/answer.model.server');
const quizWidgetModel = require('../models/quiz-widget/quiz-widget.model.server');

truncateDatabase = () => {}

createStudent = (student) =>
    studentModel.create(student);

findAllStudents = () =>
    studentModel.find();

findStudentById = (studentId) =>
    studentModel.findById(studentId);

findAllQuestions = () =>
    questionModel.find();

findQuestionById = (questionId) =>
    questionModel.findById(questionId);

findAllAnswers = () =>
    answerModel.find();

findAnswerById = (answerId) =>
    answerModel.findById(answerId);

findAnswersByStudent = (studentId) =>
    answerModel.find({student: studentId}).populate();

findAnswersByQuestion = (questionId) =>
    answerModel.find({question: questionId}).populate();

module.exports = {
    createStudent,
    findAllStudents,
    findStudentById,
    findAllQuestions,
    findQuestionById,
    findAllAnswers,
    findAnswerById,
    findAnswersByStudent,
    findAnswersByQuestion
};
