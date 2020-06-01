const assertObjectsEqual = require("../assertObjectsEqual");



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };


console.log('assertObjectsEqual:');
assertObjectsEqual(ab, ba);