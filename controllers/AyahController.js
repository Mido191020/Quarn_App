const Surah = require("../models/surahModels");
const Ayah = require("../models/ayahModels");
const Juz = require("../models/JuzModels");

exports.get_Ayah = async (req, res) => {
  try {
    const { id } = req.params;
    const ayah = await Ayah.findById(id);
    if (!ayah) {
      return res.status(404).json({ error: "Ayah not found" });
    }
    res.status(200).json(ayah);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Ayah" });
  }
};

exports.get_all_Ayah = async (req, res) => {
  try {
    const ayahs = await Ayah.find();
    res.status(200).json(ayahs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Ayahs" });
  }
};

exports.search = async (req, res) => {
  try {
    const {
      keyword,
      searchType,
      filterType,
      filterValue,
      page = 1,
      limit = 20,
    } = req.query;

    let query = {};

    // Handle filtering by Surah or Juz
    if (filterType && filterValue) {
      if (filterType === "surah") {
        query.surah_no = parseInt(filterValue);
      } else if (filterType === "juz") {
        query.juz_no = parseInt(filterValue);
      }
    }

    // Handle keyword search
    if (keyword) {
      if (searchType === "arabic") {
        query.$text = { $search: keyword, $language: "arabic" };
      } else {
        query.$text = { $search: keyword };
      }
    }

    const skip = (page - 1) * limit;
    const results = await Ayah.find(query)
      .skip(skip)
      .limit(Number(limit))
      .sort({ ayah_no_quran: 1 });

    const total = await Ayah.countDocuments(query);

    res.json({
      status: "success",
      data: results,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  get_Ayah: exports.get_Ayah,
  get_all_Ayah: exports.get_all_Ayah,
  search: exports.search,
};
