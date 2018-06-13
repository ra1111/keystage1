import React, {Component} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  Image
} from 'react-native';
import styles from './styles';
export default class Octagon extends Component {
  render() {
    return (
      <View style={styles.octagon}>
        <View style={[styles.octagonUp, styles.octagonBar]} />
        <View style={[styles.octagonFlat, styles.octagonBar]} />
        <View style={[styles.octagonLeft, styles.octagonBar]} />
        <View style={[styles.octagonRight, styles.octagonBar]} />
      </View>
    );
  }
}
