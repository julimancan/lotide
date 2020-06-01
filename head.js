const assertEqual = require('./assertEqual');

const head = function(input) {
    let h = input[0];
    return h;
  }
  
  

  
  assertEqual(head([5,6,7]), 5);
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");