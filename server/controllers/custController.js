const db = require('../../db/db.js');

const custController = {};

// create new customer login
// custController.createUser = (req, res, next) => {};

// customer signs in and cart loads 'get' request
custController.verifyCust = (req, res, next) => {
  const { email, password } = req.body;
  console.log('this is the request body: ', req.body);
  const allCusts = `SELECT * FROM customers WHERE email='${email}'`;
  db.query(allCusts)
    .then((data) => {
      console.log('this is the data from the customer ', data.rows);
      if (data.rows[0].password === password) {
        res.locals.allCusts = data.rows;
      }
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

module.exports = custController;
