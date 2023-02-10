// Example User Model here

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: String,
});

const UserModel = mongoose.model("user", userSchema); // mongoDB will pluralize string and use it as COLLECTION NAME

module.exports = UserModel;
