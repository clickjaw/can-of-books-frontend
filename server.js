'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookModel = require('./models/Books');
const getBooks = require('./routes/getBooks');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MERNDB_URL)
  .then(() => console.log("Connected to Mongoose"))
  .catch((err) => console.log(err));


app.get('/test', (request, response) => {

  response.send('test request received')

})

const bookData = async (req, res) => {
  try {
    let book1 = new bookModel({
      title: "Pig Can Fly",
      description: "Flying Pigs",
      status: "Sold Out"
    })
    let book2 = new bookModel({
      title: "The Fastest Runner",
      description: "The Fastest Runner That ever Lived",
      status: "InStock"
    })
    let book3 = new bookModel({
      title: "Best Meals Every Made",
      description: "A book of home cooked meals",
      status: "2 Left"
    })
    await book1.save()
    await book2.save()
    await book3.save()
  } catch (error) {
    console.log(error);
}
}
bookData();

app.use(getBooks)
app.listen(PORT, () => console.log(`listening on ${PORT}`));
