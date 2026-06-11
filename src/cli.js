#!/usr/bin/env node

// CLI wrapper for the calculator module
// Supported operations (matching the calculator module):
//   add      -> addition
//   subtract -> subtraction
//   multiply -> multiplication
//   divide   -> division

const { add, subtract, multiply, divide } = require('./calculator');

function usage() {
  console.error('Usage: node src/cli.js <operation> <a> <b>');
  console.error('Operations: add, subtract, multiply, divide');
  console.error('Examples:');
  console.error('  node src/cli.js add 2 3      # 5');
  console.error('  node src/cli.js divide 5 2   # 2.5');
  process.exit(1);
}

async function main() {
  const argv = process.argv.slice(2);
  if (argv.length !== 3) return usage();

  const [op, aRaw, bRaw] = argv;
  let result;
  try {
    switch (op) {
      case 'add':
        result = add(aRaw, bRaw);
        break;
      case 'subtract':
        result = subtract(aRaw, bRaw);
        break;
      case 'multiply':
        result = multiply(aRaw, bRaw);
        break;
      case 'divide':
        result = divide(aRaw, bRaw);
        break;
      default:
        console.error(`Unknown operation: ${op}`);
        return usage();
    }
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(2);
  }

  // Print result to stdout for use in scripts
  console.log(result);
}

main();
