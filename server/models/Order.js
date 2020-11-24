const order = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'open', // "empty" or "open" or "fullfilled"
    },
  });

  Order.associate = (models) => {
    Order.hasMany(models.OrderDetail);
    Order.belongsTo(models.User);
  };

  return Order;
};

module.exports = order;
