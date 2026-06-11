const { add, subtract, multiply, divide } = require('../calculator');

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
