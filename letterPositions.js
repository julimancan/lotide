
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


const letterPositions = function(sentence) {
  let results = {};
  for (let index in sentence) {
    if (results[sentence[index]]) {
      results[sentence[index]].push(index) 
    } else if (sentence[index] !== ' ') { 
      results[sentence[index]] = [index];
    }
   }   
  // logic to update results here
  return results;
};


console.log(letterPositions("lighthouse in the house"));

module.exports = letterPositions;

