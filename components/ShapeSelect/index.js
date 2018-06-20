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
let key = [];
export default class ShapesSelect extends Component {
  options() {}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.questionWrapper}>
          <Pentagon />
        </View>
        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Some Text</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Some Text</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Some Text</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
