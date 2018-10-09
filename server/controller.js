const Sequelize = require("sequelize");
var sequelize = new Sequelize("starkloud", "", "", { dialect: "postgres" });

const {
  SongsPlaylists,
  Users,
  Songs,
  Playlists
} = require("../database/models.js");

module.exports = {
  users: {
    get: (req, res) => {
      Users.findAll({
        order: [[Sequelize.fn("RANDOM")]],
        limit: 9
      })
        .then(data => {
          // console.log(data);
          res.status(200).send(data);
        })
        .catch(err => {
          console.log("User retrieval error", err);
        });
    }
  },
  usersPlaylists: {
    get: (req, res) => {
      var userId = req.params.id;
      sequelize
        .query(
          `SELECT * FROM Playlists a JOIN users b ON (a.userId = b.id) WHERE b.id = ${userId} LIMIT(3) `,
          { type: Sequelize.QueryTypes.SELECT }
        )
        .then(data => {
          res.send(data);
        });
    }
  },
  userPlaylistSongs: {
    get: (req, res) => {}
  }
};
