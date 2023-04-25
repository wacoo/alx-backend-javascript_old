/**
 * update old grade with new grade
 * @param {String Array} students
 * @param {String} city
 * @param {Number Array} newGrades
 */

export default function updateStudentGradeByCity(students, city, newGrades) {
  const sameCity = students.filter((student) => student.location === city);
  const gradeChange = sameCity.map((student) => {
    for (const grade of newGrades) {
      if (student.id === grade.studentId) {
        student.grade = grade.grade; // eslint-disable-line no-param-reassign
        break;
      }
      student.grade = 'N/A'; // eslint-disable-line no-param-reassign
    }
    return student;
  });
  return gradeChange;
}
