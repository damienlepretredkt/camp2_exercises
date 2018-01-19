import React, { Component } from 'react';
import { connect } from "react-redux";

class ChatBox extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidUpdate() {
    // https://reactjs.org/docs/react-component.html#componentdidupdate
    // This will make the list of messages scroll to the bottom each time
    // the component update, that way, the last message will always be visible

    this.messageListDiv.scrollTop = this.messageListDiv.scrollHeight;
  }

  render() {
    return (
      <div className="Chat">
        <div
          className="Chat-messages"
          ref={(node) => {
            // refs allows you to have a reference to an element of the DOM
            // You should use this parcimoniously and don't change the DOM or React
            // will go crazy
            // See https://reactjs.org/docs/refs-and-the-dom.html
            this.messageListDiv = node;
          }}
        >
          {this.props.messages.filter(message => message.channel === this.props.currentChannel).map((message, index) =>
            (
              <div className="message-container" key={index}>
                <span className="author">{message.userName}</span>
                <span className="message">{message.message}</span>
              </div>
            )
          )}
        </div>
        <div className="Chat-form">
          <form onSubmit={this.props.handleSubmit}>
            <input
              type="text"
              value={this.props.newMessage}
              onChange={this.props.handleChange}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleChange: (event) => dispatch({type: "NEWMESSAGE" ,newMessage: event.target.value}),
    handleSubmit: (event) => {
      event.preventDefault();
      return dispatch({type: "SENDMESSAGEANDRESET"})
    }
  }
}

function mapStateToProps(state) {
  return {
    newMessage: state.message.newMessage,
    currentChannel: state.message.currentChannel,
    messages: state.messages.messages
  }
}

const ChatBoxComponent = connect(mapStateToProps, mapDispatchToProps)(ChatBox);
export default ChatBoxComponent;
