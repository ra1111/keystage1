import {DrawerNavigator} from 'react-navigation';
import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MyCourse extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>About US</Text>
      </View>
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
