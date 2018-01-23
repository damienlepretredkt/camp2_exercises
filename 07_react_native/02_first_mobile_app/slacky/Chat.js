import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import ToolBar from './Toolbar'
import { connect } from "react-redux";
import { List, ListItem } from 'react-native-elements'
import {NavigationActions} from 'react-navigation';

import {
  StackNavigator, DrawerNavigator
} from 'react-navigation';


class Chat extends React.Component {
  static navigationOptions = {
  drawerLabel: 'Home'
};

  navigateToScreen = (route, channel) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
      params: {channel: channel}
    });
    this.props.handleChangeChan(channel);
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return(
      <View style={styles.container}>
        <ToolBar
          title="Channels"
          navigation={this.props.navigation}>
        </ToolBar>
        <List containerStyle={{width: '100%', marginBottom: 20}}>
          {
            this.props.channels.map((l, i) => (
              <ListItem
                key={i}
                title={l}
                onPress={this.navigateToScreen('ChatBox', l)}
              />
            ))
          }
        </List>
        <View style={styles.content}>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

function mapDispatchToProps(dispatch) {
  return {
    handleChange: (text) => dispatch({type: "NEWMESSAGE", newMessage: text}),
    handleSubmit: (channel) => {
      return dispatch({type: "SENDMESSAGEANDRESET"})
    },
    handleChangeChan: (channel) => dispatch({type: "CHAN_CHANGE" ,currentChannel: channel})
  }
}


function mapStateToProps(state) {
  return {
    channels: state.messages.channels,
  }
}

const ChatComponent = connect(mapStateToProps, mapDispatchToProps)(Chat);
export default ChatComponent
