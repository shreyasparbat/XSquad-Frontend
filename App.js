import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StyleSheet, Text, View, Button, ScrollView, Platform, Image, StatusBar } from 'react-native';
import { Root, Icon, Container, Header, Content, Body } from 'native-base';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

import LoginScreen from './app/login/LoginScreen';
import LoginWithEmailScreen from './app/login/LoginWithEmailScreen';
import RegisterScreen from './app/login/RegisterScreen';

import BasketSummaryScreen from './app/cart/BasketSummaryScreen'
import CartScreen from './app/cart/CartScreen';

import AddCardScreen from './app/payment/AddCardScreen';
import PaymentOptionScreen from './app/payment/PaymentOptionScreen';
import PaymentScreen from './app/payment/PaymentScreen';
import ReceiptScreen from './app/payment/ReceiptScreen';

import TransactionDetailsScreen from './app/transactions/TransactionDetailsScreen';
import TransactionListScreen from './app/transactions/TransactionListScreen';

import ProfileScreen from './app/profile/ProfileScreen';

import SplashScreen from './app/screens/SplashScreen';
import ReferralScreen from './app/screens/ReferralScreen';
import SettingsScreen from './app/screens/SettingsScreen';
import FAQScreen from './app/screens/FAQScreen';

import DrawerContent from './app/components/DrawerContent';


var v = require('./app/stylesheets/variables');

const DrawerNavigation = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Saved: {
      screen: SavedScreen
    },
    Squads: {
      screen: SquadScreen
    },
    Profile: {
      screen: ProfileScreen
    }
  },
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: DrawerContent,
    contentOptions: {
      activeTintColor: v.HASTE_COLOR,
    }
  }
);

const StackNavigation = StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      gesturesEnabled: false,
    }
  },
  LoginWithEmailScreen: {
    screen: LoginWithEmailScreen
  },

  RegisterScreen: {
    screen: RegisterScreen
  },

  Home: {
    screen: DrawerNavigation,
    navigationOptions: {
      gesturesEnabled: false,
    }
  },

  BasketSummaryScreen: {
    screen: BasketSummaryScreen
  },

  CartScreen: {
    screen: CartScreen,
    navigationOptions: {
      gesturesEnabled: false,
    }
  },

  PaymentOptionScreen: {
    screen: PaymentOptionScreen,
  },

  TransactionDetailsScreen: {
    screen: TransactionDetailsScreen,
    navigationOptions: {
      gesturesEnabled: false,
    }
  },

  AddCardScreen: {
    screen: AddCardScreen,
  },

  ReceiptScreen: {
    screen: ReceiptScreen,
    navigationOptions: {
      gesturesEnabled: false,
    }
  }
},
  {
    //initialRouteName: 'TransactionDetailsScreen',
    headerMode: 'none'
  }
);

export default () => <Root><StackNavigation /></Root>;

/* export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
} */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
