import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';
import * as firebase from 'firebase';
import {auth, database, provider} from '../config/firebase';
import {GoogleSignin} from 'react-native-google-signin';

export default class Login extends Component {
  signInWithGoogle = async () => {
    try {
      const user = await GoogleSignin.signIn();
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
        android: {}
      })
    };

    await GoogleSignin.configure({
      ...configPlatform,
      webClientId:
        'com.googleusercontent.apps.922830836172-o3err4mm62odc7l9ncmb9n7vl2ccj3aj',
      offlineAccess: false
    });
  }

  async _getCurrentUser() {
    try {
      const user = await GoogleSignin.currentUserAsync();
      this.setState({user, error: null});
    } catch (error) {
      this.setState({
        error
      });
    }
  }

  render() {
    console.log(auth, database, provider);
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.signInWithGoogle();
          }}
        >
          <Text style={styles.title}>Login</Text>
        </TouchableOpacity>
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
