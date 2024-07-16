const Surah = require("../models/surah");
const Ayah = require("../models/ayah");
const juz = require("../models/Juz");
// Get all Surahs
const getSurahs = async (req, res) => {
  try {
    const surahs = await Surah.find();
    res.json(surahs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all Ayahs
const getAyahs = async (req, res) => {
  try {
    const ayahs = await Ayah.find().populate("surah");
    res.json(ayahs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Ayahs by Surah ID
const getAyahsBySurah = async (req, res) => {
  try {
    const { surahId } = req.params;
    const ayahs = await Ayah.find({ surah: surahId }).populate("surah");
    res.json(ayahs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getSurahs, getAyahs, getAyahsBySurah };
