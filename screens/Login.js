import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';
import * as firebase from 'firebase';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

export default class Login extends Component {
  signInWithGoogle = async () => {
    try {
      const user = await GoogleSignin.signIn();
      if (user) {
        this.props.navigation.navigate('Drawer', {user: user});
      }
    } catch (error) {
      if (error.code === 'CANCELED') {
        console.log('user cancelled');
      }
      console.log(error);
    }
  };
  async componentDidMount() {
    await this._configureGoogleSignIn();
    await this._getCurrentUser();
  }
  async _configureGoogleSignIn() {
    await GoogleSignin.hasPlayServices({autoResolve: true});
    const configPlatform = {
      ...Platform.select({
        ios: {
          iosClientId:
            '943701204118-0gqllr48e8i8jtejj9du0dru5lbse7dp.apps.googleusercontent.com'
        },
        android: {
          // androidClientId:
          //   '922830836172-902poqs0scrvcn772q40b7jr66ci3030.apps.googleusercontent.com'
        }
      })
    };

    await GoogleSignin.configure({
      ...configPlatform,

      webClientId:
        '922830836172-7gkn82g7osq8jcjq0e0u4ble2vbsqthq.apps.googleusercontent.com',

      offlineAccess: false
    });
  }

  async _getCurrentUser() {
    try {
      const user = await GoogleSignin.currentUserAsync();

      if (user) {
        this.props.navigation.navigate('Drawer', {user: user});
      }
      // this.setState({user, error: null});
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <GoogleSigninButton
          style={{width: 212, height: 48}}
          //size={GoogleSigninButton.Size.Standard}
          // color={GoogleSigninButton.Color.Auto}
          onPress={() => this.signInWithGoogle()}
        />
        <Text style={styles.title}>Login</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
Login.navigationOptions = {
  title: 'Login'
};
