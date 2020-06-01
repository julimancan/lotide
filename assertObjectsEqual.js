const assertObjectsEqual = function(actual, expected) {
  // Implement me!
   const inspect = require('util').inspect;
   if (inspect(actual, {sorted: true}) === inspect(expected, {sorted: true})) {
    console.log(`👌 Assertion Passed: ${actual} === ${expected}`);
   } else {
     console.log(`😖 Assertion Failed: ${actual} !== ${expected}`);
   }
};



module.exports = assertObjectsEqual;