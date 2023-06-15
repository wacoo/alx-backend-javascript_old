/* acccept two numbers returns the sum improved */

function calculateNumber(type, a, b) {
  const num1 = Math.round(a);
  const num2 = Math.round(b);
  let res = 0;
  switch (type) {
  case 'SUM':
    res = num1 + num2;
    break;
  case 'SUBTRACT':
    res = num1 - num2;
    break;
  case 'DIVIDE':
    if (num2 === 0) {
      return "Error"
    } else {
      res = num1 / num2;
    }
      break;
    }
    return res;
}

module.exports = calculateNumber;
