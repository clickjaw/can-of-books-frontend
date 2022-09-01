express = require('express');
const book = require('../models/Books')
const router = express.Router();


router.get('/books', async (req,res) => {
    const myBooks = await book.find({});
    res.send(myBooks);
})

module.exports = router;