const mongoose = require("mongoose");

// connecting to the database
mongoose.connect("mongodb://localhost/contact_list_db");

// acquiring the connection
const db = mongoose.connection;

// handle if there's an error in connecting to db
db.on("error", console.error.bind(console, "Error Connecting to db"));

// if db is connected successfully
db.once("open", function () {
  console.log("db is connected successfully!");
});
