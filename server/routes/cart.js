const express = require('express');

const router = express.Router();

const cartController = require('../controllers/cartController');

// user signs in and cart loads 'get' request
/**
 * When it is triggered: when a customer clicks on a farm
 * What it does: checks to see if an open order exists if not it will create a new empty order
 * sample request data from frontend: just req.params.userId & req.params.farmId
 * sample response data after controllers: 
const openOrder = {
  orderId: 12,
  date: '2020-11-23T21:18:19.000Z',
  status: 'open',
  orderDetails: [
    {
      orderDetailId: 12,
      unitPrice: 400,
      quantity: 3,
      productId: 12,
    },
    {
      orderDetailId: 15,
      unitPrice: 200,
      quantity: 2,
      productId: 15,
    },
  ],
};

const emptyOrder = {
  orderId: 13,
  date: '2020-11-23T21:18:19.000Z',
  status: 'empty',
  orderDetails: [],
};

 * 
 */

router.get(
  '/:userId/:farmId',
  /* TODO: add controllers */ (req, res) => {
    res.status(200).json(res.locals);
  }
);

// user adds an item to order
/**
 * When it is triggered: customer adds product to cart/order
 * What it does: creates a new order detail associated with users' current order
 * sample request data from frontend: 
 const data = {
  orderId: 14,
  orderDetail: {
    productId: 1,
    quantity: 3,
    unitPrice: 500,
  },
};
 * sample response data after controllers: 
 * 
 * const data = {
  orderDetailId: 13
}
 * 
 */

// user adds item to cart - 'post' request
router.post(
  '/add',
  /* TODO: add controllers */ (req, res) => {
    res.atatus(200).json(res.locals);
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
 * What it does: change order status to fulfilled, every product associated with order,
 *    needs to decrease stock by value of quantity in order detail,
 * sample request data from frontend: req.params.orderId
 * sample response data after controllers: just a status code 200
 *
 *
 */

router.put(
  '/submit/:orderId',
  /* TODO: add controllers */ (req, res) => {
    res.sendStatus(200);
  }
);

module.exports = router;
