const express = require("express");
const cors = require("cors");
const { errorHandler } = require("../middleware");
// list of models here
const { Post } = require("../models/post");
const { Comments } = require("../models/comment");
const { User } = require("../models/user");
// list of controllers here
const post = require("../controllers/Post");
const comment = require("../controllers/Comment");
const auth = require("../controllers/auth");
// combine models in one object
const models = { Post, Comments, User };

const routersInit = config => {
  const router = express();

  router.use(cors());
  router.options("*", cors());
  // register api points
  router.use("/posts", post(models, { config }));
  router.use("/comments", comment(models, { config }));
  router.use("/users", auth(models, { config }));
  // catch api all errors
  router.use(errorHandler);
  return router;
};

module.exports = routersInit;
