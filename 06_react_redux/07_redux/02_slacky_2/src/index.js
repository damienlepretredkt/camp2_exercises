import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import './index.css';
import AppComponent from './App';
import store from './store'


ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('root')
);
