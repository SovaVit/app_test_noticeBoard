const _ = require("lodash");

const update = ({ Comments }, { config }) => async (req, res, next) => {
  const { _id } = req.params;

  try {
    const comment = await Comments.findOne({ _id });
    _.extend(comment, req.body);
    await comment.save();
    res.status(200).send({ comment });
  } catch (error) {
    next(error);
  }
};

module.exports = { update };
