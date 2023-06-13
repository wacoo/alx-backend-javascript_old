/* write a simple http server */
const http = require('http');
const url = require('url');
const fs = require('fs');

function countStudents(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      const output = [];
      if (data) {
        const cs = [];
        const swe = [];
        let csCount = 0;
        let sweCount = 0;
        const students = data.trim().split('\n');
        const len = students.length - 1;
        output.push(`Number of students: ${len}`);
        for (const student of students) {
          const sdata = student.split(',');
          if (sdata[3] === 'CS') {
            csCount += 1;
            cs.push(sdata[0]);
          } else if (sdata[3] === 'SWE') {
            sweCount += 1;
            swe.push(sdata[0]);
          }
        }
        const csList = cs.join(', ');
        const sweList = swe.join(', ');
        output.push(`Number of students in CS: ${csCount}. List: ${csList}`);
        output.push(`Number of students in SWE: ${sweCount}. List: ${sweList}`);
        resolve(output);
      }
    });
  });
}

const host = '127.0.0.1';
const port = '1234';

const app = http.createServer((request, result) => {
  result.setHeader('Content-Type', 'text/plain');
  const reqUrl = url.parse(request.url).pathname;
  if (reqUrl === '/') {
    result.end('Hello Holberton School!');
  } else if (reqUrl === '/students') {
    result.write('This is the list of our students\n');
    countStudents(process.argv[2]).then((res) => {
      const resStr = res.join('\n');
      result.end(resStr);
    }).catch(() => {
      result.end('Cannot load the database');
    });
  }
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

module.exports = app;
