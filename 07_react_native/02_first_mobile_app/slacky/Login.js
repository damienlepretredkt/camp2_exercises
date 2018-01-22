import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { connect } from "react-redux";

class Login extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
          placeholder='Enter a nickname'
          onChangeText={(text) => this.props.handleChange(text)}
          onSubmitEditing={() => this.props.handleSubmit()}
          value={this.props.loginInputValue}
        />
      </View>
    );
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

function mapDispatchToProps(dispatch) {
  return {
    handleChange: (text) => dispatch({type: "LOGINVALUE", loginInputValue: text}),
    handleSubmit: () => {
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
