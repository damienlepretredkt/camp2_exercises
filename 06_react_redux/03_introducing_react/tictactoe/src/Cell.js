import React from 'react';


function Cell(props) {
  let cellDisplay = ""
  if (props.cell !== null) {
    cellDisplay = props.cell
  }

  return(
    <td onClick={() => props.handleCellClick(props.coordinate)}>{cellDisplay}</td>
  )
}

export default Cell;
