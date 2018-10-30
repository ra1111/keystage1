import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView,Platform} from 'react-native';
import Game from '../components/Game';
import * as RNIap from 'react-native-iap';
let purchases;
const itemSkus = Platform.select({

  android: [
    'com.keystage1'
  ]
});

export default class Play extends Component {
 async componentDidMount()
 {
  
  try {
    
    const result=await RNIap.prepare();
   //const result= await RNIap;
    const products = await RNIap.getProducts(itemSkus);
    console.log('result', result);

  // console.log(products);
  } catch(err) {
    console.log(err); 
    console.log(RNIap.prepare());
  }
 }
 componentWillUnmount() {
  RNIap.endConnection();
}

// getAvailablePurchases = async() => {
//   try {
//     //console.info('Get available purchases (non-consumable or unconsumed consumable)');
//      purchases = await RNIap.getAvailablePurchases();
//     //console.info('Available purchases :: ', purchases);
//     if (purchases && purchases.length > 0) {
//       this.setState({
//         availableItemsMessage: `Got ${purchases.length} items.`,
//         receipt: purchases[0].transactionReceipt
//       });
//     }
//   } catch(err) {
//    // console.warn(err.code, err.message);
//     Alert.alert(err.message);
//   }
// }
  render() {
   console.log( );
   // this.getAvailablePurchases();
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
              des="1+1=11 "
            />
            <Game
          
              navigation={navigation}
              title="subtraction"
              route="Sub"
              icon="ios-remove"
              des="2-1 is 3 right..."
            />
          </View>
          <View style={styles.wrapper}>
            <Game
            purchase={purchases}
              navigation={navigation}
              title="counting"
              icon="ios-hand"
              route="Counts"
              des="How many candies are there?"
            />

            <Game
            purchase={purchases}
              navigation={navigation}
              title="shapes"
              route="Shape"
              icon="ios-square"
              des="Can you tell rectangle from square?"
            />
          </View>
          <View style={styles.wrapper}>
            <Game
            purchase={purchases}
              navigation={navigation}
              title="Reading "
              route="Count"
              icon="ios-book"
              des="Tell the number on screen"
            />
            <Game
            purchase={purchases}
              navigation={navigation}
              route="Currency"
              title="money"
              icon="ios-cash"
              des="I want a choclate how much money is it?"
            />
          </View>
          <View style={styles.wrapper}>
            <Game
            purchase={purchases}
              navigation={navigation}
              title="Multiplication "
              route="Mult"
              icon="ios-close"
              des="2*5=10 correct?"
            />
            <Game
            purchase={purchases}
              navigation={navigation}
              route="Frac"
              icon="ios-star-half"
              title="Fractions"
              des="2/1=2 choose from the options"
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
