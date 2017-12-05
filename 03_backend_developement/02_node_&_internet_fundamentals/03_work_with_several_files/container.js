const container = {
  litersOfCoffee: 0,
  fillWithLitersOfCoffee: function (coffeeQuantity) {
    this.litersOfCoffee += coffeeQuantity;
  }
};

function putLitersOfCoffee(numberOfLiters) {
  container.fillWithLitersOfCoffee(numberOfLiters);
  return true;
}

function consumeLitersOfCoffee(numberOfLiters) {
  if (container.litersOfCoffee >= numberOfLiters) {
    container.litersOfCoffee = container.litersOfCoffee - numberOfLiters;
    return true;
  } else {
    return false;
  }
}

function remainingCapacity() {
  return container.litersOfCoffee;
}

module.exports = {
  putLitersOfCoffee: putLitersOfCoffee,
  consumeLitersOfCoffee: consumeLitersOfCoffee,
  remainingCapacity: remainingCapacity
};
