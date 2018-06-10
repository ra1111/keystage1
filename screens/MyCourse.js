import React, {Component} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  Image
} from 'react-native';
import {Icon} from 'react-native-elements';
import {NavigationActions} from 'react-navigation';
import styles from '../components/Add/styles';
export default class MyCourse extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.questionWrapper}>
          <Text>{this.props.firstNumber || 1}</Text>
          <Icon />
          <Text>{this.props.secondNumber || 1}</Text>
          <Icon />
        </View>
        <View style={styles.optionWrapper}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{this.props.firstOption || 1}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              {' '}
              {this.props.secondOption || 1}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              {' '}
              {this.props.thirdOption || 1}{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
