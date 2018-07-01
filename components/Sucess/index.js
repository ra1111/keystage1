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
import Pie from 'react-native-pie';
import {NavigationActions} from 'react-navigation';
import {Icon} from 'react-native-elements';
import styles from './style';
export default class Sucess extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Sucess Rate</Text>
        <View style={styles.wrapper}>
          <View style={styles.piewrapper}>
            <Text>Today</Text>
            <Pie
              radius={60}
              innerRadius={45}
              series={[this.props.today]}
              colors={['#4AA4FF']}
              backgroundColor="#ddd"
            />
            <Text>{this.props.today}%</Text>
          </View>
          <View style={styles.piewrapper}>
            <Text>Overall</Text>
            <Pie
              radius={60}
              innerRadius={45}
              series={[this.props.overall]}
              colors={['#4AA4FF']}
              backgroundColor="#ddd"
            />
            <Text>{this.props.overall}%</Text>
          </View>
        </View>
        <View>
          <View />
        </View>
      </View>
    );
  }
}
