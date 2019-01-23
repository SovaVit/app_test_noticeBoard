const { sendList } = require("../../middleware/requests-helpers");

const userList = ({ Comments }, { config }) => async (req, res, next) => {
  try {
    const comment = await Comments.find({ createdBy: req.user.id }).sort({ _id: -1 });
    if (!comment) {
      throw new NotFound(404, "User not found");
    }

    sendList(res, { comment });
  } catch (error) {
    next(error);
  }
};

module.exports = { userList };