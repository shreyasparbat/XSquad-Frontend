import React, { Component } from 'react';
import { Platform, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, AsyncStorage, Alert, BackHandler, } from 'react-native';
import { AppLoading, Font } from 'expo';
import { Toast } from 'native-base';
import { NavigationActions } from 'react-navigation';
import LoadingIndicator from '../components/LoadingIndicator';
import LoginForm from './components/LoginForm';
import FacebookLogin from './components/FacebookLogin';
import GoogleLogin from './components/GoogleLogin';
import EmailLogin from './components/EmailLogin';

// import { LinearGradient } from Expo;

var api = require('../../api');
var style_theme = require('../stylesheets/theme');
var style_login = require('../stylesheets/loginScreen');

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
            isLoading: false,
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

    render(){
        return(
            this.state.fontLoaded? (
            <KeyboardAvoidingView behavior="padding" style={style_theme.styles.wrapper}>

                {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.wrapper}> */}
                    <View style={style_theme.styles.logoContainer}>
                        <Image 
                        source={require('../resources/img/haste-logo.png')}
                        style={style_theme.styles.logoSmall}/>

                        <Text style={style_theme.styles.h1}>Welcome to Haste</Text>
                        <Text style={style_theme.styles.h1}>Shopping Made Easy</Text>
                    </View> 
                    
                    <FacebookLogin action={this.facebookAuth} navigator={this.props.navigation}/>
                    <GoogleLogin action={this.googleAuth} navigator={this.props.navigation}/>
                    <EmailLogin navigator={this.props.navigation} action={this.emailLoginBack}/>

                    <TouchableOpacity style={style_login.styles.registerRedirect}
                        onPress={this.registerRedirect}>
                        <Text style={style_theme.styles.p}>New User?</Text>
                        <Text style={style_theme.styles.bold}> Sign up here </Text>
                    </TouchableOpacity>

                    <LoadingIndicator isLoading={this.state.isLoading}/>

                {/* </LinearGradient>      */}
            </KeyboardAvoidingView>
            ) : null
        );

        
    }

    emailLoginBack = (data) => {
        if(data == 'RegisterScreen'){            
            this.registerRedirect();
        }else{
            this.setAuth(data);
        }
    }

    registerRedirect = () => {
        this.props.navigation
            .navigate('RegisterScreen', { onSuccess: this.setAuth });
    }

    setAuth = async (hashAuth) => {
        if(hashAuth){
            try {
                await AsyncStorage.setItem('@userHashAuth:key', hashAuth);
                this.getAuth();
            } catch (error) {
                this.onError('Error saving hash');
            }
        }else{
            this.onError('Error saving hash');
        }
    }

    getAuth = async () => {
        try {
            const value = await AsyncStorage.getItem('@userHashAuth:key');
            console.log(value)
            if (value !== null){
                this.checkAuth(value);
            }
        } catch (error) {
            this.onError('Error retrieving hash / empty');
        }
    }

    checkAuth = (value) => {
        this.setState({isLoading: true});
        console.log(api.API_SERVER_URL + api.GET_AUTH_TOKEN)
        return fetch(api.API_SERVER_URL + api.GET_AUTH_TOKEN, {
            method: 'GET',
            headers: {
                'Authorization': value
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("herooooo")
                this.setState({isLoading: false});
                if(!responseJson.error){
                    this.props.navigation.navigate('Home', {
                        userData: responseJson.userData
                    });
                }else{
                    console.log(responseJson.error);
                }
            })
            .catch((error) => {
                console.log(error)
                this.setState({isLoading: false});
                this.onError('Failed connect to server');
            });

    }

    googleAuth = async (token) => {
        
        this.setState({isLoading: true});
        const response = await fetch(`https://www.googleapis.com/plus/v1/people/me?access_token=${token}`);
        var data = await response.json();

        var gender = '-1'
        if(data.gender){
            if(data.gender == 'female'){
                gender = 0;
            }else{
                gender = 1;
            }
        }

        return fetch(api.API_SERVER_URL + api.FB_GOOGLE_AUTH_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fb_google_account_id: data.id,
                email: (data.emails[0].value?data.emails[0].value:null),
                salutation: (data.gender == 'female' ? 'Mrs' : 'Mr'), //have to make validation, cause not all google plus account allow to get their gender
                password: null,
                username: (data.emails[0].value?data.emails[0].value:null),
                fullname: (data.displayName?data.displayName:null),
                firstname: (data.name.givenName?data.name.givenName:null),
                lastname: (data.name.familyName?data.name.familyName:null),
                gender: gender,
                token: token,
                avatar_file_name: (data.image.url?data.image.url:null),
                login_type: 3
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({isLoading: false});
                console.log(`Hi ${responseJson.message}!`);
                if(!responseJson.error){
                    try {
                        AsyncStorage.setItem('@userHashAuth:key', responseJson.session);
                        
                        this.props.navigation.navigate('Home', {
                            userData: responseJson.userData
                        });
                    } catch (error) {
                        this.onError('Error saving hash google');
                    }
                }else{
                    this.onError(responseJson.error);
                }
                
            })
            .catch((error) => {
                this.setState({isLoading: false});
                this.onError('Login with google Failed!!!');
            });

    }

    facebookAuth = async (token) => {
        
        this.setState({isLoading: true});

        const response = await fetch(`https://graph.facebook.com/v2.6/me?fields=id,name,picture,first_name,last_name,gender,email&access_token=${token}`);

        var data  = await response.json();
        
        var gender = '-1'
        if(data.gender){
            if(data.gender == 'female'){
                gender = 0;
            }else{
                gender = 1;
            }
        }
        return fetch(api.API_SERVER_URL + api.FB_GOOGLE_AUTH_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fb_google_account_id: data.id,
                email: (data.email? data.email: null), //have to make validation, cause not all facebook account allow to get their email
                salutation: (data.gender == 'female'? 'Mrs':'Mr'),
                password: null,
                username: (data.email? data.email: null),
                fullname: data.name,
                firstname: data.first_name,
                lastname: data.last_name,
                gender: gender,
                token: token,
                avatar_file_name: data.picture.data.url?data.picture.data.url:null,
                login_type: 2
            }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            
            this.setState({isLoading: false});
            console.log(`Hi ${responseJson.message}!`);
            // this.props.action(responseJson.session);
            if(!responseJson.error){
                try {
                    AsyncStorage.setItem('@userHashAuth:key', responseJson.session);
                    
                    this.props.navigation.navigate('Home', {
                        userData: responseJson.userData
                    });
                    
                } catch (error) {
                    this.onError('Error saving hash');
                }
            }else{
                this.onError(responseJson.error);
            }
        })
        .catch((error) => {
            this.setState({isLoading: false});
            this.onError('Facebook Auth Failed!!!');
        });
    
        }


}