const mongoose = require("mongoose");

const surahSchema = new mongoose.Schema({
  surah_no: {
    type: Number,
    require: true,
    unique: true,
  },
  name_en: {
    type: String,
    require: true,
  },
  name_ar: {
    type: String,
    require: true,
  },
  name_roman: {
    type: String,
  },
  toatl_ayah: {
    type: Number,
  },
  place_of_revelation: {
    type: String,
  },
  juz_list: [
    {
      type: Number,
    },
  ],
});
module.exports = mongoose.model("Surah", surahSchema);
