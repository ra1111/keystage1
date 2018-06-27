import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';
import {auth, database, provider} from '../config/firebase';
import {GoogleSignin} from 'react-native-google-signin';

export default class Login extends Component {
  signInWithGoogle() {
    // let provider = new firebase.auth.GoogleAuthProvider();
    // console.log('Coming here', provider);
    // firebase
    //   .auth()
    //   .signInWithPopup(provider)
    //   .then(function(result) {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     var token = result.credential.accessToken;
    //     // The signed-in user info.
    //     var user = result.user;
    //     console.log(user);
    //     // ...
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // The email of the user's account used.
    //     var email = error.email;
    //     // The firebase.auth.AuthCredential type that was used.
    //     var credential = error.credential;
    //     // ...
    //   });
    GoogleSignin.signIn()
      .then(data => {
        // Create a new Firebase credential with the token
        const credential = firebase.auth.GoogleAuthProvider.credential(
          data.idToken,
          data.accessToken
        );
        console.log(firebase.auth().signInWithCredential(credential));
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
        console.log(error);
        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
      });
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
        {/* <GoogleSigninButton
          style={{width: 48, height: 48}}
          size={148}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => this._signIn.bind(this)}
        /> */}
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
