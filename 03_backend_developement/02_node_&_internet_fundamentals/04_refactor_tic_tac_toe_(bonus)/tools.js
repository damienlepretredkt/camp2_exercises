const WINNING_COORDINATES = [
  [{letter: "a", digit: "0"}, {letter: "a", digit: "1"}, {letter: "a", digit: "2"}],
  [{letter: "b", digit: "0"}, {letter: "b", digit: "1"}, {letter: "b", digit: "2"}],
  [{letter: "c", digit: "0"}, {letter: "c", digit: "1"}, {letter: "c", digit: "2"}],
  [{letter: "a", digit: "0"}, {letter: "b", digit: "1"}, {letter: "c", digit: "2"}],
  [{letter: "a", digit: "2"}, {letter: "b", digit: "1"}, {letter: "c", digit: "0"}],
  [{letter: "a", digit: "0"}, {letter: "b", digit: "0"}, {letter: "c", digit: "0"}],
  [{letter: "a", digit: "1"}, {letter: "b", digit: "1"}, {letter: "c", digit: "1"}],
  [{letter: "a", digit: "2"}, {letter: "b", digit: "2"}, {letter: "c", digit: "2"}]
];



let currentPlayer;


function getCurrentPlayer() {
  return currentPlayer;
}

function getCoordinate(input, state) {
  const letter = input[0];
  const digit = input[1] - 1;

  if (state[letter] && state[letter][digit] === null) {
    return { letter: letter, digit: digit };
  } else {
    return null;
  }
}

function updateState(coordinate, state) {
  const line = state[coordinate.letter];

  line[coordinate.digit] = currentPlayer;
}

function nextPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function setCurrentPlayer() {
  currentPlayer = ["X", "O"][Math.round(Math.random())];
}


function flattenArray(arrayOfArray) {
  return arrayOfArray.reduce((newArray, array) => newArray.concat(array), []);
}

function gameIsFinished(state) {
  const allValues = flattenArray(Object.values(state));

  return allValues.every(isNotNull);
}

function hasWinner(state) {
  const isWinningLine = (line) => {
    const pattern =
      line
        .map((coordinate) => state[coordinate.letter][coordinate.digit])
        .join("");

    return pattern === "XXX" || pattern === "OOO";
  };

  return WINNING_COORDINATES.some(isWinningLine);
}

function isNotNull(value) {
  return value !== null;
}

module.exports = {
  isNotNull: isNotNull,
  hasWinner: hasWinner,
  gameIsFinished: gameIsFinished,
  flattenArray: flattenArray,
  setCurrentPlayer: setCurrentPlayer,
  nextPlayer: nextPlayer,
  updateState: updateState,
  getCoordinate: getCoordinate,
  getCurrentPlayer: getCurrentPlayer
};
