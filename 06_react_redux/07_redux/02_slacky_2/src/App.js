import React, {Component} from "react";
import "./App.css";
import LoginComponent from "./Login";
import ChatComponent from "./Chat";

import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import store from './store'

import { replace } from 'react-router-redux'

class App extends Component {

  componentDidMount() {
    this.props.username ? store.dispatch(replace('/chats')) : store.dispatch(replace('/login'))
  }

  render() {
    return (
      <Router>
          <ConnectedSwitch>
            <Route path="/login" component={LoginComponent}/>
            <Route exact path="/chats" component={ChatComponent} />
            <Route path="/chats/:id" component={ChatComponent} />
          </ConnectedSwitch>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleIncomingMessage: (messages) =>
      dispatch({type: "INCOMINGMESSAGES", messages: messages})

  }
}

function mapStateToProps(state) {
  return {
    userName: state.login.userName,
  }
}

const ConnectedSwitch = connect(state => ({
  location: state.router.location
}))(Switch)




const AppComponent = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppComponent;
