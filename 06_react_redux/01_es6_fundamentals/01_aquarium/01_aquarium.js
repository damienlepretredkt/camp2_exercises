// Insert code here
class Aquarium {

  constructor(fishes, algaes) {
    this.fishes = fishes;
    this.algaes = algaes;
  }

  addFish(fish) {
    this.fishes.push(fish);
  }

  addAlgae(algae) {
    this.algaes.push(algae);
  }

  endTurn() {
    // console.log(this.algaes.length);
    // this.algaes.forEach(console.log);

    // console.log(this.fishes.length);
    // this.fishes.forEach(console.log);

    this.fishes.forEach(fish => this.eatSomething(fish));

  }

  eatAlgae() {
    if (this.algaes.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  eatFish() {
    if (this.fishes.length > 1) {
      return true;
    } else {
      return false;
    }
  }

  eatSomething(fish) {
    const {isCarnivorous} = fish;
    if(isCarnivorous === 0) {
      if (this.eatFish()) {
        this.fishes.pop();
      }
    } else {
      if (this.eatAlgae()) {
        this.algaes.pop();
      }
    }


  }

}


class Fish {
  constructor(name, sex, isCarnivorous = 0) {
    this.name = name;
    this.sex = sex;
    this.isCarnivorous = isCarnivorous;
  }
}

class Algae {
  constructor() {}
}


// const newFish1 = new Fish("Mobydick", "F", 1);
// const newFish2 = new Fish("Bubulle", "F", 0);
// const newFish3 = new Fish("Nemo", "F", 1);
// const newFish4 = new Fish("RedFish", "F", 0);
// const newFish5 = new Fish("Biloute", "F", 1);
//
// const newAlgae1 = new Algae();
// const newAlgae2 = new Algae();
// const newAlgae3 = new Algae();
// const newAlgae4 = new Algae();
// const newAlgae5 = new Algae();
// const newAlgae6 = new Algae();
// const newAlgae7 = new Algae();
// const newAlgae8 = new Algae();
//
//
// const newAquarium = new Aquarium(
//   [newFish1, newFish2, newFish3, newFish4, newFish5],
//   [newAlgae1, newAlgae2, newAlgae3, newAlgae4, newAlgae5, newAlgae6, newAlgae7, newAlgae8]
// );
//
// console.log("BEFORE");
// console.log(newAquarium.fishes);
// console.log(newAquarium.algaes);
//
// newAquarium.endTurn();
//
// console.log("AFTER");
// console.log(newAquarium.fishes);
// console.log(newAquarium.algaes);

module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};
