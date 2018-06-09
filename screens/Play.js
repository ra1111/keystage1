import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Game from '../components/Game';
export default class Play extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Game title="addition" des="some random addition" />
            <Game title="subtraction" des="some random addition" />
          </View>
          <View style={styles.wrapper}>
            <Game title="counting" des="some random addition" />
            <Game title="comparision" des="some random addition" />
          </View>
          <View style={styles.wrapper}>
            <Game title="shapes" des="square trap etc" />
            <Game title="fraction" des="using pics show eg" />
          </View>
          <View style={styles.wrapper}>
            <Game title="Reading " des="How to write 13 thirteen" />
            <Game title="money" des="Use UK coins" />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#F5FCFF'
  },
  wrapper: {
    display: 'flex',
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
Play.navigationOptions = {
  title: 'Play'
};
