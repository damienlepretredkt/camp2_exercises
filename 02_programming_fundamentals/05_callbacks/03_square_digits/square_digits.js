// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer

const square = (number) => (number * number).toString();

function squareDigits(number, callback) {
  let sqDigits = "";

  // convertir int => string
  const numberInString = number.toString();

  // récupérer la longueur du string
  const numberLength  = numberInString.length;

  // pour chaque digit concat le chiffre trouvé (appel fonction spéciale)
  for (let i = 0; i < numberLength; i++) {
    sqDigits = sqDigits + square(Number(numberInString[i]));
  }

  // callback la concat avec le convert string => int
  return Number(sqDigits);
}



// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;
