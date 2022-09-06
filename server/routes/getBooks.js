const express = require('express');
const router = express.Router();

const Book = require('../models/Book')


router.get('/books', async (req,res) => {
    try {
        const myBooks = await Book.find({});
        res.send(myBooks);
    } catch (error) {
        res.send(error)
    }
    
})

module.exports = router;