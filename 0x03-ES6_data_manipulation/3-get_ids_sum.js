/**
 * Return sum of all student ids
 * param {String Array} sitdents
 */

export default function getStudentIdsSum(students) {
  return students.reduce((sum, current) => sum + current.id, 0);
}
