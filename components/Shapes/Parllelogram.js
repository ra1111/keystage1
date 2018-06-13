import React, {Component} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  Image
} from 'react-native';
import styles from './styles';
export default class Shapes extends Component {
  render() {
    return (
      <View style={styles.parallelogram}>
        <View style={styles.parallelogramRight} />
        <View style={styles.parallelogramInner} />
        <View style={styles.parallelogramLeft} />
      </View>
    );
  }
}
