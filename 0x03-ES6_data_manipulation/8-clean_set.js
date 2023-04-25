/* returns a string all set values that start with specific string */

export default function cleanSet(set, startString) {
  let str = '';
  set.forEach(
    (element) => {
      if (element.startsWith(startString)) {
        str += `-${element.substring(startString.length, element.length)}`;
      }
    },
  );
  return str;
}
