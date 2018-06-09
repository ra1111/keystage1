import {DrawerNavigator} from 'react-navigation';
import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuItem from '../components/MenuItem';
import Profile from '../components/Profile';
const data = {
  menu: [
    {index: 1, text: 'Home', icon: 'ios-home'},
    {index: 2, text: 'Share', icon: 'ios-share'},
    {index: 3, text: 'Logout', icon: 'ios-log-out'},
    {index: 4, text: 'Contact us', icon: 'ios-mail'}
  ]
};
export default class MyCourse extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Profile />
          <View style={styles.wrapper}>
            {data.menu.map((index, key) => (
              <MenuItem
                navigation={navigation}
                text={index.text}
                icon={index.icon}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EEEEEE',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center'
  },
  wrapper: {
    width: '100%'
  }
});
