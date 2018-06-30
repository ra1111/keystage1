import React, {Component} from 'react';
import {ImageBackground, TouchableOpacity, View, Text} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {Icon} from 'react-native-elements';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import styles from './style';
export default class MenuItem extends Component {
  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.props.navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const navigation = this.props.navigation;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          this.props.text === 'Logout'
            ? this.signOut()
            : navigation.navigate(
                this.props.text === 'Contact us' ? 'Contact' : this.props.text
              );
        }}
      >
        <View style={styles.wrapper}>
          <Icon name={this.props.icon} type="ionicon" />
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
        <View style={styles.divider} />
      </TouchableOpacity>
    );
  }
}
