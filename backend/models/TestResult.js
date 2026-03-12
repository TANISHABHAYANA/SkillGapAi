const mongoose = require("mongoose");

const TestResultSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    topic: String,
    score:Number
});

module.exports = mongoose.model("TestResult", TestResultSchema);