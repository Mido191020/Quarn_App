const { error } = require("winston");
const Bookmarks = require("../models/bookmarkModels");
exports.addBookmark = async (req, res) => {
  try {
    const { surahNumber, ayahNumber, note } = req.body;
    if (!surahNumber || !ayahNumber) {
      return res
        .status(400)
        .json({ error: "surahNumber and ayahNumber are required" });
    }
    const userId = req.user._id;
    const newBookmark = await Bookmarks.create({
      userId,
      surahNumber,
      ayahNumber,
      note,
    });
    res.status(201).json(newBookmark);
  } catch (err) {
    res.status(500).json({ error: "Failed to add bookmark" });
  }
};
exports.getBookmark = async (req, res) => {
  try {
    const userId = req.user._id;
    const bookmarks = await Bookmarks.find({ userId });
    res.status(200).json(bookmarks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bookmarks" });
  }
};
exports.removeBookmark = async (req, res) => {
  try {
    //why {}?
    const { id } = req.params;
    const userId = req.user._id;
    await Bookmarks.findOneAndDelete({ _id: id, userId });
    res.status(200).json({ message: "Bookmark removed" });
  } catch (err) {
    res.status(500).json({ error: "Failed to remove bookmark" });
  }
};
