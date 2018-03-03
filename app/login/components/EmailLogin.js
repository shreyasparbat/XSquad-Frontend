import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Image, View, TextInput, TouchableOpacity } from 'react-native';
import { processFontFamily } from 'expo/src/Font';

var style_theme = require('../../stylesheets/theme');
var style_login = require('../../stylesheets/loginScreen');

  export default class EmailLogin extends Component {
    render(){
        return(
            <TouchableOpacity style={style_theme.styles.button} onPress={this.emailRedirect}>
                <Text style={style_theme.styles.buttonText}>LOGIN WITH EMAIL</Text>
                <View style={style_theme.styles.iconContainer}>
                    <Image style={style_theme.styles.icon} source={require('../../resources/img/email-logo.png')} />
                </View>
            </TouchableOpacity>
        );
    }

    emailRedirect = () => {
        this.props.navigator
            .navigate('LoginWithEmailScreen', {onSuccess: this.goBackLoginScreen});
    }

    goBackLoginScreen = (data) => {
        this.props.action(data);
    }

  }

  const styles = StyleSheet.create({

    emailText: {
        color: 'white',
        textAlign: 'left',
        flex:5,
        fontWeight: 'bold'
    },
  });