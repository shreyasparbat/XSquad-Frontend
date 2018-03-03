import React, { Component } from 'react';
import { Platform, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, AsyncStorage, Alert, BackHandler, } from 'react-native';
import { AppLoading, Font } from 'expo';
import { Toast } from 'native-base';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    this.getAuth();
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

          <View style={style_theme.styles.logoContainer}>
            <Image
              source={require('../resources/img/xsquad-logo.png')}
              style={style_theme.styles.logoSmall} />

            <Text style={style_theme.styles.h1}>Welcome to Haste</Text>
            <Text style={style_theme.styles.h1}>Shopping Made Easy</Text>
          </View>
          {/* </LinearGradient>      */}
        </KeyboardAvoidingView>
      ) : null
    );


  }
}