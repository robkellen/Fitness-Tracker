//import dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const router = require("express").Router();

const app = express();


const PORT = process.env.PORT || 8080;

//connect to server
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
// app.use(express.Router);

//import routes
app.use(require("./routes"));

//start the server
app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});
