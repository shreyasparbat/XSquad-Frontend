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
        const { navigate } = this.props.navigation;

        return (

            <Container>
                <View style={main_body.styles.WhiteSpace}></View>
                <CustomHeader menu='yes' nav={this.props.navigation} />
                <Container style={style_theme.styles.scrollContainter}>
                    <View style={main_body.styles.ChooseSomething}>
                        <Text style={main_body.styles.chooseSomethingFont}>Choose something to do</Text>
                    </View>

                    <Container>
                        <View style={main_body.styles.SpotOfTheWeek}>
                            <Text style={main_body.styles.SpotOfTheWeekFont}>Activity of the week</Text>
                        </View>
                        <View>
                            <Image style={main_body.styles.ActivityImage} source={require("../resources/img/singapore-zam-zam-restaurant.jpg")} />
                        </View>
                        <View>
                            <TouchableOpacity style={main_body.styles.goButton} onPress={() => navigate('EatScreen')}>
                                <Text style={[main_body.styles.buttonText]}>Go</Text>
                            </TouchableOpacity>
                        </View>
                    </Container>

                    {/* <Container>
                        <View style={main_body.styles.SpotOfTheWeek}>
                            <Text style={main_body.styles.SpotOfTheWeekFont}>Drink spot of the week </Text>
                        </View>
                        <View>
                            <Image style={main_body.styles.ActivityImage} source={require("../resources/img/Smoobar.jpg")} />
                        </View>
                        <View>
                            <TouchableOpacity style={main_body.styles.goButton} onPress={() => navigate('DrinkScreen')}>
                                <Text style={[main_body.styles.buttonText]}>Go</Text>
                            </TouchableOpacity>
                        </View>
                    </Container>

                    <Container>
                        <View style={main_body.styles.SpotOfTheWeek}>
                            <Text style={main_body.styles.SpotOfTheWeekFont}>Activity of the week</Text>
                        </View>
                        <View>
                            <Image style={main_body.styles.ActivityImage} source={require("../resources/img/ecpstraitstimes.jpg")} />
                        </View>
                        <View>
                            <TouchableOpacity style={main_body.styles.goButton} onPress={() => navigate('DoScreen')}>
                                <Text style={[main_body.styles.buttonText]}>Go</Text>
                            </TouchableOpacity>
                        </View>
                    </Container> */}

                </Container>
            </Container>

        );
    }
}