  const eqArrays = function(arr1, arr2) { 
  // arr1.sort(function(a, b){return a-b});
  // arr2.sort(function(a, b){return a-b});
  console.log("arr1:", arr1, "arr2", arr2)
  
  // if (typeof(arr1))
  
  // for (let i of arr1) {
  //   if (typeof i !== 'number') {
  //     arr1 = arr1.map(function (x) { 
  //       return parseInt(x, 10);
  //     });
  //   } else {
  //   return arr1
  // }}

  // for (let i of arr2) {
  //   if (typeof i !== 'number') {
  //     return arr2
  // } else {
  //   arr2 = arr2.map(function (x) { 
  //     return parseInt(x, 10);
  //   }) }}

  console.log("arr1 after loop:", arr1, "arr2 numbers:", arr2)
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
   return true;
  };

  module.exports = eqArrays;