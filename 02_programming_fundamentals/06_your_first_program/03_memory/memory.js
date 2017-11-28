// This function will clear the terminal when called
const clear = require("cli-clear");
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const emoticons = ["🐰", "🎃", "🌲", "🤡", "👺"];
const cards = [];
let displayCards = [];
let counter;

function game() {
  generateRandomGame(
    function() {
      console.log(displayCards);
      counter = displayCards.length;
      memory();
    }
  );
}

function memory() {
  reader.question(
    "\n Select 1st card : ",
    function(card1) {
      console.log(getTemporaryDisplay(card1));
      reader.question(
        "\n Select 2nd card : ",
        function(card2) {
          if (isPairMatch(card1, card2)) {
            displayCards[Number(card1)] = cards[Number(card1)];
            displayCards[Number(card2)] = cards[Number(card2)];
            console.log(displayCards);

            if(isAllCardHaveBeenUncovered()) {
              console.log("CONGRATULATIONS !!");
              reader.close();
            } else {
              clear();
              console.log("GOOD GAME !! CONTINUE");
              console.log(displayCards) ;
              memory();
            }
          } else {
            clear();
            console.log("NOT THE GOOD PAIR");
            console.log(getTemporaryDisplay(card1, card2));
            memory();
          }
        }
      );
    }
  );
}

function isPairMatch(indexCarte1, indexCarte2) {
  const index1 = Number(indexCarte1);
  const index2 = Number(indexCarte2);

  if (cards[index1] === cards[index2]) {
    counter = counter - 2;
    return true;
  } else {
    return false;
  }
}

function isAllCardHaveBeenUncovered() {
  return counter === 0;
}

function getTemporaryDisplay(index1, index2) {
  const tmpTab = displayCards.slice();
  if (!index1) {
    tmpTab[Number(index2)] = cards[Number(index2)];
  } else if(!index2) {
    tmpTab[Number(index1)] = cards[Number(index1)];
  } else {
    tmpTab[Number(index1)] = cards[Number(index1)];
    tmpTab[Number(index2)] = cards[Number(index2)];
  }
  return tmpTab;
}

function getRandomInt(min, max) {
  const roundedMin = Math.ceil(min);
  const roundedMax = Math.floor(max);
  return Math.floor(Math.random() * (roundedMax - roundedMin)) + roundedMin;
}

function generateRandomGame(callback) {
  emoticons.forEach((emoticon) => cards.splice(getRandomInt(0, emoticons.length - 1), 0, emoticon));
  emoticons.forEach((emoticon) => cards.splice(getRandomInt(0, emoticons.length - 1), 0, emoticon));
  for (let i=0; i < cards.length; i++) {
    displayCards.push(i);
  }

  return callback();
}

const launchGame = game();
