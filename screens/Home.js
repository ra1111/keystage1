import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import * as firebase from 'firebase';
import Progress from '../components/Progress';
import Test from '../components/Test';
import Sucess from '../components/Sucess';
let database;
let currentUser;
let correctAns, DailyGoals, DailyTotalAns, DailyWrongAns, TotalAns, WrongAns;
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAns: 0,
      DailyGoals: 0,
      DailyTotalAns: 0,
      DailyWrongAns: 0,
      TotalAns: 0,
      WrongAns: 0
    };
  }
  async componentWillMount() {
    database = firebase.database();
    currentUser = this.props.navigation.getParam('currentUser', 'some title');
    try {
      await database
        .ref('users/' + currentUser.user.uid)
        .once('value')
        .then(snapshot => {
          this.setState({
            correctAns: snapshot.val().CorrectAns,
            DailyGoals: snapshot.val().DailyGoals,
            DailyTotalAns: snapshot.val().DailyTotalAns,
            DailyWrongAns: snapshot.val().DailyWrongAns,
            TotalAns: snapshot.val().TotalAns,
            WrongAns: snapshot.val().WrongAns
          });
          if (this.state.DailyGoals <= this.state.DailyTotalAns) {
            this.setState({DailyTotalAns: 0, DailyWrongAns: 0});
            database.ref('users/' + currentUser.user.uid).update({
              DailyTotalAns: 0,
              DailyWrongAns: 0
            });
          }
        });
    } catch (ex) {
      console.log('exception ', ex);
    }
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Progress
            goals={this.state.DailyGoals}
            completed={this.state.DailyTotalAns}
            Pending={this.state.DailyGoals - this.state.DailyTotalAns}
            OnGoing={0}
          />
          <Test />
          <Sucess
            today={
              (this.state.DailyTotalAns - this.state.DailyWrongAns) *
                100 /
                this.state.DailyTotalAns || 0
            }
            overall={
              (this.state.TotalAns - this.state.WrongAns) *
                100 /
                this.state.TotalAns || 0
            }
          />
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
