import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import moment from 'moment';
import fakeWeatherData from './__mocks__/data';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
