const { sendOne } = require('../../middleware');

const signIn = (req, res) => {
  const { token, user } = req;
  return sendOne(res, { user: user.toAuthJSON(), token});
};

module.exports = signIn;
