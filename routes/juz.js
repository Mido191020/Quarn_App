const express = require("express");
const router = express.Router();
const juzController = require("../controllers/juzController");

router.get("/", juzController.get_all_juz);
router.get("/:id", juzController.get_juz);

module.exports = router;
