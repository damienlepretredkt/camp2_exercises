import React from 'react';
import logo from './logo.svg';
import './App.css';
import TitleComponent from './TitleComponent'
import CounterComponent from './CounterComponent'


function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div className="container">
        <div className="counter">
          <TitleComponent></TitleComponent>
          <CounterComponent></CounterComponent>
        </div>
      </div>
    </div>
  );
}

export default App;
