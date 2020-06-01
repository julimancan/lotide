const assertObjectsEqual = require("../assertObjectsEqual");
const chalk = require('chalk');



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };


console.log(chalk.blue('assertObjectsEqual:'));
assertObjectsEqual(ab, ba);