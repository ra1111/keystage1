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
import styles from './styles';
export default class MenuItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.questionWrapper}>
          <Text style={styles.buttonText}>{this.props.firstNumber || 1}</Text>
          <Icon />
          <Text  style={styles.buttonText}>{this.props.secondNumber || 1}</Text>
          <Icon />
        </View>
        <View style={styles.optionWrapper}>
          <TouchableOpacity>
            <Text>{this.props.firstOption || 1}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text> {this.props.secondOption || 1}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text> {this.props.thirdOption || 1} </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
