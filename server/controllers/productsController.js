const db = require('../models/index');

const productsController = {};

productsController.getAllProducts = (req, res, next) => {
  const getProducts = `SELECT * FROM products`;

  db.query(getProducts)
    .then((data) => {
      console.log('this is the data from the products table ', data.rows);
      res.locals.products = data.rows;
    })
    .then(next)
    .catch(() => {
      // next(err)
      next({
        log: `productsController.createUser: ERROR: Error pulling data from the DB.`,
        message: {
          err:
            'Error occurred in productController.getAllProducts. Check server logs for more details.',
        },
      });
    });
};

module.exports = productsController;
