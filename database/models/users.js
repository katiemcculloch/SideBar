const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING
    },
    pic: {
      type: DataTypes.STRING
    }
  });

  return User;
}

export default user;