import React  from 'react';
import Row from './Row'


function Board(props) {

  const letters = Object.keys(props.gameState);

  return(

    <table>
      <tbody>
        {letters.map(
          (letter, index) =>
            <Row
              key={index}
              gameState={props.gameState}
              letter={letter}
              handleCellClick={props.handleCellClick}>
            </Row>
        )}
      </tbody>
    </table>
  )
}


export default Board
