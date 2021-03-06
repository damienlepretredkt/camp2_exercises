import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import HomeScreenComponent from './HomeScreen'
import store from './store'

export default class App extends React.Component {
  render() {
      return (
        <Provider store={store}>
          <HomeScreenComponent></HomeScreenComponent>
        </Provider>
      )
  }
}
