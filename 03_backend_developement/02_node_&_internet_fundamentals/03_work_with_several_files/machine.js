const container = require("./container.js");

function fillWithLitersOfCoffee(litersOfCoffee) {
  container.putLitersOfCoffee(litersOfCoffee);
}

function expresso() {
  return container.consumeLitersOfCoffee(0.08);
}


function longCoffee() {
  return container.consumeLitersOfCoffee(0.15);
}

fillWithLitersOfCoffee(0.25);
// console.log(container.remainingCapacity());
console.log(expresso()); // => true
// console.log(container.remainingCapacity()); // => 0.13
console.log(longCoffee()); // => true
// console.log(container.remainingCapacity()); // => 9.77
console.log(expresso()); // => false


module.exports = {
  expresso: expresso,
  longCoffee: longCoffee,
  fillWithLitersOfCoffee: fillWithLitersOfCoffee
};
