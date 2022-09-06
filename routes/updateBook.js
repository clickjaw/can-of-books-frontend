express = require("express");
const book = require("../models/Books");
const router = express.Router();

router.put('/:id', async (req, res) => {
    const eyeD = req.params.id;
    try{
        const newBook = await book.findByIdAndUpdate(
            {_id : eyeD},
            req.body,
            {new : true}
        );
        res.send(newBook);
    }catch(error){
        console.log(error);
        res.status(404).send('Unable to update book');
    }
})

module.exports = router;