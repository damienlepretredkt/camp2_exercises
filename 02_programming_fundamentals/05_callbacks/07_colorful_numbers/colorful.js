// Create a function `isColorful(number)` that will return `true` if the given number is colorful
// or `false` if the given number is not colorful
//
// Example:
//
// isColorful(3245) # => true
// isColorful(10) # => false
//
// Note: Read Sparta exercises to have more details about what defines a colorful number

// Insert your code here ⇩
// fonction de la longueur on découvre le nombre d'itération de traitements
// chaque traitements devra déterminer les couples a executer

function isColorful(number) {
  let result = [];
  for (let i = 1; i < getNumberLength(number); i++) {
    result.push(getSubStringToCalculate(number, i));
  }
  console.log(result);
}


function getSubStringToCalculate(number, subStringLength) {
  const numberAsString = number.toString();
  let result = [];
  for (let i = 0; i < numberAsString.length - 1 ; i++) {
    result.push(Number(numberAsString.substring(i, subStringLength)));
  }
  return result.reduce((accumulator, currentValue) => accumulator * currentValue);
}

function getNumberLength(number) {
  return number.toString().length;
}


// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = isColorful;
