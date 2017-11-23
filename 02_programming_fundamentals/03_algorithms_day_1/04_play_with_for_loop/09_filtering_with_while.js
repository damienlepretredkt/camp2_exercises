// ## Iteration on arrays with filter using while
//
// -  Create an array called `litteralDigits` from `zero` to `nine` where each array entry is a spelled-out number;
// -  Using `length`, write on `stdout` each odd values of the table.
let litteralDigits = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];

let i = 0;

while (i < litteralDigits.length) {
  if ((i % 2) === 1) {
    console.log(litteralDigits[i]);
  }
  i++;
}
