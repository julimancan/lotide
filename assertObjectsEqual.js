const eqArrays = function(arr1, arr2) { 
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
   return true;
  };

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌 Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`😖 Assertion Failed: ${actual} !== ${expected}`)
  }
  };

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  } 
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) === Array.isArray(object2[key])) {
    if (object1[key].length !== object2[key].length) {
      return false; 
    };
    for (let i = 0; i < object1[key].length; i++) {
      if (object1[key][i] !== object2[key][i]) {
        return false
      }
    }
    } else if (object1[key] !== object2[key]) {
     return false;
   }
  }
  return true
} 
    

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log('case 1 ' + eqObjects(ab, ba)); // => true
assertEqual(eqObjects(ab, ba), true)

const abc = { a: "1", b: "2", c: "3" };
console.log('case 2 ' + eqObjects(ab, abc)); // => false
assertEqual(eqObjects(ab, abc), false)


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log("case 3 "+eqObjects(cd, dc)); // => true
assertEqual(eqObjects(cd, dc), true)

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log("case 4: " + eqObjects(cd, cd2)); // => false
assertEqual(eqObjects(cd, cd2), false)