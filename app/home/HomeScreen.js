import React, { Component } from 'react';
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
    ScrollView
} from 'react-native';
import { AppLoading, Font } from 'expo';
import { Toast } from 'native-base';
import EatScreen from './EatScreen';
import DrinkScreen from './DrinkScreen';
import DoScreen from './DoScreen';
import CustomHeader from '../components/CustomHeader';

var style_theme = require('../stylesheets/theme');
var main_body = require('../stylesheets/mainBody');

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
        };
    }
    render() {
        return (

            
            <ScrollView style={style_theme.styles.scrollContainter}>

                <View style={main_body.styles.EatDrinkDoContainer}>
                    <Text style={style_theme.styles.EatDrinkDo}>Eat </Text>
                </View>

                <View style={main_body.styles.EatDrinkDoContainer}>
                    <Text style={style_theme.styles.EatDrinkDo}>Drink </Text>
                </View>

                <View style={main_body.styles.EatDrinkDoContainer}>
                    <Text style={style_theme.styles.EatDrinkDo}>Do </Text>
                </View>
            </ScrollView>
        );


    }
}