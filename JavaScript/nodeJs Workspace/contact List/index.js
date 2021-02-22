const express = require("express");
const path = require("path");
const port = 8000;

// requiring mongoose
const db = require("./config/mongoose");
const Contact = require("./models/contact");
const app = express();

// we need to tell express that our template engine is ejs
app.set("view engine", "ejs");
// joined the current directory to the views folder
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded()); // this is a middleware

// middleware for assets
app.use(express.static("assets"));

// middleware1
// so we can say that middlewarea are used to manipulate data of req, res
// app.use(function (req, res, next) {
//   myname = "something";
//   next();
// });

// // middleware2
// app.use(function (req, res, next) {
// //   console.log("myname: " + myname);
//   next();
// });

var contactList = [];

app.get("/", function (req, res) {
  Contact.find({}, function (err, contacts) {
    if (err) {
      console.log("Some error in fetching contacts From DB");
      return;
    }

    res.render("home", {
      title: "some ejs idk",
      contact_list: contacts,
    });
  });
});

// using params
app.get("/delete-contact/:_id", function (req, res) {
  let id = req.params._id;

  // Deleting from DataBase
  Contact.deleteOne({ _id: id }, function (err) {
    if (err) {
      console.log("Error occured while deleting from DataBase");
      return;
    }
  });

  //   let contactIndex = 0;
  //   for (let i = 0; i < contactList.length; i++) {
  //     if (contactList[i].phone == phone) {
  //       contactIndex = 1;
  //       break;
  //     }
  //     contactIndex = -1;
  //   }

  // let contactIndex = contactList.findIndex((contact) => {
  //   return contact.phone == phone;
  // });

  // if (contactIndex != -1) {
  //   contactList.splice(contactList, 1);
  // }

  return res.redirect("back");
});

// adding delete functionaly to the contact list

app.post("/create-contact", function (req, res) {
  // req.body will contain all the fields coming from the form

  // creating data in dataBAse

  Contact.create(
    {
      name: req.body.name,
      phone: req.body.phone,
    },
    function (err, newContact) {
      if (err) {
        console.log(err);
        return;
      }
      /*
      console.log("New Contact Created----", newContact);*/
      res.redirect("back");
    }
  );

  // contactList.push(req.body);

  // res.redirect("back");
  //   console.log(req.body);
});

app.listen(port, function (err) {
  if (err) {
    console.log("Some error occcured while starting server");
    return;
  }

  console.log("Server is rup and running on port: " + port);
});
