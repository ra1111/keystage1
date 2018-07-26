import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Linking} from 'react-native';
export default class Contact extends Component {
  render() {
    console.log("CONTACT OPENED");
    return (
      <View style={styles.container} >
        <Text style={styles.title}>GOT SOMETHING TO SAY</Text>
        <Text  style={styles.subtext}> Shoot us an e-mail and we promise to try our best</Text>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('mailto:rahula.raj2013@gmail.com') }>
          <Text style={styles.buttonText}> EMAIL US</Text>
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
    fontWeight:"700",
    textAlign: 'center',
    margin: 10,
    marginBottom:20
  },
  subtext:{
    fontSize: 16,
    fontWeight:"400",
    textAlign: 'center',
    margin: 10,
    marginBottom:20
  },
  button:{
    backgroundColor:'blue',
    borderRadius:10,
  },
  buttonText:{
    fontSize: 16,
    paddingHorizontal:90,
    paddingVertical:16,
   
    color:'white',
  }
});
