import operate from '../operate';

describe('Operate Tests', () => {
  let firstNumber;
  let secondNumber;

  beforeEach(() => {
    firstNumber = 500;
    secondNumber = 15;
  });

  it('should return 33.334, if "/" is given as operator', () => {
    const result = operate(firstNumber, secondNumber, '/');
    expect(result).toEqual(33.333);
  });

  it('should return 7500, if "x" is given as operator', () => {
    const result = operate(firstNumber, secondNumber, 'x');
    expect(result).toEqual(7500);
  });

  it('should return -485, if "-" is given as operator', () => {
    const result = operate(firstNumber, secondNumber, '-');
    expect(result).toEqual(485);
  });

  it('should return 515, if "+" is given as operator.', () => {
    const result = operate(firstNumber, secondNumber, '+');
    expect(result).toEqual(515);
  });

  it('should return 4.505, if "/" is given as operator', () => {
    const result = operate(firstNumber, -111, '/');
    expect(result).toEqual(-4.505);
  });

  it('should return "You cant divide a number by zero! " warning when trying to devide a number by zero', () => {
    const result = operate(firstNumber, 0, '/');
    expect(result).toEqual("You can't divide a number by zero!");
  });
});
