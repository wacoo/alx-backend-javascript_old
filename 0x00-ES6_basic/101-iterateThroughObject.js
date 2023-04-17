/* return every employee name separated by | */

export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  for (const name of reportWithIterator) {
    if (str === '') {
      str = name;
    } else {
      str += ` | ${name}`;
    }
  }
  return str;
}
