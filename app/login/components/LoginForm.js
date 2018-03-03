import React, { Component } from 'react';
import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    Keyboard
  } from 'react-native';
import { NavigationActions } from 'react-navigation';
import LoadingIndicator from '../../components/LoadingIndicator';

var api = require('../../../api');

var style_theme = require('../../stylesheets/theme');
var style_login = require('../../stylesheets/loginScreen');

import { Toast } from 'native-base';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoading: false,
            isForgotPassword: false,
            createNewPassword: false,
            verifyCode: ''
        }
    }

    onError(errMsg) {
        Toast.show({
            text: errMsg,
            position: 'bottom',
            buttonText: 'Okay'
          })
    }

    render(){
        if(!this.state.createNewPassword){
            return(
                <View style={[{justifyContent: 'flex-end', alignItems: 'center', marginBottom: 50}]}>
                    <TextInput style={style_theme.styles.input} 
                    placeholder={idPlaceholder}
                    placeholderTextColor="rgba(0,0,0, 0.50)"
                    underlineColorAndroid={'transparent'}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    
                    onChangeText={ (username) => this.setState({username}) }/>

                    <TextInput style={[style_theme.styles.input, this.state.isForgotPassword? {display: 'none'} : null]} 
                    placeholder={pwPlaceholder}
                    placeholderTextColor="rgba(0,0,0, 0.50)"
                    underlineColorAndroid={'transparent'}
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}

                    onChangeText={(password) => this.setState({ password})}/>

                    <Text style={[style_theme.styles.p, styles.errorMessage]}>{this.state.submissionError}</Text>

                    <TouchableOpacity style={[style_theme.styles.buttonCentered, this.state.isForgotPassword? {display: 'none'}:null]}
                        onPress={this.login}>
                        <Text style={[style_theme.styles.buttonText, style_theme.styles.centeredText]}>LOG IN</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[style_theme.styles.buttonCentered, !this.state.isForgotPassword? {display: 'none'}:null]}
                        onPress={this.resetPassword}>
                        <Text style={styles.buttonText}>Send Reset Verification Code</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity style={[styles.registerRedirect, this.state.isForgotPassword? null:{display: 'none'}]}
                        onPress={this.createNewPassword}>
                        <Text style={styles.buttonText}>Has Reset Verify Code?</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.forgotPassword}
                        onPress={this.forgotPassword}>
                        <Text style={style_theme.styles.p}>{this.state.isForgotPassword? 'Back to login': 'Forgot Password? Reset now'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.registerRedirect, !this.state.isForgotPassword? null:{display: 'none'}]}
                        onPress={this.registerRedirect}>
                        <Text style={style_theme.styles.p}>New User? Sign up here</Text>
                    </TouchableOpacity>
                    
                    <LoadingIndicator isLoading={this.state.isLoading}/>
                </View>
            );
        }else{
            return(
                <View style={[{justifyContent: 'flex-end', alignItems: 'center', marginBottom: 50}]}>

                    <TextInput style={style_theme.styles.input} 
                    placeholder={verifyCodePlaceholder}
                    placeholderTextColor="rgba(0,0,0, 0.50)"
                    underlineColorAndroid={'transparent'}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={this.state.verifyCode}
                    onChangeText={ (verifyCode) => this.setState({verifyCode}) }/>

                    <Text style={[ 
                        style_theme.styles.p,
                        styles.errorMessage, 
                        ( !this.state.newpasswordErrorMessage ) ? {display: 'none'} : null 
                    ]}>
                        {this.state.newpasswordErrorMessage}
                    </Text>

                    <TextInput style={style_theme.styles.input} 
                    placeholder={newPwPlaceholder}
                    placeholderTextColor="rgba(0,0,0, 0.50)"
                    underlineColorAndroid={'transparent'}
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={this.state.newPassword}
                    onChangeText={ (newPassword) => this.setState({newPassword}) }
                    onBlur={(text) => this.handleInput(this.state.newPassword, 'newPassword')}/>

                    <Text style={[ 
                        style_theme.styles.p,
                        styles.errorMessage, 
                        ( !this.state.newpasswordcErrorMessage )? {display: 'none'} : null 
                    ]}>
                        {this.state.newpasswordcErrorMessage}
                    </Text>

                    <TextInput style={[style_theme.styles.input]} 
                    placeholder={newPwcPlaceholder}
                    placeholderTextColor="rgba(0,0,0, 0.50)"
                    underlineColorAndroid={'transparent'}
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={this.state.newCPassword}
                    onChangeText={(newCPassword) => this.setState({ newCPassword})}
                    onBlur={(text) => this.handleInput(this.state.newCPassword, 'newCPassword')}/>
                    
                    <Text style={[style_theme.styles.p, styles.errorMessage]}>{this.state.submissionError}</Text>

                    <TouchableOpacity style={[style_theme.styles.buttonCentered]}
                        onPress={this.submitNewPassword}>
                        <Text style={styles.buttonText}>Create New Password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.forgotPassword}
                        onPress={this.backtoLogin}>
                        <Text style={styles.buttonText}>Back to login</Text>
                    </TouchableOpacity>
                    <LoadingIndicator isLoading={this.state.isLoading}/>
                    
                </View>
                
            )
        }

    }

    forgotPassword = () => {
        this.setState({isForgotPassword: !this.state.isForgotPassword});
    }

    submitNewPassword = () => {
        Keyboard.dismiss();
        if(
            this.state.newPassword && 
            this.state.newCPassword &&
            this.state.verifyCode
        ) {
            this.setState({isLoading: true});
            return fetch(api.API_SERVER_URL + api.PASSWORD_RESET_URL, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    forgot_password_code: this.state.verifyCode,
                    password: this.state.newPassword
                }),
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({isLoading: false});
                if(!responseJson.error){
                    // this.goBackEmailLogin(responseJson.session);
                    this.backtoLogin();
                }else{
                    this.setState({submissionError: responseJson.error});
                }
            })
            .catch((error) => {
                this.setState({isLoading: false});
                this.setState({submissionError: error});
            });
        }else{
            this.setState({submissionError: 'Please make sure you fill username and password fields'});
        }

    }

    handleInput(text,field){
        console.log(text + '  ' +field);
        switch(field) {
            case 'newPassword':
                if(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(text)) { // 8 chars, 1 number, 1 Uppercase, 1 lower, 1 special and the blood of a virgin
                    this.setState({ 
                        newpasswordValid: true,
                        newpasswordErrorMessage: ''

                    });

                } else {
                    this.setState({
                        newpasswordValid: false,
                        newpasswordErrorMessage: "New Password must be 8 characters long, have 1 upper and lower case character, 1 number and 1 special character",
                        //passwordErrorMessage: this.state.password
                    });
                }
                break;
            case 'newCPassword':
                if(this.state.newPassword === text) {
                    this.setState({ 
                        newpasswordcValid: true,
                        newpasswordcErrorMessage: ''
                    });
                } else {
                    this.setState({
                        newpasswordcValid: false,
                        newpasswordcErrorMessage: "New Passwords do not match. Try again? ",
                        //passwordcErrorMessage: this.state.passwordc
                    });
                }
                break;
            default:
                break;
        }

    }

    backtoLogin = () => {
        this.setState({submissionError: ''});
        this.setState({isForgotPassword: false});
        this.setState({createNewPassword: false});
    }

    createNewPassword = () => {
        this.setState({submissionError: ''});
        this.setState({createNewPassword: !this.state.createNewPassword});
    }

    login = async () => {
        Keyboard.dismiss();
        if(
            this.state.username && 
            this.state.password
        ) {
            this.setState({isLoading: true});
            return fetch(api.API_SERVER_URL + api.LOGIN_URL, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                }),
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({isLoading: false});
                if(!responseJson.error){
                    // this.goBackEmailLogin(responseJson.session);
                    try {
                        AsyncStorage.setItem('@userHashAuth:key', responseJson.session);
                        
                        this.props.navigator.navigate('Home', {
                            userData: responseJson.userData
                        });
                    } catch (error) {
                        this.onError('Error saving hash');
                    }
                }else{
                    this.setState({submissionError: responseJson.error});
                }
            })
            .catch((error) => {
                this.setState({isLoading: false});
                this.setState({submissionError: error});
            });
        }else{
            this.setState({submissionError: 'Please make sure you fill username and password fields'});
        }
        // this.props.navigator.navigate('CartScreen');
    }

    resetPassword = () => {
        Keyboard.dismiss();
        if(
            this.state.username
        ) {
            this.setState({isLoading: true});
            return fetch(api.API_SERVER_URL + api.FORGET_PASSWORD_RESET_URL, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.username
                }),
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({isLoading: false});
                if(!responseJson.error){
                    // this.setState({submissionError: responseJson.message});
                    this.createNewPassword();
                }else{
                    this.setState({submissionError: responseJson.error});
                }
            })
            .catch((error) => {
                this.setState({isLoading: false});
                this.onError(error);
                this.setState({submissionError: error});
            });
        }else{
            this.setState({submissionError: 'Please make sure you fill your email'});
        }
        //this.props.navigator.navigate('CartScreen');
    }

    registerRedirect = () => {
        this.props.navigator.navigate('RegisterScreen');
    }

    // goBackEmailLogin = (data) => {
    //     this.props.navigator.state.params.onSuccess(data);
    //     this.props.navigator.goBack();
    // }

    
}

const styles = StyleSheet.create({

    forgotPassword: {
        marginTop: 10,
        marginBottom: 10,
    },
    
    registerRedirect: {
        marginTop: 10,
    },

    errorMessage: {
        color: 'red',
        marginBottom: 20,
        width: 250
    },
});

const idPlaceholder = "Email";
const pwPlaceholder = "Password";
const newPwPlaceholder = "New Password";
const newPwcPlaceholder = "Confirm New Password";
const verifyCodePlaceholder = "Verify Code";