const mongoose = require("mongoose");
const fs = require("fs");
require("dotenv").config();

// MongoDB connection URI
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Define the Schema for Surahs
const surahSchema = new mongoose.Schema({
  number: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  englishName: { type: String, required: true },
  englishNameTranslation: { type: String, required: true },
  numberOfAyahs: { type: Number, required: true },
  revelationType: { type: String, enum: ["Meccan", "Medinan"], required: true },
});

// Define the Schema for Ayahs
const ayahSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  text: { type: String, required: true },
  numberInSurah: { type: Number, required: true },
  juz: { type: Number, required: true },
  manzil: { type: Number, required: true },
  page: { type: Number, required: true },
  ruku: { type: Number, required: true },
  hizbQuarter: { type: Number, required: true },
  sajda: { type: Boolean, default: false },
  surah: { type: mongoose.Schema.Types.ObjectId, ref: "Surah", required: true },
});

// Create the Models
const Surah = mongoose.model("Surah", surahSchema);
const Ayah = mongoose.model("Ayah", ayahSchema);

// Read the JSON file
const data = JSON.parse(
  fs.readFileSync(
    "C:\\Users\\HUAWEI\\OneDrive\\Desktop\\codeEveryday\\projects\\Inventory_Application\\inventory-app\\The Quran Dataset.json",
    "utf-8"
  )
);

// Import the data into MongoDB
const importData = async () => {
  try {
    // First, import Surahs
    const surahs = [...new Set(data.map((item) => item.surah_id))].map(
      (surahId) => ({
        number: surahId,
        // You'll need to add other Surah details here
      })
    );
    const importedSurahs = await Surah.insertMany(surahs);

    // Then, import Ayahs with references to Surahs
    const ayahs = data.map((item) => ({
      number: item.verse_id,
      text: item.text,
      numberInSurah: item.ayah_number,
      // You'll need to add other Ayah details here
      surah: importedSurahs.find((s) => s.number === item.surah_id)._id,
    }));
    await Ayah.insertMany(ayahs);

    console.log("Data imported successfully");
    process.exit();
  } catch (err) {
    console.log("Error importing data:", err);
    process.exit(1);
  }
};

importData();
