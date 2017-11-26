// In mathematics, the Fibonacci numbers are the numbers in the
// following integer sequence, called the Fibonacci sequence,
// and characterized by the fact that every number after
// the first two is the sum of the two
// preceding ones : 0, 1, 1, 2, 3, 5, 8, 13, 21...
//
// It does not work for negative numbers and your function    OK
// should return `null` if tried with a negative number or    OK
// with something else than a number.                         ??
//
// Implement a `fibo` function that takes an argument n and returns
// the n'th value of the sequence.
//
// Remember that you can call `fibo` inside of itself
// even several times

function fibo(n) {
  // your code here
  if(n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n > 1) {
    return (fibo(n-1) + fibo(n-2));
  } else {
    return null;
  }
}

// do not remove this line, it is for tests
module.exports = fibo;
