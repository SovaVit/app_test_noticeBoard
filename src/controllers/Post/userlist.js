const { sendList } = require("../../middleware/requests-helpers");

const userList = ({ Post }, { config }) => async (req, res, next) => {
  try {
    const post = await Post.find({ createdBy: req.user.id }).sort({ _id: -1 });
    if (!post) {
      throw new NotFound(404, "User not found");
    }

    sendList(res, { post });
  } catch (error) {
    next(error);
  }
};

module.exports = { userList };
