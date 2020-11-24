const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

/**
 * When it is triggered: when a merchant log's into their account or when a customer clicks on a farm card or when a customer's cart is retrieved
 * What it does: queries the databse for product information associated with passed in farm id
 * sample request data from frontend: just req.params.farmid
 * sample response data after controllers: 
 * const data = [
  {
    id: 1234,
    name: 'large brown egg (cage-free)',
    desription: 'seriously the best eggs evah',
    price: 400,
    stock: 55,
    productTypeId: 31,
    productTypeName: 'egg',
    image:
      'https://static01.nyt.com/images/2019/02/05/world/05egg/15xp-egg-promo-articleLarge-v2.jpg?quality=90&auto=webp',
    category: 'dairy/egg',
  },
  {another: 'product object'}
];
 *
 */

router.get(
  '/:farmId',
  /* TO DO: add controllers */ (req, res) => {
    res.status(200).json(res.locals);
  }
);

/**
 * When it is triggered: when a customer logs in and they do not have an open cart
 * What it does: queries the databse for for all farm informationo
 * sample request data from frontend: none
 * sample response data after controllers:
 *const data = [
  {
    id: 124,
    name: 'Floppy Farm',
    desription: 'seriously the best farm evah',
    addressStreet: '123 middleofnowhere dr',
    addressZip: 12345,
    email: 'farm@fakeemail.com',
    image:
      'https://civileats.com/wp-content/uploads/2020/01/200108-on-farm-solar-dairy-crisis-organic-valley-climate-change-farm-income-3-kelly-placke.jpg',
  },
  {another: 'farm object'}
];
 *
 */

router.get(
  '/farms',
  /* TO DO: add controllers */ (req, res) => {
    res.status(200).json(res.locals);
  }
);

/**
 * When it is triggered: when a merchant logs in
 * What it does: queries the databse for for all fullfilled orders related to that farm
 * sample request data from frontend: just req.params.farmid
 * sample response data after controllers:
 *const data = [
  {
    date: '2020-11-23T21:18:19.000Z',
    products: [
      {
        name: 'large brown egg (cage-free)',
        description: 'seriously the best eggs evah',
        unitPrice: 400,
        quantity: 3,
        productTypeName: 'egg',
        image:
          'https://static01.nyt.com/images/2019/02/05/world/05egg/15xp-egg-promo-articleLarge-v2.jpg?quality=90&auto=webp',
        category: 'dairy/egg',
      },
      {
        name: 'super soy milk',
        description: 'seriously the best milk evah',
        unitPrice: 250,
        quantity: 2,
        productTypeName: 'milk',
        image:
          'https://img.freepik.com/free-photo/soy-milk-with-soybean-wooden-background_42193-148.jpg?size=626&ext=jpg',
        category: 'dairy/egg',
      },
    ],
  },
  { another: 'order' },
];
 */

router.get(
  '/sales/:farmId',
  /* TO DO: add controllers */ (req, res) => {
    res.status(200).json(res.locals);
  }
);

/**
 * When it is triggered: when a merchant clicks submit to add a new item
 * What it does: creates a new product in the database
 * sample request data from frontend: 
 * const data = {
  farmId: 123,
  name: 'Big Al Chicken',
  description: 'Seriously just the best',
  price: 750,
  stock: 35,
  productTypeid: 12,
};
 * sample response data after controllers: just a status code
 */

router.post('/add', (req, res) => {
  res.sendStatus(200);
});

/**
 * When it is triggered: when a merchant clicks submit to update product data
 * What it does: updates stock and/or price for a product in the database
 * sample request data from frontend: 
 * const data = {
  productId: 123,
  price: 350,
  stock: 50,  // this should be the new total stock
};
 * sample response data after controllers: just a status code
 */

router.put('/update/:productid', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
