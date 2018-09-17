const song = (sequelize, DataTypes) => {
  const Song = sequelize.define('song', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING
    },
    artist: {
      type: DataTypes.STRING
    },
    media : {
      type: DataTypes.STRING
    },
    album_art: {
      type: DataTypes.STRING
    },
    tags: {
      type: DataTypes.STRING
    },
    likes: {
      type: DataTypes.INTEGER
    },
    reposts: {
      type: DataTypes.INTEGER
    },
    comments_number: {
      type: DataTypes.INTEGER
    }
  });

  return Song;
}

export default song;