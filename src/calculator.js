// Calculator module
// Supported operations:
// - add(a, b): addition
// - subtract(a, b): subtraction
// - multiply(a, b): multiplication
// - divide(a, b): division
// The functions accept numbers (integers or floats) and return a Number result.

function toNumber(value) {
  const n = Number(value);
  if (Number.isNaN(n)) throw new TypeError(`Invalid number: ${value}`);
  return n;
}

function add(a, b) {
  return toNumber(a) + toNumber(b);
}

function subtract(a, b) {
  return toNumber(a) - toNumber(b);
}

function multiply(a, b) {
  return toNumber(a) * toNumber(b);
}

function divide(a, b) {
  const nb = toNumber(b);
  if (nb === 0) throw new RangeError('Division by zero');
  return toNumber(a) / nb;
}

module.exports = { add, subtract, multiply, divide };
