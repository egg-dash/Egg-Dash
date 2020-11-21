const express = require('express');
const path = require('path');

const app = express();

const custRouter = require('./routes/cust');
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');

const port = 3000;
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router for customer logins
app.use('/cust', custRouter);

// router to access products
app.use('/products', productsRouter);

// router for shopping cart
app.use('/cart', cartRouter);

// serve index.html on the route '/'
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// start server

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});

module.exports = app;
