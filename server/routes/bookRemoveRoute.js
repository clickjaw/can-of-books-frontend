const express = require('express')
const router = express.Router()
const Book = require('../models/Book')

router.delete('/books/:id', async(req,res)=>{


  try {
    let toDeleteId = req.params.id

    await Book.deleteOne({_id: {$eq: toDeleteId}})

    res.status(200).send('Book deleted')
  } catch (error) {
    console.log(error.message)
    res.send(error)
  }
})

module.exports = router