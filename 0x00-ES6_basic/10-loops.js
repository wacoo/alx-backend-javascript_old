/* modify code in appendToEachArrayValue to use ES6's for...of, loops */

export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const val of array) {
    arr.push(appendString + val);
  }

  return arr;
}
