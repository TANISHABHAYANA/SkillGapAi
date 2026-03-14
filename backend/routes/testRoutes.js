const express = require("express");
const router = express.Router();

const{getQuestions,submitTest} = require("../controllers/testController");

router.get("/questions",getQuestions);
router.post("/submit",submitTest);
module.exports = router;