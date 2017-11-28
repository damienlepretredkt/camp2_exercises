const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomInt(min, max) {
  const roundedMin = Math.ceil(min);
  const roundedMax = Math.floor(max);
  return Math.floor(Math.random() * (roundedMax - roundedMin)) + roundedMin;
}

const randomNumber = getRandomInt(0, 100);

function isAnswerGood(answer) {
  const answerInNumber = Number(answer);

  if (isNaN(answerInNumber) === true) {
    console.log("This was not a number");
    return false;

  } else if (answerInNumber > randomNumber) {
    console.log("Too high");
    return false;

  } else if (answerInNumber < randomNumber) {
    console.log("Too low");
    return false;

  } else {
    return true;

  }
}

function game() {
  console.log(`protip ${randomNumber}`);
  reader.question(
    "What is the magic number ? \n",
    function(answer) {
      if (isAnswerGood(answer)) {
        reader.close();
      } else {
        game();
      }
    }
  );
}

const launchGame = game();
