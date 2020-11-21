const db = require('../../db/db.js');

const cartController = {};

// user signs in and cart loads 'get' request
cartController.getProductsUserCart = (req, res, next) => {
  const userCartQuery = `
  SELECT *, from cart
	`;

  db.query(userCartQuery)
    .then((data) => {
      console.log(data.rows);
      res.locals.userCart = data.rows;
    })
    .then(next)
    .catch(() => {
      // next(err)
      next({
        log: `cartController.getProductsUserCart: ERROR: Error getting the user's cart from database`,
        message: {
          err:
            'Error occurred in cartController.getProductsUserCart. Check server logs for more details.',
        },
      });
    });
};

// user adds item to cart - 'post' request
cartController.addProductsUserCart = (req, res, next) => {};

// user deletes item from cart - 'delete' request
cartController.deleteProductsUserCart = (req, res, next) => {};

// user modifies quantity in cart - 'put' request
cartController.updateItemUserCart = (req, res, next) => {};

module.exports = cartController;
