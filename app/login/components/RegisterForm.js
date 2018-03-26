import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DatePicker from 'react-native-datepicker'
import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';

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

            firstname: null,
            firstnameValid: null,
            firstnameErrorMessage: '',

            lastname: null,
            lastnameValid: null,
            lastnameErrorMessage: '',

            email: null,
            emailValid: null,
            emailErrorMessage: '',

            password: null,
            passwordValid: null,
            passwordErrorMessage: '',

            passwordc: null,
            passwordcValid: null,
            passwordcErrorMessage: '',


            mobileNumber: null,
            mobileNumberValid: null,
            mobileNumberErrorMessage: '',

            gender: 1,

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
                        (this.state.firstnameValid !== false) ? style_register.styles.hidden : null
                    ]}>
                        {this.state.firstnameErrorMessage}
                    </Text>

                    <TextInput style={style_theme.styles.input}
                        placeholder={firstnamePlaceholder}
                        placeholderTextColor="rgba(0,0,0, 0.50)"
                        underlineColorAndroid={'transparent'}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={this.state.name}
                        onChangeText={(text) => this.setState({ firstname: text })}
                        onBlur={(text) => this.handleInput(this.state.firstname, 'firstname')}
                    />

                    {/* Last Name */}
                    <Text style={[
                        style_theme.styles.p,
                        style_register.styles.errorMessage,
                        (this.state.lastnameValid !== false) ? style_register.styles.hidden : null
                    ]}>
                        {this.state.lastErrorMessage}
                    </Text>

                    <TextInput style={style_theme.styles.input}
                        placeholder={lastnamePlaceholder}
                        placeholderTextColor="rgba(0,0,0, 0.50)"
                        underlineColorAndroid={'transparent'}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={this.state.name}
                        onChangeText={(text) => this.setState({ lastname: text })}
                        onBlur={(text) => this.handleInput(this.state.lastname, 'lastname')}
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

                    {/* Mobile Number*/}
                    <Text style={[
                        style_theme.styles.p,
                        style_register.styles.errorMessage,
                        (this.state.mobileNumberValid !== false) ? style_register.styles.hidden : null
                    ]}>
                        {this.state.mobileNumberErrorMessage}
                    </Text>

                    <TextInput style={style_theme.styles.input}
                        placeholder={mobileNumberPlaceholder}
                        placeholderTextColor="rgba(0,0,0, 0.50)"
                        underlineColorAndroid={'transparent'}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={this.state.name}
                        onChangeText={(text) => this.setState({ mobileNumber: text })}
                        onBlur={(text) => this.handleInput(this.state.mobileNumber, 'mobileNumber')}
                    />



                    {/* Gender */}
                    <Text style={style_theme.styles.p}>Select your Gender</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>

                        <TouchableOpacity style={[
                            style_theme.styles.buttonCentered,
                            { width: v.BUTTON_WIDTH / 2 - 15, marginRight: 30 },
                            this.state.gender === 1 ? style_register.styles.selected : style_register.styles.deselected,
                        ]}
                            onPress={this.selectMale}>
                            <Text style={[style_theme.styles.buttonText, style_theme.styles.centeredText]}>Male</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[
                            style_theme.styles.buttonCentered,
                            { width: v.BUTTON_WIDTH / 2 - 15 },
                            this.state.gender === 0 ? style_register.styles.selected : style_register.styles.deselected,
                        ]}
                            onPress={this.selectFemale}>
                            <Text style={[style_theme.styles.buttonText, style_theme.styles.centeredText]}>Female</Text>
                        </TouchableOpacity>
                    </View>

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
                    <TouchableOpacity style={style_theme.styles.button}
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
            case 'firstname':
                if (/[A-z]+/.test(text)) {
                    this.setState({
                        firstnameValid: true,
                        firstnameErrorMessage: ''
                    });
                } else {
                    this.setState({
                        firstnameValid: false,
                        nameErrorMessage: "Please write your full name",
                        //firstnameErrorMessage: this.state.firstname
                    });
                }
                break;
            case 'lastname':
                if (/[A-z]+/.test(text)) {
                    this.setState({
                        lastnameValid: true,
                        lastnameErrorMessage: ''

                    });
                } else {
                    this.setState({
                        lastnameValid: false,
                        nameErrorMessage: "Please write your full name",
                        //lastnameErrorMessage: this.state.lastname
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

    selectMale = () => {
        this.setState({ gender: 1 });
    }

    selectFemale = () => {
        this.setState({ gender: 0 });
    }

    handleSubmit = async () => {
        // check all fields
        Keyboard.dismiss();
        if (this.state.dob != null) {
            this.state.dobValid = true;
        }
        if (
            this.state.firstnameValid &&
            this.state.lastnameValid &&
            this.state.emailValid &&
            this.state.dobValid &&
            this.state.mobileValid &&
            this.state.passwordValid &&
            this.state.passwordcValid
        ) {

            this.setState({ submissionError: '' });
            this.setState({ isLoading: false });
            // SUBMIT TO DATABASE
            return await fetch(api.API_SERVER_URL + api.CREATE_SHOPPER_ACCOUNT_URL, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    email: this.state.email,
                    password: this.state.password,
                    date_of_birth: this.state.dob.split("/").reverse().join("-"), //format date correctly for API
                    mobile_no: this.state.mobile,
                    gender: this.state.gender,
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
            // this.setState({submissionError: 
            //     ' FNAME: ' + this.state.firstnameValid + 
            //     ' LNAME: ' + this.state.lastnameValid + 
            //     ' EMAIL: ' + this.state.emailValid +
            //     ' DOB: ' + this.state.dobValid +
            //     ' PHONE: ' + this.state.mobileValid + 
            //     ' PASSW: ' + this.state.passwordValid +
            //     ' PASSC: ' + this.state.passwordcValid
            // });
        }
    }

}

const firstnamePlaceholder = "First Name";
const lastnamePlaceholder = "Last Name";
const idPlaceholder = "Email address";
const mobilePlaceholder = "Mobile No.";
const pwPlaceholder = "Password";
const pwcPlaceholder = "Confirm Password";
const mobileNumberPlaceholder = "Mobile no./Telegram user"