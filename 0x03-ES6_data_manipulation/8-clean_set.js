/**
 * returns a string all set values that start with specific string
 * @param {Set} set
 * @param {String} startString
 * return {String}
 */

export default function cleanSet(set, startString) {
  const str = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const element of set.values()) {
    if (typeof element === 'string' && element.startsWith(startString)) {
      const elt = element.substring(startString.length);
      if (elt && elt !== element) {
        str.push(elt);
      }
    }
  }
  return str.join('-');
}
