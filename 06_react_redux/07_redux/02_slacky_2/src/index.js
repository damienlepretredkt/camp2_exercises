import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import './index.css';
import AppComponent from './App';
import store, { history }  from './store'
import { ConnectedRouter } from 'react-router-redux'

store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppComponent />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
