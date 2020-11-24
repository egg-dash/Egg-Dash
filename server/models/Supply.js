const supply = (sequelize, DataTypes) => {
  const Supply = sequelize.define('Supply', {
    date: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.NOW,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });

  Supply.associate = (models) => {
    Supply.belongsTo(models.Product);
  };

  return Supply;
};

module.exports = supply;
