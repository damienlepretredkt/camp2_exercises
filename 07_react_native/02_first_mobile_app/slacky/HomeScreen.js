import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";
import RootNavigator from './RootNavigator'
import LoginComponent from './Login'
import store from './store'

import {
  StackNavigator,
} from 'react-navigation';


class HomeScreen extends React.Component {

  render() {
    if (this.props.userName) {
      return (
          <RootNavigator></RootNavigator>
      )
    } else {
      return(
          <LoginComponent></LoginComponent>
      )
    }
  }
}


function mapDispatchToProps(dispatch) {
  return {

  }
}

function mapStateToProps(state) {
  return {
    userName: state.login.userName,
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreenComponent = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
export default HomeScreenComponent;
