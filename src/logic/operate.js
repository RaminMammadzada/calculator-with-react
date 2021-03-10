import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstValue = Big(numberOne);
  const secondvalue = Big(numberTwo);

  if (operation === '-') {
    return firstValue - secondvalue;
  }

  if (operation === '+') {
    return firstValue + secondvalue;
  }

  if (operation === 'x') {
    return firstValue * secondvalue;
  }

  if (operation === '/') {
    if (parseInt(secondvalue, 10) === 0) { return "You can't divide a number by zero"; }
    return firstValue / secondvalue;
  }

  return null;
};

export default operate;
