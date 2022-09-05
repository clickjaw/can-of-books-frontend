express = require("express");
const book = require("../models/Books");
const router = express.Router();

router.post("/new-book", async (req, res) => {
  try {
    const newBook = await book.create(req.body);
    res.send(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating Book");
  }
});

module.exports = router;
