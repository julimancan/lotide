//implement assertArraysEqual with 2 inputs 

const assertArraysEqual = function(arr1, arr2){
  for (let i = 0; i < arr1.length; i++) {
  assertEqual(arr1[i], arr2[i]);
  };
  return 
}; 

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌 Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`😖 Assertion Failed: ${actual} !== ${expected}`)
  }
  };

  const eqArrays = function(arr1, arr2) { 
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return [false];
    }
  }
   return [true];
  };

  const without = function(arr1, arr2) {
    let noMatch = []
    for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      noMatch.push(arr1[i]);
      return noMatch
    }
  }
  }

assertArraysEqual(without(['hi', 'hello'], ['hi']), ['hello', 'what'])


module.exports = without;