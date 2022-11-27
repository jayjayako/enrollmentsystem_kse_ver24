const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    max: 500,
  },
  servername: {
    type: String,
    required: true,
    min: 1,
  },
  connection: {
    type: String,
    required: true,
    min: 1,
  },
  socketid: {
    type: String,
    required: true,
    min: 1,
  },
});

module.exports = mongoose.model("userconn", userSchema);
