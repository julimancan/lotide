const tail = function(input) {
  let t = input;
  t.shift();
  return t;
};
   
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😖 Assertion Failed: ${actual} !== ${expected}`);
  }
};
   
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
   
assertEqual(result, ["Lighthouse", "Labs"]);