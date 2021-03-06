const express = require("express");
const path = require("path");
const port = 2000;
const app = express();

app.set("view engine", "ejs");

// joining the current directory to the views folder
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());
//middleware for assets
app.use(express.static("assets"));

var tasks = [];

app.get("/", function (req, res) {
  res.render("homePage", {
    task_list: tasks,
  });
});

app.post("/create-todo", function (req, res) {
  tasks.push(req.body);
  res.redirect("back");
});

// get route for deleting todo
app.get("/delete-todo/:id", function (req, res) {
  // console.log(res.locals);
  console.log(req.params.id);
});

app.listen(port, function () {
  console.log("Server is up and running on port: " + port);
});
