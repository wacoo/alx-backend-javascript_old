/* returns a string all set values that start with specific string */

export default function cleanSet(set, startString) {
  const str = [];
  if (set && startString && (set instanceof Set) && typeof startString === 'string') {
    for (const element of set.values()) {
      const elt = element.substring(startString.length, element.length);
      if (elt && elt.startsWith(startString) && typeof elt === 'string' && elt !== element) {
          str.push(elt.substring(startString.length, elt.length));
      }
    }
  }
  return str.join('-');
}
