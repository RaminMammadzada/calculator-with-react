import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstValue = Big(numberOne);
  const secondvalue = Big(numberTwo);

  if (operation === '-') {
    return firstValue.minus(secondvalue);
  }

  if (operation === '+') {
    return firstValue.plus(secondvalue);
  }

  if (operation === 'x') {
    return firstValue.times(secondvalue);
  }

  if (operation === '/') {
    if (parseInt(secondvalue, 10) === 0) { return "You can't divide a number by zero!"; }
    return firstValue.div(secondvalue);
  }

  return null;
};

export default operate;
