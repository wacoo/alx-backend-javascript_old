/**
 * return an array buffer with Int8 value at given position
 * @param {Number} length
 * @param {Number} position
 * @param {Number} value
 */

export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new DataView(new ArrayBuffer(length), 0, length);
  buffer.setInt8(position, value);
  return buffer;
}
