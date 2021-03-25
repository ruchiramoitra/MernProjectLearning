const express = require("express"); // framework for node js
const cors = require("cors"); // cross-origin resource sharing middleware which is allows to make requests from one website to another in the browser 
const mongoose = require("mongoose"); // no sql db
const exersisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

require("dotenv").config(); // read from .env files

const app = express(); // create and express app 
const port = process.env.PORT || 5000; // if port mention otherwise 5000

app.use(cors()); // cors will be used
app.use(express.json());  // incoming payload wil be parsed to json
app.use('/exercises',exersisesRouter); // when path/exercise is opened exerciseRouter will be executed 
app.use('/users',usersRouter);

const uri = process.env.ATLAS_URI; // get connection string to connect with mongo db which is in mongo db atlast cloud
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
}); // connect to the url

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongoose database connection established");
}); // check if connection is open

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
}); // listening for connections 
