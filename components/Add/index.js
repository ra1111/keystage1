import React, {Component} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image
} from 'react-native';
import {Icon} from 'react-native-elements';
import {NavigationActions} from 'react-navigation';
import styles from './styles';
var { width, height } = Dimensions.get('window');
export default class Add extends Component {
    constructor(props)
    {
      super(props);
   

    }
      
       render() {

     return (
      <View style={stylez.container}>
        
      <View style={styles.container}>
     
        <View style={styles.questionWrapper}>
        <View style={styles.question}>
          <Text style={styles.questionText}>{this.props.firstNumber || 1}</Text>
          </View > 
          <Icon name={this.props.name||'ios-remove'} raised type="ionicon" size={28} color={'orange'}  />
          <View style={styles.question}>
          <Text style={styles.questionText}>{this.props.secondNumber || 1}</Text>
          </View>
          <Icon  name={this.props.name||'ios-add'} raised type="ionicon" size={28} color={'orange'}/>
        </View>
        <View style={styles.optionWrapper}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{this.props.firstOption || 1}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              {' '}
              {this.props.secondOption || 1}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              {' '}
              {this.props.thirdOption || 1}{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    );
  }
}
const stylez = StyleSheet.create({
time:{
    height:height,//Dimensions.get('window').height,
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: .8,
    backgroundColor: '#023367',
    width: width,
    zIndex:1,
  }  ,
  container:{
    flex:1,
    
  }


})
