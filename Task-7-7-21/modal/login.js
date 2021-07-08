// import the mongoose package
const mongoose = require("mongoose");

// create a Schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone_no: {
    type: Number,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
  },
});

// export the model
module.exports = mongoose.model("login", UserSchema, "User");
