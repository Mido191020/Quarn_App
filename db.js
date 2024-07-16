const mongoose = require("mongoose");
require("dotenv").config();

// Use the connection string from environment variables or default to a local database
const dbName = "inventory_management_app";
const dbURI = process.env.DATABASE || `mongodb://localhost/${dbName}`;

// Connect to MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle connection events
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = mongoose;
