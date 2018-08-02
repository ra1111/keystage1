import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView,Platform} from 'react-native';
import Game from '../components/Game';
import * as RNIap from 'react-native-iap';
const itemSkus = Platform.select({

  android: [
    'com.keystage1'
  ]
});

export default class Play extends Component {
 async componentWillMount()
 {
  try {
   const result= await RNIap.prepare();
    const products = await RNIap.getProducts(itemSkus);
    console.log('result', result);

   console.log(products);
  } catch(err) {
    console.warn(err); 
  }
 }
 componentWillUnmount() {
  RNIap.endConnection();
}

getAvailablePurchases = async() => {
  try {
    console.info('Get available purchases (non-consumable or unconsumed consumable)');
    const purchases = await RNIap.getAvailablePurchases();
    console.info('Available purchases :: ', purchases);
    if (purchases && purchases.length > 0) {
      this.setState({
        availableItemsMessage: `Got ${purchases.length} items.`,
        receipt: purchases[0].transactionReceipt
      });
    }
  } catch(err) {
    console.warn(err.code, err.message);
    Alert.alert(err.message);
  }
}
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
            purchase={purchases}
              navigation={navigation}
              title="counting"
              icon="ios-hand"
              route="Counts"
              des="some random addition"
            />

            <Game
            purchase={purchases}
              navigation={navigation}
              title="shapes"
              route="Shape"
              icon="ios-square"
              des="square trap etc"
            />
          </View>
          <View style={styles.wrapper}>
            <Game
            purchase={purchases}
              navigation={navigation}
              title="Reading "
              route="Count"
              icon="ios-book"
              des="How to write 13 thirteen"
            />
            <Game
            purchase={purchases}
              navigation={navigation}
              route="Currency"
              title="money"
              icon="ios-cash"
              des="Use UK coins"
            />
          </View>
          <View style={styles.wrapper}>
            <Game
            purchase={purchases}
              navigation={navigation}
              title="Multiplication "
              route="Mult"
              icon="ios-close"
              des="Multiples of 2,5,10"
            />
            <Game
            purchase={purchases}
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
