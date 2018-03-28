import React, { Component } from 'react';
import { Platform, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, AsyncStorage, Alert, BackHandler, } from 'react-native';
import { AppLoading, Font } from 'expo';
import { Icon, Container, Content, Left, Right, List, ListItem, Button, connectStyle, Footer, Toast } from 'native-base';
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

    const { navigate } = this.props.navigation;
    return (
      this.state.fontLoaded ? (

        <Container>
          <Image Image style={style_theme.styles.startScreenImage} source={require("../resources/img/start_screen.png")} />
          <Text>XSquad</Text>
          <Text>Live a life you will remember</Text>

          <TouchableOpacity style={style_theme.styles.startScreenButton} onPress={() => navigate('Home')}>
            <Text>Get Started!</Text>
          </TouchableOpacity>

          <LoadingIndicator isLoading={this.state.isLoading} />
        </Container>

      ) : null
    );


  }

}