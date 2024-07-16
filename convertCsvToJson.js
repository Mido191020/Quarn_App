const fs = require("fs");
const csv = require("csv-parser");
const mongoose = require("./db");
const Quran = require("./models/quran"); // Ensure this path is correct

const results = [];

fs.createReadStream("The Quran Dataset.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async() => {
        try {
            await Quran.insertMany(results);
            console.log("Data imported successfully");
            mongoose.connection.close();
        } catch (error) {
            console.error("Error importing data: ", error);
        }
    });