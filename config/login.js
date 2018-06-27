import {auth, database, provider} from './firebase';
import * as firebase from 'firebase';
//Register the user using email and password
export function register(data, callback) {
  const {email, password, username} = data;
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(resp => createUser({username, uid: resp.user.uid}, callback))
    .catch(error => callback(false, null, error));
}

//Create the user object in realtime database
export function createUser(user, callback) {
  const userRef = database.ref().child('users');

  userRef
    .child(user.uid)
    .update({...user})
    .then(() => callback(true, user, null))
    .catch(error => callback(false, null, {message: error}));
}

//Sign the user in with their email and password
export function login(data, callback) {
  const {email, password} = data;
  auth
    .signInWithEmailAndPassword(email, password)
    .then(resp => getUser(resp.user, callback))
    .catch(error => callback(false, null, error));
}

//Get the user object from the realtime database
export function getUser(user, callback) {
  database
    .ref('users')
    .child(user.uid)
    .once('value')
    .then(function(snapshot) {
      const exists = snapshot.val() !== null;

      //if the user exist in the DB, replace the user variable with the returned snapshot
      if (exists) user = snapshot.val();

      const data = {exists, user};
      callback(true, data, null);
    })
    .catch(error => callback(false, null, error));
}

//Send Password Reset Email
export function resetPassword(data, callback) {
  const {email} = data;
  auth
    .sendPasswordResetEmail(email)
    .then(user => callback(true, null, null))
    .catch(error => callback(false, null, error));
}

export function signOut(callback) {
  auth
    .signOut()
    .then(() => {
      if (callback) callback(true, null, null);
    })
    .catch(error => {
      if (callback) callback(false, null, error);
    });
}

//Sign user in using Facebook
export function signInWithFacebook(fbToken, callback) {
  const credential = provider.credential(fbToken);
  auth
    .signInWithCredential(credential)
    .then(user => getUser(user, callback))
    .catch(error => callback(false, null, error));
}
export function signInWithGoogle() {
  let providers = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(providers)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}
export function signoutGoogle() {
  firebase
    .auth()
    .signOut()
    .then(function() {
      // Sign-out successful.
    })
    .catch(function(error) {
      // An error happened.
    });
}
