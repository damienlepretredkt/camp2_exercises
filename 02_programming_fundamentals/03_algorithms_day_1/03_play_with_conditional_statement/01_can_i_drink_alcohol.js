// > Frieda and Francis walk on the street. Frieda is 22 and Francis is 17.
//
// Create two objects, `francis`, `frieda` with the fields : `age` (an integer) and `name`, (obviously a string)
const francis = {age: 17, name: "Francis"};
const frieda = {age: 22, name: "Frieda"};

// Create two variables `canFriedaDrinkAlcohol` and `canFrancisDrinkAlcohol` to answer, respectively, to the question "Can he / she drink
// alcohol.".
// These variables should stay correct if we modify the ages of the objects `francis` and `frieda` in the declaration.

let canFriedaDrinkAlcohol = false;
let canFrancisDrinkAlcohol = false;
const legalAgeToBeDrunk = 18;

if (francis.age >= legalAgeToBeDrunk) {
  canFrancisDrinkAlcohol = true;
}

if (frieda.age > legalAgeToBeDrunk) {
  canFriedaDrinkAlcohol = true;
}
