const express = require("express");
const { get } = require("mongoose");
const router = express.Router();
const bookmarkController = require("../controllers/bookmarkController");
router.get("/", bookmarkController.getBookmark);
router.post("/", bookmarkController.addBookmark);
router.delete("/:id", bookmarkController.removeBookmark);
module.exports = router;
