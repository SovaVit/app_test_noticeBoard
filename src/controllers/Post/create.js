const { NotAcceptable } = require("rest-api-errors");
const { sendOne } = require("../../middleware");
const _ = require("lodash");

const create = ({ Post }, { config }) => async (req, res, next) => {
  try {
    const post = new Post();
    if (!req.body) {
      throw new NotAcceptable(405, "Should by title");
    }
    _.extend(post, req.body,{createdBy: req.user.id});
    post.createdAt = new Date().toISOString();
    await post.save();

    return sendOne(res, { post });
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
