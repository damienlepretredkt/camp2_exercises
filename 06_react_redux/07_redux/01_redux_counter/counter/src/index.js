import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConnectedApp from './App';
import { Provider } from "react-redux";
import store from "./store"



ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
