const mongoose = require("mongoose");

// creating a schema for contact
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

// creating a model for above schema
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
