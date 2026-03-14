const express = require("express");
const router = express.Router();

const{getRecommendations} = require("../controllers/recommendationController");

router.get("/:userId",getRecommendations);
module.exports = router;