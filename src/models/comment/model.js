const mongoose = require("mongoose");
const { schema } = require("./schema");
const Comments = mongoose.model("Comments", schema);

module.exports = { Comments };
