const mongoose = require("mongoose");
const juzSchema = new mongoose.Schema({
  juz_no: {
    type: Number,
    required: true,
    unique: true,
  },
  surah_ayah_list: [
    {
      surah_no: Number,
      ayah_no: Number,
    },
  ],
  ayahs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ayah" }],
});

module.exports = mongoose.model("Juz", juzSchema);
