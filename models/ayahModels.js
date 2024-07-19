const mongoose = require("mongoose");

const ayahSchema = new mongoose.Schema({
  ayah_no_quran: {
    type: Number,
    required: true,
    unique: true,
  },
  surah_no: {
    type: Number,
    ref: "Surah",
    required: true,
  },
  ayah_no_surah: {
    type: Number,
    required: true,
  },
  text_ar: {
    type: String,
    required: true,
  },
  text_en: {
    type: String,
  },
  ruko_no: {
    type: Number,
  },
  juz_no: {
    type: Number,
  },
  manzil_no: {
    type: Number,
  },
  hizb_quarter: {
    type: Number,
  },
  sajdah: {
    type: Boolean,
  },
  sajdah_no: {
    type: String,
  },
  no_of_words: {
    type: Number,
  },
  words_list: [{ type: String }],
});
ayahSchema.index({ text_ar: "text", text_en: "text" });

module.exports = mongoose.model("Ayah", ayahSchema);
