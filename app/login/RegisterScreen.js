import RegisterForm from './components/RegisterForm';
import React, { Component } from 'react';
import { Platform, Text, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { AppLoading, Font } from 'expo';
import CustomHeader from "../components/CustomHeader";

var style_theme = require('../stylesheets/theme');
var style_register = require('../stylesheets/registerScreen');

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto_medium': require('../resources/fonts/Roboto/Roboto-Medium.ttf'),  
            'Open_Sans': require('../resources/fonts/Open_Sans/OpenSans-Regular.ttf'),
            'Open_Sans_bold': require('../resources/fonts/Open_Sans/OpenSans-Bold.ttf'),
            'Open_Sans_light': require('../resources/fonts/Open_Sans/OpenSans-Light.ttf'),
        });
    
        this.setState({ fontLoaded: true });
    }

    render(){

        return(
            this.state.fontLoaded ? (
                <KeyboardAvoidingView behavior="padding" style={style_theme.styles.wrapper}>
                    <CustomHeader backButton='yes'  nav={this.props.navigation} />
                    <View style={style_theme.styles.wrapper}>
                        <RegisterForm navigator={this.props.navigation} action={this._registerSuccess}/>
                    </View>
                </KeyboardAvoidingView>
            ) : null
        );
    }

    _registerSuccess = (token) => {
        this.props.navigation.state.params.onSuccess(token);
        this.props.navigation.goBack();
    }

}