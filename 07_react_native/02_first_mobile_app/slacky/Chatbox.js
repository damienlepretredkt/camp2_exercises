import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { connect } from "react-redux";

let channel;

class ChatBox extends React.Component {

  constructor(props) {
    super(props)
    this.channel = this.props.navigation.state.params.channel.channel
  }

  static navigationOptions = {
    drawerLabel: 'Chatbox'
  };

  render() {
    return(
      <View style={styles.container}>
        <Text>Chatbox channel = {this.channel}</Text>

        {messages.map((message, index) => {
          <Text key={index}> {message.userName} say: {message.message}</Text>
        })}


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
