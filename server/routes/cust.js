const express = require('express');

const router = express.Router();

const custController = require('../controllers/custController');
// const cartController = require('../controllers/cartController');

// customer create login
// router.post('/signup', custController.createUser, (req, res) => {});

// customer signs in and cart loads 'get' request
router.post('/', custController.verifyCust, (req, res) => {
  res.status(200).json(res.locals.allCusts);
});

// customer deletes their login (Stretch feature)
// router.delete('/', custController.deleteUser, (req, res) => {});

// // user modifies quantity in cart - 'put' request
// router.put('/', custController.updateCustInfo, (req, res) => {});

module.exports = router;
