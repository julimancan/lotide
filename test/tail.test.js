const assertEqual = require('../assertEqual');
const tail = require('../tail');
const eqArrays = require('../eqArrays')


console.log('tail:')
assertEqual(eqArrays(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]), true);