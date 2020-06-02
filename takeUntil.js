const takeUntil = function(array, callback) {
  // ...
  let newArr = [];
  for (let item of array) {
    // console.log('item: ', item)
    if (callback(item)) {
      // console.log('hello')
      break;
    } else {
      newArr.push(item)
    }
  }
  // newArr = array.forEach(item => {
  //   if (callback(item)) {
  //     console.log("hello", item)
  //     ;      
  //   } else {
  //     console.log(item)
  //     newArr.push(array[item])
  //     return newArr
  //   }
  
  

    // console.log("x: ", x)
    // console.log("callback: ", callback)
    // console.log('array: ', array)
 



  return newArr
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

module.exports = takeUntil;