const assertObjectsEqual = function(actual, expected) {
  // Implement me!
   const inspect = require('util').inspect;
   console.log(`Example label: ${inspect(actual)}`);
   console.log(`Example label: ${inspect(expected)}`);
   if (inspect(actual, {sorted: true}) === inspect(expected, {sorted: true})) {
    console.log(`👌 Assertion Passed: ${actual} === ${expected}`)
   } else {
     console.log(`😖 Assertion Failed: ${actual} !== ${expected}`)
   }
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌 Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`😖 Assertion Failed: ${actual} !== ${expected}`)
  }
  };

  
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

console.log(assertObjectsEqual(ab, ba))