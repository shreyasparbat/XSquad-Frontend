import LoginForm from './components/LoginForm';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { AppLoading, Font } from 'expo';
import CustomHeader from "../components/CustomHeader";


var v = require('../stylesheets/variables');
var style_theme = require('../stylesheets/theme');
var style_login = require('../stylesheets/loginScreen');

export default class LoginWithEmailScreen extends Component {
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
            <View style={{flex: 1}}>
                <CustomHeader backButton='yes' showName='false' nav={this.props.navigation} />
                <KeyboardAvoidingView behavior="padding" style={[style_theme.styles.wrapper]}>
                    <View style={[{
                            height: v.WINDOW_HEIGHT,
                            alignItems: 'center',
                            alignItems: 'center', 
                            justifyContent: 'center',
                        }]}>
                        <Image
                            source={require('../resources/img/haste-logo.png')}
                            style={style_theme.styles.logoSmall}
                        />
                        <LoginForm navigator={this.props.navigation}/>
                    </View>
                </KeyboardAvoidingView>
            </View>
        ) : null
        );
    }
}