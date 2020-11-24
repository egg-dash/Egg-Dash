const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

/**
 * When it is triggered: when a merchant log's into their account or when a customer clicks on a farm card
 * What it does: queries the databse for product information associated with passed in farmId
 * sample request data from frontend: just req.params.farmId
 * sample response data after controllers: 
 * const data = {
  name: 'Two Boots Farm',
  addressStreet: '156 Long Rd',
  addressZip: '12345',
  email: 'twoboots@fakeemail.com',
  description: 'the darn tootenest farm there ever was',
  image: `https://canoladigest.ca/wp-content/uploads/2019/02/42-incorporate-farm-feature-min.jpg`,
  products: [
    {
      id: 1234,
      name: 'large brown egg (cage-free)',
      desription: 'seriously the best eggs evah',
      price: 400,
      stock: 55,
      productTypeId: 31,
    },
    { another: 'product object' },
  ],
};
 *
 */

router.get(
  '/:farmId',
  /* TO DO: add controllers */ (req, res) => {
    res.status(200).json(res.locals);
  }
);

/**
 * When it is triggered: when a customer logs in or navigates to the farm display
 * What it does: queries the databse for for all farm information
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
    orderDetails: [
      {
        unitPrice: 400,
        quantity: 3,
        productId:12
      },
      {
        unitPrice: 200,
        quantity: 4,
        productId: 12
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
  productTypeid: 12,
};
 * sample response data after controllers: just a status code
 */

router.post('/add', (req, res) => {
  res.sendStatus(200);
});

/**
 * When it is triggered: whenever the frontennd needs the list of product types
 * What it does: returns all of the producttype info in the database
 * sample request data from frontend: none
 * sample response data after controllers:
 * const data = [
  {
    name: 'egg',
    image:
      'https://cimg0.ibsrv.net/cimg/www.fitday.com/693x350_85-1/728/Eggs_000001615195_Small-108728.jpg',
    category: 'eggs/dairy',
  },
  {
    name: 'chicken',
    image:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F389250.jpg&q=85',
    category: 'poultry',
  },
];
 *
 */

router.get('/types', (req, res) => {
  res.send(200).json(res.locals);
});

/**
 * When it is triggered: when a merchant clicks submit to update product data
 * What it does: updates info in the database for an existing product
 * sample request data from frontend: 
* const data = {
  productId: 123,
  name: 'Big Al Chicken',
  description: 'Seriously just the best',
  price: 750,
  productTypeid: 12,
};
 * sample response data after controllers: just a status code
 */

router.put('/update', (req, res) => {
  res.sendStatus(200);
});

/**
 * When it is triggered: when a merchant clicks submit to an add supply form
 * What it does: updates stock for a product in the database and creates a new supply entry
 * sample request data from frontend: 
* const data = {
  productId: 123,
  quantity: 50
};
 * sample response data after controllers: just a status code
 */

router.post('/supply', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
