import React, { Component } from 'react';
import { Platform, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, AsyncStorage, Alert, BackHandler, } from 'react-native';
import { AppLoading, Font } from 'expo';
import { Toast } from 'native-base';


var style_theme = require('../stylesheets/theme');
var main_body = require('../stylesheets/mainBody');

export default class DrinkScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
        };
    }
}