import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ToolBar extends React.Component {
  render() {
    return(
      <View style={styles.toolbar}>
        <Text
          style={styles.title}
          onPress={() => this.props.navigation ? this.props.navigation.navigate('DrawerOpen') : null}>
          SLACKY - {this.props.title}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: 80,
    width: '100%',
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    color: 'white',
    paddingBottom: 14,
    fontWeight: 'bold'
  }
});

export default ToolBar;
