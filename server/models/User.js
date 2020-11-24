const user = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressStreet: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressZip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accountType: {
      type: DataTypes.STRING, // "customer" or "merchant"
      allowNull: false,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Order);
    User.hasMany(models.Farm);
  };

  return User;
};

module.exports = user;
