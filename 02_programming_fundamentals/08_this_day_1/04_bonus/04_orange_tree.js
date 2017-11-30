// See Sparta courses for the exercise summary

const orangeTree = {
  height: 0, // in cm
  age: 0, // in years
  oranges: 0,
  alive: false,
  pickAnOrange: function() {
    return 0;
  },
  ageOneYear: function() {
    return 0;
  },
  seed: function() {
    this.height = 0;
    this.age = 0;
    this.oranges = 0;
    this.alive = true;
    return this;
  }
}

module.exports = orangeTree;
