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
export default class Oval extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.oval} />
        </View>
      </ScrollView>
    );
  }
}
