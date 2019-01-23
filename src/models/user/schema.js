const mongoose = require("mongoose");
const { EMAIL } = require("../../utilits/regexes");

const Schema = mongoose.Schema;

const schema = new Schema({
  email: {
    type: String,
    required: [true],
    unique: true,
    validate: {
      validator: email => EMAIL.test(email),
      message: "Field [email] wrong format."
    }
  },
  name: {
    type: String,
    required: [true]
  }
  // profile: {
  //   fullName: {
  //     type: String,
  //     required: [true]
  //   }
  // }
});
schema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    name: this.name
  };
};
module.exports = { schema };
