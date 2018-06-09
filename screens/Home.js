import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Progress from '../components/Progress';
import Test from '../components/Test';
import Sucess from '../components/Sucess';
export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Progress />
          <Test />
          <Sucess />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE'
  }
});
Home.navigationOptions = {
  title: 'Home'
};
