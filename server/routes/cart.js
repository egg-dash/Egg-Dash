const express = require('express');

const router = express.Router();

const cartController = require('../controllers/cartController');

// user signs in and cart loads 'get' request
/**
 * When it is triggered: when a customer logs in
 * What it does: checks to see if an open order exists
 * sample request data from frontend: just req.params.userid
 * sample response data after controllers: 
 * const data = {
  farmId: 'Welsh Farms',
  products: [
    { 
      orderDetailId: 12,
      name: 'large brown egg (cage-free)',
      description: 'seriously the best eggs evah',
      unitPrice: 400,
      quantity: 3,
      productTypeName: 'egg',
      category: 'dairy/egg',
    },
    {
      
      orderDetailId: 14,
      name: 'chicken',
      description: 'delicious home cooked chicken',
      unitPrice: 750,
      quantity: 1,
      productTypeName: 'chicken',
      category: 'poultry',
    }
  ]
},

const data = {
  farmId: null,
  products: []
}
 * 
 * 
 */

router.get(
  '/:userId',
  /* TODO: add controllers */ (req, res) => {
    res.status(200).json(res.locals);
  }
);

// Farm Id is null.
/**
 * When it is triggered: when the get request (trying to find active order for user), returns farmId: null;
 * What it does: creates a new open order associated with the user
 * sample request data from frontend: req.params.userId
 * sample response data after controllers: just a status code 200
 *
 *
 */

router.post(
  '/:userId',
  /* TODO: add controllers */ (req, res) => {
    res.sendStatus(200);
  }
);

// user adds an item to order
/**
 * When it is triggered: customer adds product to cart/order
 * What it does: creates a new order detail associated with users' current order
 * sample request data from frontend: 
  const data = {
  productId: 1,
  quantity: 3,
  unitPrice: 500,
  userId: 4,
  }
 * sample response data after controllers: just a status code 200
 * 
 * 
 */

// user adds item to cart - 'post' request
router.post(
  '/add',
  /* TODO: add controllers */ (req, res) => {
    res.sendStatus(200);
  }
);

// user deletes item from cart - 'delete' request
/*
 * When it is triggered: customer deletes a product from order
 * What it does: deletes an order detail entry in the database
 * sample request data from frontend: just req.params.orderDetailId

 * sample response data after controllers: just a status code 200
 * 
 * 
 */
router.delete(
  '/delete/:orderDetailId',
  /* TODO: add controllers */ (req, res) => {
    res.sendStatus(200);
  }
);

// user updates quantity of item in cart - 'update' request
/*
 * When it is triggered: user updates quantity of item in cart 
 * What it does: updates quantity
 * sample request data from frontend: 
 * const data = {
  orderDetailId: 12,
  quantity: 2,
  };
 * sample response data after controllers: just a status code 200
 * 
 * 
 */
router.put(
  '/update',
  /* TODO: add controllers */ (req, res) => {
    res.sendStatus(200);
  }
);

// user submits an order
/*
 * When it is triggered: user presses checkout btn in cart
 * What it does: change order status to fulfilled, every product associated with order, needs to decrease stock by value of quantity in order detail, opens a new order
 * sample request data from frontend: req.params.userId
 * sample response data after controllers: just a status code 200
 *
 *
 */

router.put(
  '/submit:userId',
  /* TODO: add controllers */ (req, res) => {
    res.sendStatus(200);
  }
);

module.exports = router;
