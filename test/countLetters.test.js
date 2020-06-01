const countLetters = require('../countLetters');

const assertEqual = require('../assertEqual');

console.log('countLetters:');
assertEqual(countLetters('julian'), { j: 1, u: 1, l: 1, i: 1, a: 2, n: 1 });
