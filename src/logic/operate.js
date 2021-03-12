import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstValue = Big(numberOne);
  const secondvalue = Big(numberTwo);

  if (operation === '-') {
    return firstValue.minus(secondvalue).toFixed(3);
  }

  if (operation === '+') {
    return firstValue.plus(secondvalue).toFixed(3);
  }

  if (operation === 'x') {
    return firstValue.times(secondvalue).toFixed(3);
  }

  if (operation === '/') {
    if (parseInt(secondvalue, 10) === 0) { return "You can't divide a number by zero!"; }
    return firstValue.div(secondvalue).toFixed(3);
  }

  return null;
};

export default operate;
