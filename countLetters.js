const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌 Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`😖 Assertion Failed: ${actual} !== ${expected}`)
  }
  };
  

  const countLetters = function (string) {
    let letterCount = {}
    for (const letter of string) {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else { letterCount[letter] = 1 }
       
    }
    console.log(letterCount)
  
    return letterCount
  }