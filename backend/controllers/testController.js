const Question = require("../models/Question");
const TestResult = require("../models/TestResult");
const Course = require("../models/Course");

exports.getQuestions = async (req,res) =>{
    try{
        const questions = await Question.find();

        res.json(questions);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
};

//test submit

exports.submitTest = async(req,res) => {
    try{
        const{userId, answers} = req.body;
        const questions = await Question.find();

        let topicScores = {};
        questions.forEach((question) => {
            const userAnswer = answers[question._id];
            if(!topicScores[question.topic]){
                topicScores[question.topic] = {correct:0,total:0};
            }
            topicScores[question.topic].total++;
            if(userAnswer === question.correctAnswer){
                topicScores[question.topic].correct++;
            }
        });
        let results =[];
        let weakTopics = [];

        for(let topic in topicScores){
            const score =(topicScores[topic].correct/topicScores[topic].total)*100;

            const result = await TestResult.create({
                userId,
                topic,
                score
            });
            results.push(result);

            if(score < 70){
                weakTopics.push(topic);
            }
        }

        const recommendedCourses = await Course.find({
            topic: { $in: weakTopics }
        });
        
        res.json({
            message:"Test submitted successfully",
            results,
            weakTopics,
            recommendedCourses
        });
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}