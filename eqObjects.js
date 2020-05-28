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
   console.log(key);
   if (object1[key] !== object2[key]) {
     return false;
   }
  }
  return true
} 
    

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log('case 1 ' + eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log('case 2 ' + eqObjects(ab, abc)); // => false

assertEqual(eqObjects(ab, ba), true)
assertEqual(eqObjects(ab, abc), false)