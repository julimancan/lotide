const assertArraysEqual = function(arr1, arr2) {
  console.log(`array 1: ${arr1} array 2: ${arr2}`)
  if (arr1.length === 0 && arr2.length === 0) {
    console.log(`😖 Assertion Failed: ${arr1} !== ${arr2}`);
    return
  };
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`😖 Assertion Failed: ${arr1} !== ${arr2}`);
      return
    }
  }
  console.log(`👌 Assertion Passed: ${arr1} === ${arr2}`);
}



  const middle = function(array) {
    let result = []
   
  // arrays with 1 or 2 elements return empty array
    if (array.length <= 2) {
      result = []
    }
  // arrays with odd number of elements return 1 element
    else if (array.length % 2 === 1) {
      let indexArray = Math.floor(array.length/2);
      result = [array[indexArray]];
      console.log(result);
    } 
    // arrays with an even number of elements should return the 2 middle elements
    else if (array.length % 2 === 0) {
      let indexArray1 = (array.length / 2) - 1;
      let indexArray2 = indexArray1 + 1;
      result = [array[indexArray1], array[indexArray2]];
  }
  return result;
}
  
  
// middle([1]) // => []
// middle([1, 2]) // => []    
// middle([1, 2, 3, 4, 5])
// middle([1, 2, 3, 4, 5, 6])
// middle([13, 14, 15, 16, 17, 18])

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual([1, 2], [1, 3])

