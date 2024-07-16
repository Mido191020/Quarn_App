const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const createError = require("http-errors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({ path: "./config.env" });

// Connect to the database
const db = require("./db");

// Import route files
const quranRouter = require("./routes/quran");
const ayahRouter = require("./routes/Ayahs");
const surahsRouter = require("./routes/Surahs");
const juzRouter = require("./routes/juz");
const homeRouter = require("./routes/home");
const app = express();

// Set view engine and views directory
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Middleware setup
app.use(morgan("dev")); // HTTP request logger middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Mount route files
app.use("/home", homeRouter);
app.use("/", homeRouter);
app.use("/quran", quranRouter);
app.use("/ayah", ayahRouter);
app.use("/surahs", surahsRouter);
app.use("/juz", juzRouter);
// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
