/* write a simple http server */
const http = require('http');

const host = '127.0.0.1';
const port = '1234';

const server = http.createServer((request, result) => {
  result.setHeader('Content-Type', 'text/plain');
  result.end('Hello Holberton School!');
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});