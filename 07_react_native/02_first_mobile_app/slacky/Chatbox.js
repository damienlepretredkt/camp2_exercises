import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, KeyboardAvoidingView } from 'react-native';
import { connect } from "react-redux";
import styles from './Chatbox.styles';
import ToolBar from './Toolbar'

let channel;

class ChatBox extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Chatbox'
  };

  render() {
    return(
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ToolBar
          title={this.props.navigation.state.params.channel}
          navigation={this.props.navigation}>
        </ToolBar>

        <KeyboardAvoidingView style={styles.messagesContainer}>
          <FlatList
            data={this.props.messages.filter((message) => message.channel === this.props.navigation.state.params.channel)}
            renderItem={({item}) => <Text style={styles.message}>{item.userName} say: {item.message}</Text>}
            contentContainerStyle={styles.messages}
            keyExtractor={(item, index) => index}
          />
        </KeyboardAvoidingView>

        <KeyboardAvoidingView style={styles.messageBoxContainer}>
          <TextInput
            style={styles.messageBox}
            placeholder='message'
            onChangeText={(text) => this.props.handleChange(text)}
            onSubmitEditing={() => this.props.handleSubmit(this.props.navigation.state.params.channel.channel)}
            value={this.props.message}
          />
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>


    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    handleChange: (text) => dispatch({type: "NEWMESSAGE", newMessage: text}),
    handleSubmit: (channel) => {
      return dispatch({type: "SENDMESSAGEANDRESET"})
    }
  }
}


function mapStateToProps(state) {
  return {
    messages: state.messages.messages,
    message: state.message.newMessage
  }
}



const ChatBoxComponent = connect(mapStateToProps, mapDispatchToProps)(ChatBox);
export default ChatBoxComponent;
