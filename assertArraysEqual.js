const eqArrays = require('./eqArrays');


console.log(eqArrays([1], [1]));



const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`👌 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😖 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;



assertArraysEqual([1], [1]);
assertArraysEqual([1], [2]);