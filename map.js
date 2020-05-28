const words = ["ground", "control", "to", "major", "tom"];


const map = function(arr, callback) {
   
  const results = [];
  for (let item of arr) {
   results.push(callback(item));
  }

  return results;
}


const results1 = map(words, word => word[0]);
console.log(results1)
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
console.log(assertArraysEqual(results1, ["g","c","t","m","t"]))