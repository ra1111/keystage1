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
export default class MenuItem extends Component {
  render() {
    console.log(this.props, 'HERE');
    const navigateAction = NavigationActions.navigate({
      routeName: 'Intro',
      params: {},

      // navigate can have a nested navigate action that will be run inside the child router
      action: NavigationActions.navigate({routeName: 'SubProfileRoute'})
    });
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          this.props.navigation.navigate('Intro', {
            title: this.props.title,
            des: this.props.des
          });
        }}
      >
        <Image />
        <Text style={styles.title}>{this.props.title || 'hi'}</Text>
        <Text style={styles.des}>{this.props.des || 'some description'}</Text>
      </TouchableOpacity>
    );
  }
}
