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
              series={[60]}
              colors={['#4AA4FF']}
              backgroundColor="#ddd"
            />
          </View>
          <View style={styles.piewrapper}>
            <Text>Overall</Text>
            <Pie
              radius={60}
              innerRadius={45}
              series={[60]}
              colors={['#4AA4FF']}
              backgroundColor="#ddd"
            />
          </View>
        </View>
        <View>
          <View />
        </View>
      </View>
    );
  }
}
