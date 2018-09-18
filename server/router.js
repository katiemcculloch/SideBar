const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/relatedTracks')
  .get(controller.relatedTracks.get)

router
  .route('/playlists')
  .get(controller.playlists.get)

router
  .route('/usersLiked')
  .get(controller.usersLiked.get)

router
  .route('/usersReposts')
  .get(controller.relatedTracks.get)

module.exports = router;