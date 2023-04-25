/* returns a string all set values that start with specific string */

export default function cleanSet(set, startString) {
  const str = [];
  if (set && startString && (set instanceof Set) && typeof startString === 'string') {
    for (const element of set.values()) {
      if (element.startsWith(startString)) {
        if (typeof element === 'string') {
          str.push(element.substring(startString.length, element.length));
        }
      }
    }
  }
  return str.join('-');
}
