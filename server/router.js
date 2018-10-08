const router = require("express").Router();
const controller = require("./controller.js");

router.route("/users").get(controller.users.get);

router.route("/users/:id/playlists/").get(controller.usersPlaylists.get);

router
  .route("/users/:id/playlists/:id/songs")
  .get(controller.userPlaylistSongs.get);

// router
//   .route('/relatedTracks')
//   .get(controller.relatedTracks.get)

// router
//   .route('/playlists')
//   .get(controller.playlists.get)

// router
//   .route('/usersLiked')
//   .get(controller.usersLiked.get)

// router
//   .route('/usersReposts')
//   .get(controller.usersReposts.get)

module.exports = router;
