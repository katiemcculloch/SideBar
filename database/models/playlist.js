const playlist = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('playlist', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
    },
    likes: {
      type: DataTypes.INTEGER
    }
  })
}