const Question = require("../models/Question");

exports.getQuestions = async (req,res) =>{
    try{
        const questions = await Question.find();

        res.json(questions);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
};