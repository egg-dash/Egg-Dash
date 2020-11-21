const db = require('../../db/db.js');

const cartController = {};

// user signs in and cart loads 'get' request
cartController.getProductsUserCart = (req, res, next) => {
  // console.log(req.params, 'req.params');
  const { email } = req.params;
  const userCartQuery = `
SELECT *
FROM (SELECT c.product_id AS productId, c.id AS cartId, c.customer_id AS custId, 
 p.name, p.description, p.pictureurl, p.type, p.price, p.farm_id
FROM cart AS c
LEFT OUTER JOIN products AS p
ON c.product_id = p.id) AS i
LEFT JOIN customers AS cust
ON i.custid = cust.id
WHERE cust.email = '${email}';
	`;

  db.query(userCartQuery)
    .then((data) => {
      // console.log(`this is the data from the user's CART: `, data.rows);
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
cartController.addProductsUserCart = (req, res, next) => {
  const { customer_id, product_id, quantity } = req.body;
  const addCart = `
SELECT *
FROM (SELECT c.product_id AS productId, c.id AS cartId, c.customer_id AS custId, 
 p.name, p.description, p.pictureurl, p.type, p.price, p.farm_id
FROM cart AS c
LEFT OUTER JOIN products AS p
ON c.product_id = p.id) AS i
LEFT JOIN customers AS cust
ON i.custid = cust.id
WHERE cust.email = '${email}';
	`;

  db.query(userCartQuery)
    .then((data) => {
      // console.log(`this is the data from the user's CART: `, data.rows);
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

// user deletes item from cart - 'delete' request
cartController.deleteProductsUserCart = (req, res, next) => {};

// user modifies quantity in cart - 'put' request
cartController.updateItemUserCart = (req, res, next) => {};

module.exports = cartController;
