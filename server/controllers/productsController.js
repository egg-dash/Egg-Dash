const db = require('../models/index');
const custController = require('./userController');

const productsController = {};

productsController.getProducts = async (req, res, next) => {
  const { FarmId } = req.params;

  try {
    const result = await db.Product.findAll({ where: { FarmId } });
    res.locals = result.map((product) => {
      const {
        id,
        name,
        description,
        price,
        stock,
        ProductTypeId,
      } = product.dataValues;
      return { id, name, description, price, stock, ProductTypeId };
    });
    next();
  } catch (err) {
    next({
      log: `productsController.getProducts Error: ${err}`,
      status: 500,
      message: { err: 'a database error occured' },
    });
  }
};

productsController.getFarms = async (req, res, next) => {
  try {
    const result = await db.Farm.findAll();
    res.locals = result.map((farm) => {
      const {
        id,
        name,
        description,
        addressStreet,
        addressZip,
        email,
        image,
      } = farm.dataValues;
      return { id, name, description, addressStreet, addressZip, email, image };
    });
    next();
  } catch (err) {
    next({
      log: `productsController.getFarms Error: ${err}`,
      status: 500,
      message: { err: 'a database error occured' },
    });
  }
};

productsController.getTypes = async (req, res, next) => {
  try {
    const result = await db.ProductType.findAll();
    res.locals = result.map((type) => {
      const { id, name, image, catgory, unit } = type.dataValues;
      return { id, name, image, catgory, unit };
    });
    next();
  } catch (err) {
    next({
      log: `productsController.getTypes Error: ${err}`,
      status: 500,
      message: { err: 'a database error occured' },
    });
  }
};

productsController.addProduct = async (req, res, next) => {
  const { FarmId, name, description, price, ProductTypeId } = req.body;
  try {
    db.Product.create({
      FarmId,
      name,
      description,
      price,
      ProductTypeId,
      stock: 0,
    });
    next();
  } catch (err) {
    next({
      log: `productsController.addProduct Error: ${err}`,
      status: 500,
      message: { err: 'a database error occured' },
    });
  }
};

productsController.updateProduct = async (req, res, next) => {
  const { ProductId, name, description, price, ProductTypeId } = req.body;
  try {
    db.Product.update(
      { name, description, price, ProductTypeId },
      { where: { id: ProductId } }
    );
    next();
  } catch (err) {
    next({
      log: `productsController.updateProduct Error: ${err}`,
      status: 500,
      message: { err: 'a database error occured' },
    });
  }
};

productsController.addSupply = async (req, res, next) => {
  const { ProductId, quantity } = req.body;
  try {
    db.Supply.create({ ProductId, quantity });
    db.Product.increment('stock', { by: quantity, where: { id: ProductId } });
    next();
  } catch (err) {
    next({
      log: `productsController.addSupply Error: ${err}`,
      status: 500,
      message: { err: 'a database error occured' },
    });
  }
};

module.exports = productsController;
