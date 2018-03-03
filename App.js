import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Platform, Image, StatusBar } from 'react-native';
import { Root, Icon, Container, Header, Content, Body } from 'native-base';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

import LoginScreen from './app/login/LoginScreen';
import LoginWithEmailScreen from './app/login/LoginWithEmailScreen';
import RegisterScreen from './app/login/RegisterScreen';

import HomeScreen from './app/home/HomeScreen'
import SavedScreen from './app/saved/SavedScreen';
import SquadScreen from './app/squad/SquadScreen';
import ProfileScreen from './app/profile/ProfileScreen';
import SplashScreen from './app/screens/SplashScreen';

//import SettingsScreen from './app/screens/SettingsScreen';
//import FAQScreen from './app/screens/FAQScreen';

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
  SplashScreen: {
    screen: SplashScreen
  },
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
  }
},
  {
    //initialRouteName: 'TransactionDetailsScreen',
    headerMode: 'none'
  }
);

export default () => <Root><StackNavigation /></Root>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
