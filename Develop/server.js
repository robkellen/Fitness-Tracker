//import dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//establish which port we'll use for our connection to the server
const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//connect to our server
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", {
  useNewUrlParser: true,
});







//start the server
app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});