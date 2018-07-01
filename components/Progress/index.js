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
export default class Progress extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.progress}>
          <Text style={styles.header}>Progress</Text>
          <Text style={styles.header}>Goals:{this.props.goals}</Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.completed}>
            <Text style={styles.text}>Completed</Text>
            {Platform.OS === 'android' ? (
              <ProgressBarAndroid
                styleAttr="Horizontal"
                color="#00FF00"
                style={styles.bar}
                progress={this.props.completed / this.props.goals}
                indeterminate={false}
              />
            ) : (
              <ProgressViewIOS
                color="#00FF00"
                style={styles.bar}
                progress={this.props.completed / this.props.goals}
              />
            )}
            <Text style={styles.text}>{this.props.completed}</Text>
          </View>
          <View style={styles.completed}>
            <Text style={styles.text}>OnGoing</Text>
            {Platform.OS === 'android' ? (
              <ProgressBarAndroid
                style={styles.bar}
                color="orange"
                styleAttr="Horizontal"
                progress={this.props.OnGoing / this.props.goals}
                indeterminate={false}
              />
            ) : (
              <ProgressViewIOS
                style={styles.bar}
                color="orange"
                progress={this.props.OnGoing / this.props.goals}
              />
            )}
            <Text style={styles.text}>{this.props.OnGoing}</Text>
          </View>
          <View style={styles.completed}>
            <Text style={styles.text}>Pending</Text>
            {Platform.OS === 'android' ? (
              <ProgressBarAndroid
                style={styles.bar}
                color="red"
                styleAttr="Horizontal"
                progress={this.props.pending / this.props.goals}
                indeterminate={false}
              />
            ) : (
              <ProgressViewIOS
                style={styles.bar}
                color="red"
                progress={this.props.pending / this.props.goals}
              />
            )}
            <Text style={styles.text}>{this.props.Pending}</Text>
          </View>
        </View>
      </View>
    );
  }
}
