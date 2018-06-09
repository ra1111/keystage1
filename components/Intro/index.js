import React, {Component} from 'react';
import {ImageBackground, TouchableOpacity, View, Text} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {Icon} from 'react-native-elements';
import styles from './style';
export default class Intro extends Component {
  render() {
    return (
      <ImageBackground>
        <View>
          <Text>{this.props.title || 'some title'}</Text>
          <Text>{this.props.des || 'some des'}</Text>
        </View>
        <TouchableOpacity>
          <Text>START GAME</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
