import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { connect } from "react-redux";
import ToolBar from './Toolbar'

class Login extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <ToolBar
          title="Login"
          navigation={this.props.navigation}>
        </ToolBar>
        <View style={styles.inputContainer}>
          <Image source={require('./slacky.png')} style={styles.logo}/>
          <TextInput
            style={styles.input}
            placeholder='Enter a nickname'
            placeholderTextColor='rgba(255, 255, 255, 0.6)'
            onChangeText={(text) => this.props.handleChange(text)}
            onSubmitEditing={() => this.props.handleSubmit()}
            value={this.props.loginInputValue}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  inputContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    height: 40,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white'
  },
  logo: {
    width: 180,
    height: 180
  }
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
