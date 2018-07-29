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

export default class Life extends Component {
  render() {
    return (
      <View style={styles.container}> 
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}> 
        <Icon
        name={'ios-arrow-back'}
        raised
        type="ionicon"
        size={28}
        />
      </TouchableOpacity>
      <View style={styles.life}>
        <Icon
          name={'ios-book'}
          raised
          type="ionicon"
          size={28}
          color={this.props.book1}
        />
        <Icon
          name={'ios-book'}
          raised
          type="ionicon"
          size={28}
          color={this.props.book2}
        />
        <Icon
          name={'ios-book'}
          raised
          type="ionicon"
          size={28}
          color={this.props.book3}
        />
      </View>
      </View>
    );
  }
}
