//Dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const fs = require("fs");

//Setting up Express App
const app = express();
const PORT = process.env.PORT || 3000;
app.use(morgan("dev"));


//Set up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
var bodyParser = require('body-parser');

//db Mongo
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://monik_0491:Fermina04.@ds149742.mlab.com:49742/heroku_0zdllnt8";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


