const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const bookModel = new mongoose.model("Add Book", bookSchema);

module.exports = bookModel;
