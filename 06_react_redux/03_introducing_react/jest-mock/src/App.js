import React, { Component } from 'react';
import logo from './sunshine.png';
import './App.css';
import loadWeather from './services/weather'

import ZipCodeForm from './ZipcodeForm';
import WeatherList from './WeatherList';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      zipcode: '',
      city: '',
      weathers: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.city}</h1>
        </header>

        <ZipCodeForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          zipcode={this.state.zipcode}>
        </ZipCodeForm>

        <WeatherList
          weathers={this.state.weathers}>
        </WeatherList>


      </div>
    );
  }

  handleChange = (event) => {
    this.setState({zipcode: event.target.value})
  }

  handleSubmit = (event) => {
    loadWeather(fetch, this.state.zipcode)
      .then(response =>
        this.setState(
          {
            city: response.city,
            weathers: response.weather
          }
        )
      )
    event.preventDefault();
  }
}

export default App;
