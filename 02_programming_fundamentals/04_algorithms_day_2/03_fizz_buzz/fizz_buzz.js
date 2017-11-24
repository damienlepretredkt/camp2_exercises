/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:

   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.
*/

const testList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function fizzBuzz(list) {
  let fizzBuzzList = [];

  for (let i = 0; i < list.length; i++) {
    if ((list[i] % 5 === 0 && list[i] % 3 === 0)) {
      fizzBuzzList.push("FizzBuzz");
    } else if (list[i] % 5 === 0) {
      fizzBuzzList.push("Buzz");
    } else if (list[i] % 3 === 0) {
      fizzBuzzList.push("Fizz");
    } else {
      fizzBuzzList.push(list[i]);
    }
  }
  return fizzBuzzList;
}


module.exports = fizzBuzz;
