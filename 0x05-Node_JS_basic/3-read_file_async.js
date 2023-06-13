/* read file async */
const fs = require('fs');

function countStudents(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const cs = [];
        const swe = [];
        let csCount = 0;
        let sweCount = 0;
        const students = data.trim().split('\n');
        const len = students.length - 1;
        console.log(`Number of students: ${len}`);
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
        console.log(`Number of students in CS: ${csCount}. List: ${csList}`);
        console.log(`Number of students in SWE: ${sweCount}. List: ${sweList}`);
        resolve(true);
      }
    });
  });
}

module.exports = countStudents;
