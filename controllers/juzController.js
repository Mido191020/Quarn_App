const Surah = require("../models/surahModels");
const Ayah = require("../models/ayahModels");
const Juz = require("../models/JuzModels"); // Note the lowercase 'j' in juzModels

exports.getJuzList = async (req, res, next) => {
  try {
    const juzList = await Juz.find();
    res.status(200).json(juzList);
  } catch (error) {
    next(error);
  }
};

exports.getJuzDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const juz = await Juz.findById(id).populate("ayahs");

    if (!juz) {
      return res.status(404).json({
        status: "fail",
        message: "Juz not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: juz,
    });
  } catch (error) {
    next(error);
  }
};
