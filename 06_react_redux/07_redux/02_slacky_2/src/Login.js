import React from "react";
import { connect } from "react-redux";

function Login(props)  {
    return (
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
    );
  }

function mapDispatchToProps(dispatch) {
  return {
    handleChange: (event) => dispatch({type: "LOGINVALUE", loginInputValue: event.target.value}),
    handleSubmit: (event) => {
      event.preventDefault();
      return dispatch({type: "LOGIN"})
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
