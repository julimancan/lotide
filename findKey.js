const assertEqual = require('./assertEqual');
  
const findKey = (obj, callback) => {
  for (let key of Object.keys(obj)) {
    
    if (callback(obj[key])) {
      return key;
    }
  }
  return "Key not found";
  // console.log("key: ", key, "value: ", obj[key], "callback: ", callback(obj[key]));
};
    
  
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");
  
module.exports = findKey; 
  