require('../db');
const studentModel = require('../models/student/student.model.server');
const questionModel = require('../models/question/question.model.server');
const answerModel = require('../models/answer/answer.model.server');
const quizWidgetModel = require('../models/quiz-widget/quiz-widget.model.server');
const STUDENTS = require('../mock-data/student.mock.server');
const QUESTIONS = require('../mock-data/question.mock.server');
const ANSWERS = require('../mock-data/answer.mock.server');

truncateDatabase = () =>
    answerModel.remove()
        .then(response => {
            console.log(response)
            return questionModel.remove()
        })
        .then(response => {
            console.log(response)
            return studentModel.remove()
        });

populateDatabase = () =>
    studentModel.insertMany(STUDENTS)
        .then(students => {
            console.log(students)
            return questionModel.insertMany(QUESTIONS)
        })
        .then(questions => {
            console.log(questions)
            return answerModel.insertMany(ANSWERS)
        });

createStudent = (student) =>
    studentModel.create(student);

deleteStudent = (studentId) =>
    studentModel.remove({_id: studentId});

updateStudent = (studentId, student) =>
    studentModel.update({_id: studentId}, {
            $set: student
        });

findAllStudents = () =>
    studentModel.find();

findStudentById = (studentId) =>
    studentModel.findById(studentId);

createQuestion = (question) =>
    questionModel.create(question);

deleteQuestion = (questionId) =>
    questionModel.remove({_id: questionId});

updateQuestion = (questionId, question) =>
    questionModel.update({_id: questionId}, {
        $set: question
    });

findAllQuestions = () =>
    questionModel.find();

findQuestionById = (questionId) =>
    questionModel.findById(questionId);

createAnswer = (answer) =>
    answerModel.create(answer);

deleteAnswer = (answerId) =>
    answerModel.remove({_id: answerId});

updateAnswer = (answerId, answer) =>
    studentModel.update({_id: answerId}, {
        $set: answer
    });

findAllAnswers = () =>
    answerModel.find()
        .populate('student', 'firstName')
        .populate('question', 'question')
        .exec();

findAnswerById = (answerId) =>
    answerModel.findById(answerId)
        .populate('student', 'firstName')
        .populate('question', 'question')
        .exec();

findAnswersByStudent = (studentId) =>
    answerModel.find({student: studentId})
        .populate('student', 'firstName')
        .populate('question', 'question')
        .exec();

findAnswersByQuestion = (questionId) =>
    answerModel.find({question: questionId})
        .populate('student', 'firstName')
        .populate('question', 'question')
        .exec();

module.exports = {
    truncateDatabase,
    populateDatabase,
    createStudent,
    deleteStudent,
    updateStudent,
    findAllStudents,
    findStudentById,
    createQuestion,
    deleteQuestion,
    updateQuestion,
    findAllQuestions,
    findQuestionById,
    createAnswer,
    findAnswersByStudent,
    findAnswersByQuestion,
    findAllAnswers,
    findAnswerById,
    deleteAnswer
};
