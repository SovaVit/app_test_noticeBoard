const _ = require('lodash');

const update = ({ Post }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  
  try {
    const post = await Post.findOne({ _id });
    _.extend(post, req.body);
    await post.save();
    res.status(200).send({ post });
  } catch (error) {
    next(error);
  }
};

module.exports= { update };
