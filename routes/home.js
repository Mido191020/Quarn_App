const express = require("express");
const { home_page } = require("../controllers/homeController");
const router = express.Router();
router.get("/", home_page);

module.exports = router;
