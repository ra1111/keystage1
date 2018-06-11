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
        <View style={styles.question}>
          <Text style={styles.questionText}>{this.props.firstNumber || 1}</Text>
          </View > 
          <Icon name={this.props.name||'ios-add'} raised type="ionicon" size={28} color={'orange'}  />
          <View style={styles.question}>
          <Text style={styles.questionText}>{this.props.secondNumber || 1}</Text>
          </View>
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
