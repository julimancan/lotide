# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @julimancan/lotide`

**Require it:**

`const _ = require('@julimancan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Takes an array and returns the first value.
* `tail(array)`: Takes an array and returns the last value.
* `middle(array)`: Takes an array and returns the middle value or 2 middle values depending on the length of an array.
* `assertArraysEqual(array1, array2)`: Verifies if 2 arrays are equal. 
* `assertEqual(actual, expected)`: Verifies if 2 variables are equal. 
* `assertObjectsEqual(actual, expected)`: Verifies if 2 objects are equal. 
* `countLetters(string)`: Takes a string and returns the number of characters. 
* `countOnly(array, object)`: Takes an array of items and counts how many there are of this item in an object. 
* `eqArrays(array1, array2)`: Verifies if 2 arrays are equal. 
* `eqObjects(object1, object2)`: Verifies if 2 objects are equal. 
* `findKey(object, value of key)`: Goes through an object and returns the name of the object with the value being looked for.
* `findKeyValue(object, key)`: Goes through an object and returns the name of the Key of the value being looked for.
* `letterPositions(sentence)`: Determines the position on which letters are located in the string sentence. 
* `map(array, callback)`: Verifies if every item in an array is equal to another.
* `takeUntil(array, callback)`: Returns an array with the values up to the point of the callback.
* `without(array1, array2)`: Returns an array without the items on the second array.   
