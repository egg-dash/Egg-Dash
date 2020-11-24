const producttype = (sequelize, DataTypes) => {
  const ProductType = sequelize.define('ProductType', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  ProductType.associate = (models) => {
    ProductType.hasMany(models.Product);
  };

  return ProductType;
};

module.exports = producttype;
