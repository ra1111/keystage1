import React, {Component} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image
} from 'react-native';
import {Icon} from 'react-native-elements';
import {NavigationActions} from 'react-navigation';
import styles from '../components/Add/styles';
import Hexagon from '../components/ShapeSelect';
var {width, height} = Dimensions.get('window');
export default class MyCourse extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={stylez.container}>
        <Hexagon />
      </View>
    );
  }
}
const stylez = StyleSheet.create({
  time: {
    height: height, //Dimensions.get('window').height,
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.8,
    backgroundColor: '#023367',
    width: width,
    zIndex: 1
  },
  container: {
    flex: 1
  }
});
