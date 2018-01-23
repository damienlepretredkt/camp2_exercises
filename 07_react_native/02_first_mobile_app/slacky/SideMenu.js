import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.styles';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';
import { connect } from "react-redux";

class SideMenu extends Component {

  navigateToScreen = (route, channel) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
      params: {channel: channel}
    });
    this.props.handleChangeChan(channel);
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (

      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              Profile
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.props.handleLogout}>
              Logout
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle} onPress={this.navigateToScreen('Chat')}>
              Channels
            </Text>
            <View style={styles.navSectionStyle}>
              {this.props.channels.map((channel, index) =>
                <Text key={index} style={styles.navItemStyle} onPress={this.navigateToScreen('ChatBox', channel)}>
                  {channel}
                </Text>
              )}
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>Slacky app</Text>
        </View>
      </View>

    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.messages.channels,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleChangeChan: (channel) => dispatch({type: "CHAN_CHANGE" ,currentChannel: channel}),
    handleLogout: () => dispatch({type: "LOGOUT"})
  }
}

const SideMenuComponent = connect(mapStateToProps, mapDispatchToProps)(SideMenu);

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenuComponent;
