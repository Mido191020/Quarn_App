const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const createError = require("http-errors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({ path: "./config.env" });

// Import route files
const ayahRouter = require("./routes/Ayahs");
const surahsRouter = require("./routes/Surahs");
const juzRouter = require("./routes/juz");
const homeRouter = require("./routes/home");
const bookmarksRouter = require("./routes/Bookmarks");

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

// Logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Mount route files
app.use("/home", homeRouter);
app.use("/", homeRouter);
app.use("/ayah", ayahRouter);
app.use("/surahs", surahsRouter);
app.use("/juz", juzRouter);
app.use("/bookmarks", bookmarksRouter);

// DB connection
mongoose.set("strictQuery", false);
const dbName = "inventory_management_app";
const DB = process.env.DATABASE || `mongodb://localhost/${dbName}`;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err) => {
    console.error(`MongoDB connection error: ${err.message}`);
    process.exit(1);
  });

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  console.error("Error:", err.message);
  console.error("Stack:", err.stack);

  // Render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Global error handlers
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

module.exports = app;
