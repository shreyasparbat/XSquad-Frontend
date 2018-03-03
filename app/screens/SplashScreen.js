/*
 * This screen is deprecated and should not be used. 
 * The app is currently using Expo's configuration to create a splash screen.
 * TODO: Delete this screen on next cleanup
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import { AppLoading, Font } from 'expo';

export default class Splash extends Component {
  state = {
    fontLoaded: false,
  };


  componentWillMount() {
    const navigator = this.props.navigation;
    setTimeout(() => {
      navigator.navigate('Home')
    }, 1000);     //<-- Time until it jumps to "MainView"
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Open_Sans': require('../resources/fonts/Open_Sans/OpenSans-Regular.ttf'),
      'Open_Sans_bold': require('../resources/fonts/Open_Sans/OpenSans-Bold.ttf'),
      'Open_Sans_light': require('../resources/fonts/Open_Sans/OpenSans-Light.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render(){
    return(
      <View style={styles.wrapper}>      
      {
        this.state.fontLoaded ? ( 
          <View style={styles.titleWrapper}>
            <Image 
            source={require('../resources/img/haste-logo.png')}
            style={styles.logo}/>
          </View>
        ) : null
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#eee',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  title: {
    fontFamily: 'Open_Sans_bold',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  
  subtitle: {
    fontFamily: 'Open_Sans_bold',
    color: 'white',
    fontStyle: 'italic',
    fontWeight: '200'
  },
  
  titleWrapper: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {
    width: 250,
    height: 250,
  },
});
