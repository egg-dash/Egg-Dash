const express = require('express');

const router = express.Router();

const cartController = require('../controllers/cartController');

// user signs in and cart loads 'get' request

router.get('/', cartController.getProductsUserCart, (req, res) => {
  res.status(200).json(res.locals.userCart);
});

// user adds item to cart - 'post' request
// router.post('/', cartController.addProductsUserCart, (req, res) => {});

// // user deletes item from cart - 'delete' request
// router.delete('/', cartController.deleteProductsUserCart, (req, res) => {});

// // user modifies quantity in cart - 'put' request
// router.put('/', cartController.updateItemUserCart, (req, res) => {});

module.exports = router;
