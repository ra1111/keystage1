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
export default class SideBar extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ScrollView>
        <View>
          <Profile />
          <View style={styles.container}>
            {data.menu.map((index, key) => (
              <MenuItem
                key={key}
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
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column'
  }
});
