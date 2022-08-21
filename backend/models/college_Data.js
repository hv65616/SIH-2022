const mongoose = require("mongoose");
const { Schema } = mongoose;
const College_Data_Schema = new Schema({
  universityname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  geolocation: [
    {
      type: String,
      required: true,
      unique: true,
    },
  ],
  contact: {
    type: Number,
    required: true,
  },
  faxnumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  website: {
    type: String,
    required: true,
  },
  programmes: [
    {
      type: String,
      required: true,
    },
  ],
  aicte: {
    type: String,
    required: true,
  },
  nba: {
    type: String,
    required: true,
  },
  naac: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const College_Data = mongoose.model(
  "Colleges-Data",
  College_Data_Schema
);
module.exports = College_Data;
