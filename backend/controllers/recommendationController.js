const TestResult = require("../models/TestResult");
const Course = require("../models/Course");

exports.getRecommendations = async(req,res) => {
    try{
        const {userId} = req.params;

        const results = await TestResult.find({userId});

        const weakTopics = results.filter(result => result.score < 50).map(result => result.topic);

        const courses = await Course.find({
            topic: {$in: weakTopics}
        });

        res.json({
            weakTopics,
            recommendedCourses: courses
        });
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}