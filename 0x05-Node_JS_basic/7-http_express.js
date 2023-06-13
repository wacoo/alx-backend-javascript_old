/* Create a small http server using express */
const express = require('express');
const fs = require('fs');

const app = express();
const port = 1234;

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

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2]).then((output) => {
    const resStr = output.join('<br>');
    const data = ['This is the list of our students', resStr].join('<br>');
    res.send(data);
  }).catch(() => {
    res.send(['This is the list of our students', 'Cannot load the database'].join('<br>'));
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
