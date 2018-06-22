import React, {Component} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
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
    let random = Math.floor(Math.random() * 3);
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
    console.log(key[number], ret, ret1, ret2);
    if (random === 1) {
      this.setState({
        number1: key[number],
        ans: ret,
        option1: ret1,
        option2: ret2
      });
    } else if (random === 2) {
      this.setState({
        number1: key[number],
        ans: ret1,
        option1: ret,
        option2: ret2
      });
    } else if (random === 3) {
      this.setState({
        number1: key[number],
        ans: ret2,
        option1: ret1,
        option2: ret
      });
    } else {
      this.setState({
        number1: key[number],
        ans: ret,
        option1: ret1,
        option2: ret2
      });
    }
  }
  wrong() {
    console.log('WRONG ANS SELECTED');
  }
  render() {
    return (
      <View style={styles.container}>
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
  }
}
