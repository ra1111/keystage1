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
export default class Trapezium extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.trapezoid} />
        </View>
      </ScrollView>
    );
  }
}
