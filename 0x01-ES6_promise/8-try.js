/* accept two arguments numerator and denominator,
when denominator is equal to 0, throw new error */

export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot devide by 0');
  } else {
    return numerator / denominator;
  }
}
