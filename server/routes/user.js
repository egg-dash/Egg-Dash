const express = require('express');
const db = require('../models/index');

const router = express.Router();

const userController = require('../controllers/userController');

async function dummyOrderFunc(req, res, next) {
  try {
    await db.Order.create({ status: 'open', date: '2020-11-23T16:18:19' });
    const result = await db.Order.findAll();
    console.log('From database:', result);
    console.log(typeof result[0].dataValues.date);
    res.locals = result;
    next();
  } catch (err) {
    console.log(err);
  }
}

router.get('/testdata', dummyOrderFunc, (req, res) => {
  res.status(200).json(res.locals);
});

/**
 * When it is triggered: when a new customer/merchant clicks submit on the sign up form
 * What it does: creates a new user entry on the Users table, add persistant auth
 * sample request data from frontend:
 * const data = {
  firstName: 'Warren',
  lastName: 'Tait',
  email: 'warren@fakeemail.com',
  password: 'password',
  addressStreet: '123 Avenue Q',
  addressZip: '12345',
  accountType: 'Merchant',
};
 * sample response data after controllers: 
 const data = {userId: 123}
 *
 */

router.post('/signup', userController.createUser, (req, res) => {
  res.sendStatus(200);
});

/**
 * When it is triggered: when a new customer/merchant clicks submit on the login form
 * What it does: checks to see if credentials are valid, and add persistant auth
 * sample request data from frontend:
 * const data = {
  email: 'warren@fakeemail.com',
  password: 'password',
};
 * sample response data after controllers: send status code 200 and and userid if success/401 if fail
  const data = {userId: 123}
 *
 */

router.post('/login', userController.verifyCust, (req, res) => {
  res.sendStatus(200);
});

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
