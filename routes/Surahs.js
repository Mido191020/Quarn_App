const express = require("express");
const router = express.Router();
const surahController = require("../controllers/surahController");

router.get("/", surahController.getSurahList);
router.get("/:id", surahController.getSurahDetails);
module.exports = router;
