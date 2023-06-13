/* write a simple http server */
http = require('http');
url = require('url');
students = require('3-read_file_async');

const  host = '127.0.0.1';
const port = '1234';

const server = http.createServer((request, result) => {
  result.statusCode = 200;
  result.setHeader('Content-Type', 'text/plain');
  const reqUrl = url.parse(request.url).pathname;
  if (reqUrl === '/'){
    result.write('Hello Holberton School!');
  } else if (reqUrl === '/students') {
    result.write('This is the list of our students${students}');
  }
  result.end('Hello Holberton School!');
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
