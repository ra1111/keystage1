import React, {Component} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  Image
} from 'react-native';
import styles from './styles';
export default class Pentagon extends Component {
  render() {
    return (
      <View style={styles.pentagon}>
        <View style={styles.pentagonInner} />
        <View style={styles.pentagonBefore} />
      </View>
    );
  }
}
