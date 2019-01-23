const _ = require('lodash');

const list = ({ Comments }, { config }) => async (req, res, next) => {
  let { postId} = req.query;
  try {
    const query = {};
    if (postId) {
      
      _.extend(query, { postId: `${postId}` })
 
    }
    const comment = await Comments.find(query)
      .sort({ _id: -1 });

    res.status(200).send({ comment });
  } catch (error) {
    next(error);
  }
};

module.exports= { list };
