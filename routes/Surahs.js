const express = require("express");
const router = express.Router();
const surahController = require("../controllers/surahController");

router.get("/", surahController.get_All_Surahs);
router.get("/:id", surahController.get_Surah);
module.exports = router;
