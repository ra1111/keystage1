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

export default class ShapesSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: Triangle,
      ans: 0,
      option1: 0,
      option2: 0
    };
  }
  options() {
    let min = 0;
    let max = key.length;

    let number = min + Math.floor(Math.random() * max);
    let number1 = min + Math.floor(Math.random() * (max - 1));
    let number2 = min + Math.floor(Math.random() * (max - 2));
    let ret = key[number].toString();

    ret = ret.substr('function '.length);
    ret = ret.substr(0, ret.indexOf('('));
    var ret1 = key[number1].toString();
    var ret2 = key[number2].toString();
    ret1 = ret1.substr('function '.length);
    ret1 = ret1.substr(0, ret1.indexOf('('));
    ret2 = ret2.substr('function '.length);
    ret2 = ret2.substr(0, ret2.indexOf('('));
    this.setState({
      number1: key[number],
      ans: ret,
      option1: ret1,
      option2: ret2
    });
    console.log(ret, ret1, ret2);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.questionWrapper}>{<this.state.number1 />}</View>
        <View style={styles.optionContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.options();
            }}
          >
            <Text style={styles.buttonText}>{this.state.option2}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{this.state.ans}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{this.state.option1}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
