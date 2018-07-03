import React, {Component} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  Image
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {Icon} from 'react-native-elements';
import styles from './style';
export default class MenuItem extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          this.props.navigation.navigate(this.props.route, {
            title: this.props.title,
            des: this.props.des,

            navigation: this.props.navigation
          });
        }}
      >
        <Icon
          type="ionicon"
          name={this.props.icon}
          raised
          color="orange"
          style={styles.image}
        />
        <Text style={styles.title}>{this.props.title || 'hi'}</Text>
        <Text style={styles.des}>{this.props.des || 'some description'}</Text>
      </TouchableOpacity>
    );
  }
}
