// Write a function that takes two input parameters, and returns a new array with defaults values between the start
// number and the end number.
//
// This function should work in both ascending or descending order.

// Complete this function.
function range(startIndex, endIndex) {
  let rangeToReturn = [];
  if (startIndex <= endIndex) {
    for (let i = startIndex; i <= endIndex; i++) {
      rangeToReturn.push(i);
    }
    return rangeToReturn;
  } else {
    for (let j = startIndex; j >= endIndex; j--) {
      rangeToReturn.push(j);
    }
    return rangeToReturn;
  }
}

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = range;
