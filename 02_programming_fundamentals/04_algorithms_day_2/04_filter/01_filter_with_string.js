// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]
function filter(array, str) {
  if (array.length > 0) {
    if (str === "even") {
      return array.filter(number => number % 2 === 0);
    } else if (str === "odd") {
      return array.filter(number => number % 2 !== 0);
    } else {
      return array;
    }
  } else {
    return [];
  }
}

// do not remove this line, it is for tests
module.exports = filter;
