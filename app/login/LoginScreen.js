import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
    Platform,
    Text,
    View,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    AsyncStorage,
    Alert,
    BackHandler,
    TextInput,
    Keyboard
} from 'react-native';
import { AppLoading, Font } from 'expo';
import { Icon, Container, Content, Left, Right, List, ListItem, Button, connectStyle, Footer, Toast } from 'native-base';
import { NavigationActions } from 'react-navigation';
import LoadingIndicator from '../components/LoadingIndicator';
import LoginForm from './components/LoginForm';
import FacebookLogin from './components/FacebookLogin';
import GoogleLogin from './components/GoogleLogin';
import EmailLogin from './components/EmailLogin';
import CustomHeader from '../components/CustomHeader';

// import { LinearGradient } from Expo;

var api = require('../../api');

var style_theme = require('../stylesheets/theme');
var style_login = require('../stylesheets/loginScreen');
var main_body = require('../stylesheets/mainBody');

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
            isLoading: false,
            email: '',
            password: ''
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
                <KeyboardAwareScrollView>

                    <Container>
                        <View style={main_body.styles.WhiteSpace}></View>
                        <CustomHeader menu='yes' nav={this.props.navigation} />

                        <Container>
                            <View style={main_body.styles.WhiteSpace}></View>
                            <View style={main_body.styles.WhiteSpace}></View>
                            <View style={[{ justifyContent: 'flex-end', alignItems: 'center' }]}>
                                <Image source={require("../resources/img/login_screen_image.png")} />
                            </View>
                        </Container>
                        <Container>
                            <View style={[{ justifyContent: 'flex-end', alignItems: 'center' }]}>
                                <TextInput style={style_theme.styles.input}
                                    placeholder={idPlaceholder}
                                    placeholderTextColor="rgba(0,0,0, 0.50)"
                                    underlineColorAndroid={'transparent'}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    onChangeText={(email) => this.setState({ email: email })} />

                                <TextInput style={[style_theme.styles.input, this.state.isForgotPassword ? { display: 'none' } : null]}
                                    placeholder={pwPlaceholder}
                                    placeholderTextColor="rgba(0,0,0, 0.50)"
                                    underlineColorAndroid={'transparent'}
                                    secureTextEntry
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    onChangeText={(password) => this.setState({ password: password })} />

                                <LoadingIndicator isLoading={this.state.isLoading} />

                                <TouchableOpacity style={[style_theme.styles.buttonBlueLogin, this.state.isForgotPassword ? { display: 'none' } : null]}
                                    onPress={this.login.bind(this)}>
                                    <Text style={[style_theme.styles.buttonBlueText, style_theme.styles.centeredText]}>LOGIN</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={style_login.styles.registerRedirect}
                                    onPress={this.registerRedirect}>
                                    <Text style={style_theme.styles.p}>Dont have account?</Text>
                                    <Text style={style_theme.styles.bold}> SIGN UP </Text>
                                </TouchableOpacity>
                            </View>

                            <LoadingIndicator isLoading={this.state.isLoading} />
                        </Container>


                    </Container>
                </KeyboardAwareScrollView>

            ) : null
        );


    }

    registerRedirect = () => {
        this.props.navigation
            .navigate('RegisterScreen', { onSuccess: this.setAuth });
    }

    setAuth = async (hashAuth) => {
        if (hashAuth) {
            try {
                await AsyncStorage.setItem('@userHashAuth:key', hashAuth);
                this.getAuth();
            } catch (error) {
                this.onError('Error saving hash');
            }
        } else {
            this.onError('Error saving hash');
        }
    }

    getAuth = async () => {
        try {
            const value = await AsyncStorage.getItem('@userHashAuth:key');
            console.log(value)
            if (value !== null) {
                this.checkAuth(value);
            }
        } catch (error) {
            this.onError('Error retrieving hash / empty');
        }
    }

    checkAuth = (value) => {
        this.setState({ isLoading: true });
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
                this.setState({ isLoading: false });
                if (!responseJson.error) {
                    this.props.navigation.navigate('Home', {
                        userData: responseJson.userData
                    });
                } else {
                    console.log(responseJson.error);
                }
            })
            .catch((error) => {
                console.log(error)
                this.setState({ isLoading: false });
                this.onError('Failed connect to server');
            });

    }

    login = async () => {
        Keyboard.dismiss();
        console.log("before if");
        if (
            this.state.email &&
            this.state.password
        ) {
            console.log("true, fetching user data");
            this.setState({ isLoading: true });
            return fetch(api.API_SERVER_URL + api.USER_LOGIN, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                }),
            })
                .then((response) => response.json())
                .then(async (responseJson) => {
                    this.setState({ isLoading: false });
                    if (!responseJson.error) {
                        // this.goBackEmailLogin(responseJson.session);
                        console.log(responseJson);
                        try {
                            await AsyncStorage.setItem('@userHashAuth:key', responseJson.session);
                            await AsyncStorage.setItem('@userData', JSON.stringify(responseJson.userData));
                            var ud = await AsyncStorage.getItem('@userData');
                            console.log("PRINTING UD: " + ud);
                            this.props.navigation.navigate('Home');
                        } catch (error) {
                            console.log(error);
                            this.onError('Error saving hash');

                        }
                    } else {
                        this.setState({ submissionError: responseJson.error });
                    }
                })
                .catch((error) => {
                    this.setState({ isLoading: false });
                    this.setState({ submissionError: error });
                });
        } else {
            this.setState({ submissionError: 'Please make sure you fill username and password fields' });
        }
        // this.props.navigator.navigate('CartScreen');
    }

}

const idPlaceholder = "Email";
const pwPlaceholder = "Password";
const newPwPlaceholder = "New Password";
const newPwcPlaceholder = "Confirm New Password";
const verifyCodePlaceholder = "Verify Code";