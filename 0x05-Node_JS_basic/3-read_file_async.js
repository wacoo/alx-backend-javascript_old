/* read file */
const fs = require('fs');

function countStudents(db) {
  let cs_count = 0;
  let swe_count = 0;
  let cs = []
  let swe = []
  try {
    data = fs.readFile(db, {encoding: 'utf-8'});
    students = data.trim().split('\n');
    len = students.length - 1;
    console.log(`Number of students: ${len}`);
    for (let student of students) {
      sdata = student.split(',')
      if (sdata[3] == 'CS') {
        cs_count++;
        cs.push(sdata[0])
      }
      else if (sdata[3] == 'SWE') {
        swe_count++;
        swe.push(sdata[0])
      }
    }
    cs_str = cs.join(', ')
    swe_str = swe.join(', ')
    console.log(`Number of students in CS: ${cs_count}. LIST: ${cs_str}`)
    console.log(`Number of students in SWE: ${swe_count}. LIST: ${swe_str}`)
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
