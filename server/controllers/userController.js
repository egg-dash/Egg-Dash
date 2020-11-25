const { User } = require('../models/index');
const db = require('../models/index');

const userController = {};

// New user creates an account, signs up.
userController.createUser = async (req, res, next) => {
  // Grab form data off of the request.
  const {
    firstName,
    lastName,
    email,
    password,
    addressStreet,
    addressZip,
    accountType,
  } = req.body;

  try {
    // Query the db to check if user already exists.
    const dbCheck = await User.findAll({
      where: {
        email,
      },
    });

    if (dbCheck[0]) return res.sendStatus(403); // User already exists status code.

    // Create a user in the database by this name.
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      addressStreet,
      addressZip,
      accountType,
    });
    if (user) {
      res.locals.user.email = email;
      res.locals.user.accountType = accountType;
      return next();
    }
  } catch (err) {
    // I'll fill this out later.
    if (err) return next({
      log: `userController.createUser: ERROR: ${err}.`,
        message: {
          err: 'Error occurred in userController.createUser.',
      },
    });
  }
}

userController.verifyUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findAll({
      where: {
        email,
        password,
      }
    });

    if (user) {
      res.locals.email = email;
      res.locals.password = password;
      return next();
    } else {
      return res.statusCode(401).json('Invalid username or password.');
    }
  } catch (err) {
    if (err) return next({
        log: `userController.verifyUser: ERROR: ${err}.`,
        message: {
          err: 'Error occurred in userController.verifyUser.',
      },
    });
  }
}


module.exports = userController;
