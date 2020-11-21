const express = require('express');

const router = express.Router();

const cartController = require('../controllers/cartController');

// user signs in and cart loads 'get' request

router.get('/:email', cartController.getProductsUserCart, (req, res) => {
  res.status(200).json(res.locals.userCart);
});

// user adds item to cart - 'post' request
router.post('/addCart', cartController.addProductsUserCart, (req, res) => {
  res.status(200).json('it was added to the DB! FUCK YEA!');
});

// // user deletes item from cart - 'delete' request
// router.delete('/', cartController.deleteProductsUserCart, (req, res) => {});

// // user modifies quantity in cart - 'put' request
// router.put('/', cartController.updateItemUserCart, (req, res) => {});

module.exports = router;
