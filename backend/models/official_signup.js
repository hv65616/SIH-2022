const mongoose = require("mongoose");
const { Schema } = mongoose;
const Official_Signup_Schema = new Schema({
  username: {
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
  date: {
    type: Date,
    default: Date.now,
  },
});

const Official_Signup = mongoose.model(
  "Official-Signups",
  Official_Signup_Schema
);
module.exports = Official_Signup;
