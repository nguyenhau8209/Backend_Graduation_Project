module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "default123@example.com",
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Users;
};
