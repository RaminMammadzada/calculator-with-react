import operate from './operate';

const calculate = (dataObj, buttonName) => {
  let { total, next, operation } = dataObj;

  const numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operationsArr = ['/', 'x', '-', '+', '='];

  switch (buttonName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      next *= -1;
      total *= -1;
      break;
    case '.':
      if (next !== null) {
        next += '.';
      }
      break;
    default:
      break;
    case '%':
      if (next === null) {
        next = String(total / 100);
      } else {
        next = String(next / 100);
      }
      break;
  }

  if (operationsArr.includes(buttonName)) {
    if (![null, undefined].includes(operation)) {
      total = String(operate(total, next, operation));
      next = null;
    } else if (next != null) {
      total = next;
      next = null;
    }
    if (buttonName !== '=') {
      operation = buttonName;
    } else {
      operation = null;
    }
  }

  if (numbersArr.includes(buttonName)) {
    if (next != null) {
      next += buttonName;
    } else {
      next = buttonName;
    }
  }

  return {
    total,
    next,
    operation,
  };
};

export default calculate;
