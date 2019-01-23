const get = ({ Comments }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const comment = await Comments.findOne({ _id });
    res.status(200).send({ comment });
  } catch (error) {
    next(error);
  }
};

module.exports= { get };
