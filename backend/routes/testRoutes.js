const express = require("express");
const router = express.Router();

const{getQuestions} = require("../controllers/testController");

router.get("/questions",getQuestions);
module.exports = router;