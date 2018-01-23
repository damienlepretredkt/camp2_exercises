import React, { Component } from "react";

import SideBarComponent from './Sidebar';
import ChatBoxComponent from './Chatbox'
import NoChan from './NoChan';
import "./Chat.css";


class Chat extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="fullScreen">
        <div className="App main">
          <header className="App-header">
            <h1 className="App-title">Slacky</h1>
          </header>
          <SideBarComponent></SideBarComponent>
          {this.props.match.params.id ? (
            <ChatBoxComponent></ChatBoxComponent>
          ) : (
            <NoChan></NoChan>
          )}
        </div>
      </div>

    );
  }
}



export default Chat;
