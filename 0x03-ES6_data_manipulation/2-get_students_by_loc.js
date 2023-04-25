/**
 * Return array of objects who are located in specific city
 * @param {String Array} students
 * @param {String} city
 */

export default function (students, city) {
  const stSameCity = [];
  for (const student of students) {
    if (student.location === city) {
      stSameCity.push(student);
    }
  }
  return stSameCity;
}
