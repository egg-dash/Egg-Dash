const express = require('express');
const db = require('../models/index');

const router = express.Router();

const userController = require('../controllers/userController');

// use to create test data
// =====================================================================================

async function createTestData(req, res, next) {
  try {
    await db.Order.create({ status: 'open', date: '2020-11-23T16:18:19' });
    const result = await db.Order.findAll();
    res.locals = result;
    next();
  } catch (err) {
    console.log(err);
  }
}

router.post('/testdata', createTestData, (req, res) => {
  res.status(200).json(res.locals);
});

// =====================================================================================

/**
 * When it is triggered: when a new customer/merchant clicks submit on the sign up form
 * What it does: creates a new user entry on the Users table, add persistant auth, and create a new farm entry if accountType = merchant
 * sample request data from frontend:
 const merchantData = {
  firstName: 'Warren',
  lastName: 'Tait',
  email: 'warren@fakeemail.com',
  password: 'password',
  addressStreet: '123 Avenue Q',
  addressZip: '12345',
  accountType: 'merchant',
  farm: {
    name: 'codesmith ranch',
    addressStreet: '451 toggle dr',
    addressZip: 15671,
    email: 'ranch@fakeemail.com',
    description: 'darn tootin best ranch evah',
    image:
      'https://www.immunology.org/sites/default/files/Farm%20barn%20small.jpg',
  },
};
const cutomerData = {
  firstName: 'Warren',
  lastName: 'Tait',
  email: 'warren@fakeemail.com',
  password: 'password',
  addressStreet: '123 Avenue Q',
  addressZip: '12345',
  accountType: 'customer',
  farm: null,
};
 * sample response data after controllers: 
 const merchantData = {userId: 123, farmId: 12}
 const customerData = {userId: 123, farmId: null}
 *
 */

router.post(
  '/signup',
  /* add controllers */ (req, res) => {
    res.sendStatus(200);
  }
);

/**
 * When it is triggered: when a customer/merchant clicks submit on the login form
 * What it does: checks to see if credentials are valid, and add persistant auth
 * sample request data from frontend:
 * const data = {
  email: 'warren@fakeemail.com',
  password: 'password',
};
 * sample response data after controllers: send status code 200 and and userid if success/401 if fail
 const merchantData = {userId: 123, farmId: 12}
 const customerData = {userId: 123, farmId: null}
 *
 */

router.post(
  '/login',
  /* add controllers */ (req, res) => {
    res.sendStatus(200);
  }
);

/**
 * When it is triggered: when a new customer/merchant clicks log out
 * What it does: remove persisant auth
 * sample request data from frontend: just req.params.userid
 * sample response data after controllers: just status code 200
 *
 */

router.post(
  '/logout/:userid',
  /* TODO: add controllers */ (req, res) => {
    res.sendStatus(200);
  }
);

module.exports = router;
