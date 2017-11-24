// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```

let line = ["*", "*", "*", "*", "*"];

console.log(line.join(""));
for (let i = 0; i < 4; i++) {
  line.pop();
  console.log(line.join(""));
}
