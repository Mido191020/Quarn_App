const mongoose = require("mongoose");
const bookmarkSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    surahNumber: {
      type: Number,
      require: true,
    },
    ayahNumber: {
      type: Number,
      require: true,
    },
    note: {
      type: String,
      default: " ",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Bookmark", bookmarkSchema);
