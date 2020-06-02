const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const chalk = require('chalk');

console.log(chalk.blue('MIDDLE'))
console.log(chalk.red("[1]"));
assertArraysEqual(middle([1])); // => []
console.log(chalk.red("[1, 2]"));
assertArraysEqual(middle([1, 2])); // => []

console.log(chalk.red("[1, 2, 3, 4, 6]"));
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
console.log(chalk.red("[1, 2, 3, 4, 5, 6]"));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

// assertArraysEqual(middle([13, 14, 15, 16, 17, 18]), [15, 16]);

// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArraysEqual([1, 2], [1, 3]);