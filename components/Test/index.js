import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ProgressBarAndroid,
  ProgressViewIOS
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {Icon} from 'react-native-elements';
import styles from './style';
export default class Test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text> Revision Test</Text>
        </View>
        <View>
          <Text>
            {' '}
            Revise what you have learnt .Take the quiz and solidify your
            concepts
          </Text>
        </View>
        <View style={styles.border} />
        <View style={styles.quiz}>
          <Text>Recent Quiz</Text>
          <View style={styles.wrapper}>
            <View style={styles.circle}>
              <Text style={styles.text}>{this.props.stats || '--'}</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.text}>{this.props.stats || '--'}</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.text}>{this.props.stats || '--'}</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.text}>{this.props.stats || '--'}</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.text}>{this.props.stats || '--'}</Text>
            </View>
          </View>
        </View>
        <View style={styles.border} />
        <TouchableOpacity style={styles.generate}>
          <Text style={styles.generateText}> GENERATE QUIZ</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
