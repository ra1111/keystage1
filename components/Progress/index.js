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
          <Text style={styles.header}>Goals:120</Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.completed}>
            <Text style={styles.text}>Completed</Text>
            {Platform.OS === 'android' ? (
              <ProgressBarAndroid
                styleAttr="Horizontal"
                color="#00FF00"
                style={styles.bar}
                progress={this.props.completed || 0.1}
                indeterminate={false}
              />
            ) : (
              <ProgressViewIOS
                color="#00FF00"
                style={styles.bar}
                progress={this.props.completed || 0.1}
              />
            )}
            <Text style={styles.text}>{this.props.completed || 16}</Text>
          </View>
          <View style={styles.completed}>
            <Text style={styles.text}>OnGoing</Text>
            {Platform.OS === 'android' ? (
              <ProgressBarAndroid
                style={styles.bar}
                color="orange"
                styleAttr="Horizontal"
                progress={this.props.onGoing || 0.1}
                indeterminate={false}
              />
            ) : (
              <ProgressViewIOS
                style={styles.bar}
                color="orange"
                progress={this.props.onGoing || 0.1}
              />
            )}
            <Text style={styles.text}>{this.props.onGoing || 100}</Text>
          </View>
          <View style={styles.completed}>
            <Text style={styles.text}>Pending</Text>
            {Platform.OS === 'android' ? (
              <ProgressBarAndroid
                style={styles.bar}
                color="red"
                styleAttr="Horizontal"
                progress={this.props.pending || 0.1}
                indeterminate={false}
              />
            ) : (
              <ProgressViewIOS
                style={styles.bar}
                color="red"
                progress={this.props.pending || 0.1}
              />
            )}
            <Text style={styles.text}>{this.props.Pending || 4}</Text>
          </View>
        </View>
      </View>
    );
  }
}
