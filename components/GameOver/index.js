import React, {Component} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  Image
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {Icon} from 'react-native-elements';
import styles from './styles';
export default class GameOver extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.score}>
          <Text>SCORE</Text>
          <Text>{this.props.score || 0}</Text>
          <Text>
            {this.props.won ? 'Congrats!Game Won' : 'Oops!Game Lost Try Again'}
          </Text>

          <View style={styles.border} />
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.stats}>
            <Text>Correct:</Text>
            <Text>{this.props.correct || 0}</Text>
          </View>
          <View style={styles.stats}>
            <Text>Duration:</Text>
            <Text>{this.props.duration || 0}</Text>
          </View>

          <View style={styles.border} />
        </View>
        <View style={styles.stats}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}
          >
            <Text style={styles.buttonText}>EXIT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate(this.props.route);
            }}
          >
            <Text style={styles.buttonText}>Play Again</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
