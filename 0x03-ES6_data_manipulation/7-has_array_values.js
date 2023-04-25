/**
 * returns a boolean if all the elements in the array exist within the set
 * @param {Set} set
 * @param {Array} array
 */

export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
