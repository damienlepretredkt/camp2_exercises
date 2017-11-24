// filter takes an array of integer and a function of filtering
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
function filter(array, fn) {
  let newArray= [];
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      if (fn(array[i])) {
        newArray.push(array[i]);
      }
    }
  }
  return newArray;
}
function isEven(number) {
  return (number % 2 === 0);
}

function isOdd(number) {
  return (number % 2 !== 0);
}

// do not remove this line, it is for tests
module.exports = filter;
