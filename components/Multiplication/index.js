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
import Life from '../Life';
import GameOver from '../GameOver';
let number1 = 0,
  number2 = 0,
  ans = 0,
  option1 = 0,
  option2 = 0;
let book1 = 'green',
  book2 = 'green',
  book3 = 'green';
let k = 0;
let questionNumber = 0;
let correct = 5;
let score = 0;
let num = [2, 5, 10];
var {width, height} = Dimensions.get('window');
export default class Multiplication extends Component {
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
  wrongOption(e) {
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
  play() {
    k = 0;
    correct = 5;
    score = 0;
    questionNumber = 0;
    this.setState({
      number1: 0,
      number2: 0,
      ans: 0,
      option1: 0,
      option2: 0
    });
    book1 = 'green';
    book2 = 'green';
    book3 = 'green';
    number1 = 0;
    number2 = 0;
    ans = 0;
    option1 = 0;
    option2 = 0;
    this.randomGenerator();
  }
  componentWillMount() {
    this.randomGenerator();
  }
  randomGenerator() {
    number1 = Math.floor(Math.random() * 1000 + 5) % 3;
    number2 = Math.floor(Math.random() * 1000 + 5) % 3;
    number1 = num[number1];
    number2 = num[number2];
    ans = number1 * number2;
    random = Math.floor(Math.random() * 3);
    option1 = ans + 5;
    option2 = ans - 2;

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
    questionNumber++;
    score += 5;
  }
  render() {
    if (questionNumber !== 5 && k!==3) {
      return (
        <View style={stylez.container}>
          <View style={styles.container}>
            <Life book1={book1} book2={book2} book3={book3} />
            <View style={styles.questionWrapper}>
              <View style={styles.question}>
                <Text style={styles.questionText}>
                  {this.state.number2 || 1}
                </Text>
              </View>
              <Icon
                name={'ios-close'}
                raised
                type="ionicon"
                size={28}
                color={'orange'}
              />
              <View style={styles.question}>
                <Text style={styles.questionText}>
                  {this.state.number1 || 1}
                </Text>
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
            Play={() => {
              this.play();
            }}
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
