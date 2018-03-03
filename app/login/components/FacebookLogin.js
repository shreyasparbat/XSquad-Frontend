import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Image, View, TextInput, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import { processFontFamily } from 'expo/src/Font';
import LoadingIndicator from '../../components/LoadingIndicator';
import { Toast } from 'native-base';

var api = require('../../../api');

var style_theme = require('../../stylesheets/theme');
var style_login = require('../../stylesheets/loginScreen');

export default class FacebookLogin extends Component {

    state = {
        isLoading: false,
    };

    render(){
    return(
        <TouchableOpacity style={style_theme.styles.buttonFacebook} onPress={this.logIn}>
            <Text style={style_theme.styles.buttonText}>FACEBOOK LOGIN</Text>
            <View style={style_theme.styles.iconContainer}>
                <Image style={style_theme.styles.icon} source={require('../../resources/img/facebook-logo.png')} />
            </View>
            <LoadingIndicator isLoading={this.state.isLoading}/>
        </TouchableOpacity>
    );
    }

    onError(errMsg) {
        Toast.show({
            text: errMsg,
            position: 'bottom',
            buttonText: 'Okay'
          })
    }

    logIn = async () => {
        
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1870747106550732', {
        permissions: ['public_profile'],
        });
    if (type === 'success') {
        // this.auth( (await response.json()), token);
        this.props.action(token);
    }

    }



}