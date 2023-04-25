/**
 * Return an array of ids from list of objects
 * param {String Array} listStudents
 */

export default function getListStudentIds(listStudents) {
  if (Array.isArray(listStudents)) {
    return listStudents.map((student) => student.id);
  }
  return [];
}
