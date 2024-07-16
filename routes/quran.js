const express = require("express");
const router = express.Router();
const {
  getSurahs,
  getAyahs,
  getAyahsBySurah,
} = require("../controllers/quranController");

// Routes for Surahs
router.get("/surahs", getSurahs);
router.get("/", (req, res) => {
  res.send("<h1>NOT IMPLEMENTED</h1>");
});
// Routes for Ayahs
router.get("/ayahs", getAyahs);
router.get("/surahs/:surahId/ayahs", getAyahsBySurah);

module.exports = router;
