import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstValue = Big(numberOne);
  const secondvalue = Big(numberTwo);
  let result = null;

  if (operation === '-') {
    result = firstValue.minus(secondvalue).toFixed(3);
  }

  if (operation === '+') {
    result = firstValue.plus(secondvalue).toFixed(3);
  }

  if (operation === 'x') {
    result = firstValue.times(secondvalue).toFixed(3);
  }

  if (operation === '/') {
    if (parseInt(secondvalue, 10) === 0) { return "You can't divide a number by zero!"; }
    result = firstValue.div(secondvalue).toFixed(3);
  }

  result = parseFloat(result);
  return result;
};

export default operate;
