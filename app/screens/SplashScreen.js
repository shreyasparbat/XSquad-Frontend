import React, { Component } from 'react';
import { Platform, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, AsyncStorage, Alert, BackHandler, } from 'react-native';
import { AppLoading, Font } from 'expo';
import { Toast } from 'native-base';
import { NavigationActions } from 'react-navigation';
import LoadingIndicator from '../components/LoadingIndicator';

// import { LinearGradient } from Expo;

var api = require('../../api');
var style_theme = require('../stylesheets/theme');
var style_login = require('../stylesheets/loginScreen');

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
      isLoading: false,
    };
  }

  async componentDidMount() {
    BackHandler.addEventListener('backPress', this.handleBackButton);
    await Font.loadAsync({
      'Roboto_medium': require('../resources/fonts/Roboto/Roboto-Medium.ttf'),
      'Open_Sans': require('../resources/fonts/Open_Sans/OpenSans-Regular.ttf'),
      'Open_Sans_bold': require('../resources/fonts/Open_Sans/OpenSans-Bold.ttf'),
      'Open_Sans_light': require('../resources/fonts/Open_Sans/OpenSans-Light.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('backPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }

  onError(errMsg) {
    Toast.show({
      text: errMsg,
      position: 'bottom',
      buttonText: 'Okay'
    })
  }

  render() {
    return (
      this.state.fontLoaded ? (
        <KeyboardAvoidingView behavior="padding" style={style_theme.styles.wrapper}>

          {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.wrapper}> */}
          <View style={style_theme.styles.logoContainer}>
            <Image
              source={require('../resources/img/haste-logo.png')}
              style={style_theme.styles.logoSmall} />

            <Text style={style_theme.styles.h1}>Welcome to Haste</Text>
            <Text style={style_theme.styles.h1}>Shopping Made Easy</Text>
          </View>

          <TouchableOpacity style={style_login.styles.registerRedirect}
            onPress={this.registerRedirect}>
            <Text style={style_theme.styles.p}>New User?</Text>
            <Text style={style_theme.styles.bold}> Sign up here </Text>
          </TouchableOpacity>

          <LoadingIndicator isLoading={this.state.isLoading} />

          {/* </LinearGradient>      */}
        </KeyboardAvoidingView>
      ) : null
    );


  }

}