// See Sparta courses for the exercise summary

const orangeTree = {
  height: 0, // in cm
  age: 0, // in years
  oranges: 0,
  alive: false,
  pickAnOrange: function() {
    if(this.oranges > 0) {
      this.oranges = this.oranges - 1
      return true
    } else {
        return false;
    }
  },
  ageOneYear: function() {
    this.age += 1;
    if (this.age < 10) {
      this.height += 25; // 25 centimeters until it is 10 years old.
      if(this.age >= 5) {
        this.oranges = 10; // 10 oranges when it's between 5 and 10 years old.
        return this
      }
    } else if (this.age >= 10 && this.age < 20) {
      this.height += 10; //10 centimeters until it is 20 years old
      this.oranges = 20 // 20 oranges when it's between 10 and 20 years old
      return 10;
    } else if (this.age >= 20 && this.age < 40) {
      this.oranges = 5 // 5 oranges until it's 40 years old.
      return this;
    } else if (this.age >= 40 && this.age < 50) {
      this.oranges = 0;
    } else if (this.age >= 50) {
      this.alive = RIPSoon(this.age);
      return this;
    }

  },
  seed: function() {
    this.height = 0;
    this.age = 0;
    this.oranges = 0;
    this.alive = true;
    return this;
  }
}

function RIPSoon(age) {
  const deadAge = Math.floor(Math.random() * 100 + 1);
  if (deadAge >= age && deadAge <= 100 ) {
    return true;
  } else {
    return false;
  }
}



module.exports = orangeTree;
