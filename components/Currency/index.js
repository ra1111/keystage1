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
import * as converter from 'number-to-words';
import {Icon} from 'react-native-elements';
import {NavigationActions} from 'react-navigation';
import FiftyPence from '../../Assets/Images/FiftyPence.png';
import FiveSterling from '../../Assets/Images/FiveSterling.png';
import OnePenny from '../../Assets/Images/OnePenny.png';
import OnePound from '../../Assets/Images/OnePound.png';
import TenPence from '../../Assets/Images/TenPence.png';
import TwentyPence from '../../Assets/Images/TwentyPence.png';
import TwoPenny from '../../Assets/Images/TwoPenny.png';
import TwoPounds from '../../Assets/Images/TwoPounds.png';
import TenPound from '../../Assets/Images/TenPounds.png';
import TwentyPounds from '../../Assets/Images/TwentyPound.png';
import TwentyPound from '../../Assets/Images/TwentyPounds.png';
import FivePound from '../../Assets/Images/FivePound.png';
import FivePounds from '../../Assets/Images/FivePounds.png';

import styles from './styles';
var {width, height} = Dimensions.get('window');
let arr = [
  FiftyPence,
  FiveSterling,
  OnePenny,
  OnePound,
  TenPence,
  TwentyPence,
  TwoPenny,
  TwoPounds,
  TenPence,
  TwentyPounds,
  TwentyPound,
  FivePound,
  FivePounds
];
//100 penies=1 pound
let val = [50, 5, 1, 100, 10, 2000, 2, 200, 10, 2000, 2000, 500, 500];

export default class Currency extends Component {
  constructor(props) {
    super(props);
  }
  randomGenerator() {
    number = Math.floor((Math.random() + 1) * 20);
    ans = converter.toWords(number);
    option1 = converter.toWords(number - 1);
    option2 = converter.toWords(number + 1);
    random = Math.floor(Math.random() * 3);
    if (random === 3) {
      this.setState({
        number1: number,

        ans: ans,
        option1: option1,
        option2: option2
      });
    } else if (random === 2) {
      this.setState({
        number1: number,
        ans: option1,
        option1: ans,
        option2: option2
      });
    } else if (random === 1) {
      this.setState({
        number1: number,

        ans: option1,
        option1: option2,
        option2: ans
      });
    } else {
      this.setState({
        number1: number,

        ans: ans,
        option1: option2,
        option2: option1
      });
    }
  }
  render() {
    return (
      <View>
        <Image style={{width: 50, height: 50}} source={OnePound} />
      </View>
    );
  }
}
