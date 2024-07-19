const Surah = require("../models/surahModels");
const Ayah = require("../models/ayahModels");
const juz = require("../models/JuzModels");
exports.getSurahList = async (req, res, next) => {
  try {
    const surahList = await Surah.find();

    res.status(200).json({
      status: "success",
      data: surahList,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSurahDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const surah = await Surah.findById(id).populate("ayahs");

    if (!surah) {
      return res.status(404).json({
        status: "fail",
        message: "Surah not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: surah,
    });
  } catch (error) {
    next(error);
  }
};
