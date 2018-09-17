const Sequelize = require('sequelize');

const sequelize = new Sequelize('starkloud', '', '', {
  dialect: 'postgres'
});

const models = {
  Song: sequelize.import('../database/models/song.js'),
  Playlist: sequelize.import('../database/models/playlist.js'),
  User: sequelize.import('../database/models/playlist.js'),
  Comment: sequelize.import('../database/models/comment.js')
}

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;

