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
              des="some random addition"
            />
            <Game
              navigation={navigation}
              title="subtraction"
              route="Subtract"
              des="some random addition"
            />
          </View>
          <View style={styles.wrapper}>
            <Game
              navigation={navigation}
              title="counting"
              route="Counts"
              des="some random addition"
            />
            {/* <Game
              navigation={navigation}
              title="comparision"
              des="some random addition"
            /> */}
            {/* </View> */}
            {/* <View style={styles.wrapper}> */}
            <Game
              navigation={navigation}
              title="shapes"
              route="Shape"
              des="square trap etc"
            />
            {/* <Game
              navigation={navigation}
              title="fraction"
              des="using pics show eg"
            /> */}
          </View>
          <View style={styles.wrapper}>
            <Game
              navigation={navigation}
              title="Reading "
              route="Count"
              des="How to write 13 thirteen"
            />
            <Game
              navigation={navigation}
              route="Currency"
              title="money"
              des="Use UK coins"
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
