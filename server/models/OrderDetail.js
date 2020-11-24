const orderdetail = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define('OrderDetail', {
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    unitPrice: {
      type: DataTypes.INTEGER,
      defaultValue: 0, // In Pennies.
    },
  });

  OrderDetail.associate = (models) => {
    OrderDetail.belongsTo(models.Order);
    OrderDetail.belongsTo(models.Product);
  };

  return OrderDetail;
};

module.exports = orderdetail;
