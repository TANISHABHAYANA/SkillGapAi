const mongoose = require("mongoose");

const QuestionSchma = new mongoose.Schema({
    question: String,
    options: [String],
    correctAnswer: String,
    topic: String
});

module.exports = mongoose.model("Question", QuestionSchma);