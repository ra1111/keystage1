import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Share} from 'react-native';
export default class Shares extends Component {
  share()
  {
    Share.share({
      message: 'We build awsome apps to help awsome people',
      url: 'http://bam.tech',
      title: 'Wow, did you see that?'
    }, {
      // Android only:
      dialogTitle: 'Spread The Word',
      // iOS only:
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Refer and Spread the word</Text>
        <Text style={styles.subtext}> Share with your friends .Keep learning ,Keep growing</Text>
        <TouchableOpacity style={styles.button} onPress={()=>{this.share()}}>
          <Text style={styles.buttonText}> Share</Text>
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
