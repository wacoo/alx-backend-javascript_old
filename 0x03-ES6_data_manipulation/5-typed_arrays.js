/**
 * return an array buffer with Int8 value at given position
 * @param {Number} length
 * @param {Number} position
 * @param {Number} value
 */

export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8 = new Int8Array(buffer);
  if (position < int8.byteLength) {
    int8[position] = value;
  } else {
    throw new Error('Position out of range');
  }
  return buffer;
}
