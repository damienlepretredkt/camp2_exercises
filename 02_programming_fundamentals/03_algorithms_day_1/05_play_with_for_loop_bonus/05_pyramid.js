// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```


for (let i = 1; i < 5; i++) {
  let stars = [];
  let spaces = [];

  for (let j = 0; j < (4 - i); j++){
    spaces.push(" ");
  }
  for (let k = 0; k < i; k++) {
    if (k === 0) {
      stars.push("*");
    } else {
      stars.push("**");
    }
  }
  console.log(spaces.join("")+stars.join(""));
}
