/**
 * Return array of objects who are located in specific city
 * @param {String Array} students
 * @param {String} city
 */

export default function (students, city) {
  return students.filter((student) => student.location === city);
}
