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
export default class Intro extends Component {
  render() {
    const {navigation} = this.props;
    let title = navigation.getParam('title', 'some title');
    let des = navigation.getParam('des', 'some description');

    return (
      <ImageBackground
        source={{
          uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
        }}
        resizeMode={'cover'}
        style={styles.container}
      >
        <Image
          style={styles.image}
          source={{
            uri:
              'https://facebook.github.io/react-native/docs/assets/favicon.png'
          }}
        />
        <View>
          <Text style={styles.titleText}>{title || 'some title'}</Text>
          <Text style={styles.desText}>{des || 'some des'}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>START GAME</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
