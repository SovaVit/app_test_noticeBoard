const { sendOne } = require("../../middleware");

const signOut = (req, res) => {
  req.logOut();
  sendOne(res, { success: true });
};

module.exports = signOut;
