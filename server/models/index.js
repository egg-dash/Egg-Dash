const { Sequelize, DataTypes } = require('sequelize');
const User = require('./User');
const Farm = require('./Farm');
const Order = require('./Order');
const OrderDetail = require('./OrderDetail');
const Product = require('./Product');
const ProductType = require('./ProductType');
const Supply = require('./Supply');

const db = {};

// cloud database. uncomment to use
// const { PG_URI } = process.env;
// const sequelize = new Sequelize(PG_URI);

// local database. uncomment to use
const sequelize = new Sequelize('eggdash-test', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});

// Test db.

async function test() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
test();

// add models to db object
db.User = User(sequelize, DataTypes);
db.Farm = Farm(sequelize, DataTypes);
db.Order = Order(sequelize, DataTypes);
db.OrderDetail = OrderDetail(sequelize, DataTypes);
db.Product = Product(sequelize, DataTypes);
db.ProductType = ProductType(sequelize, DataTypes);
db.Supply = Supply(sequelize, DataTypes);

// creates associate properties on the database object itself
Object.keys(db).forEach((key) => {
  if ('associate' in db[key]) {
    db[key].associate(db);
  }
});

db.sequelize = sequelize;
// db.Sequelize = Sequelize; // probably we don't need

module.exports = db;
