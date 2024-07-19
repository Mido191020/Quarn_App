const express = require("express");
const router = express.Router();
const juzController = require("../controllers/juzController");

router.get("/", juzController.getJuzList);
router.get("/:id", juzController.getJuzDetails);

module.exports = router;
