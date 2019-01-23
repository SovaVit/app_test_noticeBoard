const remove = ({ Post }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const post = await Post.findOne({ _id });
    await Post.deleteOne({ _id });
    //await Post.remove({ _id });
    res.status(200).send({ post });
  } catch (error) {
    next(error);
  }
};

module.exports = { remove };
