/**
 * Return an array of ids from list of objects
 * param {String Array} listStudents
 */

export default function getListStudentIds(listStudents) {
  const list = [];
  if (Array.isArray(listStudents)) {
    for (const student of listStudents) {
      list.push(student.id);
    }
  } else {
    return [];
  }
  return list;
}
