const mongoose = require('mongoose');
const { schema } = require('./schema');
const Post = mongoose.model('Post', schema);


module.exports = { Post };