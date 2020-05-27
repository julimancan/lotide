const raisinAlarmArray = function(arrayOfCookies) {
  // Put your solution here
  let result = [];
  for (let array of arrayOfCookies) {
    for (i = 0; i < array.length; i++) {
      if (array[i] === "🍇") {
        result.push("Raisin alert!")
        break
      } else {
        result.push("All good!")
        break
      }
    } 
  }
  return result;
};