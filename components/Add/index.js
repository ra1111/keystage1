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
import Sound from 'react-native-sound';
import {NavigationActions} from 'react-navigation';
import styles from './styles';
import Life from '../Life';
import GameOver from '../GameOver';

import Back from '../../Assets/Images/back.jpg';
var {width, height} = Dimensions.get('window');
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
let hello;
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



  wrongOption(e) {
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
    this.sound('right')
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
    questionNumber++;
    score += 5;
  }
  render() {
    if (questionNumber !== 5 && k!==3) {
      return (
        <ImageBackground style={stylez.container} resizeMode='cover' source ={Back}>
          <View style={styles.container}>
            <Life book1={book1} book2={book2} book3={book3}  navigation={this.props.navigation} />
            <View style={styles.questionWrapper}>
              <View style={styles.question}>
                <Text style={styles.questionText}>
                  {this.state.number2 || 1}
                </Text>
              </View>
              <Icon
                name={'ios-add'}
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
        </ImageBackground>
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
