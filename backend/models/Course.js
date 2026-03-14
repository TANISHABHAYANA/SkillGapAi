const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    title: String,
    topic: String,
    platform: String,
    level: String,
    link: String
});
module.exports = mongoose.model("Course",CourseSchema);