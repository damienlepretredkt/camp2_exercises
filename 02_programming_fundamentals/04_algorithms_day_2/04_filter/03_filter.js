// filter takes an array of integer and a function of filtering by using an higher order function
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
function filter(array, fn) {
  // Your code here
  let newArray= [];
  if (array.length > 0) {
    return array.filter(number => fn(number));
  } else {
    return [];
  }

}

function isEven(number) {
  return (number % 2 === 0);
}

function isOdd(number) {
  return (number % 2 !== 0);
}

// do not remove this line, it is for tests
module.exports = filter;
