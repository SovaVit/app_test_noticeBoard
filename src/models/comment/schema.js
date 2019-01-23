const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const schema = new Schema({
  name: {
    type: String,
    required: [true]
  },
  description: {
    type: String,
    required: [true]
  },
  email: {
    type: String,
    required: [true]
  },
  createdAt: {
    type: Date,
    required: [true]
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: [true]
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = { schema };
