import React, { Component } from 'react';
import './App.css';
import Board from './Board';
import WINNING_COORDINATES from './solutions';
import { flattenArray, isNotNull } from './tools';

class App extends Component {



  constructor(props) {
    super(props);
    const randomPlayer = ["X", "O"][Math.round(Math.random())]
    this.state = {
      currentPlayer: randomPlayer,
      value: '',
      title: `Tic Tac Toe , ${randomPlayer} now it's time to play`,
      gameState: {
        a: Array(3).fill(null),
        b: Array(3).fill(null),
        c: Array(3).fill(null)
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCellClick = this.handleCellClick.bind(this)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>
        </header>

          <div className="center-table">
            <Board gameState={this.state.gameState} handleCellClick={this.handleCellClick}></Board>
          </div>

        <button onClick={this.newGame}>Reset game</button>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleCellClick(cellCoordinate) {

    const coordinate = this.getCoordinate(cellCoordinate, this.state.gameState);
    if (coordinate) {
      this.updateState(coordinate, this.state.gameState);
      if (this.hasWinner(this.state.gameState)) {

        this.setState({
          title: `Congratulations ${this.state.currentPlayer}, you won! ＼(＾O＾)／)`
        })

      } else if (this.gameIsFinished(this.state.gameState)) {

        this.setState({
          title: `Looks like it's a tie. Thanks for playing! ¯\\_(ツ)_/¯`,
        })


      } else {
        this.nextPlayer();
      }
    } else {
      this.setState({
        title: 'This is not a valid move'
      })
    }
  }

  hasWinner(gameState) {
  const isWinningLine = (line) => {
    const pattern =
      line
        .map((coordinate) => gameState[coordinate.letter][coordinate.digit])
        .join("");

    return pattern === "XXX" || pattern === "OOO";
  };

  return WINNING_COORDINATES.some(isWinningLine);
}

  getCoordinate(input, gameState) {
    const letter = input[0];
    const digit = input[1] - 1;

    if (gameState[letter] && gameState[letter][digit] === null) {
      return { letter: letter, digit: digit };
    } else {
      return null;
    }
  }

  updateState(coordinate, gameState) {
    const line = gameState[coordinate.letter];

    line[coordinate.digit] = this.state.currentPlayer;
  }

  nextPlayer() {
    if (this.state.currentPlayer === "X") {
      this.setState({
        currentPlayer: "O",
        title: "Tic Tac Toe , O now it's time to play",
        value: ''
      });
    } else {
      this.setState({
        currentPlayer: "X",
        title: "Tic Tac Toe, X now it's time to play",
        value: ''
      });
    }
  }

  gameIsFinished(newGameState) {
    const allValues = flattenArray(Object.values(newGameState));

    return allValues.every(isNotNull);
  }

  newGame = () => {
    const newGame = {
      a: Array(3).fill(null),
      b: Array(3).fill(null),
      c: Array(3).fill(null)
    }

    const newPlayer = ["X", "O"][Math.round(Math.random())];

    this.setState({
      gameState: newGame,
      currentPlayer: newPlayer,
      title: `Tic Tac Toe , ${newPlayer} now it's time to play`
    })
  }

}



export default App;
