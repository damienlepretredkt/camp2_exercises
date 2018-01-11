import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import loadWeather from './services/weather'
import moment from 'moment';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      city: '',
      weathers: []
    }
    this.init()
  }

  init() {
    console.log(loadWeather);
    loadWeather(fetch)
      .then(response =>
        this.setState(
          {
            city: response.city,
            weathers: response.weather
          }
        )
      )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <h1>{this.state.city}</h1>

        <div className="temp-array">
          <table>
            <thead>
              <tr>
                <td>Hour</td>
                <td>Temperature</td>
              </tr>
            </thead>
            <tbody>
              {this.state.weathers.map((weather, index) =>
                  <tr key={index}>
                    <td>{moment(weather.dt * 1000).format("HH").toString() +":00"}</td>
                    <td>{weather.main.temp + " °C"}</td>
                  </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    );
  }
}

export default App;
