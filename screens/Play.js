import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Game from '../components/Game';
export default class Play extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Game
              navigation={navigation}
              title="addition"
              route="Add"
              icon="ios-add"
              des="some random addition"
            />
            <Game
              navigation={navigation}
              title="subtraction"
              route="Sub"
              icon="ios-remove"
              des="some random addition"
            />
          </View>
          <View style={styles.wrapper}>
            <Game
              navigation={navigation}
              title="counting"
              icon="ios-hand"
              route="Counts"
              des="some random addition"
            />

            <Game
              navigation={navigation}
              title="shapes"
              route="Shape"
              icon="ios-square"
              des="square trap etc"
            />
          </View>
          <View style={styles.wrapper}>
            <Game
              navigation={navigation}
              title="Reading "
              route="Count"
              icon="ios-book"
              des="How to write 13 thirteen"
            />
            <Game
              navigation={navigation}
              route="Currency"
              title="money"
              icon="ios-cash"
              des="Use UK coins"
            />
          </View>
          <View style={styles.wrapper}>
            <Game
              navigation={navigation}
              title="Multiplication "
              route="Mult"
              icon="ios-close"
              des="Multiples of 2,5,10"
            />
            <Game
              navigation={navigation}
              route="Frac"
              icon="ios-star-half"
              title="Fractions"
              des="Use UK coins to read fractions"
            />
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
    backgroundColor: '#EEEEEE'
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
  title: 'Play',
  backgroundColor: '#023667',
  width: '100%'
};
