const router = require("express").Router();
const controller = require("./controller.js");

router.route("/sideBar").get(controller.sidebar.get);

router.route("/users").get(controller.users.get);

router.route("/users/:id/playlists/").get(controller.usersPlaylists.get);

router
  .route("/users/:id/playlists/:playlistId/songs")
  .get(controller.userPlaylistSongs.get);

module.exports = router;
