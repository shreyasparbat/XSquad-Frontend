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

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
        };
    }
    render() {
        return (

            <Container>
                <View style={main_body.styles.WhiteSpace}></View>
                <CustomHeader menu='yes' nav={this.props.navigation} />

                <Container style={style_theme.styles.scrollContainter}>
                    <View style={main_body.styles.WhiteSpace}></View>
                    <View style={main_body.styles.ChooseSomething}>
                        <Text style={main_body.styles.chooseSomethingFont}>Choose something to do</Text>
                    </View>
                    <View style={main_body.styles.WhiteSpace}></View>

                    <Container>
                        <View style={main_body.styles.SpotOfTheWeek}>
                            <Text style={style_theme.styles.SpotOfTheWeekFont}>Food spot of the week</Text>
                        </View>
                        <View style={main_body.styles.EatDrinkDoContainer}>
                            <Image style={main_body.styles.ActivityImage} source={require("../resources/img/ZamZam.png")} />

                        </View>
                        <View style={main_body.styles.WhiteSpace}></View>
                        <View style={main_body.styles.WhiteSpace}></View>
                    </Container>

                    <Container>
                        <View style={main_body.styles.SpotOfTheWeek}>
                            <Text style={style_theme.styles.SpotOfTheWeekFont}>Drink spot of the week </Text>
                        </View>
                        <View style={main_body.styles.EatDrinkDoContainer}>
                            <Image style={main_body.styles.ActivityImage} source={require("../resources/img/SmooBar.png")} />
                        </View>
                        <View style={main_body.styles.WhiteSpace}></View>
                        <View style={main_body.styles.WhiteSpace}></View>
                    </Container>

                    <Container>
                        <View style={main_body.styles.SpotOfTheWeek}>
                            <Text style={style_theme.styles.SpotOfTheWeekFont}>Activity of the week</Text>
                        </View>
                        <View style={main_body.styles.EatDrinkDoContainer}>
                            <Image style={main_body.styles.ActivityImage} source={require("../resources/img/EastCoastParkCycling.png")} />
                        </View>
                        <View style={main_body.styles.WhiteSpace}></View>
                        <View style={main_body.styles.WhiteSpace}></View>
                    </Container>
                </Container>




            </Container>

        );
    }
}