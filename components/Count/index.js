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
import styles from './styles';
import GameOver from '../GameOver';
var {width, height} = Dimensions.get('window');
let number1 = 0,
  number2 = 0,
  ans = 0,
  option1 = 0,
  option2 = 0,
  score = 0;
let obj = [];
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
let index;
let book1 = 'green',
  book2 = 'green',
  book3 = 'green';
let k = 0;
let questionNumber = 0;
let correct = 5;
export default class Count extends Component {
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
    obj = [];
    let max = arr.length;
    ans = Math.floor((Math.random() + 1) * 1000) % 10 + 3;
    index = Math.floor((Math.random() + 1) * 100);
    index %= max;

    obj = new Array(ans);
    obj = obj.fill(arr[index]);
    random = Math.floor(Math.random() * 3);
    option1 = ans + 1;
    option2 = ans - 1;

    if (random === 3) {
      this.setState({
        ans: ans,
        option1: option1,
        option2: option2
      });
    } else if (random === 2) {
      this.setState({
        ans: option1,
        option1: ans,
        option2: option2
      });
    } else if (random === 1) {
      this.setState({
        ans: option1,
        option1: option2,
        option2: ans
      });
    } else {
      this.setState({
        ans: ans,
        option1: option2,
        option2: option1
      });
    }
    questionNumber++;
    score += 5;
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
  render() {
    if (questionNumber !== 5) {
      return (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.life}>
              <Icon
                name={'ios-book'}
                raised
                type="ionicon"
                size={28}
                color={book1}
              />
              <Icon
                name={'ios-book'}
                raised
                type="ionicon"
                size={28}
                color={book2}
              />
              <Icon
                name={'ios-book'}
                raised
                type="ionicon"
                size={28}
                color={book3}
              />
            </View>
            <View style={styles.questionWrapper}>
              <View>
                <Text style={styles.coin}>How many coins are there?</Text>
              </View>
              <View style={styles.question}>
                {obj.map((indexs, arrs) => {
                  return (
                    <Image source={arr[index]} style={styles.questionText} />
                  );
                })}
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
