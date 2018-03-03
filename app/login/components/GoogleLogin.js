import React, { Component } from 'react';
import {Platform, StyleSheet, Text, Image, View, TextInput, AsyncStorage, TouchableOpacity } from 'react-native';
import { processFontFamily } from 'expo/src/Font';
import LoadingIndicator from '../../components/LoadingIndicator';
import { Toast } from 'native-base';

var api = require('../../../api');

var style_theme = require('../../stylesheets/theme');
var style_login = require('../../stylesheets/loginScreen');

export default class GoogleLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoading: false,
        }
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
            <TouchableOpacity style={style_theme.styles.buttonWhite} onPress={this.logIn}>
                <Text style={style_theme.styles.buttonTextBlack}>LOGIN WITH GOOGLE</Text>
                <View style={style_theme.styles.iconContainer}>
                    <Image style={style_theme.styles.icon} source={require('../../resources/img/google-logo.png')} />
                </View>
                <LoadingIndicator isLoading={this.state.isLoading}/>
            </TouchableOpacity>
        );
    }

    logIn = async () => {
        
        this.setState({isLoading: true});
        try {
            
            const result = await Expo.Google.logInAsync({
                androidStandaloneAppClientId: '485283150468-uvo2qf8qnkaf0mlsq7gu42cg4qsuonda.apps.googleusercontent.com',
                iosClientId: '485283150468-pi0h1qum7e7v6bimqmv24v1vjda9ci7g.apps.googleusercontent.com',
                behavior: 'web',
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                this.setState({isLoading: false});
                this.props.action(result.accessToken);
            } else {
                this.setState({isLoading: false});
                return {cancelled: true};
                this.onError('Login with google Failed!!!');
            }
        } catch (e) {
            this.setState({isLoading: false});
            this.onError('Login with google Failed!!!');
        }
    }

}