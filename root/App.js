import React, {component} from 'react';
import {Dimensions, Platform, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Icon} from 'react-native-elements';
import Home from '../screens/Home';
import MyCourse from '../screens/MyCourse';
import Login from '../screens/Login';
import Play from '../screens/Play';
import Shares from '../screens/Share';
import Sidebar from '../screens/Sidebar';
import Contact from '../screens/Contact';
import Intro from '../components/Intro';
import Game from '../components/Game';
import Add from '../components/Add';
import Subtract from '../components/Subtract';
import Counting from '../components/Counting';
import Currency from '../components/Currency';
import Count from '../components/Count';
import ShapeSelect from '../components/ShapeSelect';
import Multiplication from '../components/Multiplication';
import Fractions from '../components/Fractions';

let screen = Dimensions.get('window');

const tabNav = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {title: 'Home'}
    },
    MyCourse: {
      screen: MyCourse,
      navigationOptions: {title: 'MyCourse'}
    },
    Play: {
      screen: Play,
      navigationOptions: {title: 'Play'}
    }
  },
  {
    navigationOptions: ({navigation}) => ({
      title: navigation.state,
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;

        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Play') {
          iconName = `ios-tennisball${focused ? '' : '-outline'}`;
        } else if (routeName === 'MyCourse') {
          iconName = `ios-book${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
);
const stack = StackNavigator(
  {
    Tabs: {
      screen: tabNav,
      navigationOptions: ({navigation}) => ({
        title:
          navigation.state.index === 0
            ? 'Home'
            : navigation.state.index === 1 ? 'MyCourse' : 'Play',
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="ios-menu" size={30} />
          </TouchableOpacity>
        ),
        headerStyle: {paddingRight: 10, paddingLeft: 10}
      })
    }
  },
  {
    navigationOptions: {
      headerVisible: false
    }
  }
);

const ShareStack = StackNavigator({
  Share: {
    screen: Shares,
    navigationOptions: ({navigation}) => ({
      title: 'Share',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="ios-menu" size={30} />
        </TouchableOpacity>
      ),
      headerStyle: {paddingRight: 10, paddingLeft: 10}
    })
  }
});
const ContactStack = StackNavigator({
  Contact: {
    screen: Contact,
    navigationOptions: ({navigation}) => ({
      title: 'Contact Us',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="ios-menu" size={30} />
        </TouchableOpacity>
      ),
      headerStyle: {paddingRight: 10, paddingLeft: 10}
    })
  }
});
let drawer = DrawerNavigator(
  {
    Home: {
      screen: stack
    },
    Share: {
      screen: ShareStack
    },
    Contact: {
      screen: ContactStack
    },
    Intro: {
      screen: Intro
    },
    Add: {
      screen: Add
    },
    Count: {
      screen: Counting
    },
    Currency: {
      screen: Currency
    },
    Shape: {
      screen: ShapeSelect
    },
    Counts: {
      screen: Count
    },
    Sub: {
      screen: Subtract
    },
    Frac: {
      screen: Fractions
    },
    Mult: {
      screen: Multiplication
    }
  },
  {
    initialRouteName: 'Home',
    //contentComponent
    contentComponent: props => <Sidebar {...props} />
  }
);
export default StackNavigator(
  {
    Login: Login,
    Drawer: drawer
  },
  {
    headerMode: 'none'
  }
);
