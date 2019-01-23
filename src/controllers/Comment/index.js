const { Router: router } = require('express');
const { authenticate} = require("../../middleware");
const { get } = require('./get');
const { list } = require('./list');
const { create } = require('./create');
const { update } = require('./update');
const { remove } = require('./remove');
const {userList} = require('./userlist');


/**
 * Provide api for posts
 *
 *
 * GET /api/comment/ - List
     @header
            Authorization: Bearer {token}
 **/

module.exports = (models, { config }) => {
  const api = router();

  api.get('/', list(models, { config }));
  api.get("/usercomments", authenticate, userList(models, { config }));
  api.get('/:_id', get(models, { config }));
  api.post('/', authenticate, create(models, { config }));
  api.patch('/:_id', update(models, { config }));
  api.delete('/:_id', remove(models, { config }));

  return api;
};