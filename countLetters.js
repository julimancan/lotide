
const countLetters = function(string) {
  let letterCount = {};
  for (const letter of string) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

module.exports = countLetters;
