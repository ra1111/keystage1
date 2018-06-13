import React, {Component} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  Image
} from 'react-native';
import styles from './styles';
export default class Hexagon extends Component {
  render() {
    return (
      <View style={styles.hexagon}>
        <View style={styles.hexagonInner} />
        <View style={styles.hexagonBefore} />
        <View style={styles.hexagonAfter} />
      </View>
    );
  }
}
