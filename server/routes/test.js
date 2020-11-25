const express = require('express');
const db = require('../models/index');

const router = express.Router();

// use to create test data
// =====================================================================================

async function createTestData(req, res, next) {
  try {
    await db.User.create({
      firstName: 'Derek',
      lastName: 'Miller',
      email: 'dsymiller@fakeemail.com',
      password: 'password',
      addressStreet: '123 fake st',
      addressZip: 12345,
      accountType: 'customer',
    });
    await db.User.create({
      firstName: 'Mark',
      lastName: 'Miller',
      email: 'mmiller@fakeemail.com',
      password: 'password',
      addressStreet: '123 fake st',
      addressZip: 12345,
      accountType: 'merchant',
    });
    await db.Farm.create({
      name: 'Miller Farm',
      email: 'mmiller@fakeemail.com',
      password: 'password',
      addressStreet: '123 fake st',
      addressZip: 12345,
      image:
        'https://www.immunology.org/sites/default/files/Farm%20barn%20small.jpg',
      description: 'best farm in the world',
      UserId: 2,
    });
    await db.ProductType.create({
      name: 'egg',
      image:
        'https://static01.nyt.com/images/2019/02/05/world/05egg/15xp-egg-promo-articleLarge-v2.jpg?quality=90&auto=webp',
      category: 'dairy/eggs',
      unit: 'dozen',
    });
    await db.Product.create({
      name: 'grade A eggs (cage-free)',
      description: 'seriously great eggs',
      price: 300,
      stock: 0,
      FarmId: 1,
      ProductTypeId: 1,
    });
    await db.Product.create({
      name: 'grade A milk (two percent)',
      description: 'seriously great milk',
      price: 200,
      stock: 0,
      FarmId: 1,
      ProductTypeId: 1,
    });
    next();
  } catch (err) {
    console.log(err);
  }
}

router.get('/data', createTestData, (req, res) => {
  res.status(200).json(res.locals);
});

// =====================================================================================

module.exports = router;
