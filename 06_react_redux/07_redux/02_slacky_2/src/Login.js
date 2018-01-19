import React from "react";
import { connect } from "react-redux";
import { replace } from 'react-router-redux'

function Login(props)  {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Slacky</h1>
        </header>
      <form className="Login" onSubmit={props.handleSubmit}>
        <div>
          Please choose a login name
        </div>
        <input
          type="text"
          onChange={props.handleChange}
          value={props.loginInputValue}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
    );
  }

function mapDispatchToProps(dispatch) {
  return {
    handleChange: (event) => dispatch({type: "LOGINVALUE", loginInputValue: event.target.value}),
    handleSubmit: (event) => {
      event.preventDefault();
      dispatch({type: "LOGIN"});
      dispatch(replace('/chats'));
    }
  }
}

function mapStateToProps(state) {
  return {
    loginInputValue: state.login.loginInputValue,
  }
}

const LoginComponent = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginComponent;
