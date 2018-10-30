import React, {Component} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Platform,
  Text,
  Image
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {Icon} from 'react-native-elements';
import styles from './style';
import * as RNIap from 'react-native-iap';
const itemSkus = Platform.select({

  android: [
    'com.keystage1'
  ]
});
export default class MenuItem extends Component {
//   async componentWillMount()
//   {
//    try {
//     const result= await RNIap.prepare();
//      const products = await RNIap.getProducts(itemSkus);
//      console.log('result', result);
 
//     console.log(products);
//    } catch(err) {
//      console.warn(err); 
//    }
//   }
//   componentWillUnmount() {
//    RNIap.endConnection();
//  }
 
 
//  buyItem = async(sku) => {
//    try {
//      console.info('buyItem: ' + sku);
//      // const purchase = await RNIap.buyProduct(sku);
//      const purchase = await RNIap.buyProductWithoutFinishTransaction(sku);
//      console.info(purchase);
//    //  this.setState({ receipt: purchase.transactionReceipt }, () => this.goToNext());
//    } catch (err) {
//      console.warn(err.code, err.message);
//      Alert.alert(err.message);
//    }
//  }
  render() {

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          this.props.navigation.navigate(this.props.route, {
            title: this.props.title,
            des: this.props.des,

            navigation: this.props.navigation
          });
        }}
      >
        <Icon
          type="ionicon"
          name={this.props.icon}
          raised
          color="orange"
          style={styles.image}
        />
        <Text style={styles.title}>{this.props.title || 'hi'}</Text>
        <Text style={styles.des}>{this.props.des || 'some description'}</Text>
      </TouchableOpacity>
    );
  }
}
