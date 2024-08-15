const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/:date", taskController.getAllTasksByDate);

module.exports = router;
