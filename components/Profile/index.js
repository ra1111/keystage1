import React, {Component} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  Image
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {Icon} from 'react-native-elements';
import styles from './style';
export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profilePic}>
          <Image
            source={{
              uri: this.props.pic
            }}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40
            }}
          />
        </View>
        <Text style={styles.text}>{this.props.text || 'HI'}</Text>
      </View>
    );
  }
}
