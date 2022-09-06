"use strict";

require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json())
const mongoose = require("mongoose")

const PORT = 3002;
const getBooks = require("./routes/getBooks.js");
const bookPostRoute = require("./routes/bookPostRoute");
const bookRemoveRoute = require("./routes/bookRemoveRoute");
const home = require("./routes/home");

mongoose.connect(process.env.MERNDB_URL, ()=>{
  console.log('Connected to MongoDB');
},
err=>console.log(err))

app.use(home);
app.use(getBooks);
app.use(bookPostRoute);
app.use(bookRemoveRoute);



app.listen(PORT, () => console.log(`listening on ${PORT}`));
