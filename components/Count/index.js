import React, {Component} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Vibration,
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
import Candy from '../../Assets/Images/candy.png';
import Candy1 from '../../Assets/Images/candy1.png';
import styles from './styles';
import Life from '../Life';
import GameOver from '../GameOver';
import Back from '../../Assets/Images/back.jpg';
import Sound from 'react-native-sound';
var {width, height} = Dimensions.get('window');
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
let number1 = 0,
  number2 = 0,
  ans = 0,
  option1 = 0,
  option2 = 0,
  score = 0;
let obj = [];
let arr = [
Candy,
Candy1
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
  componentWillMount() {
    this.randomGenerator();
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

  play() {
    book1 = 'green';
    book2 = 'green';
    book3 = 'green';
    k = 0;
    questionNumber = 0;
    correct = 5;
    number1 = 0;
    number2 = 0;
    ans = 0;
    option1 = 0;
    option2 = 0;
    score = 0;
  }
  randomGenerator() {
    this.sound('right')
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
    Vibration.vibrate(500)
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
    this.randomGenerator();
  }
  render() {
    if (questionNumber !== 5 && k!==3) {
      return (
        <ImageBackground style={styles.container} resizeMode='cover' source ={Back}>
              <Life book1={book1} book2={book2} book3={book3}  navigation={this.props.navigation} />
          <View style={styles.questionWrapper}>
            <View>
              <Text style={styles.coin}>How many candies are there?</Text>
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
            route="Counts"
          />
        </View>
      );
    }
  }
}
