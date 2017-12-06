const tools = require("./tools.js");

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const state = {
  a: Array(3).fill(null),
  b: Array(3).fill(null),
  c: Array(3).fill(null)
};

function handleInput(input) {
  const coordinate = tools.getCoordinate(input, state);
  if (coordinate) {
    tools.updateState(coordinate, state);
    if (tools.hasWinner(state)) {
      console.log(renderBoard());
      console.log(`Congratulations ${tools.getCurrentPlayer()}, you won! ＼(＾O＾)／`);
      reader.close();
    } else if (tools.gameIsFinished(state)) {
      console.log(renderBoard());
      console.log("Looks like it's a tie. Thanks for playing! ¯\\_(ツ)_/¯");
      reader.close();
    } else {
      tools.nextPlayer();
      playTurn();
    }
  } else {
    console.log("This is not a valid move");
    playTurn();
  }
}

function renderCell(cell) {
  if (cell === null) {
    return "_";
  } else {
    return cell;
  }
}

function renderRow(newState, letter) {
  const cells = newState[letter];

  const row = cells.map(renderCell).join(" | ");

  return `${letter} ${row}`;
}

function renderBoard(newState) {
  const letters = Object.keys(newState);

  const rows = letters.map((letter) => renderRow(newState, letter)).join("\n");

  const header = "  1   2   3";

  return `${header}\n${rows}`;
}

function playTurn() {
  console.log(renderBoard(state));
  reader.question(`${tools.getCurrentPlayer()}: What is your move? e.g: a1\n`, handleInput);
}

function start() {
  tools.setCurrentPlayer();
  playTurn();
}




module.exports = {
  renderBoard: renderBoard,
  renderRow: renderRow,
  renderCell: renderCell,
  handleInput: handleInput,
  playTurn: playTurn,
  start: start
};
