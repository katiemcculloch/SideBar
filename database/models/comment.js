const comment = (sequelize, DataTypes) => {
  const Comment = sequelize.define('comment', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true
    },
    text: {
      type: DataTypes.STRING
    },
    song_time: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER
    },
    time_created: {
      type: DataTypes.STRING,
    },
    replies_id : {
      type: DataTypes.INTEGER,
    }
  });

  return Comment;
}

export default comment;