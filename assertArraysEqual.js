const assertArraysEqual = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    eqArrays(arr1[i], arr2[i]);
  }
  return;
};
const eqArrays = require('./eqArrays');

module.exports = assertArraysEqual;