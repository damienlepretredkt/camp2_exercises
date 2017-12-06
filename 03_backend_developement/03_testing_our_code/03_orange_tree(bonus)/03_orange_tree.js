const grow = (tree) => {
  if (tree.age < 10) {
    tree.height += 25;
  } else if (tree.age < 20) {
    tree.height += 10;
  }
};

const mightDie = (tree) => {
  if (tree.age > 100) {
    tree.alive = false;
  } else if (tree.age > 50 && tree.alive) {
    const randomNumber = Math.random() * (100 - 50) + 50;
    if (randomNumber <= tree.age) {
      tree.alive = false;
    }
  }
};

const produceOranges = (tree) => {
  if (tree.age >=5 && tree.age < 10) {
    tree.oranges = 10;
  } else if (tree.age >= 10 && tree.age < 20) {
    tree.oranges = 20;
  } else if (tree.age >= 20 && tree.age < 40) {
    tree.oranges = 5;
  } else {
    tree.oranges = 0;
  }
};

const orangeTree = {
  age: 0,
  alive: true,
  height: 0,
  oranges: 0,
  ageOneYear: function() {
    this.age++;
    grow(this);
    produceOranges(this);
    mightDie(this);
  },
  pickAnOrange: function() {
    if (this.oranges > 0) {
      this.oranges--;

      return true;
    } else {
      return false;
    }
  },
  seed: function() {
    this.alive = true;
    this.height = 0;
    this.age = 0;
    this.oranges = 0;
  }
};

module.exports = {
  grow: grow,
  mightDie: mightDie,
  produceOranges: produceOranges,
  orangeTree: orangeTree
};
