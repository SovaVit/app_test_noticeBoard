const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const schema = new Schema({
  title: {
    type: String,
    required: [true]
  },
  description: {
    type: String,
    required: [true]
  },
  createdAt: {
    type: Date,
    required: [true]
  },
  name: {
    type: String,
    required: [true]
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = { schema };
