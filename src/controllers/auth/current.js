const { sendOne } = require("../../middleware");
const { NotFound } = require("rest-api-errors");

const current = ({ User }) => async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      throw new NotFound(404, "User not found");
    }
    return sendOne(res, { user });
  } catch (error) {
    next(error);
  }
};

module.exports = current;
