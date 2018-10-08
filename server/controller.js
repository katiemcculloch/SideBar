const Sequelize = require("sequelize");

const { Comments, Users, Songs, Playlist } = require("../database/models.js");

module.exports = {
  users: {
    get: (req, res) => {
      Users.findAll({
        limit: 9
      })
        .then(data => {
          res.status(200).send(data);
        })
        .catch(err => {
          console.log("User retrieval error", err);
        });
    }
  },
  usersPlaylists: {
    get: (req, res) => {
      console.log(req.params);
      Playlists.findOne({});
    }
  },
  userPlaylistSongs: {
    get: (req, res) => {}
  }
};

// module.exports = {
//   relatedTracks: {
//     get: (req, res) => {
//       console.log("songs get");
//       // const { tags } = req.query;
//       Songs.findById(9000000)
//         // order: [[Sequelize.fn("RANDOM")]],
//         // limit: 3
//         // })
//         .then(tracks => {
//           if (tracks) {
//             res.status(200).send(tracks);
//           } else {
//             res.status(404).send("tracks get error");
//           }
//         })
//         .catch(err => res.status(404).send(err));
//     }
//   },
//   playlists: {
//     get: (req, res) => {
//       console.log("playlists get");
//       // implement checking which playlists they're in
//       Playlist.findAll({
//         order: [[Sequelize.fn("RANDOM")]],
//         limit: 3
//       })
//         .then(lists => {
//           if (lists) {
//             res.status(200).send(lists);
//           } else {
//             res.status(404).send("lists get error");
//           }
//         })
//         .catch(err => res.status(404).send(err));
//     }
//   },
//   usersLiked: {
//     get: (req, res) => {
//       console.log("users who liked get");
//       Users.findAll({
//         order: [[Sequelize.fn("RANDOM")]],
//         limit: 9
//       })
//         .then(users => {
//           if (users) {
//             res.status(200).send(users);
//           } else {
//             res.status(404).send("users get error");
//           }
//         })
//         .catch(err => res.status(404).send(err));
//     }
//   },
//   usersReposts: {
//     get: (req, res) => {
//       console.log("users who reposted get");
//       Users.findAll({
//         order: [[Sequelize.fn("RANDOM")]],
//         limit: 9
//       })
//         .then(users => {
//           if (users) {
//             res.status(200).send(users);
//           } else {
//             res.status(404).send("users get error");
//           }
//         })
//         .catch(err => res.status(404).send(err));
//     }
//   }
// };


// WITH RECURSIVE search_graph(id, link, data, depth) AS (
//   SELECT g.id, g.link, g.data, 1
//   FROM graph g
// UNION ALL
//   SELECT g.id, g.link, g.data, sg.depth + 1
//   FROM graph g, search_graph sg
//   WHERE g.id = sg.link
// )
// SELECT * FROM search_graph;

WITH RECURSIVE songs(id, title, artist, media, album_art, tags) AS (
  SELECT u.id, u.username, u.pic 
  FROM users u
  UNION ALL 
    SELECT p.title, p.cover_art, p.likes, p.reposts, p.userid
    FROM playlists p 
    JOIN users u ON (p.userid = u.id)
    WHERE u.id = p.userid
  UNION ALL
    SELECT s.id, s.title, s.artist, s.media, s.album_art, s.tags
    FROM songs s
    JOIN songs_playlists sp ON (s.id = sp.songId)
    WHERE sp.playlistId = p.id
)
SELECT * from songs limit(1);