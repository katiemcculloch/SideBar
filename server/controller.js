const Sequelize = require("sequelize");
var sequelize = new Sequelize("starkloud", "", "", { dialect: "postgres" });

const {
  SongsPlaylists,
  Users,
  Songs,
  Playlists
} = require("../database/models.js");

const { Pool } = require("pg");
const pool = new Pool({
  user: "",
  host: "localhost",
  database: "starkloud",
  port: 5432
});

module.exports = {
  sidebar: {
    get: (req, res) => {
      pool
        .query(
          "SELECT * FROM users WHERE id IN (floor(random()*1000+1), floor(random()*1000+1),floor(random()*1000+1), floor(random()*1000+1), floor(random()*1000+1), floor(random()*1000+1), floor(random()*1000+1), floor(random()*1000+1), floor(random()*1000+1)) LIMIT(9)"
        )
        .then(users => {
          pool
            .query(
              `SELECT * FROM Playlists a JOIN users b ON (a.userId = b.id) WHERE b.id = ${
                users["rows"][0].id
              } LIMIT(3)`
            )
            .then(playlists => {
              pool
                .query(
                  `SELECT * FROM songs a JOIN songs_playlists b ON (a.id = b."songId") WHERE b."playlistId" = ${
                    playlists["rows"][0].id
                  } LIMIT(3) `
                )
                .then(songs => {
                  res.status(200).send({
                    user: users["rows"],
                    playlists: playlists["rows"],
                    songs: songs["rows"]
                  });
                })
                .catch(err => {
                  console.log("error getting playlists", err);
                });
            })
            .catch(err => {
              console.log("error getting playlists", err);
            });
        })
        .catch(err => {
          console.log("error getting users", err);
        });
    }
  },

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
      // console.log(req.params, "req params UP");
      sequelize
        .query(
          `SELECT * FROM Playlists a JOIN users b ON (a.userId = b.id) WHERE b.id = ${userId} LIMIT(3) `,
          { type: Sequelize.QueryTypes.SELECT }
        )
        .then(data => {
          res.status(200).send(data);
        });
    }
  },
  userPlaylistSongs: {
    get: (req, res) => {
      console.log("hi");
      var playlistId = req.params.playlistId;
      console.log(req.params, "paramsss");
      sequelize
        .query(
          `SELECT * FROM songs a JOIN songs_playlists b ON (a.id = b."songId") WHERE b."playlistId" = ${playlistId} LIMIT(3) `,
          { type: Sequelize.QueryTypes.SELECT }
        )
        .then(songs => {
          console.log(songs);
          res.status(200).send(songs);
        });
    }
  }
};

// const { Pool } = require('pg')
// const pool = new Pool()

// (async () => {
//   // note: we don't try/catch this because if connecting throws an exception
//   // we don't need to dispose of the client (it will be undefined)
//   const client = await pool.connect()

//   try {
//     await client.query('BEGIN')
//     const { rows } = await client.query('INSERT INTO users(name) VALUES($1) RETURNING id', ['brianc'])

//     const insertPhotoText = 'INSERT INTO photos(user_id, photo_url) VALUES ($1, $2)'
//     const insertPhotoValues = [res.rows[0].id, 's3.bucket.foo']
//     await client.query(insertPhotoText, insertPhotoValues)
//     await client.query('COMMIT')
//   } catch (e) {
//     await client.query('ROLLBACK')
//     throw e
//   } finally {
//     client.release()
//   }
// })().catch(e => console.error(e.stack))
