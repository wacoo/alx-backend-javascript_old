/* read file */
const fs = require('fs');

function countStudents(file) {
  try {
    const data = fs.readFileSync(file, { encoding: 'utf-8' });
    const students = data.trim().split('\n');
    const len = students.length - 1;
    console.log(`Number of students: ${len}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
