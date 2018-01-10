import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Checkbox } from 'react-bootstrap';

function TodoList(props) {

  return (
    <ListGroup>
      <span className="head-taks-group">Tasks done</span>
      {props.todos.filter(todo => todo.active === props.filterType).map((todo, index) =>
      <ListGroupItem key={todo.name}>
          <Checkbox checked={!todo.active} onChange={() => {props.handleCheck(todo.name, !todo.active)}}>
          <span className={props.className}>{todo.name}</span>
          </Checkbox>
      </ListGroupItem>)}
    </ListGroup>
  );
}



export default TodoList
