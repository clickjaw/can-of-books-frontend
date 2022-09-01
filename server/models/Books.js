const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
});

const bookModel = new mongoose.model('toDoList',bookSchema);

module.exports = bookModel;