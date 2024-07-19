const addBookmark = async (surahNumber, ayahNumber) => {
  try {
    const response = await axios.post("/bookmarks", {
      surahNumber,
      ayahNumber,
    });
    alert("Bookmark added successfully");
    // Optionally, update the button or UI to reflect the bookmark status
  } catch (error) {
    console.error("Error adding bookmark", error);
    alert("Failed to add bookmark");
  }
};

const removeBookmark = async (id) => {
  try {
    await axios.delete(`/bookmarks/${id}`);
    alert("Bookmark removed successfully");
    // Optionally, update the button or UI to reflect the bookmark status
  } catch (error) {
    console.error("Error removing bookmark", error);
    alert("Failed to remove bookmark");
  }
};
