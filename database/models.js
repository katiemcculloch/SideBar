const Sequelize = require("sequelize");
const connection = require("./index.js");

//COMMENTS
const Comments = connection.define(
  'comments',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    text: {
      type: Sequelize.STRING,
      allowNull: false
    },
    song_time: {
      type: Sequelize.STRING,
      allowNull: false
    },
    time_created: {
      type: Sequelize.STRING,
      allowNull: false
    },
    replies_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  },
  { timestamps: false }
); 

//USERS
const Users = connection.define(
  'users',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    pic: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  { timestamps: false }
);

//SONGS
const Song = connection.define(
  'songs', 
  {
    id: {
      type: Sequelize.INTEGER,
      unique: true,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING
    },
    artist: {
      type: Sequelize.STRING
    },
    media : {
      type: Sequelize.STRING
    },
    album_art: {
      type: Sequelize.STRING
    },
    tags: {
      type: Sequelize.STRING
    },
    // // to update dbdata and implement later
    //   likes: {
    //     type: Sequelize.INTEGER
    //   },
    //   reposts: {
    //     type: Sequelize.INTEGER
    //   },
    //   comments_number: {
    //     type: Sequelize.INTEGER
    //   }
  },
  { timestamps: false }
);


const Playlist = connection.define('playlist', 
  {
    id: {
      type: Sequelize.INTEGER,
      unique: true,
      primaryKey: true
    },
    user: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    },
    cover_art: {
      type: Sequelize.STRING
    },
    likes: {
      type: Sequelize.INTEGER
    },
    reposts: {
      type: Sequelize.INTEGER
    }
  },
  { timestamps: false }
);
Users.hasMany(Comments);
Comments.belongsTo(Users);

// connection.sync({ force: false }); //remove force: false after initial schema is finalized

module.exports = {
  Comments,
  Users,
  Song,
  Playlist
}; 