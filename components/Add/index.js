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
import styles from './styles';
var {width, height} = Dimensions.get('window');
let number1 = 0,
  number2 = 0,
  ans = 0,
  option1 = 0,
  option2 = 0;
export default class Add extends Component {
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
  wrongOption() {}
  randomGenerator() {
    number1 = Math.floor(Math.random() * 10);
    number2 = Math.floor(Math.random() * 10);
    ans = number1 + number2;
    random = Math.floor(Math.random() * 3);
    option1 = ans + 1;
    option2 = ans - 1;

    if (random === 3) {
      this.setState({
        number1: number1,
        number2: number2,
        ans: ans,
        option1: option1,
        option2: option2
      });
    } else if (random === 2) {
      this.setState({
        number1: number2,
        number2: number1,
        ans: option1,
        option1: ans,
        option2: option2
      });
    } else if (random === 1) {
      this.setState({
        number1: number2,
        number2: number1,
        ans: option1,
        option1: option2,
        option2: ans
      });
    } else {
      this.setState({
        number1: number2,
        number2: number1,
        ans: ans,
        option1: option2,
        option2: option1
      });
    }
  }
  render() {
    return (
      <View style={stylez.container}>
        <View style={styles.container}>
          <View style={styles.questionWrapper}>
            <View style={styles.question}>
              <Text style={styles.questionText}>{this.state.number2 || 1}</Text>
            </View>
            <Icon
              name={this.props.name || 'ios-remove'}
              raised
              type="ionicon"
              size={28}
              color={'orange'}
            />
            <View style={styles.question}>
              <Text style={styles.questionText}>{this.state.number1 || 1}</Text>
            </View>
            <Icon
              name={this.props.name || 'ios-add'}
              raised
              type="ionicon"
              size={28}
              color={'orange'}
            />
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
