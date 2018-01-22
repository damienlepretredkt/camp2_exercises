import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {
  StackNavigator, DrawerNavigator
} from 'react-navigation';


class Chat extends React.Component {
  static navigationOptions = {
  drawerLabel: 'Home'
};

  render() {
    return(
      <View style={styles.container}>
        <Text>Chat view.</Text>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Select channel"
          color="#841584"
          accessibilityLabel="Select channel"
        />
      </View>
    )
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

export default Chat
