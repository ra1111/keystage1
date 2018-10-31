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
import Life from '../Life';
import Pentagon from '../Shapes/Pentagon';
import GameOver from '../GameOver';
import Sound from 'react-native-sound';
import Back from '../../Assets/Images/back.jpg';
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
Sound.setCategory('Playback');
var Right = new Sound('correct.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log('duration in seconds: ' + Right.getDuration() + 'number of channels: ' + Right.getNumberOfChannels());
});
var Wrong=new Sound('wrong.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log('duration in seconds: ' + Wrong.getDuration() + 'number of channels: ' + Wrong.getNumberOfChannels());
});
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
    this.options();
  }
  sound(e)
{
  if(e==='right')
  Right.play((success) => {
    if (success) {
      console.log('successfully finished playing');
    } else {
      console.log('playback failed due to audio decoding errors');
      // reset the player to its uninitialized state (android only)
      // this is the only option to recover after an error occured and use the player again
      Right.reset();
    }
  });
  else{
    Wrong.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
        // reset the player to its uninitialized state (android only)
        // this is the only option to recover after an error occured and use the player again
        Wrong.reset();
      }
    });
  }
  
}

  options() {
    this.sound('right')
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
    this.sound('wrong')
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
    if (questionNumber !== 5 && k!==3) {
      console.log(this.state.number1)
      return (
        <ImageBackground source={Back} style={styles.container}>
            <Life book1={book1} book2={book2} book3={book3}    navigation={this.props.navigation}/>
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
        </ImageBackground>
      );
    } else {
      return (
        <View style={styles.container}>
          <GameOver
            navigation={this.props.navigation}
            correct={correct}
            score={score}
            Play={() => {
              this.play();
            }}
            won={k == 3 ? false : true}
            route="Shape"
          />
        </View>
      );
    }
  }
}
