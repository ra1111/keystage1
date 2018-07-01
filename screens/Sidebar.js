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
    let user = this.props.navigation.getParam('user', 'some title');
    let currentUser = this.props.navigation.getParam(
      'currentUser',
      'some title'
    );
    const navigation = this.props.navigation;
    return (
      <ScrollView>
        <View>
          <Profile text={user.name} pic={user.photo} />
          <View style={styles.container}>
            {data.menu.map((index, key) => (
              <MenuItem
                currentUser={currentUser}
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
