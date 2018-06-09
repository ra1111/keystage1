import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import * as firebase from 'firebase';
export default class Login extends Component {
  // onFacebookLogin = () => {
  //   LoginManager.logInWithReadPermissions(['public_profile', 'email'])
  //     .then(result => {
  //       if (result.isCancelled) {
  //         return Promise.reject(new Error('The user cancelled the request'));
  //       }
  //       // Retrieve the access token
  //       return AccessToken.getCurrentAccessToken();
  //     })
  //     .then(data => {
  //       // Create a new Firebase credential with the token
  //       const credential = firebase.auth.FacebookAuthProvider.credential(
  //         data.accessToken
  //       );
  //       // Login with the credential
  //       return firebase.auth().signInWithCredential(credential);
  //     })
  //     .then(user => {
  //       // If you need to do anything with the user, do it here
  //       // The user will be logged in automatically by the
  //       // `onAuthStateChanged` listener we set up in App.js earlier
  //     })
  //     .catch(error => {
  //       const {code, message} = error;
  //       // For details of error codes, see the docs
  //       // The message contains the default Firebase string
  //       // representation of the error
  //     });
  // };
  onGoogleLogin = () => {
    GoogleSignin.signIn()
      .then(data => {
        // Create a new Firebase credential with the token
        const credential = firebase.auth.GoogleAuthProvider.credential(
          data.idToken,
          data.accessToken
        );
        // Login with the credential
        return firebase.auth().signInWithCredential(credential);
      })
      .then(user => {
        // If you need to do anything with the user, do it here
        // The user will be logged in automatically by the
        // `onAuthStateChanged` listener we set up in App.js earlier
      })
      .catch(error => {
        const {code, message} = error;
        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
      });
  };

  render() {
    GoogleSignin.hasPlayServices({autoResolve: true})
      .then(() => {
        // play services are available. can now configure library
      })
      .catch(err => {
        console.log('Play services error', err.code, err.message);
      });

    firebase.initializeApp({
      apiKey: 'AIzaSyBdKsVYoAlzIAJgJCurjqdhSo_VQJwoMio',
      authDomain: 'elitmus-daf04.firebaseapp.com',
      databaseURL: 'https://elitmus-daf04.firebaseio.com',
      projectId: 'elitmus-daf04',
      storageBucket: 'elitmus-daf04.appspot.com',
      messagingSenderId: '922830836172'
    });
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <GoogleSigninButton
          style={{width: 48, height: 48}}
          size={148}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => this._signIn.bind(this)}
        />
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
