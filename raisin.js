const raisinAlarm = function(cookie) {
  let message = "All good!";
  for (i = 0; i < cookie.length; i++) {
    if (cookie[i] === "🍇") {
      message = "Raisin alert!"
    }
  }
  return(message)
};
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));