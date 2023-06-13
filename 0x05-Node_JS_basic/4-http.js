/* write a simple http server */
const http = require('http');

const host = '127.0.0.1';
const port = '1234';

const app = http.createServer((request, result) => {
  result.statusCode = 200;
  result.setHeader('Content-Type', 'text/plain');
  result.end('Hello Holberton School!');
});

app.listen(port, host, () => {
});

module.exports = app;
