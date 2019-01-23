const { NotAcceptable } = require("rest-api-errors");
const { sendOne } = require("../../middleware");
const _ = require("lodash");

const create = ({ Comments }, { config }) => async (req, res, next) => {

  try {
    const comment = new Comments();
    if (!req.body) {
      throw new NotAcceptable(405, "Should by title");
    }
    _.extend(comment, req.body, {createdBy: req.user.id});
    comment.createdAt = new Date().toISOString();
    await comment.save();

    return sendOne(res, { comment });
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
