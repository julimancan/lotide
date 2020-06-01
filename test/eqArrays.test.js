const assertEqual = require('../assertEqual');

const eqArrays = require('../eqArrays');

console.log("eqArrays:")
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.log('if arrays are not sorted')
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
console.log('if not all items are numbers or string')
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays (["Lighthouse", "Labs"], ["Lighthouse", "Labs"]), true);
