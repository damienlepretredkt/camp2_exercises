// Implements the `pow` function
// It takes two arguments and returns the first value
// at the power of the second value
//
// for instance pow(2,8) = 256

function pow(number, power) {
  // Your code here
  if(power > 0) {
    return number * pow(number, power - 1);
  } else if (power === 0) {
    return 1;
  } else {
    return null;
  }
}

// do not remove this line, it is for tests
module.exports = pow;
