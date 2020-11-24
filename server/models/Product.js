const product = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER, // In pennies.
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
  });

  Product.associate = (models) => {
    Product.belongsTo(models.ProductType);
    Product.belongsTo(models.Farm);
    Product.hasMany(models.Supply);
    Product.hasMany(models.OrderDetail);
  };

  return Product;
};

module.exports = product;
