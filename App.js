import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Platform, Image, StatusBar } from 'react-native';
import { Root, Icon, Container, Header, Content, Body } from 'native-base';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

import LoginScreen from './app/login/LoginScreen';
import LoginWithEmailScreen from './app/login/LoginWithEmailScreen';
import RegisterScreen from './app/login/RegisterScreen';

import HomeScreen from './app/home/HomeScreen';
import ActivityScreen from './app/home/ActivityScreen';

import SavedScreen from './app/saved/SavedScreen';
import ProfileScreen from './app/profile/ProfileScreen';
import SettingsScreen from './app/settings/SettingsScreen';
//import StartScreen from './app/screens/StartScreen';

import WaitingScreen from './app/squad/WaitingScreen';
import ConfirmScreen from './app/squad/ConfirmScreen';
import ChatScreen from './app/chat/ChatScreen';
import ChatListScreen from './app/chat/ChatListScreen';


//import SettingsScreen from './app/screens/SettingsScreen';
//import FAQScreen from './app/screens/FAQScreen';

import DrawerContent from './app/components/DrawerContent';


var v = require('./app/stylesheets/variables');

const DrawerNavigation = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    "Your Chats": {
      screen: ChatListScreen
    }
  },
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: DrawerContent,
    contentOptions: {
      activeTintColor: 'black',
      //initialRouteName: 'TransactionDetailsScreen',
      //headerMode: "none"
    }
  }
);

const StackNavigation = StackNavigator({


  Home: {
    screen: DrawerNavigation,
    navigationOptions: {
      gesturesEnabled: false,
    }
  },
  RegisterScreen: {
    screen: RegisterScreen
  },

  ActivityScreen: {
    screen: ActivityScreen
  },

  WaitingScreen: {
    screen: WaitingScreen
  },

  ChatScreen: {
    screen: ChatScreen
  },

  LoginScreen: {
    screen: LoginScreen
  },

  ConfirmScreen: {
    screen: ConfirmScreen
  }
},
  {
    //initialRouteName: 'TransactionDetailsScreen',
    headerMode: "none",
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
