const { sendOne } = require("../../middleware");
const { MethodNotAllowed, NotAcceptable } = require("rest-api-errors");
const { PASSWORD } = require("../../utilits/regexes");

const changePassword = ({ User }) => async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const { password, newPassword } = req.body;

    if (!user) {
      throw new MethodNotAllowed(405, "Permission denied");
    }
    if (!PASSWORD.test(newPassword)) {
      throw new NotAcceptable(406, "Password is in wrong format.");
    }
    user.changePassword(password, newPassword, (err, user) => {
      if (err) {
        return next(err);
      }
      return sendOne(res, { success: true });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = changePassword;
