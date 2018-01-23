import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import Chat from './Chat'
import Login from './Login'
import ChatBoxComponent from './Chatbox'
import SideMenuComponent from './SideMenu'



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
  contentComponent: SideMenuComponent
}
);

export default RootNavigator;
