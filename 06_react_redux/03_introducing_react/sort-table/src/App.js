import React, { Component } from 'react';
import './App.css';
import Table from './Table.js';
import products from './data.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Sort Table</h1>
        </header>
        <Table products={products}></Table>
      </div>
    );
  }
}

export default App;
