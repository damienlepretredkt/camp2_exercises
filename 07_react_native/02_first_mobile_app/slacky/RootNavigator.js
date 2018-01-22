import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import Chat from './Chat'
import Login from './Login'
import ChatBoxComponent from './Chatbox'
import SideMenu from './SideMenu'



const RootNavigator = DrawerNavigator({
  Chat: {
    screen: Chat
  },
  ChatBox: {
    screen: ChatBoxComponent
  },
  Login: {
    screen: Login
  }
},
{
  // define customComponent here
  contentComponent: SideMenu
}
);

export default RootNavigator;
