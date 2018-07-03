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
import * as firebase from 'firebase';
import styles from './styles';
export default class GameOver extends Component {
  componentWillMount() {
    let user = firebase.auth().currentUser;
    let database = firebase.database();
    try {
      database
        .ref('users/' + user.uid)
        .once('value')
        .then(snapshot => {
          let DailyTotalAns = snapshot.val().DailyTotalAns;
          let TotalAns = snapshot.val().TotalAns;
          let WrongAns = snapshot.val().WrongAns;
          let DailyWrongAns = snapshot.val().DailyWrongAns;
          DailyTotalAns += 5;
          TotalAns += 5;
          WrongAns += 5 - this.props.correct;
          DailyWrongAns += 5 - this.props.correct;
          database.ref('users/' + user.uid).update({
            DailyTotalAns: DailyTotalAns,
            TotalAns: TotalAns,
            WrongAns: WrongAns,
            DailyWrongAns: DailyWrongAns
          });
        });
    } catch (ex) {
      console.log(ex + 'exception');
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.score}>
          <Text style={styles.title}>SCORE</Text>
          <Text style={styles.scoreText}>{this.props.score || 0}</Text>
          <Text style={styles.oops}>
            {this.props.won ? 'Congrats!Game Won' : 'Oops!Game Lost Try Again'}
          </Text>

          <View style={styles.border} />
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.stats}>
            <Icon
              name="ios-checkmark-circle"
              type="ionicon"
              color="white"
              size={28}
            />
            <Text style={styles.oops}>Correct:</Text>
            <Text style={styles.oops}>{this.props.correct || 0}</Text>
          </View>
          <View style={styles.stats}>
            <Icon name="ios-timer" type="ionicon" color="white" size={28} />
            <Text style={styles.oops}>Duration:</Text>
            <Text style={styles.oops}> {this.props.duration || 0}</Text>
          </View>
        </View>
        <View style={styles.border} />
        <View style={styles.stats}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.props.Play();
              this.props.navigation.navigate('Home');
            }}
          >
            <Text style={styles.buttonText1}>EXIT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.Play();
            }}
          >
            <Text style={styles.buttonText}>Play Again</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
