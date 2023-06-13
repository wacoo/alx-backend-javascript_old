/* Create a small http server using express */
const express = require('express');

const app = express();
const port = 1234;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app
