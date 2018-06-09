import React, {Component} from 'react';
import {ImageBackground, TouchableOpacity, View, Text} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {Icon} from 'react-native-elements';
import styles from './style';
export default class MenuItem extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate(
            this.props.text === 'Contact us' ? 'Contact' : this.props.text
          );
        }}
      >
        <View style={styles.wrapper}>
          <Icon name={this.props.icon} type="ionicon" />
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
        <View style={styles.divider} />
      </TouchableOpacity>
    );
  }
}
