/* accept two arguments numerator and denominator,
when denominator is equal to 0, throw new error 


*/

export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }

  return numerator / denominator;
}
