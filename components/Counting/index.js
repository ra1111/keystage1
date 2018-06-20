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
import * as converter from 'number-to-words';
import {Icon} from 'react-native-elements';
import {NavigationActions} from 'react-navigation';
import styles from './styles';
var {width, height} = Dimensions.get('window');
let number,
  option1,
  option2,
  ans = 0;

export default class Counting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      ans: 0,
      option1: 0,
      option2: 0
    };
  }
  randomGenerator() {
    number = Math.floor((Math.random() + 1) * 20);
    ans = converter.toWords(number);
    option1 = converter.toWords(number - 1);
    option2 = converter.toWords(number + 1);
    random = Math.floor(Math.random() * 3);
    if (random === 3) {
      this.setState({
        number1: number,

        ans: ans,
        option1: option1,
        option2: option2
      });
    } else if (random === 2) {
      this.setState({
        number1: number,
        ans: option1,
        option1: ans,
        option2: option2
      });
    } else if (random === 1) {
      this.setState({
        number1: number,

        ans: option1,
        option1: option2,
        option2: ans
      });
    } else {
      this.setState({
        number1: number,

        ans: ans,
        option1: option2,
        option2: option1
      });
    }
  }
  wrongOption() {
    // number = Math.floor(Math.random() * 20);
    // console.log(converter.toWords(number));
  }
  render() {
    return (
      <View style={stylez.container}>
        <View style={styles.container}>
          <View style={styles.questionWrapper}>
            <View style={styles.question}>
              <Text style={styles.questionText}>{this.state.number1 || 1}</Text>
            </View>
          </View>
          <View style={styles.optionWrapper}>
            <TouchableOpacity
              style={styles.button}
              onPress={e => {
                ans == this.state.ans
                  ? this.randomGenerator(e)
                  : this.wrongOption(e);
              }}
            >
              <Text style={styles.buttonText}>{this.state.ans || 2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={e => {
                ans == this.state.option1
                  ? this.randomGenerator(e)
                  : this.wrongOption(e);
              }}
            >
              <Text style={styles.buttonText}> {this.state.option1 || 1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={e => {
                ans == this.state.option2
                  ? this.randomGenerator(e)
                  : this.wrongOption(e);
              }}
            >
              <Text style={styles.buttonText}> {this.state.option2 || 3} </Text>
            </TouchableOpacity>
          </View>
        </View>
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
