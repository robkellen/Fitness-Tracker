//import dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

//construct our server
const PORT = process.env.PORT || 8080;

app.use(logger("dev"));

app.use(require("./routes"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//connect to our server
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//start the server
app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});
