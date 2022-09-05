express = require("express");
const book = require("../models/Books");
const router = express.Router();

router.delete("/books/:id", async (req, res) => {
  try {
    let toDeleteId = req.params.id;

    await book.deleteOne({ _id: { $eq: toDeleteId } });
    res.status(200).send("Book deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(404).send("Unable to find and delete book");
  }
});

module.exports = router;
