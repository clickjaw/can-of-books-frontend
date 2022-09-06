const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

bookSchema.statics.deleteById = function(_id) {
  return this.deleteOne({ _id: _id })
};

const bookModel = mongoose.model('Book', bookSchema)

module.exports = bookModel