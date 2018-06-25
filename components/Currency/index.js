import React, {Component} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  ScrollView
} from 'react-native';
import * as converter from 'number-to-words';
import {Icon} from 'react-native-elements';
import {NavigationActions} from 'react-navigation';
import FiftyPence from '../../Assets/Images/FiftyPence.png';
import FiveSterling from '../../Assets/Images/FiveSterling.png';
import OnePenny from '../../Assets/Images/OnePenny.png';
import OnePound from '../../Assets/Images/OnePound.png';
import TenPence from '../../Assets/Images/TenPence.png';
import TwentyPence from '../../Assets/Images/TwentyPence.png';
import TwoPenny from '../../Assets/Images/TwoPenny.png';
import TwoPounds from '../../Assets/Images/TwoPounds.png';
import TenPound from '../../Assets/Images/TenPounds.png';
// import TwentyPounds from '../../Assets/Images/TwentyPound.png';
// import TwentyPound from '../../Assets/Images/TwentyPounds.png';
// import FivePound from '../../Assets/Images/FivePound.png';
// import FivePounds from '../../Assets/Images/FivePounds.png';

import styles from './styles';
var {width, height} = Dimensions.get('window');
let arr = [
  FiftyPence,
  FiveSterling,
  OnePenny,
  OnePound,
  TenPence,
  TwentyPence,
  TwoPenny,
  TwoPounds,
  TenPence
  // TwentyPounds,
  // TwentyPound,
  // FivePound,
  // FivePounds
];
let ans = 0;
//100 penies=1 pound
let val = [50, 5, 1, 100, 10, 2000, 2, 200, 10];

export default class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      ans: 0,
      option1: 0,
      option2: 0
    };
  }
  wrongOption() {
    console.log('Wrong Oprtion selected');
  }
  randomGenerator() {
    let max = val.length;
    number1 = Math.floor(Math.random() * 10 + 29);
    number2 = Math.floor(Math.random() * 10 + 23);
    number1 %= max;
    number2 %= max;

    ans = val[number1] + val[number2];
    random = Math.floor(Math.random() * 3);
    option1 = ans + 1;
    option2 = ans - 1;
    if (random === 3) {
      this.setState({
        number1: arr[number1],
        number2: arr[number2],
        ans: ans,
        option1: option1,
        option2: option2
      });
    } else if (random === 2) {
      this.setState({
        number1: arr[number2],
        number2: arr[number1],
        ans: option1,
        option1: ans,
        option2: option2
      });
    } else if (random === 1) {
      this.setState({
        number1: arr[number2],
        number2: arr[number1],
        ans: option1,
        option1: option2,
        option2: ans
      });
    } else {
      this.setState({
        number1: arr[number2],
        number2: arr[number1],
        ans: ans,
        option1: option2,
        option2: option1
      });
    }
  }
  render() {
    return (
      <ScrollView>
        <Image />
        <View style={stylez.container}>
          <View style={styles.container}>
            <View style={styles.questionWrapper}>
              <View style={styles.question}>
                <Image
                  style={styles.questionText}
                  source={this.state.number2}
                />
              </View>
              <Icon
                name={this.props.name || 'ios-add'}
                raised
                type="ionicon"
                size={28}
                color={'orange'}
              />
              <View style={styles.question}>
                <Image
                  style={styles.questionText}
                  source={this.state.number1}
                />
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
                <Text style={styles.buttonText}>
                  {' '}
                  {this.state.option1 || 1}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={e => {
                  ans == this.state.option2
                    ? this.randomGenerator(e)
                    : this.wrongOption(e);
                }}
              >
                <Text style={styles.buttonText}>
                  {' '}
                  {this.state.option2 || 3}{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
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
