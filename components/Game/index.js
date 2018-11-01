import React, {Component} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Platform,
  Text,
  Image
} from 'react-native';
import Sound from 'react-native-sound';
import {NavigationActions} from 'react-navigation';
import {Icon} from 'react-native-elements';
import styles from './style';
import * as RNIap from 'react-native-iap';
const itemSkus = Platform.select({
  ios: [
    'com.cooni.point1000', 'com.cooni.point5000', // dooboolab
  ],
  android: [
    'bodmass', // subscription
  ],
});
export default class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      receipt: '',
      availableItemsMessage: '',
      purchased:'false'
    };
  }
  buyItem = async(sku) => {
  try {
    console.info('buyItem: ' + sku);
    // const purchase = await RNIap.buyProduct(sku);
    // const products = await RNIap.buySubscription(sku);
    const purchase = await RNIap.buyProductWithoutFinishTransaction(sku);
    console.info(purchase);
  } catch (err) {
    console.warn(err.code, err.message);
    if(err.code==='E_ALREADY_OWNED')
    {
      this.props.navigation.navigate(this.props.route, {
        title: this.props.title,
        des: this.props.des,

        navigation: this.props.navigation
     })
      console.log("ALREADU NLFKDEIFUEJBEFHJJ")
    }
  }
}
async componentDidMount() {
  console.log(itemSkus);
  try {
    await RNIap.prepare(); // the app hangs here and nothing happnes on Android
    this.getItems(); // never get called
  }
  catch (err) {
    console.warn(err.code, err.message);
  }
}
componentWillUnmount() {
RNIap.endConnection();
}

getAvailablePurchases = async() => {
try {

  console.info('Get available purchases (non-consumable or unconsumed consumable)');
  const purchases = await RNIap.getAvailablePurchases();
  console.info('Available purchases :: ', purchases,purchases.length);
  if (purchases && purchases.length > 0) {
    this.setState({
      availableItemsMessage: `Got ${purchases.length} items.`,
      receipt: purchases[0].transactionReceipt,
      purchased:true,
    });
  }

} catch (err) {
  console.warn(err.code, err.message);
}

}
getItems = async() => {
try {
  const products = await RNIap.getProducts(itemSkus);
  // const products = await RNIap.getSubscriptions(itemSkus);
  console.log('Products', products);
  this.setState({ productList: products });
  this.getAvailablePurchases()
} catch (err) {
  console.warn(err.code, err.message);
}
}


  render() {
console.log(this.state.purchased)
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {this.props.title=="addition"||this.props.title=="subtraction"?
          this.props.navigation.navigate(this.props.route, {
            title: this.props.title,
            des: this.props.des,

            navigation: this.props.navigation
         }) :this.buyItem('bodmass')
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
