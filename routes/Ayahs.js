const express = require("express");
const router = express.Router();
const ayahController = require("../controllers/AyahController");

router.get("/", ayahController.get_all_Ayah);
router.get("/:id", ayahController.get_Ayah);

module.exports = router;
