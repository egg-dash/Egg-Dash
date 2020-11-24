const farm = (sequelize, DataTypes) => {
  const Farm = sequelize.define('Farm', {
    name: {
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Farm.associate = (models) => {
    Farm.hasMany(models.Order);
    Farm.belongsTo(models.User);
  };

  return Farm;
};

module.exports = farm;
