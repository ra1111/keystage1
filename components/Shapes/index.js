import React, {Component} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
import styles from './styles';
export default class Shapes extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.square} />
          <View style={styles.rectangle} />
          <View style={styles.trapezoid} />
          <View style={styles.triangle} />
          <View style={styles.circle} />
          <View style={styles.oval} />
          <View style={styles.parallelogram} />
        </View>
      </ScrollView>
    );
  }
}
