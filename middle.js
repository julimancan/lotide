const chalk = require('chalk');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let result = [];
  
  // arrays with 1 or 2 elements return empty array
  if (array.length <= 2) {
    result = [];
    console.log("Array has 2 or less items and therefore has no middle");
  }
  // arrays with odd number of elements return 1 element
  else if (array.length % 2 === 1) {
    let indexArray = Math.floor(array.length / 2);
    result = [array[indexArray]];
    return result;
  }
  // arrays with an even number of elements should return the 2 middle elements
  else if (array.length % 2 === 0) {
    let indexArray1 = (array.length / 2) - 1;
    let indexArray2 = indexArray1 + 1;
    result = [array[indexArray1], array[indexArray2]];
  }
  console.log(result);
  return result;
};

module.exports = middle;


// function(arr1, arr2) {
//   if (arr1.length === 0 && arr2.length === 0) {
//     console.log(`😖 Assertion Failed: ${arr1} !== ${arr2}`);
//     return
//   };
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       console.log(`😖 Assertion Failed: ${arr1} !== ${arr2}`);
//       return
//     }
//   }
//   console.log(`👌 Assertion Passed: ${arr1} === ${arr2}`);
// }
