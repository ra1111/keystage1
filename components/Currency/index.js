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
import FivePence from '../../Assets/Images/FivePence.png';
import OnePenny from '../../Assets/Images/OnePenny.png';
import OnePound from '../../Assets/Images/OnePound.png';
import TenPence from '../../Assets/Images/TenPence.png';
import TwentyPence from '../../Assets/Images/TwentyPence.png';
import TwoPence from '../../Assets/Images/TwoPence.png';
import TwoPounds from '../../Assets/Images/TwoPounds.png';
import GameOver from '../GameOver';
import Life from '../Life';
import styles from './styles';
var {width, height} = Dimensions.get('window');
let arr = [
  FiftyPence,
  FivePence,
  OnePenny,
  OnePound,
  TenPence,
  TwentyPence,
  TwoPence,
  TwoPounds
];
let ans = 0;
//100 penies=1 pound
let val = [0.5, 0.05, 0.01, 1, 0.1, 0.2, 0.02, 2.0];
let book1 = 'green',
  book2 = 'green',
  book3 = 'green';
let k = 0;
let questionNumber = 0;
let correct = 5;
let score = 0;
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
    if (k == 0) {
      book1 = 'red';
    }
    if (k == 1) {
      book2 = 'red';
    }
    if (k == 3) {
      book3 = 'red';
      questionNumber = 5;
    }
    k++;
    score -= 2;
    correct -= 1;
    this.randomGenerator();
  }
  componentWillMount() {
    this.randomGenerator();
  }
  randomGenerator() {
    let max = val.length;
    number1 = Math.floor(Math.random() * 10 + 29);
    number2 = Math.floor(Math.random() * 10 + 23);
    number1 %= max;
    number2 %= max;

    ans = val[number1] + val[number2];
    ans = (ans * 1).toFixed(3);
    random = Math.floor(Math.random() * 3);
    option1 = ans * 1.2;
    option2 = ans / 2;
    option1 = '€' + (option1 * 1).toFixed(3);
    option2 = '€' + (option2 * 1).toFixed(3);
    ans = '€' + ans;
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
    questionNumber++;
    score += 5;
  }
  render() {
    if (questionNumber !== 5) {
      return (
        <ScrollView>
          <View style={stylez.container}>
            <Life book1={book1} book2={book2} book3={book3} />
            <View style={styles.container}>
              <View style={styles.questionWrapper}>
                <View style={styles.question}>
                  <Image
                    style={styles.questionText}
                    source={this.state.number2}
                  />
                </View>
                <Icon
                  style={styles.Icon}
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
    } else {
      return (
        <View style={styles.container}>
          <GameOver
            navigation={this.props.navigation}
            correct={correct}
            score={score}
            won={k == 3 ? false : true}
            route="Counts"
          />
        </View>
      );
    }
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
