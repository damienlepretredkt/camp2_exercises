import React from 'react';
import Cell from './Cell'

function Row(props) {

  const cells = props.gameState[props.letter];

  return(
    <tr>
      {cells.map((cell, index) =>
        <Cell
          key={index}
          coordinate={props.letter + (index+1)}
          cell={cell}
          handleCellClick={props.handleCellClick}>
        </Cell>)}
    </tr>
  )
}

export default Row
