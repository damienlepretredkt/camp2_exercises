import React, { Component } from 'react';
import './App.css';
import { ListGroup, ListGroupItem, FormGroup, FormControl, Checkbox, Button } from 'react-bootstrap';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      value: '',
      checkboxChecked: true
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to TodoApp</h1>
        </header>
        <div className="container">

        <form onSubmit={this.handleSubmit}>
  				<FormGroup controlId="formBasicText">
  					<FormControl
  						type="text"
  						value={this.state.value}
  						placeholder="Enter todo name"
  						onChange={this.handleChange}/>
  				</FormGroup>
  			</form>

        <ListGroup>
          <span className="head-taks-group">Tasks Open</span>
          {this.state.todos.filter(todo => todo.status === 'open').map((todo, index) =>
          <ListGroupItem key={todo.name}>
              <Checkbox onChange={() => this.handleCheck(todo.name, 'done')}>
                <span>{todo.name}</span>
              </Checkbox>
          </ListGroupItem>)}
        </ListGroup>

        <ListGroup>
          <span className="head-taks-group">Tasks done</span>
          {this.state.todos.filter(todo => todo.status === 'done').map((todo, index) =>
          <ListGroupItem key={todo.name}>
              <Checkbox checked={this.state.checkboxChecked} onChange={() => this.handleCheck(todo.name, 'open')}>
              <span className="todo-done">{todo.name}</span>
              </Checkbox>
          </ListGroupItem>)}
        </ListGroup>

        <div>
          <Button bsStyle="primary" onClick={() => this.removeDone()}>Delete done tasks</Button>
        </div>
        </div>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleCheck = (selectedTodo, status) => {
    const todoIndex = this.state.todos.findIndex((todo) => todo.name === selectedTodo)
    const newTodo = this.state.todos[todoIndex]
    newTodo.status = status;
    const newTodos = [...this.state.todos]
    newTodos.splice(todoIndex, 1)
    newTodos.push(newTodo);

    this.setState({todos: [...newTodos]})
  }

  removeDone = () => {
    const cleanTodoList = this.state.todos.filter(todo => todo.status === 'open');
    this.setState({todos: [...cleanTodoList]})
  }

  handleSubmit = (event) => {
    const newTodo = {
      name: this.state.value,
      status: 'open'
    }
    this.setState({todos: [...this.state.todos, ...[newTodo]]})
    event.preventDefault();
  }
}

export default App;
