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
import { Icon, Container, Content, Left, Right, List, ListItem, Button, connectStyle, Footer, Toast } from 'native-base';
import EatScreen from './EatScreen';
import DrinkScreen from './DrinkScreen';
import DoScreen from './DoScreen';
import CustomHeader from '../components/CustomHeader';
var style_theme = require('../stylesheets/theme');
var main_body = require('../stylesheets/mainBody');

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
        };
    }

    render() {
        return (

            <Container style={style_theme.styles.scrollContainter}>
                <CustomHeader menu='yes' nav={this.props.navigation} />
                <View style={main_body.styles.SpotOfTheWeek}></View>

                <View style={main_body.styles.SpotOfTheWeek}>
                    <Image source={require("../resources/img/Sub-Header.png")} />
                </View>

            </Container>

        );
    }
}