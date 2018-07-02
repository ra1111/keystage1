import React, {Component} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';
import Triangle from '../Shapes/Traingle';
import Circle from '../Shapes/Circle';
import Trapezium from '../Shapes/Trapezium';
import Oval from '../Shapes/Oval';
import Parallelogram from '../Shapes/Parllelogram';
import Hexagon from '../Shapes/Hexagon';
import Square from '../Shapes/Square';
import Octagon from '../Shapes/Octagon';
import Pentagon from '../Shapes/Pentagon';
import GameOver from '../GameOver';
let key = [
  Triangle,
  Circle,
  Trapezium,
  Oval,
  Parallelogram,
  Hexagon,
  Square,
  Octagon,
  Pentagon
];
let ans = 'Triangle';
let book1 = 'green',
  book2 = 'green',
  book3 = 'green';
let k = 0;
let questionNumber = 0;
let correct = 5;
let score = 0;
export default class ShapesSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: Triangle,
      ans: 'Triangle',
      option1: 'Square',
      option2: 'Circle'
    };
  }
  play() {
    ans = 'Triangle';
    book1 = 'green';
    book2 = 'green';
    book3 = 'green';
    k = 0;
    questionNumber = 0;
    correct = 5;
    score = 0;
  }
  options() {
    let arr = [];
    let k = 0;
    let min = 29,
      min1 = 23;
    let max = key.length;
    while (k < 3) {
      var randomNumber = Math.floor(Math.random() * max) + 1;
      randomNumber %= max;
      if (arr.indexOf(randomNumber) > -1) continue;
      arr[k] = randomNumber;
      k++;
    }
    let number = arr[0];
    let number1 = arr[1];
    let number2 = arr[2];
    let random = Math.floor((Math.random() + 2) * 1000) % 3;
    let ret = key[number].toString();

    ret = ret.substr('function '.length);
    ret = ret.substr(0, ret.indexOf('('));
    ans = ret;
    var ret1 = key[number1].toString();
    var ret2 = key[number2].toString();
    ret1 = ret1.substr('function '.length);
    ret1 = ret1.substr(0, ret1.indexOf('('));
    ret2 = ret2.substr('function '.length);
    ret2 = ret2.substr(0, ret2.indexOf('('));
    if (random === 0) {
      this.setState({
        number1: key[number],
        ans: ret,
        option1: ret1,
        option2: ret2
      });
    } else if (random === 1) {
      this.setState({
        number1: key[number],
        ans: ret1,
        option1: ret,
        option2: ret2
      });
    } else if (random === 2) {
      this.setState({
        number1: key[number],
        ans: ret2,
        option1: ret1,
        option2: ret
      });
    }
    questionNumber++;
    score += 5;
  }
  wrong() {
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
    this.options();
  }
  render() {
    if (questionNumber !== 5) {
      return (
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
          <View style={styles.questionWrapper}>{<this.state.number1 />}</View>
          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                ans === this.state.option2 ? this.options() : this.wrong();
              }}
            >
              <Text style={styles.buttonText}>{this.state.option2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                ans === this.state.ans ? this.options() : this.wrong();
              }}
            >
              <Text style={styles.buttonText}>{this.state.ans}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                ans === this.state.option1 ? this.options() : this.wrong();
              }}
            >
              <Text style={styles.buttonText}>{this.state.option1}</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <GameOver
            navigation={this.props.navigation}
            correct={correct}
            score={score}
            won={k == 3 ? false : true}
            route="Shape"
          />
        </View>
      );
    }
  }
}
