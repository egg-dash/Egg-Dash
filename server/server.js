const express = require('express');
const path = require('path');

const port = 3000;

const app = express();

// not sure if this line is useful
// app.use('/build', express.static(path.join(__dirname, '../build')));


// serve index.html on the route '/'
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}.`)
})