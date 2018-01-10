import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import AddTodo from './AddTodo'
import TodoList from './TodoList'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to TodoApp</h1>
        </header>
        <div className="container">

          <AddTodo handleChange={this.handleChange} value={this.state.value} handleSubmit={this.handleSubmit}></AddTodo>

          <TodoList filterType={true} className={""} handleCheck={this.handleCheck} todos={this.state.todos}></TodoList>
          <TodoList filterType={false} className={"todo-done"} handleCheck={this.handleCheck} todos={this.state.todos}></TodoList>

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

  handleCheck = (selectedTodo, active) => {
    const todoIndex = this.state.todos.findIndex((todo) => todo.name === selectedTodo)
    const newTodo = this.state.todos[todoIndex]
    newTodo.active = active;
    const newTodos = [...this.state.todos]
    newTodos.splice(todoIndex, 1)
    newTodos.push(newTodo);

    this.setState({todos: [...newTodos]})
  }

  removeDone = () => {
    const cleanTodoList = this.state.todos.filter(todo => todo.active === true);
    this.setState({todos: [...cleanTodoList]})
  }

  handleSubmit = (event) => {
    const newTodo = {
      name: this.state.value,
      active: true
    }
    this.setState({todos: [...this.state.todos, ...[newTodo]]})
    event.preventDefault();
  }
}

export default App;
