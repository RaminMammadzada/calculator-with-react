import calculate from '../calculate';

describe('Calculate Logic tests', () => {
  let currentState;

  beforeEach(() => {
    currentState = {
      total: '5',
      next: '6',
      operation: '+',
    };
  });

  it('should return null for total, for next and for operation when AC is clicked', () => {
    const result = calculate(currentState, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should return 11 when equal is clicked', () => {
    const result = calculate(currentState, '=');
    expect(result).toEqual({
      total: '11',
      next: null,
      operation: null,
    });
  });

  it('should return -6 for the next value', () => {
    const result = calculate(currentState, '+/-');
    expect(result).toEqual({
      total: -5,
      next: -6,
      operation: '+',
    });
  });

  it('should return 6. for the next value', () => {
    const result = calculate(currentState, '.');
    expect(result).toEqual({
      total: '5',
      next: '6.',
      operation: '+',
    });
  });

  it('should return 0.06 for the next value', () => {
    const result = calculate(currentState, '%');
    expect(result).toEqual({
      total: '5',
      next: '0.06',
      operation: '+',
    });
  });

  it('should return 11 for the total value', () => {
    const result = calculate(currentState, '=');
    expect(result).toEqual({
      total: '11',
      next: null,
      operation: null,
    });
  });

  it('should return -1 for the total value', () => {
    currentState.operation = '-';
    const result = calculate(currentState, '=');
    expect(result).toEqual({
      total: '-1',
      next: null,
      operation: null,
    });
  });

  it('should return 0.833 for the total value', () => {
    currentState.operation = '/';
    const result = calculate(currentState, '=');
    expect(result).toEqual({
      total: '0.833',
      next: null,
      operation: null,
    });
  });

  it('should return 30 for the total value', () => {
    currentState.operation = 'x';
    const result = calculate(currentState, '=');
    expect(result).toEqual({
      total: '30',
      next: null,
      operation: null,
    });
  });
});
