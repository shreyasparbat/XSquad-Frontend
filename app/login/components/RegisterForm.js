import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DatePicker from 'react-native-datepicker'

var api = require('../../../api');

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    Image,
    Keyboard
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import LoadingIndicator from '../../components/LoadingIndicator';
import { Toast } from 'native-base';

var style_theme = require('../../stylesheets/theme');
var style_register = require('../../stylesheets/registerScreen');
var v = require('../../stylesheets/variables');

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

            first_name: null,
            first_nameValid: null,
            first_nameErrorMessage: '',

            last_name: null,
            last_nameValid: null,
            last_nameErrorMessage: '',

            email: null,
            emailValid: null,
            emailErrorMessage: '',

            password: null,
            passwordValid: null,
            passwordErrorMessage: '',

            passwordc: null,
            passwordcValid: null,
            passwordcErrorMessage: '',

            submissionError: '',

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
            <KeyboardAwareScrollView>
                <View style={[style_theme.styles.wrapper, { width: v.WINDOW_WIDTH }]}>
                    <Text style={[style_theme.styles.h1, { paddingVertical: 20 }]}>Register a new account</Text>

                    {/* First Name */}
                    <Text style={[
                        style_theme.styles.p,
                        style_register.styles.errorMessage,
                        (this.state.first_nameValid !== false) ? style_register.styles.hidden : null
                    ]}>
                        {this.state.first_nameErrorMessage}
                    </Text>

                    <TextInput style={style_theme.styles.input}
                        placeholder={first_namePlaceholder}
                        placeholderTextColor="rgba(0,0,0, 0.50)"
                        underlineColorAndroid={'transparent'}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={this.state.name}
                        onChangeText={(text) => this.setState({ first_name: text })}
                        onBlur={(text) => this.handleInput(this.state.first_name, 'first_name')}
                    />

                    {/* Last Name */}
                    <Text style={[
                        style_theme.styles.p,
                        style_register.styles.errorMessage,
                        (this.state.last_nameValid !== false) ? style_register.styles.hidden : null
                    ]}>
                        {this.state.lastErrorMessage}
                    </Text>

                    <TextInput style={style_theme.styles.input}
                        placeholder={last_namePlaceholder}
                        placeholderTextColor="rgba(0,0,0, 0.50)"
                        underlineColorAndroid={'transparent'}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={this.state.name}
                        onChangeText={(text) => this.setState({ last_name: text })}
                        onBlur={(text) => this.handleInput(this.state.last_name, 'last_name')}
                    />

                    {/* Email Address */}
                    <Text style={[
                        style_theme.styles.p,
                        style_register.styles.errorMessage,
                        (this.state.emailValid !== false) ? style_register.styles.hidden : null
                    ]}>
                        {this.state.emailErrorMessage}
                    </Text>

                    <TextInput style={style_theme.styles.input}
                        placeholder={idPlaceholder}
                        placeholderTextColor="rgba(0,0,0, 0.50)"
                        underlineColorAndroid={'transparent'}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={this.state.email}
                        onChangeText={(text) => this.setState({ email: text })}
                        onBlur={(text) => this.handleInput(this.state.email, 'email')}
                    />


                    {/* Password */}
                    <Text style={[style_theme.styles.p, { paddingVertical: 20 }]}>
                        Password must:{"\n"}
                        be at least 8 characters long,{"\n"}
                        have 1 upper and lower case character,{"\n"}
                        1 number and 1 special character</Text>

                    <Text style={[
                        style_theme.styles.p,
                        style_register.styles.errorMessage,
                        (this.state.passwordValid !== false) ? style_register.styles.hidden : null
                    ]}>
                        {this.state.passwordErrorMessage}
                    </Text>

                    <TextInput style={style_theme.styles.input} // password
                        placeholder={pwPlaceholder}
                        placeholderTextColor="rgba(0,0,0, 0.50)"
                        underlineColorAndroid={'transparent'}
                        secureTextEntry
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={this.state.password}
                        onChangeText={(text) => this.setState({ password: text })}
                        onBlur={(text) => this.handleInput(this.state.password, 'password')}
                    />

                    {/* Password Confirmation */}
                    <Text style={[
                        style_theme.styles.p,
                        style_register.styles.errorMessage,
                        (this.state.passwordcValid !== false) ? style_register.styles.hidden : null
                    ]}>
                        {this.state.passwordcErrorMessage}
                    </Text>

                    <TextInput style={style_theme.styles.input} // passwordc
                        placeholder={pwcPlaceholder}
                        placeholderTextColor="rgba(0,0,0, 0.50)"
                        underlineColorAndroid={'transparent'}
                        secureTextEntry
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={this.state.passwordc}
                        onChangeText={(text) => this.setState({ passwordc: text })}
                        onBlur={(text) => this.handleInput(this.state.passwordc, 'passwordc')}
                    />

                    {/* Submit Button */}
                    <Text style={[style_theme.styles.p, style_register.styles.errorMessage]}>{this.state.submissionError}</Text>
                    <TouchableOpacity style={style_theme.styles.buttonBlueLogin}
                        onPress={this.handleSubmit} >

                        <Text style={style_theme.styles.buttonText}>Register</Text>
                    </TouchableOpacity>

                    <LoadingIndicator isLoading={this.state.isLoading} />

                </View>
            </KeyboardAwareScrollView>
        );
    }

    handleInput(text, field) {
        switch (field) {
            case 'first_name':
                if (/[A-z]+/.test(text)) {
                    this.setState({
                        first_nameValid: true,
                        first_nameErrorMessage: ''
                    });
                } else {
                    this.setState({
                        first_nameValid: false,
                        nameErrorMessage: "Please write your full name",
                        //first_nameErrorMessage: this.state.first_name
                    });
                }
                break;
            case 'last_name':
                if (/[A-z]+/.test(text)) {
                    this.setState({
                        last_nameValid: true,
                        last_nameErrorMessage: ''

                    });
                } else {
                    this.setState({
                        last_nameValid: false,
                        nameErrorMessage: "Please write your full name",
                        //last_nameErrorMessage: this.state.last_name
                    });
                }
                break;
            case 'email':
                if (/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,})+)$/.test(text)) {
                    this.setState({
                        emailValid: true,
                        emailErrorMessage: '',
                    });
                } else {
                    this.setState({
                        emailValid: false,
                        emailErrorMessage: "Please use a valid email address",
                        //emailErrorMessage: this.state.email
                    });
                }
                break;
            /*  case 'mobileNumber':
                 if (/\d{8}/.test(text)) {
                     this.setState({
                         mobileValid: true,
                         mobileErrorMessage: ''
                     });
                 } else {
                     this.setState({
                         mobileValid: false,
                         mobileErrorMessage: "Please use a valid Phone Number",
                         //mobileErrorMessage: this.state.mobile
                     });
                 }
                 break; */
            case 'password':
                if (/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(text)) { // 8 chars, 1 number, 1 Uppercase, 1 lower, 1 special and the blood of a virgin
                    this.setState({
                        passwordValid: true,
                        passwordErrorMessage: ''

                    });

                } else {
                    this.setState({
                        passwordValid: false,
                        passwordErrorMessage: "Does not fufill password requirements!",
                        //passwordErrorMessage: this.state.password
                    });
                }
                break;
            case 'passwordc':
                if (this.state.password === text) {
                    this.setState({
                        passwordcValid: true,
                        passwordcErrorMessage: ''
                    });
                } else {
                    this.setState({
                        passwordcValid: false,
                        passwordcErrorMessage: "Passwords do not match. Try again? ",
                        //passwordcErrorMessage: this.state.passwordc
                    });
                }
                break;
            case 'dob':
                this.setState({ dob: text, }, () => {
                    if (text != null) {
                        var year = text.toString();
                        year = year.substr(6, 4);
                        year = parseInt(year);
                    }
                    if (year < 2018) { // TODO: set dob check
                        this.setState({
                            dobValid: true,
                            dobErrorMessage: '',

                        });
                    } else {
                        this.setState({
                            dobValid: false,
                            dobErrorMessage: "Please select a proper date"
                            // dobErrorMessage: this.state.dob
                        });

                    }
                });
                break;
            default:
                break;
        }

    }

    handleSubmit = async () => {
        // check all fields
        Keyboard.dismiss();
        if (
            this.state.first_nameValid &&
            this.state.last_nameValid &&
            this.state.emailValid &&
            //this.state.mobileNumberValid &&
            this.state.passwordValid &&
            this.state.passwordcValid
        ) {

            this.setState({ submissionError: '' });
            this.setState({ isLoading: false });
            // SUBMIT TO DATABASE
            return await fetch(api.API_SERVER_URL + api.CREATE_USER_ACCOUNT, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    email: this.state.email,
                    password: this.state.password,
                }),
            })
                .then((response) => response.json())
                .then((responseJson) => {

                    this.setState({ isLoading: false });
                    // this.props.action(responseJson.session);
                    if (!responseJson.error) {
                        try {
                            AsyncStorage.setItem('@userHashAuth:key', responseJson.session);

                            this.props.navigator.navigate('Home', {
                                userData: responseJson.userData
                            });
                        } catch (error) {
                            this.onError('Error saving hash');
                        }
                    } else {
                        this.onError(responseJson.error);
                    }

                })
                .catch((error) => {
                    this.setState({ isLoading: false });
                    this.setState({ submissionError: error });
                });


        } else {
            this.setState({ submissionError: 'Please fill in all fields' });
            /*             this.setState({
                            submissionError:
                                ' FNAME: ' + this.state.first_nameValid +
                                ' LNAME: ' + this.state.last_nameValid +
                                ' EMAIL: ' + this.state.emailValid +
                                //' DOB: ' + this.state.dobValid +
                                ' PHONE: ' + this.state.mobileNumberValid +
                                ' PASSW: ' + this.state.passwordValid +
                                ' PASSC: ' + this.state.passwordcValid
                        }); */
        }
    }

}

const first_namePlaceholder = "First Name";
const last_namePlaceholder = "Last Name";
const idPlaceholder = "Email address";
const mobilePlaceholder = "Mobile No.";
const pwPlaceholder = "Password";
const pwcPlaceholder = "Confirm Password";
const mobileNumberPlaceholder = "Mobile no./ Telegram user"