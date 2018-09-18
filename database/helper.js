const commentsData = require('../data/CommentsMockData.json');
const usersData = require('../data/UsersMockData.json');
const playlistsData = require('../data/PlaylistsMockData.json');
const songsData = require('../data/SongsMockData.json');

const Sequelize = require('sequelize');

const { 
  Comments,
  Users,
  Song,
  Playlist 
} = require('./models.js');

// const insertComments = (commentsData) => {
//   commentsData.forEach(commentData => {
//     let counter = 0;
//     Comments.create({
//       id: commentData.id,
//       text: commentData.text,
//       song_time: commentData.song_time,
//       time_created: commentData.time_created,
//       replies_id: commentData.replies_id,
//       UserId: commentData.UserId
//     })
//     .then(comment => {
//       counter++;
//       console.log("Mock comments loaded to DB", counter, comment.dataValues);
//     })
//     .catch(err => {
//       console.log("err loading comments to DB", err);
//     });
//   });
// };

// const insertUsers = (usersData) => {
//   let counter = 0;
//   usersData.forEach(userData => {
//     Users.create({
//       id: userData.id,
//       username: userData.username,
//       pic: userData.pic
//     })
//       .then(user => {
//         counter++;
//         console.log("Mock comments loaded to DB", counter, user.dataValues);
//       })
//       .catch(err => {
//         console.log("err loading comments to DB", err);
//       });
//   });
// };

// const insertPlaylists = (playlistsData) => {
//   playlistsData.forEach(playlistData => {
//     let counter = 0;
//     Playlist.create({
//       id: playlistData.id,
//       username: playlistData.user,
//       title: playlistData.title,
//       cover_art: playlistData.cover_art,
//       likes: playlistData.likes,
//       reposts: playlistData.reposts    
//     })
//     .then(playlist => {
//       counter++;
//       console.log("Mock comments loaded to DB", counter, playlist.dataValues);
//     })
//     .catch(err => {
//       console.log("err loading comments to DB", err);
//     });
//   });
// };

// const insertSongs = (songsData) => {
//   songsData.forEach(songData => {
//     let counter = 0;
//     Song.create({
//       id: songData.id,
//       artist: songData.artist,
//       media: songData.media,
//       album_art: songData.album_art,
//       tags: songData.tags,
//       // // to update dbdata and implement later
//       // likes: song.likes,
//       // reposts: song.reposts,
//       // comments_number: song.comments_number,
//     })
//     .then(song => {
//       counter++;
//       console.log("Mock comments loaded to DB", counter, plsongaylist.dataValues);
//     })
//     .catch(err => {
//       console.log("err loading comments to DB", err);
//     });
//   });
// };

// insertComments(commentsData);
// insertUsers(usersData);
// insertPlaylists(playlistsData);
// insertSongs(songsData);