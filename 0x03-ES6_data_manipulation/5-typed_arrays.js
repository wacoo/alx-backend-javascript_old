/**
 * return an array buffer with Int8 value at given position
 * @param {Number} length
 * @param {Number} position
 * @param {Number} value
 */

export default function createInt8TypedArray(length, position, value) {
  const buffer = new DataView(
    new ArrayBuffer(length),
    0,
    length,
  );
  if (position < length) {
    buffer.setUint8(position, value);
  } else {
    throw new Error('Position out of range');
  }
  return buffer;
}
