import React from "react";
import "./App.css";
import LoginComponent from "./Login";
import ChatComponent from "./Chat";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Slacky</h1>
      </header>

      {props.userName ? (
        <ChatComponent/>
      ) : (
        <LoginComponent />
      )}
    </div>
  );
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


const AppComponent = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppComponent;
