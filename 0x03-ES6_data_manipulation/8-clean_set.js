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
    const elt = element.substring(startString.length, element.length);
    if (element && element.startsWith(startString) && typeof element === 'string' && elt !== element) {
      str.push(elt);
    }
  }
  return str.join('-');
}
