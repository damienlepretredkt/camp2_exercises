import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.styles';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';

const channels = ['camp1','camp2','camp3'];

class SideMenu extends Component {



  navigateToScreen = (route, channel) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
      params: {channel: channel}
    });
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
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Login')}>
              Logout
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              Channels
            </Text>
            <View style={styles.navSectionStyle}>
              {channels.map((channel, index) =>
                <Text key={index} style={styles.navItemStyle} onPress={this.navigateToScreen('ChatBox', {channel})}>
                  {channel}
                </Text>
              )}
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
