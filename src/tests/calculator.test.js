const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator - basic operations', () => {
  test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });
});

describe('Calculator - edge cases', () => {
  test('division by zero throws RangeError', () => {
    expect(() => divide(1, 0)).toThrow(/Division by zero/);
  });

  test('non-numeric inputs throw TypeError', () => {
    expect(() => add('a', 2)).toThrow(/Invalid number/);
    expect(() => subtract(1, 'b')).toThrow(/Invalid number/);
    expect(() => multiply('x', 'y')).toThrow(/Invalid number/);
    expect(() => divide('foo', 2)).toThrow(/Invalid number/);
  });

  test('supports floating point numbers', () => {
    expect(add(1.5, 2.25)).toBeCloseTo(3.75);
    expect(divide(7.5, 2.5)).toBeCloseTo(3);
  });
});

describe('Calculator - extended operations', () => {
  test('modulo: 5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('modulo by zero throws RangeError', () => {
    expect(() => modulo(10, 0)).toThrow(/Modulo by zero/);
  });

  test('power: 2 ^ 3 = 8 and 2 ^ 8 = 256', () => {
    expect(power(2, 3)).toBe(8);
    expect(power(2, 8)).toBe(256);
  });

  test('squareRoot: sqrt(16) = 4 and supports non-perfect squares', () => {
    expect(squareRoot(16)).toBe(4);
    expect(squareRoot(2)).toBeCloseTo(Math.sqrt(2));
  });

  test('squareRoot of negative number throws RangeError', () => {
    expect(() => squareRoot(-4)).toThrow(/Square root of negative number/);
  });

  test('non-numeric inputs for extended ops throw TypeError', () => {
    expect(() => modulo('a', 2)).toThrow(/Invalid number/);
    expect(() => modulo(1, 'b')).toThrow(/Invalid number/);
    expect(() => power('x', 2)).toThrow(/Invalid number/);
    expect(() => power(2, 'y')).toThrow(/Invalid number/);
    expect(() => squareRoot('z')).toThrow(/Invalid number/);
  });
});
